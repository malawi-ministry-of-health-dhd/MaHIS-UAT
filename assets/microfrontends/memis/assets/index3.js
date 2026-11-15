import { L as LocalForageService } from './LocalForageService.js';

const MEMIS_STORAGE_KEYS = [
  "memisAuthData",
  "memisAuthPending",
  "memisCredentials",
  "memisViewSettings",
  "memis_events_endpoint_v4",
  "memis_events_endpoint_v4_oumode",
  "memis_reminders_autostart",
  "memis_reminders_debug",
  "memis_reminders_dedup_v1",
  "dataStore",
  "notificationConfigurations",
  "qrCodesConfig",
];

const MEMIS_COOKIE_NAMES = ["memis_cookie"];

const isMemisStorageKey = (key) =>
  key.toLowerCase().includes("memis") ||
  key.startsWith("localforage/memiscache/") ||
  MEMIS_STORAGE_KEYS.includes(key);

const removeMatchingStorageKeys = (storage) => {
  Object.keys(storage).forEach((key) => {
    if (isMemisStorageKey(key)) {
      storage.removeItem(key);
    }
  });

  MEMIS_STORAGE_KEYS.forEach((key) => storage.removeItem(key));
};

const clearCookie = (name) => {
  ["/", "/memis"].forEach((path) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path};`;
  });
};

const deleteIndexedDb = (name) =>
  new Promise((resolve) => {
    const request = indexedDB.deleteDatabase(name);
    request.onsuccess = () => resolve();
    request.onerror = () => resolve();
    request.onblocked = () => resolve();
  });

const clearIndexedDbStores = (name) =>
  new Promise((resolve) => {
    const request = indexedDB.open(name);

    request.onerror = () => resolve();
    request.onupgradeneeded = () => {
      request.transaction?.abort();
      resolve();
    };
    request.onsuccess = () => {
      const db = request.result;
      const storeNames = Array.from(db.objectStoreNames);

      if (!storeNames.length) {
        db.close();
        resolve();
        return;
      }

      const transaction = db.transaction(storeNames, "readwrite");
      storeNames.forEach((storeName) => transaction.objectStore(storeName).clear());
      transaction.oncomplete = () => {
        db.close();
        resolve();
      };
      transaction.onerror = () => {
        db.close();
        resolve();
      };
      transaction.onabort = () => {
        db.close();
        resolve();
      };
    };
  });

async function clearMemisStorage() {
  const databaseNames = new Set(["memiscache"]);

  if (indexedDB.databases) {
    const databases = await indexedDB.databases();
    databases.forEach((db) => {
      if (db.name?.toLowerCase().includes("memis")) {
        databaseNames.add(db.name);
      }
    });
  }

  await Promise.all(Array.from(databaseNames).map(clearIndexedDbStores));
  await Promise.all(Array.from(databaseNames).map(deleteIndexedDb));
  removeMatchingStorageKeys(localStorage);
  removeMatchingStorageKeys(sessionStorage);
  MEMIS_COOKIE_NAMES.forEach(clearCookie);
}

const SESSION_STORAGE_KEY = "memisSession";
const CREDENTIALS_STORAGE_KEY = "memisCredentials";
class DataStore {
  constructor() {
    this.defaultCredentials = this.getSavedCredentials();
    this.sessionToken = this.getSavedSessionToken();
    this.baseUrl = "https://memis.health.gov.mw/api-testing";
  }
  getSavedCredentials() {
    try {
      const saved = localStorage.getItem(CREDENTIALS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }
  getSavedSessionToken() {
    try {
      const saved = localStorage.getItem(SESSION_STORAGE_KEY);
      return saved ? JSON.parse(saved)?.token || null : null;
    } catch {
      return null;
    }
  }
  buildUrl(endpoint) {
    const base = this.baseUrl.replace(/\/+$/, "");
    const path = String(endpoint || "").replace(/^\/+/, "");
    return `${base}/memis/${path}`;
  }
  loginBuildUrl(endpoint) {
    const base = this.baseUrl.replace(/\/+$/, "");
    const path = String(endpoint || "").replace(/^\/+/, "");
    return `${base}/${path}`;
  }
  saveSession(credentials, session) {
    this.defaultCredentials = credentials;
    this.sessionToken = session.token;
    localStorage.setItem(
      CREDENTIALS_STORAGE_KEY,
      JSON.stringify(credentials)
    );
    localStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify({
        token: session.token,
        expiresAt: Date.now() + session.expiresIn * 1e3,
        user: session.user
      })
    );
  }
  clearSession() {
    this.defaultCredentials = null;
    this.sessionToken = null;
    localStorage.removeItem(CREDENTIALS_STORAGE_KEY);
    localStorage.removeItem(SESSION_STORAGE_KEY);
  }
  async getAuth() {
    const { username, password } = this.defaultCredentials || {};
    if (!username || !password) {
      throw new Error("Authentication credentials are missing");
    }
    return { username, password };
  }
  async getHeaders(credentials, data, { includeSession = true } = {}) {
    const authCredentials = credentials || await this.getAuth();
    const { username, password } = authCredentials;
    if (!username || !password) {
      throw new Error("Authentication credentials are missing.");
    }
    const encoded = btoa(`${username}:${password}`);
    const headers = {
      Authorization: `Basic ${encoded}`,
      Accept: "application/json"
    };
    if (!(data instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }
    if (includeSession) {
      const savedSession = localStorage.getItem("memisSession");
      if (!savedSession) {
        throw new Error("Your session has expired. Please log in again.");
      }
      let session;
      try {
        session = JSON.parse(savedSession);
      } catch {
        localStorage.removeItem("memisSession");
        throw new Error("Invalid session. Please log in again.");
      }
      if (!session.token || !session.expiresAt || Date.now() >= session.expiresAt) {
        localStorage.removeItem("memisSession");
        throw new Error("Your session has expired. Please log in again.");
      }
      headers["X-App-Session"] = session.token;
    }
    return headers;
  }
  getSavedSession() {
    try {
      const saved = localStorage.getItem(SESSION_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }
  async switchUser(credentials) {
    try {
      const { username, password } = credentials || {};
      if (!username || !password) {
        return {
          status: 400,
          message: "Username and password are required."
        };
      }
      const session = await this.login("/auth/login", credentials, {});
      if (!session?.token) {
        return {
          status: session?.status || 401,
          message: session?.message || "Login failed"
        };
      }
      this.saveSession(credentials, session);
      const endpoint = "me?fields=id,username,surname,teiSearchOrganisationUnits,firstName,userGroups[id,name],userRoles[id,name],authorities[*],dataViewOrganisationUnits,organisationUnits[id,name,level,parent[id,name,level,parent[id,name,level]]]";
      const profileResponse = await this.get(endpoint);
      if (profileResponse.status < 200 || profileResponse.status >= 300) {
        return profileResponse;
      }
      return {
        status: profileResponse.status,
        statusText: profileResponse.statusText,
        data: profileResponse.data
      };
    } catch (error) {
      return {
        status: error?.status || 500,
        message: error?.message || "Login failed"
      };
    }
  }
  async createAuthConfig({ data = {}, params = {} } = {}) {
    const auth = await this.getAuth();
    const headers = await this.getHeaders(auth, data);
    return {
      headers,
      params: params || {}
    };
  }
  async request(method, endpoint, data = {}, options = {}) {
    const { params = {} } = options;
    try {
      const config = await this.createAuthConfig({ data, params });
      const url = new URL(this.buildUrl(endpoint));
      Object.keys(config.params).forEach((key) => {
        const value = config.params[key];
        if (value !== void 0 && value !== null) {
          if (Array.isArray(value)) {
            value.forEach((item) => url.searchParams.append(key, item));
          } else {
            url.searchParams.append(key, value);
          }
        }
      });
      const upperMethod = method.toUpperCase();
      const fetchOptions = {
        method: upperMethod,
        headers: config.headers
      };
      if (!["GET", "HEAD"].includes(upperMethod)) {
        fetchOptions.body = data instanceof FormData ? data : JSON.stringify(data ?? {});
      }
      const response = await fetch(url.toString(), fetchOptions);
      const status = response.status;
      const statusText = response.statusText;
      const contentType = response.headers.get("content-type") || "";
      if (status === 401) {
        this.clearSession();
        await clearMemisStorage();
      }
      if (!response.ok) {
        const errorText = await response.text();
        return {
          status,
          statusText,
          message: errorText
        };
      }
      if (status === 204 || response.headers.get("content-length") === "0") {
        return {
          status,
          statusText,
          data: null
        };
      }
      if (contentType.includes("application/json")) {
        return {
          status,
          statusText,
          data: await response.json()
        };
      }
      if (contentType.includes("application/octet-stream") || contentType.includes("application/pdf") || contentType.startsWith("image/") || contentType.includes("application/zip")) {
        return {
          status,
          statusText,
          data: await response.blob()
        };
      }
      return {
        status,
        statusText,
        data: await response.text()
      };
    } catch (error) {
      return {
        status: error?.status || 500,
        message: error?.message || "Request failed"
      };
    }
  }
  async get(endpoint, params = {}, options = {}) {
    return this.request("GET", endpoint, {}, { ...options, params });
  }
  async post(endpoint, data = {}, options = {}) {
    return this.request("POST", endpoint, data, options);
  }
  async put(endpoint, data = {}, options = {}) {
    return this.request("PUT", endpoint, data, options);
  }
  async patch(endpoint, data = {}, options = {}) {
    return this.request("PATCH", endpoint, data, options);
  }
  async delete(endpoint, options = {}) {
    return this.request("DELETE", endpoint, {}, options);
  }
  async login(endpoint, credentials, payload = {}) {
    try {
      const headers = await this.getHeaders(credentials, payload, {
        includeSession: false
      });
      const url = this.loginBuildUrl(endpoint);
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: payload instanceof FormData ? payload : JSON.stringify(payload ?? {})
      });
      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json") ? await response.json() : await response.text();
      if (!response.ok || !result?.success) {
        return {
          success: false,
          status: response.status,
          message: result?.message || (typeof result === "string" ? result : "Login failed")
        };
      }
      const session = {
        token: result.token,
        expiresAt: Date.now() + result.expiresIn * 1e3,
        user: result.user
      };
      localStorage.setItem("memisSession", JSON.stringify(session));
      this.defaultCredentials = credentials;
      localStorage.setItem(
        "memisCredentials",
        JSON.stringify(credentials)
      );
      return result;
    } catch (error) {
      return {
        success: false,
        status: error?.status || 500,
        message: error?.message || "Unable to connect to the login service."
      };
    }
  }
  async downloadFile(endpoint) {
    try {
      const auth = await this.getAuth();
      const headers = await this.getHeaders(auth, {});
      const response = await fetch(this.buildUrl(endpoint), {
        method: "GET",
        headers
      });
      if (!response.ok) {
        throw new Error(`File download failed: HTTP ${response.status}`);
      }
      return await response.blob();
    } catch (error) {
      throw error;
    }
  }
  async logout() {
    try {
      const endpoint = "auth/logout";
      const url = this.loginBuildUrl(endpoint);
      const headers = await this.getHeaders(this.defaultCredentials, null, {
        includeSession: true
      });
      const response = await fetch(url, {
        method: "POST",
        headers
      });
      const contentType = response.headers.get("content-type") || "";
      console.log({ url, contentType });
      const result = contentType.includes("application/json") ? await response.json() : await response.text();
      return {
        success: response.ok,
        status: response.status,
        message: result?.message || (response.ok ? "Logout successful." : "Logout failed.")
      };
    } catch (error) {
      console.log({ error });
      return {
        success: false,
        status: error?.status || 500,
        message: error?.message || "Unable to complete logout."
      };
    } finally {
      this.clearSession();
      await clearMemisStorage();
    }
  }
}
class QRConfigService extends DataStore {
  async getJsonObject(path) {
    return this.get(path);
  }
  async getQrConfig(programId) {
    try {
      let config = await LocalForageService.getItem(
        "dataStore",
        "dataStore"
      );
      config = config?.qrCodesConfigurations;
      const qr = config?.configurations?.find(
        (item) => item?.source?.programId === programId
      );
      return qr || null;
    } catch (error) {
      return null;
    }
  }
  extractAttributeValues(attributes = [], requestedAttributes = {}) {
    try {
      const result = Object.keys(requestedAttributes).reduce(
        (acc, attributeId) => {
          const attribute = attributes.find(
            (item) => item.attribute === attributeId
          );
          acc[attributeId] = attribute?.value || null;
          return acc;
        },
        {}
      );
      return Object.keys(result).map((key) => ({
        [requestedAttributes[key].name]: result[key]
      }));
    } catch (error) {
      return [];
    }
  }
  getSearchKeyValue(attributes = [], searchKeyId) {
    try {
      if (!searchKeyId) return null;
      const searchAttribute = attributes.find(
        (item) => item.attribute === searchKeyId
      );
      return searchAttribute?.value || null;
    } catch (error) {
      return null;
    }
  }
  buildQrPayload({ program, tei, orgUnit, config }) {
    try {
      if (!program?.id || !tei?.trackedEntity || !config) return null;
      const attributes = tei.attributes || [];
      const requestedAttributes = config.source?.values || {};
      const jsonData = {
        data: this.extractAttributeValues(attributes, requestedAttributes),
        Facility: orgUnit ? orgUnit.name : null,
        GeneratedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      let plainText = `Facility: ${jsonData.Facility}
Generated At: ${jsonData.GeneratedAt}
Equipment Details:
`;
      jsonData.data.forEach((item) => {
        const [key, value] = Object.entries(item)[0];
        plainText += `${key.trim()}: ${value}
`;
      });
      return plainText;
    } catch (error) {
      return null;
    }
  }
}
const dataStore = new DataStore();
const qrConfigService = new QRConfigService();

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DataStore,
  QRConfigService,
  default: dataStore,
  qrConfigService
}, Symbol.toStringTag, { value: 'Module' }));

export { clearMemisStorage as c, dataStore as d, index as i, qrConfigService as q };

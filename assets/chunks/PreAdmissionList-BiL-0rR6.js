import{d as $,T as x,k as T,B,E as f,D as b,e as o,f as C,u as O,j as k,z as W,b as d,K as L,R as q}from"../index-BLP00ch9.js";import{T as w}from"./Toolbar-D1DkadGF.js";import{R as G}from"./ReusableDataTable-DVirV0Ku.js";import{G as H}from"./GoBack-BZBcWaXU.js";import{c as M}from"./Alerts-DiS9aSBh.js";import{i as _}from"./svg-D0Xk2Rxf.js";import{P as V}from"./patient_opd_list-DPM6YC3x.js";import{P as E,H as v}from"./service-wu3iYD7Q.js";import{useDemographicsStore as J}from"./DemographicStore-Npry8Q0I.js";import F from"./CPR-TAM7YQkK.js";import{r as j}from"./ipd_context-CxkB7yoR.js";import{toastWarning as g}from"./toasts-_A6kinwc.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K=$({__name:"PreAdmissionList",setup(Q){const m=O(),n=k(),I=J(),c=C([]),y=["Visit No","First Name","Last Name","MRN","Gender","Arrival Time","Waiting Time","Ward","Actions"],P={responsive:!0,ordering:!1,buttons:[]},l=j(),h=o(()=>String(n.query.department||l.department||"").trim()),s=o(()=>String(n.query.ward||l.ward||"").trim()),u=o(()=>String(n.query.wardId||l.wardId||"").trim()),N=o(()=>`Patients Awaiting Admission${s.value?` - ${s.value}`:""}`),D=e=>`
        <div class="pre-admission-actions">
            <button
                class="btn btn-outline-success btn-sm btn-table redirection-btn pre-admission-icon-btn"
                style="color:rgb(0, 100, 1)"
                title="Start admission"
                data-id='${JSON.stringify(e)}'
            >
                ${_.redirection}
            </button>
            <button
                class="btn btn-outline-danger btn-sm btn-table cpr-btn pre-admission-icon-btn"
                style="color:#B42318"
                title="Start CPR"
                data-id='${JSON.stringify(e)}'
            >
                ${_.cpr}
            </button>
            <button class="btn btn-outline-secondary btn-sm btn-table dispose-btn" title="Dispose" data-id='${JSON.stringify(e)}'>
                Dispose
            </button>
        </div>
    `,a=(e,...t)=>{for(const r of t){const i=e?.[r];if(i!=null&&i!=="")return i}return""},R=e=>{c.value=e.map((t,r)=>{const i=a(t,"identifier","ID","npid");return[a(t,"visit_number","visitNumber","visit_id")||`${r+1}`,a(t,"given_name","first_name")||t?.patient?.personInformation?.given_name||"",a(t,"family_name","last_name")||t?.patient?.personInformation?.family_name||"",i,a(t,"gender")||t?.patient?.personInformation?.gender||"",v.toStandardHisTimeFormat(a(t,"arrival_time","created_at","date_created")),v.waitingTime(a(t,"arrival_time","created_at","date_created")),s.value||a(t,"ward_name","ward")||"",D({identifier:i,ID:i,patient_id:a(t,"patient_id","person_id"),visitNumber:a(t,"visit_number","visitNumber","visit_id")||`${r+1}`})]})},p=async()=>{if(!u.value){c.value=[],g("Ward context not found. Open this page from the IPD ward dashboard.");return}const e=await V.getPatientList("PRE_ADMISSION",u.value,E.IPD_PROGRAM);R(e||[])},S={"redirection-btn":async e=>{const t=await I.setPatientRecord(e);if(!t?.ID&&!t?.patientID){g("Could not load this patient's record. Please try again.");return}m.push("/aetc/template-forms/medical-admission?next=/ipd/assign-bed")},"cpr-btn":async()=>{await M(F,{class:"medium-modal"})},"dispose-btn":async e=>{`${e?.visitNumber||""}`.trim()&&m.push("/aetc/disposition")}},A=()=>{m.push({path:"/home",query:{department:h.value,ward:s.value}})};return x(p),T(()=>n.query.refresh,e=>{e&&p()}),(e,t)=>(W(),B(b(q),null,{default:f(()=>[d(w),d(b(L),{fullscreen:!0},{default:f(()=>[d(H,{title:N.value,onBack:A},null,8,["title"]),d(G,{headers:y,data:c.value,options:P,actionHandlers:S},null,8,["data"])]),_:1})]),_:1}))}}),mt=z(K,[["__scopeId","data-v-7281cc26"]]);export{mt as default};

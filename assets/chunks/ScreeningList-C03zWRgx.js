import{d as h,O as T,w as v,k as R,Y as B,A as N,C as p,u,i as C,g as L,o as $,B as i,E as O,a as k,N as x}from"../index-B_NpdBnf.js";import{G as U}from"./GoBack-xfeznNFq.js";import{T as V}from"./Toolbar-Bc6o_YtE.js";import{R as W}from"./ReusableDataTable-DNwnAim7.js";import{i as r}from"./svg-DSlFgCtU.js";import{c as E,b as J}from"./Alerts-DVtUi8RG.js";import F from"./CPR-ofTwwLr-.js";import{usePatientList as G}from"./patientListStore-6yJqvgT5.js";import{s as M,f as H,a as f}from"./tableDateTime-DUQRVe0c.js";import{d as b}from"./GlobalPropertyStore-DHeyzCou.js";import{closeVisit as Y}from"./visits_service-BB7eh5sp.js";import{u as j}from"./useAETCStageRealtime-CWmSSCeN.js";import{useDemographicsStore as q}from"./DemographicStore-6rAafAEE.js";import{toastWarning as w}from"./toasts-fF_4gG_L.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K=h({__name:"ScreeningList",setup(Q){const o=C([]),g=L(),_=["Visit Number","First Name","Last Name","Arrival Time","WaitingTime","Aggregate","Attended By","Action"],y={responsive:!0,ordering:!1,buttons:[]},I=q(),c=G(),{AETCScreeningList:d}=T(c),l=t=>{const e=t?.patient||{},s=t?.identifier??t?.ID??e?.identifier??e?.ID;return{patient_id:t?.patient_id??t?.patientID??t?.person_id??e?.patient_id??e?.patientID??e?.person_id,identifier:s,ID:s}},n=()=>{o.value=M(d.value).map(t=>[t.visit_number,t.given_name,t.family_name,H(t.arrival_time),f(t.latest_encounter_time),f(t.arrival_time),t.last_encounter_creator,P(l(t))])},{setupStageRealtimeUpdates:A,teardownStageRealtimeUpdates:D}=j({onUpdated:n}),P=t=>`
        <button class="btn btn-outline-danger btn-sm btn-table redirection-btn" 
                style="color:rgb(0, 100, 1)" 
                data-id='${JSON.stringify(t)}'>
            ${r.redirection}
        </button>
        <button class="btn btn-outline-danger btn-sm btn-table abscond-btn" 
                style="color: rgba(0, 0, 0, 0.54);" 
                data-id='${JSON.stringify(t)}'>
            ${r.abscond}
        </button>
        <button class="btn btn-outline-danger btn-sm btn-table cpr-btn" 
                style="color: red;" 
                data-id='${JSON.stringify(t)}'>
            ${r.cpr}
        </button>
    `,S={"redirection-btn":async t=>{const e=l(t),a=await b.getPatient(e)||e,m=a?.patientID??a?.patient_id??a?.personID??a?.person_id;if(!m){w("Patient record not found. Please refresh the screening list and try again.");return}await I.setRecord({...a,patientID:m,ID:a?.ID??a?.identifier??e.ID}),g.push("/aetc/screening")},"abscond-btn":async t=>{if(await J("Are you sure you want to abscond?")){await Y(t);const e=`${t?.identifier||t?.ID||""}`.trim();e&&(c.removeFromAllRealtimeStageLists(e),n())}},"cpr-btn":async t=>{await b.getPatient(t),E(F,{class:"medium-modal"})}};return v(d,()=>{n()},{deep:!0}),R(async()=>{n(),await A()}),B(()=>{D()}),(t,e)=>($(),N(u(x),null,{default:p(()=>[i(V),i(u(O),{fullscreen:!0},{default:p(()=>[i(U,{title:"Patients waiting for screening"}),e[0]||(e[0]=k("p",{class:"list-description"},"This is a list of all patients that went through initial registration successfully and are waiting screening",-1)),i(W,{headers:_,data:o.value,options:y,actionHandlers:S},null,8,["data"])]),_:1})]),_:1}))}}),ut=z(K,[["__scopeId","data-v-2bbcedd4"]]);export{ut as default};

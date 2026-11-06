import{d as R,O as T,w as h,k as v,X as A,A as C,C as p,u,i as N,g as B,o as L,B as i,E as $,N as O}from"../index-Cqy-hc6f.js";import{G as k}from"./GoBack-BynRLVaJ.js";import{T as x}from"./Toolbar-hLWJG15b.js";import{R as U}from"./ReusableDataTable-DQ6HyRzA.js";import{i as o}from"./svg-DSlFgCtU.js";import{c as E,b as J}from"./Alerts-CbcuaCLX.js";import V from"./CPR-BqMcSvuC.js";import{usePatientList as W}from"./patientListStore-DbbCQSZk.js";import{f as F,a as G}from"./tableDateTime-Dgwv7PaX.js";import{d as f}from"./GlobalPropertyStore-DvtiCXhm.js";import{closeVisit as M}from"./visits_service-zHH9W6ak.js";import{u as H}from"./useAETCStageRealtime-CGdDGUqT.js";import{useDemographicsStore as X}from"./DemographicStore-sKFzDQ64.js";import{toastWarning as j}from"./toasts-2oTqByNA.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const z=R({__name:"ScreeningList",setup(K){const r=N([]),b=B(),g=["Visit Number","First Name","Last Name","Arrival Time","WaitingTime","Attended By","Action"],_={responsive:!0,ordering:!1,buttons:[]},I=X(),c=W(),{AETCScreeningList:d}=T(c),m=t=>{const e=t?.patient||{},s=t?.identifier??t?.ID??e?.identifier??e?.ID;return{patient_id:t?.patient_id??t?.patientID??t?.person_id??e?.patient_id??e?.patientID??e?.person_id,identifier:s,ID:s}},a=()=>{r.value=d.value.map(t=>[t.visit_number,t.given_name,t.family_name,F(t.arrival_time),G(t.latest_encounter_time),t.last_encounter_creator,P(m(t))])},{setupStageRealtimeUpdates:y,teardownStageRealtimeUpdates:D}=H({onUpdated:a}),P=t=>`
        <button class="btn btn-outline-danger btn-sm btn-table redirection-btn" 
                style="color:rgb(0, 100, 1)" 
                data-id='${JSON.stringify(t)}'>
            ${o.redirection}
        </button>
        <button class="btn btn-outline-danger btn-sm btn-table abscond-btn" 
                style="color: rgba(0, 0, 0, 0.54);" 
                data-id='${JSON.stringify(t)}'>
            ${o.abscond}
        </button>
        <button class="btn btn-outline-danger btn-sm btn-table cpr-btn" 
                style="color: red;" 
                data-id='${JSON.stringify(t)}'>
            ${o.cpr}
        </button>
    `,S={"redirection-btn":async t=>{const e=m(t),n=await f.getPatient(e)||e,l=n?.patientID??n?.patient_id??n?.personID??n?.person_id;if(!l){j("Patient record not found. Please refresh the screening list and try again.");return}await I.setRecord({...n,patientID:l,ID:n?.ID??n?.identifier??e.ID}),b.push("/aetc/screening")},"abscond-btn":async t=>{if(await J("Are you sure you want to abscond?")){await M(t);const e=`${t?.identifier||t?.ID||""}`.trim();e&&(c.removeFromAllRealtimeStageLists(e),a())}},"cpr-btn":async t=>{await f.getPatient(t),E(V,{class:"medium-modal"})}};return h(d,()=>{a()},{deep:!0}),v(async()=>{a(),await y()}),A(()=>{D()}),(t,e)=>(L(),C(u(O),null,{default:p(()=>[i(x),i(u($),{fullscreen:!0},{default:p(()=>[i(k,{title:"Patients waiting for screening"}),i(U,{headers:g,data:r.value,options:_,actionHandlers:S},null,8,["data"])]),_:1})]),_:1}))}}),lt=q(z,[["__scopeId","data-v-83358c9e"]]);export{lt as default};

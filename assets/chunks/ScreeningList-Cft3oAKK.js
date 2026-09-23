import{d as v,L as R,w as T,o as h,W as A,q as L,v as p,t as u,r as B,u as C,j as N,A as i,B as $,K as x}from"../index-B8axcE7A.js";import{G as O}from"./GoBack-45baX0N9.js";import{T as U}from"./Toolbar-CnkjOOrO.js";import{R as W}from"./ReusableDataTable-DUy8nw1G.js";import{i as o}from"./svg-CC70ozKS.js";import{c as k,a as J}from"./Alerts-DfAQSbTl.js";import V from"./CPR-DbyPn8UB.js";import{usePatientList as E}from"./patientListStore-C04cYmBw.js";import{f as F,a as G}from"./tableDateTime-Dgwv7PaX.js";import{d as f}from"./GlobalPropertyStore-DrlbqpUz.js";import{closeVisit as M}from"./visits_service-jqlEZ5k_.js";import{u as j}from"./useAETCStageRealtime-BPgbyD13.js";import{useDemographicsStore as q}from"./DemographicStore-BZW5I3M2.js";import{toastWarning as H}from"./toasts-BHeGNlnJ.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";const z=v({__name:"ScreeningList",setup(Q){const r=B([]),b=C(),g=["Visit Number","First Name","Last Name","Arrival Time","WaitingTime","Attended By","Action"],_={responsive:!0,ordering:!1,buttons:[]},I=q(),c=E(),{AETCScreeningList:d}=R(c),m=t=>{const e=t?.patient||{},s=t?.identifier??t?.ID??e?.identifier??e?.ID;return{patient_id:t?.patient_id??t?.patientID??t?.person_id??e?.patient_id??e?.patientID??e?.person_id,identifier:s,ID:s}},a=()=>{r.value=d.value.map(t=>[t.visit_number,t.given_name,t.family_name,F(t.arrival_time),G(t.latest_encounter_time),t.last_encounter_creator,P(m(t))])},{setupStageRealtimeUpdates:y,teardownStageRealtimeUpdates:D}=j({onUpdated:a}),P=t=>`
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
    `,S={"redirection-btn":async t=>{const e=m(t),n=await f.getPatient(e)||e,l=n?.patientID??n?.patient_id??n?.personID??n?.person_id;if(!l){H("Patient record not found. Please refresh the screening list and try again.");return}await I.setRecord({...n,patientID:l,ID:n?.ID??n?.identifier??e.ID}),b.push("/aetc/screening")},"abscond-btn":async t=>{if(await J("Are you sure you want to abscond?")){await M(t);const e=`${t?.identifier||t?.ID||""}`.trim();e&&(c.removeFromAllRealtimeStageLists(e),a())}},"cpr-btn":async t=>{await f.getPatient(t),k(V,{class:"medium-modal"})}};return T(d,()=>{a()},{deep:!0}),h(async()=>{a(),await y()}),A(()=>{D()}),(t,e)=>(N(),L(u(x),null,{default:p(()=>[i(U),i(u($),{fullscreen:!0},{default:p(()=>[i(O,{title:"Patients waiting for screening"}),i(W,{headers:g,data:r.value,options:_,actionHandlers:S},null,8,["data"])]),_:1})]),_:1}))}}),lt=K(z,[["__scopeId","data-v-83358c9e"]]);export{lt as default};

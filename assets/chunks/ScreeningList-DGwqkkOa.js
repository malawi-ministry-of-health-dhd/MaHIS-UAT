import{d as R,L as h,w as T,o as A,W as L,q as B,v as p,t as u,r as C,u as N,j as $,A as i,B as x,K as H}from"../index-BHyezGgD.js";import{G as O}from"./GoBack-ClCWp2zF.js";import{T as U}from"./Toolbar-C0MODgJk.js";import{R as k}from"./ReusableDataTable--h28DiUh.js";import{i as o}from"./svg-D4Mhbd11.js";import{c as F,a as J}from"./Alerts-DzcjFcwd.js";import V from"./CPR-DzBOaDpH.js";import{usePatientList as W}from"./patientListStore-25bfJAfW.js";import{H as f}from"./service-DqoNSXkn.js";import{d as b}from"./GlobalPropertyStore-P5mrEmEt.js";import{closeVisit as E}from"./visits_service-B0Dpq-Oz.js";import{u as G}from"./useAETCStageRealtime-Bj5Ueg6T.js";import{useDemographicsStore as M}from"./DemographicStore-C-9oRVw6.js";import{toastWarning as j}from"./toasts-DH_tgrt6.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K=R({__name:"ScreeningList",setup(w){const r=C([]),g=N(),_=["Visit Number","First Name","Last Name","Arrival Time","WaitingTime","Attended By","Action"],I={responsive:!0,ordering:!1,buttons:[]},y=M(),c=W(),{AETCScreeningList:d}=h(c),m=t=>{const e=t?.patient||{},s=t?.identifier??t?.ID??e?.identifier??e?.ID;return{patient_id:t?.patient_id??t?.patientID??t?.person_id??e?.patient_id??e?.patientID??e?.person_id,identifier:s,ID:s}},a=()=>{r.value=d.value.map(t=>[t.visit_number,t.given_name,t.family_name,f.toStandardHisTimeFormat(t.arrival_time),f.waitingTime(t.latest_encounter_time),t.last_encounter_creator,P(m(t))])},{setupStageRealtimeUpdates:D,teardownStageRealtimeUpdates:S}=G({onUpdated:a}),P=t=>`
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
    `,v={"redirection-btn":async t=>{const e=m(t),n=await b.getPatient(e)||e,l=n?.patientID??n?.patient_id??n?.personID??n?.person_id;if(!l){j("Patient record not found. Please refresh the screening list and try again.");return}await y.setRecord({...n,patientID:l,ID:n?.ID??n?.identifier??e.ID}),g.push("/aetc/screening")},"abscond-btn":async t=>{if(await J("Are you sure you want to abscond?")){await E(t);const e=`${t?.identifier||t?.ID||""}`.trim();e&&(c.removeFromAllRealtimeStageLists(e),a())}},"cpr-btn":async t=>{await b.getPatient(t),F(V,{class:"medium-modal"})}};return T(d,()=>{a()},{deep:!0}),A(async()=>{a(),await D()}),L(()=>{S()}),(t,e)=>($(),B(u(H),null,{default:p(()=>[i(U),i(u(x),{fullscreen:!0},{default:p(()=>[i(O,{title:"Patients waiting for screening"}),i(k,{headers:_,data:r.value,options:I,actionHandlers:v},null,8,["data"])]),_:1})]),_:1}))}}),mt=q(K,[["__scopeId","data-v-285afea7"]]);export{mt as default};

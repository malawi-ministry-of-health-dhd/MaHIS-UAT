import{d as y,S as v,k as R,o as S,aV as A,B,E as c,D as l,f as C,u as L,z as N,b as a,K as P,R as $}from"../index-BLP00ch9.js";import{G as h}from"./GoBack-BZBcWaXU.js";import{T as D}from"./Toolbar-D1DkadGF.js";import{R as I}from"./ReusableDataTable-DVirV0Ku.js";import{i as n}from"./svg-D0Xk2Rxf.js";import{c as k,a as x}from"./Alerts-DiS9aSBh.js";import H from"./CPR-TAM7YQkK.js";import{d}from"./GlobalPropertyStore-BM8JB8F6.js";import{closeVisit as O}from"./visits_service-Ch8j4KA9.js";import{H as s}from"./service-wu3iYD7Q.js";import{usePatientList as U}from"./patientListStore-B1wOer_7.js";import{u as V}from"./useAETCStageRealtime-CSK-vQlx.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F=y({__name:"TriageList",setup(J){const o=C([]),u=L(),b=["Visit Number","First Name","Last Name","Arrival Time","WaitingTime","Aggregate","Registered By","Action"],f={responsive:!0,ordering:!1,buttons:[]},r=U(),{AETCTriageList:m}=v(r),e=()=>{o.value=m.value.map(t=>[t.visit_number,t.given_name,t.family_name,s.toStandardHisTimeFormat(t.arrival_time),s.waitingTime(t.latest_encounter_time),s.waitingTime(t.arrival_time),t.last_encounter_creator,_({identifier:t?.identifier,ID:t?.identifier,patient_id:t?.patient_id})])},{setupStageRealtimeUpdates:p,teardownStageRealtimeUpdates:g}=V({onUpdated:e}),_=t=>`
        <button class="btn btn-outline-danger btn-sm btn-table redirection-btn" 
                style="color:rgb(0, 100, 1)" 
                data-id='${JSON.stringify(t)}'>
            ${n.redirection}
        </button>
        <button class="btn btn-outline-danger btn-sm btn-table abscond-btn"
                style="color: rgba(0, 0, 0, 0.54);" 
                data-id='${JSON.stringify(t)}'>
            ${n.abscond}
        </button>

        <button class="btn btn-outline-danger btn-sm btn-table cpr-btn" 
                style="color: red;" 
                data-id='${JSON.stringify(t)}'>
            ${n.cpr}
        </button>
    `,T={"redirection-btn":async t=>{await d.getPatient(t),u.push("/aetc/triage")},"abscond-btn":async t=>{if(await x("Are you sure you want to abscond?")){await O(t);const i=`${t?.identifier||t?.ID||""}`.trim();i&&(r.removeFromAllRealtimeStageLists(i),e())}},"print-btn":t=>{console.log("🚀 ~ print data:",t)},"cpr-btn":async t=>{await d.getPatient(t),k(H,{class:"medium-modal"})}};return R(m,()=>{e()},{deep:!0}),S(async()=>{e(),await p()}),A(()=>{g()}),(t,i)=>(N(),B(l($),null,{default:c(()=>[a(D),a(l(P),{fullscreen:!0},{default:c(()=>[a(h,{title:"Patients waiting for Triage"}),a(I,{headers:b,data:o.value,options:f,actionHandlers:T},null,8,["data"])]),_:1})]),_:1}))}}),et=E(F,[["__scopeId","data-v-969f682a"]]);export{et as default};

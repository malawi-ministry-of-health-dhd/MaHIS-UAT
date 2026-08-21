import{d as S,S as v,k as T,o as R,aV as A,B,E as c,D as m,f as C,u as L,z as N,b as a,K as P,R as $}from"../index-BLP00ch9.js";import{G as h}from"./GoBack-BZBcWaXU.js";import{T as D}from"./Toolbar-D1DkadGF.js";import{R as I}from"./ReusableDataTable-DVirV0Ku.js";import{i}from"./svg-D0Xk2Rxf.js";import{c as k,a as x}from"./Alerts-DiS9aSBh.js";import H from"./CPR-TAM7YQkK.js";import{usePatientList as O}from"./patientListStore-B1wOer_7.js";import{H as l}from"./service-wu3iYD7Q.js";import{d}from"./GlobalPropertyStore-BM8JB8F6.js";import{closeVisit as U}from"./visits_service-Ch8j4KA9.js";import{u as V}from"./useAETCStageRealtime-CSK-vQlx.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F=S({__name:"ScreeningList",setup(J){const s=C([]),u=L(),b=["Visit Number","First Name","Last Name","Arrival Time","WaitingTime","Attended By","Action"],f={responsive:!0,ordering:!1,buttons:[]},o=O(),{AETCScreeningList:r}=v(o),e=()=>{s.value=r.value.map(t=>[t.visit_number,t.given_name,t.family_name,l.toStandardHisTimeFormat(t.arrival_time),l.waitingTime(t.latest_encounter_time),t.last_encounter_creator,_({identifier:t?.identifier,ID:t?.identifier,patient_id:t?.patient_id})])},{setupStageRealtimeUpdates:p,teardownStageRealtimeUpdates:g}=V({onUpdated:e}),_=t=>`
        <button class="btn btn-outline-danger btn-sm btn-table redirection-btn" 
                style="color:rgb(0, 100, 1)" 
                data-id='${JSON.stringify(t)}'>
            ${i.redirection}
        </button>
        <button class="btn btn-outline-danger btn-sm btn-table abscond-btn" 
                style="color: rgba(0, 0, 0, 0.54);" 
                data-id='${JSON.stringify(t)}'>
            ${i.abscond}
        </button>
        <button class="btn btn-outline-danger btn-sm btn-table cpr-btn" 
                style="color: red;" 
                data-id='${JSON.stringify(t)}'>
            ${i.cpr}
        </button>
    `,y={"redirection-btn":async t=>{await d.getPatient(t),u.push("/aetc/screening")},"abscond-btn":async t=>{if(await x("Are you sure you want to abscond?")){await U(t);const n=`${t?.identifier||t?.ID||""}`.trim();n&&(o.removeFromAllRealtimeStageLists(n),e())}},"cpr-btn":async t=>{await d.getPatient(t),k(H,{class:"medium-modal"})}};return T(r,()=>{e()},{deep:!0}),R(async()=>{e(),await p()}),A(()=>{g()}),(t,n)=>(N(),B(m($),null,{default:c(()=>[a(D),a(m(P),{fullscreen:!0},{default:c(()=>[a(h,{title:"Patients waiting for screening"}),a(I,{headers:b,data:s.value,options:f,actionHandlers:y},null,8,["data"])]),_:1})]),_:1}))}}),et=E(F,[["__scopeId","data-v-df9fab38"]]);export{et as default};

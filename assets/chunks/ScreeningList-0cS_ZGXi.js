import{H as h,D as A,E as v,S as R,au as N,f as B,l as p,I as u,x as C,Q as L,o as $,k as i,a3 as x,b as k,a5 as O}from"../index-1dJPXL1s.js";import{G as U}from"./GoBack-Ch_MeMih.js";import{T as V}from"./Toolbar-CfWPuoRv.js";import{R as W}from"./ReusableDataTable-COIzRslq.js";import{i as o}from"./svg-DSlFgCtU.js";import{c as E,a as J}from"./Alerts-ft61EleC.js";import F from"./CPR-DlKb905A.js";import{usePatientList as G}from"./patientListStore-BnCFiKfi.js";import{s as H,f as M,a as f}from"./tableDateTime-DUQRVe0c.js";import{P as b}from"./GlobalPropertyStore-Bh59MqpD.js";import{closeVisit as Q}from"./visits_service-CTAuhTsn.js";import{u as j}from"./useAETCStageRealtime-Cx3aeReI.js";import{useDemographicsStore as q}from"./DemographicStore-BWuT9NZ0.js";import{toastWarning as z}from"./toasts-B9K7q7QE.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";const X=h({__name:"ScreeningList",setup(Y){const r=C([]),g=L(),_=["Visit Number","First Name","Last Name","Arrival Time","WaitingTime","Aggregate","Attended By","Action"],y={language:{emptyTable:"No patient on list"},responsive:!0,ordering:!1,buttons:[]},I=q(),c=G(),{AETCScreeningList:l}=A(c),d=t=>{const e=t?.patient||{},s=t?.identifier??t?.ID??e?.identifier??e?.ID;return{patient_id:t?.patient_id??t?.patientID??t?.person_id??e?.patient_id??e?.patientID??e?.person_id,identifier:s,ID:s}},n=()=>{r.value=H(l.value).map(t=>[t.visit_number,t.given_name,t.family_name,M(t.arrival_time),f(t.latest_encounter_time),f(t.arrival_time),t.last_encounter_creator,S(d(t))])},{setupStageRealtimeUpdates:D,teardownStageRealtimeUpdates:P}=j({onUpdated:n}),S=t=>`
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
    `,T={"redirection-btn":async t=>{const e=d(t),a=await b.getPatient(e)||e,m=a?.patientID??a?.patient_id??a?.personID??a?.person_id;if(!m){z("Patient record not found. Please refresh the screening list and try again.");return}await I.setRecord({...a,patientID:m,ID:a?.ID??a?.identifier??e.ID}),g.push("/aetc/screening")},"abscond-btn":async t=>{if(await J("Are you sure you want to abscond?")){await Q(t);const e=`${t?.identifier||t?.ID||""}`.trim();e&&(c.removeFromAllRealtimeStageLists(e),n())}},"cpr-btn":async t=>{await b.getPatient(t),E(F,{class:"medium-modal"})}};return v(l,()=>{n()},{deep:!0}),R(async()=>{n(),await D()}),N(()=>{P()}),(t,e)=>($(),B(u(O),null,{default:p(()=>[i(V),i(u(x),{fullscreen:!0},{default:p(()=>[i(U,{title:"Patients waiting for screening"}),e[0]||(e[0]=k("p",{class:"list-description"},"This is a list of all patients that went through initial registration successfully and are waiting screening",-1)),i(W,{headers:_,data:r.value,options:y,actionHandlers:T},null,8,["data"])]),_:1})]),_:1}))}}),ut=K(X,[["__scopeId","data-v-f247c181"]]);export{ut as default};

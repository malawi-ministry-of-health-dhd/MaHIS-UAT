import{d as C,M as q,w as $,q as x,v as b,t as _,f as c,r as M,u as L,a as k,j as E,A as m,B as W,K as F}from"../index-BHyezGgD.js";import{T as G}from"./Toolbar-C0MODgJk.js";import{R as H}from"./ReusableDataTable--h28DiUh.js";import{G as V}from"./GoBack-ClCWp2zF.js";import{c as J}from"./Alerts-DzcjFcwd.js";import{i as v}from"./svg-D4Mhbd11.js";import{P as j}from"./patient_opd_list-D8xo280U.js";import{P as K,H as g}from"./service-DqoNSXkn.js";import{useDemographicsStore as z}from"./DemographicStore-C-9oRVw6.js";import Q from"./CPR-DzBOaDpH.js";import{r as U}from"./ipd_context-Cr5BPvVm.js";import{O as X}from"./GlobalPropertyStore-P5mrEmEt.js";import{E as Y}from"./encounter_type-DzS1-2wS.js";import{B as Z}from"./BedService-B16l2CbO.js";import{toastWarning as I}from"./toasts-DH_tgrt6.js";import{_ as tt}from"./_plugin-vue_export-helper-DlAUqK2U.js";const et=C({__name:"PreAdmissionList",setup(at){const o=L(),s=k(),y=z(),u=M([]),h=["Visit No","First Name","Last Name","MRN","Gender","Arrival Time","Waiting Time","Ward","Actions"],A={responsive:!0,ordering:!1,buttons:[]},l=U(),p=c(()=>String(s.query.department||l.department||"").trim()),r=c(()=>String(s.query.ward||l.ward||"").trim()),d=c(()=>String(s.query.wardId||l.wardId||"").trim()),P=c(()=>`Patients Awaiting Admission${r.value?` - ${r.value}`:""}`),N=e=>`
        <div class="pre-admission-actions">
            <button
                class="btn btn-outline-success btn-sm btn-table redirection-btn pre-admission-icon-btn"
                style="color:rgb(0, 100, 1)"
                title="Start admission"
                data-id='${JSON.stringify(e)}'
            >
                ${v.redirection}
            </button>
            <button
                class="btn btn-outline-danger btn-sm btn-table cpr-btn pre-admission-icon-btn"
                style="color:#B42318"
                title="Start CPR"
                data-id='${JSON.stringify(e)}'
            >
                ${v.cpr}
            </button>
            <button class="btn btn-outline-secondary btn-sm btn-table dispose-btn" title="Dispose" data-id='${JSON.stringify(e)}'>
                Dispose
            </button>
        </div>
    `,i=(e,...t)=>{for(const n of t){const a=e?.[n];if(a!=null&&a!=="")return a}return""},D=e=>{u.value=e.map((t,n)=>{const a=i(t,"identifier","ID","npid");return[i(t,"visit_number","visitNumber","visit_id")||`${n+1}`,i(t,"given_name","first_name")||t?.patient?.personInformation?.given_name||"",i(t,"family_name","last_name")||t?.patient?.personInformation?.family_name||"",a,i(t,"gender")||t?.patient?.personInformation?.gender||"",g.toStandardHisTimeFormat(i(t,"arrival_time","created_at","date_created")),g.waitingTime(i(t,"arrival_time","created_at","date_created")),r.value||i(t,"ward_name","ward")||"",N({identifier:a,ID:a,patient_id:i(t,"patient_id","person_id"),visitNumber:i(t,"visit_number","visitNumber","visit_id")||`${n+1}`})]})},f=async()=>{if(!d.value){u.value=[],I("Ward context not found. Open this page from the IPD ward dashboard.");return}const e=await j.getPatientList("PRE_ADMISSION",d.value,K.IPD_PROGRAM);D(e||[])},S=async()=>(await X.getObsByEncounterIdAndDate(Y.MEDICAL_IN_PATIENT)).some(t=>String(t?.concept_name||"").trim().toLowerCase()==="summary"),B=async(e,t)=>{const n=Number(e?.patientID||e?.patient_id||t?.patient_id||t?.patientId);if(!Number.isFinite(n)||n<=0)return!1;try{return(await Z.getPatientActiveAllocations(n)).some(R=>R?.bed_id)}catch(a){return console.error("Failed to check active bed assignment:",a),!1}},O=()=>{o.push({path:"/ipd/assign-bed",query:{department:p.value,ward:r.value,...s.query.departmentId?{departmentId:s.query.departmentId}:{},...d.value?{wardId:d.value}:{}}})},T={"redirection-btn":async e=>{const t=await y.setPatientRecord(e);if(!t?.ID&&!t?.patientID){I("Could not load this patient's record. Please try again.");return}if(await S()&&!await B(t,e)){O();return}o.push({path:"/aetc/template-forms/medical-admission",query:{next:"/ipd/assign-bed"}})},"cpr-btn":async()=>{await J(Q,{class:"medium-modal"})},"dispose-btn":async e=>{`${e?.visitNumber||""}`.trim()&&o.push("/ipd/disposition")}},w=()=>{o.push({path:"/home",query:{department:p.value,ward:r.value}})};return q(f),$(()=>s.query.refresh,e=>{e&&f()}),(e,t)=>(E(),x(_(F),null,{default:b(()=>[m(G),m(_(W),{fullscreen:!0},{default:b(()=>[m(V,{title:P.value,onBack:w},null,8,["title"]),m(H,{headers:h,data:u.value,options:A,actionHandlers:T},null,8,["data"])]),_:1})]),_:1}))}}),It=tt(et,[["__scopeId","data-v-f58c6823"]]);export{It as default};

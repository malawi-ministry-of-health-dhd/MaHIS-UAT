import{d as C,T as $,k as q,B as x,E as b,D as _,e as c,f as k,u as E,j as L,z as M,b as m,K as W,R as F}from"../index--QhlviWV.js";import{T as G}from"./Toolbar-D9y5A8te.js";import{R as H}from"./ReusableDataTable-CQ97iDCT.js";import{G as V}from"./GoBack-Y-_qPW8w.js";import{c as J}from"./Alerts-BehIBf0p.js";import{i as v}from"./svg-D4Mhbd11.js";import{P as j}from"./patient_opd_list-BUTAaHFa.js";import{P as z,H as g}from"./service-BRF1-2NG.js";import{useDemographicsStore as K}from"./DemographicStore-De9PXiwr.js";import Q from"./CPR-CGKfdKYt.js";import{r as U}from"./ipd_context-BP7IxUXS.js";import{O as X}from"./GlobalPropertyStore-Df0ssrzd.js";import{E as Y}from"./encounter_type-Ca8P4J8A.js";import{B as Z}from"./BedService-B5hU09ET.js";import{toastWarning as I}from"./toasts-Z9jTR5qj.js";import{_ as tt}from"./_plugin-vue_export-helper-DlAUqK2U.js";const et=C({__name:"PreAdmissionList",setup(at){const o=E(),s=L(),y=K(),u=k([]),h=["Visit No","First Name","Last Name","MRN","Gender","Arrival Time","Waiting Time","Ward","Actions"],P={responsive:!0,ordering:!1,buttons:[]},l=U(),p=c(()=>String(s.query.department||l.department||"").trim()),r=c(()=>String(s.query.ward||l.ward||"").trim()),d=c(()=>String(s.query.wardId||l.wardId||"").trim()),A=c(()=>`Patients Awaiting Admission${r.value?` - ${r.value}`:""}`),N=e=>`
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
    `,i=(e,...t)=>{for(const n of t){const a=e?.[n];if(a!=null&&a!=="")return a}return""},D=e=>{u.value=e.map((t,n)=>{const a=i(t,"identifier","ID","npid");return[i(t,"visit_number","visitNumber","visit_id")||`${n+1}`,i(t,"given_name","first_name")||t?.patient?.personInformation?.given_name||"",i(t,"family_name","last_name")||t?.patient?.personInformation?.family_name||"",a,i(t,"gender")||t?.patient?.personInformation?.gender||"",g.toStandardHisTimeFormat(i(t,"arrival_time","created_at","date_created")),g.waitingTime(i(t,"arrival_time","created_at","date_created")),r.value||i(t,"ward_name","ward")||"",N({identifier:a,ID:a,patient_id:i(t,"patient_id","person_id"),visitNumber:i(t,"visit_number","visitNumber","visit_id")||`${n+1}`})]})},f=async()=>{if(!d.value){u.value=[],I("Ward context not found. Open this page from the IPD ward dashboard.");return}const e=await j.getPatientList("PRE_ADMISSION",d.value,z.IPD_PROGRAM);D(e||[])},S=async()=>(await X.getObsByEncounterIdAndDate(Y.MEDICAL_IN_PATIENT)).some(t=>String(t?.concept_name||"").trim().toLowerCase()==="summary"),T=async(e,t)=>{const n=Number(e?.patientID||e?.patient_id||t?.patient_id||t?.patientId);if(!Number.isFinite(n)||n<=0)return!1;try{return(await Z.getPatientActiveAllocations(n)).some(w=>w?.bed_id)}catch(a){return console.error("Failed to check active bed assignment:",a),!1}},B=()=>{o.push({path:"/ipd/assign-bed",query:{department:p.value,ward:r.value,...s.query.departmentId?{departmentId:s.query.departmentId}:{},...d.value?{wardId:d.value}:{}}})},O={"redirection-btn":async e=>{const t=await y.setPatientRecord(e);if(!t?.ID&&!t?.patientID){I("Could not load this patient's record. Please try again.");return}if(await S()&&!await T(t,e)){B();return}o.push({path:"/aetc/template-forms/medical-admission",query:{next:"/ipd/assign-bed"}})},"cpr-btn":async()=>{await J(Q,{class:"medium-modal"})},"dispose-btn":async e=>{`${e?.visitNumber||""}`.trim()&&o.push("/ipd/disposition")}},R=()=>{o.push({path:"/home",query:{department:p.value,ward:r.value}})};return $(f),q(()=>s.query.refresh,e=>{e&&f()}),(e,t)=>(M(),x(_(F),null,{default:b(()=>[m(G),m(_(W),{fullscreen:!0},{default:b(()=>[m(V,{title:A.value,onBack:R},null,8,["title"]),m(H,{headers:h,data:u.value,options:P,actionHandlers:O},null,8,["data"])]),_:1})]),_:1}))}}),It=tt(et,[["__scopeId","data-v-f58c6823"]]);export{It as default};

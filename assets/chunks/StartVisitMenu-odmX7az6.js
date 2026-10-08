import{$ as Hs,f as Z,r as L,n as Kt,d as Xt,o as Zt,j as a,k as o,A as pe,v as qe,t as n,C as Fs,x as e,F as k,U as x,z as l,s as T,Q as Ie,G as $s,E as nt,X as gt,J as Bs,y as He,q as vt,I as Vs,W as zs,af as Gs,c8 as Us,S as js,R as Ws,aV as Ys}from"../index-FM3HLMmD.js";import{m as qs}from"./vue3-apexcharts-CsxsEWXl.js";import{I as Ks,ae as At,V as Xs,U as Ct,ce as Zs,_ as Js,Y as Qs,bF as ei,bc as ti,cd as si,a6 as ii,o as ni}from"./index-ADRr018H.js";import ai from"./DemographicBar-CRBuFu0_.js";import{D as it}from"./Alerts-Bnd4CFax.js";import{O as mt}from"./GlobalPropertyStore-QM54N3n1.js";import{E as f}from"./encounter_type-CD2LhIFv.js";import{ConceptService as Yt}from"./concept_service-DWB_p-ra.js";import{UserService as oi}from"./user_service-C_y0Oki2.js";import{H as R}from"./service-Cm1F6FdF.js";/* empty css                                                                      *//* empty css                                                                          */import{toastWarning as Ye}from"./toasts-xihaSOHi.js";import{F as ne}from"./useFluidBalanceStoolMonitoringForm-CrkZ3zp1.js";import{_ as li}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Et=P=>{if(!P)return"";try{return R.toStandardHisFormat(P)||""}catch{return""}},ri=Hs("selectedVisitStore",{state:()=>({visitId:null,startDate:"",endDate:""}),getters:{hasSelection:P=>!!P.startDate},actions:{selectVisit(P){this.visitId=Number(P?.visit_id)||null,this.startDate=Et(P?.date_started||P?.start_date),this.endDate=Et(P?.date_stopped||P?.end_date)},clearSelection(){this.visitId=null,this.startDate="",this.endDate=""},matchesObs(P){if(!this.startDate)return!0;const D=Number(P?.visit_id);return Number.isFinite(D)&&D>0&&D===this.visitId?!0:this.includesDate(P?.obs_datetime||P?.encounter_datetime)},includesDate(P){if(!this.startDate)return!0;const D=Et(P);return!D||D<this.startDate?!1:!this.endDate||D<=this.endDate}}}),ci=()=>{const P=L("all"),D=L([]),te=L([]),be=L([]),O=L(!1),G=L(!1),he=L(!1),_e=L(!1),ae=L(null),ve=new Map,Pe=new Map,ze=L(!1),Te=L(null),Fe=L(!1),F=L(null),J=L(!1),oe=L(null),ke=L(!1),we=L(null),Se=L(!1),ye=L(null),Q=L(!1),$e=L(null),Ke=L(!1),Le=L(null),V=L(!1),Re=L(null),Ge=L(!1),ue=L(null),fe=L(!1),De=L(null),Oe=L(!1),Ue=L(null),Me=L({}),yt=i=>{Me.value[i]=!Me.value[i]},U=Z(()=>_e.value||ze.value||Fe.value||J.value||ke.value||Se.value||Q.value||Ke.value||V.value||Ge.value||fe.value||Oe.value),Qe=async()=>{await Gt("all")},Xe=Z(()=>{const i=[];return ae.value&&i.push({id:"triage",title:"Triage Information",icon:Ks,color:"#ef4444"}),Te.value&&i.push({id:"soapier",title:"SOAPIER Notes",icon:At,color:"#f43f5e"}),F.value&&i.push({id:"monitoring_chart",title:"Monitoring Charts",icon:At,color:"#0ea5e9"}),oe.value&&i.push({id:"fluid_balance",title:"Fluid Balance & Stool Monitoring",icon:At,color:"#14b8a6"}),we.value&&i.push({id:"primary_survey",title:"Primary Survey",icon:Xs,color:"#8b5cf6"}),ye.value&&i.push({id:"sample_history",title:"SAMPLE History",icon:Ct,color:"#0ea5e9"}),$e.value&&i.push({id:"secondary_survey",title:"Secondary Survey",icon:Zs,color:"#22c55e"}),Le.value&&i.push({id:"diagnosis",title:"Diagnosis",icon:Js,color:"#f59e0b"}),Re.value&&i.push({id:"investigations",title:"Laboratory / Radiology Findings",icon:Qs,color:"#0ea5e9"}),ue.value&&i.push({id:"patient_management",title:"Patient Management Plan",icon:ei,color:"#14b8a6"}),De.value&&i.push({id:"continuation",title:"Continuation Notes",icon:Ct,color:"#64748b"}),Ue.value&&i.push({id:"disposition",title:"Disposition Notes",icon:ti,color:"#14b8a6"}),i}),at=i=>{const t=(i||"").toLowerCase();return t.includes("presenting")?"Presenting Complaints":t.includes("surgical procedure")||t==="procedures"?"Past Surgical History":t.includes("family history")?"Family History":t.includes("allergy")||t.includes("allergen")?"Allergies":t.includes("smokes")||t.includes("smoking")||t.includes("alcohol intake")||t.includes("recreational drug")||t.includes("expected duration")?"Social History":t.includes("pregnancy")||t.includes("lnmp")||t.includes("gestational")||t.includes("parity")?"Gynecological History":t.includes("review of systems")||t.includes("severe respiratory")?"Review of Systems":t.includes("differential diagnosis")?"Working Differential Diagnosis":t.includes("notes")?"Investigations":t.includes("clerk")||t.includes("designation")||t.includes("signature")||t.includes("additional notes")?"Initial Management":t.includes("general condition")||t.includes("blood pressure")||t.includes("pulse")||t.includes("respiratory")||t.includes("temperature")||t.includes("eyes")||t.includes("mouth")||t.includes("neck")||t.includes("chest")||t.includes("endocrine examination")||t.includes("abdominal")||t.includes("motor response")||t.includes("verbal response")||t.includes("eye opening response")||t.includes("cranial")||t.includes("gross motor")||t.includes("sensation")||t.includes("pulsations")||t.includes("rectal")||t.includes("extremities")||t.includes("vaginal")?"Physical Examination":t.includes("condition")||t.includes("medication")||t.includes("treatment")||t.includes("reason for request")?"Past Medical History":"Other"},ft=i=>{const t=(i||"").toLowerCase();return t.includes("presenting complaints")||t.includes("presenting history")?"Presenting Complaints":t.includes("other medication")?"Past Medical History":t.includes("medication")||t.includes("drug")||t.includes("prescription")||t.includes("none")?"Drug History":t.includes("hiv")||t.includes("arv")||t.includes("health center")||t.includes("historical drug start date")?"Past Medical History":t.includes("surgical history")?"Past Surgical History":t.includes("allergy")||t.includes("allergen")||t.includes("allergic")||t.includes("hypersensitivity")?"Allergy":t.includes("intoxication")?"Intoxication":t.includes("social history")?"Social History":t.includes("family history")?"Family History":t.includes("review of systems")||t.includes("severe respiratory")||t.includes("skin infection")?"Review of Systems":t.includes("general")||t.includes("blood pressure")||t.includes("pulse")||t.includes("respiratory")||t.includes("temperature")||t.includes("oxygen")||t.includes("pupil")||t.includes("conjunctiva")||t.includes("oral")||t.includes("jvp")||t.includes("lymphadenopathy")||t.includes("trachea")||t.includes("expansion")||t.includes("apex")||t.includes("thrill heaves")||t.includes("auscultation")||t.includes("lung condition")||t.includes("lung position")||t.includes("palpation")||t==="condition"||t==="other"||t.includes("oedema")||t.includes("rash")||t.includes("herpes")||t.includes("neck stiffness")||t.includes("motor response")||t.includes("verbal response")||t.includes("eye opening response")||t.includes("visual field")||t.includes("eye movements")||t.includes("hearing")||t.includes("tongue")||t.includes("cough")||t.includes("power")||t.includes("tone")||t.includes("reflexes")||t.includes("plantars")||t.includes("sensation")||t.includes("coordination")||t.includes("gait")?"Physical Examination":t.includes("summary")?"Summary":t.includes("differential diagnosis")?"Differential Diagnosis":t.includes("assessment")||t.includes("additional notes")?"Investigations":t==="plan"?"Management Plan":"Other"},ot=i=>{const t=(i||"").toLowerCase();return t.includes("chief complaint")||t.includes("history of present illness")?"Complaints":t.includes("lnmp")||t.includes("edd")||t.includes("gestational")||t.includes("gravidity")||t.includes("parity")||t.includes("living children")||t.includes("menarche")||t.includes("menstrual")||t.includes("duration")||t.includes("abortion")||t.includes("ectopic")||t.includes("vaginal discharge")||t.includes("consistency")||t.includes("color")||t.includes("colour")||t.includes("odour")||t.includes("amount")||t.includes("contraceptive")||t.includes("side effects")||t.includes("cancer screening")||t.includes("history of stis")?"Obstetric And Gynaecology History":t.includes("hypertension")||t.includes("diabetes")||t.includes("tuberculosis")||t.includes("epilepsy")||t.includes("asthma")||t.includes("mental illness")||t.includes("blood transfusion")||t.includes("drug allergies")?"Medical History":t.includes("alcohol")||t.includes("smok")||t.includes("recreational drug")?"Habits":t.includes("oxygen")||t.includes("pulse")||t.includes("blood pressure")||t.includes("respiratory")||t.includes("temperature")||t.includes("blood glucose")||t.includes("weight")||t.includes("height")?"Vital Signs":t.includes("general condition")||t.includes("pallor")||t.includes("chest")||t.includes("abdomen")||t.includes("vaginal")||t.includes("extremities")?"General Examination":t.includes("impression")?"Impression":t==="plan"||t.includes("immediate intervention")?"Plan":"Other"},j=i=>i?.concept_name||i?.concept_id||"",xe=i=>i!=null&&`${i}`.trim()!=="",se=i=>{if(!i)return"";const t=i?.value_coded_name??i?.value_coded_display??i?.valueCodedName??i?.valueCodedDisplay??i?.value_coded?.name??i?.value_coded?.label??i?.value_coded?.value;if(xe(t))return t;const r=i?.value_text??i?.valueText;if(xe(r))return r;const d=i?.value_numeric??i?.valueNumeric??i?.value_number??i?.valueNumber;if(xe(d)){const A=i?.value_modifier??i?.valueModifier,N=xe(A)?` ${A}`:"";return`${d}${N}`}const m=i?.value_datetime??i?.valueDatetime??i?.valueDateTime;if(xe(m))return R.toStandardHisDisplayFormat(m);const u=i?.value_date??i?.valueDate;if(xe(u))return R.toStandardHisDisplayFormat(u);const y=i?.value_boolean??i?.valueBoolean;if(xe(y))return String(y);if(xe(i?.value))return i.value;const w=i?.value_coded??i?.valueCoded;return xe(w)?w:""},je=async i=>{const t=i.filter(m=>{const u=j(m).toLowerCase();return u.includes("differential diagnosis")||u.includes("attempted/ differential diagnosis")}),r=Array.from(new Set(t.map(m=>Number(m?.value_coded)).filter(m=>Number.isFinite(m)&&m>0)));if(r.length===0)return i;const d=new Map;return await Promise.all(r.map(async m=>{const u=await Yt.getConceptName(m);u&&d.set(m,u)})),i.map(m=>{const u=Number(m?.value_coded);return d.has(u)&&!m?.value_text&&!m?.value_coded_name?{...m,value_text:d.get(u)}:m})},et=i=>{const t=i.filter(u=>j(u).toLowerCase()==="presenting complaints"),r=i.filter(u=>j(u).toLowerCase()==="presenting history"),m=[...i.filter(u=>{const y=j(u).toLowerCase();return y!=="presenting complaints"&&y!=="presenting history"})];if(t.length>0){const u=t.map(y=>String(se(y)).trim()).filter(Boolean);u.length>0&&m.push({...t[0],concept_name:"Presenting Complaints",value_text:u.join(", ")})}if(r.length>0){const u=r.reduce((y,w)=>{const A=new Date(y?.obs_datetime||0).getTime();return new Date(w?.obs_datetime||0).getTime()>A?w:y});m.push(u)}return m},v=(i,t)=>{const r=(i||[]).find(d=>{const m=re(j(d));return t.some(u=>u(m))});return r?String(se(r)??"").trim():""},Ze=Z(()=>{const i=Ce.value?.["Physical Examination"]||[];return{generalCondition:v(i,[t=>t.includes("general condition")]),temperature:v(i,[t=>t==="temperature"||t.includes("temperature")]),pulseRate:v(i,[t=>t.includes("pulse rate")||t==="pulse rate"||t==="pulse"]),bloodPressure:v(i,[t=>t.includes("blood pressure")]),respiratoryRate:v(i,[t=>t.includes("respiratory rate")||t.includes("respiratory")]),eyes:v(i,[t=>t==="eyes"||t.includes("eyes")]),mouth:v(i,[t=>t==="mouth"||t.includes("mouth")]),neck:v(i,[t=>t==="neck"||t.includes("neck")]),chestExamination:v(i,[t=>t.includes("chest examination")]),endocrineExamination:v(i,[t=>t.includes("endocrine examination")]),abdominalExamination:v(i,[t=>t.includes("abdominal examination")]),motorResponse:v(i,[t=>t.includes("motor response")]),verbalResponse:v(i,[t=>t.includes("verbal response")]),eyeOpeningResponse:v(i,[t=>t.includes("eye opening response")||t.includes("eye response")]),cranialNerves:v(i,[t=>t.includes("cranial")]),grossMotor:v(i,[t=>t.includes("gross motor")]),sensation:v(i,[t=>t==="sensation"||t.includes("sensation")]),pulsations:v(i,[t=>t.includes("pulsations")]),rectalExamination:v(i,[t=>t.includes("rectal examination")]),extremities:v(i,[t=>t==="extremities"||t.includes("extremities")])}}),bt=Z(()=>{const i=Ce.value?.["Initial Management"]||[];return{clerkName:v(i,[t=>t.includes("clerk name")]),designation:v(i,[t=>t.includes("designation")]),signature:v(i,[t=>t.includes("signature")])}}),lt=Z(()=>{const i=Ce.value?.["Presenting Complaints"]||[];return{complaints:v(i,[t=>t==="presenting complaints"||t.includes("presenting complaints")]),history:v(i,[t=>t==="presenting history"||t.includes("presenting history")])}}),tt=Z(()=>{const i=Ce.value?.["Past Medical History"]||[];return ce(i)}),rt=i=>{const t=[],r=[];return i.forEach((d,m)=>{(m%2===0?t:r).push(d)}),{left:t,right:r}},Be=Z(()=>{const i=Ce.value?.["Review of Systems"]||[];return ce(i)}),ie=Z(()=>rt(Be.value)),s=Z(()=>{const i=Ce.value?.["Past Surgical History"]||[];return ce(i)}),E=Z(()=>{const i=Ce.value?.["Family History"]||[];return ce(i)}),H=Z(()=>{const i=Ce.value?.["Social History"]||[];return ce(i)}),p=Z(()=>{const i=Ce.value?.["Gynecological History"]||[];return ce(i)}),g=Z(()=>{const i=ct.value?.["Presenting Complaints"]||[];return{complaints:v(i,[t=>t==="presenting complaints"||t.includes("presenting complaints")]),history:v(i,[t=>t==="presenting history"||t.includes("presenting history")])}}),z=Z(()=>{const i=ct.value?.["Physical Examination"]||[],t=c=>v(i,c),r=t([c=>c==="auscultation"||c.includes("auscultation")&&!c.includes("lung")]),d=t([c=>c==="region"||c.includes("region")]),m=t([c=>c==="inspection"||c.includes("inspection")]),u=t([c=>c.includes("light palpation")]),y=t([c=>c.includes("deep palpation")]),w=t([c=>c==="auscultation_lung"||c.includes("auscultation")&&c!=="auscultation"]),A=t([c=>c.includes("shifting dullness")]),N=t([c=>c.includes("fluid thrill")]);return{general:t([c=>c==="general"||c.includes("general")]),temperature:t([c=>c.includes("temperature")]),pulseRate:t([c=>c==="pulse rate"||c.includes("pulse rate")]),systolic:t([c=>c.includes("systolic")]),diastolic:t([c=>c.includes("diastolic")]),respiratoryRate:t([c=>c.includes("respiratory rate")||c==="respiratory rate"]),oxygenSaturation:t([c=>c.includes("oxygen saturation")]),pupilsSymmetrical:t([c=>c.includes("pupils symmetrical")]),conjunctiva:t([c=>c.includes("conjunctiva")]),oralKs:t([c=>c.includes("oral ks")]),oralThrush:t([c=>c.includes("oral thrush")||c.includes("candidosis")]),lymphadenopathy:t([c=>c.includes("lymphadenopathy")]),headNeckOther:t([c=>c==="other"]),symmetricalExpansion:t([c=>c.includes("symmetrical expansion")]),symmetricalExpansionDescription:t([c=>c==="description"||c.includes("description")&&!c.includes("additional")]),apexBeat:t([c=>c.includes("apex beat")]),thrillHeaves:t([c=>c.includes("thrill")||c.includes("thrill heaves")]),auscultationHeart:r,lungCondition:t([c=>c.includes("lung condition")||c==="condition"]),lungPosition:t([c=>c.includes("lung position")]),abdomenRegion:d,abdomenInspection:m,abdomenLightPalpation:u,abdomenDeepPalpation:y,abdomenAuscultation:w,abdomenShiftingDullness:A,abdomenFluidThrill:N,oedema:t([c=>c.includes("oedema")]),skinRash:t([c=>c.includes("skin rash")||c==="rash"]),herpesScar:t([c=>c.includes("herpes zoster")]),neckStiffness:t([c=>c.includes("neck stiffness")]),eyeOpeningResponse:t([c=>c.includes("eye opening response")]),verbalResponse:t([c=>c.includes("verbal response")]),motorResponse:t([c=>c.includes("motor response")]),cnPupil:t([c=>c==="pupil"||c.includes("pupil:")||c.includes("pupil")]),cnVisualField:t([c=>c.includes("visual field")]),cnEyeMovements:t([c=>c.includes("eye movements")&&c.includes("nystagmus")]),cnFacial:t([c=>c.includes("facial")||c.includes("eye movements/sensation")]),cnHearing:t([c=>c.includes("hearing")]),cnTongue:t([c=>c.includes("tongue movement")||c.includes("tongue")]),cnCoughGag:t([c=>c.includes("cough")||c.includes("gag")]),pnPower:t([c=>c==="power"||c.includes("power")]),pnTone:t([c=>c==="tone"||c.includes("tone")]),pnReflexes:t([c=>c.includes("reflexes")]),pnPlantars:t([c=>c.includes("plantars")]),pnSensation:t([c=>c==="sensation"||c.includes("sensation")&&!c.includes("facial")]),pnCoordination:t([c=>c.includes("coordination")])}}),le=i=>{const t=i?.children??i?.child??i?.groupMembers??[];return Array.isArray(t)?t:[]},It=i=>i.flatMap(t=>le(t).map(r=>({zone:String(se(r)??"").trim(),findings:le(r).map(d=>({title:j(d),value:String(se(d)??"").trim()})).filter(d=>d.title&&d.value)}))).filter(t=>t.zone&&t.findings.length>0),Jt=Z(()=>{const i=be.value||[],t=r=>i.filter(d=>le(d).length>0&&r(re(j(d))));return{respiratory:It(t(r=>r.includes("lung position"))),abdomen:It(t(r=>r==="palpation"))}}),Pt=Z(()=>{const i=ct.value?.["Review of Systems"]||[];return ce(i)}),Qt=Z(()=>rt(Pt.value)),ht=i=>{const t=new Map;return i.forEach(r=>{const d=String(j(r));if(!d)return;const m=new Date(r?.obs_datetime||0).getTime(),u=t.get(d),y=u?new Date(u?.obs_datetime||0).getTime():-1;(!u||m>=y)&&t.set(d,r)}),Array.from(t.values())},es=i=>[...i||[]].sort((t,r)=>new Date(r?.obs_datetime||0).getTime()-new Date(t?.obs_datetime||0).getTime()),ts=i=>{const t=new Set;return(i||[]).filter(r=>{if(le(r).length>0)return!0;const d=`${j(r)}::${re(se(r))}`;return t.has(d)?!1:(t.add(d),!0)})},_t=(i,t=[])=>{const r={};for(const d of t)i[d]&&(r[d]=i[d]);return Object.entries(i).forEach(([d,m])=>{r[d]||(r[d]=m)}),r},Ce=Z(()=>{const i={},t=et(D.value);for(const r of t){const d=at(r?.concept_name||r?.concept_id||"");i[d]||(i[d]=[]),i[d].push(r)}return _t(i,["Presenting Complaints","Past Medical History","Past Surgical History","Family History","Social History","Allergies","Gynecological History","Review of Systems","Physical Examination","Working Differential Diagnosis","Investigations","Initial Management","Other"])}),ct=Z(()=>{const i={},t=et(be.value);for(const r of t){const d=ft(r?.concept_name||r?.concept_id||"");i[d]||(i[d]=[]),i[d].push(r)}return _t(i,["Presenting Complaints","Drug History","Past Medical History","Past Surgical History","Social History","Family History","Allergy","Intoxication","Review of Systems","Physical Examination","Summary","Differential Diagnosis","Investigations","Management Plan"])}),ss=Z(()=>{const i={};for(const t of te.value){const r=ot(t?.concept_name||t?.concept_id||"");i[r]||(i[r]=[]),i[r].push(t)}return _t(i,["Complaints","Obstetric And Gynaecology History","Medical History","Habits","Vital Signs","General Examination","Impression","Plan"])}),is=async()=>{O.value=!0;try{const t=(await K(f.SURGICAL_NOTES_TEMPLATE)).flatMap(u=>u.obs||[]),r=t.map(u=>R.toStandardHisFormat(u?.obs_datetime)).filter(Boolean).sort().pop(),d=r?t.filter(u=>R.toStandardHisFormat(u?.obs_datetime)===r):[],m=await je(d);D.value=ht(m)}catch(i){console.error("Failed to load surgical notes records:",i),D.value=[]}finally{O.value=!1}},ns=async()=>{he.value=!0;try{const t=(await K(f.MEDICAL_IN_PATIENT)).flatMap(d=>d.obs||[]),r=await je(es(t));be.value=ts(r)}catch(i){console.error("Failed to load medical inpatient records:",i),be.value=[]}finally{he.value=!1}},as=async()=>{G.value=!0;try{const t=(await K(f.GYNEACOLOGY_WARD)).flatMap(u=>u.obs||[]),r=t.map(u=>R.toStandardHisFormat(u?.obs_datetime)).filter(Boolean).sort().pop(),d=r?t.filter(u=>R.toStandardHisFormat(u?.obs_datetime)===r):[],m=await je(d);te.value=ht(m)}catch(i){console.error("Failed to load gyneacology ward records:",i),te.value=[]}finally{G.value=!1}},Tt={all:"Clinical Notes",surgical:"Surgical Notes",gyneacology:"Gyneacology Ward",medical:"Medical Inpatient"},kt=async()=>{await Kt(),await new Promise(i=>{if(typeof window>"u"||!window.requestAnimationFrame){i();return}window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>i()))})},Lt=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Rt=()=>{const i=window.open("","_blank","width=900,height=1000");return i?(i.document.open(),i.document.write("<!doctype html><html><head><title>Preparing clinical notes...</title></head><body>Preparing clinical notes...</body></html>"),i.document.close(),i):(Ye("Please allow pop-ups to download clinical notes."),null)},Dt=i=>{i.querySelectorAll("button, .clinical-notes-actions, .navigation-arrows, .scroll-indicator, .menu-trigger, .expand-icon, .refresh-btn, .actions, .demographics-actions, .three-dot-menu, .patient-card-menu, ion-icon, ion-button").forEach(t=>t.remove()),i.querySelectorAll(".apexcharts-toolbar, .apexcharts-menu, .apexcharts-zoom-icon, .apexcharts-zoomin-icon, .apexcharts-zoomout-icon, .apexcharts-pan-icon, .apexcharts-reset-icon, .apexcharts-menu-icon").forEach(t=>t.remove()),i.querySelectorAll(".apexcharts-legend").forEach(t=>t.remove())},os=()=>{const i=document.querySelector(".clinical-notes-section"),t=i?.querySelector(".clinical-notes-demographics")?.cloneNode(!0),r=i?.querySelector(".clinical-notes-list")?.cloneNode(!0);if(t&&Dt(t),r&&Dt(r),!r)return"";const d=Tt[P.value],m=!!r.querySelector(".clinical-notes-list-header");return`
            <main class="clinical-notes-print-document">
                ${t?`<section class="clinical-notes-print-demographics">${t.innerHTML}</section>`:""}
                ${m?"":`<h1 class="notes-print-title">${Lt(d)}</h1>`}
                ${r.outerHTML}
            </main>
        `},ls=(i,t)=>`
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>${Lt(t)}</title>
<style>
@page { size: A4 portrait; margin: 10mm; }
* { box-sizing: border-box; }
html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #111827;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 9.5px;
    line-height: 1.25;
    overflow: visible !important;
    height: auto !important;
}
.clinical-notes-print-document {
    width: 100%;
    max-width: 100%;
    overflow-wrap: anywhere;
}
/* The printed document is built from the scraped DOM without the app stylesheet,
   so the line breaks in free-text sections (Management Plan, Summary) have to be
   preserved here too or the plan prints as one run-on sentence. */
.medical-record-value, .mipe-value, .ros-value, .pe-value {
    white-space: pre-wrap;
}
.mipe-zones { display: block !important; }
.mipe-zone { break-inside: avoid; page-break-inside: avoid; margin-bottom: 4px; }
.mipe-zone-title { font-weight: 700; }
button, .clinical-notes-actions, .navigation-arrows, .scroll-indicator, .menu-trigger,
.expand-icon, .refresh-btn, .actions, .demographics-actions, .three-dot-menu,
.patient-card-menu, ion-icon, ion-button,
.apexcharts-toolbar, .apexcharts-menu, .apexcharts-zoom-icon, .apexcharts-zoomin-icon,
.apexcharts-zoomout-icon, .apexcharts-pan-icon, .apexcharts-reset-icon,
.apexcharts-menu-icon, .apexcharts-legend { display: none !important; }
ion-card, ion-card-content, ion-row, ion-col, ion-grid,
.clinical-notes-section, .clinical-notes-card, .clinical-notes-list,
.clinical-notes-tab, .tiles-grid, .encounter-tile, .tile-body, .tile-body-inner {
    display: block !important;
    width: 100% !important;
    max-width: none !important;
    min-height: 0 !important;
    height: auto !important;
    max-height: none !important;
    overflow: visible !important;
    box-shadow: none !important;
    background: #fff !important;
}
ion-card, ion-card-content,
.clinical-notes-section, .clinical-notes-card, .clinical-notes-list,
.clinical-notes-tab, .tiles-grid {
    border: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
}
.clinical-notes-demographics, .clinical-notes-print-demographics {
    display: block !important;
    width: 100% !important;
    margin-bottom: 12px;
    padding: 7px 8px 9px;
    border: 1px solid #d1d5db;
    border-radius: 2px;
    background: #fff !important;
}
.clinical-notes-demographics > div:first-child,
.clinical-notes-print-demographics > div:first-child,
.clinical-notes-demographics .slider-wrapper,
.clinical-notes-print-demographics .slider-wrapper {
    display: block !important;
    width: 100% !important;
    overflow: visible !important;
    position: static !important;
}
.clinical-notes-demographics .second_bar_list,
.clinical-notes-print-demographics .second_bar_list,
.clinical-notes-demographics .bar_items,
.clinical-notes-print-demographics .bar_items {
    display: grid !important;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    gap: 4px 18px;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
    transform: none !important;
    transition: none !important;
    white-space: normal !important;
}
.clinical-notes-demographics .bar-item,
.clinical-notes-print-demographics .bar-item {
    display: block !important;
    min-width: 0 !important;
    margin: 0 !important;
    color: #111827 !important;
    font-size: 9.5px !important;
    line-height: 1.25 !important;
}
.clinical-notes-demographics .vitals-item,
.clinical-notes-print-demographics .vitals-item {
    display: none !important;
}
.clinical-notes-list-header, .notes-print-title {
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    margin: 8px 0 10px;
}
.notes-header { display: none !important; }
.tile-header {
    display: flex !important;
    align-items: center;
    gap: 6px;
    margin: 12px 0 6px;
    padding: 0;
    border: 0;
    background: #fff !important;
    font-size: 13px;
    font-weight: 700;
}
.tile-icon, .tile-header-icon { display: none !important; }
.tile-body, .tile-body-inner { display: block !important; }
.encounter-tile {
    margin: 0 0 9px !important;
    padding: 8px !important;
    border: 1px solid #e5e7eb !important;
    border-radius: 7px !important;
    box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08) !important;
    break-inside: avoid;
    page-break-inside: avoid;
}
.clinical-notes-section-block, .gyne-section-block, .medical-section-block, .surgical-section-block {
    border-top: 1px solid #e5e7eb;
    padding: 4px 0;
    margin: 0 0 4px;
    break-inside: avoid;
    page-break-inside: avoid;
}
.clinical-notes-section-title, h1, h2, h3 {
    margin: 4px 0;
    font-weight: 700;
    color: #111827;
}
h1 { font-size: 16px; text-align: center; }
h2, .clinical-notes-section-title { font-size: 13px; }
h3, .tile-title { font-size: 12px; }
.gyne-section-items, .medical-section-items, .surgical-section-items,
.clinical-notes-section-items, .triage-pdf-row, .triage-summary-list {
    display: flex !important;
    flex-wrap: wrap;
    gap: 4px 14px;
    align-items: flex-start;
}
.gyne-record, .medical-record, .surgical-record, .clinical-notes-record,
.triage-pdf-line, .triage-summary-row {
    display: inline-flex;
    width: auto;
    min-width: 0;
    margin: 0 10px 4px 0;
    padding: 0;
    border: 0;
    background: transparent;
}
.surgical-notes-records {
    display: block !important;
    gap: 0 !important;
}
.surgical-section-block {
    border-top: 0 !important;
    border-bottom: 1px solid #9ca3af !important;
    margin: 0 !important;
    padding: 5px 0 6px !important;
    background: transparent !important;
    break-inside: auto !important;
    page-break-inside: auto !important;
}
.surgical-section-block:last-child {
    border-bottom: 0 !important;
}
.surgical-section-block .clinical-notes-section-title {
    font-size: 11px !important;
    line-height: 1.2 !important;
    margin: 0 0 3px !important;
}
.surgical-section-block .pm-card,
.surgical-section-block .pe-card,
.surgical-section-block .im-card {
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
    min-height: 0 !important;
    background: transparent !important;
    break-inside: auto !important;
    page-break-inside: auto !important;
}
.surgical-section-block .pm-card-title,
.surgical-section-block .pm-card-divider,
.surgical-section-block .pe-title,
.surgical-section-block .im-title {
    display: none !important;
}
.surgical-section-block .pm-list {
    display: flex !important;
    flex-flow: row wrap !important;
    gap: 3px 16px !important;
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
    font-size: 9px !important;
    line-height: 1.25 !important;
}
.surgical-section-block .pm-list li,
.surgical-section-block .surgical-record,
.surgical-section-block .pc-line,
.surgical-section-block .pe-line,
.surgical-section-block .im-line {
    display: inline-flex !important;
    flex-wrap: wrap !important;
    align-items: baseline !important;
    gap: 2px 4px !important;
    min-width: 0 !important;
    width: auto !important;
    margin: 0 12px 2px 0 !important;
    padding: 0 !important;
    border: 0 !important;
    background: transparent !important;
    color: #111827 !important;
    font-size: 9px !important;
    line-height: 1.25 !important;
}
.surgical-section-block .pc-line + .pc-line {
    margin-top: 2px !important;
}
.surgical-section-block .pe-row4,
.surgical-section-block .pe-row3,
.surgical-section-block .im-row3 {
    display: grid !important;
    gap: 3px 14px !important;
}
.surgical-section-block .pe-row4 {
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
}
.surgical-section-block .pe-row3,
.surgical-section-block .im-row3 {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
}
.surgical-section-block .pe-subtitle {
    font-size: 9.5px !important;
    font-weight: 700 !important;
    margin: 5px 0 3px !important;
}
.surgical-section-block .pe-divider {
    border-top: 1px solid #9ca3af !important;
    margin: 5px 0 !important;
}
.surgical-section-block .ros-grid {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 0 !important;
    border: 1px solid #e5e7eb !important;
}
.surgical-section-block .ros-col + .ros-col {
    border-left: 1px solid #e5e7eb !important;
}
.surgical-section-block .ros-item {
    display: block !important;
    margin: 0 !important;
    padding: 5px 7px !important;
    border-bottom: 1px solid #e5e7eb !important;
    font-size: 8.8px !important;
    line-height: 1.25 !important;
}
.surgical-section-block .ros-col .ros-item:last-child {
    border-bottom: 0 !important;
}
.surgical-section-block .pe-table {
    margin: 3px 0 0 !important;
}
.surgical-section-block .pe-table th,
.surgical-section-block .pe-table td {
    padding: 5px 7px !important;
    font-size: 8.8px !important;
    line-height: 1.25 !important;
}
.surgical-section-block .pm-label,
.surgical-section-block .pc-label,
.surgical-section-block .pe-label,
.surgical-section-block .im-label,
.surgical-section-block .ros-label,
.surgical-section-block .surgical-record-label {
    font-weight: 700 !important;
    color: #111827 !important;
}
.surgical-section-block .pm-value,
.surgical-section-block .pc-value,
.surgical-section-block .pe-value,
.surgical-section-block .im-value,
.surgical-section-block .ros-value,
.surgical-section-block .surgical-record-value {
    color: #374151 !important;
}
.medical-notes-records {
    display: block !important;
    gap: 0 !important;
}
.medical-section-block {
    border-top: 0 !important;
    border-bottom: 1px solid #9ca3af !important;
    margin: 0 !important;
    padding: 5px 0 6px !important;
    background: transparent !important;
    break-inside: auto !important;
    page-break-inside: auto !important;
}
.medical-section-block:last-child {
    border-bottom: 0 !important;
}
.medical-section-block .clinical-notes-section-title {
    font-size: 11px !important;
    line-height: 1.2 !important;
    margin: 0 0 3px !important;
}
.medical-section-items {
    display: flex !important;
    flex-flow: row wrap !important;
    align-items: flex-start !important;
    gap: 3px 16px !important;
}
.medical-section-items--stacked {
    display: flex !important;
    flex-direction: column !important;
    gap: 3px !important;
}
.medical-section-block .medical-record {
    display: inline-flex !important;
    flex-wrap: wrap !important;
    align-items: baseline !important;
    gap: 2px 4px !important;
    min-width: 0 !important;
    width: auto !important;
    margin: 0 12px 2px 0 !important;
    padding: 0 !important;
    border: 0 !important;
    background: transparent !important;
    color: #111827 !important;
    font-size: 9px !important;
    line-height: 1.25 !important;
}
.medical-section-items--stacked .medical-record {
    width: 100% !important;
    margin-right: 0 !important;
}
.medical-section-block .medical-record-label,
.medical-section-block .mipe-label,
.medical-section-block .ros-label {
    font-weight: 700 !important;
    color: #111827 !important;
}
.medical-section-block .medical-record-value,
.medical-section-block .mipe-value,
.medical-section-block .ros-value {
    color: #374151 !important;
}
.medical-section-block .medical-review-card,
.medical-section-block .mipe-card {
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
    min-height: 0 !important;
    background: transparent !important;
    break-inside: auto !important;
    page-break-inside: auto !important;
}
.medical-section-block .ros-grid {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 0 !important;
    border: 1px solid #e5e7eb !important;
}
.medical-section-block .ros-col {
    display: block !important;
}
.medical-section-block .ros-col + .ros-col {
    border-left: 1px solid #e5e7eb !important;
}
.medical-section-block .ros-item {
    display: block !important;
    margin: 0 !important;
    padding: 5px 7px !important;
    border-bottom: 1px solid #e5e7eb !important;
    font-size: 8.8px !important;
    line-height: 1.25 !important;
}
.medical-section-block .ros-col .ros-item:last-child {
    border-bottom: 0 !important;
}
.medical-section-block .mipe-line {
    display: inline-flex !important;
    flex-wrap: wrap !important;
    align-items: baseline !important;
    gap: 2px 4px !important;
    min-width: 0 !important;
    width: auto !important;
    margin: 0 12px 2px 0 !important;
    color: #111827 !important;
    font-size: 9px !important;
    line-height: 1.25 !important;
}
.medical-section-block .mipe-row6,
.medical-section-block .mipe-row5,
.medical-section-block .mipe-row3,
.medical-section-block .mipe-row2 {
    display: grid !important;
    gap: 3px 14px !important;
    width: 100% !important;
}
.medical-section-block .mipe-row6 {
    grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
}
.medical-section-block .mipe-row5 {
    grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
}
.medical-section-block .mipe-row3 {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
}
.medical-section-block .mipe-row2 {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
}
.medical-section-block .mipe-subtitle {
    font-size: 9.5px !important;
    font-weight: 700 !important;
    margin: 5px 0 3px !important;
}
.medical-section-block .mipe-divider {
    border-top: 1px solid #9ca3af !important;
    margin: 5px 0 !important;
}
.medical-section-block .mipe-zones {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 4px 12px !important;
    margin-top: 4px !important;
}
.medical-section-block .mipe-zone-title {
    font-size: 9px !important;
    font-weight: 700 !important;
    margin-bottom: 2px !important;
}
.medical-section-block .pe-table {
    margin: 3px 0 0 !important;
}
.medical-section-block .pe-table th,
.medical-section-block .pe-table td {
    padding: 5px 7px !important;
    font-size: 8.8px !important;
    line-height: 1.25 !important;
}
.triage-summary-letter { margin-right: 5px; font-weight: 700; }
.triage-summary-content { margin: 0; }
.triage-summary-created { display: block; width: 100%; margin-top: 6px; font-style: italic; color: #6b7280; }
.triage-summary-list {
    display: flex !important;
    flex-direction: column !important;
    flex-wrap: nowrap !important;
    gap: 6px !important;
}
.triage-summary-row {
    display: grid !important;
    grid-template-columns: 18px minmax(0, 1fr) !important;
    width: 100% !important;
    margin: 0 !important;
}
.triage-summary-created {
    margin-left: 0 !important;
}
.clinical-notes-record-card, .pe-card, .soapier-card, .pm-card, .sample-card, .monitoring-chart-card, .fluid-balance-card {
    display: block !important;
    width: 100%;
    border: 1px solid #e5e7eb !important;
    border-radius: 6px !important;
    box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08) !important;
    margin: 0;
    padding: 7px !important;
    break-inside: avoid;
    page-break-inside: avoid;
}
.soapier-grid, .pm-grid, .sample-grid {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 7px !important;
    width: 100% !important;
}
.monitoring-chart-grid {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 7px !important;
    width: 100% !important;
    padding: 0 !important;
}
.monitoring-chart-card {
    min-height: 155px !important;
    overflow: hidden !important;
    position: relative !important;
}
.monitoring-chart-title, .soapier-card-title, .pm-card-title, .sample-card-title {
    font-size: 10px !important;
    font-weight: 700 !important;
    margin: 0 0 4px !important;
}
.monitoring-chart-divider, .soapier-card-divider, .pm-card-divider, .sample-card-divider {
    border-top: 1px solid #e5e7eb !important;
    margin: 4px 0 5px !important;
}
.monitoring-chart-body, .monitoring-chart-body > div, .apexcharts-canvas {
    max-width: 100% !important;
    width: 100% !important;
}
.monitoring-chart-legend {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 12px !important;
    margin-top: -4px !important;
    color: #475569 !important;
    font-size: 8.5px !important;
}
.monitoring-chart-legend-item {
    display: inline-flex !important;
    align-items: center !important;
    gap: 4px !important;
}
.monitoring-chart-legend-marker {
    display: inline-block !important;
    font-size: 8.5px !important;
    line-height: 1 !important;
    flex: 0 0 auto !important;
}
.monitoring-chart-empty, .no-observations {
    min-height: 55px !important;
    padding: 10px !important;
    font-size: 9px !important;
}
.fluid-balance-entry-grid {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 7px !important;
    width: 100% !important;
    padding: 0 !important;
}
.fluid-balance-card-header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: flex-start !important;
    gap: 7px !important;
    padding-bottom: 4px !important;
    margin-bottom: 5px !important;
    border-bottom: 1px solid #e5e7eb !important;
}
.fluid-balance-card-title {
    font-size: 10px !important;
    font-weight: 700 !important;
}
.fluid-balance-card-subtitle {
    color: #64748b !important;
    font-size: 8.5px !important;
}
.fluid-balance-badge {
    border: 1px solid #86efac !important;
    border-radius: 999px !important;
    color: #166534 !important;
    font-size: 8.5px !important;
    font-weight: 700 !important;
    padding: 2px 6px !important;
    white-space: nowrap !important;
}
.fluid-balance-badge--alert {
    border-color: #fecaca !important;
    color: #991b1b !important;
}
.fluid-balance-sections {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 6px !important;
}
.fluid-balance-section-title {
    font-size: 9px !important;
    font-weight: 700 !important;
    margin-bottom: 3px !important;
}
.fluid-balance-list {
    list-style: none !important;
    padding: 0 !important;
    margin: 0 !important;
    font-size: 8.8px !important;
    line-height: 1.25 !important;
}
.fluid-balance-list li + li {
    margin-top: 2px !important;
}
.fluid-balance-list span {
    font-weight: 700 !important;
}
.fluid-balance-empty {
    color: #8f9aa3 !important;
    font-style: italic !important;
}
.soapier-card-body, .soapier-block-value, .pm-list, .sample-list {
    font-size: 9.5px !important;
    line-height: 1.25 !important;
    overflow: visible !important;
    white-space: normal !important;
}
.survey-print-grid {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 7px !important;
    width: 100% !important;
}
.survey-print-grid .clinical-notes-section-block {
    border: 1px solid #e5e7eb !important;
    border-radius: 6px !important;
    padding: 7px !important;
    margin: 0 !important;
    box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08) !important;
    background: #fff !important;
}
.survey-print-grid .observation-list {
    display: block !important;
    padding: 0 !important;
    margin: 0 0 0 12px !important;
    list-style: disc !important;
}
.survey-print-grid .observation-row {
    display: list-item !important;
    padding: 0 !important;
    margin: 0 0 2px !important;
    border: 0 !important;
    background: transparent !important;
}
.survey-print-grid .obs-concept,
.survey-print-grid .obs-value {
    display: inline !important;
    padding: 0 !important;
    border: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    color: #111827 !important;
    font-size: 9.2px !important;
    text-align: left !important;
}
.survey-print-grid .obs-concept::after {
    content: ": ";
}
.pe-row4, .pe-row3, .pe-row2 {
    display: flex !important;
    flex-wrap: wrap;
    gap: 4px 14px;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin: 4px 0 8px;
    page-break-inside: auto;
}
thead { display: table-header-group; }
tr { break-inside: avoid; page-break-inside: avoid; }
th, td {
    border: 1px solid #e5e7eb;
    padding: 5px;
    text-align: left;
    vertical-align: top;
}
th { background: #f3f4f6; font-weight: 700; }
p { margin: 2px 0 5px; }
strong, b { font-weight: 700; }
@media print {
    html, body {
        width: auto;
        height: auto;
        overflow: visible !important;
    }
    .clinical-notes-print-document {
        break-inside: auto;
        page-break-inside: auto;
    }
}
</style>
</head>
<body>
${i}
<script>
window.addEventListener("load", function () {
    window.setTimeout(function () {
        window.focus();
        window.print();
    }, 250);
});
window.addEventListener("afterprint", function () {
    window.setTimeout(function () { window.close(); }, 100);
});
<\/script>
</body>
</html>
`,Ot=async i=>{await kt();const t=os();if(!t.trim()){i.close(),Ye("No clinical notes content available to download.");return}const r=Tt[P.value];i.document.open(),i.document.write(ls(t,r)),i.document.close()},St=async()=>{const i=Rt();i&&await Ot(i)},rs=async()=>{if(!Xe.value.length){Ye("No clinical notes records available to download.");return}const i=Rt();if(!i)return;const t={...Me.value};Me.value=Xe.value.reduce((r,d)=>(r[d.id]=!0,r),{...Me.value});try{await kt(),typeof window<"u"&&window.dispatchEvent(new Event("resize")),await kt(),await Ot(i)}finally{Me.value=t}},cs=async()=>{if(P.value==="all"){await rs();return}if(P.value==="surgical"){if(!D.value.length){Ye("No surgical notes records available to download.");return}await St();return}if(P.value==="medical"){if(!be.value.length){Ye("No medical inpatient records available to download.");return}await St();return}if(P.value==="gyneacology"){if(!te.value.length){Ye("No gyneacology ward records available to download.");return}await St();return}Ye("Please select Surgical Notes, Gyneacology, Medical Inpatient, or All to download.")},re=i=>String(i??"").trim().toLowerCase(),K=async i=>{const t=await mt.getObsByEncounterId(i),r=ri();return r.hasSelection?t.map(d=>({...d,obs:(d?.obs||[]).filter(m=>r.matchesObs(m))})).filter(d=>(d?.obs||[]).length>0):t},W=i=>{if(!Array.isArray(i)||i.length===0)return null;const t=r=>{const d=r?.encounter_datetime;if(d){const u=new Date(d).getTime();if(Number.isFinite(u))return u}const m=(r?.obs||[]).map(u=>new Date(u?.obs_datetime||0).getTime()).filter(u=>Number.isFinite(u)&&u>0);return m.length?Math.max(...m):-1};return i.reduce((r,d)=>t(d)>t(r)?d:r,i[0])},Ne=i=>{const t=new Date(i);if(!Number.isFinite(t.getTime()))return"";const r=t.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),d=t.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0});return`${r} at ${d}`},Ae=async i=>{const t=Number(i);if(!Number.isFinite(t)||t<=0)return"Unknown";if(ve.has(t))return ve.get(t);try{const r=await oi.getUserByID(t),d=r?.name||r?.username||`User #${t}`;return ve.set(t,d),d}catch{const d=`User #${t}`;return ve.set(t,d),d}},M=(i,t)=>{const r=(i||[]).find(d=>t(re(j(d))));return r?String(se(r)??"").trim():""},ds=i=>i?.value_coded??i?.valueCoded??i?.answer_concept_id??i?.value?.concept_id??i?.value?.conceptId??i?.value?.concept?.concept_id??i?.value?.concept?.id,st=i=>i?mt.flattenObservationTree(Array.isArray(i?.obs)?i.obs:[]):[],Mt=i=>{const t=i?.encounter_datetime||i?.obs?.[0]?.obs_datetime;if(!t)return"";try{return R.toStandardHisFormat(t)}catch{return""}},xt=(i,t)=>{const r=Array.isArray(i)?i.filter(Boolean):[],d=t?r.filter(m=>Mt(m)===t):[];return W(d.length?d:r)},wt=i=>{const t=i?.obs||i?.children||i?.child||i?.groupMembers||[];return Array.isArray(t)?t:[]},Ht=i=>i.includes("workstation")||i==="location"||i.includes("patient care area")||i.includes("triage result")||i.includes("triage category"),ps=i=>/\b(hour|hours|day|days|week|weeks|month|months|year|years|minute|minutes)\b/i.test(i),dt=i=>/^\d+(\.\d+)?$/.test(i.trim()),Ft=async i=>{const t=String(i??"").trim(),r=Number(t);if(!t||!Number.isFinite(r)||r<=0)return"";if(Pe.has(r))return Pe.get(r)||"";try{const d=String(await Yt.getConceptName(r)||"").trim();return Pe.set(r,d),d}catch{return Pe.set(r,""),""}},$t=async i=>{const t=String(i??"").trim();return!t||!dt(t)?t:await Ft(t)||t},us=(i,t)=>{const r=String(i??"").trim(),d=String(t??"").trim();return r?d&&r.toLowerCase().includes(d.toLowerCase())?r:d?`${r} ${d}`:r:""},Bt=i=>!i||dt(i)||Ht(i)||i==="presenting complaints"||i==="presenting complaint"||i.includes("duration")||i.includes("workstation"),ms=async i=>{const t=Array.isArray(i?.obs)?i.obs:[],r=[],d=async u=>{const y=String(await $t(j(u))).trim(),w=re(y),N=String(se(u)??"").trim().split(" - ")[0].trim(),c=ds(u),h=N&&dt(N)&&await Ft(c??N)||N;return!h||ps(h)||dt(h)?Bt(w)?"":y:h},m=u=>{const y=String(u??"").trim();y&&!r.includes(y)&&r.push(y)};for(const u of t){const y=re(await $t(j(u)));if(!y||Ht(y))continue;const w=r.length;(await Promise.all(wt(u).map(d))).filter(Boolean).forEach(m),r.length===w&&m(await d(u))}return r.length||(await Promise.all(st(i).map(d))).filter(Boolean).forEach(m),r.length?r.map((u,y)=>`(${y+1}). ${u}`).join(", "):"N/A"},gs=(i,t)=>{const r=M(i,b=>b.includes("temperature")),d=M(i,b=>b==="pulse"||b.includes("pulse rate")),m=M(i,b=>b.includes("heart rate")),u=M(i,b=>b.includes("systolic")),y=M(i,b=>b.includes("diastolic")),w=M(i,b=>b.includes("respiratory")),A=M(i,b=>b.includes("oxygen")||b.includes("spo2")||b.includes("sao2")||b==="sao2"),N=M(i,b=>b.includes("glucose")&&!b.includes("unit")),c=M(i,b=>b.includes("glucose")&&b.includes("unit"))||(N?"mmol/l":""),h=M(i,b=>b==="avpu"||b.includes("avpu"))||M(t,b=>b==="avpu"||b.includes("avpu")||b.includes("level of consciousness")),C=[];return r&&C.push(`Temperature: ${r} °C`),d&&C.push(`Pulse: ${d} bpm`),m&&C.push(`Heart: ${m} bpm`),(u||y)&&C.push(`BP: ${u||"-"}${y?`/${y}`:""} mmHg`),w&&C.push(`Respiratory: ${w} breaths/min`),A&&C.push(`Oxygen: ${A} %`),N&&C.push(`Glucose: ${us(N,c)}`),h&&C.push(`AVPU: ${h}`),C.length?C.join(" "):"N/A"},Vt=(i,t)=>i?.obs_datetime||i?.obsDatetime||i?.date_created||t,vs=i=>{const t=R.toStandardHisDisplayFormat(i),r=R.toStandardHisTimeFormat(i);return[t,r].filter(Boolean).join(" ")},ys=i=>{const t=String(se(i)??"").trim(),r=Number.parseFloat(t);return Number.isFinite(r)?r:null},fs=async i=>{const t={systolic:[],diastolic:[],temperature:[],heartRate:[],respiratoryRate:[],oxygenSaturation:[],glucose:[],peakExpiratoryFlowRate:[],urineDipstickKetones:[]};for(const d of i||[]){const u=(Array.isArray(d?.obs)?d.obs:[]).filter(y=>re(j(y))==="triage result"&&wt(y).length>0);for(const y of u){const w=mt.flattenObservationTree(wt(y)),A=Vt(y,d?.encounter_datetime);for(const N of w){const c=re(j(N)),h=ys(N);if(h===null)continue;const C=Vt(N,A),b=C?vs(C):"";b&&(c.includes("systolic")?t.systolic.push({x:b,y:h}):c.includes("diastolic")?t.diastolic.push({x:b,y:h}):c.includes("temperature")?t.temperature.push({x:b,y:h}):c.includes("heart rate")?t.heartRate.push({x:b,y:h}):c.includes("respiratory")?t.respiratoryRate.push({x:b,y:h}):c.includes("oxygen")||c.includes("spo2")||c.includes("sao2")?t.oxygenSaturation.push({x:b,y:h}):c.includes("glucose")?t.glucose.push({x:b,y:h}):c.includes("peak expiratory")?t.peakExpiratoryFlowRate.push({x:b,y:h}):c.includes("urine")&&c.includes("ketone")&&t.urineDipstickKetones.push({x:b,y:h}))}}}return Object.values(t).some(d=>d.length>0)?{charts:[{key:"bloodPressure",title:"Blood Pressure (BP)",series:[{name:"Systolic",data:t.systolic},{name:"Diastolic",data:t.diastolic}],colors:["#2563eb","#e11d48"]},{key:"temperature",title:"Temperature (°C)",series:[{name:"Temperature",data:t.temperature}],colors:["#8b5cf6"]},{key:"heartRate",title:"Heart Rate (bpm)",series:[{name:"Heart Rate",data:t.heartRate}],colors:["#14b8a6"]},{key:"respiratoryRate",title:"Respiratory Rate (breaths/min)",series:[{name:"Respiratory Rate",data:t.respiratoryRate}],colors:["#db2777"]},{key:"oxygenSaturation",title:"Oxygen Saturation (O₂ Sat)",series:[{name:"Oxygen Saturation",data:t.oxygenSaturation}],colors:["#f59e0b"]},{key:"glucose",title:"Glucose (mmol/L)",series:[{name:"Glucose",data:t.glucose}],colors:["#0891b2"]},{key:"peakExpiratoryFlowRate",title:"Peak Expiratory Flow Rate (L/min)",series:[{name:"PEFR",data:t.peakExpiratoryFlowRate}],colors:["#16a34a"]},{key:"urineDipstickKetones",title:"Urine Dipstick Ketones",series:[{name:"Ketones",data:t.urineDipstickKetones}],colors:["#7c3aed"]}]}:null},bs=async()=>{Fe.value=!0,F.value=null;try{const i=await K(f.VITALS);F.value=await fs(i||[])}catch(i){console.error("Failed to load monitoring chart records:",i),F.value=null}finally{Fe.value=!1}},hs=[ne.phala,ne.water,ne.oralFluids,ne.ivFluids],_s=[ne.urineVolume,ne.urineAppearance,ne.vomitVolume,ne.vomitColour],ks=[ne.bristolType,ne.stoolColour,ne.sampleSent,ne.labPanel],Nt=(i,t)=>t.map(r=>{const d=(i||[]).filter(u=>re(j(u))===re(r)),m=pt(d.map(u=>se(u)));return m.length===0?null:{title:r,value:m.join(", ")}}).filter(Boolean),zt=i=>i.reduce((t,r)=>{const d=Number.parseFloat(String(r.value));return Number.isFinite(d)?t+d:t},0),Ss=async i=>{const t=(i||[]).filter(Boolean).map(r=>{const d=st(r),m=M(d,$=>$===re(ne.entryDate)),u=M(d,$=>$===re(ne.entryTime)),y=Nt(d,hs),w=Nt(d,_s),A=Nt(d,ks),N=M(d,$=>$===re(ne.comments)),c=zt(y),h=zt(w.filter($=>[ne.urineVolume,ne.vomitVolume].includes($.title))),C=c-h,b=new Date(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime||0).getTime();return{id:r?.encounter_id||r?.encounterId||`${m}-${u}-${b}`,entryDate:m||R.toStandardHisDisplayFormat(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime),entryTime:u||R.toStandardHisTimeFormat(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime),intake:y,output:w,stool:A,comments:N,totalIntake:c,totalOutput:h,balance:C,balanceLabel:`${C>0?"+":""}${C} mL`,createdAt:b}}).filter(r=>r.intake.length||r.output.length||r.stool.length||r.comments).sort((r,d)=>d.createdAt-r.createdAt);return t.length?{entries:t}:null},xs=async()=>{J.value=!0,oe.value=null;try{const i=await K(f.FLUID_BALANCE_AND_STOOL_MONITORING);oe.value=await Ss(i||[])}catch(i){console.error("Failed to load fluid balance and stool monitoring records:",i),oe.value=null}finally{J.value=!1}},ws=async()=>{_e.value=!0,ae.value=null;try{const[i,t,r,d,m]=await Promise.all([K(f.TRIAGE_RESULT),K(f.TRIAGE_PRESENTING_COMPLAINTS),K(f.PRESENTING_COMPLAINTS),K(f.VITALS),K(f.CONSCIOUSNESS)]),u=[...t||[],...r||[]],y=W(i||[]),w=W([W(u),W(d||[]),W(m||[])].filter(Boolean)),A=y||w;if(!A)return;const N=Mt(A),c=xt(u,N),h=xt(d||[],N),C=xt(m||[],N),b=st(y),$=st(h),B=st(C),Y=await ms(c),de=gs($,B),X=M(b,ge=>ge.includes("triage")&&(ge.includes("category")||ge.includes("result")||ge.includes("cat")))||"N/A",q=M(b,ge=>ge.includes("patient care area"))||M(b,ge=>ge==="location")||"N/A",me=y?.provider_id||y?.provider?.id||y?.creator||A?.provider_id||A?.provider?.id||A?.creator,I=await Ae(me),S=Ne(y?.encounter_datetime||A?.encounter_datetime||A?.obs?.[0]?.obs_datetime),ee=S?`created by ${I} on ${S}.`:`created by ${I}.`;ae.value={presentingComplaints:Y,vitalSigns:de,triageCategory:X,patientCareArea:q,createdByLine:ee}}catch(i){console.error("Failed to load triage information:",i),ae.value=null}finally{_e.value=!1}},pt=i=>{const t=(i||[]).map(r=>String(r??"").trim()).filter(Boolean);return Array.from(new Set(t))},ce=(i,t)=>{const r=t?.flattenChildren?mt.flattenObservationTree(i||[]):i||[];return ht(r).map(m=>{const u=String(j(m)||"").trim()||"Observation",y=String(se(m)??"").trim();return y?{title:u,value:y}:null}).filter(Boolean)},Ns=async()=>{ke.value=!0,we.value=null;try{const i=[f.AIRWAY_ASSESSMENT,f.BREATHING_ASSESSMENT,f.CIRCULATION_ASSESSMENT,f.DISABILITY_ASSESSMENT,f.EXPOSURE_ASSESSMENT],t=await Promise.all(i.map(h=>K(h))),r=new Map(i.map((h,C)=>[h,t[C]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=[{id:f.AIRWAY_ASSESSMENT,title:"Airway"},{id:f.BREATHING_ASSESSMENT,title:"Breathing"},{id:f.CIRCULATION_ASSESSMENT,title:"Circulation"},{id:f.DISABILITY_ASSESSMENT,title:"Disability"},{id:f.EXPOSURE_ASSESSMENT,title:"Exposure"}],w={};for(const h of y){const C=r.get(h.id)||[],$=(u?C.filter(Y=>R.toStandardHisFormat(Y?.encounter_datetime)===u):C).flatMap(Y=>Y?.obs||[]),B=ce($);B.length&&(w[h.title]=B)}const A=await Ae(m?.provider_id),N=Ne(m?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;we.value={sections:w,createdByLine:c}}catch(i){console.error("Failed to load primary survey:",i),we.value=null}finally{ke.value=!1}},As=async()=>{Se.value=!0,ye.value=null;try{const i=[f.ALLERGIES,f.REVIEW_OF_SYSTEMS,f.MEDICAL_HISTORY,f.OBSTETRIC_HISTORY,f.SUMMARY_ASSESSMENT,f.PRESCRIPTION,f.PRESENTING_COMPLAINTS,f.TRIAGE_PRESENTING_COMPLAINTS],t=await Promise.all(i.map(X=>K(X))),r=new Map(i.map((X,q)=>[X,t[q]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=(X,q)=>{if(!q.length)return X;const me=q.map(I=>I.toLowerCase());return X.filter(I=>{const S=(I.title||"").toLowerCase();return me.some(ee=>S.includes(ee))})},w=async(X,q)=>{const me=u?X.filter(Ee=>R.toStandardHisFormat(Ee?.encounter_datetime)===u):X,I=W(me),S=me.flatMap(Ee=>Ee?.obs||[]);let ee=ce(S,{flattenChildren:q?.flattenChildren});q?.filterTitleIncludes?.length&&(ee=y(ee,q.filterTitleIncludes));const ge=await Ae(I?.provider_id),We=Ne(I?.encounter_datetime),Ve=We?`${ge} ${We}`:ge;return{items:ee,createdByLine:Ve?` ${Ve}`:""}},A=await w([...r.get(f.PRESENTING_COMPLAINTS)||[],...r.get(f.TRIAGE_PRESENTING_COMPLAINTS)||[]],{flattenChildren:!0}),N=await w(r.get(f.ALLERGIES)||[]),c=await w(r.get(f.PRESCRIPTION)||[],{filterTitleIncludes:["medication history"]}),h=r.get(f.MEDICAL_HISTORY)||[],C=r.get(f.OBSTETRIC_HISTORY)||[],b=[...h,...C],$=await w(b),B=await w(r.get(f.REVIEW_OF_SYSTEMS)||[]),Y=r.get(f.SUMMARY_ASSESSMENT)||[],de=await w(Y,{filterTitleIncludes:["last meal","meal"]});ye.value={cards:{symptoms:A,events:B,allergies:N,medications:c,priorConditions:$,lastMeal:de}}}catch(i){console.error("Failed to load SAMPLE history:",i),ye.value=null}finally{Se.value=!1}},Es=async()=>{Q.value=!0,$e.value=null;try{const i=[f.GENERAL_INFORMATION,f.HEAD_AND_NECK_ASSESSMENT,f.CHEST_ASSESSMENT,f.ABDOMEN_AND_PELVIS_ASSESSMENT,f.EXTREMITIES_ASSESSMENT,f.NEUROLOGICAL_EXAMINATION],t=await Promise.all(i.map(h=>K(h))),r=new Map(i.map((h,C)=>[h,t[C]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=[{id:f.GENERAL_INFORMATION,title:"General Information"},{id:f.HEAD_AND_NECK_ASSESSMENT,title:"Head and Neck"},{id:f.CHEST_ASSESSMENT,title:"Chest"},{id:f.ABDOMEN_AND_PELVIS_ASSESSMENT,title:"Abdomen and Pelvis"},{id:f.EXTREMITIES_ASSESSMENT,title:"Extremities"},{id:f.NEUROLOGICAL_EXAMINATION,title:"Neurological"}],w={};for(const h of y){const C=r.get(h.id)||[],$=(u?C.filter(Y=>R.toStandardHisFormat(Y?.encounter_datetime)===u):C).flatMap(Y=>Y?.obs||[]),B=ce($);B.length&&(w[h.title]=B)}const A=await Ae(m?.provider_id),N=Ne(m?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;$e.value={sections:w,createdByLine:c}}catch(i){console.error("Failed to load secondary survey:",i),$e.value=null}finally{Q.value=!1}},Cs=async()=>{Ke.value=!0,Le.value=null;try{const i=await K(f.OUTPATIENT_DIAGNOSIS),t=W(i);if(!t)return;const r=R.toStandardHisFormat(t?.encounter_datetime)||"",m=(r?i.filter(h=>R.toStandardHisFormat(h?.encounter_datetime)===r):i).flatMap(h=>h?.obs||[]),u=await je(m),y={},w=ce(u);w.length&&(y["Outpatient Diagnosis"]=w);const A=await Ae(t?.provider_id),N=Ne(t?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;Le.value={sections:y,createdByLine:c}}catch(i){console.error("Failed to load diagnosis:",i),Le.value=null}finally{Ke.value=!1}},Is=async()=>{V.value=!0,Re.value=null;try{const i=[f.BEDSIDE_INVESTIGATION_PLAN,f.LAB_ORDERS_PLAN],t=await Promise.all(i.map(N=>K(N))),r=new Map(i.map((N,c)=>[N,t[c]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=async N=>{const c=u?N.filter(de=>R.toStandardHisFormat(de?.encounter_datetime)===u):N,h=W(c),C=c.flatMap(de=>de?.obs||[]),b=ce(C),$=await Ae(h?.provider_id),B=Ne(h?.encounter_datetime),Y=B?`${$} ${B}`:$;return{items:b,createdByLine:Y?` ${Y}`:""}},w=await y(r.get(f.LAB_ORDERS_PLAN)||[]),A=await y(r.get(f.BEDSIDE_INVESTIGATION_PLAN)||[]);Re.value={cards:{labOrdersPlan:w,bedsidePlan:A}}}catch(i){console.error("Failed to load laboratory / radiology findings:",i),Re.value=null}finally{V.value=!1}},Ps=async()=>{Ge.value=!0,ue.value=null;try{const i=[f.NON_PHARMACOLOGICAL,f.PATIENT_CARE_AREA,f.PRESCRIPTION],t=await Promise.all(i.map(c=>K(c))),r=new Map(i.map((c,h)=>[c,t[h]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=async(c,h)=>{const C=u?c.filter(q=>R.toStandardHisFormat(q?.encounter_datetime)===u):c,b=W(C),$=C.flatMap(q=>q?.obs||[]);let B=ce($);if(h?.excludeTitleIncludes?.length){const q=h.excludeTitleIncludes.map(me=>me.toLowerCase());B=B.filter(me=>{const I=(me.title||"").toLowerCase();return!q.some(S=>I.includes(S))})}const Y=await Ae(b?.provider_id),de=Ne(b?.encounter_datetime),X=de?`${Y} ${de}`:Y;return{items:B,createdByLine:X?` ${X}`:""}},w=await y(r.get(f.NON_PHARMACOLOGICAL)||[]),A=await y(r.get(f.PATIENT_CARE_AREA)||[]),N=await y(r.get(f.PRESCRIPTION)||[],{excludeTitleIncludes:["medication history"]});ue.value={cards:{nonPharmacological:w,patientCareArea:A,medications:N}}}catch(i){console.error("Failed to load patient management plan:",i),ue.value=null}finally{Ge.value=!1}},Ts=async()=>{fe.value=!0,De.value=null;try{const i=await K(f.CONTINUATION_SHEET),t=W(i);if(!t)return;const r=R.toStandardHisFormat(t?.encounter_datetime)||"",m=(r?i.filter(c=>R.toStandardHisFormat(c?.encounter_datetime)===r):i).flatMap(c=>c?.obs||[]),u={},y=ce(m);y.length&&(u["Continuation Sheet"]=y);const w=await Ae(t?.provider_id),A=Ne(t?.encounter_datetime),N=A?`created by ${w} on ${A}.`:`created by ${w}.`;De.value={sections:u,createdByLine:N}}catch(i){console.error("Failed to load continuation notes:",i),De.value=null}finally{fe.value=!1}},Ls=async()=>{Oe.value=!0,Ue.value=null;try{const i=[f.DISPOSITION,f.AWAITING_SPECIALTY],t=await Promise.all(i.map(I=>K(I))),r=new Map(i.map((I,S)=>[I,t[S]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=async I=>{const S=u?I.filter(Je=>R.toStandardHisFormat(Je?.encounter_datetime)===u):I,ee=W(S),ge=S.flatMap(Je=>Je?.obs||[]),We=ce(ge),Ve=await Ae(ee?.provider_id),Ee=Ne(ee?.encounter_datetime),ut=Ee?`${Ve} ${Ee}`:Ve;return{items:We,createdByLine:ut?` ${ut}`:""}},w=I=>{const S=(I||"").toLowerCase().trim();return S?S.includes("admission")||S.includes("ward")||S.includes("bed number")||S.includes("reason for admission")||S.includes("speciality department")?"admission":S.includes("death")||S.includes("cause of death")||S.includes("mortuary")||S.includes("family informed")||S.includes("relationship to deceased")||S.includes("last office")?"death":S.includes("transfer out")||S.includes("facility name")||S.includes("reason for transfer")?"transfer_out":S.includes("discharge home")||S.includes("discharge plan")||S.includes("followup plan")||S.includes("home care")||S.includes("followup details")||S.includes("discharge notes")||S.includes("specialist clinic")?"discharge_home":S.includes("absconded")||S.includes("last seen location")||S.includes("time of absconding")||S.includes("date of absconding")?"absconded":S.includes("refused hospital treatment")||S.includes("reason for refusal")||S.includes("plans to return")||S.includes("date of refusal")||S.includes("witness name")?"refused_treatment":"other":"other"},A=[{key:"admission",title:"Admission"},{key:"death",title:"Death"},{key:"transfer_out",title:"Transfer Out"},{key:"discharge_home",title:"Discharge Home"},{key:"absconded",title:"Absconded"},{key:"refused_treatment",title:"Refused Treatment"},{key:"other",title:"Other Disposition"}],N=await y(r.get(f.AWAITING_SPECIALTY)||[]),c=r.get(f.DISPOSITION)||[],h=u?c.filter(I=>R.toStandardHisFormat(I?.encounter_datetime)===u):c,C=W(h),b=h.flatMap(I=>I?.obs||[]),$=ce(b),B={};for(const I of $){const S=w(I.title);B[S]||(B[S]=[]),B[S].push(I)}const Y=await Ae(C?.provider_id),de=Ne(C?.encounter_datetime),X=de?`${Y} ${de}`:Y,q=X?` ${X}`:"",me=A.map(I=>({key:I.key,title:I.title,items:B[I.key]||[],createdByLine:(B[I.key]||[]).length?q:""})).filter(I=>I.items.length>0);Ue.value={cards:{awaitingSpecialty:N},otherCards:me}}catch(i){console.error("Failed to load disposition notes:",i),Ue.value=null}finally{Oe.value=!1}},Rs=async()=>{ze.value=!0,Te.value=null;try{const[i,t,r]=await Promise.all([K(f.NURSING_CARE_NOTES),K(f.SOAPIER_PRESCRIPTION),K(f.SOAPIER_DISPENSING)]),d=W(i);if(!d)return;const m=d?.obs||[],u=R.toStandardHisFormat(d?.encounter_datetime)||"",y=_=>{if(!Array.isArray(_)||_.length===0)return null;if(u){const Wt=_.filter(Ms=>R.toStandardHisFormat(Ms?.encounter_datetime)===u);if(Wt.length>0)return W(Wt)}return W(_)},w=y(t),A=y(r),N=w?.obs||[],c=A?.obs||[],h=M(m,_=>_==="subjective"||_.includes("subjective"))||"",C=M(m,_=>_==="objective"||_.includes("objective"))||"",b=M(m,_=>_==="assessment"||_.includes("assessment"))||"",$=M(m,_=>_==="plan"||_.includes("plan"))||"",B=M(m,_=>_==="evaluation"||_.includes("evaluation"))||"",Y=M(m,_=>_==="replan"||_.includes("replan"))||"",de=M(m,_=>_.includes("spo2")||_.includes("sao2")||_.includes("oxygen saturation")),X=M(m,_=>_.includes("systolic")),q=M(m,_=>_.includes("diastolic")),me=M(m,_=>_.includes("respiratory rate")||_==="respiratory rate"||_.includes("respiratory")),I=M(m,_=>_==="pulse"||_.includes("pulse rate")),S=M(m,_=>_.includes("temperature")),ee=[];if(de&&ee.push(`SPO2: ${de} %`),X||q){const _=`${X||"-"}${q?`/${q}`:""}`;ee.push(`BP: ${_} mmHg`)}me&&ee.push(`Respiratory: ${me} breaths/min`),I&&ee.push(`Pulse: ${I} bpm`),S&&ee.push(`Temperature: ${S} °C`);const ge=ee.length?ee.join(" "):"N/A",We=pt(c.filter(_=>re(j(_))==="procedures").map(_=>se(_))),Ve=pt(c.filter(_=>re(j(_))==="supportive care").map(_=>se(_))),Ee=[];We.length&&Ee.push(`Procedures: ${We.join(", ")}`),Ve.length&&Ee.push(`Supportive care: ${Ve.join(", ")}`);const ut=Ee.length?Ee.join(`
`):"N/A",Je=pt(N.filter(_=>re(j(_))==="drug given").map(_=>se(_))),Ds=Je.length?Je.join(", "):"N/A",Ut=await Ae(d?.provider_id),jt=Ne(d?.encounter_datetime),Os=jt?`created by ${Ut} on ${jt}.`:`created by ${Ut}.`;Te.value={subjective:h,objective:C,vitalSigns:ge,assessment:b,plan:$,evaluation:B,replan:Y,nonPharmacological:ut,medications:Ds,createdByLine:Os}}catch(i){console.error("Failed to load SOAPIER notes:",i),Te.value=null}finally{ze.value=!1}},Gt=async i=>{P.value=i,i==="surgical"&&await is(),i==="medical"&&await ns(),i==="gyneacology"&&await as(),i==="all"&&(await ws(),await Rs(),await bs(),await xs(),await Ns(),await As(),await Es(),await Cs(),await Is(),await Ps(),await Ts(),await Ls())};return{clinicalNotesView:P,surgicalNotesRecords:D,gyneacologyRecords:te,medicalInpatientRecords:be,clinicalNotesLoading:O,gyneacologyLoading:G,medicalInpatientLoading:he,expandedClinicalTiles:Me,toggleClinicalTile:yt,clinicalNotesAllLoading:U,refreshAllClinicalNotes:Qe,aetcClinicalTiles:Xe,triageSummary:ae,soapierSummary:Te,monitoringChartSummary:F,fluidBalanceSummary:oe,primarySurveySummary:we,sampleHistorySummary:ye,secondarySurveySummary:$e,diagnosisSummary:Le,investigationPlanSummary:Re,patientManagementSummary:ue,continuationSummary:De,dispositionSummary:Ue,surgicalNotesBySection:Ce,gyneacologyBySection:ss,medicalInpatientBySection:ct,surgicalPhysicalExam:Ze,surgicalInitialManagement:bt,surgicalPresenting:lt,surgicalPastMedicalHistoryItems:tt,surgicalReviewOfSystemsItems:Be,surgicalReviewOfSystemsCols:ie,surgicalPastSurgicalHistoryItems:s,surgicalFamilyHistoryItems:E,surgicalSocialHistoryItems:H,surgicalGynecologicalHistoryItems:p,medicalInpatientPresenting:g,medicalInpatientPhysicalExam:z,medicalInpatientExamZones:Jt,medicalReviewOfSystemsItems:Pt,medicalReviewOfSystemsCols:Qt,getObsDisplayValue:se,downloadClinicalNotesPdf:cs,setClinicalNotesView:Gt}},di={class:"clinical-notes-section print-area"},pi={class:"clinical-notes-actions"},ui={key:0,class:"clinical-notes-list"},mi={key:0,class:"clinical-notes-placeholder"},gi={key:1,class:"clinical-notes-placeholder"},vi={key:2,class:"clinical-notes-records surgical-notes-records"},yi={class:"clinical-notes-section-title"},fi={key:0,class:"clinical-notes-section-items"},bi={class:"pe-card"},hi={class:"pe-line"},_i={class:"pe-value"},ki={class:"pe-row4"},Si={class:"pe-line"},xi={class:"pe-value"},wi={class:"pe-line"},Ni={class:"pe-value"},Ai={class:"pe-line"},Ei={class:"pe-value"},Ci={class:"pe-line"},Ii={class:"pe-value"},Pi={class:"pe-row3",style:{"margin-top":"10px"}},Ti={class:"pe-line"},Li={class:"pe-value"},Ri={class:"pe-line"},Di={class:"pe-value"},Oi={class:"pe-line"},Mi={class:"pe-value"},Hi={class:"pe-line",style:{"margin-top":"10px"}},Fi={class:"pe-value"},$i={class:"pe-line"},Bi={class:"pe-value"},Vi={class:"pe-line"},zi={class:"pe-value"},Gi={class:"pe-line"},Ui={class:"pe-value"},ji={class:"pe-line"},Wi={class:"pe-value"},Yi={class:"pe-line"},qi={class:"pe-value"},Ki={class:"pe-table"},Xi={class:"pe-value"},Zi={class:"pe-value"},Ji={class:"pe-value"},Qi={class:"pe-value"},en={class:"pe-value"},tn={class:"pe-value"},sn={key:1,class:"clinical-notes-section-items"},nn={class:"im-card"},an={class:"im-row3"},on={class:"im-line"},ln={class:"im-value"},rn={class:"im-line"},cn={class:"im-value"},dn={class:"im-line"},pn={class:"im-value"},un={key:2,class:"clinical-notes-section-items"},mn={class:"pm-card"},gn={class:"pc-block"},vn={class:"pc-line"},yn={class:"pc-value"},fn={class:"pc-line",style:{"margin-top":"10px"}},bn={class:"pc-value"},hn={key:3,class:"clinical-notes-section-items"},_n={class:"pm-card"},kn={class:"pm-list"},Sn={class:"pm-label"},xn={class:"pm-value"},wn={key:0,class:"pm-empty"},Nn={key:4,class:"clinical-notes-section-items"},An={class:"pm-card"},En={class:"ros-grid"},Cn={class:"ros-col"},In={class:"ros-label"},Pn={class:"ros-value"},Tn={class:"ros-col"},Ln={class:"ros-label"},Rn={class:"ros-value"},Dn={key:0,class:"pm-empty"},On={key:5,class:"clinical-notes-section-items"},Mn={class:"pm-card"},Hn={class:"pm-list"},Fn={class:"pm-label"},$n={class:"pm-value"},Bn={key:0,class:"pm-empty"},Vn={key:6,class:"clinical-notes-section-items"},zn={class:"pm-card"},Gn={class:"pm-list"},Un={class:"pm-label"},jn={class:"pm-value"},Wn={key:0,class:"pm-empty"},Yn={key:7,class:"clinical-notes-section-items"},qn={class:"pm-card"},Kn={class:"pm-list"},Xn={class:"pm-label"},Zn={class:"pm-value"},Jn={key:0,class:"pm-empty"},Qn={key:8,class:"clinical-notes-section-items"},ea={class:"pm-card"},ta={class:"pm-list"},sa={class:"pm-label"},ia={class:"pm-value"},na={key:0,class:"pm-empty"},aa={class:"surgical-record-label"},oa={class:"surgical-record-value"},la={key:1,class:"clinical-notes-list"},ra={key:0,class:"clinical-notes-placeholder"},ca={key:1,class:"clinical-notes-placeholder"},da={key:2,class:"clinical-notes-records gyne-notes-records"},pa={class:"clinical-notes-section-title"},ua={class:"gyne-record-label"},ma={class:"gyne-record-value"},ga={key:2,class:"clinical-notes-list"},va={key:0,class:"clinical-notes-placeholder"},ya={key:1,class:"clinical-notes-placeholder"},fa={key:2,class:"clinical-notes-records medical-notes-records"},ba={class:"clinical-notes-section-title"},ha={key:0,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},_a={class:"medical-record"},ka={class:"medical-record-value"},Sa={class:"medical-record"},xa={class:"medical-record-value"},wa={key:1,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},Na={class:"pm-card medical-review-card"},Aa={class:"ros-grid"},Ea={class:"ros-col"},Ca={class:"ros-label"},Ia={class:"ros-value"},Pa={class:"ros-col"},Ta={class:"ros-label"},La={class:"ros-value"},Ra={key:0,class:"pm-empty"},Da={key:2,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},Oa={class:"mipe-card"},Ma={class:"mipe-line"},Ha={class:"mipe-value"},Fa={class:"mipe-row6"},$a={class:"mipe-line"},Ba={class:"mipe-value"},Va={class:"mipe-line"},za={class:"mipe-value"},Ga={class:"mipe-line"},Ua={class:"mipe-value"},ja={class:"mipe-line"},Wa={class:"mipe-value"},Ya={class:"mipe-line"},qa={class:"mipe-value"},Ka={class:"mipe-line"},Xa={class:"mipe-value"},Za={class:"mipe-row5"},Ja={class:"mipe-line"},Qa={class:"mipe-value"},eo={class:"mipe-line"},to={class:"mipe-value"},so={class:"mipe-line"},io={class:"mipe-value"},no={class:"mipe-line"},ao={class:"mipe-value"},oo={class:"mipe-line"},lo={class:"mipe-value"},ro={key:0,class:"mipe-line",style:{"margin-top":"8px"}},co={class:"mipe-value"},po={class:"mipe-row2"},uo={class:"mipe-line"},mo={class:"mipe-value"},go={class:"mipe-line"},vo={class:"mipe-value"},yo={class:"mipe-row3"},fo={class:"mipe-line"},bo={class:"mipe-value"},ho={class:"mipe-line"},_o={class:"mipe-value"},ko={class:"mipe-line"},So={class:"mipe-value"},xo={class:"mipe-row2"},wo={class:"mipe-line"},No={class:"mipe-value"},Ao={class:"mipe-line"},Eo={class:"mipe-value"},Co={class:"mipe-row2"},Io={class:"mipe-line"},Po={class:"mipe-value"},To={class:"mipe-line"},Lo={class:"mipe-value"},Ro={class:"mipe-row2",style:{"margin-top":"8px"}},Do={class:"mipe-line"},Oo={class:"mipe-value"},Mo={class:"mipe-line"},Ho={class:"mipe-value"},Fo={class:"mipe-row3",style:{"margin-top":"8px"}},$o={class:"mipe-line"},Bo={class:"mipe-value"},Vo={class:"mipe-line"},zo={class:"mipe-value"},Go={class:"mipe-line"},Uo={class:"mipe-value"},jo={key:1,class:"mipe-zones"},Wo={class:"mipe-zone-title"},Yo={class:"mipe-label"},qo={class:"mipe-value"},Ko={key:2},Xo={class:"mipe-zones"},Zo={class:"mipe-zone-title"},Jo={class:"mipe-label"},Qo={class:"mipe-value"},el={class:"mipe-line"},tl={class:"mipe-value"},sl={class:"mipe-row2"},il={class:"mipe-line"},nl={class:"mipe-value"},al={class:"mipe-line"},ol={class:"mipe-value"},ll={class:"mipe-line"},rl={class:"mipe-value"},cl={class:"mipe-row3"},dl={class:"mipe-line"},pl={class:"mipe-value"},ul={class:"mipe-line"},ml={class:"mipe-value"},gl={class:"mipe-line"},vl={class:"mipe-value"},yl={class:"pe-table"},fl={class:"pe-value"},bl={class:"pe-value"},hl={class:"pe-value"},_l={class:"pe-value"},kl={class:"pe-value"},Sl={class:"pe-value"},xl={class:"pe-value"},wl={class:"pe-value"},Nl={class:"pe-value"},Al={class:"pe-value"},El={class:"pe-value"},Cl={class:"pe-value"},Il={class:"pe-value"},Pl={class:"medical-record-label"},Tl={class:"medical-record-value"},Ll={key:3,class:"clinical-notes-list"},Rl={class:"clinical-notes-tab"},Dl={class:"notes-header"},Ol={class:"actions"},Ml={key:0,class:"skeleton-wrapper"},Hl={key:1,class:"empty-state"},Fl={class:"empty-icon-wrapper"},$l={key:2,class:"tiles-grid"},Bl=["onClick"],Vl={class:"tile-title-wrapper"},zl={class:"tile-title"},Gl={key:0},Ul={key:0,class:"no-observations"},jl={key:1,class:"triage-summary-list"},Wl={class:"triage-summary-row"},Yl={class:"triage-summary-content"},ql={class:"triage-summary-row"},Kl={class:"triage-summary-content"},Xl={class:"triage-summary-row"},Zl={class:"triage-summary-content"},Jl={class:"triage-summary-row"},Ql={class:"triage-summary-content"},er={class:"triage-summary-created"},tr={key:1},sr={key:0,class:"no-observations"},ir={key:1,class:"clinical-notes-section-items"},nr={class:"soapier-grid"},ar={class:"soapier-card"},or={class:"soapier-card-body"},lr={class:"soapier-card"},rr={class:"soapier-card-body"},cr={class:"soapier-block"},dr={class:"soapier-block-value"},pr={class:"soapier-block",style:{"margin-top":"10px"}},ur={class:"soapier-block-value"},mr={class:"soapier-card"},gr={class:"soapier-card-body"},vr={class:"soapier-card"},yr={class:"soapier-card-body"},fr={class:"soapier-card"},br={class:"soapier-card-body"},hr={class:"soapier-block"},_r={class:"soapier-block-value"},kr={class:"soapier-block",style:{"margin-top":"10px"}},Sr={class:"soapier-block-value"},xr={class:"soapier-card"},wr={class:"soapier-card-body"},Nr={class:"soapier-card"},Ar={class:"soapier-card-body"},Er={class:"soapier-footer"},Cr={key:2},Ir={key:0,class:"no-observations"},Pr={key:1,class:"monitoring-chart-grid"},Tr={class:"monitoring-chart-title"},Lr={key:0,class:"monitoring-chart-body"},Rr={key:1,class:"monitoring-chart-legend"},Dr={key:2,class:"monitoring-chart-empty"},Or={key:3},Mr={key:0,class:"no-observations"},Hr={key:1,class:"fluid-balance-entry-grid"},Fr={class:"fluid-balance-card-header"},$r={class:"fluid-balance-card-title"},Br={class:"fluid-balance-card-subtitle"},Vr={class:"fluid-balance-sections"},zr={class:"fluid-balance-section"},Gr={class:"fluid-balance-list"},Ur={key:0,class:"fluid-balance-empty"},jr={class:"fluid-balance-section"},Wr={class:"fluid-balance-list"},Yr={key:0,class:"fluid-balance-empty"},qr={class:"fluid-balance-section"},Kr={class:"fluid-balance-list"},Xr={key:0,class:"fluid-balance-empty"},Zr={class:"fluid-balance-section"},Jr={class:"fluid-balance-list"},Qr={key:0},ec={key:4},tc={key:0,class:"no-observations"},sc={key:1},ic={class:"survey-print-grid survey-print-grid--primary"},nc={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},ac={class:"observation-list"},oc={class:"obs-concept"},lc={class:"obs-value"},rc={class:"tile-footer"},cc={key:5},dc={key:0,class:"no-observations"},pc={key:1,class:"sample-grid"},uc={class:"sample-card"},mc={class:"sample-list"},gc={class:"sample-label"},vc={class:"sample-value"},yc={key:0,class:"sample-empty"},fc={class:"sample-footer"},bc={class:"sample-card"},hc={class:"sample-list"},_c={class:"sample-label"},kc={class:"sample-value"},Sc={key:0,class:"sample-empty"},xc={class:"sample-footer"},wc={class:"sample-card"},Nc={class:"sample-list"},Ac={class:"sample-label"},Ec={class:"sample-value"},Cc={key:0,class:"sample-empty"},Ic={class:"sample-footer"},Pc={class:"sample-card"},Tc={class:"sample-list"},Lc={class:"sample-label"},Rc={class:"sample-value"},Dc={key:0,class:"sample-empty"},Oc={class:"sample-footer"},Mc={class:"sample-card"},Hc={class:"sample-list"},Fc={class:"sample-label"},$c={class:"sample-value"},Bc={key:0,class:"sample-empty"},Vc={class:"sample-footer"},zc={class:"sample-card"},Gc={class:"sample-list"},Uc={class:"sample-label"},jc={class:"sample-value"},Wc={key:0,class:"sample-empty"},Yc={class:"sample-footer"},qc={key:6},Kc={key:0,class:"no-observations"},Xc={key:1},Zc={class:"survey-print-grid survey-print-grid--secondary"},Jc={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},Qc={class:"observation-list"},ed={class:"obs-concept"},td={class:"obs-value"},sd={class:"tile-footer"},id={key:7},nd={key:0,class:"no-observations"},ad={key:1},od={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},ld={class:"observation-list"},rd={class:"obs-concept"},cd={class:"obs-value"},dd={class:"tile-footer"},pd={key:8},ud={key:0,class:"no-observations"},md={key:1,class:"pm-grid"},gd={key:0,class:"pm-card"},vd={class:"pm-list"},yd={class:"pm-label"},fd={class:"pm-value"},bd={class:"pm-footer"},hd={key:1,class:"pm-card"},_d={class:"pm-list"},kd={class:"pm-label"},Sd={class:"pm-value"},xd={class:"pm-footer"},wd={key:2,class:"no-observations"},Nd={key:9},Ad={key:0,class:"no-observations"},Ed={key:1,class:"pm-grid"},Cd={class:"pm-card"},Id={class:"pm-list"},Pd={class:"pm-label"},Td={class:"pm-value"},Ld={key:0,class:"pm-empty"},Rd={class:"pm-footer"},Dd={class:"pm-card"},Od={class:"pm-list"},Md={class:"pm-label"},Hd={class:"pm-value"},Fd={key:0,class:"pm-empty"},$d={class:"pm-footer"},Bd={class:"pm-card"},Vd={class:"pm-list"},zd={class:"pm-label"},Gd={class:"pm-value"},Ud={key:0,class:"pm-empty"},jd={class:"pm-footer"},Wd={key:10},Yd={key:0,class:"no-observations"},qd={key:1},Kd={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},Xd={class:"observation-list"},Zd={class:"obs-concept"},Jd={class:"obs-value"},Qd={class:"tile-footer"},ep={key:11},tp={key:0,class:"no-observations"},sp={key:1,class:"pm-grid"},ip={class:"pm-card"},np={class:"pm-list"},ap={class:"pm-label"},op={class:"pm-value"},lp={key:0,class:"pm-empty"},rp={class:"pm-footer"},cp={class:"pm-card-title"},dp={class:"pm-list"},pp={class:"pm-label"},up={class:"pm-value"},mp={key:0,class:"pm-empty"},gp={class:"pm-footer"},vp={key:4,class:"clinical-notes-placeholder"},Mp=Xt({__name:"PatientClinicalNotes",setup(P){const D=ie=>ie?.concept_name||ie?.concept_id||"Observation",te=ie=>["Complaints","Impression","Plan","Other"].includes(ie),be=ie=>["Investigations","Working Differential Diagnosis","Other"].includes(ie),O=ie=>["Past Surgical History","Social History","Family History","Summary","Management Plan","Other"].includes(ie),G=ie=>(ie?.series||[]).some(s=>Array.isArray(s?.data)&&s.data.length>0),he=ie=>(ie?.series||[]).filter(s=>Array.isArray(s?.data)&&s.data.length>0).length>1,_e=ie=>({chart:{toolbar:{show:!0},zoom:{enabled:!0},animations:{enabled:!1},parentHeightOffset:0},colors:ie?.colors||["#0ea5e9"],dataLabels:{enabled:!0},stroke:{curve:"smooth",width:3},markers:{size:4},grid:{borderColor:"#e5e7eb",strokeDashArray:0,padding:{left:8,right:12,top:0,bottom:0}},xaxis:{type:"category",labels:{show:!1,style:{fontSize:"10px",colors:"#64748b"}},tooltip:{enabled:!0}},yaxis:{labels:{style:{fontSize:"10px",colors:"#64748b"}}},legend:{show:!1},tooltip:{x:{show:!0}}}),{clinicalNotesView:ae,surgicalNotesRecords:ve,gyneacologyRecords:Pe,medicalInpatientRecords:ze,clinicalNotesLoading:Te,gyneacologyLoading:Fe,medicalInpatientLoading:F,expandedClinicalTiles:J,toggleClinicalTile:oe,clinicalNotesAllLoading:ke,refreshAllClinicalNotes:we,aetcClinicalTiles:Se,triageSummary:ye,soapierSummary:Q,monitoringChartSummary:$e,fluidBalanceSummary:Ke,primarySurveySummary:Le,sampleHistorySummary:V,secondarySurveySummary:Re,diagnosisSummary:Ge,investigationPlanSummary:ue,patientManagementSummary:fe,continuationSummary:De,dispositionSummary:Oe,surgicalNotesBySection:Ue,gyneacologyBySection:Me,medicalInpatientBySection:yt,surgicalPhysicalExam:U,surgicalInitialManagement:Qe,surgicalPresenting:Xe,surgicalPastMedicalHistoryItems:at,surgicalReviewOfSystemsItems:ft,surgicalReviewOfSystemsCols:ot,surgicalPastSurgicalHistoryItems:j,surgicalFamilyHistoryItems:xe,surgicalSocialHistoryItems:se,surgicalGynecologicalHistoryItems:je,medicalInpatientPresenting:et,medicalInpatientPhysicalExam:v,medicalInpatientExamZones:Ze,medicalReviewOfSystemsItems:bt,medicalReviewOfSystemsCols:lt,getObsDisplayValue:tt,downloadClinicalNotesPdf:rt,setClinicalNotesView:Be}=ci();return Zt(()=>{Be(ae.value)}),(ie,s)=>(a(),o("div",di,[pe(n(Vs),{class:"clinical-notes-card"},{default:qe(()=>[pe(n(Fs),null,{default:qe(()=>[e("div",pi,[pe(it,{name:"Download PDF",fill:"solid",class:"clinical-notes-btn",onClick:n(rt)},null,8,["onClick"]),pe(it,{name:"Surgical Notes",fill:"clear",class:"clinical-notes-btn",onClick:s[0]||(s[0]=E=>n(Be)("surgical"))}),pe(it,{name:"Gyneacology",fill:"clear",class:"clinical-notes-btn",onClick:s[1]||(s[1]=E=>n(Be)("gyneacology"))}),pe(it,{name:"Medical Inpatient",fill:"clear",class:"clinical-notes-btn",onClick:s[2]||(s[2]=E=>n(Be)("medical"))}),pe(it,{name:"All",fill:"clear",class:"clinical-notes-btn",onClick:s[3]||(s[3]=E=>n(Be)("all"))})]),pe(ai,{class:"clinical-notes-demographics"}),n(ae)==="surgical"?(a(),o("div",ui,[s[52]||(s[52]=e("div",{class:"clinical-notes-list-header"},"Surgical Notes",-1)),n(Te)?(a(),o("div",mi,"Loading surgical notes...")):n(ve).length===0?(a(),o("div",gi," No surgical notes found. ")):(a(),o("div",vi,[(a(!0),o(k,null,x(n(Ue),(E,H)=>(a(),o("div",{key:H,class:"clinical-notes-section-block surgical-section-block"},[e("div",yi,l(H),1),H==="Physical Examination"?(a(),o("div",fi,[e("div",bi,[s[26]||(s[26]=e("div",{class:"pe-title"},"Physical Examination",-1)),e("div",hi,[s[5]||(s[5]=e("span",{class:"pe-label"},"General Condition:",-1)),e("span",_i,l(n(U).generalCondition||"N/A"),1)]),s[27]||(s[27]=e("div",{class:"pe-subtitle"},"Vitals",-1)),e("div",ki,[e("div",Si,[s[6]||(s[6]=e("span",{class:"pe-label"},"Temperature:",-1)),e("span",xi,l(n(U).temperature||"N/A"),1)]),e("div",wi,[s[7]||(s[7]=e("span",{class:"pe-label"},"Pulse Rate:",-1)),e("span",Ni,l(n(U).pulseRate||"N/A"),1)]),e("div",Ai,[s[8]||(s[8]=e("span",{class:"pe-label"},"Blood Pressure:",-1)),e("span",Ei,l(n(U).bloodPressure||"N/A"),1)]),e("div",Ci,[s[9]||(s[9]=e("span",{class:"pe-label"},"Respiratory Rate:",-1)),e("span",Ii,l(n(U).respiratoryRate||"N/A"),1)])]),e("div",Pi,[e("div",Ti,[s[10]||(s[10]=e("span",{class:"pe-label"},"Eyes:",-1)),e("span",Li,l(n(U).eyes||"N/A"),1)]),e("div",Ri,[s[11]||(s[11]=e("span",{class:"pe-label"},"Mouth:",-1)),e("span",Di,l(n(U).mouth||"N/A"),1)]),e("div",Oi,[s[12]||(s[12]=e("span",{class:"pe-label"},"Neck:",-1)),e("span",Mi,l(n(U).neck||"N/A"),1)])]),e("div",Hi,[s[13]||(s[13]=e("span",{class:"pe-label"},"Chest Examination:",-1)),e("span",Fi,l(n(U).chestExamination||"N/A"),1)]),e("div",$i,[s[14]||(s[14]=e("span",{class:"pe-label"},"Endocrine Examination:",-1)),e("span",Bi,l(n(U).endocrineExamination||"N/A"),1)]),e("div",Vi,[s[15]||(s[15]=e("span",{class:"pe-label"},"Abdominal Examination:",-1)),e("span",zi,l(n(U).abdominalExamination||"N/A"),1)]),s[28]||(s[28]=e("div",{class:"pe-divider"},null,-1)),s[29]||(s[29]=e("div",{class:"pe-subtitle"},"Glasgow Coma Scale (GCS)",-1)),e("div",Gi,[s[16]||(s[16]=e("span",{class:"pe-label"},"Motor Response:",-1)),e("span",Ui,l(n(U).motorResponse||"N/A"),1)]),e("div",ji,[s[17]||(s[17]=e("span",{class:"pe-label"},"Verbal Response:",-1)),e("span",Wi,l(n(U).verbalResponse||"N/A"),1)]),e("div",Yi,[s[18]||(s[18]=e("span",{class:"pe-label"},"Eye Response:",-1)),e("span",qi,l(n(U).eyeOpeningResponse||"N/A"),1)]),s[30]||(s[30]=e("div",{class:"pe-divider"},null,-1)),s[31]||(s[31]=e("div",{class:"pe-subtitle"},"Additional Examinations & Extremities",-1)),e("table",Ki,[s[25]||(s[25]=e("thead",null,[e("tr",null,[e("th",null,"Additional Examinations"),e("th",null,"Extremities")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[s[19]||(s[19]=e("span",{class:"pe-label"},"Cranial Nerves:",-1)),e("span",Xi,l(n(U).cranialNerves||"N/A"),1)]),e("td",null,[s[20]||(s[20]=e("span",{class:"pe-label"},"Pulsations:",-1)),e("span",Zi,l(n(U).pulsations||"N/A"),1)])]),e("tr",null,[e("td",null,[s[21]||(s[21]=e("span",{class:"pe-label"},"Gross Motor:",-1)),e("span",Ji,l(n(U).grossMotor||"N/A"),1)]),e("td",null,[s[22]||(s[22]=e("span",{class:"pe-label"},"Rectal Examination:",-1)),e("span",Qi,l(n(U).rectalExamination||"N/A"),1)])]),e("tr",null,[e("td",null,[s[23]||(s[23]=e("span",{class:"pe-label"},"Sensation:",-1)),e("span",en,l(n(U).sensation||"N/A"),1)]),e("td",null,[s[24]||(s[24]=e("span",{class:"pe-label"},"Extremities:",-1)),e("span",tn,l(n(U).extremities||"N/A"),1)])])])])])])):H==="Initial Management"?(a(),o("div",sn,[e("div",nn,[s[35]||(s[35]=e("div",{class:"im-title"},"Initial Management",-1)),e("div",an,[e("div",on,[s[32]||(s[32]=e("span",{class:"im-label"},"Clerk Name:",-1)),e("span",ln,l(n(Qe).clerkName||"N/A"),1)]),e("div",rn,[s[33]||(s[33]=e("span",{class:"im-label"},"Designation:",-1)),e("span",cn,l(n(Qe).designation||"N/A"),1)]),e("div",dn,[s[34]||(s[34]=e("span",{class:"im-label"},"Signature:",-1)),e("span",pn,l(n(Qe).signature||"N/A"),1)])])])])):H==="Presenting Complaints"?(a(),o("div",un,[e("div",mn,[s[38]||(s[38]=e("div",{class:"pm-card-title"},"Presenting Complaints",-1)),s[39]||(s[39]=e("div",{class:"pm-card-divider"},null,-1)),e("div",gn,[e("div",vn,[s[36]||(s[36]=e("span",{class:"pc-label"},"Presenting Complaints:",-1)),e("span",yn,l(n(Xe).complaints||"N/A"),1)]),e("div",fn,[s[37]||(s[37]=e("span",{class:"pc-label"},"Presenting History:",-1)),e("span",bn,l(n(Xe).history||"N/A"),1)])])])])):H==="Past Medical History"?(a(),o("div",hn,[e("div",_n,[s[40]||(s[40]=e("div",{class:"pm-card-title"},"Past Medical History",-1)),s[41]||(s[41]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",kn,[(a(!0),o(k,null,x(n(at),(p,g)=>(a(),o("li",{key:g},[e("span",Sn,l(p.title)+":",1),e("span",xn,l(p.value),1)]))),128)),n(at).length===0?(a(),o("li",wn,"No records.")):T("",!0)])])])):H==="Review of Systems"?(a(),o("div",Nn,[e("div",An,[s[42]||(s[42]=e("div",{class:"pm-card-title"},"Review of Systems",-1)),s[43]||(s[43]=e("div",{class:"pm-card-divider"},null,-1)),e("div",En,[e("div",Cn,[(a(!0),o(k,null,x(n(ot).left,(p,g)=>(a(),o("div",{key:`ros-l-${g}`,class:"ros-item"},[e("span",In,l(p.title)+":",1),e("span",Pn,l(p.value),1)]))),128))]),e("div",Tn,[(a(!0),o(k,null,x(n(ot).right,(p,g)=>(a(),o("div",{key:`ros-r-${g}`,class:"ros-item"},[e("span",Ln,l(p.title)+":",1),e("span",Rn,l(p.value),1)]))),128))])]),n(ft).length===0?(a(),o("div",Dn,"No records.")):T("",!0)])])):H==="Past Surgical History"?(a(),o("div",On,[e("div",Mn,[s[44]||(s[44]=e("div",{class:"pm-card-title"},"Past Surgical History",-1)),s[45]||(s[45]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Hn,[(a(!0),o(k,null,x(n(j),(p,g)=>(a(),o("li",{key:g},[e("span",Fn,l(p.title)+":",1),e("span",$n,l(p.value),1)]))),128)),n(j).length===0?(a(),o("li",Bn,"No records.")):T("",!0)])])])):H==="Family History"?(a(),o("div",Vn,[e("div",zn,[s[46]||(s[46]=e("div",{class:"pm-card-title"},"Family History",-1)),s[47]||(s[47]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Gn,[(a(!0),o(k,null,x(n(xe),(p,g)=>(a(),o("li",{key:g},[e("span",Un,l(p.title)+":",1),e("span",jn,l(p.value),1)]))),128)),n(xe).length===0?(a(),o("li",Wn,"No records.")):T("",!0)])])])):H==="Social History"?(a(),o("div",Yn,[e("div",qn,[s[48]||(s[48]=e("div",{class:"pm-card-title"},"Social History",-1)),s[49]||(s[49]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Kn,[(a(!0),o(k,null,x(n(se),(p,g)=>(a(),o("li",{key:g},[e("span",Xn,l(p.title)+":",1),e("span",Zn,l(p.value),1)]))),128)),n(se).length===0?(a(),o("li",Jn,"No records.")):T("",!0)])])])):H==="Gynecological History"?(a(),o("div",Qn,[e("div",ea,[s[50]||(s[50]=e("div",{class:"pm-card-title"},"Gynecological History",-1)),s[51]||(s[51]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",ta,[(a(!0),o(k,null,x(n(je),(p,g)=>(a(),o("li",{key:g},[e("span",sa,l(p.title)+":",1),e("span",ia,l(p.value),1)]))),128)),n(je).length===0?(a(),o("li",na," No records. ")):T("",!0)])])])):(a(),o("div",{key:9,class:Ie(["clinical-notes-section-items surgical-section-items",{"surgical-section-items--stacked":be(H)}])},[(a(!0),o(k,null,x(E,(p,g)=>(a(),o("div",{key:g,class:"surgical-record"},[e("span",aa,l(D(p))+":",1),e("span",oa,l(n(tt)(p)),1)]))),128))],2))]))),128))]))])):n(ae)==="gyneacology"?(a(),o("div",la,[s[53]||(s[53]=e("div",{class:"clinical-notes-list-header"},"Gyneacology Ward",-1)),n(Fe)?(a(),o("div",ra," Loading gyneacology ward records... ")):n(Pe).length===0?(a(),o("div",ca," No gyneacology ward records found. ")):(a(),o("div",da,[(a(!0),o(k,null,x(n(Me),(E,H)=>(a(),o("div",{key:H,class:"clinical-notes-section-block gyne-section-block"},[e("div",pa,l(H),1),e("div",{class:Ie(["clinical-notes-section-items gyne-section-items",{"gyne-section-items--wide":H==="General Examination","gyne-section-items--stacked":te(H)}])},[(a(!0),o(k,null,x(E,(p,g)=>(a(),o("div",{key:g,class:"gyne-record"},[e("span",ua,l(D(p))+":",1),e("span",ma,l(n(tt)(p)),1)]))),128))],2)]))),128))]))])):n(ae)==="medical"?(a(),o("div",ga,[s[128]||(s[128]=e("div",{class:"clinical-notes-list-header"},"Medical Inpatient",-1)),n(F)?(a(),o("div",va," Loading medical inpatient records... ")):n(ze).length===0?(a(),o("div",ya," No medical inpatient records found. ")):(a(),o("div",fa,[(a(!0),o(k,null,x(n(yt),(E,H)=>(a(),o("div",{key:H,class:"clinical-notes-section-block medical-section-block"},[e("div",ba,l(H),1),H==="Presenting Complaints"?(a(),o("div",ha,[e("div",_a,[s[54]||(s[54]=e("span",{class:"medical-record-label"},"Presenting Complaints:",-1)),e("span",ka,l(n(et).complaints||"N/A"),1)]),e("div",Sa,[s[55]||(s[55]=e("span",{class:"medical-record-label"},"Presenting History:",-1)),e("span",xa,l(n(et).history||"N/A"),1)])])):H==="Review of Systems"?(a(),o("div",wa,[e("div",Na,[e("div",Aa,[e("div",Ea,[(a(!0),o(k,null,x(n(lt).left,(p,g)=>(a(),o("div",{key:`mi-ros-l-${g}`,class:"ros-item"},[e("span",Ca,l(p.title)+":",1),e("span",Ia,l(p.value),1)]))),128))]),e("div",Pa,[(a(!0),o(k,null,x(n(lt).right,(p,g)=>(a(),o("div",{key:`mi-ros-r-${g}`,class:"ros-item"},[e("span",Ta,l(p.title)+":",1),e("span",La,l(p.value),1)]))),128))])]),n(bt).length===0?(a(),o("div",Ra,"No records.")):T("",!0)])])):H==="Physical Examination"?(a(),o("div",Da,[e("div",Oa,[e("div",Ma,[s[56]||(s[56]=e("span",{class:"mipe-label"},"General condition:",-1)),e("span",Ha,l(n(v).general||"N/A"),1)]),s[107]||(s[107]=e("div",{class:"mipe-subtitle"},"Vitals",-1)),e("div",Fa,[e("div",$a,[s[57]||(s[57]=e("span",{class:"mipe-label"},"Temperature:",-1)),e("span",Ba,l(n(v).temperature||"N/A"),1)]),e("div",Va,[s[58]||(s[58]=e("span",{class:"mipe-label"},"Pulse Rate:",-1)),e("span",za,l(n(v).pulseRate||"N/A"),1)]),e("div",Ga,[s[59]||(s[59]=e("span",{class:"mipe-label"},"Systolic:",-1)),e("span",Ua,l(n(v).systolic||"N/A"),1)]),e("div",ja,[s[60]||(s[60]=e("span",{class:"mipe-label"},"Diastolic:",-1)),e("span",Wa,l(n(v).diastolic||"N/A"),1)]),e("div",Ya,[s[61]||(s[61]=e("span",{class:"mipe-label"},"Respiratory Rate:",-1)),e("span",qa,l(n(v).respiratoryRate||"N/A"),1)]),e("div",Ka,[s[62]||(s[62]=e("span",{class:"mipe-label"},"Oxygen Saturation:",-1)),e("span",Xa,l(n(v).oxygenSaturation||"N/A"),1)])]),s[108]||(s[108]=e("div",{class:"mipe-divider"},null,-1)),s[109]||(s[109]=e("div",{class:"mipe-subtitle"},"Head and Neck",-1)),e("div",Za,[e("div",Ja,[s[63]||(s[63]=e("span",{class:"mipe-label"},"Pupils Symmetrical:",-1)),e("span",Qa,l(n(v).pupilsSymmetrical||"N/A"),1)]),e("div",eo,[s[64]||(s[64]=e("span",{class:"mipe-label"},"Conjunctiva:",-1)),e("span",to,l(n(v).conjunctiva||"N/A"),1)]),e("div",so,[s[65]||(s[65]=e("span",{class:"mipe-label"},"Oral KS:",-1)),e("span",io,l(n(v).oralKs||"N/A"),1)]),e("div",no,[s[66]||(s[66]=e("span",{class:"mipe-label"},"Oral Candidiasis:",-1)),e("span",ao,l(n(v).oralThrush||"N/A"),1)]),e("div",oo,[s[67]||(s[67]=e("span",{class:"mipe-label"},"Lymphadenopathy:",-1)),e("span",lo,l(n(v).lymphadenopathy||"N/A"),1)])]),n(v).headNeckOther?(a(),o("div",ro,[s[68]||(s[68]=e("span",{class:"mipe-label"},"Other:",-1)),e("span",co,l(n(v).headNeckOther),1)])):T("",!0),s[110]||(s[110]=e("div",{class:"mipe-divider"},null,-1)),s[111]||(s[111]=e("div",{class:"mipe-subtitle"},"Chest",-1)),e("div",po,[e("div",uo,[s[69]||(s[69]=e("span",{class:"mipe-label"},"Symmetrical Expansion:",-1)),e("span",mo,l(n(v).symmetricalExpansion||"N/A"),1)]),e("div",go,[s[70]||(s[70]=e("span",{class:"mipe-label"},"Symmetrical Expansion Description:",-1)),e("span",vo,l(n(v).symmetricalExpansionDescription||"N/A"),1)])]),s[112]||(s[112]=e("div",{class:"mipe-divider"},null,-1)),s[113]||(s[113]=e("div",{class:"mipe-subtitle"},"Heart",-1)),e("div",yo,[e("div",fo,[s[71]||(s[71]=e("span",{class:"mipe-label"},"Apex Beat:",-1)),e("span",bo,l(n(v).apexBeat||"N/A"),1)]),e("div",ho,[s[72]||(s[72]=e("span",{class:"mipe-label"},"Thrill Heaves:",-1)),e("span",_o,l(n(v).thrillHeaves||"N/A"),1)]),e("div",ko,[s[73]||(s[73]=e("span",{class:"mipe-label"},"Auscultation (Heart):",-1)),e("span",So,l(n(v).auscultationHeart||"N/A"),1)])]),s[114]||(s[114]=e("div",{class:"mipe-divider"},null,-1)),s[115]||(s[115]=e("div",{class:"mipe-subtitle"},"Lungs",-1)),e("div",xo,[e("div",wo,[s[74]||(s[74]=e("span",{class:"mipe-label"},"Lung Condition:",-1)),e("span",No,l(n(v).lungCondition||"N/A"),1)]),e("div",Ao,[s[75]||(s[75]=e("span",{class:"mipe-label"},"Lung Position:",-1)),e("span",Eo,l(n(v).lungPosition||"N/A"),1)])]),s[116]||(s[116]=e("div",{class:"mipe-divider"},null,-1)),s[117]||(s[117]=e("div",{class:"mipe-subtitle"},"Abdomen",-1)),e("div",Co,[e("div",Io,[s[76]||(s[76]=e("span",{class:"mipe-label"},"Region:",-1)),e("span",Po,l(n(v).abdomenRegion||"N/A"),1)]),e("div",To,[s[77]||(s[77]=e("span",{class:"mipe-label"},"Inspection:",-1)),e("span",Lo,l(n(v).abdomenInspection||"N/A"),1)])]),e("div",Ro,[e("div",Do,[s[78]||(s[78]=e("span",{class:"mipe-label"},"Light Palpation:",-1)),e("span",Oo,l(n(v).abdomenLightPalpation||"N/A"),1)]),e("div",Mo,[s[79]||(s[79]=e("span",{class:"mipe-label"},"Deep Palpation:",-1)),e("span",Ho,l(n(v).abdomenDeepPalpation||"N/A"),1)])]),e("div",Fo,[e("div",$o,[s[80]||(s[80]=e("span",{class:"mipe-label"},"Auscultation:",-1)),e("span",Bo,l(n(v).abdomenAuscultation||"N/A"),1)]),e("div",Vo,[s[81]||(s[81]=e("span",{class:"mipe-label"},"Shifting Dullness:",-1)),e("span",zo,l(n(v).abdomenShiftingDullness||"N/A"),1)]),e("div",Go,[s[82]||(s[82]=e("span",{class:"mipe-label"},"Fluid Thrill:",-1)),e("span",Uo,l(n(v).abdomenFluidThrill||"N/A"),1)])]),n(Ze).abdomen.length?(a(),o("div",jo,[(a(!0),o(k,null,x(n(Ze).abdomen,(p,g)=>(a(),o("div",{class:"mipe-zone",key:`mi-abd-${g}`},[e("div",Wo,l(p.zone),1),(a(!0),o(k,null,x(p.findings,(z,le)=>(a(),o("div",{class:"mipe-line",key:`mi-abd-${g}-${le}`},[e("span",Yo,l(z.title)+":",1),e("span",qo,l(z.value),1)]))),128))]))),128))])):T("",!0),n(Ze).respiratory.length?(a(),o("div",Ko,[s[83]||(s[83]=e("div",{class:"mipe-divider"},null,-1)),s[84]||(s[84]=e("div",{class:"mipe-subtitle"},"Respiratory Examination",-1)),e("div",Xo,[(a(!0),o(k,null,x(n(Ze).respiratory,(p,g)=>(a(),o("div",{class:"mipe-zone",key:`mi-resp-${g}`},[e("div",Zo,l(p.zone),1),(a(!0),o(k,null,x(p.findings,(z,le)=>(a(),o("div",{class:"mipe-line",key:`mi-resp-${g}-${le}`},[e("span",Jo,l(z.title)+":",1),e("span",Qo,l(z.value),1)]))),128))]))),128))])])):T("",!0),s[118]||(s[118]=e("div",{class:"mipe-divider"},null,-1)),s[119]||(s[119]=e("div",{class:"mipe-subtitle"},"Extremities",-1)),e("div",el,[s[85]||(s[85]=e("span",{class:"mipe-label"},"Oedema:",-1)),e("span",tl,l(n(v).oedema||"N/A"),1)]),s[120]||(s[120]=e("div",{class:"mipe-divider"},null,-1)),s[121]||(s[121]=e("div",{class:"mipe-subtitle"},"Skin",-1)),e("div",sl,[e("div",il,[s[86]||(s[86]=e("span",{class:"mipe-label"},"Skin Rash:",-1)),e("span",nl,l(n(v).skinRash||"N/A"),1)]),e("div",al,[s[87]||(s[87]=e("span",{class:"mipe-label"},"Herpes Zoster Scar:",-1)),e("span",ol,l(n(v).herpesScar||"N/A"),1)])]),s[122]||(s[122]=e("div",{class:"mipe-divider"},null,-1)),s[123]||(s[123]=e("div",{class:"mipe-subtitle"},"Neurological Examination",-1)),e("div",ll,[s[88]||(s[88]=e("span",{class:"mipe-label"},"Neck Stiffness:",-1)),e("span",rl,l(n(v).neckStiffness||"N/A"),1)]),s[124]||(s[124]=e("div",{class:"mipe-divider"},null,-1)),s[125]||(s[125]=e("div",{class:"mipe-subtitle"},"Glasgow Coma Scale (GCS)",-1)),e("div",cl,[e("div",dl,[s[89]||(s[89]=e("span",{class:"mipe-label"},"Eye Opening Response:",-1)),e("span",pl,l(n(v).eyeOpeningResponse||"N/A"),1)]),e("div",ul,[s[90]||(s[90]=e("span",{class:"mipe-label"},"Verbal Response:",-1)),e("span",ml,l(n(v).verbalResponse||"N/A"),1)]),e("div",gl,[s[91]||(s[91]=e("span",{class:"mipe-label"},"Motor Response:",-1)),e("span",vl,l(n(v).motorResponse||"N/A"),1)])]),s[126]||(s[126]=e("div",{class:"mipe-divider"},null,-1)),s[127]||(s[127]=e("div",{class:"mipe-subtitle"},"Cranial and Peripheral Nerves",-1)),e("table",yl,[s[106]||(s[106]=e("thead",null,[e("tr",null,[e("th",null,"Cranial Nerves"),e("th",null,"Peripheral Nerves")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[s[92]||(s[92]=e("span",{class:"pe-label"},"Pupil:",-1)),e("span",fl,l(n(v).cnPupil||"N/A"),1)]),e("td",null,[s[93]||(s[93]=e("span",{class:"pe-label"},"Power:",-1)),e("span",bl,l(n(v).pnPower||"N/A"),1)])]),e("tr",null,[e("td",null,[s[94]||(s[94]=e("span",{class:"pe-label"},"Visual Field/Acuity:",-1)),e("span",hl,l(n(v).cnVisualField||"N/A"),1)]),e("td",null,[s[95]||(s[95]=e("span",{class:"pe-label"},"Tone:",-1)),e("span",_l,l(n(v).pnTone||"N/A"),1)])]),e("tr",null,[e("td",null,[s[96]||(s[96]=e("span",{class:"pe-label"},"Eye Movements/Nystagmus:",-1)),e("span",kl,l(n(v).cnEyeMovements||"N/A"),1)]),e("td",null,[s[97]||(s[97]=e("span",{class:"pe-label"},"Reflexes:",-1)),e("span",Sl,l(n(v).pnReflexes||"N/A"),1)])]),e("tr",null,[e("td",null,[s[98]||(s[98]=e("span",{class:"pe-label"},"Facial Movements/Sensation:",-1)),e("span",xl,l(n(v).cnFacial||"N/A"),1)]),e("td",null,[s[99]||(s[99]=e("span",{class:"pe-label"},"Plantars:",-1)),e("span",wl,l(n(v).pnPlantars||"N/A"),1)])]),e("tr",null,[e("td",null,[s[100]||(s[100]=e("span",{class:"pe-label"},"Hearing:",-1)),e("span",Nl,l(n(v).cnHearing||"N/A"),1)]),e("td",null,[s[101]||(s[101]=e("span",{class:"pe-label"},"Sensation:",-1)),e("span",Al,l(n(v).pnSensation||"N/A"),1)])]),e("tr",null,[e("td",null,[s[102]||(s[102]=e("span",{class:"pe-label"},"Tongue Movement/Tastes:",-1)),e("span",El,l(n(v).cnTongue||"N/A"),1)]),e("td",null,[s[103]||(s[103]=e("span",{class:"pe-label"},"Coordination:",-1)),e("span",Cl,l(n(v).pnCoordination||"N/A"),1)])]),e("tr",null,[e("td",null,[s[104]||(s[104]=e("span",{class:"pe-label"},"Cough/Gag Reflex:",-1)),e("span",Il,l(n(v).cnCoughGag||"N/A"),1)]),s[105]||(s[105]=e("td",null,null,-1))])])])])])):(a(),o("div",{key:3,class:Ie(["clinical-notes-section-items medical-section-items",{"medical-section-items--stacked":O(H)}])},[(a(!0),o(k,null,x(E,(p,g)=>(a(),o("div",{key:g,class:"medical-record"},[e("span",Pl,l(D(p))+":",1),e("span",Tl,l(n(tt)(p)),1)]))),128))],2))]))),128))]))])):n(ae)==="all"?(a(),o("div",Ll,[e("div",Rl,[e("header",Dl,[s[129]||(s[129]=e("div",null,[e("h2",{class:"title"},"Clinical Health Card"),e("p",{class:"subtitle"},"Complete timeline of patient's clinical review and outcomes.")],-1)),e("div",Ol,[pe(n($s),{fill:"clear",size:"small",class:"refresh-btn",disabled:n(ke),onClick:n(we),title:"Refresh Health Card"},{default:qe(()=>[pe(n(nt),{icon:n(si),slot:"icon-only",class:Ie({"spin-anim":n(ke)})},null,8,["icon","class"])]),_:1},8,["disabled","onClick"])])]),n(ke)?(a(),o("div",Ml,[(a(),o(k,null,x(3,E=>e("div",{class:"skeleton-card",key:"skel-"+E},[...s[130]||(s[130]=[e("div",{class:"skeleton-header"},[e("div",{class:"skeleton-icon shimmer"}),e("div",{class:"skeleton-text-wrapper"},[e("div",{class:"skeleton-title shimmer"}),e("div",{class:"skeleton-subtitle shimmer"})])],-1)])])),64))])):n(Se).length?(a(),o("div",$l,[(a(!0),o(k,null,x(n(Se),(E,H)=>(a(),o("div",{key:E.id,class:Ie(["encounter-tile",{"is-expanded":n(J)[E.id]}]),onClick:p=>n(oe)(E.id),style:gt({animationDelay:H*.05+"s"})},[e("div",{class:Ie(["tile-header",{"header-expanded":n(J)[E.id]}])},[e("div",{class:"tile-icon-wrapper",style:gt({backgroundColor:n(J)[E.id]?E.color:E.color+"15",color:n(J)[E.id]?"#fff":E.color})},[pe(n(nt),{icon:E.icon,class:"tile-icon"},null,8,["icon"])],4),e("div",Vl,[e("h4",zl,l(E.title),1)]),pe(n(nt),{icon:n(ii),class:Ie(["expand-icon",{expanded:n(J)[E.id]}])},null,8,["icon","class"])],2),e("div",{class:Ie(["tile-body",{"body-expanded":n(J)[E.id]}])},[e("div",{class:"tile-body-inner",onClick:s[4]||(s[4]=Bs(()=>{},["stop"]))},[E.id==="triage"?(a(),o("div",Gl,[n(ye)?(a(),o("div",jl,[e("div",Wl,[s[134]||(s[134]=e("span",{class:"triage-summary-letter"},"A.",-1)),e("p",Yl,[s[133]||(s[133]=e("strong",null,"Presenting Complaints:",-1)),e("span",null,l(n(ye).presentingComplaints),1)])]),e("div",ql,[s[136]||(s[136]=e("span",{class:"triage-summary-letter"},"B.",-1)),e("p",Kl,[s[135]||(s[135]=e("strong",null,"Vital Signs:",-1)),e("span",null,l(n(ye).vitalSigns),1)])]),e("div",Xl,[s[138]||(s[138]=e("span",{class:"triage-summary-letter"},"C.",-1)),e("p",Zl,[s[137]||(s[137]=e("strong",null,"Triage Category:",-1)),e("span",null,l(n(ye).triageCategory),1)])]),e("div",Jl,[s[140]||(s[140]=e("span",{class:"triage-summary-letter"},"D.",-1)),e("p",Ql,[s[139]||(s[139]=e("strong",null,"Patient Care Area:",-1)),e("span",null,l(n(ye).patientCareArea),1)])]),e("p",er,l(n(ye).createdByLine),1)])):(a(),o("div",Ul,"No triage information found."))])):E.id==="soapier"?(a(),o("div",tr,[n(Q)?(a(),o("div",ir,[e("div",nr,[e("div",ar,[s[141]||(s[141]=e("div",{class:"soapier-card-title"},"Subjective",-1)),s[142]||(s[142]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",or,l(n(Q).subjective||"N/A"),1)]),e("div",lr,[s[145]||(s[145]=e("div",{class:"soapier-card-title"},"Objective",-1)),s[146]||(s[146]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",rr,[e("div",cr,[s[143]||(s[143]=e("div",{class:"soapier-block-title"},"Objective",-1)),e("div",dr,l(n(Q).objective||"N/A"),1)]),e("div",pr,[s[144]||(s[144]=e("div",{class:"soapier-block-title"},"Vital Signs",-1)),e("div",ur,l(n(Q).vitalSigns||"N/A"),1)])])]),e("div",mr,[s[147]||(s[147]=e("div",{class:"soapier-card-title"},"Assessment",-1)),s[148]||(s[148]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",gr,l(n(Q).assessment||"N/A"),1)]),e("div",vr,[s[149]||(s[149]=e("div",{class:"soapier-card-title"},"Plan",-1)),s[150]||(s[150]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",yr,l(n(Q).plan||"N/A"),1)]),e("div",fr,[s[153]||(s[153]=e("div",{class:"soapier-card-title"},"Intervention / Implementation",-1)),s[154]||(s[154]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",br,[e("div",hr,[s[151]||(s[151]=e("div",{class:"soapier-block-title"},"Non‑Pharmacological",-1)),e("div",_r,[n(Q).nonPharmacological&&n(Q).nonPharmacological!=="N/A"?(a(!0),o(k,{key:0},x(n(Q).nonPharmacological.split(/\n|\s*\|\s*/).filter(Boolean),(p,g)=>(a(),o("div",{key:"np-all-"+g},l(p),1))),128)):(a(),o(k,{key:1},[He("N/A")],64))])]),e("div",kr,[s[152]||(s[152]=e("div",{class:"soapier-block-title"},"Medications",-1)),e("div",Sr,l(n(Q).medications||"N/A"),1)])])]),e("div",xr,[s[155]||(s[155]=e("div",{class:"soapier-card-title"},"Evaluation",-1)),s[156]||(s[156]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",wr,l(n(Q).evaluation||"N/A"),1)]),e("div",Nr,[s[157]||(s[157]=e("div",{class:"soapier-card-title"},"Replan",-1)),s[158]||(s[158]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",Ar,l(n(Q).replan||"N/A"),1)])]),e("div",Er,l(n(Q).createdByLine),1)])):(a(),o("div",sr,"No SOAPIER notes found."))])):E.id==="monitoring_chart"?(a(),o("div",Cr,[n($e)?(a(),o("div",Pr,[(a(!0),o(k,null,x(n($e).charts,p=>(a(),o("div",{key:p.key,class:"monitoring-chart-card"},[e("div",Tr,l(p.title),1),s[159]||(s[159]=e("div",{class:"monitoring-chart-divider"},null,-1)),G(p)?(a(),o("div",Lr,[n(J)[E.id]?(a(),vt(n(qs),{key:`${E.id}-${p.key}`,width:"100%",height:"160",type:"line",options:_e(p),series:p.series},null,8,["options","series"])):T("",!0)])):T("",!0),he(p)?(a(),o("div",Rr,[(a(!0),o(k,null,x(p.series,(g,z)=>(a(),o("span",{key:`${p.key}-${g.name}`,class:"monitoring-chart-legend-item"},[e("span",{class:"monitoring-chart-legend-marker",style:gt({color:p.colors?.[z]||"#0ea5e9"}),"aria-hidden":"true"}," ● ",4),e("span",null,l(g.name),1)]))),128))])):T("",!0),G(p)?T("",!0):(a(),o("div",Dr," No chartable records. "))]))),128))])):(a(),o("div",Ir," No monitoring chart records found. "))])):E.id==="fluid_balance"?(a(),o("div",Or,[n(Ke)?(a(),o("div",Hr,[(a(!0),o(k,null,x(n(Ke).entries,p=>(a(),o("div",{key:p.id,class:"fluid-balance-card"},[e("div",Fr,[e("div",null,[e("div",$r,l(p.entryDate||"Date not recorded"),1),e("div",Br,l(p.entryTime||"Time not recorded"),1)]),e("div",{class:Ie(["fluid-balance-badge",{"fluid-balance-badge--alert":Math.abs(p.balance)>1e3}])},l(p.balanceLabel),3)]),e("div",Vr,[e("div",zr,[s[160]||(s[160]=e("div",{class:"fluid-balance-section-title"},"Intake",-1)),e("ul",Gr,[(a(!0),o(k,null,x(p.intake,g=>(a(),o("li",{key:`intake-${g.title}`},[e("span",null,l(g.title)+":",1),He(" "+l(g.value),1)]))),128)),p.intake.length===0?(a(),o("li",Ur,"No intake recorded.")):T("",!0)])]),e("div",jr,[s[161]||(s[161]=e("div",{class:"fluid-balance-section-title"},"Output",-1)),e("ul",Wr,[(a(!0),o(k,null,x(p.output,g=>(a(),o("li",{key:`output-${g.title}`},[e("span",null,l(g.title)+":",1),He(" "+l(g.value),1)]))),128)),p.output.length===0?(a(),o("li",Yr,"No output recorded.")):T("",!0)])]),e("div",qr,[s[162]||(s[162]=e("div",{class:"fluid-balance-section-title"},"Stool / Lab",-1)),e("ul",Kr,[(a(!0),o(k,null,x(p.stool,g=>(a(),o("li",{key:`stool-${g.title}`},[e("span",null,l(g.title)+":",1),He(" "+l(g.value),1)]))),128)),p.stool.length===0?(a(),o("li",Xr,"No stool details recorded.")):T("",!0)])]),e("div",Zr,[s[167]||(s[167]=e("div",{class:"fluid-balance-section-title"},"Summary",-1)),e("ul",Jr,[e("li",null,[s[163]||(s[163]=e("span",null,"Total Intake:",-1)),He(" "+l(p.totalIntake)+" mL",1)]),e("li",null,[s[164]||(s[164]=e("span",null,"Total Output:",-1)),He(" "+l(p.totalOutput)+" mL",1)]),e("li",null,[s[165]||(s[165]=e("span",null,"24-hour Balance:",-1)),He(" "+l(p.balanceLabel),1)]),p.comments?(a(),o("li",Qr,[s[166]||(s[166]=e("span",null,"Notes:",-1)),He(" "+l(p.comments),1)])):T("",!0)])])])]))),128))])):(a(),o("div",Mr," No fluid balance and stool monitoring records found. "))])):E.id==="primary_survey"?(a(),o("div",ec,[n(Le)?(a(),o("div",sc,[e("div",ic,[(a(!0),o(k,null,x(n(Le).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",nc,l(g),1),e("ul",ac,[(a(!0),o(k,null,x(p,(z,le)=>(a(),o("li",{key:le,class:"observation-row"},[e("span",oc,l(z.title),1),e("span",lc,l(z.value),1)]))),128))])]))),128))]),e("div",rc,l(n(Le).createdByLine),1)])):(a(),o("div",tc," No primary survey records found. "))])):E.id==="sample_history"?(a(),o("div",cc,[n(V)?(a(),o("div",pc,[e("div",uc,[s[168]||(s[168]=e("div",{class:"sample-card-title"},"Symptoms - Presenting Complaints",-1)),s[169]||(s[169]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",mc,[(a(!0),o(k,null,x(n(V).cards.symptoms.items,(p,g)=>(a(),o("li",{key:g},[e("span",gc,l(p.title)+":",1),e("span",vc,l(p.value),1)]))),128)),n(V).cards.symptoms.items.length===0?(a(),o("li",yc," No records. ")):T("",!0)]),e("div",fc,l(n(V).cards.symptoms.createdByLine),1)]),e("div",bc,[s[170]||(s[170]=e("div",{class:"sample-card-title"},"Events",-1)),s[171]||(s[171]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",hc,[(a(!0),o(k,null,x(n(V).cards.events.items,(p,g)=>(a(),o("li",{key:g},[e("span",_c,l(p.title)+":",1),e("span",kc,l(p.value),1)]))),128)),n(V).cards.events.items.length===0?(a(),o("li",Sc," No records. ")):T("",!0)]),e("div",xc,l(n(V).cards.events.createdByLine),1)]),e("div",wc,[s[172]||(s[172]=e("div",{class:"sample-card-title"},"Allergies",-1)),s[173]||(s[173]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Nc,[(a(!0),o(k,null,x(n(V).cards.allergies.items,(p,g)=>(a(),o("li",{key:g},[e("span",Ac,l(p.title)+":",1),e("span",Ec,l(p.value),1)]))),128)),n(V).cards.allergies.items.length===0?(a(),o("li",Cc," No records. ")):T("",!0)]),e("div",Ic,l(n(V).cards.allergies.createdByLine),1)]),e("div",Pc,[s[174]||(s[174]=e("div",{class:"sample-card-title"},"Medications",-1)),s[175]||(s[175]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Tc,[(a(!0),o(k,null,x(n(V).cards.medications.items,(p,g)=>(a(),o("li",{key:g},[e("span",Lc,l(p.title)+":",1),e("span",Rc,l(p.value),1)]))),128)),n(V).cards.medications.items.length===0?(a(),o("li",Dc," No records. ")):T("",!0)]),e("div",Oc,l(n(V).cards.medications.createdByLine),1)]),e("div",Mc,[s[176]||(s[176]=e("div",{class:"sample-card-title"},"Prior/Existing Conditions",-1)),s[177]||(s[177]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Hc,[(a(!0),o(k,null,x(n(V).cards.priorConditions.items,(p,g)=>(a(),o("li",{key:g},[e("span",Fc,l(p.title)+":",1),e("span",$c,l(p.value),1)]))),128)),n(V).cards.priorConditions.items.length===0?(a(),o("li",Bc," No records. ")):T("",!0)]),e("div",Vc,l(n(V).cards.priorConditions.createdByLine),1)]),e("div",zc,[s[178]||(s[178]=e("div",{class:"sample-card-title"},"Last Meal",-1)),s[179]||(s[179]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Gc,[(a(!0),o(k,null,x(n(V).cards.lastMeal.items,(p,g)=>(a(),o("li",{key:g},[e("span",Uc,l(p.title)+":",1),e("span",jc,l(p.value),1)]))),128)),n(V).cards.lastMeal.items.length===0?(a(),o("li",Wc," No records. ")):T("",!0)]),e("div",Yc,l(n(V).cards.lastMeal.createdByLine),1)])])):(a(),o("div",dc," No SAMPLE history records found. "))])):E.id==="secondary_survey"?(a(),o("div",qc,[n(Re)?(a(),o("div",Xc,[e("div",Zc,[(a(!0),o(k,null,x(n(Re).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",Jc,l(g),1),e("ul",Qc,[(a(!0),o(k,null,x(p,(z,le)=>(a(),o("li",{key:le,class:"observation-row"},[e("span",ed,l(z.title),1),e("span",td,l(z.value),1)]))),128))])]))),128))]),e("div",sd,l(n(Re).createdByLine),1)])):(a(),o("div",Kc," No secondary survey records found. "))])):E.id==="diagnosis"?(a(),o("div",id,[n(Ge)?(a(),o("div",ad,[(a(!0),o(k,null,x(n(Ge).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",od,l(g),1),e("ul",ld,[(a(!0),o(k,null,x(p,(z,le)=>(a(),o("li",{key:le,class:"observation-row"},[e("span",rd,l(z.title),1),e("span",cd,l(z.value),1)]))),128))])]))),128)),e("div",dd,l(n(Ge).createdByLine),1)])):(a(),o("div",nd," No diagnosis records found. "))])):E.id==="investigations"?(a(),o("div",pd,[n(ue)?(a(),o("div",md,[n(ue).cards.labOrdersPlan.items.length?(a(),o("div",gd,[s[180]||(s[180]=e("div",{class:"pm-card-title"},"Lab Orders Plan",-1)),s[181]||(s[181]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",vd,[(a(!0),o(k,null,x(n(ue).cards.labOrdersPlan.items,(p,g)=>(a(),o("li",{key:g},[e("span",yd,l(p.title)+":",1),e("span",fd,l(p.value),1)]))),128))]),e("div",bd,l(n(ue).cards.labOrdersPlan.createdByLine),1)])):T("",!0),n(ue).cards.bedsidePlan.items.length?(a(),o("div",hd,[s[182]||(s[182]=e("div",{class:"pm-card-title"},"Bedside Investigation Plan",-1)),s[183]||(s[183]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",_d,[(a(!0),o(k,null,x(n(ue).cards.bedsidePlan.items,(p,g)=>(a(),o("li",{key:g},[e("span",kd,l(p.title)+":",1),e("span",Sd,l(p.value),1)]))),128))]),e("div",xd,l(n(ue).cards.bedsidePlan.createdByLine),1)])):T("",!0),!n(ue).cards.labOrdersPlan.items.length&&!n(ue).cards.bedsidePlan.items.length?(a(),o("div",wd," No findings recorded. ")):T("",!0)])):(a(),o("div",ud," No laboratory / radiology findings found. "))])):E.id==="patient_management"?(a(),o("div",Nd,[n(fe)?(a(),o("div",Ed,[e("div",Cd,[s[184]||(s[184]=e("div",{class:"pm-card-title"},"Non‑Pharmacological",-1)),s[185]||(s[185]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Id,[(a(!0),o(k,null,x(n(fe).cards.nonPharmacological.items,(p,g)=>(a(),o("li",{key:g},[e("span",Pd,l(p.title)+":",1),e("span",Td,l(p.value),1)]))),128)),n(fe).cards.nonPharmacological.items.length===0?(a(),o("li",Ld," No records. ")):T("",!0)]),e("div",Rd,l(n(fe).cards.nonPharmacological.createdByLine),1)]),e("div",Dd,[s[186]||(s[186]=e("div",{class:"pm-card-title"},"Patient Care Area",-1)),s[187]||(s[187]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Od,[(a(!0),o(k,null,x(n(fe).cards.patientCareArea.items,(p,g)=>(a(),o("li",{key:g},[e("span",Md,l(p.title)+":",1),e("span",Hd,l(p.value),1)]))),128)),n(fe).cards.patientCareArea.items.length===0?(a(),o("li",Fd," No records. ")):T("",!0)]),e("div",$d,l(n(fe).cards.patientCareArea.createdByLine),1)]),e("div",Bd,[s[188]||(s[188]=e("div",{class:"pm-card-title"},"Medications",-1)),s[189]||(s[189]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Vd,[(a(!0),o(k,null,x(n(fe).cards.medications.items,(p,g)=>(a(),o("li",{key:g},[e("span",zd,l(p.title)+":",1),e("span",Gd,l(p.value),1)]))),128)),n(fe).cards.medications.items.length===0?(a(),o("li",Ud," No records. ")):T("",!0)]),e("div",jd,l(n(fe).cards.medications.createdByLine),1)])])):(a(),o("div",Ad," No patient management plan records found. "))])):E.id==="continuation"?(a(),o("div",Wd,[n(De)?(a(),o("div",qd,[(a(!0),o(k,null,x(n(De).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",Kd,l(g),1),e("ul",Xd,[(a(!0),o(k,null,x(p,(z,le)=>(a(),o("li",{key:le,class:"observation-row"},[e("span",Zd,l(z.title),1),e("span",Jd,l(z.value),1)]))),128))])]))),128)),e("div",Qd,l(n(De).createdByLine),1)])):(a(),o("div",Yd," No continuation notes found. "))])):E.id==="disposition"?(a(),o("div",ep,[n(Oe)?(a(),o("div",sp,[e("div",ip,[s[190]||(s[190]=e("div",{class:"pm-card-title"},"Awaiting Specialty",-1)),s[191]||(s[191]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",np,[(a(!0),o(k,null,x(n(Oe).cards.awaitingSpecialty.items,(p,g)=>(a(),o("li",{key:g},[e("span",ap,l(p.title)+":",1),e("span",op,l(p.value),1)]))),128)),n(Oe).cards.awaitingSpecialty.items.length===0?(a(),o("li",lp," No records. ")):T("",!0)]),e("div",rp,l(n(Oe).cards.awaitingSpecialty.createdByLine),1)]),(a(!0),o(k,null,x(n(Oe).otherCards,p=>(a(),o("div",{key:p.key,class:"pm-card"},[e("div",cp,l(p.title),1),s[192]||(s[192]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",dp,[(a(!0),o(k,null,x(p.items,(g,z)=>(a(),o("li",{key:z},[e("span",pp,l(g.title)+":",1),e("span",up,l(g.value),1)]))),128)),p.items.length===0?(a(),o("li",mp,"No records.")):T("",!0)]),e("div",gp,l(p.createdByLine),1)]))),128))])):(a(),o("div",tp," No disposition notes found. "))])):T("",!0)])],2)],14,Bl))),128))])):(a(),o("div",Hl,[e("div",Fl,[pe(n(nt),{icon:n(Ct),class:"empty-icon"},null,8,["icon"])]),s[131]||(s[131]=e("h3",null,"No Clinical Records Found",-1)),s[132]||(s[132]=e("p",null,"The clinical review workflow has not been started or saved yet.",-1))]))])])):(a(),o("div",vp,"Clinical notes records will appear here."))]),_:1})]),_:1})]))}}),qt={Weight:["Weight (kg)","Weight"],"Height (cm)":["Height (cm)","Height"],Temperature:["Temperature (c)","Temperature"],Pulse:["Pulse","Pulse Rate","Pulse rate"],Systolic:["Systolic blood pressure","Systolic"],Diastolic:["Diastolic blood pressure","Diastolic"],"Respiratory rate":["Respiratory rate","Respiratory Rate"]},yp=P=>{const D=`${P??""}`.trim();return Date.parse(D)||Date.parse(D.replace(" ","T").replace(/ ?([+-]\d\d)(\d\d)$/,"$1:$2"))||0},fp=P=>{const D=P?.value_numeric??P?.value_text;if(D==null||`${D}`.trim()==="")return;const te=Number(D);return Number.isFinite(te)?te:void 0},Hp=P=>{const D=new Map;Object.entries(qt).forEach(([O,G])=>G.forEach(he=>D.set(he.toLowerCase(),O)));const te={},be=O=>{if(!O)return;const G=D.get(`${O.concept_name??""}`.trim().toLowerCase()),he=G&&!Number(O.voided)?fp(O):void 0;if(G&&he!==void 0){const _e=yp(O.obs_datetime);(!te[G]||_e>te[G].at)&&(te[G]={at:_e,value:he})}(O.children||O.child||O.groupMembers||[]).forEach(be)};return(P?.observations||[]).forEach(O=>(O?.obs||[]).forEach(be)),Object.keys(qt).reduce((O,G)=>(O[G]=te[G]?.value,O),{})},bp={class:"modern-popover-container"},hp={class:"item-title"},_p=Xt({__name:"StartVisitMenu",props:{items:{}},emits:["select"],setup(P,{expose:D,emit:te}){const be=te,O=L(!1),G=L(null),he=L({top:"0px",left:"0px"});let _e=null,ae=null;const ve=()=>{O.value=!1,_e=null,ae!==null&&cancelAnimationFrame(ae),ae=null},Pe=()=>{if(!O.value||!_e||!G.value)return;const F=_e.getBoundingClientRect();if(!F.width||!F.height){ve();return}const J=G.value.offsetWidth,oe=G.value.offsetHeight,ke=8,we=Math.max(8,Math.min(F.right-J,window.innerWidth-J-8)),Se=F.bottom+ke+oe>window.innerHeight-12,ye=Se?F.top-ke-oe:F.bottom+ke,Q=Math.max(8,Math.min(J-20,we+J-(F.left+F.width/2)-6));he.value={top:`${ye}px`,left:`${we}px`,"--arrow-right":`${Q}px`,"--arrow-top":Se?"auto":"-6px","--arrow-bottom":Se?"-6px":"auto","--arrow-transform":Se?"rotate(225deg)":"rotate(45deg)","--arrow-shadow":Se?"2px 2px 3px rgba(0, 0, 0, 0.05)":"-2px -2px 3px rgba(0, 0, 0, 0.05)"},ae=requestAnimationFrame(Pe)},ze=async F=>{if(F.stopPropagation(),O.value){ve();return}_e=F.currentTarget,O.value=!0,await Kt(),Pe()},Te=F=>{ve(),be("select",F)},Fe=F=>{F.key==="Escape"&&O.value&&ve()};return Zt(()=>window.addEventListener("keydown",Fe)),zs(()=>{ve(),window.removeEventListener("keydown",Fe)}),D({open:ze,close:ve}),(F,J)=>(a(),vt(Gs,{to:"body"},[O.value?(a(),o("div",{key:0,class:"custom-menu-backdrop",onClick:ve})):T("",!0),O.value?(a(),o("div",{key:1,ref_key:"menuElement",ref:G,class:"custom-premium-menu profile-program-menu",style:gt(he.value)},[J[0]||(J[0]=e("div",{class:"menu-arrow"},null,-1)),e("div",bp,[pe(n(Ys),{lines:"none"},{default:qe(()=>[(a(!0),o(k,null,x(P.items,(oe,ke)=>(a(),o(k,{key:ke},[oe.isHeader?(a(),vt(n(Us),{key:0,class:"program-section-label"},{default:qe(()=>[pe(n(js),null,{default:qe(()=>[He(l(oe.label),1)]),_:2},1024)]),_:2},1024)):(a(),vt(n(Ws),{key:1,button:!0,detail:!1,class:Ie(["modern-popover-item",{"child-item":oe.isChild}]),onClick:we=>Te(oe)},{default:qe(()=>[pe(n(nt),{slot:"start",icon:n(ni),class:"add-icon"},null,8,["icon"]),e("span",hp,l(oe.label),1)]),_:2},1032,["class","onClick"]))],64))),128))]),_:1})])],4)):T("",!0)]))}}),Fp=li(_p,[["__scopeId","data-v-5a2a4c87"]]);export{Fp as S,Mp as _,Hp as g,ri as u};

import{f as Z,r as I,n as qt,d as Kt,o as Xt,j as a,k as o,A as de,v as Ke,t as n,C as Ds,x as e,F as k,U as S,z as l,s as T,Q as Me,G as Hs,E as nt,X as at,J as Fs,y as $e,q as vt,I as Bs,W as $s,af as Vs,c8 as zs,S as Gs,R as Us,aV as js}from"../index-BZNoLmq4.js";import{m as Ws}from"./vue3-apexcharts-DinKHJZi.js";import{I as Ys,ae as At,V as qs,U as Et,ce as Ks,_ as Xs,Y as Zs,bG as Js,bd as Qs,cd as ei,a6 as ti,o as si}from"./index-C1Wf4CBQ.js";import ii from"./DemographicBar-CCk5Rq2Z.js";import{D as it}from"./Alerts-j4J6smlD.js";import{O as gt}from"./GlobalPropertyStore-D1Am_ceu.js";import{E as f}from"./encounter_type-6IaDgsG8.js";import{ConceptService as Wt}from"./concept_service-D90ai7Du.js";import{UserService as ni}from"./user_service-j0Jrz-lA.js";import{u as ai}from"./SelectedVisitStore-uqVU-rQh.js";import{H as L}from"./service-BRu6KMki.js";/* empty css                                                                      *//* empty css                                                                          */import{toastWarning as qe}from"./toasts-DJtFCpkI.js";import{F as ie}from"./useFluidBalanceStoolMonitoringForm-PuoTJNWJ.js";import{_ as oi}from"./_plugin-vue_export-helper-DlAUqK2U.js";const li=()=>{const J=I("all"),V=I([]),ee=I([]),he=I([]),R=I(!1),z=I(!1),_e=I(!1),Ne=I(!1),ve=I(null),Ae=new Map,Ee=new Map,ke=I(!1),Re=I(null),Ge=I(!1),De=I(null),ye=I(!1),D=I(null),pe=I(!1),ne=I(null),xe=I(!1),ae=I(null),G=I(!1),Se=I(null),fe=I(!1),Ce=I(null),H=I(!1),Pe=I(null),Ue=I(!1),ue=I(null),be=I(!1),He=I(null),Fe=I(!1),je=I(null),Be=I({}),yt=i=>{Be.value[i]=!Be.value[i]},U=Z(()=>Ne.value||ke.value||Ge.value||ye.value||pe.value||xe.value||G.value||fe.value||H.value||Ue.value||be.value||Fe.value),Qe=async()=>{await zt("all")},Xe=Z(()=>{const i=[];return ve.value&&i.push({id:"triage",title:"Triage Information",icon:Ys,color:"#ef4444"}),Re.value&&i.push({id:"soapier",title:"SOAPIER Notes",icon:At,color:"#f43f5e"}),De.value&&i.push({id:"monitoring_chart",title:"Monitoring Charts",icon:At,color:"#0ea5e9"}),D.value&&i.push({id:"fluid_balance",title:"Fluid Balance & Stool Monitoring",icon:At,color:"#14b8a6"}),ne.value&&i.push({id:"primary_survey",title:"Primary Survey",icon:qs,color:"#8b5cf6"}),ae.value&&i.push({id:"sample_history",title:"SAMPLE History",icon:Et,color:"#0ea5e9"}),Se.value&&i.push({id:"secondary_survey",title:"Secondary Survey",icon:Ks,color:"#22c55e"}),Ce.value&&i.push({id:"diagnosis",title:"Diagnosis",icon:Xs,color:"#f59e0b"}),Pe.value&&i.push({id:"investigations",title:"Laboratory / Radiology Findings",icon:Zs,color:"#0ea5e9"}),ue.value&&i.push({id:"patient_management",title:"Patient Management Plan",icon:Js,color:"#14b8a6"}),He.value&&i.push({id:"continuation",title:"Continuation Notes",icon:Et,color:"#64748b"}),je.value&&i.push({id:"disposition",title:"Disposition Notes",icon:Qs,color:"#14b8a6"}),i}),ot=i=>{const t=(i||"").toLowerCase();return t.includes("presenting")?"Presenting Complaints":t.includes("surgical procedure")||t==="procedures"?"Past Surgical History":t.includes("family history")?"Family History":t.includes("allergy")||t.includes("allergen")?"Allergies":t.includes("smokes")||t.includes("smoking")||t.includes("alcohol intake")||t.includes("recreational drug")||t.includes("expected duration")?"Social History":t.includes("pregnancy")||t.includes("lnmp")||t.includes("gestational")||t.includes("parity")?"Gynecological History":t.includes("review of systems")||t.includes("severe respiratory")?"Review of Systems":t.includes("differential diagnosis")?"Working Differential Diagnosis":t.includes("notes")?"Investigations":t.includes("clerk")||t.includes("designation")||t.includes("signature")||t.includes("additional notes")?"Initial Management":t.includes("general condition")||t.includes("blood pressure")||t.includes("pulse")||t.includes("respiratory")||t.includes("temperature")||t.includes("eyes")||t.includes("mouth")||t.includes("neck")||t.includes("chest")||t.includes("endocrine examination")||t.includes("abdominal")||t.includes("motor response")||t.includes("verbal response")||t.includes("eye opening response")||t.includes("cranial")||t.includes("gross motor")||t.includes("sensation")||t.includes("pulsations")||t.includes("rectal")||t.includes("extremities")||t.includes("vaginal")?"Physical Examination":t.includes("condition")||t.includes("medication")||t.includes("treatment")||t.includes("reason for request")?"Past Medical History":"Other"},ft=i=>{const t=(i||"").toLowerCase();return t.includes("presenting complaints")||t.includes("presenting history")?"Presenting Complaints":t.includes("other medication")?"Past Medical History":t.includes("medication")||t.includes("drug")||t.includes("prescription")||t.includes("none")?"Drug History":t.includes("hiv")||t.includes("arv")||t.includes("health center")||t.includes("historical drug start date")?"Past Medical History":t.includes("surgical history")?"Past Surgical History":t.includes("allergy")||t.includes("allergen")||t.includes("allergic")||t.includes("hypersensitivity")?"Allergy":t.includes("intoxication")?"Intoxication":t.includes("social history")?"Social History":t.includes("family history")?"Family History":t.includes("review of systems")||t.includes("severe respiratory")||t.includes("skin infection")?"Review of Systems":t.includes("general")||t.includes("blood pressure")||t.includes("pulse")||t.includes("respiratory")||t.includes("temperature")||t.includes("oxygen")||t.includes("pupil")||t.includes("conjunctiva")||t.includes("oral")||t.includes("jvp")||t.includes("lymphadenopathy")||t.includes("trachea")||t.includes("expansion")||t.includes("apex")||t.includes("thrill heaves")||t.includes("auscultation")||t.includes("lung condition")||t.includes("lung position")||t.includes("palpation")||t==="condition"||t==="other"||t.includes("oedema")||t.includes("rash")||t.includes("herpes")||t.includes("neck stiffness")||t.includes("motor response")||t.includes("verbal response")||t.includes("eye opening response")||t.includes("visual field")||t.includes("eye movements")||t.includes("hearing")||t.includes("tongue")||t.includes("cough")||t.includes("power")||t.includes("tone")||t.includes("reflexes")||t.includes("plantars")||t.includes("sensation")||t.includes("coordination")||t.includes("gait")?"Physical Examination":t.includes("summary")?"Summary":t.includes("differential diagnosis")?"Differential Diagnosis":t.includes("assessment")||t.includes("additional notes")?"Investigations":t==="plan"?"Management Plan":"Other"},lt=i=>{const t=(i||"").toLowerCase();return t.includes("chief complaint")||t.includes("history of present illness")?"Complaints":t.includes("lnmp")||t.includes("edd")||t.includes("gestational")||t.includes("gravidity")||t.includes("parity")||t.includes("living children")||t.includes("menarche")||t.includes("menstrual")||t.includes("duration")||t.includes("abortion")||t.includes("ectopic")||t.includes("vaginal discharge")||t.includes("consistency")||t.includes("color")||t.includes("colour")||t.includes("odour")||t.includes("amount")||t.includes("contraceptive")||t.includes("side effects")||t.includes("cancer screening")||t.includes("history of stis")?"Obstetric And Gynaecology History":t.includes("hypertension")||t.includes("diabetes")||t.includes("tuberculosis")||t.includes("epilepsy")||t.includes("asthma")||t.includes("mental illness")||t.includes("blood transfusion")||t.includes("drug allergies")?"Medical History":t.includes("alcohol")||t.includes("smok")||t.includes("recreational drug")?"Habits":t.includes("oxygen")||t.includes("pulse")||t.includes("blood pressure")||t.includes("respiratory")||t.includes("temperature")||t.includes("blood glucose")||t.includes("weight")||t.includes("height")?"Vital Signs":t.includes("general condition")||t.includes("pallor")||t.includes("chest")||t.includes("abdomen")||t.includes("vaginal")||t.includes("extremities")?"General Examination":t.includes("impression")?"Impression":t==="plan"||t.includes("immediate intervention")?"Plan":"Other"},j=i=>i?.concept_name||i?.concept_id||"",we=i=>i!=null&&`${i}`.trim()!=="",te=i=>{if(!i)return"";const t=i?.value_coded_name??i?.value_coded_display??i?.valueCodedName??i?.valueCodedDisplay??i?.value_coded?.name??i?.value_coded?.label??i?.value_coded?.value;if(we(t))return t;const r=i?.value_text??i?.valueText;if(we(r))return r;const d=i?.value_numeric??i?.valueNumeric??i?.value_number??i?.valueNumber;if(we(d)){const A=i?.value_modifier??i?.valueModifier,N=we(A)?` ${A}`:"";return`${d}${N}`}const m=i?.value_datetime??i?.valueDatetime??i?.valueDateTime;if(we(m))return L.toStandardHisDisplayFormat(m);const u=i?.value_date??i?.valueDate;if(we(u))return L.toStandardHisDisplayFormat(u);const y=i?.value_boolean??i?.valueBoolean;if(we(y))return String(y);if(we(i?.value))return i.value;const w=i?.value_coded??i?.valueCoded;return we(w)?w:""},We=async i=>{const t=i.filter(m=>{const u=j(m).toLowerCase();return u.includes("differential diagnosis")||u.includes("attempted/ differential diagnosis")}),r=Array.from(new Set(t.map(m=>Number(m?.value_coded)).filter(m=>Number.isFinite(m)&&m>0)));if(r.length===0)return i;const d=new Map;return await Promise.all(r.map(async m=>{const u=await Wt.getConceptName(m);u&&d.set(m,u)})),i.map(m=>{const u=Number(m?.value_coded);return d.has(u)&&!m?.value_text&&!m?.value_coded_name?{...m,value_text:d.get(u)}:m})},et=i=>{const t=i.filter(u=>j(u).toLowerCase()==="presenting complaints"),r=i.filter(u=>j(u).toLowerCase()==="presenting history"),m=[...i.filter(u=>{const y=j(u).toLowerCase();return y!=="presenting complaints"&&y!=="presenting history"})];if(t.length>0){const u=t.map(y=>String(te(y)).trim()).filter(Boolean);u.length>0&&m.push({...t[0],concept_name:"Presenting Complaints",value_text:u.join(", ")})}if(r.length>0){const u=r.reduce((y,w)=>{const A=new Date(y?.obs_datetime||0).getTime();return new Date(w?.obs_datetime||0).getTime()>A?w:y});m.push(u)}return m},v=(i,t)=>{const r=(i||[]).find(d=>{const m=le(j(d));return t.some(u=>u(m))});return r?String(te(r)??"").trim():""},Ze=Z(()=>{const i=Oe.value?.["Physical Examination"]||[];return{generalCondition:v(i,[t=>t.includes("general condition")]),temperature:v(i,[t=>t==="temperature"||t.includes("temperature")]),pulseRate:v(i,[t=>t.includes("pulse rate")||t==="pulse rate"||t==="pulse"]),bloodPressure:v(i,[t=>t.includes("blood pressure")]),respiratoryRate:v(i,[t=>t.includes("respiratory rate")||t.includes("respiratory")]),eyes:v(i,[t=>t==="eyes"||t.includes("eyes")]),mouth:v(i,[t=>t==="mouth"||t.includes("mouth")]),neck:v(i,[t=>t==="neck"||t.includes("neck")]),chestExamination:v(i,[t=>t.includes("chest examination")]),endocrineExamination:v(i,[t=>t.includes("endocrine examination")]),abdominalExamination:v(i,[t=>t.includes("abdominal examination")]),motorResponse:v(i,[t=>t.includes("motor response")]),verbalResponse:v(i,[t=>t.includes("verbal response")]),eyeOpeningResponse:v(i,[t=>t.includes("eye opening response")||t.includes("eye response")]),cranialNerves:v(i,[t=>t.includes("cranial")]),grossMotor:v(i,[t=>t.includes("gross motor")]),sensation:v(i,[t=>t==="sensation"||t.includes("sensation")]),pulsations:v(i,[t=>t.includes("pulsations")]),rectalExamination:v(i,[t=>t.includes("rectal examination")]),extremities:v(i,[t=>t==="extremities"||t.includes("extremities")])}}),bt=Z(()=>{const i=Oe.value?.["Initial Management"]||[];return{clerkName:v(i,[t=>t.includes("clerk name")]),designation:v(i,[t=>t.includes("designation")]),signature:v(i,[t=>t.includes("signature")])}}),rt=Z(()=>{const i=Oe.value?.["Presenting Complaints"]||[];return{complaints:v(i,[t=>t==="presenting complaints"||t.includes("presenting complaints")]),history:v(i,[t=>t==="presenting history"||t.includes("presenting history")])}}),tt=Z(()=>{const i=Oe.value?.["Past Medical History"]||[];return re(i)}),ct=i=>{const t=[],r=[];return i.forEach((d,m)=>{(m%2===0?t:r).push(d)}),{left:t,right:r}},Ve=Z(()=>{const i=Oe.value?.["Review of Systems"]||[];return re(i)}),se=Z(()=>ct(Ve.value)),s=Z(()=>{const i=Oe.value?.["Past Surgical History"]||[];return re(i)}),E=Z(()=>{const i=Oe.value?.["Family History"]||[];return re(i)}),M=Z(()=>{const i=Oe.value?.["Social History"]||[];return re(i)}),p=Z(()=>{const i=Oe.value?.["Gynecological History"]||[];return re(i)}),g=Z(()=>{const i=dt.value?.["Presenting Complaints"]||[];return{complaints:v(i,[t=>t==="presenting complaints"||t.includes("presenting complaints")]),history:v(i,[t=>t==="presenting history"||t.includes("presenting history")])}}),$=Z(()=>{const i=dt.value?.["Physical Examination"]||[],t=c=>v(i,c),r=t([c=>c==="auscultation"||c.includes("auscultation")&&!c.includes("lung")]),d=t([c=>c==="region"||c.includes("region")]),m=t([c=>c==="inspection"||c.includes("inspection")]),u=t([c=>c.includes("light palpation")]),y=t([c=>c.includes("deep palpation")]),w=t([c=>c==="auscultation_lung"||c.includes("auscultation")&&c!=="auscultation"]),A=t([c=>c.includes("shifting dullness")]),N=t([c=>c.includes("fluid thrill")]);return{general:t([c=>c==="general"||c.includes("general")]),temperature:t([c=>c.includes("temperature")]),pulseRate:t([c=>c==="pulse rate"||c.includes("pulse rate")]),systolic:t([c=>c.includes("systolic")]),diastolic:t([c=>c.includes("diastolic")]),respiratoryRate:t([c=>c.includes("respiratory rate")||c==="respiratory rate"]),oxygenSaturation:t([c=>c.includes("oxygen saturation")]),pupilsSymmetrical:t([c=>c.includes("pupils symmetrical")]),conjunctiva:t([c=>c.includes("conjunctiva")]),oralKs:t([c=>c.includes("oral ks")]),oralThrush:t([c=>c.includes("oral thrush")||c.includes("candidosis")]),lymphadenopathy:t([c=>c.includes("lymphadenopathy")]),headNeckOther:t([c=>c==="other"]),symmetricalExpansion:t([c=>c.includes("symmetrical expansion")]),symmetricalExpansionDescription:t([c=>c==="description"||c.includes("description")&&!c.includes("additional")]),apexBeat:t([c=>c.includes("apex beat")]),thrillHeaves:t([c=>c.includes("thrill")||c.includes("thrill heaves")]),auscultationHeart:r,lungCondition:t([c=>c.includes("lung condition")||c==="condition"]),lungPosition:t([c=>c.includes("lung position")]),abdomenRegion:d,abdomenInspection:m,abdomenLightPalpation:u,abdomenDeepPalpation:y,abdomenAuscultation:w,abdomenShiftingDullness:A,abdomenFluidThrill:N,oedema:t([c=>c.includes("oedema")]),skinRash:t([c=>c.includes("skin rash")||c==="rash"]),herpesScar:t([c=>c.includes("herpes zoster")]),neckStiffness:t([c=>c.includes("neck stiffness")]),eyeOpeningResponse:t([c=>c.includes("eye opening response")]),verbalResponse:t([c=>c.includes("verbal response")]),motorResponse:t([c=>c.includes("motor response")]),cnPupil:t([c=>c==="pupil"||c.includes("pupil:")||c.includes("pupil")]),cnVisualField:t([c=>c.includes("visual field")]),cnEyeMovements:t([c=>c.includes("eye movements")&&c.includes("nystagmus")]),cnFacial:t([c=>c.includes("facial")||c.includes("eye movements/sensation")]),cnHearing:t([c=>c.includes("hearing")]),cnTongue:t([c=>c.includes("tongue movement")||c.includes("tongue")]),cnCoughGag:t([c=>c.includes("cough")||c.includes("gag")]),pnPower:t([c=>c==="power"||c.includes("power")]),pnTone:t([c=>c==="tone"||c.includes("tone")]),pnReflexes:t([c=>c.includes("reflexes")]),pnPlantars:t([c=>c.includes("plantars")]),pnSensation:t([c=>c==="sensation"||c.includes("sensation")&&!c.includes("facial")]),pnCoordination:t([c=>c.includes("coordination")])}}),oe=i=>{const t=i?.children??i?.child??i?.groupMembers??[];return Array.isArray(t)?t:[]},Ct=i=>i.flatMap(t=>oe(t).map(r=>({zone:String(te(r)??"").trim(),findings:oe(r).map(d=>({title:j(d),value:String(te(d)??"").trim()})).filter(d=>d.title&&d.value)}))).filter(t=>t.zone&&t.findings.length>0),Zt=Z(()=>{const i=he.value||[],t=r=>i.filter(d=>oe(d).length>0&&r(le(j(d))));return{respiratory:Ct(t(r=>r.includes("lung position"))),abdomen:Ct(t(r=>r==="palpation"))}}),Pt=Z(()=>{const i=dt.value?.["Review of Systems"]||[];return re(i)}),Jt=Z(()=>ct(Pt.value)),ht=i=>{const t=new Map;return i.forEach(r=>{const d=String(j(r));if(!d)return;const m=new Date(r?.obs_datetime||0).getTime(),u=t.get(d),y=u?new Date(u?.obs_datetime||0).getTime():-1;(!u||m>=y)&&t.set(d,r)}),Array.from(t.values())},Qt=i=>[...i||[]].sort((t,r)=>new Date(r?.obs_datetime||0).getTime()-new Date(t?.obs_datetime||0).getTime()),es=i=>{const t=new Set;return(i||[]).filter(r=>{if(oe(r).length>0)return!0;const d=`${j(r)}::${le(te(r))}`;return t.has(d)?!1:(t.add(d),!0)})},_t=(i,t=[])=>{const r={};for(const d of t)i[d]&&(r[d]=i[d]);return Object.entries(i).forEach(([d,m])=>{r[d]||(r[d]=m)}),r},Oe=Z(()=>{const i={},t=et(V.value);for(const r of t){const d=ot(r?.concept_name||r?.concept_id||"");i[d]||(i[d]=[]),i[d].push(r)}return _t(i,["Presenting Complaints","Past Medical History","Past Surgical History","Family History","Social History","Allergies","Gynecological History","Review of Systems","Physical Examination","Working Differential Diagnosis","Investigations","Initial Management","Other"])}),dt=Z(()=>{const i={},t=et(he.value);for(const r of t){const d=ft(r?.concept_name||r?.concept_id||"");i[d]||(i[d]=[]),i[d].push(r)}return _t(i,["Presenting Complaints","Drug History","Past Medical History","Past Surgical History","Social History","Family History","Allergy","Intoxication","Review of Systems","Physical Examination","Summary","Differential Diagnosis","Investigations","Management Plan"])}),ts=Z(()=>{const i={};for(const t of ee.value){const r=lt(t?.concept_name||t?.concept_id||"");i[r]||(i[r]=[]),i[r].push(t)}return _t(i,["Complaints","Obstetric And Gynaecology History","Medical History","Habits","Vital Signs","General Examination","Impression","Plan"])}),ss=async()=>{R.value=!0;try{const t=(await K(f.SURGICAL_NOTES_TEMPLATE)).flatMap(u=>u.obs||[]),r=t.map(u=>L.toStandardHisFormat(u?.obs_datetime)).filter(Boolean).sort().pop(),d=r?t.filter(u=>L.toStandardHisFormat(u?.obs_datetime)===r):[],m=await We(d);V.value=ht(m)}catch(i){console.error("Failed to load surgical notes records:",i),V.value=[]}finally{R.value=!1}},is=async()=>{_e.value=!0;try{const t=(await K(f.MEDICAL_IN_PATIENT)).flatMap(d=>d.obs||[]),r=await We(Qt(t));he.value=es(r)}catch(i){console.error("Failed to load medical inpatient records:",i),he.value=[]}finally{_e.value=!1}},ns=async()=>{z.value=!0;try{const t=(await K(f.GYNEACOLOGY_WARD)).flatMap(u=>u.obs||[]),r=t.map(u=>L.toStandardHisFormat(u?.obs_datetime)).filter(Boolean).sort().pop(),d=r?t.filter(u=>L.toStandardHisFormat(u?.obs_datetime)===r):[],m=await We(d);ee.value=ht(m)}catch(i){console.error("Failed to load gyneacology ward records:",i),ee.value=[]}finally{z.value=!1}},It={all:"Clinical Notes",surgical:"Surgical Notes",gyneacology:"Gyneacology Ward",medical:"Medical Inpatient"},kt=async()=>{await qt(),await new Promise(i=>{if(typeof window>"u"||!window.requestAnimationFrame){i();return}window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>i()))})},Tt=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Lt=()=>{const i=window.open("","_blank","width=900,height=1000");return i?(i.document.open(),i.document.write("<!doctype html><html><head><title>Preparing clinical notes...</title></head><body>Preparing clinical notes...</body></html>"),i.document.close(),i):(qe("Please allow pop-ups to download clinical notes."),null)},Rt=i=>{i.querySelectorAll("button, .clinical-notes-actions, .navigation-arrows, .scroll-indicator, .menu-trigger, .expand-icon, .refresh-btn, .actions, .demographics-actions, .three-dot-menu, .patient-card-menu, ion-icon, ion-button").forEach(t=>t.remove()),i.querySelectorAll(".apexcharts-toolbar, .apexcharts-menu, .apexcharts-zoom-icon, .apexcharts-zoomin-icon, .apexcharts-zoomout-icon, .apexcharts-pan-icon, .apexcharts-reset-icon, .apexcharts-menu-icon").forEach(t=>t.remove()),i.querySelectorAll(".apexcharts-legend").forEach(t=>t.remove())},as=()=>{const i=document.querySelector(".clinical-notes-section"),t=i?.querySelector(".clinical-notes-demographics")?.cloneNode(!0),r=i?.querySelector(".clinical-notes-list")?.cloneNode(!0);if(t&&Rt(t),r&&Rt(r),!r)return"";const d=It[J.value],m=!!r.querySelector(".clinical-notes-list-header");return`
            <main class="clinical-notes-print-document">
                ${t?`<section class="clinical-notes-print-demographics">${t.innerHTML}</section>`:""}
                ${m?"":`<h1 class="notes-print-title">${Tt(d)}</h1>`}
                ${r.outerHTML}
            </main>
        `},os=(i,t)=>`
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>${Tt(t)}</title>
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
`,Ot=async i=>{await kt();const t=as();if(!t.trim()){i.close(),qe("No clinical notes content available to download.");return}const r=It[J.value];i.document.open(),i.document.write(os(t,r)),i.document.close()},xt=async()=>{const i=Lt();i&&await Ot(i)},ls=async()=>{if(!Xe.value.length){qe("No clinical notes records available to download.");return}const i=Lt();if(!i)return;const t={...Be.value};Be.value=Xe.value.reduce((r,d)=>(r[d.id]=!0,r),{...Be.value});try{await kt(),typeof window<"u"&&window.dispatchEvent(new Event("resize")),await kt(),await Ot(i)}finally{Be.value=t}},rs=async()=>{if(J.value==="all"){await ls();return}if(J.value==="surgical"){if(!V.value.length){qe("No surgical notes records available to download.");return}await xt();return}if(J.value==="medical"){if(!he.value.length){qe("No medical inpatient records available to download.");return}await xt();return}if(J.value==="gyneacology"){if(!ee.value.length){qe("No gyneacology ward records available to download.");return}await xt();return}qe("Please select Surgical Notes, Gyneacology, Medical Inpatient, or All to download.")},le=i=>String(i??"").trim().toLowerCase(),K=async i=>{const t=await gt.getObsByEncounterId(i),r=ai();return r.hasSelection?t.map(d=>({...d,obs:(d?.obs||[]).filter(m=>r.matchesObs(m))})).filter(d=>(d?.obs||[]).length>0):t},W=i=>{if(!Array.isArray(i)||i.length===0)return null;const t=r=>{const d=r?.encounter_datetime;if(d){const u=new Date(d).getTime();if(Number.isFinite(u))return u}const m=(r?.obs||[]).map(u=>new Date(u?.obs_datetime||0).getTime()).filter(u=>Number.isFinite(u)&&u>0);return m.length?Math.max(...m):-1};return i.reduce((r,d)=>t(d)>t(r)?d:r,i[0])},Ie=i=>{const t=new Date(i);if(!Number.isFinite(t.getTime()))return"";const r=t.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),d=t.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0});return`${r} at ${d}`},Te=async i=>{const t=Number(i);if(!Number.isFinite(t)||t<=0)return"Unknown";if(Ae.has(t))return Ae.get(t);try{const r=await ni.getUserByID(t),d=r?.name||r?.username||`User #${t}`;return Ae.set(t,d),d}catch{const d=`User #${t}`;return Ae.set(t,d),d}},O=(i,t)=>{const r=(i||[]).find(d=>t(le(j(d))));return r?String(te(r)??"").trim():""},cs=i=>i?.value_coded??i?.valueCoded??i?.answer_concept_id??i?.value?.concept_id??i?.value?.conceptId??i?.value?.concept?.concept_id??i?.value?.concept?.id,st=i=>i?gt.flattenObservationTree(Array.isArray(i?.obs)?i.obs:[]):[],Mt=i=>{const t=i?.encounter_datetime||i?.obs?.[0]?.obs_datetime;if(!t)return"";try{return L.toStandardHisFormat(t)}catch{return""}},St=(i,t)=>{const r=Array.isArray(i)?i.filter(Boolean):[],d=t?r.filter(m=>Mt(m)===t):[];return W(d.length?d:r)},wt=i=>{const t=i?.obs||i?.children||i?.child||i?.groupMembers||[];return Array.isArray(t)?t:[]},Dt=i=>i.includes("workstation")||i==="location"||i.includes("patient care area")||i.includes("triage result")||i.includes("triage category"),ds=i=>/\b(hour|hours|day|days|week|weeks|month|months|year|years|minute|minutes)\b/i.test(i),pt=i=>/^\d+(\.\d+)?$/.test(i.trim()),Ht=async i=>{const t=String(i??"").trim(),r=Number(t);if(!t||!Number.isFinite(r)||r<=0)return"";if(Ee.has(r))return Ee.get(r)||"";try{const d=String(await Wt.getConceptName(r)||"").trim();return Ee.set(r,d),d}catch{return Ee.set(r,""),""}},Ft=async i=>{const t=String(i??"").trim();return!t||!pt(t)?t:await Ht(t)||t},ps=(i,t)=>{const r=String(i??"").trim(),d=String(t??"").trim();return r?d&&r.toLowerCase().includes(d.toLowerCase())?r:d?`${r} ${d}`:r:""},Bt=i=>!i||pt(i)||Dt(i)||i==="presenting complaints"||i==="presenting complaint"||i.includes("duration")||i.includes("workstation"),us=async i=>{const t=Array.isArray(i?.obs)?i.obs:[],r=[],d=async u=>{const y=String(await Ft(j(u))).trim(),w=le(y),N=String(te(u)??"").trim().split(" - ")[0].trim(),c=cs(u),h=N&&pt(N)&&await Ht(c??N)||N;return!h||ds(h)||pt(h)?Bt(w)?"":y:h},m=u=>{const y=String(u??"").trim();y&&!r.includes(y)&&r.push(y)};for(const u of t){const y=le(await Ft(j(u)));if(!y||Dt(y))continue;const w=r.length;(await Promise.all(wt(u).map(d))).filter(Boolean).forEach(m),r.length===w&&m(await d(u))}return r.length||(await Promise.all(st(i).map(d))).filter(Boolean).forEach(m),r.length?r.map((u,y)=>`(${y+1}). ${u}`).join(", "):"N/A"},ms=(i,t)=>{const r=O(i,b=>b.includes("temperature")),d=O(i,b=>b==="pulse"||b.includes("pulse rate")),m=O(i,b=>b.includes("heart rate")),u=O(i,b=>b.includes("systolic")),y=O(i,b=>b.includes("diastolic")),w=O(i,b=>b.includes("respiratory")),A=O(i,b=>b.includes("oxygen")||b.includes("spo2")||b.includes("sao2")||b==="sao2"),N=O(i,b=>b.includes("glucose")&&!b.includes("unit")),c=O(i,b=>b.includes("glucose")&&b.includes("unit"))||(N?"mmol/l":""),h=O(i,b=>b==="avpu"||b.includes("avpu"))||O(t,b=>b==="avpu"||b.includes("avpu")||b.includes("level of consciousness")),C=[];return r&&C.push(`Temperature: ${r} °C`),d&&C.push(`Pulse: ${d} bpm`),m&&C.push(`Heart: ${m} bpm`),(u||y)&&C.push(`BP: ${u||"-"}${y?`/${y}`:""} mmHg`),w&&C.push(`Respiratory: ${w} breaths/min`),A&&C.push(`Oxygen: ${A} %`),N&&C.push(`Glucose: ${ps(N,c)}`),h&&C.push(`AVPU: ${h}`),C.length?C.join(" "):"N/A"},$t=(i,t)=>i?.obs_datetime||i?.obsDatetime||i?.date_created||t,gs=i=>{const t=L.toStandardHisDisplayFormat(i),r=L.toStandardHisTimeFormat(i);return[t,r].filter(Boolean).join(" ")},vs=i=>{const t=String(te(i)??"").trim(),r=Number.parseFloat(t);return Number.isFinite(r)?r:null},ys=async i=>{const t={systolic:[],diastolic:[],temperature:[],heartRate:[],respiratoryRate:[],oxygenSaturation:[],glucose:[],peakExpiratoryFlowRate:[],urineDipstickKetones:[]};for(const d of i||[]){const u=(Array.isArray(d?.obs)?d.obs:[]).filter(y=>le(j(y))==="triage result"&&wt(y).length>0);for(const y of u){const w=gt.flattenObservationTree(wt(y)),A=$t(y,d?.encounter_datetime);for(const N of w){const c=le(j(N)),h=vs(N);if(h===null)continue;const C=$t(N,A),b=C?gs(C):"";b&&(c.includes("systolic")?t.systolic.push({x:b,y:h}):c.includes("diastolic")?t.diastolic.push({x:b,y:h}):c.includes("temperature")?t.temperature.push({x:b,y:h}):c.includes("heart rate")?t.heartRate.push({x:b,y:h}):c.includes("respiratory")?t.respiratoryRate.push({x:b,y:h}):c.includes("oxygen")||c.includes("spo2")||c.includes("sao2")?t.oxygenSaturation.push({x:b,y:h}):c.includes("glucose")?t.glucose.push({x:b,y:h}):c.includes("peak expiratory")?t.peakExpiratoryFlowRate.push({x:b,y:h}):c.includes("urine")&&c.includes("ketone")&&t.urineDipstickKetones.push({x:b,y:h}))}}}return Object.values(t).some(d=>d.length>0)?{charts:[{key:"bloodPressure",title:"Blood Pressure (BP)",series:[{name:"Systolic",data:t.systolic},{name:"Diastolic",data:t.diastolic}],colors:["#2563eb","#e11d48"]},{key:"temperature",title:"Temperature (°C)",series:[{name:"Temperature",data:t.temperature}],colors:["#8b5cf6"]},{key:"heartRate",title:"Heart Rate (bpm)",series:[{name:"Heart Rate",data:t.heartRate}],colors:["#14b8a6"]},{key:"respiratoryRate",title:"Respiratory Rate (breaths/min)",series:[{name:"Respiratory Rate",data:t.respiratoryRate}],colors:["#db2777"]},{key:"oxygenSaturation",title:"Oxygen Saturation (O₂ Sat)",series:[{name:"Oxygen Saturation",data:t.oxygenSaturation}],colors:["#f59e0b"]},{key:"glucose",title:"Glucose (mmol/L)",series:[{name:"Glucose",data:t.glucose}],colors:["#0891b2"]},{key:"peakExpiratoryFlowRate",title:"Peak Expiratory Flow Rate (L/min)",series:[{name:"PEFR",data:t.peakExpiratoryFlowRate}],colors:["#16a34a"]},{key:"urineDipstickKetones",title:"Urine Dipstick Ketones",series:[{name:"Ketones",data:t.urineDipstickKetones}],colors:["#7c3aed"]}]}:null},fs=async()=>{Ge.value=!0,De.value=null;try{const i=await K(f.VITALS);De.value=await ys(i||[])}catch(i){console.error("Failed to load monitoring chart records:",i),De.value=null}finally{Ge.value=!1}},bs=[ie.phala,ie.water,ie.oralFluids,ie.ivFluids],hs=[ie.urineVolume,ie.urineAppearance,ie.vomitVolume,ie.vomitColour],_s=[ie.bristolType,ie.stoolColour,ie.sampleSent,ie.labPanel],Nt=(i,t)=>t.map(r=>{const d=(i||[]).filter(u=>le(j(u))===le(r)),m=ut(d.map(u=>te(u)));return m.length===0?null:{title:r,value:m.join(", ")}}).filter(Boolean),Vt=i=>i.reduce((t,r)=>{const d=Number.parseFloat(String(r.value));return Number.isFinite(d)?t+d:t},0),ks=async i=>{const t=(i||[]).filter(Boolean).map(r=>{const d=st(r),m=O(d,F=>F===le(ie.entryDate)),u=O(d,F=>F===le(ie.entryTime)),y=Nt(d,bs),w=Nt(d,hs),A=Nt(d,_s),N=O(d,F=>F===le(ie.comments)),c=Vt(y),h=Vt(w.filter(F=>[ie.urineVolume,ie.vomitVolume].includes(F.title))),C=c-h,b=new Date(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime||0).getTime();return{id:r?.encounter_id||r?.encounterId||`${m}-${u}-${b}`,entryDate:m||L.toStandardHisDisplayFormat(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime),entryTime:u||L.toStandardHisTimeFormat(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime),intake:y,output:w,stool:A,comments:N,totalIntake:c,totalOutput:h,balance:C,balanceLabel:`${C>0?"+":""}${C} mL`,createdAt:b}}).filter(r=>r.intake.length||r.output.length||r.stool.length||r.comments).sort((r,d)=>d.createdAt-r.createdAt);return t.length?{entries:t}:null},xs=async()=>{ye.value=!0,D.value=null;try{const i=await K(f.FLUID_BALANCE_AND_STOOL_MONITORING);D.value=await ks(i||[])}catch(i){console.error("Failed to load fluid balance and stool monitoring records:",i),D.value=null}finally{ye.value=!1}},Ss=async()=>{Ne.value=!0,ve.value=null;try{const[i,t,r,d,m]=await Promise.all([K(f.TRIAGE_RESULT),K(f.TRIAGE_PRESENTING_COMPLAINTS),K(f.PRESENTING_COMPLAINTS),K(f.VITALS),K(f.CONSCIOUSNESS)]),u=[...t||[],...r||[]],y=W(i||[]),w=W([W(u),W(d||[]),W(m||[])].filter(Boolean)),A=y||w;if(!A)return;const N=Mt(A),c=St(u,N),h=St(d||[],N),C=St(m||[],N),b=st(y),F=st(h),B=st(C),Y=await us(c),ce=ms(F,B),X=O(b,ge=>ge.includes("triage")&&(ge.includes("category")||ge.includes("result")||ge.includes("cat")))||"N/A",q=O(b,ge=>ge.includes("patient care area"))||O(b,ge=>ge==="location")||"N/A",me=y?.provider_id||y?.provider?.id||y?.creator||A?.provider_id||A?.provider?.id||A?.creator,P=await Te(me),x=Ie(y?.encounter_datetime||A?.encounter_datetime||A?.obs?.[0]?.obs_datetime),Q=x?`created by ${P} on ${x}.`:`created by ${P}.`;ve.value={presentingComplaints:Y,vitalSigns:ce,triageCategory:X,patientCareArea:q,createdByLine:Q}}catch(i){console.error("Failed to load triage information:",i),ve.value=null}finally{Ne.value=!1}},ut=i=>{const t=(i||[]).map(r=>String(r??"").trim()).filter(Boolean);return Array.from(new Set(t))},re=(i,t)=>{const r=t?.flattenChildren?gt.flattenObservationTree(i||[]):i||[];return ht(r).map(m=>{const u=String(j(m)||"").trim()||"Observation",y=String(te(m)??"").trim();return y?{title:u,value:y}:null}).filter(Boolean)},ws=async()=>{pe.value=!0,ne.value=null;try{const i=[f.AIRWAY_ASSESSMENT,f.BREATHING_ASSESSMENT,f.CIRCULATION_ASSESSMENT,f.DISABILITY_ASSESSMENT,f.EXPOSURE_ASSESSMENT],t=await Promise.all(i.map(h=>K(h))),r=new Map(i.map((h,C)=>[h,t[C]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=[{id:f.AIRWAY_ASSESSMENT,title:"Airway"},{id:f.BREATHING_ASSESSMENT,title:"Breathing"},{id:f.CIRCULATION_ASSESSMENT,title:"Circulation"},{id:f.DISABILITY_ASSESSMENT,title:"Disability"},{id:f.EXPOSURE_ASSESSMENT,title:"Exposure"}],w={};for(const h of y){const C=r.get(h.id)||[],F=(u?C.filter(Y=>L.toStandardHisFormat(Y?.encounter_datetime)===u):C).flatMap(Y=>Y?.obs||[]),B=re(F);B.length&&(w[h.title]=B)}const A=await Te(m?.provider_id),N=Ie(m?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;ne.value={sections:w,createdByLine:c}}catch(i){console.error("Failed to load primary survey:",i),ne.value=null}finally{pe.value=!1}},Ns=async()=>{xe.value=!0,ae.value=null;try{const i=[f.ALLERGIES,f.REVIEW_OF_SYSTEMS,f.MEDICAL_HISTORY,f.OBSTETRIC_HISTORY,f.SUMMARY_ASSESSMENT,f.PRESCRIPTION,f.PRESENTING_COMPLAINTS,f.TRIAGE_PRESENTING_COMPLAINTS],t=await Promise.all(i.map(X=>K(X))),r=new Map(i.map((X,q)=>[X,t[q]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=(X,q)=>{if(!q.length)return X;const me=q.map(P=>P.toLowerCase());return X.filter(P=>{const x=(P.title||"").toLowerCase();return me.some(Q=>x.includes(Q))})},w=async(X,q)=>{const me=u?X.filter(Le=>L.toStandardHisFormat(Le?.encounter_datetime)===u):X,P=W(me),x=me.flatMap(Le=>Le?.obs||[]);let Q=re(x,{flattenChildren:q?.flattenChildren});q?.filterTitleIncludes?.length&&(Q=y(Q,q.filterTitleIncludes));const ge=await Te(P?.provider_id),Ye=Ie(P?.encounter_datetime),ze=Ye?`${ge} ${Ye}`:ge;return{items:Q,createdByLine:ze?` ${ze}`:""}},A=await w([...r.get(f.PRESENTING_COMPLAINTS)||[],...r.get(f.TRIAGE_PRESENTING_COMPLAINTS)||[]],{flattenChildren:!0}),N=await w(r.get(f.ALLERGIES)||[]),c=await w(r.get(f.PRESCRIPTION)||[],{filterTitleIncludes:["medication history"]}),h=r.get(f.MEDICAL_HISTORY)||[],C=r.get(f.OBSTETRIC_HISTORY)||[],b=[...h,...C],F=await w(b),B=await w(r.get(f.REVIEW_OF_SYSTEMS)||[]),Y=r.get(f.SUMMARY_ASSESSMENT)||[],ce=await w(Y,{filterTitleIncludes:["last meal","meal"]});ae.value={cards:{symptoms:A,events:B,allergies:N,medications:c,priorConditions:F,lastMeal:ce}}}catch(i){console.error("Failed to load SAMPLE history:",i),ae.value=null}finally{xe.value=!1}},As=async()=>{G.value=!0,Se.value=null;try{const i=[f.GENERAL_INFORMATION,f.HEAD_AND_NECK_ASSESSMENT,f.CHEST_ASSESSMENT,f.ABDOMEN_AND_PELVIS_ASSESSMENT,f.EXTREMITIES_ASSESSMENT,f.NEUROLOGICAL_EXAMINATION],t=await Promise.all(i.map(h=>K(h))),r=new Map(i.map((h,C)=>[h,t[C]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=[{id:f.GENERAL_INFORMATION,title:"General Information"},{id:f.HEAD_AND_NECK_ASSESSMENT,title:"Head and Neck"},{id:f.CHEST_ASSESSMENT,title:"Chest"},{id:f.ABDOMEN_AND_PELVIS_ASSESSMENT,title:"Abdomen and Pelvis"},{id:f.EXTREMITIES_ASSESSMENT,title:"Extremities"},{id:f.NEUROLOGICAL_EXAMINATION,title:"Neurological"}],w={};for(const h of y){const C=r.get(h.id)||[],F=(u?C.filter(Y=>L.toStandardHisFormat(Y?.encounter_datetime)===u):C).flatMap(Y=>Y?.obs||[]),B=re(F);B.length&&(w[h.title]=B)}const A=await Te(m?.provider_id),N=Ie(m?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;Se.value={sections:w,createdByLine:c}}catch(i){console.error("Failed to load secondary survey:",i),Se.value=null}finally{G.value=!1}},Es=async()=>{fe.value=!0,Ce.value=null;try{const i=await K(f.OUTPATIENT_DIAGNOSIS),t=W(i);if(!t)return;const r=L.toStandardHisFormat(t?.encounter_datetime)||"",m=(r?i.filter(h=>L.toStandardHisFormat(h?.encounter_datetime)===r):i).flatMap(h=>h?.obs||[]),u=await We(m),y={},w=re(u);w.length&&(y["Outpatient Diagnosis"]=w);const A=await Te(t?.provider_id),N=Ie(t?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;Ce.value={sections:y,createdByLine:c}}catch(i){console.error("Failed to load diagnosis:",i),Ce.value=null}finally{fe.value=!1}},Cs=async()=>{H.value=!0,Pe.value=null;try{const i=[f.BEDSIDE_INVESTIGATION_PLAN,f.LAB_ORDERS_PLAN],t=await Promise.all(i.map(N=>K(N))),r=new Map(i.map((N,c)=>[N,t[c]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=async N=>{const c=u?N.filter(ce=>L.toStandardHisFormat(ce?.encounter_datetime)===u):N,h=W(c),C=c.flatMap(ce=>ce?.obs||[]),b=re(C),F=await Te(h?.provider_id),B=Ie(h?.encounter_datetime),Y=B?`${F} ${B}`:F;return{items:b,createdByLine:Y?` ${Y}`:""}},w=await y(r.get(f.LAB_ORDERS_PLAN)||[]),A=await y(r.get(f.BEDSIDE_INVESTIGATION_PLAN)||[]);Pe.value={cards:{labOrdersPlan:w,bedsidePlan:A}}}catch(i){console.error("Failed to load laboratory / radiology findings:",i),Pe.value=null}finally{H.value=!1}},Ps=async()=>{Ue.value=!0,ue.value=null;try{const i=[f.NON_PHARMACOLOGICAL,f.PATIENT_CARE_AREA,f.PRESCRIPTION],t=await Promise.all(i.map(c=>K(c))),r=new Map(i.map((c,h)=>[c,t[h]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=async(c,h)=>{const C=u?c.filter(q=>L.toStandardHisFormat(q?.encounter_datetime)===u):c,b=W(C),F=C.flatMap(q=>q?.obs||[]);let B=re(F);if(h?.excludeTitleIncludes?.length){const q=h.excludeTitleIncludes.map(me=>me.toLowerCase());B=B.filter(me=>{const P=(me.title||"").toLowerCase();return!q.some(x=>P.includes(x))})}const Y=await Te(b?.provider_id),ce=Ie(b?.encounter_datetime),X=ce?`${Y} ${ce}`:Y;return{items:B,createdByLine:X?` ${X}`:""}},w=await y(r.get(f.NON_PHARMACOLOGICAL)||[]),A=await y(r.get(f.PATIENT_CARE_AREA)||[]),N=await y(r.get(f.PRESCRIPTION)||[],{excludeTitleIncludes:["medication history"]});ue.value={cards:{nonPharmacological:w,patientCareArea:A,medications:N}}}catch(i){console.error("Failed to load patient management plan:",i),ue.value=null}finally{Ue.value=!1}},Is=async()=>{be.value=!0,He.value=null;try{const i=await K(f.CONTINUATION_SHEET),t=W(i);if(!t)return;const r=L.toStandardHisFormat(t?.encounter_datetime)||"",m=(r?i.filter(c=>L.toStandardHisFormat(c?.encounter_datetime)===r):i).flatMap(c=>c?.obs||[]),u={},y=re(m);y.length&&(u["Continuation Sheet"]=y);const w=await Te(t?.provider_id),A=Ie(t?.encounter_datetime),N=A?`created by ${w} on ${A}.`:`created by ${w}.`;He.value={sections:u,createdByLine:N}}catch(i){console.error("Failed to load continuation notes:",i),He.value=null}finally{be.value=!1}},Ts=async()=>{Fe.value=!0,je.value=null;try{const i=[f.DISPOSITION,f.AWAITING_SPECIALTY],t=await Promise.all(i.map(P=>K(P))),r=new Map(i.map((P,x)=>[P,t[x]||[]])),d=t.flat(),m=W(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=async P=>{const x=u?P.filter(Je=>L.toStandardHisFormat(Je?.encounter_datetime)===u):P,Q=W(x),ge=x.flatMap(Je=>Je?.obs||[]),Ye=re(ge),ze=await Te(Q?.provider_id),Le=Ie(Q?.encounter_datetime),mt=Le?`${ze} ${Le}`:ze;return{items:Ye,createdByLine:mt?` ${mt}`:""}},w=P=>{const x=(P||"").toLowerCase().trim();return x?x.includes("admission")||x.includes("ward")||x.includes("bed number")||x.includes("reason for admission")||x.includes("speciality department")?"admission":x.includes("death")||x.includes("cause of death")||x.includes("mortuary")||x.includes("family informed")||x.includes("relationship to deceased")||x.includes("last office")?"death":x.includes("transfer out")||x.includes("facility name")||x.includes("reason for transfer")?"transfer_out":x.includes("discharge home")||x.includes("discharge plan")||x.includes("followup plan")||x.includes("home care")||x.includes("followup details")||x.includes("discharge notes")||x.includes("specialist clinic")?"discharge_home":x.includes("absconded")||x.includes("last seen location")||x.includes("time of absconding")||x.includes("date of absconding")?"absconded":x.includes("refused hospital treatment")||x.includes("reason for refusal")||x.includes("plans to return")||x.includes("date of refusal")||x.includes("witness name")?"refused_treatment":"other":"other"},A=[{key:"admission",title:"Admission"},{key:"death",title:"Death"},{key:"transfer_out",title:"Transfer Out"},{key:"discharge_home",title:"Discharge Home"},{key:"absconded",title:"Absconded"},{key:"refused_treatment",title:"Refused Treatment"},{key:"other",title:"Other Disposition"}],N=await y(r.get(f.AWAITING_SPECIALTY)||[]),c=r.get(f.DISPOSITION)||[],h=u?c.filter(P=>L.toStandardHisFormat(P?.encounter_datetime)===u):c,C=W(h),b=h.flatMap(P=>P?.obs||[]),F=re(b),B={};for(const P of F){const x=w(P.title);B[x]||(B[x]=[]),B[x].push(P)}const Y=await Te(C?.provider_id),ce=Ie(C?.encounter_datetime),X=ce?`${Y} ${ce}`:Y,q=X?` ${X}`:"",me=A.map(P=>({key:P.key,title:P.title,items:B[P.key]||[],createdByLine:(B[P.key]||[]).length?q:""})).filter(P=>P.items.length>0);je.value={cards:{awaitingSpecialty:N},otherCards:me}}catch(i){console.error("Failed to load disposition notes:",i),je.value=null}finally{Fe.value=!1}},Ls=async()=>{ke.value=!0,Re.value=null;try{const[i,t,r]=await Promise.all([K(f.NURSING_CARE_NOTES),K(f.SOAPIER_PRESCRIPTION),K(f.SOAPIER_DISPENSING)]),d=W(i);if(!d)return;const m=d?.obs||[],u=L.toStandardHisFormat(d?.encounter_datetime)||"",y=_=>{if(!Array.isArray(_)||_.length===0)return null;if(u){const jt=_.filter(Ms=>L.toStandardHisFormat(Ms?.encounter_datetime)===u);if(jt.length>0)return W(jt)}return W(_)},w=y(t),A=y(r),N=w?.obs||[],c=A?.obs||[],h=O(m,_=>_==="subjective"||_.includes("subjective"))||"",C=O(m,_=>_==="objective"||_.includes("objective"))||"",b=O(m,_=>_==="assessment"||_.includes("assessment"))||"",F=O(m,_=>_==="plan"||_.includes("plan"))||"",B=O(m,_=>_==="evaluation"||_.includes("evaluation"))||"",Y=O(m,_=>_==="replan"||_.includes("replan"))||"",ce=O(m,_=>_.includes("spo2")||_.includes("sao2")||_.includes("oxygen saturation")),X=O(m,_=>_.includes("systolic")),q=O(m,_=>_.includes("diastolic")),me=O(m,_=>_.includes("respiratory rate")||_==="respiratory rate"||_.includes("respiratory")),P=O(m,_=>_==="pulse"||_.includes("pulse rate")),x=O(m,_=>_.includes("temperature")),Q=[];if(ce&&Q.push(`SPO2: ${ce} %`),X||q){const _=`${X||"-"}${q?`/${q}`:""}`;Q.push(`BP: ${_} mmHg`)}me&&Q.push(`Respiratory: ${me} breaths/min`),P&&Q.push(`Pulse: ${P} bpm`),x&&Q.push(`Temperature: ${x} °C`);const ge=Q.length?Q.join(" "):"N/A",Ye=ut(c.filter(_=>le(j(_))==="procedures").map(_=>te(_))),ze=ut(c.filter(_=>le(j(_))==="supportive care").map(_=>te(_))),Le=[];Ye.length&&Le.push(`Procedures: ${Ye.join(", ")}`),ze.length&&Le.push(`Supportive care: ${ze.join(", ")}`);const mt=Le.length?Le.join(`
`):"N/A",Je=ut(N.filter(_=>le(j(_))==="drug given").map(_=>te(_))),Rs=Je.length?Je.join(", "):"N/A",Gt=await Te(d?.provider_id),Ut=Ie(d?.encounter_datetime),Os=Ut?`created by ${Gt} on ${Ut}.`:`created by ${Gt}.`;Re.value={subjective:h,objective:C,vitalSigns:ge,assessment:b,plan:F,evaluation:B,replan:Y,nonPharmacological:mt,medications:Rs,createdByLine:Os}}catch(i){console.error("Failed to load SOAPIER notes:",i),Re.value=null}finally{ke.value=!1}},zt=async i=>{J.value=i,i==="surgical"&&await ss(),i==="medical"&&await is(),i==="gyneacology"&&await ns(),i==="all"&&(await Ss(),await Ls(),await fs(),await xs(),await ws(),await Ns(),await As(),await Es(),await Cs(),await Ps(),await Is(),await Ts())};return{clinicalNotesView:J,surgicalNotesRecords:V,gyneacologyRecords:ee,medicalInpatientRecords:he,clinicalNotesLoading:R,gyneacologyLoading:z,medicalInpatientLoading:_e,expandedClinicalTiles:Be,toggleClinicalTile:yt,clinicalNotesAllLoading:U,refreshAllClinicalNotes:Qe,aetcClinicalTiles:Xe,triageSummary:ve,soapierSummary:Re,monitoringChartSummary:De,fluidBalanceSummary:D,primarySurveySummary:ne,sampleHistorySummary:ae,secondarySurveySummary:Se,diagnosisSummary:Ce,investigationPlanSummary:Pe,patientManagementSummary:ue,continuationSummary:He,dispositionSummary:je,surgicalNotesBySection:Oe,gyneacologyBySection:ts,medicalInpatientBySection:dt,surgicalPhysicalExam:Ze,surgicalInitialManagement:bt,surgicalPresenting:rt,surgicalPastMedicalHistoryItems:tt,surgicalReviewOfSystemsItems:Ve,surgicalReviewOfSystemsCols:se,surgicalPastSurgicalHistoryItems:s,surgicalFamilyHistoryItems:E,surgicalSocialHistoryItems:M,surgicalGynecologicalHistoryItems:p,medicalInpatientPresenting:g,medicalInpatientPhysicalExam:$,medicalInpatientExamZones:Zt,medicalReviewOfSystemsItems:Pt,medicalReviewOfSystemsCols:Jt,getObsDisplayValue:te,downloadClinicalNotesPdf:rs,setClinicalNotesView:zt}},ri={class:"clinical-notes-section print-area"},ci={class:"clinical-notes-actions"},di={key:0,class:"clinical-notes-list"},pi={key:0,class:"clinical-notes-placeholder"},ui={key:1,class:"clinical-notes-placeholder"},mi={key:2,class:"clinical-notes-records surgical-notes-records"},gi={class:"clinical-notes-section-title"},vi={key:0,class:"clinical-notes-section-items"},yi={class:"pe-card"},fi={class:"pe-line"},bi={class:"pe-value"},hi={class:"pe-row4"},_i={class:"pe-line"},ki={class:"pe-value"},xi={class:"pe-line"},Si={class:"pe-value"},wi={class:"pe-line"},Ni={class:"pe-value"},Ai={class:"pe-line"},Ei={class:"pe-value"},Ci={class:"pe-row3",style:{"margin-top":"10px"}},Pi={class:"pe-line"},Ii={class:"pe-value"},Ti={class:"pe-line"},Li={class:"pe-value"},Ri={class:"pe-line"},Oi={class:"pe-value"},Mi={class:"pe-line",style:{"margin-top":"10px"}},Di={class:"pe-value"},Hi={class:"pe-line"},Fi={class:"pe-value"},Bi={class:"pe-line"},$i={class:"pe-value"},Vi={class:"pe-line"},zi={class:"pe-value"},Gi={class:"pe-line"},Ui={class:"pe-value"},ji={class:"pe-line"},Wi={class:"pe-value"},Yi={class:"pe-table"},qi={class:"pe-value"},Ki={class:"pe-value"},Xi={class:"pe-value"},Zi={class:"pe-value"},Ji={class:"pe-value"},Qi={class:"pe-value"},en={key:1,class:"clinical-notes-section-items"},tn={class:"im-card"},sn={class:"im-row3"},nn={class:"im-line"},an={class:"im-value"},on={class:"im-line"},ln={class:"im-value"},rn={class:"im-line"},cn={class:"im-value"},dn={key:2,class:"clinical-notes-section-items"},pn={class:"pm-card"},un={class:"pc-block"},mn={class:"pc-line"},gn={class:"pc-value"},vn={class:"pc-line",style:{"margin-top":"10px"}},yn={class:"pc-value"},fn={key:3,class:"clinical-notes-section-items"},bn={class:"pm-card"},hn={class:"pm-list"},_n={class:"pm-label"},kn={class:"pm-value"},xn={key:0,class:"pm-empty"},Sn={key:4,class:"clinical-notes-section-items"},wn={class:"pm-card"},Nn={class:"ros-grid"},An={class:"ros-col"},En={class:"ros-label"},Cn={class:"ros-value"},Pn={class:"ros-col"},In={class:"ros-label"},Tn={class:"ros-value"},Ln={key:0,class:"pm-empty"},Rn={key:5,class:"clinical-notes-section-items"},On={class:"pm-card"},Mn={class:"pm-list"},Dn={class:"pm-label"},Hn={class:"pm-value"},Fn={key:0,class:"pm-empty"},Bn={key:6,class:"clinical-notes-section-items"},$n={class:"pm-card"},Vn={class:"pm-list"},zn={class:"pm-label"},Gn={class:"pm-value"},Un={key:0,class:"pm-empty"},jn={key:7,class:"clinical-notes-section-items"},Wn={class:"pm-card"},Yn={class:"pm-list"},qn={class:"pm-label"},Kn={class:"pm-value"},Xn={key:0,class:"pm-empty"},Zn={key:8,class:"clinical-notes-section-items"},Jn={class:"pm-card"},Qn={class:"pm-list"},ea={class:"pm-label"},ta={class:"pm-value"},sa={key:0,class:"pm-empty"},ia={class:"surgical-record-label"},na={class:"surgical-record-value"},aa={key:1,class:"clinical-notes-list"},oa={key:0,class:"clinical-notes-placeholder"},la={key:1,class:"clinical-notes-placeholder"},ra={key:2,class:"clinical-notes-records gyne-notes-records"},ca={class:"clinical-notes-section-title"},da={class:"gyne-record-label"},pa={class:"gyne-record-value"},ua={key:2,class:"clinical-notes-list"},ma={key:0,class:"clinical-notes-placeholder"},ga={key:1,class:"clinical-notes-placeholder"},va={key:2,class:"clinical-notes-records medical-notes-records"},ya={class:"clinical-notes-section-title"},fa={key:0,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},ba={class:"medical-record"},ha={class:"medical-record-value"},_a={class:"medical-record"},ka={class:"medical-record-value"},xa={key:1,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},Sa={class:"pm-card medical-review-card"},wa={class:"ros-grid"},Na={class:"ros-col"},Aa={class:"ros-label"},Ea={class:"ros-value"},Ca={class:"ros-col"},Pa={class:"ros-label"},Ia={class:"ros-value"},Ta={key:0,class:"pm-empty"},La={key:2,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},Ra={class:"mipe-card"},Oa={class:"mipe-line"},Ma={class:"mipe-value"},Da={class:"mipe-row6"},Ha={class:"mipe-line"},Fa={class:"mipe-value"},Ba={class:"mipe-line"},$a={class:"mipe-value"},Va={class:"mipe-line"},za={class:"mipe-value"},Ga={class:"mipe-line"},Ua={class:"mipe-value"},ja={class:"mipe-line"},Wa={class:"mipe-value"},Ya={class:"mipe-line"},qa={class:"mipe-value"},Ka={class:"mipe-row5"},Xa={class:"mipe-line"},Za={class:"mipe-value"},Ja={class:"mipe-line"},Qa={class:"mipe-value"},eo={class:"mipe-line"},to={class:"mipe-value"},so={class:"mipe-line"},io={class:"mipe-value"},no={class:"mipe-line"},ao={class:"mipe-value"},oo={key:0,class:"mipe-line",style:{"margin-top":"8px"}},lo={class:"mipe-value"},ro={class:"mipe-row2"},co={class:"mipe-line"},po={class:"mipe-value"},uo={class:"mipe-line"},mo={class:"mipe-value"},go={class:"mipe-row3"},vo={class:"mipe-line"},yo={class:"mipe-value"},fo={class:"mipe-line"},bo={class:"mipe-value"},ho={class:"mipe-line"},_o={class:"mipe-value"},ko={class:"mipe-row2"},xo={class:"mipe-line"},So={class:"mipe-value"},wo={class:"mipe-line"},No={class:"mipe-value"},Ao={class:"mipe-row2"},Eo={class:"mipe-line"},Co={class:"mipe-value"},Po={class:"mipe-line"},Io={class:"mipe-value"},To={class:"mipe-row2",style:{"margin-top":"8px"}},Lo={class:"mipe-line"},Ro={class:"mipe-value"},Oo={class:"mipe-line"},Mo={class:"mipe-value"},Do={class:"mipe-row3",style:{"margin-top":"8px"}},Ho={class:"mipe-line"},Fo={class:"mipe-value"},Bo={class:"mipe-line"},$o={class:"mipe-value"},Vo={class:"mipe-line"},zo={class:"mipe-value"},Go={key:1,class:"mipe-zones"},Uo={class:"mipe-zone-title"},jo={class:"mipe-label"},Wo={class:"mipe-value"},Yo={key:2},qo={class:"mipe-zones"},Ko={class:"mipe-zone-title"},Xo={class:"mipe-label"},Zo={class:"mipe-value"},Jo={class:"mipe-line"},Qo={class:"mipe-value"},el={class:"mipe-row2"},tl={class:"mipe-line"},sl={class:"mipe-value"},il={class:"mipe-line"},nl={class:"mipe-value"},al={class:"mipe-line"},ol={class:"mipe-value"},ll={class:"mipe-row3"},rl={class:"mipe-line"},cl={class:"mipe-value"},dl={class:"mipe-line"},pl={class:"mipe-value"},ul={class:"mipe-line"},ml={class:"mipe-value"},gl={class:"pe-table"},vl={class:"pe-value"},yl={class:"pe-value"},fl={class:"pe-value"},bl={class:"pe-value"},hl={class:"pe-value"},_l={class:"pe-value"},kl={class:"pe-value"},xl={class:"pe-value"},Sl={class:"pe-value"},wl={class:"pe-value"},Nl={class:"pe-value"},Al={class:"pe-value"},El={class:"pe-value"},Cl={class:"medical-record-label"},Pl={class:"medical-record-value"},Il={key:3,class:"clinical-notes-list"},Tl={class:"clinical-notes-tab"},Ll={class:"notes-header"},Rl={class:"actions"},Ol={key:0,class:"skeleton-wrapper"},Ml={key:1,class:"empty-state"},Dl={class:"empty-icon-wrapper"},Hl={key:2,class:"tiles-grid"},Fl=["onClick"],Bl={class:"tile-title-wrapper"},$l={class:"tile-title"},Vl={key:0},zl={key:0,class:"no-observations"},Gl={key:1,class:"triage-summary-list"},Ul={class:"triage-summary-row"},jl={class:"triage-summary-content"},Wl={class:"triage-summary-row"},Yl={class:"triage-summary-content"},ql={class:"triage-summary-row"},Kl={class:"triage-summary-content"},Xl={class:"triage-summary-row"},Zl={class:"triage-summary-content"},Jl={class:"triage-summary-created"},Ql={key:1},er={key:0,class:"no-observations"},tr={key:1,class:"clinical-notes-section-items"},sr={class:"soapier-grid"},ir={class:"soapier-card"},nr={class:"soapier-card-body"},ar={class:"soapier-card"},or={class:"soapier-card-body"},lr={class:"soapier-block"},rr={class:"soapier-block-value"},cr={class:"soapier-block",style:{"margin-top":"10px"}},dr={class:"soapier-block-value"},pr={class:"soapier-card"},ur={class:"soapier-card-body"},mr={class:"soapier-card"},gr={class:"soapier-card-body"},vr={class:"soapier-card"},yr={class:"soapier-card-body"},fr={class:"soapier-block"},br={class:"soapier-block-value"},hr={class:"soapier-block",style:{"margin-top":"10px"}},_r={class:"soapier-block-value"},kr={class:"soapier-card"},xr={class:"soapier-card-body"},Sr={class:"soapier-card"},wr={class:"soapier-card-body"},Nr={class:"soapier-footer"},Ar={key:2},Er={key:0,class:"no-observations"},Cr={key:1,class:"monitoring-chart-grid"},Pr={class:"monitoring-chart-title"},Ir={key:0,class:"monitoring-chart-body"},Tr={key:1,class:"monitoring-chart-legend"},Lr={key:2,class:"monitoring-chart-empty"},Rr={key:3},Or={key:0,class:"no-observations"},Mr={key:1,class:"fluid-balance-entry-grid"},Dr={class:"fluid-balance-card-header"},Hr={class:"fluid-balance-card-title"},Fr={class:"fluid-balance-card-subtitle"},Br={class:"fluid-balance-sections"},$r={class:"fluid-balance-section"},Vr={class:"fluid-balance-list"},zr={key:0,class:"fluid-balance-empty"},Gr={class:"fluid-balance-section"},Ur={class:"fluid-balance-list"},jr={key:0,class:"fluid-balance-empty"},Wr={class:"fluid-balance-section"},Yr={class:"fluid-balance-list"},qr={key:0,class:"fluid-balance-empty"},Kr={class:"fluid-balance-section"},Xr={class:"fluid-balance-list"},Zr={key:0},Jr={key:4},Qr={key:0,class:"no-observations"},ec={key:1},tc={class:"survey-print-grid survey-print-grid--primary"},sc={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},ic={class:"observation-list"},nc={class:"obs-concept"},ac={class:"obs-value"},oc={class:"tile-footer"},lc={key:5},rc={key:0,class:"no-observations"},cc={key:1,class:"sample-grid"},dc={class:"sample-card"},pc={class:"sample-list"},uc={class:"sample-label"},mc={class:"sample-value"},gc={key:0,class:"sample-empty"},vc={class:"sample-footer"},yc={class:"sample-card"},fc={class:"sample-list"},bc={class:"sample-label"},hc={class:"sample-value"},_c={key:0,class:"sample-empty"},kc={class:"sample-footer"},xc={class:"sample-card"},Sc={class:"sample-list"},wc={class:"sample-label"},Nc={class:"sample-value"},Ac={key:0,class:"sample-empty"},Ec={class:"sample-footer"},Cc={class:"sample-card"},Pc={class:"sample-list"},Ic={class:"sample-label"},Tc={class:"sample-value"},Lc={key:0,class:"sample-empty"},Rc={class:"sample-footer"},Oc={class:"sample-card"},Mc={class:"sample-list"},Dc={class:"sample-label"},Hc={class:"sample-value"},Fc={key:0,class:"sample-empty"},Bc={class:"sample-footer"},$c={class:"sample-card"},Vc={class:"sample-list"},zc={class:"sample-label"},Gc={class:"sample-value"},Uc={key:0,class:"sample-empty"},jc={class:"sample-footer"},Wc={key:6},Yc={key:0,class:"no-observations"},qc={key:1},Kc={class:"survey-print-grid survey-print-grid--secondary"},Xc={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},Zc={class:"observation-list"},Jc={class:"obs-concept"},Qc={class:"obs-value"},ed={class:"tile-footer"},td={key:7},sd={key:0,class:"no-observations"},id={key:1},nd={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},ad={class:"observation-list"},od={class:"obs-concept"},ld={class:"obs-value"},rd={class:"tile-footer"},cd={key:8},dd={key:0,class:"no-observations"},pd={key:1,class:"pm-grid"},ud={key:0,class:"pm-card"},md={class:"pm-list"},gd={class:"pm-label"},vd={class:"pm-value"},yd={class:"pm-footer"},fd={key:1,class:"pm-card"},bd={class:"pm-list"},hd={class:"pm-label"},_d={class:"pm-value"},kd={class:"pm-footer"},xd={key:2,class:"no-observations"},Sd={key:9},wd={key:0,class:"no-observations"},Nd={key:1,class:"pm-grid"},Ad={class:"pm-card"},Ed={class:"pm-list"},Cd={class:"pm-label"},Pd={class:"pm-value"},Id={key:0,class:"pm-empty"},Td={class:"pm-footer"},Ld={class:"pm-card"},Rd={class:"pm-list"},Od={class:"pm-label"},Md={class:"pm-value"},Dd={key:0,class:"pm-empty"},Hd={class:"pm-footer"},Fd={class:"pm-card"},Bd={class:"pm-list"},$d={class:"pm-label"},Vd={class:"pm-value"},zd={key:0,class:"pm-empty"},Gd={class:"pm-footer"},Ud={key:10},jd={key:0,class:"no-observations"},Wd={key:1},Yd={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},qd={class:"observation-list"},Kd={class:"obs-concept"},Xd={class:"obs-value"},Zd={class:"tile-footer"},Jd={key:11},Qd={key:0,class:"no-observations"},ep={key:1,class:"pm-grid"},tp={class:"pm-card"},sp={class:"pm-list"},ip={class:"pm-label"},np={class:"pm-value"},ap={key:0,class:"pm-empty"},op={class:"pm-footer"},lp={class:"pm-card-title"},rp={class:"pm-list"},cp={class:"pm-label"},dp={class:"pm-value"},pp={key:0,class:"pm-empty"},up={class:"pm-footer"},mp={key:4,class:"clinical-notes-placeholder"},Op=Kt({__name:"PatientClinicalNotes",setup(J){const V=se=>se?.concept_name||se?.concept_id||"Observation",ee=se=>["Complaints","Impression","Plan","Other"].includes(se),he=se=>["Investigations","Working Differential Diagnosis","Other"].includes(se),R=se=>["Past Surgical History","Social History","Family History","Summary","Management Plan","Other"].includes(se),z=se=>(se?.series||[]).some(s=>Array.isArray(s?.data)&&s.data.length>0),_e=se=>(se?.series||[]).filter(s=>Array.isArray(s?.data)&&s.data.length>0).length>1,Ne=se=>({chart:{toolbar:{show:!0},zoom:{enabled:!0},animations:{enabled:!1},parentHeightOffset:0},colors:se?.colors||["#0ea5e9"],dataLabels:{enabled:!0},stroke:{curve:"smooth",width:3},markers:{size:4},grid:{borderColor:"#e5e7eb",strokeDashArray:0,padding:{left:8,right:12,top:0,bottom:0}},xaxis:{type:"category",labels:{show:!1,style:{fontSize:"10px",colors:"#64748b"}},tooltip:{enabled:!0}},yaxis:{labels:{style:{fontSize:"10px",colors:"#64748b"}}},legend:{show:!1},tooltip:{x:{show:!0}}}),{clinicalNotesView:ve,surgicalNotesRecords:Ae,gyneacologyRecords:Ee,medicalInpatientRecords:ke,clinicalNotesLoading:Re,gyneacologyLoading:Ge,medicalInpatientLoading:De,expandedClinicalTiles:ye,toggleClinicalTile:D,clinicalNotesAllLoading:pe,refreshAllClinicalNotes:ne,aetcClinicalTiles:xe,triageSummary:ae,soapierSummary:G,monitoringChartSummary:Se,fluidBalanceSummary:fe,primarySurveySummary:Ce,sampleHistorySummary:H,secondarySurveySummary:Pe,diagnosisSummary:Ue,investigationPlanSummary:ue,patientManagementSummary:be,continuationSummary:He,dispositionSummary:Fe,surgicalNotesBySection:je,gyneacologyBySection:Be,medicalInpatientBySection:yt,surgicalPhysicalExam:U,surgicalInitialManagement:Qe,surgicalPresenting:Xe,surgicalPastMedicalHistoryItems:ot,surgicalReviewOfSystemsItems:ft,surgicalReviewOfSystemsCols:lt,surgicalPastSurgicalHistoryItems:j,surgicalFamilyHistoryItems:we,surgicalSocialHistoryItems:te,surgicalGynecologicalHistoryItems:We,medicalInpatientPresenting:et,medicalInpatientPhysicalExam:v,medicalInpatientExamZones:Ze,medicalReviewOfSystemsItems:bt,medicalReviewOfSystemsCols:rt,getObsDisplayValue:tt,downloadClinicalNotesPdf:ct,setClinicalNotesView:Ve}=li();return Xt(()=>{Ve(ve.value)}),(se,s)=>(a(),o("div",ri,[de(n(Bs),{class:"clinical-notes-card"},{default:Ke(()=>[de(n(Ds),null,{default:Ke(()=>[e("div",ci,[de(it,{name:"Download PDF",fill:"solid",class:"clinical-notes-btn",onClick:n(ct)},null,8,["onClick"]),de(it,{name:"Surgical Notes",fill:"clear",class:"clinical-notes-btn",onClick:s[0]||(s[0]=E=>n(Ve)("surgical"))}),de(it,{name:"Gyneacology",fill:"clear",class:"clinical-notes-btn",onClick:s[1]||(s[1]=E=>n(Ve)("gyneacology"))}),de(it,{name:"Medical Inpatient",fill:"clear",class:"clinical-notes-btn",onClick:s[2]||(s[2]=E=>n(Ve)("medical"))}),de(it,{name:"All",fill:"clear",class:"clinical-notes-btn",onClick:s[3]||(s[3]=E=>n(Ve)("all"))})]),de(ii,{class:"clinical-notes-demographics"}),n(ve)==="surgical"?(a(),o("div",di,[s[52]||(s[52]=e("div",{class:"clinical-notes-list-header"},"Surgical Notes",-1)),n(Re)?(a(),o("div",pi,"Loading surgical notes...")):n(Ae).length===0?(a(),o("div",ui," No surgical notes found. ")):(a(),o("div",mi,[(a(!0),o(k,null,S(n(je),(E,M)=>(a(),o("div",{key:M,class:"clinical-notes-section-block surgical-section-block"},[e("div",gi,l(M),1),M==="Physical Examination"?(a(),o("div",vi,[e("div",yi,[s[26]||(s[26]=e("div",{class:"pe-title"},"Physical Examination",-1)),e("div",fi,[s[5]||(s[5]=e("span",{class:"pe-label"},"General Condition:",-1)),e("span",bi,l(n(U).generalCondition||"N/A"),1)]),s[27]||(s[27]=e("div",{class:"pe-subtitle"},"Vitals",-1)),e("div",hi,[e("div",_i,[s[6]||(s[6]=e("span",{class:"pe-label"},"Temperature:",-1)),e("span",ki,l(n(U).temperature||"N/A"),1)]),e("div",xi,[s[7]||(s[7]=e("span",{class:"pe-label"},"Pulse Rate:",-1)),e("span",Si,l(n(U).pulseRate||"N/A"),1)]),e("div",wi,[s[8]||(s[8]=e("span",{class:"pe-label"},"Blood Pressure:",-1)),e("span",Ni,l(n(U).bloodPressure||"N/A"),1)]),e("div",Ai,[s[9]||(s[9]=e("span",{class:"pe-label"},"Respiratory Rate:",-1)),e("span",Ei,l(n(U).respiratoryRate||"N/A"),1)])]),e("div",Ci,[e("div",Pi,[s[10]||(s[10]=e("span",{class:"pe-label"},"Eyes:",-1)),e("span",Ii,l(n(U).eyes||"N/A"),1)]),e("div",Ti,[s[11]||(s[11]=e("span",{class:"pe-label"},"Mouth:",-1)),e("span",Li,l(n(U).mouth||"N/A"),1)]),e("div",Ri,[s[12]||(s[12]=e("span",{class:"pe-label"},"Neck:",-1)),e("span",Oi,l(n(U).neck||"N/A"),1)])]),e("div",Mi,[s[13]||(s[13]=e("span",{class:"pe-label"},"Chest Examination:",-1)),e("span",Di,l(n(U).chestExamination||"N/A"),1)]),e("div",Hi,[s[14]||(s[14]=e("span",{class:"pe-label"},"Endocrine Examination:",-1)),e("span",Fi,l(n(U).endocrineExamination||"N/A"),1)]),e("div",Bi,[s[15]||(s[15]=e("span",{class:"pe-label"},"Abdominal Examination:",-1)),e("span",$i,l(n(U).abdominalExamination||"N/A"),1)]),s[28]||(s[28]=e("div",{class:"pe-divider"},null,-1)),s[29]||(s[29]=e("div",{class:"pe-subtitle"},"Glasgow Coma Scale (GCS)",-1)),e("div",Vi,[s[16]||(s[16]=e("span",{class:"pe-label"},"Motor Response:",-1)),e("span",zi,l(n(U).motorResponse||"N/A"),1)]),e("div",Gi,[s[17]||(s[17]=e("span",{class:"pe-label"},"Verbal Response:",-1)),e("span",Ui,l(n(U).verbalResponse||"N/A"),1)]),e("div",ji,[s[18]||(s[18]=e("span",{class:"pe-label"},"Eye Response:",-1)),e("span",Wi,l(n(U).eyeOpeningResponse||"N/A"),1)]),s[30]||(s[30]=e("div",{class:"pe-divider"},null,-1)),s[31]||(s[31]=e("div",{class:"pe-subtitle"},"Additional Examinations & Extremities",-1)),e("table",Yi,[s[25]||(s[25]=e("thead",null,[e("tr",null,[e("th",null,"Additional Examinations"),e("th",null,"Extremities")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[s[19]||(s[19]=e("span",{class:"pe-label"},"Cranial Nerves:",-1)),e("span",qi,l(n(U).cranialNerves||"N/A"),1)]),e("td",null,[s[20]||(s[20]=e("span",{class:"pe-label"},"Pulsations:",-1)),e("span",Ki,l(n(U).pulsations||"N/A"),1)])]),e("tr",null,[e("td",null,[s[21]||(s[21]=e("span",{class:"pe-label"},"Gross Motor:",-1)),e("span",Xi,l(n(U).grossMotor||"N/A"),1)]),e("td",null,[s[22]||(s[22]=e("span",{class:"pe-label"},"Rectal Examination:",-1)),e("span",Zi,l(n(U).rectalExamination||"N/A"),1)])]),e("tr",null,[e("td",null,[s[23]||(s[23]=e("span",{class:"pe-label"},"Sensation:",-1)),e("span",Ji,l(n(U).sensation||"N/A"),1)]),e("td",null,[s[24]||(s[24]=e("span",{class:"pe-label"},"Extremities:",-1)),e("span",Qi,l(n(U).extremities||"N/A"),1)])])])])])])):M==="Initial Management"?(a(),o("div",en,[e("div",tn,[s[35]||(s[35]=e("div",{class:"im-title"},"Initial Management",-1)),e("div",sn,[e("div",nn,[s[32]||(s[32]=e("span",{class:"im-label"},"Clerk Name:",-1)),e("span",an,l(n(Qe).clerkName||"N/A"),1)]),e("div",on,[s[33]||(s[33]=e("span",{class:"im-label"},"Designation:",-1)),e("span",ln,l(n(Qe).designation||"N/A"),1)]),e("div",rn,[s[34]||(s[34]=e("span",{class:"im-label"},"Signature:",-1)),e("span",cn,l(n(Qe).signature||"N/A"),1)])])])])):M==="Presenting Complaints"?(a(),o("div",dn,[e("div",pn,[s[38]||(s[38]=e("div",{class:"pm-card-title"},"Presenting Complaints",-1)),s[39]||(s[39]=e("div",{class:"pm-card-divider"},null,-1)),e("div",un,[e("div",mn,[s[36]||(s[36]=e("span",{class:"pc-label"},"Presenting Complaints:",-1)),e("span",gn,l(n(Xe).complaints||"N/A"),1)]),e("div",vn,[s[37]||(s[37]=e("span",{class:"pc-label"},"Presenting History:",-1)),e("span",yn,l(n(Xe).history||"N/A"),1)])])])])):M==="Past Medical History"?(a(),o("div",fn,[e("div",bn,[s[40]||(s[40]=e("div",{class:"pm-card-title"},"Past Medical History",-1)),s[41]||(s[41]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",hn,[(a(!0),o(k,null,S(n(ot),(p,g)=>(a(),o("li",{key:g},[e("span",_n,l(p.title)+":",1),e("span",kn,l(p.value),1)]))),128)),n(ot).length===0?(a(),o("li",xn,"No records.")):T("",!0)])])])):M==="Review of Systems"?(a(),o("div",Sn,[e("div",wn,[s[42]||(s[42]=e("div",{class:"pm-card-title"},"Review of Systems",-1)),s[43]||(s[43]=e("div",{class:"pm-card-divider"},null,-1)),e("div",Nn,[e("div",An,[(a(!0),o(k,null,S(n(lt).left,(p,g)=>(a(),o("div",{key:`ros-l-${g}`,class:"ros-item"},[e("span",En,l(p.title)+":",1),e("span",Cn,l(p.value),1)]))),128))]),e("div",Pn,[(a(!0),o(k,null,S(n(lt).right,(p,g)=>(a(),o("div",{key:`ros-r-${g}`,class:"ros-item"},[e("span",In,l(p.title)+":",1),e("span",Tn,l(p.value),1)]))),128))])]),n(ft).length===0?(a(),o("div",Ln,"No records.")):T("",!0)])])):M==="Past Surgical History"?(a(),o("div",Rn,[e("div",On,[s[44]||(s[44]=e("div",{class:"pm-card-title"},"Past Surgical History",-1)),s[45]||(s[45]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Mn,[(a(!0),o(k,null,S(n(j),(p,g)=>(a(),o("li",{key:g},[e("span",Dn,l(p.title)+":",1),e("span",Hn,l(p.value),1)]))),128)),n(j).length===0?(a(),o("li",Fn,"No records.")):T("",!0)])])])):M==="Family History"?(a(),o("div",Bn,[e("div",$n,[s[46]||(s[46]=e("div",{class:"pm-card-title"},"Family History",-1)),s[47]||(s[47]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Vn,[(a(!0),o(k,null,S(n(we),(p,g)=>(a(),o("li",{key:g},[e("span",zn,l(p.title)+":",1),e("span",Gn,l(p.value),1)]))),128)),n(we).length===0?(a(),o("li",Un,"No records.")):T("",!0)])])])):M==="Social History"?(a(),o("div",jn,[e("div",Wn,[s[48]||(s[48]=e("div",{class:"pm-card-title"},"Social History",-1)),s[49]||(s[49]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Yn,[(a(!0),o(k,null,S(n(te),(p,g)=>(a(),o("li",{key:g},[e("span",qn,l(p.title)+":",1),e("span",Kn,l(p.value),1)]))),128)),n(te).length===0?(a(),o("li",Xn,"No records.")):T("",!0)])])])):M==="Gynecological History"?(a(),o("div",Zn,[e("div",Jn,[s[50]||(s[50]=e("div",{class:"pm-card-title"},"Gynecological History",-1)),s[51]||(s[51]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Qn,[(a(!0),o(k,null,S(n(We),(p,g)=>(a(),o("li",{key:g},[e("span",ea,l(p.title)+":",1),e("span",ta,l(p.value),1)]))),128)),n(We).length===0?(a(),o("li",sa," No records. ")):T("",!0)])])])):(a(),o("div",{key:9,class:Me(["clinical-notes-section-items surgical-section-items",{"surgical-section-items--stacked":he(M)}])},[(a(!0),o(k,null,S(E,(p,g)=>(a(),o("div",{key:g,class:"surgical-record"},[e("span",ia,l(V(p))+":",1),e("span",na,l(n(tt)(p)),1)]))),128))],2))]))),128))]))])):n(ve)==="gyneacology"?(a(),o("div",aa,[s[53]||(s[53]=e("div",{class:"clinical-notes-list-header"},"Gyneacology Ward",-1)),n(Ge)?(a(),o("div",oa," Loading gyneacology ward records... ")):n(Ee).length===0?(a(),o("div",la," No gyneacology ward records found. ")):(a(),o("div",ra,[(a(!0),o(k,null,S(n(Be),(E,M)=>(a(),o("div",{key:M,class:"clinical-notes-section-block gyne-section-block"},[e("div",ca,l(M),1),e("div",{class:Me(["clinical-notes-section-items gyne-section-items",{"gyne-section-items--wide":M==="General Examination","gyne-section-items--stacked":ee(M)}])},[(a(!0),o(k,null,S(E,(p,g)=>(a(),o("div",{key:g,class:"gyne-record"},[e("span",da,l(V(p))+":",1),e("span",pa,l(n(tt)(p)),1)]))),128))],2)]))),128))]))])):n(ve)==="medical"?(a(),o("div",ua,[s[128]||(s[128]=e("div",{class:"clinical-notes-list-header"},"Medical Inpatient",-1)),n(De)?(a(),o("div",ma," Loading medical inpatient records... ")):n(ke).length===0?(a(),o("div",ga," No medical inpatient records found. ")):(a(),o("div",va,[(a(!0),o(k,null,S(n(yt),(E,M)=>(a(),o("div",{key:M,class:"clinical-notes-section-block medical-section-block"},[e("div",ya,l(M),1),M==="Presenting Complaints"?(a(),o("div",fa,[e("div",ba,[s[54]||(s[54]=e("span",{class:"medical-record-label"},"Presenting Complaints:",-1)),e("span",ha,l(n(et).complaints||"N/A"),1)]),e("div",_a,[s[55]||(s[55]=e("span",{class:"medical-record-label"},"Presenting History:",-1)),e("span",ka,l(n(et).history||"N/A"),1)])])):M==="Review of Systems"?(a(),o("div",xa,[e("div",Sa,[e("div",wa,[e("div",Na,[(a(!0),o(k,null,S(n(rt).left,(p,g)=>(a(),o("div",{key:`mi-ros-l-${g}`,class:"ros-item"},[e("span",Aa,l(p.title)+":",1),e("span",Ea,l(p.value),1)]))),128))]),e("div",Ca,[(a(!0),o(k,null,S(n(rt).right,(p,g)=>(a(),o("div",{key:`mi-ros-r-${g}`,class:"ros-item"},[e("span",Pa,l(p.title)+":",1),e("span",Ia,l(p.value),1)]))),128))])]),n(bt).length===0?(a(),o("div",Ta,"No records.")):T("",!0)])])):M==="Physical Examination"?(a(),o("div",La,[e("div",Ra,[e("div",Oa,[s[56]||(s[56]=e("span",{class:"mipe-label"},"General condition:",-1)),e("span",Ma,l(n(v).general||"N/A"),1)]),s[107]||(s[107]=e("div",{class:"mipe-subtitle"},"Vitals",-1)),e("div",Da,[e("div",Ha,[s[57]||(s[57]=e("span",{class:"mipe-label"},"Temperature:",-1)),e("span",Fa,l(n(v).temperature||"N/A"),1)]),e("div",Ba,[s[58]||(s[58]=e("span",{class:"mipe-label"},"Pulse Rate:",-1)),e("span",$a,l(n(v).pulseRate||"N/A"),1)]),e("div",Va,[s[59]||(s[59]=e("span",{class:"mipe-label"},"Systolic:",-1)),e("span",za,l(n(v).systolic||"N/A"),1)]),e("div",Ga,[s[60]||(s[60]=e("span",{class:"mipe-label"},"Diastolic:",-1)),e("span",Ua,l(n(v).diastolic||"N/A"),1)]),e("div",ja,[s[61]||(s[61]=e("span",{class:"mipe-label"},"Respiratory Rate:",-1)),e("span",Wa,l(n(v).respiratoryRate||"N/A"),1)]),e("div",Ya,[s[62]||(s[62]=e("span",{class:"mipe-label"},"Oxygen Saturation:",-1)),e("span",qa,l(n(v).oxygenSaturation||"N/A"),1)])]),s[108]||(s[108]=e("div",{class:"mipe-divider"},null,-1)),s[109]||(s[109]=e("div",{class:"mipe-subtitle"},"Head and Neck",-1)),e("div",Ka,[e("div",Xa,[s[63]||(s[63]=e("span",{class:"mipe-label"},"Pupils Symmetrical:",-1)),e("span",Za,l(n(v).pupilsSymmetrical||"N/A"),1)]),e("div",Ja,[s[64]||(s[64]=e("span",{class:"mipe-label"},"Conjunctiva:",-1)),e("span",Qa,l(n(v).conjunctiva||"N/A"),1)]),e("div",eo,[s[65]||(s[65]=e("span",{class:"mipe-label"},"Oral KS:",-1)),e("span",to,l(n(v).oralKs||"N/A"),1)]),e("div",so,[s[66]||(s[66]=e("span",{class:"mipe-label"},"Oral Candidiasis:",-1)),e("span",io,l(n(v).oralThrush||"N/A"),1)]),e("div",no,[s[67]||(s[67]=e("span",{class:"mipe-label"},"Lymphadenopathy:",-1)),e("span",ao,l(n(v).lymphadenopathy||"N/A"),1)])]),n(v).headNeckOther?(a(),o("div",oo,[s[68]||(s[68]=e("span",{class:"mipe-label"},"Other:",-1)),e("span",lo,l(n(v).headNeckOther),1)])):T("",!0),s[110]||(s[110]=e("div",{class:"mipe-divider"},null,-1)),s[111]||(s[111]=e("div",{class:"mipe-subtitle"},"Chest",-1)),e("div",ro,[e("div",co,[s[69]||(s[69]=e("span",{class:"mipe-label"},"Symmetrical Expansion:",-1)),e("span",po,l(n(v).symmetricalExpansion||"N/A"),1)]),e("div",uo,[s[70]||(s[70]=e("span",{class:"mipe-label"},"Symmetrical Expansion Description:",-1)),e("span",mo,l(n(v).symmetricalExpansionDescription||"N/A"),1)])]),s[112]||(s[112]=e("div",{class:"mipe-divider"},null,-1)),s[113]||(s[113]=e("div",{class:"mipe-subtitle"},"Heart",-1)),e("div",go,[e("div",vo,[s[71]||(s[71]=e("span",{class:"mipe-label"},"Apex Beat:",-1)),e("span",yo,l(n(v).apexBeat||"N/A"),1)]),e("div",fo,[s[72]||(s[72]=e("span",{class:"mipe-label"},"Thrill Heaves:",-1)),e("span",bo,l(n(v).thrillHeaves||"N/A"),1)]),e("div",ho,[s[73]||(s[73]=e("span",{class:"mipe-label"},"Auscultation (Heart):",-1)),e("span",_o,l(n(v).auscultationHeart||"N/A"),1)])]),s[114]||(s[114]=e("div",{class:"mipe-divider"},null,-1)),s[115]||(s[115]=e("div",{class:"mipe-subtitle"},"Lungs",-1)),e("div",ko,[e("div",xo,[s[74]||(s[74]=e("span",{class:"mipe-label"},"Lung Condition:",-1)),e("span",So,l(n(v).lungCondition||"N/A"),1)]),e("div",wo,[s[75]||(s[75]=e("span",{class:"mipe-label"},"Lung Position:",-1)),e("span",No,l(n(v).lungPosition||"N/A"),1)])]),s[116]||(s[116]=e("div",{class:"mipe-divider"},null,-1)),s[117]||(s[117]=e("div",{class:"mipe-subtitle"},"Abdomen",-1)),e("div",Ao,[e("div",Eo,[s[76]||(s[76]=e("span",{class:"mipe-label"},"Region:",-1)),e("span",Co,l(n(v).abdomenRegion||"N/A"),1)]),e("div",Po,[s[77]||(s[77]=e("span",{class:"mipe-label"},"Inspection:",-1)),e("span",Io,l(n(v).abdomenInspection||"N/A"),1)])]),e("div",To,[e("div",Lo,[s[78]||(s[78]=e("span",{class:"mipe-label"},"Light Palpation:",-1)),e("span",Ro,l(n(v).abdomenLightPalpation||"N/A"),1)]),e("div",Oo,[s[79]||(s[79]=e("span",{class:"mipe-label"},"Deep Palpation:",-1)),e("span",Mo,l(n(v).abdomenDeepPalpation||"N/A"),1)])]),e("div",Do,[e("div",Ho,[s[80]||(s[80]=e("span",{class:"mipe-label"},"Auscultation:",-1)),e("span",Fo,l(n(v).abdomenAuscultation||"N/A"),1)]),e("div",Bo,[s[81]||(s[81]=e("span",{class:"mipe-label"},"Shifting Dullness:",-1)),e("span",$o,l(n(v).abdomenShiftingDullness||"N/A"),1)]),e("div",Vo,[s[82]||(s[82]=e("span",{class:"mipe-label"},"Fluid Thrill:",-1)),e("span",zo,l(n(v).abdomenFluidThrill||"N/A"),1)])]),n(Ze).abdomen.length?(a(),o("div",Go,[(a(!0),o(k,null,S(n(Ze).abdomen,(p,g)=>(a(),o("div",{class:"mipe-zone",key:`mi-abd-${g}`},[e("div",Uo,l(p.zone),1),(a(!0),o(k,null,S(p.findings,($,oe)=>(a(),o("div",{class:"mipe-line",key:`mi-abd-${g}-${oe}`},[e("span",jo,l($.title)+":",1),e("span",Wo,l($.value),1)]))),128))]))),128))])):T("",!0),n(Ze).respiratory.length?(a(),o("div",Yo,[s[83]||(s[83]=e("div",{class:"mipe-divider"},null,-1)),s[84]||(s[84]=e("div",{class:"mipe-subtitle"},"Respiratory Examination",-1)),e("div",qo,[(a(!0),o(k,null,S(n(Ze).respiratory,(p,g)=>(a(),o("div",{class:"mipe-zone",key:`mi-resp-${g}`},[e("div",Ko,l(p.zone),1),(a(!0),o(k,null,S(p.findings,($,oe)=>(a(),o("div",{class:"mipe-line",key:`mi-resp-${g}-${oe}`},[e("span",Xo,l($.title)+":",1),e("span",Zo,l($.value),1)]))),128))]))),128))])])):T("",!0),s[118]||(s[118]=e("div",{class:"mipe-divider"},null,-1)),s[119]||(s[119]=e("div",{class:"mipe-subtitle"},"Extremities",-1)),e("div",Jo,[s[85]||(s[85]=e("span",{class:"mipe-label"},"Oedema:",-1)),e("span",Qo,l(n(v).oedema||"N/A"),1)]),s[120]||(s[120]=e("div",{class:"mipe-divider"},null,-1)),s[121]||(s[121]=e("div",{class:"mipe-subtitle"},"Skin",-1)),e("div",el,[e("div",tl,[s[86]||(s[86]=e("span",{class:"mipe-label"},"Skin Rash:",-1)),e("span",sl,l(n(v).skinRash||"N/A"),1)]),e("div",il,[s[87]||(s[87]=e("span",{class:"mipe-label"},"Herpes Zoster Scar:",-1)),e("span",nl,l(n(v).herpesScar||"N/A"),1)])]),s[122]||(s[122]=e("div",{class:"mipe-divider"},null,-1)),s[123]||(s[123]=e("div",{class:"mipe-subtitle"},"Neurological Examination",-1)),e("div",al,[s[88]||(s[88]=e("span",{class:"mipe-label"},"Neck Stiffness:",-1)),e("span",ol,l(n(v).neckStiffness||"N/A"),1)]),s[124]||(s[124]=e("div",{class:"mipe-divider"},null,-1)),s[125]||(s[125]=e("div",{class:"mipe-subtitle"},"Glasgow Coma Scale (GCS)",-1)),e("div",ll,[e("div",rl,[s[89]||(s[89]=e("span",{class:"mipe-label"},"Eye Opening Response:",-1)),e("span",cl,l(n(v).eyeOpeningResponse||"N/A"),1)]),e("div",dl,[s[90]||(s[90]=e("span",{class:"mipe-label"},"Verbal Response:",-1)),e("span",pl,l(n(v).verbalResponse||"N/A"),1)]),e("div",ul,[s[91]||(s[91]=e("span",{class:"mipe-label"},"Motor Response:",-1)),e("span",ml,l(n(v).motorResponse||"N/A"),1)])]),s[126]||(s[126]=e("div",{class:"mipe-divider"},null,-1)),s[127]||(s[127]=e("div",{class:"mipe-subtitle"},"Cranial and Peripheral Nerves",-1)),e("table",gl,[s[106]||(s[106]=e("thead",null,[e("tr",null,[e("th",null,"Cranial Nerves"),e("th",null,"Peripheral Nerves")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[s[92]||(s[92]=e("span",{class:"pe-label"},"Pupil:",-1)),e("span",vl,l(n(v).cnPupil||"N/A"),1)]),e("td",null,[s[93]||(s[93]=e("span",{class:"pe-label"},"Power:",-1)),e("span",yl,l(n(v).pnPower||"N/A"),1)])]),e("tr",null,[e("td",null,[s[94]||(s[94]=e("span",{class:"pe-label"},"Visual Field/Acuity:",-1)),e("span",fl,l(n(v).cnVisualField||"N/A"),1)]),e("td",null,[s[95]||(s[95]=e("span",{class:"pe-label"},"Tone:",-1)),e("span",bl,l(n(v).pnTone||"N/A"),1)])]),e("tr",null,[e("td",null,[s[96]||(s[96]=e("span",{class:"pe-label"},"Eye Movements/Nystagmus:",-1)),e("span",hl,l(n(v).cnEyeMovements||"N/A"),1)]),e("td",null,[s[97]||(s[97]=e("span",{class:"pe-label"},"Reflexes:",-1)),e("span",_l,l(n(v).pnReflexes||"N/A"),1)])]),e("tr",null,[e("td",null,[s[98]||(s[98]=e("span",{class:"pe-label"},"Facial Movements/Sensation:",-1)),e("span",kl,l(n(v).cnFacial||"N/A"),1)]),e("td",null,[s[99]||(s[99]=e("span",{class:"pe-label"},"Plantars:",-1)),e("span",xl,l(n(v).pnPlantars||"N/A"),1)])]),e("tr",null,[e("td",null,[s[100]||(s[100]=e("span",{class:"pe-label"},"Hearing:",-1)),e("span",Sl,l(n(v).cnHearing||"N/A"),1)]),e("td",null,[s[101]||(s[101]=e("span",{class:"pe-label"},"Sensation:",-1)),e("span",wl,l(n(v).pnSensation||"N/A"),1)])]),e("tr",null,[e("td",null,[s[102]||(s[102]=e("span",{class:"pe-label"},"Tongue Movement/Tastes:",-1)),e("span",Nl,l(n(v).cnTongue||"N/A"),1)]),e("td",null,[s[103]||(s[103]=e("span",{class:"pe-label"},"Coordination:",-1)),e("span",Al,l(n(v).pnCoordination||"N/A"),1)])]),e("tr",null,[e("td",null,[s[104]||(s[104]=e("span",{class:"pe-label"},"Cough/Gag Reflex:",-1)),e("span",El,l(n(v).cnCoughGag||"N/A"),1)]),s[105]||(s[105]=e("td",null,null,-1))])])])])])):(a(),o("div",{key:3,class:Me(["clinical-notes-section-items medical-section-items",{"medical-section-items--stacked":R(M)}])},[(a(!0),o(k,null,S(E,(p,g)=>(a(),o("div",{key:g,class:"medical-record"},[e("span",Cl,l(V(p))+":",1),e("span",Pl,l(n(tt)(p)),1)]))),128))],2))]))),128))]))])):n(ve)==="all"?(a(),o("div",Il,[e("div",Tl,[e("header",Ll,[s[129]||(s[129]=e("div",null,[e("h2",{class:"title"},"Clinical Health Card"),e("p",{class:"subtitle"},"Complete timeline of patient's clinical review and outcomes.")],-1)),e("div",Rl,[de(n(Hs),{fill:"clear",size:"small",class:"refresh-btn",disabled:n(pe),onClick:n(ne),title:"Refresh Health Card"},{default:Ke(()=>[de(n(nt),{icon:n(ei),slot:"icon-only",class:Me({"spin-anim":n(pe)})},null,8,["icon","class"])]),_:1},8,["disabled","onClick"])])]),n(pe)?(a(),o("div",Ol,[(a(),o(k,null,S(3,E=>e("div",{class:"skeleton-card",key:"skel-"+E},[...s[130]||(s[130]=[e("div",{class:"skeleton-header"},[e("div",{class:"skeleton-icon shimmer"}),e("div",{class:"skeleton-text-wrapper"},[e("div",{class:"skeleton-title shimmer"}),e("div",{class:"skeleton-subtitle shimmer"})])],-1)])])),64))])):n(xe).length?(a(),o("div",Hl,[(a(!0),o(k,null,S(n(xe),(E,M)=>(a(),o("div",{key:E.id,class:Me(["encounter-tile",{"is-expanded":n(ye)[E.id]}]),onClick:p=>n(D)(E.id),style:at({animationDelay:M*.05+"s"})},[e("div",{class:Me(["tile-header",{"header-expanded":n(ye)[E.id]}])},[e("div",{class:"tile-icon-wrapper",style:at({backgroundColor:n(ye)[E.id]?E.color:E.color+"15",color:n(ye)[E.id]?"#fff":E.color})},[de(n(nt),{icon:E.icon,class:"tile-icon"},null,8,["icon"])],4),e("div",Bl,[e("h4",$l,l(E.title),1)]),de(n(nt),{icon:n(ti),class:Me(["expand-icon",{expanded:n(ye)[E.id]}])},null,8,["icon","class"])],2),e("div",{class:Me(["tile-body",{"body-expanded":n(ye)[E.id]}])},[e("div",{class:"tile-body-inner",onClick:s[4]||(s[4]=Fs(()=>{},["stop"]))},[E.id==="triage"?(a(),o("div",Vl,[n(ae)?(a(),o("div",Gl,[e("div",Ul,[s[134]||(s[134]=e("span",{class:"triage-summary-letter"},"A.",-1)),e("p",jl,[s[133]||(s[133]=e("strong",null,"Presenting Complaints:",-1)),e("span",null,l(n(ae).presentingComplaints),1)])]),e("div",Wl,[s[136]||(s[136]=e("span",{class:"triage-summary-letter"},"B.",-1)),e("p",Yl,[s[135]||(s[135]=e("strong",null,"Vital Signs:",-1)),e("span",null,l(n(ae).vitalSigns),1)])]),e("div",ql,[s[138]||(s[138]=e("span",{class:"triage-summary-letter"},"C.",-1)),e("p",Kl,[s[137]||(s[137]=e("strong",null,"Triage Category:",-1)),e("span",null,l(n(ae).triageCategory),1)])]),e("div",Xl,[s[140]||(s[140]=e("span",{class:"triage-summary-letter"},"D.",-1)),e("p",Zl,[s[139]||(s[139]=e("strong",null,"Patient Care Area:",-1)),e("span",null,l(n(ae).patientCareArea),1)])]),e("p",Jl,l(n(ae).createdByLine),1)])):(a(),o("div",zl,"No triage information found."))])):E.id==="soapier"?(a(),o("div",Ql,[n(G)?(a(),o("div",tr,[e("div",sr,[e("div",ir,[s[141]||(s[141]=e("div",{class:"soapier-card-title"},"Subjective",-1)),s[142]||(s[142]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",nr,l(n(G).subjective||"N/A"),1)]),e("div",ar,[s[145]||(s[145]=e("div",{class:"soapier-card-title"},"Objective",-1)),s[146]||(s[146]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",or,[e("div",lr,[s[143]||(s[143]=e("div",{class:"soapier-block-title"},"Objective",-1)),e("div",rr,l(n(G).objective||"N/A"),1)]),e("div",cr,[s[144]||(s[144]=e("div",{class:"soapier-block-title"},"Vital Signs",-1)),e("div",dr,l(n(G).vitalSigns||"N/A"),1)])])]),e("div",pr,[s[147]||(s[147]=e("div",{class:"soapier-card-title"},"Assessment",-1)),s[148]||(s[148]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",ur,l(n(G).assessment||"N/A"),1)]),e("div",mr,[s[149]||(s[149]=e("div",{class:"soapier-card-title"},"Plan",-1)),s[150]||(s[150]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",gr,l(n(G).plan||"N/A"),1)]),e("div",vr,[s[153]||(s[153]=e("div",{class:"soapier-card-title"},"Intervention / Implementation",-1)),s[154]||(s[154]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",yr,[e("div",fr,[s[151]||(s[151]=e("div",{class:"soapier-block-title"},"Non‑Pharmacological",-1)),e("div",br,[n(G).nonPharmacological&&n(G).nonPharmacological!=="N/A"?(a(!0),o(k,{key:0},S(n(G).nonPharmacological.split(/\n|\s*\|\s*/).filter(Boolean),(p,g)=>(a(),o("div",{key:"np-all-"+g},l(p),1))),128)):(a(),o(k,{key:1},[$e("N/A")],64))])]),e("div",hr,[s[152]||(s[152]=e("div",{class:"soapier-block-title"},"Medications",-1)),e("div",_r,l(n(G).medications||"N/A"),1)])])]),e("div",kr,[s[155]||(s[155]=e("div",{class:"soapier-card-title"},"Evaluation",-1)),s[156]||(s[156]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",xr,l(n(G).evaluation||"N/A"),1)]),e("div",Sr,[s[157]||(s[157]=e("div",{class:"soapier-card-title"},"Replan",-1)),s[158]||(s[158]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",wr,l(n(G).replan||"N/A"),1)])]),e("div",Nr,l(n(G).createdByLine),1)])):(a(),o("div",er,"No SOAPIER notes found."))])):E.id==="monitoring_chart"?(a(),o("div",Ar,[n(Se)?(a(),o("div",Cr,[(a(!0),o(k,null,S(n(Se).charts,p=>(a(),o("div",{key:p.key,class:"monitoring-chart-card"},[e("div",Pr,l(p.title),1),s[159]||(s[159]=e("div",{class:"monitoring-chart-divider"},null,-1)),z(p)?(a(),o("div",Ir,[n(ye)[E.id]?(a(),vt(n(Ws),{key:`${E.id}-${p.key}`,width:"100%",height:"160",type:"line",options:Ne(p),series:p.series},null,8,["options","series"])):T("",!0)])):T("",!0),_e(p)?(a(),o("div",Tr,[(a(!0),o(k,null,S(p.series,(g,$)=>(a(),o("span",{key:`${p.key}-${g.name}`,class:"monitoring-chart-legend-item"},[e("span",{class:"monitoring-chart-legend-marker",style:at({color:p.colors?.[$]||"#0ea5e9"}),"aria-hidden":"true"}," ● ",4),e("span",null,l(g.name),1)]))),128))])):T("",!0),z(p)?T("",!0):(a(),o("div",Lr," No chartable records. "))]))),128))])):(a(),o("div",Er," No monitoring chart records found. "))])):E.id==="fluid_balance"?(a(),o("div",Rr,[n(fe)?(a(),o("div",Mr,[(a(!0),o(k,null,S(n(fe).entries,p=>(a(),o("div",{key:p.id,class:"fluid-balance-card"},[e("div",Dr,[e("div",null,[e("div",Hr,l(p.entryDate||"Date not recorded"),1),e("div",Fr,l(p.entryTime||"Time not recorded"),1)]),e("div",{class:Me(["fluid-balance-badge",{"fluid-balance-badge--alert":Math.abs(p.balance)>1e3}])},l(p.balanceLabel),3)]),e("div",Br,[e("div",$r,[s[160]||(s[160]=e("div",{class:"fluid-balance-section-title"},"Intake",-1)),e("ul",Vr,[(a(!0),o(k,null,S(p.intake,g=>(a(),o("li",{key:`intake-${g.title}`},[e("span",null,l(g.title)+":",1),$e(" "+l(g.value),1)]))),128)),p.intake.length===0?(a(),o("li",zr,"No intake recorded.")):T("",!0)])]),e("div",Gr,[s[161]||(s[161]=e("div",{class:"fluid-balance-section-title"},"Output",-1)),e("ul",Ur,[(a(!0),o(k,null,S(p.output,g=>(a(),o("li",{key:`output-${g.title}`},[e("span",null,l(g.title)+":",1),$e(" "+l(g.value),1)]))),128)),p.output.length===0?(a(),o("li",jr,"No output recorded.")):T("",!0)])]),e("div",Wr,[s[162]||(s[162]=e("div",{class:"fluid-balance-section-title"},"Stool / Lab",-1)),e("ul",Yr,[(a(!0),o(k,null,S(p.stool,g=>(a(),o("li",{key:`stool-${g.title}`},[e("span",null,l(g.title)+":",1),$e(" "+l(g.value),1)]))),128)),p.stool.length===0?(a(),o("li",qr,"No stool details recorded.")):T("",!0)])]),e("div",Kr,[s[167]||(s[167]=e("div",{class:"fluid-balance-section-title"},"Summary",-1)),e("ul",Xr,[e("li",null,[s[163]||(s[163]=e("span",null,"Total Intake:",-1)),$e(" "+l(p.totalIntake)+" mL",1)]),e("li",null,[s[164]||(s[164]=e("span",null,"Total Output:",-1)),$e(" "+l(p.totalOutput)+" mL",1)]),e("li",null,[s[165]||(s[165]=e("span",null,"24-hour Balance:",-1)),$e(" "+l(p.balanceLabel),1)]),p.comments?(a(),o("li",Zr,[s[166]||(s[166]=e("span",null,"Notes:",-1)),$e(" "+l(p.comments),1)])):T("",!0)])])])]))),128))])):(a(),o("div",Or," No fluid balance and stool monitoring records found. "))])):E.id==="primary_survey"?(a(),o("div",Jr,[n(Ce)?(a(),o("div",ec,[e("div",tc,[(a(!0),o(k,null,S(n(Ce).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",sc,l(g),1),e("ul",ic,[(a(!0),o(k,null,S(p,($,oe)=>(a(),o("li",{key:oe,class:"observation-row"},[e("span",nc,l($.title),1),e("span",ac,l($.value),1)]))),128))])]))),128))]),e("div",oc,l(n(Ce).createdByLine),1)])):(a(),o("div",Qr," No primary survey records found. "))])):E.id==="sample_history"?(a(),o("div",lc,[n(H)?(a(),o("div",cc,[e("div",dc,[s[168]||(s[168]=e("div",{class:"sample-card-title"},"Symptoms - Presenting Complaints",-1)),s[169]||(s[169]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",pc,[(a(!0),o(k,null,S(n(H).cards.symptoms.items,(p,g)=>(a(),o("li",{key:g},[e("span",uc,l(p.title)+":",1),e("span",mc,l(p.value),1)]))),128)),n(H).cards.symptoms.items.length===0?(a(),o("li",gc," No records. ")):T("",!0)]),e("div",vc,l(n(H).cards.symptoms.createdByLine),1)]),e("div",yc,[s[170]||(s[170]=e("div",{class:"sample-card-title"},"Events",-1)),s[171]||(s[171]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",fc,[(a(!0),o(k,null,S(n(H).cards.events.items,(p,g)=>(a(),o("li",{key:g},[e("span",bc,l(p.title)+":",1),e("span",hc,l(p.value),1)]))),128)),n(H).cards.events.items.length===0?(a(),o("li",_c," No records. ")):T("",!0)]),e("div",kc,l(n(H).cards.events.createdByLine),1)]),e("div",xc,[s[172]||(s[172]=e("div",{class:"sample-card-title"},"Allergies",-1)),s[173]||(s[173]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Sc,[(a(!0),o(k,null,S(n(H).cards.allergies.items,(p,g)=>(a(),o("li",{key:g},[e("span",wc,l(p.title)+":",1),e("span",Nc,l(p.value),1)]))),128)),n(H).cards.allergies.items.length===0?(a(),o("li",Ac," No records. ")):T("",!0)]),e("div",Ec,l(n(H).cards.allergies.createdByLine),1)]),e("div",Cc,[s[174]||(s[174]=e("div",{class:"sample-card-title"},"Medications",-1)),s[175]||(s[175]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Pc,[(a(!0),o(k,null,S(n(H).cards.medications.items,(p,g)=>(a(),o("li",{key:g},[e("span",Ic,l(p.title)+":",1),e("span",Tc,l(p.value),1)]))),128)),n(H).cards.medications.items.length===0?(a(),o("li",Lc," No records. ")):T("",!0)]),e("div",Rc,l(n(H).cards.medications.createdByLine),1)]),e("div",Oc,[s[176]||(s[176]=e("div",{class:"sample-card-title"},"Prior/Existing Conditions",-1)),s[177]||(s[177]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Mc,[(a(!0),o(k,null,S(n(H).cards.priorConditions.items,(p,g)=>(a(),o("li",{key:g},[e("span",Dc,l(p.title)+":",1),e("span",Hc,l(p.value),1)]))),128)),n(H).cards.priorConditions.items.length===0?(a(),o("li",Fc," No records. ")):T("",!0)]),e("div",Bc,l(n(H).cards.priorConditions.createdByLine),1)]),e("div",$c,[s[178]||(s[178]=e("div",{class:"sample-card-title"},"Last Meal",-1)),s[179]||(s[179]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Vc,[(a(!0),o(k,null,S(n(H).cards.lastMeal.items,(p,g)=>(a(),o("li",{key:g},[e("span",zc,l(p.title)+":",1),e("span",Gc,l(p.value),1)]))),128)),n(H).cards.lastMeal.items.length===0?(a(),o("li",Uc," No records. ")):T("",!0)]),e("div",jc,l(n(H).cards.lastMeal.createdByLine),1)])])):(a(),o("div",rc," No SAMPLE history records found. "))])):E.id==="secondary_survey"?(a(),o("div",Wc,[n(Pe)?(a(),o("div",qc,[e("div",Kc,[(a(!0),o(k,null,S(n(Pe).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",Xc,l(g),1),e("ul",Zc,[(a(!0),o(k,null,S(p,($,oe)=>(a(),o("li",{key:oe,class:"observation-row"},[e("span",Jc,l($.title),1),e("span",Qc,l($.value),1)]))),128))])]))),128))]),e("div",ed,l(n(Pe).createdByLine),1)])):(a(),o("div",Yc," No secondary survey records found. "))])):E.id==="diagnosis"?(a(),o("div",td,[n(Ue)?(a(),o("div",id,[(a(!0),o(k,null,S(n(Ue).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",nd,l(g),1),e("ul",ad,[(a(!0),o(k,null,S(p,($,oe)=>(a(),o("li",{key:oe,class:"observation-row"},[e("span",od,l($.title),1),e("span",ld,l($.value),1)]))),128))])]))),128)),e("div",rd,l(n(Ue).createdByLine),1)])):(a(),o("div",sd," No diagnosis records found. "))])):E.id==="investigations"?(a(),o("div",cd,[n(ue)?(a(),o("div",pd,[n(ue).cards.labOrdersPlan.items.length?(a(),o("div",ud,[s[180]||(s[180]=e("div",{class:"pm-card-title"},"Lab Orders Plan",-1)),s[181]||(s[181]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",md,[(a(!0),o(k,null,S(n(ue).cards.labOrdersPlan.items,(p,g)=>(a(),o("li",{key:g},[e("span",gd,l(p.title)+":",1),e("span",vd,l(p.value),1)]))),128))]),e("div",yd,l(n(ue).cards.labOrdersPlan.createdByLine),1)])):T("",!0),n(ue).cards.bedsidePlan.items.length?(a(),o("div",fd,[s[182]||(s[182]=e("div",{class:"pm-card-title"},"Bedside Investigation Plan",-1)),s[183]||(s[183]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",bd,[(a(!0),o(k,null,S(n(ue).cards.bedsidePlan.items,(p,g)=>(a(),o("li",{key:g},[e("span",hd,l(p.title)+":",1),e("span",_d,l(p.value),1)]))),128))]),e("div",kd,l(n(ue).cards.bedsidePlan.createdByLine),1)])):T("",!0),!n(ue).cards.labOrdersPlan.items.length&&!n(ue).cards.bedsidePlan.items.length?(a(),o("div",xd," No findings recorded. ")):T("",!0)])):(a(),o("div",dd," No laboratory / radiology findings found. "))])):E.id==="patient_management"?(a(),o("div",Sd,[n(be)?(a(),o("div",Nd,[e("div",Ad,[s[184]||(s[184]=e("div",{class:"pm-card-title"},"Non‑Pharmacological",-1)),s[185]||(s[185]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Ed,[(a(!0),o(k,null,S(n(be).cards.nonPharmacological.items,(p,g)=>(a(),o("li",{key:g},[e("span",Cd,l(p.title)+":",1),e("span",Pd,l(p.value),1)]))),128)),n(be).cards.nonPharmacological.items.length===0?(a(),o("li",Id," No records. ")):T("",!0)]),e("div",Td,l(n(be).cards.nonPharmacological.createdByLine),1)]),e("div",Ld,[s[186]||(s[186]=e("div",{class:"pm-card-title"},"Patient Care Area",-1)),s[187]||(s[187]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Rd,[(a(!0),o(k,null,S(n(be).cards.patientCareArea.items,(p,g)=>(a(),o("li",{key:g},[e("span",Od,l(p.title)+":",1),e("span",Md,l(p.value),1)]))),128)),n(be).cards.patientCareArea.items.length===0?(a(),o("li",Dd," No records. ")):T("",!0)]),e("div",Hd,l(n(be).cards.patientCareArea.createdByLine),1)]),e("div",Fd,[s[188]||(s[188]=e("div",{class:"pm-card-title"},"Medications",-1)),s[189]||(s[189]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Bd,[(a(!0),o(k,null,S(n(be).cards.medications.items,(p,g)=>(a(),o("li",{key:g},[e("span",$d,l(p.title)+":",1),e("span",Vd,l(p.value),1)]))),128)),n(be).cards.medications.items.length===0?(a(),o("li",zd," No records. ")):T("",!0)]),e("div",Gd,l(n(be).cards.medications.createdByLine),1)])])):(a(),o("div",wd," No patient management plan records found. "))])):E.id==="continuation"?(a(),o("div",Ud,[n(He)?(a(),o("div",Wd,[(a(!0),o(k,null,S(n(He).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",Yd,l(g),1),e("ul",qd,[(a(!0),o(k,null,S(p,($,oe)=>(a(),o("li",{key:oe,class:"observation-row"},[e("span",Kd,l($.title),1),e("span",Xd,l($.value),1)]))),128))])]))),128)),e("div",Zd,l(n(He).createdByLine),1)])):(a(),o("div",jd," No continuation notes found. "))])):E.id==="disposition"?(a(),o("div",Jd,[n(Fe)?(a(),o("div",ep,[e("div",tp,[s[190]||(s[190]=e("div",{class:"pm-card-title"},"Awaiting Specialty",-1)),s[191]||(s[191]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",sp,[(a(!0),o(k,null,S(n(Fe).cards.awaitingSpecialty.items,(p,g)=>(a(),o("li",{key:g},[e("span",ip,l(p.title)+":",1),e("span",np,l(p.value),1)]))),128)),n(Fe).cards.awaitingSpecialty.items.length===0?(a(),o("li",ap," No records. ")):T("",!0)]),e("div",op,l(n(Fe).cards.awaitingSpecialty.createdByLine),1)]),(a(!0),o(k,null,S(n(Fe).otherCards,p=>(a(),o("div",{key:p.key,class:"pm-card"},[e("div",lp,l(p.title),1),s[192]||(s[192]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",rp,[(a(!0),o(k,null,S(p.items,(g,$)=>(a(),o("li",{key:$},[e("span",cp,l(g.title)+":",1),e("span",dp,l(g.value),1)]))),128)),p.items.length===0?(a(),o("li",pp,"No records.")):T("",!0)]),e("div",up,l(p.createdByLine),1)]))),128))])):(a(),o("div",Qd," No disposition notes found. "))])):T("",!0)])],2)],14,Fl))),128))])):(a(),o("div",Ml,[e("div",Dl,[de(n(nt),{icon:n(Et),class:"empty-icon"},null,8,["icon"])]),s[131]||(s[131]=e("h3",null,"No Clinical Records Found",-1)),s[132]||(s[132]=e("p",null,"The clinical review workflow has not been started or saved yet.",-1))]))])])):(a(),o("div",mp,"Clinical notes records will appear here."))]),_:1})]),_:1})]))}}),Yt={Weight:["Weight (kg)","Weight"],"Height (cm)":["Height (cm)","Height"],Temperature:["Temperature (c)","Temperature"],Pulse:["Pulse","Pulse Rate","Pulse rate"],Systolic:["Systolic blood pressure","Systolic"],Diastolic:["Diastolic blood pressure","Diastolic"],"Respiratory rate":["Respiratory rate","Respiratory Rate"]},gp=J=>{const V=`${J??""}`.trim();return Date.parse(V)||Date.parse(V.replace(" ","T").replace(/ ?([+-]\d\d)(\d\d)$/,"$1:$2"))||0},vp=J=>{const V=J?.value_numeric??J?.value_text;if(V==null||`${V}`.trim()==="")return;const ee=Number(V);return Number.isFinite(ee)?ee:void 0},Mp=J=>{const V=new Map;Object.entries(Yt).forEach(([R,z])=>z.forEach(_e=>V.set(_e.toLowerCase(),R)));const ee={},he=R=>{if(!R)return;const z=V.get(`${R.concept_name??""}`.trim().toLowerCase()),_e=z&&!Number(R.voided)?vp(R):void 0;if(z&&_e!==void 0){const Ne=gp(R.obs_datetime);(!ee[z]||Ne>ee[z].at)&&(ee[z]={at:Ne,value:_e})}(R.children||R.child||R.groupMembers||[]).forEach(he)};return(J?.observations||[]).forEach(R=>(R?.obs||[]).forEach(he)),Object.keys(Yt).reduce((R,z)=>(R[z]=ee[z]?.value,R),{})},yp={class:"item-title"},fp=Kt({__name:"StartVisitMenu",props:{items:{}},emits:["select"],setup(J,{expose:V,emit:ee}){const he=ee,R=I(!1),z=I(null),_e=I(null),Ne=I({top:"0px",left:"0px"}),ve=I({overflowY:"auto"});let Ae=null,Ee=null;const ke=()=>{R.value=!1,Ae=null,Ee!==null&&cancelAnimationFrame(Ee),Ee=null},Re=()=>{if(!R.value||!Ae||!z.value)return;const D=Ae.getBoundingClientRect();if(!D.width||!D.height){ke();return}const pe=z.value.offsetWidth,ne=_e.value?.scrollHeight||z.value.offsetHeight,xe=8,ae=Math.max(8,Math.min(D.right-pe,window.innerWidth-pe-8)),G=Math.max(0,window.innerHeight-D.bottom-xe-12),Se=Math.max(0,D.top-xe-12),fe=ne>G&&Se>G,Ce=Math.min(ne,fe?Se:G),H=fe?D.top-xe-Ce:D.bottom+xe,Pe=Math.max(8,Math.min(pe-20,ae+pe-(D.left+D.width/2)-6));ve.value={maxHeight:`${fe?Se:G}px`,overflowY:"auto",boxSizing:"border-box"},Ne.value={top:`${H}px`,left:`${ae}px`,"--arrow-right":`${Pe}px`,"--arrow-top":fe?"auto":"-6px","--arrow-bottom":fe?"-6px":"auto","--arrow-transform":fe?"rotate(225deg)":"rotate(45deg)","--arrow-shadow":fe?"2px 2px 3px rgba(0, 0, 0, 0.05)":"-2px -2px 3px rgba(0, 0, 0, 0.05)"},Ee=requestAnimationFrame(Re)},Ge=async D=>{if(D.stopPropagation(),R.value){ke();return}Ae=D.currentTarget,R.value=!0,await qt(),Re()},De=D=>{ke(),he("select",D)},ye=D=>{D.key==="Escape"&&R.value&&ke()};return Xt(()=>window.addEventListener("keydown",ye)),$s(()=>{ke(),window.removeEventListener("keydown",ye)}),V({open:Ge,close:ke}),(D,pe)=>(a(),vt(Vs,{to:"body"},[R.value?(a(),o("div",{key:0,class:"custom-menu-backdrop",onClick:ke})):T("",!0),R.value?(a(),o("div",{key:1,ref_key:"menuElement",ref:z,class:"custom-premium-menu profile-program-menu",style:at(Ne.value)},[pe[0]||(pe[0]=e("div",{class:"menu-arrow"},null,-1)),e("div",{ref_key:"menuContentElement",ref:_e,class:"modern-popover-container",style:at(ve.value)},[de(n(js),{lines:"none"},{default:Ke(()=>[(a(!0),o(k,null,S(J.items,(ne,xe)=>(a(),o(k,{key:xe},[ne.isHeader?(a(),vt(n(zs),{key:0,class:"program-section-label"},{default:Ke(()=>[de(n(Gs),null,{default:Ke(()=>[$e(l(ne.label),1)]),_:2},1024)]),_:2},1024)):(a(),vt(n(Us),{key:1,button:!0,detail:!1,class:Me(["modern-popover-item",{"child-item":ne.isChild}]),onClick:ae=>De(ne)},{default:Ke(()=>[de(n(nt),{slot:"start",icon:n(si),class:"add-icon"},null,8,["icon"]),e("span",yp,l(ne.label),1)]),_:2},1032,["class","onClick"]))],64))),128))]),_:1})],4)],4)):T("",!0)]))}}),Dp=oi(fp,[["__scopeId","data-v-027595e1"]]);export{Dp as S,Op as _,Mp as g};

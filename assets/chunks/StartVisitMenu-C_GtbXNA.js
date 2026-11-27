import{C as J,x as I,V as Zt,H as Jt,D as zs,S as Qt,o as a,c as o,k as re,l as Ze,I as n,aq as Gs,b as e,F as k,d as S,t as l,i as T,q as Re,a2 as Us,J as at,L as ot,p as js,e as Fe,f as ht,ap as Ws,au as Ys,M as qs,bH as Ks,aP as Xs,aS as Zs,aV as Js}from"../index-1dJPXL1s.js";import{m as Qs}from"./vue3-apexcharts-Dk4tAd41.js";import{a as ei,U as Ct,ay as ti,f as Pt,bA as si,aB as ii,a8 as ni,aU as ai,bz as oi,bB as li,ak as ri,K as ci}from"./index-Bx111SMv.js";import di from"./DemographicBar-B-lNjH3g.js";import{D as nt}from"./Alerts-ft61EleC.js";import{R as pi}from"./RadiologyHistory-2mJU84_Y.js";import{useDemographicsStore as es}from"./DemographicStore-BWuT9NZ0.js";import{O as bt,r as ui,v as mi}from"./GlobalPropertyStore-Bh59MqpD.js";import{E as y}from"./encounter_type-Uqhj2SI7.js";import{ConceptService as qt}from"./concept_service-Du_0C4Mo.js";import{UserService as gi}from"./user_service-xZSrP_82.js";import{u as Kt}from"./SelectedVisitStore-Da6RvERq.js";import{H as O}from"./service-R_oGaW89.js";/* empty css                                                                      *//* empty css                                                                            */import{toastWarning as Xe}from"./toasts-B9K7q7QE.js";import"./lodash-DyrGR4_s.js";import{F as le}from"./fluidBalanceChart-CceTgQEr.js";import{_ as vi}from"./_plugin-vue_export-helper-DlAUqK2U.js";const yi=()=>{const me=es(),U=Kt(),te=J(()=>ui(me.patient).some(i=>mi(i,U))),$=I("all"),L=I([]),B=I([]),Q=I([]),we=I(!1),$e=I(!1),he=I(!1),Pe=I(!1),ge=I(null),Me=new Map,Be=new Map,Ge=I(!1),Ie=I(null),R=I(!1),ve=I(null),ne=I(!1),_e=I(null),Te=I(!1),ae=I(null),X=I(!1),ce=I(null),Ve=I(!1),Ne=I(null),V=I(!1),Oe=I(null),Ue=I(!1),ye=I(null),ke=I(!1),De=I(null),He=I(!1),je=I(null),Qe=I(!1),We=I(null),H=I({}),et=i=>{H.value[i]=!H.value[i]},lt=J(()=>Pe.value||Ge.value||R.value||ne.value||Te.value||X.value||Ve.value||V.value||Ue.value||ke.value||He.value||Qe.value),rt=async()=>{await Ut("all")},tt=J(()=>{const i=[];return ge.value&&i.push({id:"triage",title:"Triage Information",icon:ei,color:"#ef4444"}),Ie.value&&i.push({id:"soapier",title:"SOAPIER Notes",icon:Ct,color:"#f43f5e"}),ve.value&&i.push({id:"monitoring_chart",title:"Monitoring Charts",icon:Ct,color:"#006401"}),_e.value&&i.push({id:"fluid_balance",title:"Fluid Balance & Stool Monitoring",icon:Ct,color:"#14b8a6"}),ae.value&&i.push({id:"primary_survey",title:"Primary Survey",icon:ti,color:"#8b5cf6"}),ce.value&&i.push({id:"sample_history",title:"SAMPLE History",icon:Pt,color:"#006401"}),Ne.value&&i.push({id:"secondary_survey",title:"Secondary Survey",icon:si,color:"#22c55e"}),Oe.value&&i.push({id:"diagnosis",title:"Diagnosis",icon:ii,color:"#f59e0b"}),(ye.value||te.value)&&i.push({id:"investigations",title:"Laboratory / Radiology Findings",icon:ni,color:"#006401"}),De.value&&i.push({id:"patient_management",title:"Patient Management Plan",icon:ai,color:"#14b8a6"}),je.value&&i.push({id:"continuation",title:"Continuation Notes",icon:Pt,color:"#64748b"}),We.value&&i.push({id:"disposition",title:"Disposition Notes",icon:oi,color:"#14b8a6"}),i}),ct=i=>{const t=(i||"").toLowerCase();return t.includes("presenting")?"Presenting Complaints":t.includes("surgical procedure")||t==="procedures"?"Past Surgical History":t.includes("family history")?"Family History":t.includes("allergy")||t.includes("allergen")?"Allergies":t.includes("smokes")||t.includes("smoking")||t.includes("alcohol intake")||t.includes("recreational drug")||t.includes("expected duration")?"Social History":t.includes("pregnancy")||t.includes("lnmp")||t.includes("gestational")||t.includes("parity")?"Gynecological History":t.includes("review of systems")||t.includes("severe respiratory")?"Review of Systems":t.includes("differential diagnosis")?"Working Differential Diagnosis":t.includes("notes")?"Investigations":t.includes("clerk")||t.includes("designation")||t.includes("signature")||t.includes("additional notes")?"Initial Management":t.includes("general condition")||t.includes("blood pressure")||t.includes("pulse")||t.includes("respiratory")||t.includes("temperature")||t.includes("eyes")||t.includes("mouth")||t.includes("neck")||t.includes("chest")||t.includes("endocrine examination")||t.includes("abdominal")||t.includes("motor response")||t.includes("verbal response")||t.includes("eye opening response")||t.includes("cranial")||t.includes("gross motor")||t.includes("sensation")||t.includes("pulsations")||t.includes("rectal")||t.includes("extremities")||t.includes("vaginal")?"Physical Examination":t.includes("condition")||t.includes("medication")||t.includes("treatment")||t.includes("reason for request")?"Past Medical History":"Other"},dt=i=>{const t=(i||"").toLowerCase();return t.includes("presenting complaints")||t.includes("presenting history")?"Presenting Complaints":t.includes("other medication")?"Past Medical History":t.includes("medication")||t.includes("drug")||t.includes("prescription")||t.includes("none")?"Drug History":t.includes("hiv")||t.includes("arv")||t.includes("health center")||t.includes("historical drug start date")?"Past Medical History":t.includes("surgical history")?"Past Surgical History":t.includes("allergy")||t.includes("allergen")||t.includes("allergic")||t.includes("hypersensitivity")?"Allergy":t.includes("intoxication")?"Intoxication":t.includes("social history")?"Social History":t.includes("family history")?"Family History":t.includes("review of systems")||t.includes("severe respiratory")||t.includes("skin infection")?"Review of Systems":t.includes("general")||t.includes("blood pressure")||t.includes("pulse")||t.includes("respiratory")||t.includes("temperature")||t.includes("oxygen")||t.includes("pupil")||t.includes("conjunctiva")||t.includes("oral")||t.includes("jvp")||t.includes("lymphadenopathy")||t.includes("trachea")||t.includes("expansion")||t.includes("apex")||t.includes("thrill heaves")||t.includes("auscultation")||t.includes("lung condition")||t.includes("lung position")||t.includes("palpation")||t==="condition"||t==="other"||t.includes("oedema")||t.includes("rash")||t.includes("herpes")||t.includes("neck stiffness")||t.includes("motor response")||t.includes("verbal response")||t.includes("eye opening response")||t.includes("visual field")||t.includes("eye movements")||t.includes("hearing")||t.includes("tongue")||t.includes("cough")||t.includes("power")||t.includes("tone")||t.includes("reflexes")||t.includes("plantars")||t.includes("sensation")||t.includes("coordination")||t.includes("gait")?"Physical Examination":t.includes("summary")?"Summary":t.includes("differential diagnosis")?"Differential Diagnosis":t.includes("assessment")||t.includes("additional notes")?"Investigations":t==="plan"?"Management Plan":"Other"},pt=i=>{const t=(i||"").toLowerCase();return t.includes("chief complaint")||t.includes("history of present illness")?"Complaints":t.includes("lnmp")||t.includes("edd")||t.includes("gestational")||t.includes("gravidity")||t.includes("parity")||t.includes("living children")||t.includes("menarche")||t.includes("menstrual")||t.includes("duration")||t.includes("abortion")||t.includes("ectopic")||t.includes("vaginal discharge")||t.includes("consistency")||t.includes("color")||t.includes("colour")||t.includes("odour")||t.includes("amount")||t.includes("contraceptive")||t.includes("side effects")||t.includes("cancer screening")||t.includes("history of stis")?"Obstetric And Gynaecology History":t.includes("hypertension")||t.includes("diabetes")||t.includes("tuberculosis")||t.includes("epilepsy")||t.includes("asthma")||t.includes("mental illness")||t.includes("blood transfusion")||t.includes("drug allergies")?"Medical History":t.includes("alcohol")||t.includes("smok")||t.includes("recreational drug")?"Habits":t.includes("oxygen")||t.includes("pulse")||t.includes("blood pressure")||t.includes("respiratory")||t.includes("temperature")||t.includes("blood glucose")||t.includes("weight")||t.includes("height")?"Vital Signs":t.includes("general condition")||t.includes("pallor")||t.includes("chest")||t.includes("abdomen")||t.includes("vaginal")||t.includes("extremities")?"General Examination":t.includes("impression")?"Impression":t==="plan"||t.includes("immediate intervention")?"Plan":"Other"},W=i=>i?.concept_name||i?.concept_id||"",Se=i=>i!=null&&`${i}`.trim()!=="",oe=i=>{if(!i)return"";const t=i?.value_coded_name??i?.value_coded_display??i?.valueCodedName??i?.valueCodedDisplay??i?.value_coded?.name??i?.value_coded?.label??i?.value_coded?.value;if(Se(t))return t;const r=i?.value_text??i?.valueText;if(Se(r))return r;const d=i?.value_numeric??i?.valueNumeric??i?.value_number??i?.valueNumber;if(Se(d)){const A=i?.value_modifier??i?.valueModifier,N=Se(A)?` ${A}`:"";return`${d}${N}`}const m=i?.value_datetime??i?.valueDatetime??i?.valueDateTime;if(Se(m))return O.toStandardHisDisplayFormat(m);const u=i?.value_date??i?.valueDate;if(Se(u))return O.toStandardHisDisplayFormat(u);const v=i?.value_boolean??i?.valueBoolean;if(Se(v))return String(v);if(Se(i?.value))return i.value;const w=i?.value_coded??i?.valueCoded;return Se(w)?w:""},h=async i=>{const t=i.filter(m=>{const u=W(m).toLowerCase();return u.includes("differential diagnosis")||u.includes("attempted/ differential diagnosis")}),r=Array.from(new Set(t.map(m=>Number(m?.value_coded)).filter(m=>Number.isFinite(m)&&m>0)));if(r.length===0)return i;const d=new Map;return await Promise.all(r.map(async m=>{const u=await qt.getConceptName(m);u&&d.set(m,u)})),i.map(m=>{const u=Number(m?.value_coded);return d.has(u)&&!m?.value_text&&!m?.value_coded_name?{...m,value_text:d.get(u)}:m})},Ye=i=>{const t=i.filter(u=>W(u).toLowerCase()==="presenting complaints"),r=i.filter(u=>W(u).toLowerCase()==="presenting history"),m=[...i.filter(u=>{const v=W(u).toLowerCase();return v!=="presenting complaints"&&v!=="presenting history"})];if(t.length>0){const u=t.map(v=>String(oe(v)).trim()).filter(Boolean);u.length>0&&m.push({...t[0],concept_name:"Presenting Complaints",value_text:u.join(", ")})}if(r.length>0){const u=r.reduce((v,w)=>{const A=new Date(v?.obs_datetime||0).getTime();return new Date(w?.obs_datetime||0).getTime()>A?w:v});m.push(u)}return m},M=(i,t)=>{const r=(i||[]).find(d=>{const m=de(W(d));return t.some(u=>u(m))});return r?String(oe(r)??"").trim():""},ut=J(()=>{const i=Le.value?.["Physical Examination"]||[];return{generalCondition:M(i,[t=>t.includes("general condition")]),temperature:M(i,[t=>t==="temperature"||t.includes("temperature")]),pulseRate:M(i,[t=>t.includes("pulse rate")||t==="pulse rate"||t==="pulse"]),bloodPressure:M(i,[t=>t.includes("blood pressure")]),respiratoryRate:M(i,[t=>t.includes("respiratory rate")||t.includes("respiratory")]),eyes:M(i,[t=>t==="eyes"||t.includes("eyes")]),mouth:M(i,[t=>t==="mouth"||t.includes("mouth")]),neck:M(i,[t=>t==="neck"||t.includes("neck")]),chestExamination:M(i,[t=>t.includes("chest examination")]),endocrineExamination:M(i,[t=>t.includes("endocrine examination")]),abdominalExamination:M(i,[t=>t.includes("abdominal examination")]),motorResponse:M(i,[t=>t.includes("motor response")]),verbalResponse:M(i,[t=>t.includes("verbal response")]),eyeOpeningResponse:M(i,[t=>t.includes("eye opening response")||t.includes("eye response")]),cranialNerves:M(i,[t=>t.includes("cranial")]),grossMotor:M(i,[t=>t.includes("gross motor")]),sensation:M(i,[t=>t==="sensation"||t.includes("sensation")]),pulsations:M(i,[t=>t.includes("pulsations")]),rectalExamination:M(i,[t=>t.includes("rectal examination")]),extremities:M(i,[t=>t==="extremities"||t.includes("extremities")])}}),st=J(()=>{const i=Le.value?.["Initial Management"]||[];return{clerkName:M(i,[t=>t.includes("clerk name")]),designation:M(i,[t=>t.includes("designation")]),signature:M(i,[t=>t.includes("signature")])}}),_t=J(()=>{const i=Le.value?.["Presenting Complaints"]||[];return{complaints:M(i,[t=>t==="presenting complaints"||t.includes("presenting complaints")]),history:M(i,[t=>t==="presenting history"||t.includes("presenting history")])}}),qe=J(()=>{const i=Le.value?.["Past Medical History"]||[];return pe(i)}),se=i=>{const t=[],r=[];return i.forEach((d,m)=>{(m%2===0?t:r).push(d)}),{left:t,right:r}},s=J(()=>{const i=Le.value?.["Review of Systems"]||[];return pe(i)}),E=J(()=>se(s.value)),F=J(()=>{const i=Le.value?.["Past Surgical History"]||[];return pe(i)}),p=J(()=>{const i=Le.value?.["Family History"]||[];return pe(i)}),g=J(()=>{const i=Le.value?.["Social History"]||[];return pe(i)}),j=J(()=>{const i=Le.value?.["Gynecological History"]||[];return pe(i)}),xe=J(()=>{const i=gt.value?.["Presenting Complaints"]||[];return{complaints:M(i,[t=>t==="presenting complaints"||t.includes("presenting complaints")]),history:M(i,[t=>t==="presenting history"||t.includes("presenting history")])}}),ss=J(()=>{const i=gt.value?.["Physical Examination"]||[],t=c=>M(i,c),r=t([c=>c==="auscultation"||c.includes("auscultation")&&!c.includes("lung")]),d=t([c=>c==="region"||c.includes("region")]),m=t([c=>c==="inspection"||c.includes("inspection")]),u=t([c=>c.includes("light palpation")]),v=t([c=>c.includes("deep palpation")]),w=t([c=>c==="auscultation_lung"||c.includes("auscultation")&&c!=="auscultation"]),A=t([c=>c.includes("shifting dullness")]),N=t([c=>c.includes("fluid thrill")]);return{general:t([c=>c==="general"||c.includes("general")]),temperature:t([c=>c.includes("temperature")]),pulseRate:t([c=>c==="pulse rate"||c.includes("pulse rate")]),systolic:t([c=>c.includes("systolic")]),diastolic:t([c=>c.includes("diastolic")]),respiratoryRate:t([c=>c.includes("respiratory rate")||c==="respiratory rate"]),oxygenSaturation:t([c=>c.includes("oxygen saturation")]),pupilsSymmetrical:t([c=>c.includes("pupils symmetrical")]),conjunctiva:t([c=>c.includes("conjunctiva")]),oralKs:t([c=>c.includes("oral ks")]),oralThrush:t([c=>c.includes("oral thrush")||c.includes("candidosis")]),lymphadenopathy:t([c=>c.includes("lymphadenopathy")]),headNeckOther:t([c=>c==="other"]),symmetricalExpansion:t([c=>c.includes("symmetrical expansion")]),symmetricalExpansionDescription:t([c=>c==="description"||c.includes("description")&&!c.includes("additional")]),apexBeat:t([c=>c.includes("apex beat")]),thrillHeaves:t([c=>c.includes("thrill")||c.includes("thrill heaves")]),auscultationHeart:r,lungCondition:t([c=>c.includes("lung condition")||c==="condition"]),lungPosition:t([c=>c.includes("lung position")]),abdomenRegion:d,abdomenInspection:m,abdomenLightPalpation:u,abdomenDeepPalpation:v,abdomenAuscultation:w,abdomenShiftingDullness:A,abdomenFluidThrill:N,oedema:t([c=>c.includes("oedema")]),skinRash:t([c=>c.includes("skin rash")||c==="rash"]),herpesScar:t([c=>c.includes("herpes zoster")]),neckStiffness:t([c=>c.includes("neck stiffness")]),eyeOpeningResponse:t([c=>c.includes("eye opening response")]),verbalResponse:t([c=>c.includes("verbal response")]),motorResponse:t([c=>c.includes("motor response")]),cnPupil:t([c=>c==="pupil"||c.includes("pupil:")||c.includes("pupil")]),cnVisualField:t([c=>c.includes("visual field")]),cnEyeMovements:t([c=>c.includes("eye movements")&&c.includes("nystagmus")]),cnFacial:t([c=>c.includes("facial")||c.includes("eye movements/sensation")]),cnHearing:t([c=>c.includes("hearing")]),cnTongue:t([c=>c.includes("tongue movement")||c.includes("tongue")]),cnCoughGag:t([c=>c.includes("cough")||c.includes("gag")]),pnPower:t([c=>c==="power"||c.includes("power")]),pnTone:t([c=>c==="tone"||c.includes("tone")]),pnReflexes:t([c=>c.includes("reflexes")]),pnPlantars:t([c=>c.includes("plantars")]),pnSensation:t([c=>c==="sensation"||c.includes("sensation")&&!c.includes("facial")]),pnCoordination:t([c=>c.includes("coordination")])}}),mt=i=>{const t=i?.children??i?.child??i?.groupMembers??[];return Array.isArray(t)?t:[]},It=i=>i.flatMap(t=>mt(t).map(r=>({zone:String(oe(r)??"").trim(),findings:mt(r).map(d=>({title:W(d),value:String(oe(d)??"").trim()})).filter(d=>d.title&&d.value)}))).filter(t=>t.zone&&t.findings.length>0),is=J(()=>{const i=Q.value||[],t=r=>i.filter(d=>mt(d).length>0&&r(de(W(d))));return{respiratory:It(t(r=>r.includes("lung position"))),abdomen:It(t(r=>r==="palpation"))}}),Tt=J(()=>{const i=gt.value?.["Review of Systems"]||[];return pe(i)}),ns=J(()=>se(Tt.value)),kt=i=>{const t=new Map;return i.forEach(r=>{const d=String(W(r));if(!d)return;const m=new Date(r?.obs_datetime||0).getTime(),u=t.get(d),v=u?new Date(u?.obs_datetime||0).getTime():-1;(!u||m>=v)&&t.set(d,r)}),Array.from(t.values())},as=i=>[...i||[]].sort((t,r)=>new Date(r?.obs_datetime||0).getTime()-new Date(t?.obs_datetime||0).getTime()),os=i=>{const t=new Set;return(i||[]).filter(r=>{if(mt(r).length>0)return!0;const d=`${W(r)}::${de(oe(r))}`;return t.has(d)?!1:(t.add(d),!0)})},xt=(i,t=[])=>{const r={};for(const d of t)i[d]&&(r[d]=i[d]);return Object.entries(i).forEach(([d,m])=>{r[d]||(r[d]=m)}),r},Le=J(()=>{const i={},t=Ye(L.value);for(const r of t){const d=ct(r?.concept_name||r?.concept_id||"");i[d]||(i[d]=[]),i[d].push(r)}return xt(i,["Presenting Complaints","Past Medical History","Past Surgical History","Family History","Social History","Allergies","Gynecological History","Review of Systems","Physical Examination","Working Differential Diagnosis","Investigations","Initial Management","Other"])}),gt=J(()=>{const i={},t=Ye(Q.value);for(const r of t){const d=dt(r?.concept_name||r?.concept_id||"");i[d]||(i[d]=[]),i[d].push(r)}return xt(i,["Presenting Complaints","Drug History","Past Medical History","Past Surgical History","Social History","Family History","Allergy","Intoxication","Review of Systems","Physical Examination","Summary","Differential Diagnosis","Investigations","Management Plan"])}),ls=J(()=>{const i={};for(const t of B.value){const r=pt(t?.concept_name||t?.concept_id||"");i[r]||(i[r]=[]),i[r].push(t)}return xt(i,["Complaints","Obstetric And Gynaecology History","Medical History","Habits","Vital Signs","General Examination","Impression","Plan"])}),rs=async()=>{we.value=!0;try{const t=(await Z(y.SURGICAL_NOTES_TEMPLATE)).flatMap(u=>u.obs||[]),r=t.map(u=>O.toStandardHisFormat(u?.obs_datetime)).filter(Boolean).sort().pop(),d=r?t.filter(u=>O.toStandardHisFormat(u?.obs_datetime)===r):[],m=await h(d);L.value=kt(m)}catch(i){console.error("Failed to load surgical notes records:",i),L.value=[]}finally{we.value=!1}},cs=async()=>{he.value=!0;try{const t=(await Z(y.MEDICAL_IN_PATIENT)).flatMap(d=>d.obs||[]),r=await h(as(t));Q.value=os(r)}catch(i){console.error("Failed to load medical inpatient records:",i),Q.value=[]}finally{he.value=!1}},ds=async()=>{$e.value=!0;try{const t=(await Z(y.GYNEACOLOGY_WARD)).flatMap(u=>u.obs||[]),r=t.map(u=>O.toStandardHisFormat(u?.obs_datetime)).filter(Boolean).sort().pop(),d=r?t.filter(u=>O.toStandardHisFormat(u?.obs_datetime)===r):[],m=await h(d);B.value=kt(m)}catch(i){console.error("Failed to load gyneacology ward records:",i),B.value=[]}finally{$e.value=!1}},Lt={all:"Clinical Notes",surgical:"Surgical Notes",gyneacology:"Gyneacology Ward",medical:"Medical Inpatient"},St=async()=>{await Zt(),await new Promise(i=>{if(typeof window>"u"||!window.requestAnimationFrame){i();return}window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>i()))})},Rt=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Mt=()=>{const i=window.open("","_blank","width=900,height=1000");return i?(i.document.open(),i.document.write("<!doctype html><html><head><title>Preparing clinical notes...</title></head><body>Preparing clinical notes...</body></html>"),i.document.close(),i):(Xe("Please allow pop-ups to download clinical notes."),null)},Ot=i=>{i.querySelectorAll("button, .clinical-notes-actions, .navigation-arrows, .scroll-indicator, .menu-trigger, .expand-icon, .refresh-btn, .actions, .demographics-actions, .three-dot-menu, .patient-card-menu, ion-icon, ion-button").forEach(t=>t.remove()),i.querySelectorAll(".apexcharts-toolbar, .apexcharts-menu, .apexcharts-zoom-icon, .apexcharts-zoomin-icon, .apexcharts-zoomout-icon, .apexcharts-pan-icon, .apexcharts-reset-icon, .apexcharts-menu-icon").forEach(t=>t.remove()),i.querySelectorAll(".apexcharts-legend").forEach(t=>t.remove())},ps=()=>{const i=document.querySelector(".clinical-notes-section"),t=i?.querySelector(".clinical-notes-demographics")?.cloneNode(!0),r=i?.querySelector(".clinical-notes-list")?.cloneNode(!0);if(t&&Ot(t),r&&Ot(r),!r)return"";const d=Lt[$.value],m=!!r.querySelector(".clinical-notes-list-header");return`
            <main class="clinical-notes-print-document">
                ${t?`<section class="clinical-notes-print-demographics">${t.innerHTML}</section>`:""}
                ${m?"":`<h1 class="notes-print-title">${Rt(d)}</h1>`}
                ${r.outerHTML}
            </main>
        `},us=(i,t)=>`
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>${Rt(t)}</title>
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
`,Dt=async i=>{await St();const t=ps();if(!t.trim()){i.close(),Xe("No clinical notes content available to download.");return}const r=Lt[$.value];i.document.open(),i.document.write(us(t,r)),i.document.close()},wt=async()=>{const i=Mt();i&&await Dt(i)},ms=async()=>{if(!tt.value.length){Xe("No clinical notes records available to download.");return}const i=Mt();if(!i)return;const t={...H.value};H.value=tt.value.reduce((r,d)=>(r[d.id]=!0,r),{...H.value});try{await St(),typeof window<"u"&&window.dispatchEvent(new Event("resize")),await St(),await Dt(i)}finally{H.value=t}},gs=async()=>{if($.value==="all"){await ms();return}if($.value==="surgical"){if(!L.value.length){Xe("No surgical notes records available to download.");return}await wt();return}if($.value==="medical"){if(!Q.value.length){Xe("No medical inpatient records available to download.");return}await wt();return}if($.value==="gyneacology"){if(!B.value.length){Xe("No gyneacology ward records available to download.");return}await wt();return}Xe("Please select Surgical Notes, Gyneacology, Medical Inpatient, or All to download.")},de=i=>String(i??"").trim().toLowerCase(),Z=async i=>{const t=await bt.getObsByEncounterId(i),r=Kt();return r.hasSelection?t.map(d=>({...d,obs:(d?.obs||[]).filter(m=>r.matchesObs(m))})).filter(d=>(d?.obs||[]).length>0):t},Y=i=>{if(!Array.isArray(i)||i.length===0)return null;const t=r=>{const d=r?.encounter_datetime;if(d){const u=new Date(d).getTime();if(Number.isFinite(u))return u}const m=(r?.obs||[]).map(u=>new Date(u?.obs_datetime||0).getTime()).filter(u=>Number.isFinite(u)&&u>0);return m.length?Math.max(...m):-1};return i.reduce((r,d)=>t(d)>t(r)?d:r,i[0])},Ae=i=>{const t=new Date(i);if(!Number.isFinite(t.getTime()))return"";const r=t.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),d=t.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0});return`${r} at ${d}`},Ee=async i=>{const t=Number(i);if(!Number.isFinite(t)||t<=0)return"Unknown";if(Me.has(t))return Me.get(t);try{const r=await gi.getUserByID(t),d=r?.name||r?.username||`User #${t}`;return Me.set(t,d),d}catch{const d=`User #${t}`;return Me.set(t,d),d}},D=(i,t)=>{const r=(i||[]).find(d=>t(de(W(d))));return r?String(oe(r)??"").trim():""},vs=i=>i?.value_coded??i?.valueCoded??i?.answer_concept_id??i?.value?.concept_id??i?.value?.conceptId??i?.value?.concept?.concept_id??i?.value?.concept?.id,it=i=>i?bt.flattenObservationTree(Array.isArray(i?.obs)?i.obs:[]):[],Ht=i=>{const t=i?.encounter_datetime||i?.obs?.[0]?.obs_datetime;if(!t)return"";try{return O.toStandardHisFormat(t)}catch{return""}},Nt=(i,t)=>{const r=Array.isArray(i)?i.filter(Boolean):[],d=t?r.filter(m=>Ht(m)===t):[];return Y(d.length?d:r)},At=i=>{const t=i?.obs||i?.children||i?.child||i?.groupMembers||[];return Array.isArray(t)?t:[]},Ft=i=>i.includes("workstation")||i==="location"||i.includes("patient care area")||i.includes("triage result")||i.includes("triage category"),ys=i=>/\b(hour|hours|day|days|week|weeks|month|months|year|years|minute|minutes)\b/i.test(i),vt=i=>/^\d+(\.\d+)?$/.test(i.trim()),$t=async i=>{const t=String(i??"").trim(),r=Number(t);if(!t||!Number.isFinite(r)||r<=0)return"";if(Be.has(r))return Be.get(r)||"";try{const d=String(await qt.getConceptName(r)||"").trim();return Be.set(r,d),d}catch{return Be.set(r,""),""}},Bt=async i=>{const t=String(i??"").trim();return!t||!vt(t)?t:await $t(t)||t},fs=(i,t)=>{const r=String(i??"").trim(),d=String(t??"").trim();return r?d&&r.toLowerCase().includes(d.toLowerCase())?r:d?`${r} ${d}`:r:""},Vt=i=>!i||vt(i)||Ft(i)||i==="presenting complaints"||i==="presenting complaint"||i.includes("duration")||i.includes("workstation"),bs=async i=>{const t=Array.isArray(i?.obs)?i.obs:[],r=[],d=async u=>{const v=String(await Bt(W(u))).trim(),w=de(v),N=String(oe(u)??"").trim().split(" - ")[0].trim(),c=vs(u),b=N&&vt(N)&&await $t(c??N)||N;return!b||ys(b)||vt(b)?Vt(w)?"":v:b},m=u=>{const v=String(u??"").trim();v&&!r.includes(v)&&r.push(v)};for(const u of t){const v=de(await Bt(W(u)));if(!v||Ft(v))continue;const w=r.length;(await Promise.all(At(u).map(d))).filter(Boolean).forEach(m),r.length===w&&m(await d(u))}return r.length||(await Promise.all(it(i).map(d))).filter(Boolean).forEach(m),r.length?r.map((u,v)=>`(${v+1}). ${u}`).join(", "):"N/A"},hs=(i,t)=>{const r=D(i,f=>f.includes("temperature")),d=D(i,f=>f==="pulse"||f.includes("pulse rate")),m=D(i,f=>f.includes("heart rate")),u=D(i,f=>f.includes("systolic")),v=D(i,f=>f.includes("diastolic")),w=D(i,f=>f.includes("respiratory")),A=D(i,f=>f.includes("oxygen")||f.includes("spo2")||f.includes("sao2")||f==="sao2"),N=D(i,f=>f.includes("glucose")&&!f.includes("unit")),c=D(i,f=>f.includes("glucose")&&f.includes("unit"))||(N?"mmol/l":""),b=D(i,f=>f==="avpu"||f.includes("avpu"))||D(t,f=>f==="avpu"||f.includes("avpu")||f.includes("level of consciousness")),C=[];return r&&C.push(`Temperature: ${r} °C`),d&&C.push(`Pulse: ${d} bpm`),m&&C.push(`Heart: ${m} bpm`),(u||v)&&C.push(`BP: ${u||"-"}${v?`/${v}`:""} mmHg`),w&&C.push(`Respiratory: ${w} breaths/min`),A&&C.push(`Oxygen: ${A} %`),N&&C.push(`Glucose: ${fs(N,c)}`),b&&C.push(`AVPU: ${b}`),C.length?C.join(" "):"N/A"},zt=(i,t)=>i?.obs_datetime||i?.obsDatetime||i?.date_created||t,_s=i=>{const t=O.toStandardHisDisplayFormat(i),r=O.toStandardHisTimeFormat(i);return[t,r].filter(Boolean).join(" ")},ks=i=>{const t=String(oe(i)??"").trim(),r=Number.parseFloat(t);return Number.isFinite(r)?r:null},xs=async i=>{const t={systolic:[],diastolic:[],temperature:[],heartRate:[],respiratoryRate:[],oxygenSaturation:[],glucose:[],peakExpiratoryFlowRate:[],urineDipstickKetones:[]};for(const d of i||[]){const u=(Array.isArray(d?.obs)?d.obs:[]).filter(v=>de(W(v))==="triage result"&&At(v).length>0);for(const v of u){const w=bt.flattenObservationTree(At(v)),A=zt(v,d?.encounter_datetime);for(const N of w){const c=de(W(N)),b=ks(N);if(b===null)continue;const C=zt(N,A),f=C?_s(C):"";f&&(c.includes("systolic")?t.systolic.push({x:f,y:b}):c.includes("diastolic")?t.diastolic.push({x:f,y:b}):c.includes("temperature")?t.temperature.push({x:f,y:b}):c.includes("heart rate")?t.heartRate.push({x:f,y:b}):c.includes("respiratory")?t.respiratoryRate.push({x:f,y:b}):c.includes("oxygen")||c.includes("spo2")||c.includes("sao2")?t.oxygenSaturation.push({x:f,y:b}):c.includes("glucose")?t.glucose.push({x:f,y:b}):c.includes("peak expiratory")?t.peakExpiratoryFlowRate.push({x:f,y:b}):c.includes("urine")&&c.includes("ketone")&&t.urineDipstickKetones.push({x:f,y:b}))}}}return Object.values(t).some(d=>d.length>0)?{charts:[{key:"bloodPressure",title:"Blood Pressure (BP)",series:[{name:"Systolic",data:t.systolic},{name:"Diastolic",data:t.diastolic}],colors:["#2563eb","#e11d48"]},{key:"temperature",title:"Temperature (°C)",series:[{name:"Temperature",data:t.temperature}],colors:["#8b5cf6"]},{key:"heartRate",title:"Heart Rate (bpm)",series:[{name:"Heart Rate",data:t.heartRate}],colors:["#14b8a6"]},{key:"respiratoryRate",title:"Respiratory Rate (breaths/min)",series:[{name:"Respiratory Rate",data:t.respiratoryRate}],colors:["#db2777"]},{key:"oxygenSaturation",title:"Oxygen Saturation (O₂ Sat)",series:[{name:"Oxygen Saturation",data:t.oxygenSaturation}],colors:["#f59e0b"]},{key:"glucose",title:"Glucose (mmol/L)",series:[{name:"Glucose",data:t.glucose}],colors:["#0891b2"]},{key:"peakExpiratoryFlowRate",title:"Peak Expiratory Flow Rate (L/min)",series:[{name:"PEFR",data:t.peakExpiratoryFlowRate}],colors:["#16a34a"]},{key:"urineDipstickKetones",title:"Urine Dipstick Ketones",series:[{name:"Ketones",data:t.urineDipstickKetones}],colors:["#7c3aed"]}]}:null},Ss=async()=>{R.value=!0,ve.value=null;try{const i=await Z(y.VITALS);ve.value=await xs(i||[])}catch(i){console.error("Failed to load monitoring chart records:",i),ve.value=null}finally{R.value=!1}},ws=[le.phala,le.water,le.oralFluids,le.ivFluids],Ns=[le.urineVolume,le.urineAppearance,le.vomitVolume,le.vomitColour],As=[le.bristolType,le.stoolColour,le.sampleSent,le.labPanel],Et=(i,t)=>t.map(r=>{const d=(i||[]).filter(u=>de(W(u))===de(r)),m=yt(d.map(u=>oe(u)));return m.length===0?null:{title:r,value:m.join(", ")}}).filter(Boolean),Gt=i=>i.reduce((t,r)=>{const d=Number.parseFloat(String(r.value));return Number.isFinite(d)?t+d:t},0),Es=async i=>{const t=(i||[]).filter(Boolean).map(r=>{const d=it(r),m=D(d,z=>z===de(le.entryDate)),u=D(d,z=>z===de(le.entryTime)),v=Et(d,ws),w=Et(d,Ns),A=Et(d,As),N=D(d,z=>z===de(le.comments)),c=Gt(v),b=Gt(w.filter(z=>[le.urineVolume,le.vomitVolume].includes(z.title))),C=c-b,f=new Date(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime||0).getTime();return{id:r?.encounter_id||r?.encounterId||`${m}-${u}-${f}`,entryDate:m||O.toStandardHisDisplayFormat(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime),entryTime:u||O.toStandardHisTimeFormat(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime),intake:v,output:w,stool:A,comments:N,totalIntake:c,totalOutput:b,balance:C,balanceLabel:`${C>0?"+":""}${C} mL`,createdAt:f}}).filter(r=>r.intake.length||r.output.length||r.stool.length||r.comments).sort((r,d)=>d.createdAt-r.createdAt);return t.length?{entries:t}:null},Cs=async()=>{ne.value=!0,_e.value=null;try{const i=await Z(y.FLUID_BALANCE_AND_STOOL_MONITORING);_e.value=await Es(i||[])}catch(i){console.error("Failed to load fluid balance and stool monitoring records:",i),_e.value=null}finally{ne.value=!1}},Ps=async()=>{Pe.value=!0,ge.value=null;try{const[i,t,r,d,m]=await Promise.all([Z(y.TRIAGE_RESULT),Z(y.TRIAGE_PRESENTING_COMPLAINTS),Z(y.PRESENTING_COMPLAINTS),Z(y.VITALS),Z(y.CONSCIOUSNESS)]),u=[...t||[],...r||[]],v=Y(i||[]),w=Y([Y(u),Y(d||[]),Y(m||[])].filter(Boolean)),A=v||w;if(!A)return;const N=Ht(A),c=Nt(u,N),b=Nt(d||[],N),C=Nt(m||[],N),f=it(v),z=it(b),G=it(C),q=await bs(c),ue=hs(z,G),ee=D(f,be=>be.includes("triage")&&(be.includes("category")||be.includes("result")||be.includes("cat")))||"N/A",K=D(f,be=>be.includes("patient care area"))||D(f,be=>be==="location")||"N/A",fe=v?.provider_id||v?.provider?.id||v?.creator||A?.provider_id||A?.provider?.id||A?.creator,P=await Ee(fe),x=Ae(v?.encounter_datetime||A?.encounter_datetime||A?.obs?.[0]?.obs_datetime),ie=x?`created by ${P} on ${x}.`:`created by ${P}.`;ge.value={presentingComplaints:q,vitalSigns:ue,triageCategory:ee,patientCareArea:K,createdByLine:ie}}catch(i){console.error("Failed to load triage information:",i),ge.value=null}finally{Pe.value=!1}},yt=i=>{const t=(i||[]).map(r=>String(r??"").trim()).filter(Boolean);return Array.from(new Set(t))},pe=(i,t)=>{const r=t?.flattenChildren?bt.flattenObservationTree(i||[]):i||[];return kt(r).map(m=>{const u=String(W(m)||"").trim()||"Observation",v=String(oe(m)??"").trim();return v?{title:u,value:v}:null}).filter(Boolean)},Is=async()=>{Te.value=!0,ae.value=null;try{const i=[y.AIRWAY_ASSESSMENT,y.BREATHING_ASSESSMENT,y.CIRCULATION_ASSESSMENT,y.DISABILITY_ASSESSMENT,y.EXPOSURE_ASSESSMENT],t=await Promise.all(i.map(b=>Z(b))),r=new Map(i.map((b,C)=>[b,t[C]||[]])),d=t.flat(),m=Y(d);if(!m)return;const u=O.toStandardHisFormat(m?.encounter_datetime)||"",v=[{id:y.AIRWAY_ASSESSMENT,title:"Airway"},{id:y.BREATHING_ASSESSMENT,title:"Breathing"},{id:y.CIRCULATION_ASSESSMENT,title:"Circulation"},{id:y.DISABILITY_ASSESSMENT,title:"Disability"},{id:y.EXPOSURE_ASSESSMENT,title:"Exposure"}],w={};for(const b of v){const C=r.get(b.id)||[],z=(u?C.filter(q=>O.toStandardHisFormat(q?.encounter_datetime)===u):C).flatMap(q=>q?.obs||[]),G=pe(z);G.length&&(w[b.title]=G)}const A=await Ee(m?.provider_id),N=Ae(m?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;ae.value={sections:w,createdByLine:c}}catch(i){console.error("Failed to load primary survey:",i),ae.value=null}finally{Te.value=!1}},Ts=async()=>{X.value=!0,ce.value=null;try{const i=[y.ALLERGIES,y.REVIEW_OF_SYSTEMS,y.MEDICAL_HISTORY,y.OBSTETRIC_HISTORY,y.SUMMARY_ASSESSMENT,y.PRESCRIPTION,y.PRESENTING_COMPLAINTS,y.TRIAGE_PRESENTING_COMPLAINTS],t=await Promise.all(i.map(ee=>Z(ee))),r=new Map(i.map((ee,K)=>[ee,t[K]||[]])),d=t.flat(),m=Y(d);if(!m)return;const u=O.toStandardHisFormat(m?.encounter_datetime)||"",v=(ee,K)=>{if(!K.length)return ee;const fe=K.map(P=>P.toLowerCase());return ee.filter(P=>{const x=(P.title||"").toLowerCase();return fe.some(ie=>x.includes(ie))})},w=async(ee,K)=>{const fe=u?ee.filter(Ce=>O.toStandardHisFormat(Ce?.encounter_datetime)===u):ee,P=Y(fe),x=fe.flatMap(Ce=>Ce?.obs||[]);let ie=pe(x,{flattenChildren:K?.flattenChildren});K?.filterTitleIncludes?.length&&(ie=v(ie,K.filterTitleIncludes));const be=await Ee(P?.provider_id),Ke=Ae(P?.encounter_datetime),ze=Ke?`${be} ${Ke}`:be;return{items:ie,createdByLine:ze?` ${ze}`:""}},A=await w([...r.get(y.PRESENTING_COMPLAINTS)||[],...r.get(y.TRIAGE_PRESENTING_COMPLAINTS)||[]],{flattenChildren:!0}),N=await w(r.get(y.ALLERGIES)||[]),c=await w(r.get(y.PRESCRIPTION)||[],{filterTitleIncludes:["medication history"]}),b=r.get(y.MEDICAL_HISTORY)||[],C=r.get(y.OBSTETRIC_HISTORY)||[],f=[...b,...C],z=await w(f),G=await w(r.get(y.REVIEW_OF_SYSTEMS)||[]),q=r.get(y.SUMMARY_ASSESSMENT)||[],ue=await w(q,{filterTitleIncludes:["last meal","meal"]});ce.value={cards:{symptoms:A,events:G,allergies:N,medications:c,priorConditions:z,lastMeal:ue}}}catch(i){console.error("Failed to load SAMPLE history:",i),ce.value=null}finally{X.value=!1}},Ls=async()=>{Ve.value=!0,Ne.value=null;try{const i=[y.GENERAL_INFORMATION,y.HEAD_AND_NECK_ASSESSMENT,y.CHEST_ASSESSMENT,y.ABDOMEN_AND_PELVIS_ASSESSMENT,y.EXTREMITIES_ASSESSMENT,y.NEUROLOGICAL_EXAMINATION],t=await Promise.all(i.map(b=>Z(b))),r=new Map(i.map((b,C)=>[b,t[C]||[]])),d=t.flat(),m=Y(d);if(!m)return;const u=O.toStandardHisFormat(m?.encounter_datetime)||"",v=[{id:y.GENERAL_INFORMATION,title:"General Information"},{id:y.HEAD_AND_NECK_ASSESSMENT,title:"Head and Neck"},{id:y.CHEST_ASSESSMENT,title:"Chest"},{id:y.ABDOMEN_AND_PELVIS_ASSESSMENT,title:"Abdomen and Pelvis"},{id:y.EXTREMITIES_ASSESSMENT,title:"Extremities"},{id:y.NEUROLOGICAL_EXAMINATION,title:"Neurological"}],w={};for(const b of v){const C=r.get(b.id)||[],z=(u?C.filter(q=>O.toStandardHisFormat(q?.encounter_datetime)===u):C).flatMap(q=>q?.obs||[]),G=pe(z);G.length&&(w[b.title]=G)}const A=await Ee(m?.provider_id),N=Ae(m?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;Ne.value={sections:w,createdByLine:c}}catch(i){console.error("Failed to load secondary survey:",i),Ne.value=null}finally{Ve.value=!1}},Rs=async()=>{V.value=!0,Oe.value=null;try{const i=await Z(y.OUTPATIENT_DIAGNOSIS),t=Y(i);if(!t)return;const r=O.toStandardHisFormat(t?.encounter_datetime)||"",m=(r?i.filter(b=>O.toStandardHisFormat(b?.encounter_datetime)===r):i).flatMap(b=>b?.obs||[]),u=await h(m),v={},w=pe(u);w.length&&(v["Outpatient Diagnosis"]=w);const A=await Ee(t?.provider_id),N=Ae(t?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;Oe.value={sections:v,createdByLine:c}}catch(i){console.error("Failed to load diagnosis:",i),Oe.value=null}finally{V.value=!1}},Ms=async()=>{Ue.value=!0,ye.value=null;try{const i=[y.BEDSIDE_INVESTIGATION_PLAN,y.LAB_ORDERS_PLAN],t=await Promise.all(i.map(N=>Z(N))),r=new Map(i.map((N,c)=>[N,t[c]||[]])),d=t.flat(),m=Y(d);if(!m)return;const u=O.toStandardHisFormat(m?.encounter_datetime)||"",v=async N=>{const c=u?N.filter(ue=>O.toStandardHisFormat(ue?.encounter_datetime)===u):N,b=Y(c),C=c.flatMap(ue=>ue?.obs||[]),f=pe(C),z=await Ee(b?.provider_id),G=Ae(b?.encounter_datetime),q=G?`${z} ${G}`:z;return{items:f,createdByLine:q?` ${q}`:""}},w=await v(r.get(y.LAB_ORDERS_PLAN)||[]),A=await v(r.get(y.BEDSIDE_INVESTIGATION_PLAN)||[]);ye.value={cards:{labOrdersPlan:w,bedsidePlan:A}}}catch(i){console.error("Failed to load laboratory / radiology findings:",i),ye.value=null}finally{Ue.value=!1}},Os=async()=>{ke.value=!0,De.value=null;try{const i=[y.NON_PHARMACOLOGICAL,y.PATIENT_CARE_AREA,y.PRESCRIPTION],t=await Promise.all(i.map(c=>Z(c))),r=new Map(i.map((c,b)=>[c,t[b]||[]])),d=t.flat(),m=Y(d);if(!m)return;const u=O.toStandardHisFormat(m?.encounter_datetime)||"",v=async(c,b)=>{const C=u?c.filter(K=>O.toStandardHisFormat(K?.encounter_datetime)===u):c,f=Y(C),z=C.flatMap(K=>K?.obs||[]);let G=pe(z);if(b?.excludeTitleIncludes?.length){const K=b.excludeTitleIncludes.map(fe=>fe.toLowerCase());G=G.filter(fe=>{const P=(fe.title||"").toLowerCase();return!K.some(x=>P.includes(x))})}const q=await Ee(f?.provider_id),ue=Ae(f?.encounter_datetime),ee=ue?`${q} ${ue}`:q;return{items:G,createdByLine:ee?` ${ee}`:""}},w=await v(r.get(y.NON_PHARMACOLOGICAL)||[]),A=await v(r.get(y.PATIENT_CARE_AREA)||[]),N=await v(r.get(y.PRESCRIPTION)||[],{excludeTitleIncludes:["medication history"]});De.value={cards:{nonPharmacological:w,patientCareArea:A,medications:N}}}catch(i){console.error("Failed to load patient management plan:",i),De.value=null}finally{ke.value=!1}},Ds=async()=>{He.value=!0,je.value=null;try{const i=await Z(y.CONTINUATION_SHEET),t=Y(i);if(!t)return;const r=O.toStandardHisFormat(t?.encounter_datetime)||"",m=(r?i.filter(c=>O.toStandardHisFormat(c?.encounter_datetime)===r):i).flatMap(c=>c?.obs||[]),u={},v=pe(m);v.length&&(u["Continuation Sheet"]=v);const w=await Ee(t?.provider_id),A=Ae(t?.encounter_datetime),N=A?`created by ${w} on ${A}.`:`created by ${w}.`;je.value={sections:u,createdByLine:N}}catch(i){console.error("Failed to load continuation notes:",i),je.value=null}finally{He.value=!1}},Hs=async()=>{Qe.value=!0,We.value=null;try{const i=[y.DISPOSITION,y.AWAITING_SPECIALTY],t=await Promise.all(i.map(P=>Z(P))),r=new Map(i.map((P,x)=>[P,t[x]||[]])),d=t.flat(),m=Y(d);if(!m)return;const u=O.toStandardHisFormat(m?.encounter_datetime)||"",v=async P=>{const x=u?P.filter(Je=>O.toStandardHisFormat(Je?.encounter_datetime)===u):P,ie=Y(x),be=x.flatMap(Je=>Je?.obs||[]),Ke=pe(be),ze=await Ee(ie?.provider_id),Ce=Ae(ie?.encounter_datetime),ft=Ce?`${ze} ${Ce}`:ze;return{items:Ke,createdByLine:ft?` ${ft}`:""}},w=P=>{const x=(P||"").toLowerCase().trim();return x?x.includes("admission")||x.includes("ward")||x.includes("bed number")||x.includes("reason for admission")||x.includes("speciality department")?"admission":x.includes("death")||x.includes("cause of death")||x.includes("mortuary")||x.includes("family informed")||x.includes("relationship to deceased")||x.includes("last office")?"death":x.includes("transfer out")||x.includes("facility name")||x.includes("reason for transfer")?"transfer_out":x.includes("discharge home")||x.includes("discharge plan")||x.includes("followup plan")||x.includes("home care")||x.includes("followup details")||x.includes("discharge notes")||x.includes("specialist clinic")?"discharge_home":x.includes("absconded")||x.includes("last seen location")||x.includes("time of absconding")||x.includes("date of absconding")?"absconded":x.includes("refused hospital treatment")||x.includes("reason for refusal")||x.includes("plans to return")||x.includes("date of refusal")||x.includes("witness name")?"refused_treatment":"other":"other"},A=[{key:"admission",title:"Admission"},{key:"death",title:"Death"},{key:"transfer_out",title:"Transfer Out"},{key:"discharge_home",title:"Discharge Home"},{key:"absconded",title:"Absconded"},{key:"refused_treatment",title:"Refused Treatment"},{key:"other",title:"Other Disposition"}],N=await v(r.get(y.AWAITING_SPECIALTY)||[]),c=r.get(y.DISPOSITION)||[],b=u?c.filter(P=>O.toStandardHisFormat(P?.encounter_datetime)===u):c,C=Y(b),f=b.flatMap(P=>P?.obs||[]),z=pe(f),G={};for(const P of z){const x=w(P.title);G[x]||(G[x]=[]),G[x].push(P)}const q=await Ee(C?.provider_id),ue=Ae(C?.encounter_datetime),ee=ue?`${q} ${ue}`:q,K=ee?` ${ee}`:"",fe=A.map(P=>({key:P.key,title:P.title,items:G[P.key]||[],createdByLine:(G[P.key]||[]).length?K:""})).filter(P=>P.items.length>0);We.value={cards:{awaitingSpecialty:N},otherCards:fe}}catch(i){console.error("Failed to load disposition notes:",i),We.value=null}finally{Qe.value=!1}},Fs=async()=>{Ge.value=!0,Ie.value=null;try{const[i,t,r]=await Promise.all([Z(y.NURSING_CARE_NOTES),Z(y.SOAPIER_PRESCRIPTION),Z(y.SOAPIER_DISPENSING)]),d=Y(i);if(!d)return;const m=d?.obs||[],u=O.toStandardHisFormat(d?.encounter_datetime)||"",v=_=>{if(!Array.isArray(_)||_.length===0)return null;if(u){const Yt=_.filter(Vs=>O.toStandardHisFormat(Vs?.encounter_datetime)===u);if(Yt.length>0)return Y(Yt)}return Y(_)},w=v(t),A=v(r),N=w?.obs||[],c=A?.obs||[],b=D(m,_=>_==="subjective"||_.includes("subjective"))||"",C=D(m,_=>_==="objective"||_.includes("objective"))||"",f=D(m,_=>_==="assessment"||_.includes("assessment"))||"",z=D(m,_=>_==="plan"||_.includes("plan"))||"",G=D(m,_=>_==="evaluation"||_.includes("evaluation"))||"",q=D(m,_=>_==="replan"||_.includes("replan"))||"",ue=D(m,_=>_.includes("spo2")||_.includes("sao2")||_.includes("oxygen saturation")),ee=D(m,_=>_.includes("systolic")),K=D(m,_=>_.includes("diastolic")),fe=D(m,_=>_.includes("respiratory rate")||_==="respiratory rate"||_.includes("respiratory")),P=D(m,_=>_==="pulse"||_.includes("pulse rate")),x=D(m,_=>_.includes("temperature")),ie=[];if(ue&&ie.push(`SPO2: ${ue} %`),ee||K){const _=`${ee||"-"}${K?`/${K}`:""}`;ie.push(`BP: ${_} mmHg`)}fe&&ie.push(`Respiratory: ${fe} breaths/min`),P&&ie.push(`Pulse: ${P} bpm`),x&&ie.push(`Temperature: ${x} °C`);const be=ie.length?ie.join(" "):"N/A",Ke=yt(c.filter(_=>de(W(_))==="procedures").map(_=>oe(_))),ze=yt(c.filter(_=>de(W(_))==="supportive care").map(_=>oe(_))),Ce=[];Ke.length&&Ce.push(`Procedures: ${Ke.join(", ")}`),ze.length&&Ce.push(`Supportive care: ${ze.join(", ")}`);const ft=Ce.length?Ce.join(`
`):"N/A",Je=yt(N.filter(_=>de(W(_))==="drug given").map(_=>oe(_))),$s=Je.length?Je.join(", "):"N/A",jt=await Ee(d?.provider_id),Wt=Ae(d?.encounter_datetime),Bs=Wt?`created by ${jt} on ${Wt}.`:`created by ${jt}.`;Ie.value={subjective:b,objective:C,vitalSigns:be,assessment:f,plan:z,evaluation:G,replan:q,nonPharmacological:ft,medications:$s,createdByLine:Bs}}catch(i){console.error("Failed to load SOAPIER notes:",i),Ie.value=null}finally{Ge.value=!1}},Ut=async i=>{$.value=i,i==="surgical"&&await rs(),i==="medical"&&await cs(),i==="gyneacology"&&await ds(),i==="all"&&(await Ps(),await Fs(),await Ss(),await Cs(),await Is(),await Ts(),await Ls(),await Rs(),await Ms(),await Os(),await Ds(),await Hs())};return{clinicalNotesView:$,surgicalNotesRecords:L,gyneacologyRecords:B,medicalInpatientRecords:Q,clinicalNotesLoading:we,gyneacologyLoading:$e,medicalInpatientLoading:he,expandedClinicalTiles:H,toggleClinicalTile:et,clinicalNotesAllLoading:lt,refreshAllClinicalNotes:rt,aetcClinicalTiles:tt,triageSummary:ge,soapierSummary:Ie,monitoringChartSummary:ve,fluidBalanceSummary:_e,primarySurveySummary:ae,sampleHistorySummary:ce,secondarySurveySummary:Ne,diagnosisSummary:Oe,investigationPlanSummary:ye,patientManagementSummary:De,continuationSummary:je,dispositionSummary:We,surgicalNotesBySection:Le,gyneacologyBySection:ls,medicalInpatientBySection:gt,surgicalPhysicalExam:ut,surgicalInitialManagement:st,surgicalPresenting:_t,surgicalPastMedicalHistoryItems:qe,surgicalReviewOfSystemsItems:s,surgicalReviewOfSystemsCols:E,surgicalPastSurgicalHistoryItems:F,surgicalFamilyHistoryItems:p,surgicalSocialHistoryItems:g,surgicalGynecologicalHistoryItems:j,medicalInpatientPresenting:xe,medicalInpatientPhysicalExam:ss,medicalInpatientExamZones:is,medicalReviewOfSystemsItems:Tt,medicalReviewOfSystemsCols:ns,getObsDisplayValue:oe,downloadClinicalNotesPdf:gs,setClinicalNotesView:Ut}},fi={class:"clinical-notes-section print-area"},bi={class:"clinical-notes-actions"},hi={key:0,class:"clinical-notes-list"},_i={key:0,class:"clinical-notes-placeholder"},ki={key:1,class:"clinical-notes-placeholder"},xi={key:2,class:"clinical-notes-records surgical-notes-records"},Si={class:"clinical-notes-section-title"},wi={key:0,class:"clinical-notes-section-items"},Ni={class:"pe-card"},Ai={class:"pe-line"},Ei={class:"pe-value"},Ci={class:"pe-row4"},Pi={class:"pe-line"},Ii={class:"pe-value"},Ti={class:"pe-line"},Li={class:"pe-value"},Ri={class:"pe-line"},Mi={class:"pe-value"},Oi={class:"pe-line"},Di={class:"pe-value"},Hi={class:"pe-row3",style:{"margin-top":"10px"}},Fi={class:"pe-line"},$i={class:"pe-value"},Bi={class:"pe-line"},Vi={class:"pe-value"},zi={class:"pe-line"},Gi={class:"pe-value"},Ui={class:"pe-line",style:{"margin-top":"10px"}},ji={class:"pe-value"},Wi={class:"pe-line"},Yi={class:"pe-value"},qi={class:"pe-line"},Ki={class:"pe-value"},Xi={class:"pe-line"},Zi={class:"pe-value"},Ji={class:"pe-line"},Qi={class:"pe-value"},en={class:"pe-line"},tn={class:"pe-value"},sn={class:"pe-table"},nn={class:"pe-value"},an={class:"pe-value"},on={class:"pe-value"},ln={class:"pe-value"},rn={class:"pe-value"},cn={class:"pe-value"},dn={key:1,class:"clinical-notes-section-items"},pn={class:"im-card"},un={class:"im-row3"},mn={class:"im-line"},gn={class:"im-value"},vn={class:"im-line"},yn={class:"im-value"},fn={class:"im-line"},bn={class:"im-value"},hn={key:2,class:"clinical-notes-section-items"},_n={class:"pm-card"},kn={class:"pc-block"},xn={class:"pc-line"},Sn={class:"pc-value"},wn={class:"pc-line",style:{"margin-top":"10px"}},Nn={class:"pc-value"},An={key:3,class:"clinical-notes-section-items"},En={class:"pm-card"},Cn={class:"pm-list"},Pn={class:"pm-label"},In={class:"pm-value"},Tn={key:0,class:"pm-empty"},Ln={key:4,class:"clinical-notes-section-items"},Rn={class:"pm-card"},Mn={class:"ros-grid"},On={class:"ros-col"},Dn={class:"ros-label"},Hn={class:"ros-value"},Fn={class:"ros-col"},$n={class:"ros-label"},Bn={class:"ros-value"},Vn={key:0,class:"pm-empty"},zn={key:5,class:"clinical-notes-section-items"},Gn={class:"pm-card"},Un={class:"pm-list"},jn={class:"pm-label"},Wn={class:"pm-value"},Yn={key:0,class:"pm-empty"},qn={key:6,class:"clinical-notes-section-items"},Kn={class:"pm-card"},Xn={class:"pm-list"},Zn={class:"pm-label"},Jn={class:"pm-value"},Qn={key:0,class:"pm-empty"},ea={key:7,class:"clinical-notes-section-items"},ta={class:"pm-card"},sa={class:"pm-list"},ia={class:"pm-label"},na={class:"pm-value"},aa={key:0,class:"pm-empty"},oa={key:8,class:"clinical-notes-section-items"},la={class:"pm-card"},ra={class:"pm-list"},ca={class:"pm-label"},da={class:"pm-value"},pa={key:0,class:"pm-empty"},ua={class:"surgical-record-label"},ma={class:"surgical-record-value"},ga={key:1,class:"clinical-notes-list"},va={key:0,class:"clinical-notes-placeholder"},ya={key:1,class:"clinical-notes-placeholder"},fa={key:2,class:"clinical-notes-records gyne-notes-records"},ba={class:"clinical-notes-section-title"},ha={class:"gyne-record-label"},_a={class:"gyne-record-value"},ka={key:2,class:"clinical-notes-list"},xa={key:0,class:"clinical-notes-placeholder"},Sa={key:1,class:"clinical-notes-placeholder"},wa={key:2,class:"clinical-notes-records medical-notes-records"},Na={class:"clinical-notes-section-title"},Aa={key:0,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},Ea={class:"medical-record"},Ca={class:"medical-record-value"},Pa={class:"medical-record"},Ia={class:"medical-record-value"},Ta={key:1,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},La={class:"pm-card medical-review-card"},Ra={class:"ros-grid"},Ma={class:"ros-col"},Oa={class:"ros-label"},Da={class:"ros-value"},Ha={class:"ros-col"},Fa={class:"ros-label"},$a={class:"ros-value"},Ba={key:0,class:"pm-empty"},Va={key:2,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},za={class:"mipe-card"},Ga={class:"mipe-line"},Ua={class:"mipe-value"},ja={class:"mipe-row6"},Wa={class:"mipe-line"},Ya={class:"mipe-value"},qa={class:"mipe-line"},Ka={class:"mipe-value"},Xa={class:"mipe-line"},Za={class:"mipe-value"},Ja={class:"mipe-line"},Qa={class:"mipe-value"},eo={class:"mipe-line"},to={class:"mipe-value"},so={class:"mipe-line"},io={class:"mipe-value"},no={class:"mipe-row5"},ao={class:"mipe-line"},oo={class:"mipe-value"},lo={class:"mipe-line"},ro={class:"mipe-value"},co={class:"mipe-line"},po={class:"mipe-value"},uo={class:"mipe-line"},mo={class:"mipe-value"},go={class:"mipe-line"},vo={class:"mipe-value"},yo={key:0,class:"mipe-line",style:{"margin-top":"8px"}},fo={class:"mipe-value"},bo={class:"mipe-row2"},ho={class:"mipe-line"},_o={class:"mipe-value"},ko={class:"mipe-line"},xo={class:"mipe-value"},So={class:"mipe-row3"},wo={class:"mipe-line"},No={class:"mipe-value"},Ao={class:"mipe-line"},Eo={class:"mipe-value"},Co={class:"mipe-line"},Po={class:"mipe-value"},Io={class:"mipe-row2"},To={class:"mipe-line"},Lo={class:"mipe-value"},Ro={class:"mipe-line"},Mo={class:"mipe-value"},Oo={class:"mipe-row2"},Do={class:"mipe-line"},Ho={class:"mipe-value"},Fo={class:"mipe-line"},$o={class:"mipe-value"},Bo={class:"mipe-row2",style:{"margin-top":"8px"}},Vo={class:"mipe-line"},zo={class:"mipe-value"},Go={class:"mipe-line"},Uo={class:"mipe-value"},jo={class:"mipe-row3",style:{"margin-top":"8px"}},Wo={class:"mipe-line"},Yo={class:"mipe-value"},qo={class:"mipe-line"},Ko={class:"mipe-value"},Xo={class:"mipe-line"},Zo={class:"mipe-value"},Jo={key:1,class:"mipe-zones"},Qo={class:"mipe-zone-title"},el={class:"mipe-label"},tl={class:"mipe-value"},sl={key:2},il={class:"mipe-zones"},nl={class:"mipe-zone-title"},al={class:"mipe-label"},ol={class:"mipe-value"},ll={class:"mipe-line"},rl={class:"mipe-value"},cl={class:"mipe-row2"},dl={class:"mipe-line"},pl={class:"mipe-value"},ul={class:"mipe-line"},ml={class:"mipe-value"},gl={class:"mipe-line"},vl={class:"mipe-value"},yl={class:"mipe-row3"},fl={class:"mipe-line"},bl={class:"mipe-value"},hl={class:"mipe-line"},_l={class:"mipe-value"},kl={class:"mipe-line"},xl={class:"mipe-value"},Sl={class:"pe-table"},wl={class:"pe-value"},Nl={class:"pe-value"},Al={class:"pe-value"},El={class:"pe-value"},Cl={class:"pe-value"},Pl={class:"pe-value"},Il={class:"pe-value"},Tl={class:"pe-value"},Ll={class:"pe-value"},Rl={class:"pe-value"},Ml={class:"pe-value"},Ol={class:"pe-value"},Dl={class:"pe-value"},Hl={class:"medical-record-label"},Fl={class:"medical-record-value"},$l={key:3,class:"clinical-notes-list"},Bl={class:"clinical-notes-tab"},Vl={class:"notes-header"},zl={class:"actions"},Gl={key:0,class:"skeleton-wrapper"},Ul={key:1,class:"empty-state"},jl={class:"empty-icon-wrapper"},Wl={key:2,class:"tiles-grid"},Yl=["onClick"],ql={class:"tile-title-wrapper"},Kl={class:"tile-title"},Xl={key:0},Zl={key:0,class:"no-observations"},Jl={key:1,class:"triage-summary-list"},Ql={class:"triage-summary-row"},er={class:"triage-summary-content"},tr={class:"triage-summary-row"},sr={class:"triage-summary-content"},ir={class:"triage-summary-row"},nr={class:"triage-summary-content"},ar={class:"triage-summary-row"},or={class:"triage-summary-content"},lr={class:"triage-summary-created"},rr={key:1},cr={key:0,class:"no-observations"},dr={key:1,class:"clinical-notes-section-items"},pr={class:"soapier-grid"},ur={class:"soapier-card"},mr={class:"soapier-card-body"},gr={class:"soapier-card"},vr={class:"soapier-card-body"},yr={class:"soapier-block"},fr={class:"soapier-block-value"},br={class:"soapier-block",style:{"margin-top":"10px"}},hr={class:"soapier-block-value"},_r={class:"soapier-card"},kr={class:"soapier-card-body"},xr={class:"soapier-card"},Sr={class:"soapier-card-body"},wr={class:"soapier-card"},Nr={class:"soapier-card-body"},Ar={class:"soapier-block"},Er={class:"soapier-block-value"},Cr={class:"soapier-block",style:{"margin-top":"10px"}},Pr={class:"soapier-block-value"},Ir={class:"soapier-card"},Tr={class:"soapier-card-body"},Lr={class:"soapier-card"},Rr={class:"soapier-card-body"},Mr={class:"soapier-footer"},Or={key:2},Dr={key:0,class:"no-observations"},Hr={key:1,class:"monitoring-chart-grid"},Fr={class:"monitoring-chart-title"},$r={key:0,class:"monitoring-chart-body"},Br={key:1,class:"monitoring-chart-legend"},Vr={key:2,class:"monitoring-chart-empty"},zr={key:3},Gr={key:0,class:"no-observations"},Ur={key:1,class:"fluid-balance-entry-grid"},jr={class:"fluid-balance-card-header"},Wr={class:"fluid-balance-card-title"},Yr={class:"fluid-balance-card-subtitle"},qr={class:"fluid-balance-sections"},Kr={class:"fluid-balance-section"},Xr={class:"fluid-balance-list"},Zr={key:0,class:"fluid-balance-empty"},Jr={class:"fluid-balance-section"},Qr={class:"fluid-balance-list"},ec={key:0,class:"fluid-balance-empty"},tc={class:"fluid-balance-section"},sc={class:"fluid-balance-list"},ic={key:0,class:"fluid-balance-empty"},nc={class:"fluid-balance-section"},ac={class:"fluid-balance-list"},oc={key:0},lc={key:4},rc={key:0,class:"no-observations"},cc={key:1},dc={class:"survey-print-grid survey-print-grid--primary"},pc={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},uc={class:"observation-list"},mc={class:"obs-concept"},gc={class:"obs-value"},vc={class:"tile-footer"},yc={key:5},fc={key:0,class:"no-observations"},bc={key:1,class:"sample-grid"},hc={class:"sample-card"},_c={class:"sample-list"},kc={class:"sample-label"},xc={class:"sample-value"},Sc={key:0,class:"sample-empty"},wc={class:"sample-footer"},Nc={class:"sample-card"},Ac={class:"sample-list"},Ec={class:"sample-label"},Cc={class:"sample-value"},Pc={key:0,class:"sample-empty"},Ic={class:"sample-footer"},Tc={class:"sample-card"},Lc={class:"sample-list"},Rc={class:"sample-label"},Mc={class:"sample-value"},Oc={key:0,class:"sample-empty"},Dc={class:"sample-footer"},Hc={class:"sample-card"},Fc={class:"sample-list"},$c={class:"sample-label"},Bc={class:"sample-value"},Vc={key:0,class:"sample-empty"},zc={class:"sample-footer"},Gc={class:"sample-card"},Uc={class:"sample-list"},jc={class:"sample-label"},Wc={class:"sample-value"},Yc={key:0,class:"sample-empty"},qc={class:"sample-footer"},Kc={class:"sample-card"},Xc={class:"sample-list"},Zc={class:"sample-label"},Jc={class:"sample-value"},Qc={key:0,class:"sample-empty"},ed={class:"sample-footer"},td={key:6},sd={key:0,class:"no-observations"},id={key:1},nd={class:"survey-print-grid survey-print-grid--secondary"},ad={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},od={class:"observation-list"},ld={class:"obs-concept"},rd={class:"obs-value"},cd={class:"tile-footer"},dd={key:7},pd={key:0,class:"no-observations"},ud={key:1},md={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},gd={class:"observation-list"},vd={class:"obs-concept"},yd={class:"obs-value"},fd={class:"tile-footer"},bd={key:8},hd={key:0,class:"no-observations"},_d={key:1,class:"pm-grid"},kd={key:0,class:"pm-card"},xd={class:"pm-list"},Sd={class:"pm-label"},wd={class:"pm-value"},Nd={class:"pm-footer"},Ad={key:1,class:"pm-card"},Ed={class:"pm-list"},Cd={class:"pm-label"},Pd={class:"pm-value"},Id={class:"pm-footer"},Td={key:2,class:"no-observations"},Ld={key:9},Rd={key:0,class:"no-observations"},Md={key:1,class:"pm-grid"},Od={class:"pm-card"},Dd={class:"pm-list"},Hd={class:"pm-label"},Fd={class:"pm-value"},$d={key:0,class:"pm-empty"},Bd={class:"pm-footer"},Vd={class:"pm-card"},zd={class:"pm-list"},Gd={class:"pm-label"},Ud={class:"pm-value"},jd={key:0,class:"pm-empty"},Wd={class:"pm-footer"},Yd={class:"pm-card"},qd={class:"pm-list"},Kd={class:"pm-label"},Xd={class:"pm-value"},Zd={key:0,class:"pm-empty"},Jd={class:"pm-footer"},Qd={key:10},ep={key:0,class:"no-observations"},tp={key:1},sp={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},ip={class:"observation-list"},np={class:"obs-concept"},ap={class:"obs-value"},op={class:"tile-footer"},lp={key:11},rp={key:0,class:"no-observations"},cp={key:1,class:"pm-grid"},dp={class:"pm-card"},pp={class:"pm-list"},up={class:"pm-label"},mp={class:"pm-value"},gp={key:0,class:"pm-empty"},vp={class:"pm-footer"},yp={class:"pm-card-title"},fp={class:"pm-list"},bp={class:"pm-label"},hp={class:"pm-value"},_p={key:0,class:"pm-empty"},kp={class:"pm-footer"},xp={key:4,class:"clinical-notes-placeholder"},Wp=Jt({__name:"PatientClinicalNotes",setup(me){const{patient:U}=zs(es()),te=se=>se?.concept_name||se?.concept_id||"Observation",$=se=>["Complaints","Impression","Plan","Other"].includes(se),L=se=>["Investigations","Working Differential Diagnosis","Other"].includes(se),B=se=>["Past Surgical History","Social History","Family History","Summary","Management Plan","Other"].includes(se),Q=se=>(se?.series||[]).some(s=>Array.isArray(s?.data)&&s.data.length>0),we=se=>(se?.series||[]).filter(s=>Array.isArray(s?.data)&&s.data.length>0).length>1,$e=se=>({chart:{toolbar:{show:!0},zoom:{enabled:!0},animations:{enabled:!1},parentHeightOffset:0},colors:se?.colors||["#0ea5e9"],dataLabels:{enabled:!0},stroke:{curve:"smooth",width:3},markers:{size:4},grid:{borderColor:"#e5e7eb",strokeDashArray:0,padding:{left:8,right:12,top:0,bottom:0}},xaxis:{type:"category",labels:{show:!1,style:{fontSize:"10px",colors:"#64748b"}},tooltip:{enabled:!0}},yaxis:{labels:{style:{fontSize:"10px",colors:"#64748b"}}},legend:{show:!1},tooltip:{x:{show:!0}}}),{clinicalNotesView:he,surgicalNotesRecords:Pe,gyneacologyRecords:ge,medicalInpatientRecords:Me,clinicalNotesLoading:Be,gyneacologyLoading:Ge,medicalInpatientLoading:Ie,expandedClinicalTiles:R,toggleClinicalTile:ve,clinicalNotesAllLoading:ne,refreshAllClinicalNotes:_e,aetcClinicalTiles:Te,triageSummary:ae,soapierSummary:X,monitoringChartSummary:ce,fluidBalanceSummary:Ve,primarySurveySummary:Ne,sampleHistorySummary:V,secondarySurveySummary:Oe,diagnosisSummary:Ue,investigationPlanSummary:ye,patientManagementSummary:ke,continuationSummary:De,dispositionSummary:He,surgicalNotesBySection:je,gyneacologyBySection:Qe,medicalInpatientBySection:We,surgicalPhysicalExam:H,surgicalInitialManagement:et,surgicalPresenting:lt,surgicalPastMedicalHistoryItems:rt,surgicalReviewOfSystemsItems:tt,surgicalReviewOfSystemsCols:ct,surgicalPastSurgicalHistoryItems:dt,surgicalFamilyHistoryItems:pt,surgicalSocialHistoryItems:W,surgicalGynecologicalHistoryItems:Se,medicalInpatientPresenting:oe,medicalInpatientPhysicalExam:h,medicalInpatientExamZones:Ye,medicalReviewOfSystemsItems:M,medicalReviewOfSystemsCols:ut,getObsDisplayValue:st,downloadClinicalNotesPdf:_t,setClinicalNotesView:qe}=yi();return Qt(()=>{qe(he.value)}),(se,s)=>(a(),o("div",fi,[re(n(Ws),{class:"clinical-notes-card"},{default:Ze(()=>[re(n(Gs),null,{default:Ze(()=>[e("div",bi,[re(nt,{name:"Download PDF",fill:"solid",class:"clinical-notes-btn",onClick:n(_t)},null,8,["onClick"]),re(nt,{name:"Surgical Notes",fill:"clear",class:"clinical-notes-btn",onClick:s[0]||(s[0]=E=>n(qe)("surgical"))}),re(nt,{name:"Gyneacology",fill:"clear",class:"clinical-notes-btn",onClick:s[1]||(s[1]=E=>n(qe)("gyneacology"))}),re(nt,{name:"Medical Inpatient",fill:"clear",class:"clinical-notes-btn",onClick:s[2]||(s[2]=E=>n(qe)("medical"))}),re(nt,{name:"All",fill:"clear",class:"clinical-notes-btn",onClick:s[3]||(s[3]=E=>n(qe)("all"))})]),re(di,{class:"clinical-notes-demographics"}),n(he)==="surgical"?(a(),o("div",hi,[s[52]||(s[52]=e("div",{class:"clinical-notes-list-header"},"Surgical Notes",-1)),n(Be)?(a(),o("div",_i,"Loading surgical notes...")):n(Pe).length===0?(a(),o("div",ki," No surgical notes found. ")):(a(),o("div",xi,[(a(!0),o(k,null,S(n(je),(E,F)=>(a(),o("div",{key:F,class:"clinical-notes-section-block surgical-section-block"},[e("div",Si,l(F),1),F==="Physical Examination"?(a(),o("div",wi,[e("div",Ni,[s[26]||(s[26]=e("div",{class:"pe-title"},"Physical Examination",-1)),e("div",Ai,[s[5]||(s[5]=e("span",{class:"pe-label"},"General Condition:",-1)),e("span",Ei,l(n(H).generalCondition||"N/A"),1)]),s[27]||(s[27]=e("div",{class:"pe-subtitle"},"Vitals",-1)),e("div",Ci,[e("div",Pi,[s[6]||(s[6]=e("span",{class:"pe-label"},"Temperature:",-1)),e("span",Ii,l(n(H).temperature||"N/A"),1)]),e("div",Ti,[s[7]||(s[7]=e("span",{class:"pe-label"},"Pulse Rate:",-1)),e("span",Li,l(n(H).pulseRate||"N/A"),1)]),e("div",Ri,[s[8]||(s[8]=e("span",{class:"pe-label"},"Blood Pressure:",-1)),e("span",Mi,l(n(H).bloodPressure||"N/A"),1)]),e("div",Oi,[s[9]||(s[9]=e("span",{class:"pe-label"},"Respiratory Rate:",-1)),e("span",Di,l(n(H).respiratoryRate||"N/A"),1)])]),e("div",Hi,[e("div",Fi,[s[10]||(s[10]=e("span",{class:"pe-label"},"Eyes:",-1)),e("span",$i,l(n(H).eyes||"N/A"),1)]),e("div",Bi,[s[11]||(s[11]=e("span",{class:"pe-label"},"Mouth:",-1)),e("span",Vi,l(n(H).mouth||"N/A"),1)]),e("div",zi,[s[12]||(s[12]=e("span",{class:"pe-label"},"Neck:",-1)),e("span",Gi,l(n(H).neck||"N/A"),1)])]),e("div",Ui,[s[13]||(s[13]=e("span",{class:"pe-label"},"Chest Examination:",-1)),e("span",ji,l(n(H).chestExamination||"N/A"),1)]),e("div",Wi,[s[14]||(s[14]=e("span",{class:"pe-label"},"Endocrine Examination:",-1)),e("span",Yi,l(n(H).endocrineExamination||"N/A"),1)]),e("div",qi,[s[15]||(s[15]=e("span",{class:"pe-label"},"Abdominal Examination:",-1)),e("span",Ki,l(n(H).abdominalExamination||"N/A"),1)]),s[28]||(s[28]=e("div",{class:"pe-divider"},null,-1)),s[29]||(s[29]=e("div",{class:"pe-subtitle"},"Glasgow Coma Scale (GCS)",-1)),e("div",Xi,[s[16]||(s[16]=e("span",{class:"pe-label"},"Motor Response:",-1)),e("span",Zi,l(n(H).motorResponse||"N/A"),1)]),e("div",Ji,[s[17]||(s[17]=e("span",{class:"pe-label"},"Verbal Response:",-1)),e("span",Qi,l(n(H).verbalResponse||"N/A"),1)]),e("div",en,[s[18]||(s[18]=e("span",{class:"pe-label"},"Eye Response:",-1)),e("span",tn,l(n(H).eyeOpeningResponse||"N/A"),1)]),s[30]||(s[30]=e("div",{class:"pe-divider"},null,-1)),s[31]||(s[31]=e("div",{class:"pe-subtitle"},"Additional Examinations & Extremities",-1)),e("table",sn,[s[25]||(s[25]=e("thead",null,[e("tr",null,[e("th",null,"Additional Examinations"),e("th",null,"Extremities")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[s[19]||(s[19]=e("span",{class:"pe-label"},"Cranial Nerves:",-1)),e("span",nn,l(n(H).cranialNerves||"N/A"),1)]),e("td",null,[s[20]||(s[20]=e("span",{class:"pe-label"},"Pulsations:",-1)),e("span",an,l(n(H).pulsations||"N/A"),1)])]),e("tr",null,[e("td",null,[s[21]||(s[21]=e("span",{class:"pe-label"},"Gross Motor:",-1)),e("span",on,l(n(H).grossMotor||"N/A"),1)]),e("td",null,[s[22]||(s[22]=e("span",{class:"pe-label"},"Rectal Examination:",-1)),e("span",ln,l(n(H).rectalExamination||"N/A"),1)])]),e("tr",null,[e("td",null,[s[23]||(s[23]=e("span",{class:"pe-label"},"Sensation:",-1)),e("span",rn,l(n(H).sensation||"N/A"),1)]),e("td",null,[s[24]||(s[24]=e("span",{class:"pe-label"},"Extremities:",-1)),e("span",cn,l(n(H).extremities||"N/A"),1)])])])])])])):F==="Initial Management"?(a(),o("div",dn,[e("div",pn,[s[35]||(s[35]=e("div",{class:"im-title"},"Initial Management",-1)),e("div",un,[e("div",mn,[s[32]||(s[32]=e("span",{class:"im-label"},"Clerk Name:",-1)),e("span",gn,l(n(et).clerkName||"N/A"),1)]),e("div",vn,[s[33]||(s[33]=e("span",{class:"im-label"},"Designation:",-1)),e("span",yn,l(n(et).designation||"N/A"),1)]),e("div",fn,[s[34]||(s[34]=e("span",{class:"im-label"},"Signature:",-1)),e("span",bn,l(n(et).signature||"N/A"),1)])])])])):F==="Presenting Complaints"?(a(),o("div",hn,[e("div",_n,[s[38]||(s[38]=e("div",{class:"pm-card-title"},"Presenting Complaints",-1)),s[39]||(s[39]=e("div",{class:"pm-card-divider"},null,-1)),e("div",kn,[e("div",xn,[s[36]||(s[36]=e("span",{class:"pc-label"},"Presenting Complaints:",-1)),e("span",Sn,l(n(lt).complaints||"N/A"),1)]),e("div",wn,[s[37]||(s[37]=e("span",{class:"pc-label"},"Presenting History:",-1)),e("span",Nn,l(n(lt).history||"N/A"),1)])])])])):F==="Past Medical History"?(a(),o("div",An,[e("div",En,[s[40]||(s[40]=e("div",{class:"pm-card-title"},"Past Medical History",-1)),s[41]||(s[41]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Cn,[(a(!0),o(k,null,S(n(rt),(p,g)=>(a(),o("li",{key:g},[e("span",Pn,l(p.title)+":",1),e("span",In,l(p.value),1)]))),128)),n(rt).length===0?(a(),o("li",Tn,"No records.")):T("",!0)])])])):F==="Review of Systems"?(a(),o("div",Ln,[e("div",Rn,[s[42]||(s[42]=e("div",{class:"pm-card-title"},"Review of Systems",-1)),s[43]||(s[43]=e("div",{class:"pm-card-divider"},null,-1)),e("div",Mn,[e("div",On,[(a(!0),o(k,null,S(n(ct).left,(p,g)=>(a(),o("div",{key:`ros-l-${g}`,class:"ros-item"},[e("span",Dn,l(p.title)+":",1),e("span",Hn,l(p.value),1)]))),128))]),e("div",Fn,[(a(!0),o(k,null,S(n(ct).right,(p,g)=>(a(),o("div",{key:`ros-r-${g}`,class:"ros-item"},[e("span",$n,l(p.title)+":",1),e("span",Bn,l(p.value),1)]))),128))])]),n(tt).length===0?(a(),o("div",Vn,"No records.")):T("",!0)])])):F==="Past Surgical History"?(a(),o("div",zn,[e("div",Gn,[s[44]||(s[44]=e("div",{class:"pm-card-title"},"Past Surgical History",-1)),s[45]||(s[45]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Un,[(a(!0),o(k,null,S(n(dt),(p,g)=>(a(),o("li",{key:g},[e("span",jn,l(p.title)+":",1),e("span",Wn,l(p.value),1)]))),128)),n(dt).length===0?(a(),o("li",Yn,"No records.")):T("",!0)])])])):F==="Family History"?(a(),o("div",qn,[e("div",Kn,[s[46]||(s[46]=e("div",{class:"pm-card-title"},"Family History",-1)),s[47]||(s[47]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Xn,[(a(!0),o(k,null,S(n(pt),(p,g)=>(a(),o("li",{key:g},[e("span",Zn,l(p.title)+":",1),e("span",Jn,l(p.value),1)]))),128)),n(pt).length===0?(a(),o("li",Qn,"No records.")):T("",!0)])])])):F==="Social History"?(a(),o("div",ea,[e("div",ta,[s[48]||(s[48]=e("div",{class:"pm-card-title"},"Social History",-1)),s[49]||(s[49]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",sa,[(a(!0),o(k,null,S(n(W),(p,g)=>(a(),o("li",{key:g},[e("span",ia,l(p.title)+":",1),e("span",na,l(p.value),1)]))),128)),n(W).length===0?(a(),o("li",aa,"No records.")):T("",!0)])])])):F==="Gynecological History"?(a(),o("div",oa,[e("div",la,[s[50]||(s[50]=e("div",{class:"pm-card-title"},"Gynecological History",-1)),s[51]||(s[51]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",ra,[(a(!0),o(k,null,S(n(Se),(p,g)=>(a(),o("li",{key:g},[e("span",ca,l(p.title)+":",1),e("span",da,l(p.value),1)]))),128)),n(Se).length===0?(a(),o("li",pa," No records. ")):T("",!0)])])])):(a(),o("div",{key:9,class:Re(["clinical-notes-section-items surgical-section-items",{"surgical-section-items--stacked":L(F)}])},[(a(!0),o(k,null,S(E,(p,g)=>(a(),o("div",{key:g,class:"surgical-record"},[e("span",ua,l(te(p))+":",1),e("span",ma,l(n(st)(p)),1)]))),128))],2))]))),128))]))])):n(he)==="gyneacology"?(a(),o("div",ga,[s[53]||(s[53]=e("div",{class:"clinical-notes-list-header"},"Gyneacology Ward",-1)),n(Ge)?(a(),o("div",va," Loading gyneacology ward records... ")):n(ge).length===0?(a(),o("div",ya," No gyneacology ward records found. ")):(a(),o("div",fa,[(a(!0),o(k,null,S(n(Qe),(E,F)=>(a(),o("div",{key:F,class:"clinical-notes-section-block gyne-section-block"},[e("div",ba,l(F),1),e("div",{class:Re(["clinical-notes-section-items gyne-section-items",{"gyne-section-items--wide":F==="General Examination","gyne-section-items--stacked":$(F)}])},[(a(!0),o(k,null,S(E,(p,g)=>(a(),o("div",{key:g,class:"gyne-record"},[e("span",ha,l(te(p))+":",1),e("span",_a,l(n(st)(p)),1)]))),128))],2)]))),128))]))])):n(he)==="medical"?(a(),o("div",ka,[s[128]||(s[128]=e("div",{class:"clinical-notes-list-header"},"Medical Inpatient",-1)),n(Ie)?(a(),o("div",xa," Loading medical inpatient records... ")):n(Me).length===0?(a(),o("div",Sa," No medical inpatient records found. ")):(a(),o("div",wa,[(a(!0),o(k,null,S(n(We),(E,F)=>(a(),o("div",{key:F,class:"clinical-notes-section-block medical-section-block"},[e("div",Na,l(F),1),F==="Presenting Complaints"?(a(),o("div",Aa,[e("div",Ea,[s[54]||(s[54]=e("span",{class:"medical-record-label"},"Presenting Complaints:",-1)),e("span",Ca,l(n(oe).complaints||"N/A"),1)]),e("div",Pa,[s[55]||(s[55]=e("span",{class:"medical-record-label"},"Presenting History:",-1)),e("span",Ia,l(n(oe).history||"N/A"),1)])])):F==="Review of Systems"?(a(),o("div",Ta,[e("div",La,[e("div",Ra,[e("div",Ma,[(a(!0),o(k,null,S(n(ut).left,(p,g)=>(a(),o("div",{key:`mi-ros-l-${g}`,class:"ros-item"},[e("span",Oa,l(p.title)+":",1),e("span",Da,l(p.value),1)]))),128))]),e("div",Ha,[(a(!0),o(k,null,S(n(ut).right,(p,g)=>(a(),o("div",{key:`mi-ros-r-${g}`,class:"ros-item"},[e("span",Fa,l(p.title)+":",1),e("span",$a,l(p.value),1)]))),128))])]),n(M).length===0?(a(),o("div",Ba,"No records.")):T("",!0)])])):F==="Physical Examination"?(a(),o("div",Va,[e("div",za,[e("div",Ga,[s[56]||(s[56]=e("span",{class:"mipe-label"},"General condition:",-1)),e("span",Ua,l(n(h).general||"N/A"),1)]),s[107]||(s[107]=e("div",{class:"mipe-subtitle"},"Vitals",-1)),e("div",ja,[e("div",Wa,[s[57]||(s[57]=e("span",{class:"mipe-label"},"Temperature:",-1)),e("span",Ya,l(n(h).temperature||"N/A"),1)]),e("div",qa,[s[58]||(s[58]=e("span",{class:"mipe-label"},"Pulse Rate:",-1)),e("span",Ka,l(n(h).pulseRate||"N/A"),1)]),e("div",Xa,[s[59]||(s[59]=e("span",{class:"mipe-label"},"Systolic:",-1)),e("span",Za,l(n(h).systolic||"N/A"),1)]),e("div",Ja,[s[60]||(s[60]=e("span",{class:"mipe-label"},"Diastolic:",-1)),e("span",Qa,l(n(h).diastolic||"N/A"),1)]),e("div",eo,[s[61]||(s[61]=e("span",{class:"mipe-label"},"Respiratory Rate:",-1)),e("span",to,l(n(h).respiratoryRate||"N/A"),1)]),e("div",so,[s[62]||(s[62]=e("span",{class:"mipe-label"},"Oxygen Saturation:",-1)),e("span",io,l(n(h).oxygenSaturation||"N/A"),1)])]),s[108]||(s[108]=e("div",{class:"mipe-divider"},null,-1)),s[109]||(s[109]=e("div",{class:"mipe-subtitle"},"Head and Neck",-1)),e("div",no,[e("div",ao,[s[63]||(s[63]=e("span",{class:"mipe-label"},"Pupils Symmetrical:",-1)),e("span",oo,l(n(h).pupilsSymmetrical||"N/A"),1)]),e("div",lo,[s[64]||(s[64]=e("span",{class:"mipe-label"},"Conjunctiva:",-1)),e("span",ro,l(n(h).conjunctiva||"N/A"),1)]),e("div",co,[s[65]||(s[65]=e("span",{class:"mipe-label"},"Oral KS:",-1)),e("span",po,l(n(h).oralKs||"N/A"),1)]),e("div",uo,[s[66]||(s[66]=e("span",{class:"mipe-label"},"Oral Candidiasis:",-1)),e("span",mo,l(n(h).oralThrush||"N/A"),1)]),e("div",go,[s[67]||(s[67]=e("span",{class:"mipe-label"},"Lymphadenopathy:",-1)),e("span",vo,l(n(h).lymphadenopathy||"N/A"),1)])]),n(h).headNeckOther?(a(),o("div",yo,[s[68]||(s[68]=e("span",{class:"mipe-label"},"Other:",-1)),e("span",fo,l(n(h).headNeckOther),1)])):T("",!0),s[110]||(s[110]=e("div",{class:"mipe-divider"},null,-1)),s[111]||(s[111]=e("div",{class:"mipe-subtitle"},"Chest",-1)),e("div",bo,[e("div",ho,[s[69]||(s[69]=e("span",{class:"mipe-label"},"Symmetrical Expansion:",-1)),e("span",_o,l(n(h).symmetricalExpansion||"N/A"),1)]),e("div",ko,[s[70]||(s[70]=e("span",{class:"mipe-label"},"Symmetrical Expansion Description:",-1)),e("span",xo,l(n(h).symmetricalExpansionDescription||"N/A"),1)])]),s[112]||(s[112]=e("div",{class:"mipe-divider"},null,-1)),s[113]||(s[113]=e("div",{class:"mipe-subtitle"},"Heart",-1)),e("div",So,[e("div",wo,[s[71]||(s[71]=e("span",{class:"mipe-label"},"Apex Beat:",-1)),e("span",No,l(n(h).apexBeat||"N/A"),1)]),e("div",Ao,[s[72]||(s[72]=e("span",{class:"mipe-label"},"Thrill Heaves:",-1)),e("span",Eo,l(n(h).thrillHeaves||"N/A"),1)]),e("div",Co,[s[73]||(s[73]=e("span",{class:"mipe-label"},"Auscultation (Heart):",-1)),e("span",Po,l(n(h).auscultationHeart||"N/A"),1)])]),s[114]||(s[114]=e("div",{class:"mipe-divider"},null,-1)),s[115]||(s[115]=e("div",{class:"mipe-subtitle"},"Lungs",-1)),e("div",Io,[e("div",To,[s[74]||(s[74]=e("span",{class:"mipe-label"},"Lung Condition:",-1)),e("span",Lo,l(n(h).lungCondition||"N/A"),1)]),e("div",Ro,[s[75]||(s[75]=e("span",{class:"mipe-label"},"Lung Position:",-1)),e("span",Mo,l(n(h).lungPosition||"N/A"),1)])]),s[116]||(s[116]=e("div",{class:"mipe-divider"},null,-1)),s[117]||(s[117]=e("div",{class:"mipe-subtitle"},"Abdomen",-1)),e("div",Oo,[e("div",Do,[s[76]||(s[76]=e("span",{class:"mipe-label"},"Region:",-1)),e("span",Ho,l(n(h).abdomenRegion||"N/A"),1)]),e("div",Fo,[s[77]||(s[77]=e("span",{class:"mipe-label"},"Inspection:",-1)),e("span",$o,l(n(h).abdomenInspection||"N/A"),1)])]),e("div",Bo,[e("div",Vo,[s[78]||(s[78]=e("span",{class:"mipe-label"},"Light Palpation:",-1)),e("span",zo,l(n(h).abdomenLightPalpation||"N/A"),1)]),e("div",Go,[s[79]||(s[79]=e("span",{class:"mipe-label"},"Deep Palpation:",-1)),e("span",Uo,l(n(h).abdomenDeepPalpation||"N/A"),1)])]),e("div",jo,[e("div",Wo,[s[80]||(s[80]=e("span",{class:"mipe-label"},"Auscultation:",-1)),e("span",Yo,l(n(h).abdomenAuscultation||"N/A"),1)]),e("div",qo,[s[81]||(s[81]=e("span",{class:"mipe-label"},"Shifting Dullness:",-1)),e("span",Ko,l(n(h).abdomenShiftingDullness||"N/A"),1)]),e("div",Xo,[s[82]||(s[82]=e("span",{class:"mipe-label"},"Fluid Thrill:",-1)),e("span",Zo,l(n(h).abdomenFluidThrill||"N/A"),1)])]),n(Ye).abdomen.length?(a(),o("div",Jo,[(a(!0),o(k,null,S(n(Ye).abdomen,(p,g)=>(a(),o("div",{class:"mipe-zone",key:`mi-abd-${g}`},[e("div",Qo,l(p.zone),1),(a(!0),o(k,null,S(p.findings,(j,xe)=>(a(),o("div",{class:"mipe-line",key:`mi-abd-${g}-${xe}`},[e("span",el,l(j.title)+":",1),e("span",tl,l(j.value),1)]))),128))]))),128))])):T("",!0),n(Ye).respiratory.length?(a(),o("div",sl,[s[83]||(s[83]=e("div",{class:"mipe-divider"},null,-1)),s[84]||(s[84]=e("div",{class:"mipe-subtitle"},"Respiratory Examination",-1)),e("div",il,[(a(!0),o(k,null,S(n(Ye).respiratory,(p,g)=>(a(),o("div",{class:"mipe-zone",key:`mi-resp-${g}`},[e("div",nl,l(p.zone),1),(a(!0),o(k,null,S(p.findings,(j,xe)=>(a(),o("div",{class:"mipe-line",key:`mi-resp-${g}-${xe}`},[e("span",al,l(j.title)+":",1),e("span",ol,l(j.value),1)]))),128))]))),128))])])):T("",!0),s[118]||(s[118]=e("div",{class:"mipe-divider"},null,-1)),s[119]||(s[119]=e("div",{class:"mipe-subtitle"},"Extremities",-1)),e("div",ll,[s[85]||(s[85]=e("span",{class:"mipe-label"},"Oedema:",-1)),e("span",rl,l(n(h).oedema||"N/A"),1)]),s[120]||(s[120]=e("div",{class:"mipe-divider"},null,-1)),s[121]||(s[121]=e("div",{class:"mipe-subtitle"},"Skin",-1)),e("div",cl,[e("div",dl,[s[86]||(s[86]=e("span",{class:"mipe-label"},"Skin Rash:",-1)),e("span",pl,l(n(h).skinRash||"N/A"),1)]),e("div",ul,[s[87]||(s[87]=e("span",{class:"mipe-label"},"Herpes Zoster Scar:",-1)),e("span",ml,l(n(h).herpesScar||"N/A"),1)])]),s[122]||(s[122]=e("div",{class:"mipe-divider"},null,-1)),s[123]||(s[123]=e("div",{class:"mipe-subtitle"},"Neurological Examination",-1)),e("div",gl,[s[88]||(s[88]=e("span",{class:"mipe-label"},"Neck Stiffness:",-1)),e("span",vl,l(n(h).neckStiffness||"N/A"),1)]),s[124]||(s[124]=e("div",{class:"mipe-divider"},null,-1)),s[125]||(s[125]=e("div",{class:"mipe-subtitle"},"Glasgow Coma Scale (GCS)",-1)),e("div",yl,[e("div",fl,[s[89]||(s[89]=e("span",{class:"mipe-label"},"Eye Opening Response:",-1)),e("span",bl,l(n(h).eyeOpeningResponse||"N/A"),1)]),e("div",hl,[s[90]||(s[90]=e("span",{class:"mipe-label"},"Verbal Response:",-1)),e("span",_l,l(n(h).verbalResponse||"N/A"),1)]),e("div",kl,[s[91]||(s[91]=e("span",{class:"mipe-label"},"Motor Response:",-1)),e("span",xl,l(n(h).motorResponse||"N/A"),1)])]),s[126]||(s[126]=e("div",{class:"mipe-divider"},null,-1)),s[127]||(s[127]=e("div",{class:"mipe-subtitle"},"Cranial and Peripheral Nerves",-1)),e("table",Sl,[s[106]||(s[106]=e("thead",null,[e("tr",null,[e("th",null,"Cranial Nerves"),e("th",null,"Peripheral Nerves")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[s[92]||(s[92]=e("span",{class:"pe-label"},"Pupil:",-1)),e("span",wl,l(n(h).cnPupil||"N/A"),1)]),e("td",null,[s[93]||(s[93]=e("span",{class:"pe-label"},"Power:",-1)),e("span",Nl,l(n(h).pnPower||"N/A"),1)])]),e("tr",null,[e("td",null,[s[94]||(s[94]=e("span",{class:"pe-label"},"Visual Field/Acuity:",-1)),e("span",Al,l(n(h).cnVisualField||"N/A"),1)]),e("td",null,[s[95]||(s[95]=e("span",{class:"pe-label"},"Tone:",-1)),e("span",El,l(n(h).pnTone||"N/A"),1)])]),e("tr",null,[e("td",null,[s[96]||(s[96]=e("span",{class:"pe-label"},"Eye Movements/Nystagmus:",-1)),e("span",Cl,l(n(h).cnEyeMovements||"N/A"),1)]),e("td",null,[s[97]||(s[97]=e("span",{class:"pe-label"},"Reflexes:",-1)),e("span",Pl,l(n(h).pnReflexes||"N/A"),1)])]),e("tr",null,[e("td",null,[s[98]||(s[98]=e("span",{class:"pe-label"},"Facial Movements/Sensation:",-1)),e("span",Il,l(n(h).cnFacial||"N/A"),1)]),e("td",null,[s[99]||(s[99]=e("span",{class:"pe-label"},"Plantars:",-1)),e("span",Tl,l(n(h).pnPlantars||"N/A"),1)])]),e("tr",null,[e("td",null,[s[100]||(s[100]=e("span",{class:"pe-label"},"Hearing:",-1)),e("span",Ll,l(n(h).cnHearing||"N/A"),1)]),e("td",null,[s[101]||(s[101]=e("span",{class:"pe-label"},"Sensation:",-1)),e("span",Rl,l(n(h).pnSensation||"N/A"),1)])]),e("tr",null,[e("td",null,[s[102]||(s[102]=e("span",{class:"pe-label"},"Tongue Movement/Tastes:",-1)),e("span",Ml,l(n(h).cnTongue||"N/A"),1)]),e("td",null,[s[103]||(s[103]=e("span",{class:"pe-label"},"Coordination:",-1)),e("span",Ol,l(n(h).pnCoordination||"N/A"),1)])]),e("tr",null,[e("td",null,[s[104]||(s[104]=e("span",{class:"pe-label"},"Cough/Gag Reflex:",-1)),e("span",Dl,l(n(h).cnCoughGag||"N/A"),1)]),s[105]||(s[105]=e("td",null,null,-1))])])])])])):(a(),o("div",{key:3,class:Re(["clinical-notes-section-items medical-section-items",{"medical-section-items--stacked":B(F)}])},[(a(!0),o(k,null,S(E,(p,g)=>(a(),o("div",{key:g,class:"medical-record"},[e("span",Hl,l(te(p))+":",1),e("span",Fl,l(n(st)(p)),1)]))),128))],2))]))),128))]))])):n(he)==="all"?(a(),o("div",$l,[e("div",Bl,[e("header",Vl,[s[129]||(s[129]=e("div",null,[e("h2",{class:"title"},"Clinical Health Card"),e("p",{class:"subtitle"},"Complete timeline of patient's clinical review and outcomes.")],-1)),e("div",zl,[re(n(Us),{fill:"clear",size:"small",class:"refresh-btn",disabled:n(ne),onClick:n(_e),title:"Refresh Health Card"},{default:Ze(()=>[re(n(at),{icon:n(li),slot:"icon-only",class:Re({"spin-anim":n(ne)})},null,8,["icon","class"])]),_:1},8,["disabled","onClick"])])]),n(ne)?(a(),o("div",Gl,[(a(),o(k,null,S(3,E=>e("div",{class:"skeleton-card",key:"skel-"+E},[...s[130]||(s[130]=[e("div",{class:"skeleton-header"},[e("div",{class:"skeleton-icon shimmer"}),e("div",{class:"skeleton-text-wrapper"},[e("div",{class:"skeleton-title shimmer"}),e("div",{class:"skeleton-subtitle shimmer"})])],-1)])])),64))])):n(Te).length?(a(),o("div",Wl,[(a(!0),o(k,null,S(n(Te),(E,F)=>(a(),o("div",{key:E.id,class:Re(["encounter-tile",{"is-expanded":n(R)[E.id]}]),onClick:p=>n(ve)(E.id),style:ot({animationDelay:F*.05+"s"})},[e("div",{class:Re(["tile-header",{"header-expanded":n(R)[E.id]}])},[e("div",{class:"tile-icon-wrapper",style:ot({backgroundColor:n(R)[E.id]?E.color:E.color+"15",color:n(R)[E.id]?"#fff":E.color})},[re(n(at),{icon:E.icon,class:"tile-icon"},null,8,["icon"])],4),e("div",ql,[e("h4",Kl,l(E.title),1)]),re(n(at),{icon:n(ri),class:Re(["expand-icon",{expanded:n(R)[E.id]}])},null,8,["icon","class"])],2),e("div",{class:Re(["tile-body",{"body-expanded":n(R)[E.id]}])},[e("div",{class:"tile-body-inner",onClick:s[4]||(s[4]=js(()=>{},["stop"]))},[E.id==="triage"?(a(),o("div",Xl,[n(ae)?(a(),o("div",Jl,[e("div",Ql,[s[134]||(s[134]=e("span",{class:"triage-summary-letter"},"A.",-1)),e("p",er,[s[133]||(s[133]=e("strong",null,"Presenting Complaints:",-1)),e("span",null,l(n(ae).presentingComplaints),1)])]),e("div",tr,[s[136]||(s[136]=e("span",{class:"triage-summary-letter"},"B.",-1)),e("p",sr,[s[135]||(s[135]=e("strong",null,"Vital Signs:",-1)),e("span",null,l(n(ae).vitalSigns),1)])]),e("div",ir,[s[138]||(s[138]=e("span",{class:"triage-summary-letter"},"C.",-1)),e("p",nr,[s[137]||(s[137]=e("strong",null,"Triage Category:",-1)),e("span",null,l(n(ae).triageCategory),1)])]),e("div",ar,[s[140]||(s[140]=e("span",{class:"triage-summary-letter"},"D.",-1)),e("p",or,[s[139]||(s[139]=e("strong",null,"Patient Care Area:",-1)),e("span",null,l(n(ae).patientCareArea),1)])]),e("p",lr,l(n(ae).createdByLine),1)])):(a(),o("div",Zl,"No triage information found."))])):E.id==="soapier"?(a(),o("div",rr,[n(X)?(a(),o("div",dr,[e("div",pr,[e("div",ur,[s[141]||(s[141]=e("div",{class:"soapier-card-title"},"Subjective",-1)),s[142]||(s[142]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",mr,l(n(X).subjective||"N/A"),1)]),e("div",gr,[s[145]||(s[145]=e("div",{class:"soapier-card-title"},"Objective",-1)),s[146]||(s[146]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",vr,[e("div",yr,[s[143]||(s[143]=e("div",{class:"soapier-block-title"},"Objective",-1)),e("div",fr,l(n(X).objective||"N/A"),1)]),e("div",br,[s[144]||(s[144]=e("div",{class:"soapier-block-title"},"Vital Signs",-1)),e("div",hr,l(n(X).vitalSigns||"N/A"),1)])])]),e("div",_r,[s[147]||(s[147]=e("div",{class:"soapier-card-title"},"Assessment",-1)),s[148]||(s[148]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",kr,l(n(X).assessment||"N/A"),1)]),e("div",xr,[s[149]||(s[149]=e("div",{class:"soapier-card-title"},"Plan",-1)),s[150]||(s[150]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",Sr,l(n(X).plan||"N/A"),1)]),e("div",wr,[s[153]||(s[153]=e("div",{class:"soapier-card-title"},"Intervention / Implementation",-1)),s[154]||(s[154]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",Nr,[e("div",Ar,[s[151]||(s[151]=e("div",{class:"soapier-block-title"},"Non‑Pharmacological",-1)),e("div",Er,[n(X).nonPharmacological&&n(X).nonPharmacological!=="N/A"?(a(!0),o(k,{key:0},S(n(X).nonPharmacological.split(/\n|\s*\|\s*/).filter(Boolean),(p,g)=>(a(),o("div",{key:"np-all-"+g},l(p),1))),128)):(a(),o(k,{key:1},[Fe("N/A")],64))])]),e("div",Cr,[s[152]||(s[152]=e("div",{class:"soapier-block-title"},"Medications",-1)),e("div",Pr,l(n(X).medications||"N/A"),1)])])]),e("div",Ir,[s[155]||(s[155]=e("div",{class:"soapier-card-title"},"Evaluation",-1)),s[156]||(s[156]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",Tr,l(n(X).evaluation||"N/A"),1)]),e("div",Lr,[s[157]||(s[157]=e("div",{class:"soapier-card-title"},"Replan",-1)),s[158]||(s[158]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",Rr,l(n(X).replan||"N/A"),1)])]),e("div",Mr,l(n(X).createdByLine),1)])):(a(),o("div",cr,"No SOAPIER notes found."))])):E.id==="monitoring_chart"?(a(),o("div",Or,[n(ce)?(a(),o("div",Hr,[(a(!0),o(k,null,S(n(ce).charts,p=>(a(),o("div",{key:p.key,class:"monitoring-chart-card"},[e("div",Fr,l(p.title),1),s[159]||(s[159]=e("div",{class:"monitoring-chart-divider"},null,-1)),Q(p)?(a(),o("div",$r,[n(R)[E.id]?(a(),ht(n(Qs),{key:`${E.id}-${p.key}`,width:"100%",height:"160",type:"line",options:$e(p),series:p.series},null,8,["options","series"])):T("",!0)])):T("",!0),we(p)?(a(),o("div",Br,[(a(!0),o(k,null,S(p.series,(g,j)=>(a(),o("span",{key:`${p.key}-${g.name}`,class:"monitoring-chart-legend-item"},[e("span",{class:"monitoring-chart-legend-marker",style:ot({color:p.colors?.[j]||"#0ea5e9"}),"aria-hidden":"true"}," ● ",4),e("span",null,l(g.name),1)]))),128))])):T("",!0),Q(p)?T("",!0):(a(),o("div",Vr," No chartable records. "))]))),128))])):(a(),o("div",Dr," No monitoring chart records found. "))])):E.id==="fluid_balance"?(a(),o("div",zr,[n(Ve)?(a(),o("div",Ur,[(a(!0),o(k,null,S(n(Ve).entries,p=>(a(),o("div",{key:p.id,class:"fluid-balance-card"},[e("div",jr,[e("div",null,[e("div",Wr,l(p.entryDate||"Date not recorded"),1),e("div",Yr,l(p.entryTime||"Time not recorded"),1)]),e("div",{class:Re(["fluid-balance-badge",{"fluid-balance-badge--alert":Math.abs(p.balance)>1e3}])},l(p.balanceLabel),3)]),e("div",qr,[e("div",Kr,[s[160]||(s[160]=e("div",{class:"fluid-balance-section-title"},"Intake",-1)),e("ul",Xr,[(a(!0),o(k,null,S(p.intake,g=>(a(),o("li",{key:`intake-${g.title}`},[e("span",null,l(g.title)+":",1),Fe(" "+l(g.value),1)]))),128)),p.intake.length===0?(a(),o("li",Zr,"No intake recorded.")):T("",!0)])]),e("div",Jr,[s[161]||(s[161]=e("div",{class:"fluid-balance-section-title"},"Output",-1)),e("ul",Qr,[(a(!0),o(k,null,S(p.output,g=>(a(),o("li",{key:`output-${g.title}`},[e("span",null,l(g.title)+":",1),Fe(" "+l(g.value),1)]))),128)),p.output.length===0?(a(),o("li",ec,"No output recorded.")):T("",!0)])]),e("div",tc,[s[162]||(s[162]=e("div",{class:"fluid-balance-section-title"},"Stool / Lab",-1)),e("ul",sc,[(a(!0),o(k,null,S(p.stool,g=>(a(),o("li",{key:`stool-${g.title}`},[e("span",null,l(g.title)+":",1),Fe(" "+l(g.value),1)]))),128)),p.stool.length===0?(a(),o("li",ic,"No stool details recorded.")):T("",!0)])]),e("div",nc,[s[167]||(s[167]=e("div",{class:"fluid-balance-section-title"},"Summary",-1)),e("ul",ac,[e("li",null,[s[163]||(s[163]=e("span",null,"Total Intake:",-1)),Fe(" "+l(p.totalIntake)+" mL",1)]),e("li",null,[s[164]||(s[164]=e("span",null,"Total Output:",-1)),Fe(" "+l(p.totalOutput)+" mL",1)]),e("li",null,[s[165]||(s[165]=e("span",null,"24-hour Balance:",-1)),Fe(" "+l(p.balanceLabel),1)]),p.comments?(a(),o("li",oc,[s[166]||(s[166]=e("span",null,"Notes:",-1)),Fe(" "+l(p.comments),1)])):T("",!0)])])])]))),128))])):(a(),o("div",Gr," No fluid balance and stool monitoring records found. "))])):E.id==="primary_survey"?(a(),o("div",lc,[n(Ne)?(a(),o("div",cc,[e("div",dc,[(a(!0),o(k,null,S(n(Ne).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",pc,l(g),1),e("ul",uc,[(a(!0),o(k,null,S(p,(j,xe)=>(a(),o("li",{key:xe,class:"observation-row"},[e("span",mc,l(j.title),1),e("span",gc,l(j.value),1)]))),128))])]))),128))]),e("div",vc,l(n(Ne).createdByLine),1)])):(a(),o("div",rc," No primary survey records found. "))])):E.id==="sample_history"?(a(),o("div",yc,[n(V)?(a(),o("div",bc,[e("div",hc,[s[168]||(s[168]=e("div",{class:"sample-card-title"},"Symptoms - Presenting Complaints",-1)),s[169]||(s[169]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",_c,[(a(!0),o(k,null,S(n(V).cards.symptoms.items,(p,g)=>(a(),o("li",{key:g},[e("span",kc,l(p.title)+":",1),e("span",xc,l(p.value),1)]))),128)),n(V).cards.symptoms.items.length===0?(a(),o("li",Sc," No records. ")):T("",!0)]),e("div",wc,l(n(V).cards.symptoms.createdByLine),1)]),e("div",Nc,[s[170]||(s[170]=e("div",{class:"sample-card-title"},"Events",-1)),s[171]||(s[171]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Ac,[(a(!0),o(k,null,S(n(V).cards.events.items,(p,g)=>(a(),o("li",{key:g},[e("span",Ec,l(p.title)+":",1),e("span",Cc,l(p.value),1)]))),128)),n(V).cards.events.items.length===0?(a(),o("li",Pc," No records. ")):T("",!0)]),e("div",Ic,l(n(V).cards.events.createdByLine),1)]),e("div",Tc,[s[172]||(s[172]=e("div",{class:"sample-card-title"},"Allergies",-1)),s[173]||(s[173]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Lc,[(a(!0),o(k,null,S(n(V).cards.allergies.items,(p,g)=>(a(),o("li",{key:g},[e("span",Rc,l(p.title)+":",1),e("span",Mc,l(p.value),1)]))),128)),n(V).cards.allergies.items.length===0?(a(),o("li",Oc," No records. ")):T("",!0)]),e("div",Dc,l(n(V).cards.allergies.createdByLine),1)]),e("div",Hc,[s[174]||(s[174]=e("div",{class:"sample-card-title"},"Medications",-1)),s[175]||(s[175]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Fc,[(a(!0),o(k,null,S(n(V).cards.medications.items,(p,g)=>(a(),o("li",{key:g},[e("span",$c,l(p.title)+":",1),e("span",Bc,l(p.value),1)]))),128)),n(V).cards.medications.items.length===0?(a(),o("li",Vc," No records. ")):T("",!0)]),e("div",zc,l(n(V).cards.medications.createdByLine),1)]),e("div",Gc,[s[176]||(s[176]=e("div",{class:"sample-card-title"},"Prior/Existing Conditions",-1)),s[177]||(s[177]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Uc,[(a(!0),o(k,null,S(n(V).cards.priorConditions.items,(p,g)=>(a(),o("li",{key:g},[e("span",jc,l(p.title)+":",1),e("span",Wc,l(p.value),1)]))),128)),n(V).cards.priorConditions.items.length===0?(a(),o("li",Yc," No records. ")):T("",!0)]),e("div",qc,l(n(V).cards.priorConditions.createdByLine),1)]),e("div",Kc,[s[178]||(s[178]=e("div",{class:"sample-card-title"},"Last Meal",-1)),s[179]||(s[179]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Xc,[(a(!0),o(k,null,S(n(V).cards.lastMeal.items,(p,g)=>(a(),o("li",{key:g},[e("span",Zc,l(p.title)+":",1),e("span",Jc,l(p.value),1)]))),128)),n(V).cards.lastMeal.items.length===0?(a(),o("li",Qc," No records. ")):T("",!0)]),e("div",ed,l(n(V).cards.lastMeal.createdByLine),1)])])):(a(),o("div",fc," No SAMPLE history records found. "))])):E.id==="secondary_survey"?(a(),o("div",td,[n(Oe)?(a(),o("div",id,[e("div",nd,[(a(!0),o(k,null,S(n(Oe).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",ad,l(g),1),e("ul",od,[(a(!0),o(k,null,S(p,(j,xe)=>(a(),o("li",{key:xe,class:"observation-row"},[e("span",ld,l(j.title),1),e("span",rd,l(j.value),1)]))),128))])]))),128))]),e("div",cd,l(n(Oe).createdByLine),1)])):(a(),o("div",sd," No secondary survey records found. "))])):E.id==="diagnosis"?(a(),o("div",dd,[n(Ue)?(a(),o("div",ud,[(a(!0),o(k,null,S(n(Ue).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",md,l(g),1),e("ul",gd,[(a(!0),o(k,null,S(p,(j,xe)=>(a(),o("li",{key:xe,class:"observation-row"},[e("span",vd,l(j.title),1),e("span",yd,l(j.value),1)]))),128))])]))),128)),e("div",fd,l(n(Ue).createdByLine),1)])):(a(),o("div",pd," No diagnosis records found. "))])):E.id==="investigations"?(a(),o("div",bd,[re(pi,{record:n(U),"selected-visit-only":""},null,8,["record"]),n(ye)?(a(),o("div",_d,[n(ye).cards.labOrdersPlan.items.length?(a(),o("div",kd,[s[180]||(s[180]=e("div",{class:"pm-card-title"},"Lab Orders Plan",-1)),s[181]||(s[181]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",xd,[(a(!0),o(k,null,S(n(ye).cards.labOrdersPlan.items,(p,g)=>(a(),o("li",{key:g},[e("span",Sd,l(p.title)+":",1),e("span",wd,l(p.value),1)]))),128))]),e("div",Nd,l(n(ye).cards.labOrdersPlan.createdByLine),1)])):T("",!0),n(ye).cards.bedsidePlan.items.length?(a(),o("div",Ad,[s[182]||(s[182]=e("div",{class:"pm-card-title"},"Bedside Investigation Plan",-1)),s[183]||(s[183]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Ed,[(a(!0),o(k,null,S(n(ye).cards.bedsidePlan.items,(p,g)=>(a(),o("li",{key:g},[e("span",Cd,l(p.title)+":",1),e("span",Pd,l(p.value),1)]))),128))]),e("div",Id,l(n(ye).cards.bedsidePlan.createdByLine),1)])):T("",!0),!n(ye).cards.labOrdersPlan.items.length&&!n(ye).cards.bedsidePlan.items.length?(a(),o("div",Td," No findings recorded. ")):T("",!0)])):(a(),o("div",hd," No laboratory or bedside investigation plans recorded. "))])):E.id==="patient_management"?(a(),o("div",Ld,[n(ke)?(a(),o("div",Md,[e("div",Od,[s[184]||(s[184]=e("div",{class:"pm-card-title"},"Non‑Pharmacological",-1)),s[185]||(s[185]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Dd,[(a(!0),o(k,null,S(n(ke).cards.nonPharmacological.items,(p,g)=>(a(),o("li",{key:g},[e("span",Hd,l(p.title)+":",1),e("span",Fd,l(p.value),1)]))),128)),n(ke).cards.nonPharmacological.items.length===0?(a(),o("li",$d," No records. ")):T("",!0)]),e("div",Bd,l(n(ke).cards.nonPharmacological.createdByLine),1)]),e("div",Vd,[s[186]||(s[186]=e("div",{class:"pm-card-title"},"Patient Care Area",-1)),s[187]||(s[187]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",zd,[(a(!0),o(k,null,S(n(ke).cards.patientCareArea.items,(p,g)=>(a(),o("li",{key:g},[e("span",Gd,l(p.title)+":",1),e("span",Ud,l(p.value),1)]))),128)),n(ke).cards.patientCareArea.items.length===0?(a(),o("li",jd," No records. ")):T("",!0)]),e("div",Wd,l(n(ke).cards.patientCareArea.createdByLine),1)]),e("div",Yd,[s[188]||(s[188]=e("div",{class:"pm-card-title"},"Medications",-1)),s[189]||(s[189]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",qd,[(a(!0),o(k,null,S(n(ke).cards.medications.items,(p,g)=>(a(),o("li",{key:g},[e("span",Kd,l(p.title)+":",1),e("span",Xd,l(p.value),1)]))),128)),n(ke).cards.medications.items.length===0?(a(),o("li",Zd," No records. ")):T("",!0)]),e("div",Jd,l(n(ke).cards.medications.createdByLine),1)])])):(a(),o("div",Rd," No patient management plan records found. "))])):E.id==="continuation"?(a(),o("div",Qd,[n(De)?(a(),o("div",tp,[(a(!0),o(k,null,S(n(De).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",sp,l(g),1),e("ul",ip,[(a(!0),o(k,null,S(p,(j,xe)=>(a(),o("li",{key:xe,class:"observation-row"},[e("span",np,l(j.title),1),e("span",ap,l(j.value),1)]))),128))])]))),128)),e("div",op,l(n(De).createdByLine),1)])):(a(),o("div",ep," No continuation notes found. "))])):E.id==="disposition"?(a(),o("div",lp,[n(He)?(a(),o("div",cp,[e("div",dp,[s[190]||(s[190]=e("div",{class:"pm-card-title"},"Awaiting Specialty",-1)),s[191]||(s[191]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",pp,[(a(!0),o(k,null,S(n(He).cards.awaitingSpecialty.items,(p,g)=>(a(),o("li",{key:g},[e("span",up,l(p.title)+":",1),e("span",mp,l(p.value),1)]))),128)),n(He).cards.awaitingSpecialty.items.length===0?(a(),o("li",gp," No records. ")):T("",!0)]),e("div",vp,l(n(He).cards.awaitingSpecialty.createdByLine),1)]),(a(!0),o(k,null,S(n(He).otherCards,p=>(a(),o("div",{key:p.key,class:"pm-card"},[e("div",yp,l(p.title),1),s[192]||(s[192]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",fp,[(a(!0),o(k,null,S(p.items,(g,j)=>(a(),o("li",{key:j},[e("span",bp,l(g.title)+":",1),e("span",hp,l(g.value),1)]))),128)),p.items.length===0?(a(),o("li",_p,"No records.")):T("",!0)]),e("div",kp,l(p.createdByLine),1)]))),128))])):(a(),o("div",rp," No disposition notes found. "))])):T("",!0)])],2)],14,Yl))),128))])):(a(),o("div",Ul,[e("div",jl,[re(n(at),{icon:n(Pt),class:"empty-icon"},null,8,["icon"])]),s[131]||(s[131]=e("h3",null,"No Clinical Records Found",-1)),s[132]||(s[132]=e("p",null,"The clinical review workflow has not been started or saved yet.",-1))]))])])):(a(),o("div",xp,"Clinical notes records will appear here."))]),_:1})]),_:1})]))}}),Xt={Weight:["Weight (kg)","Weight"],"Height (cm)":["Height (cm)","Height"],Temperature:["Temperature (c)","Temperature"],Pulse:["Pulse","Pulse Rate","Pulse rate"],Systolic:["Systolic blood pressure","Systolic"],Diastolic:["Diastolic blood pressure","Diastolic"],"Respiratory rate":["Respiratory rate","Respiratory Rate"]},ts=me=>{const U=`${me??""}`.trim();return Date.parse(U)||Date.parse(U.replace(" ","T").replace(/ ?([+-]\d\d)(\d\d)$/,"$1:$2"))||0},Sp=me=>{const U=me?.value_numeric??me?.value_text;if(U==null||`${U}`.trim()==="")return;const te=Number(U);return Number.isFinite(te)?te:void 0},Yp=me=>{let U;const te=$=>{if($){if(`${$.concept_name??""}`.trim().toLowerCase()==="blood glucose"&&!Number($.voided)){const B=`${$.value_text??$.value_numeric??""}`.trim().match(/^([\d.]+)\s*(.*)$/);if(B){const Q=ts($.obs_datetime);(!U||Q>U.at)&&(U={at:Q,value:B[1],unit:B[2]||"mmol/l"})}}($.children||$.child||$.groupMembers||[]).forEach(te)}};return(me?.observations||[]).forEach($=>($?.obs||[]).forEach(te)),U?{value:U.value,unit:U.unit}:void 0},qp=me=>{const U=new Map;Object.entries(Xt).forEach(([L,B])=>B.forEach(Q=>U.set(Q.toLowerCase(),L)));const te={},$=L=>{if(!L)return;const B=U.get(`${L.concept_name??""}`.trim().toLowerCase()),Q=B&&!Number(L.voided)?Sp(L):void 0;if(B&&Q!==void 0){const we=ts(L.obs_datetime);(!te[B]||we>te[B].at)&&(te[B]={at:we,value:Q})}(L.children||L.child||L.groupMembers||[]).forEach($)};return(me?.observations||[]).forEach(L=>(L?.obs||[]).forEach($)),Object.keys(Xt).reduce((L,B)=>(L[B]=te[B]?.value,L),{})},wp={key:0,class:"menu-note"},Np={class:"item-title"},Ap=Jt({__name:"StartVisitMenu",props:{items:{},note:{}},emits:["select"],setup(me,{expose:U,emit:te}){const $=te,L=I(!1),B=I(null),Q=I(null),we=I({top:"0px",left:"0px"}),$e=I({overflowY:"auto"});let he=null,Pe=null;const ge=()=>{L.value=!1,he=null,Pe!==null&&cancelAnimationFrame(Pe),Pe=null},Me=()=>{if(!L.value||!he||!B.value)return;const R=he.getBoundingClientRect();if(!R.width||!R.height){ge();return}const ve=B.value.offsetWidth,ne=Q.value?.scrollHeight||B.value.offsetHeight,_e=8,Te=Math.max(8,Math.min(R.right-ve,window.innerWidth-ve-8)),ae=Math.max(0,window.innerHeight-R.bottom-_e-12),X=Math.max(0,R.top-_e-12),ce=ne>ae&&X>ae,Ve=Math.min(ne,ce?X:ae),Ne=ce?R.top-_e-Ve:R.bottom+_e,V=Math.max(8,Math.min(ve-20,Te+ve-(R.left+R.width/2)-6));$e.value={maxHeight:`${ce?X:ae}px`,overflowY:"auto",boxSizing:"border-box"},we.value={top:`${Ne}px`,left:`${Te}px`,"--arrow-right":`${V}px`,"--arrow-top":ce?"auto":"-6px","--arrow-bottom":ce?"-6px":"auto","--arrow-transform":ce?"rotate(225deg)":"rotate(45deg)","--arrow-shadow":ce?"2px 2px 3px rgba(0, 0, 0, 0.05)":"-2px -2px 3px rgba(0, 0, 0, 0.05)"},Pe=requestAnimationFrame(Me)},Be=async R=>{if(R.stopPropagation(),L.value){ge();return}he=R.currentTarget,L.value=!0,await Zt(),Me()},Ge=R=>{R.disabled||(ge(),$("select",R))},Ie=R=>{R.key==="Escape"&&L.value&&ge()};return Qt(()=>window.addEventListener("keydown",Ie)),Ys(()=>{ge(),window.removeEventListener("keydown",Ie)}),U({open:Be,close:ge}),(R,ve)=>(a(),ht(qs,{to:"body"},[L.value?(a(),o("div",{key:0,class:"custom-menu-backdrop",onClick:ge})):T("",!0),L.value?(a(),o("div",{key:1,ref_key:"menuElement",ref:B,class:"custom-premium-menu profile-program-menu",style:ot(we.value)},[ve[0]||(ve[0]=e("div",{class:"menu-arrow"},null,-1)),e("div",{ref_key:"menuContentElement",ref:Q,class:"modern-popover-container",style:ot($e.value)},[me.note?(a(),o("div",wp,l(me.note),1)):T("",!0),re(n(Js),{lines:"none"},{default:Ze(()=>[(a(!0),o(k,null,S(me.items,(ne,_e)=>(a(),o(k,{key:_e},[ne.isHeader?(a(),ht(n(Ks),{key:0,class:"program-section-label"},{default:Ze(()=>[re(n(Xs),null,{default:Ze(()=>[Fe(l(ne.label),1)]),_:2},1024)]),_:2},1024)):(a(),ht(n(Zs),{key:1,button:!0,detail:!1,class:Re(["modern-popover-item",{"child-item":ne.isChild}]),disabled:ne.disabled,onClick:Te=>Ge(ne)},{default:Ze(()=>[re(n(at),{slot:"start",icon:n(ci),class:"add-icon"},null,8,["icon"]),e("span",Np,l(ne.label),1)]),_:2},1032,["class","disabled","onClick"]))],64))),128))]),_:1})],4)],4)):T("",!0)]))}}),Kp=vi(Ap,[["__scopeId","data-v-d854a4c6"]]);export{Kp as S,Wp as _,qp as a,Yp as g};

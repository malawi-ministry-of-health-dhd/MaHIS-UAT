import{f as ee,i as I,j as qt,d as Kt,k as Xt,o as a,c as o,B as ue,C as Ke,u as n,G as Hs,a as e,F as k,r as S,t as l,e as T,b as Oe,K as Fs,J as nt,n as at,M as $s,D as Be,A as vt,I as Bs,Y as Vs,ag as Gs,cc as zs,V as js,U as Us,aY as Ws}from"../index-B_NpdBnf.js";import{m as Ys}from"./vue3-apexcharts-G6LIroaa.js";import{J as qs,ah as At,W as Ks,V as Et,ch as Xs,$ as Zs,Z as Js,bL as Qs,bl as ei,cg as ti,a8 as si,q as ii}from"./index-DF8wLZ1S.js";import ni from"./DemographicBar-BREZh2_K.js";import{D as it}from"./Alerts-DVtUi8RG.js";import{O as gt}from"./GlobalPropertyStore-DHeyzCou.js";import{E as f}from"./encounter_type-DoHhh_tY.js";import{ConceptService as Wt}from"./concept_service-C4m-VUV-.js";import{UserService as ai}from"./user_service-BE4BcQBZ.js";import{u as oi}from"./SelectedVisitStore-CnVw2uAd.js";import{H as R}from"./service-249EkX7u.js";/* empty css                                                                      *//* empty css                                                                            */import{toastWarning as qe}from"./toasts-fF_4gG_L.js";import"./lodash-DyrGR4_s.js";import{F as ae}from"./fluidBalanceChart-CceTgQEr.js";import{_ as li}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ri=()=>{const j=I("all"),M=I([]),J=I([]),$=I([]),L=I(!1),H=I(!1),oe=I(!1),Ne=I(!1),fe=I(null),Ae=new Map,Ee=new Map,ke=I(!1),Re=I(null),ze=I(!1),De=I(null),be=I(!1),F=I(null),me=I(!1),se=I(null),xe=I(!1),le=I(null),U=I(!1),Se=I(null),he=I(!1),Ce=I(null),B=I(!1),Pe=I(null),je=I(!1),ge=I(null),_e=I(!1),He=I(null),Fe=I(!1),Ue=I(null),$e=I({}),yt=i=>{$e.value[i]=!$e.value[i]},W=ee(()=>Ne.value||ke.value||ze.value||be.value||me.value||xe.value||U.value||he.value||B.value||je.value||_e.value||Fe.value),Qe=async()=>{await Gt("all")},Xe=ee(()=>{const i=[];return fe.value&&i.push({id:"triage",title:"Triage Information",icon:qs,color:"#ef4444"}),Re.value&&i.push({id:"soapier",title:"SOAPIER Notes",icon:At,color:"#f43f5e"}),De.value&&i.push({id:"monitoring_chart",title:"Monitoring Charts",icon:At,color:"#006401"}),F.value&&i.push({id:"fluid_balance",title:"Fluid Balance & Stool Monitoring",icon:At,color:"#14b8a6"}),se.value&&i.push({id:"primary_survey",title:"Primary Survey",icon:Ks,color:"#8b5cf6"}),le.value&&i.push({id:"sample_history",title:"SAMPLE History",icon:Et,color:"#006401"}),Se.value&&i.push({id:"secondary_survey",title:"Secondary Survey",icon:Xs,color:"#22c55e"}),Ce.value&&i.push({id:"diagnosis",title:"Diagnosis",icon:Zs,color:"#f59e0b"}),Pe.value&&i.push({id:"investigations",title:"Laboratory / Radiology Findings",icon:Js,color:"#006401"}),ge.value&&i.push({id:"patient_management",title:"Patient Management Plan",icon:Qs,color:"#14b8a6"}),He.value&&i.push({id:"continuation",title:"Continuation Notes",icon:Et,color:"#64748b"}),Ue.value&&i.push({id:"disposition",title:"Disposition Notes",icon:ei,color:"#14b8a6"}),i}),ot=i=>{const t=(i||"").toLowerCase();return t.includes("presenting")?"Presenting Complaints":t.includes("surgical procedure")||t==="procedures"?"Past Surgical History":t.includes("family history")?"Family History":t.includes("allergy")||t.includes("allergen")?"Allergies":t.includes("smokes")||t.includes("smoking")||t.includes("alcohol intake")||t.includes("recreational drug")||t.includes("expected duration")?"Social History":t.includes("pregnancy")||t.includes("lnmp")||t.includes("gestational")||t.includes("parity")?"Gynecological History":t.includes("review of systems")||t.includes("severe respiratory")?"Review of Systems":t.includes("differential diagnosis")?"Working Differential Diagnosis":t.includes("notes")?"Investigations":t.includes("clerk")||t.includes("designation")||t.includes("signature")||t.includes("additional notes")?"Initial Management":t.includes("general condition")||t.includes("blood pressure")||t.includes("pulse")||t.includes("respiratory")||t.includes("temperature")||t.includes("eyes")||t.includes("mouth")||t.includes("neck")||t.includes("chest")||t.includes("endocrine examination")||t.includes("abdominal")||t.includes("motor response")||t.includes("verbal response")||t.includes("eye opening response")||t.includes("cranial")||t.includes("gross motor")||t.includes("sensation")||t.includes("pulsations")||t.includes("rectal")||t.includes("extremities")||t.includes("vaginal")?"Physical Examination":t.includes("condition")||t.includes("medication")||t.includes("treatment")||t.includes("reason for request")?"Past Medical History":"Other"},ft=i=>{const t=(i||"").toLowerCase();return t.includes("presenting complaints")||t.includes("presenting history")?"Presenting Complaints":t.includes("other medication")?"Past Medical History":t.includes("medication")||t.includes("drug")||t.includes("prescription")||t.includes("none")?"Drug History":t.includes("hiv")||t.includes("arv")||t.includes("health center")||t.includes("historical drug start date")?"Past Medical History":t.includes("surgical history")?"Past Surgical History":t.includes("allergy")||t.includes("allergen")||t.includes("allergic")||t.includes("hypersensitivity")?"Allergy":t.includes("intoxication")?"Intoxication":t.includes("social history")?"Social History":t.includes("family history")?"Family History":t.includes("review of systems")||t.includes("severe respiratory")||t.includes("skin infection")?"Review of Systems":t.includes("general")||t.includes("blood pressure")||t.includes("pulse")||t.includes("respiratory")||t.includes("temperature")||t.includes("oxygen")||t.includes("pupil")||t.includes("conjunctiva")||t.includes("oral")||t.includes("jvp")||t.includes("lymphadenopathy")||t.includes("trachea")||t.includes("expansion")||t.includes("apex")||t.includes("thrill heaves")||t.includes("auscultation")||t.includes("lung condition")||t.includes("lung position")||t.includes("palpation")||t==="condition"||t==="other"||t.includes("oedema")||t.includes("rash")||t.includes("herpes")||t.includes("neck stiffness")||t.includes("motor response")||t.includes("verbal response")||t.includes("eye opening response")||t.includes("visual field")||t.includes("eye movements")||t.includes("hearing")||t.includes("tongue")||t.includes("cough")||t.includes("power")||t.includes("tone")||t.includes("reflexes")||t.includes("plantars")||t.includes("sensation")||t.includes("coordination")||t.includes("gait")?"Physical Examination":t.includes("summary")?"Summary":t.includes("differential diagnosis")?"Differential Diagnosis":t.includes("assessment")||t.includes("additional notes")?"Investigations":t==="plan"?"Management Plan":"Other"},lt=i=>{const t=(i||"").toLowerCase();return t.includes("chief complaint")||t.includes("history of present illness")?"Complaints":t.includes("lnmp")||t.includes("edd")||t.includes("gestational")||t.includes("gravidity")||t.includes("parity")||t.includes("living children")||t.includes("menarche")||t.includes("menstrual")||t.includes("duration")||t.includes("abortion")||t.includes("ectopic")||t.includes("vaginal discharge")||t.includes("consistency")||t.includes("color")||t.includes("colour")||t.includes("odour")||t.includes("amount")||t.includes("contraceptive")||t.includes("side effects")||t.includes("cancer screening")||t.includes("history of stis")?"Obstetric And Gynaecology History":t.includes("hypertension")||t.includes("diabetes")||t.includes("tuberculosis")||t.includes("epilepsy")||t.includes("asthma")||t.includes("mental illness")||t.includes("blood transfusion")||t.includes("drug allergies")?"Medical History":t.includes("alcohol")||t.includes("smok")||t.includes("recreational drug")?"Habits":t.includes("oxygen")||t.includes("pulse")||t.includes("blood pressure")||t.includes("respiratory")||t.includes("temperature")||t.includes("blood glucose")||t.includes("weight")||t.includes("height")?"Vital Signs":t.includes("general condition")||t.includes("pallor")||t.includes("chest")||t.includes("abdomen")||t.includes("vaginal")||t.includes("extremities")?"General Examination":t.includes("impression")?"Impression":t==="plan"||t.includes("immediate intervention")?"Plan":"Other"},Y=i=>i?.concept_name||i?.concept_id||"",we=i=>i!=null&&`${i}`.trim()!=="",ie=i=>{if(!i)return"";const t=i?.value_coded_name??i?.value_coded_display??i?.valueCodedName??i?.valueCodedDisplay??i?.value_coded?.name??i?.value_coded?.label??i?.value_coded?.value;if(we(t))return t;const r=i?.value_text??i?.valueText;if(we(r))return r;const d=i?.value_numeric??i?.valueNumeric??i?.value_number??i?.valueNumber;if(we(d)){const A=i?.value_modifier??i?.valueModifier,N=we(A)?` ${A}`:"";return`${d}${N}`}const m=i?.value_datetime??i?.valueDatetime??i?.valueDateTime;if(we(m))return R.toStandardHisDisplayFormat(m);const u=i?.value_date??i?.valueDate;if(we(u))return R.toStandardHisDisplayFormat(u);const y=i?.value_boolean??i?.valueBoolean;if(we(y))return String(y);if(we(i?.value))return i.value;const w=i?.value_coded??i?.valueCoded;return we(w)?w:""},We=async i=>{const t=i.filter(m=>{const u=Y(m).toLowerCase();return u.includes("differential diagnosis")||u.includes("attempted/ differential diagnosis")}),r=Array.from(new Set(t.map(m=>Number(m?.value_coded)).filter(m=>Number.isFinite(m)&&m>0)));if(r.length===0)return i;const d=new Map;return await Promise.all(r.map(async m=>{const u=await Wt.getConceptName(m);u&&d.set(m,u)})),i.map(m=>{const u=Number(m?.value_coded);return d.has(u)&&!m?.value_text&&!m?.value_coded_name?{...m,value_text:d.get(u)}:m})},et=i=>{const t=i.filter(u=>Y(u).toLowerCase()==="presenting complaints"),r=i.filter(u=>Y(u).toLowerCase()==="presenting history"),m=[...i.filter(u=>{const y=Y(u).toLowerCase();return y!=="presenting complaints"&&y!=="presenting history"})];if(t.length>0){const u=t.map(y=>String(ie(y)).trim()).filter(Boolean);u.length>0&&m.push({...t[0],concept_name:"Presenting Complaints",value_text:u.join(", ")})}if(r.length>0){const u=r.reduce((y,w)=>{const A=new Date(y?.obs_datetime||0).getTime();return new Date(w?.obs_datetime||0).getTime()>A?w:y});m.push(u)}return m},v=(i,t)=>{const r=(i||[]).find(d=>{const m=ce(Y(d));return t.some(u=>u(m))});return r?String(ie(r)??"").trim():""},Ze=ee(()=>{const i=Me.value?.["Physical Examination"]||[];return{generalCondition:v(i,[t=>t.includes("general condition")]),temperature:v(i,[t=>t==="temperature"||t.includes("temperature")]),pulseRate:v(i,[t=>t.includes("pulse rate")||t==="pulse rate"||t==="pulse"]),bloodPressure:v(i,[t=>t.includes("blood pressure")]),respiratoryRate:v(i,[t=>t.includes("respiratory rate")||t.includes("respiratory")]),eyes:v(i,[t=>t==="eyes"||t.includes("eyes")]),mouth:v(i,[t=>t==="mouth"||t.includes("mouth")]),neck:v(i,[t=>t==="neck"||t.includes("neck")]),chestExamination:v(i,[t=>t.includes("chest examination")]),endocrineExamination:v(i,[t=>t.includes("endocrine examination")]),abdominalExamination:v(i,[t=>t.includes("abdominal examination")]),motorResponse:v(i,[t=>t.includes("motor response")]),verbalResponse:v(i,[t=>t.includes("verbal response")]),eyeOpeningResponse:v(i,[t=>t.includes("eye opening response")||t.includes("eye response")]),cranialNerves:v(i,[t=>t.includes("cranial")]),grossMotor:v(i,[t=>t.includes("gross motor")]),sensation:v(i,[t=>t==="sensation"||t.includes("sensation")]),pulsations:v(i,[t=>t.includes("pulsations")]),rectalExamination:v(i,[t=>t.includes("rectal examination")]),extremities:v(i,[t=>t==="extremities"||t.includes("extremities")])}}),bt=ee(()=>{const i=Me.value?.["Initial Management"]||[];return{clerkName:v(i,[t=>t.includes("clerk name")]),designation:v(i,[t=>t.includes("designation")]),signature:v(i,[t=>t.includes("signature")])}}),rt=ee(()=>{const i=Me.value?.["Presenting Complaints"]||[];return{complaints:v(i,[t=>t==="presenting complaints"||t.includes("presenting complaints")]),history:v(i,[t=>t==="presenting history"||t.includes("presenting history")])}}),tt=ee(()=>{const i=Me.value?.["Past Medical History"]||[];return de(i)}),ct=i=>{const t=[],r=[];return i.forEach((d,m)=>{(m%2===0?t:r).push(d)}),{left:t,right:r}},Ve=ee(()=>{const i=Me.value?.["Review of Systems"]||[];return de(i)}),ne=ee(()=>ct(Ve.value)),s=ee(()=>{const i=Me.value?.["Past Surgical History"]||[];return de(i)}),E=ee(()=>{const i=Me.value?.["Family History"]||[];return de(i)}),D=ee(()=>{const i=Me.value?.["Social History"]||[];return de(i)}),p=ee(()=>{const i=Me.value?.["Gynecological History"]||[];return de(i)}),g=ee(()=>{const i=dt.value?.["Presenting Complaints"]||[];return{complaints:v(i,[t=>t==="presenting complaints"||t.includes("presenting complaints")]),history:v(i,[t=>t==="presenting history"||t.includes("presenting history")])}}),z=ee(()=>{const i=dt.value?.["Physical Examination"]||[],t=c=>v(i,c),r=t([c=>c==="auscultation"||c.includes("auscultation")&&!c.includes("lung")]),d=t([c=>c==="region"||c.includes("region")]),m=t([c=>c==="inspection"||c.includes("inspection")]),u=t([c=>c.includes("light palpation")]),y=t([c=>c.includes("deep palpation")]),w=t([c=>c==="auscultation_lung"||c.includes("auscultation")&&c!=="auscultation"]),A=t([c=>c.includes("shifting dullness")]),N=t([c=>c.includes("fluid thrill")]);return{general:t([c=>c==="general"||c.includes("general")]),temperature:t([c=>c.includes("temperature")]),pulseRate:t([c=>c==="pulse rate"||c.includes("pulse rate")]),systolic:t([c=>c.includes("systolic")]),diastolic:t([c=>c.includes("diastolic")]),respiratoryRate:t([c=>c.includes("respiratory rate")||c==="respiratory rate"]),oxygenSaturation:t([c=>c.includes("oxygen saturation")]),pupilsSymmetrical:t([c=>c.includes("pupils symmetrical")]),conjunctiva:t([c=>c.includes("conjunctiva")]),oralKs:t([c=>c.includes("oral ks")]),oralThrush:t([c=>c.includes("oral thrush")||c.includes("candidosis")]),lymphadenopathy:t([c=>c.includes("lymphadenopathy")]),headNeckOther:t([c=>c==="other"]),symmetricalExpansion:t([c=>c.includes("symmetrical expansion")]),symmetricalExpansionDescription:t([c=>c==="description"||c.includes("description")&&!c.includes("additional")]),apexBeat:t([c=>c.includes("apex beat")]),thrillHeaves:t([c=>c.includes("thrill")||c.includes("thrill heaves")]),auscultationHeart:r,lungCondition:t([c=>c.includes("lung condition")||c==="condition"]),lungPosition:t([c=>c.includes("lung position")]),abdomenRegion:d,abdomenInspection:m,abdomenLightPalpation:u,abdomenDeepPalpation:y,abdomenAuscultation:w,abdomenShiftingDullness:A,abdomenFluidThrill:N,oedema:t([c=>c.includes("oedema")]),skinRash:t([c=>c.includes("skin rash")||c==="rash"]),herpesScar:t([c=>c.includes("herpes zoster")]),neckStiffness:t([c=>c.includes("neck stiffness")]),eyeOpeningResponse:t([c=>c.includes("eye opening response")]),verbalResponse:t([c=>c.includes("verbal response")]),motorResponse:t([c=>c.includes("motor response")]),cnPupil:t([c=>c==="pupil"||c.includes("pupil:")||c.includes("pupil")]),cnVisualField:t([c=>c.includes("visual field")]),cnEyeMovements:t([c=>c.includes("eye movements")&&c.includes("nystagmus")]),cnFacial:t([c=>c.includes("facial")||c.includes("eye movements/sensation")]),cnHearing:t([c=>c.includes("hearing")]),cnTongue:t([c=>c.includes("tongue movement")||c.includes("tongue")]),cnCoughGag:t([c=>c.includes("cough")||c.includes("gag")]),pnPower:t([c=>c==="power"||c.includes("power")]),pnTone:t([c=>c==="tone"||c.includes("tone")]),pnReflexes:t([c=>c.includes("reflexes")]),pnPlantars:t([c=>c.includes("plantars")]),pnSensation:t([c=>c==="sensation"||c.includes("sensation")&&!c.includes("facial")]),pnCoordination:t([c=>c.includes("coordination")])}}),re=i=>{const t=i?.children??i?.child??i?.groupMembers??[];return Array.isArray(t)?t:[]},Ct=i=>i.flatMap(t=>re(t).map(r=>({zone:String(ie(r)??"").trim(),findings:re(r).map(d=>({title:Y(d),value:String(ie(d)??"").trim()})).filter(d=>d.title&&d.value)}))).filter(t=>t.zone&&t.findings.length>0),Jt=ee(()=>{const i=$.value||[],t=r=>i.filter(d=>re(d).length>0&&r(ce(Y(d))));return{respiratory:Ct(t(r=>r.includes("lung position"))),abdomen:Ct(t(r=>r==="palpation"))}}),Pt=ee(()=>{const i=dt.value?.["Review of Systems"]||[];return de(i)}),Qt=ee(()=>ct(Pt.value)),ht=i=>{const t=new Map;return i.forEach(r=>{const d=String(Y(r));if(!d)return;const m=new Date(r?.obs_datetime||0).getTime(),u=t.get(d),y=u?new Date(u?.obs_datetime||0).getTime():-1;(!u||m>=y)&&t.set(d,r)}),Array.from(t.values())},es=i=>[...i||[]].sort((t,r)=>new Date(r?.obs_datetime||0).getTime()-new Date(t?.obs_datetime||0).getTime()),ts=i=>{const t=new Set;return(i||[]).filter(r=>{if(re(r).length>0)return!0;const d=`${Y(r)}::${ce(ie(r))}`;return t.has(d)?!1:(t.add(d),!0)})},_t=(i,t=[])=>{const r={};for(const d of t)i[d]&&(r[d]=i[d]);return Object.entries(i).forEach(([d,m])=>{r[d]||(r[d]=m)}),r},Me=ee(()=>{const i={},t=et(M.value);for(const r of t){const d=ot(r?.concept_name||r?.concept_id||"");i[d]||(i[d]=[]),i[d].push(r)}return _t(i,["Presenting Complaints","Past Medical History","Past Surgical History","Family History","Social History","Allergies","Gynecological History","Review of Systems","Physical Examination","Working Differential Diagnosis","Investigations","Initial Management","Other"])}),dt=ee(()=>{const i={},t=et($.value);for(const r of t){const d=ft(r?.concept_name||r?.concept_id||"");i[d]||(i[d]=[]),i[d].push(r)}return _t(i,["Presenting Complaints","Drug History","Past Medical History","Past Surgical History","Social History","Family History","Allergy","Intoxication","Review of Systems","Physical Examination","Summary","Differential Diagnosis","Investigations","Management Plan"])}),ss=ee(()=>{const i={};for(const t of J.value){const r=lt(t?.concept_name||t?.concept_id||"");i[r]||(i[r]=[]),i[r].push(t)}return _t(i,["Complaints","Obstetric And Gynaecology History","Medical History","Habits","Vital Signs","General Examination","Impression","Plan"])}),is=async()=>{L.value=!0;try{const t=(await Z(f.SURGICAL_NOTES_TEMPLATE)).flatMap(u=>u.obs||[]),r=t.map(u=>R.toStandardHisFormat(u?.obs_datetime)).filter(Boolean).sort().pop(),d=r?t.filter(u=>R.toStandardHisFormat(u?.obs_datetime)===r):[],m=await We(d);M.value=ht(m)}catch(i){console.error("Failed to load surgical notes records:",i),M.value=[]}finally{L.value=!1}},ns=async()=>{oe.value=!0;try{const t=(await Z(f.MEDICAL_IN_PATIENT)).flatMap(d=>d.obs||[]),r=await We(es(t));$.value=ts(r)}catch(i){console.error("Failed to load medical inpatient records:",i),$.value=[]}finally{oe.value=!1}},as=async()=>{H.value=!0;try{const t=(await Z(f.GYNEACOLOGY_WARD)).flatMap(u=>u.obs||[]),r=t.map(u=>R.toStandardHisFormat(u?.obs_datetime)).filter(Boolean).sort().pop(),d=r?t.filter(u=>R.toStandardHisFormat(u?.obs_datetime)===r):[],m=await We(d);J.value=ht(m)}catch(i){console.error("Failed to load gyneacology ward records:",i),J.value=[]}finally{H.value=!1}},It={all:"Clinical Notes",surgical:"Surgical Notes",gyneacology:"Gyneacology Ward",medical:"Medical Inpatient"},kt=async()=>{await qt(),await new Promise(i=>{if(typeof window>"u"||!window.requestAnimationFrame){i();return}window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>i()))})},Tt=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Lt=()=>{const i=window.open("","_blank","width=900,height=1000");return i?(i.document.open(),i.document.write("<!doctype html><html><head><title>Preparing clinical notes...</title></head><body>Preparing clinical notes...</body></html>"),i.document.close(),i):(qe("Please allow pop-ups to download clinical notes."),null)},Rt=i=>{i.querySelectorAll("button, .clinical-notes-actions, .navigation-arrows, .scroll-indicator, .menu-trigger, .expand-icon, .refresh-btn, .actions, .demographics-actions, .three-dot-menu, .patient-card-menu, ion-icon, ion-button").forEach(t=>t.remove()),i.querySelectorAll(".apexcharts-toolbar, .apexcharts-menu, .apexcharts-zoom-icon, .apexcharts-zoomin-icon, .apexcharts-zoomout-icon, .apexcharts-pan-icon, .apexcharts-reset-icon, .apexcharts-menu-icon").forEach(t=>t.remove()),i.querySelectorAll(".apexcharts-legend").forEach(t=>t.remove())},os=()=>{const i=document.querySelector(".clinical-notes-section"),t=i?.querySelector(".clinical-notes-demographics")?.cloneNode(!0),r=i?.querySelector(".clinical-notes-list")?.cloneNode(!0);if(t&&Rt(t),r&&Rt(r),!r)return"";const d=It[j.value],m=!!r.querySelector(".clinical-notes-list-header");return`
            <main class="clinical-notes-print-document">
                ${t?`<section class="clinical-notes-print-demographics">${t.innerHTML}</section>`:""}
                ${m?"":`<h1 class="notes-print-title">${Tt(d)}</h1>`}
                ${r.outerHTML}
            </main>
        `},ls=(i,t)=>`
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
`,Mt=async i=>{await kt();const t=os();if(!t.trim()){i.close(),qe("No clinical notes content available to download.");return}const r=It[j.value];i.document.open(),i.document.write(ls(t,r)),i.document.close()},xt=async()=>{const i=Lt();i&&await Mt(i)},rs=async()=>{if(!Xe.value.length){qe("No clinical notes records available to download.");return}const i=Lt();if(!i)return;const t={...$e.value};$e.value=Xe.value.reduce((r,d)=>(r[d.id]=!0,r),{...$e.value});try{await kt(),typeof window<"u"&&window.dispatchEvent(new Event("resize")),await kt(),await Mt(i)}finally{$e.value=t}},cs=async()=>{if(j.value==="all"){await rs();return}if(j.value==="surgical"){if(!M.value.length){qe("No surgical notes records available to download.");return}await xt();return}if(j.value==="medical"){if(!$.value.length){qe("No medical inpatient records available to download.");return}await xt();return}if(j.value==="gyneacology"){if(!J.value.length){qe("No gyneacology ward records available to download.");return}await xt();return}qe("Please select Surgical Notes, Gyneacology, Medical Inpatient, or All to download.")},ce=i=>String(i??"").trim().toLowerCase(),Z=async i=>{const t=await gt.getObsByEncounterId(i),r=oi();return r.hasSelection?t.map(d=>({...d,obs:(d?.obs||[]).filter(m=>r.matchesObs(m))})).filter(d=>(d?.obs||[]).length>0):t},q=i=>{if(!Array.isArray(i)||i.length===0)return null;const t=r=>{const d=r?.encounter_datetime;if(d){const u=new Date(d).getTime();if(Number.isFinite(u))return u}const m=(r?.obs||[]).map(u=>new Date(u?.obs_datetime||0).getTime()).filter(u=>Number.isFinite(u)&&u>0);return m.length?Math.max(...m):-1};return i.reduce((r,d)=>t(d)>t(r)?d:r,i[0])},Ie=i=>{const t=new Date(i);if(!Number.isFinite(t.getTime()))return"";const r=t.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),d=t.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0});return`${r} at ${d}`},Te=async i=>{const t=Number(i);if(!Number.isFinite(t)||t<=0)return"Unknown";if(Ae.has(t))return Ae.get(t);try{const r=await ai.getUserByID(t),d=r?.name||r?.username||`User #${t}`;return Ae.set(t,d),d}catch{const d=`User #${t}`;return Ae.set(t,d),d}},O=(i,t)=>{const r=(i||[]).find(d=>t(ce(Y(d))));return r?String(ie(r)??"").trim():""},ds=i=>i?.value_coded??i?.valueCoded??i?.answer_concept_id??i?.value?.concept_id??i?.value?.conceptId??i?.value?.concept?.concept_id??i?.value?.concept?.id,st=i=>i?gt.flattenObservationTree(Array.isArray(i?.obs)?i.obs:[]):[],Ot=i=>{const t=i?.encounter_datetime||i?.obs?.[0]?.obs_datetime;if(!t)return"";try{return R.toStandardHisFormat(t)}catch{return""}},St=(i,t)=>{const r=Array.isArray(i)?i.filter(Boolean):[],d=t?r.filter(m=>Ot(m)===t):[];return q(d.length?d:r)},wt=i=>{const t=i?.obs||i?.children||i?.child||i?.groupMembers||[];return Array.isArray(t)?t:[]},Dt=i=>i.includes("workstation")||i==="location"||i.includes("patient care area")||i.includes("triage result")||i.includes("triage category"),ps=i=>/\b(hour|hours|day|days|week|weeks|month|months|year|years|minute|minutes)\b/i.test(i),pt=i=>/^\d+(\.\d+)?$/.test(i.trim()),Ht=async i=>{const t=String(i??"").trim(),r=Number(t);if(!t||!Number.isFinite(r)||r<=0)return"";if(Ee.has(r))return Ee.get(r)||"";try{const d=String(await Wt.getConceptName(r)||"").trim();return Ee.set(r,d),d}catch{return Ee.set(r,""),""}},Ft=async i=>{const t=String(i??"").trim();return!t||!pt(t)?t:await Ht(t)||t},us=(i,t)=>{const r=String(i??"").trim(),d=String(t??"").trim();return r?d&&r.toLowerCase().includes(d.toLowerCase())?r:d?`${r} ${d}`:r:""},$t=i=>!i||pt(i)||Dt(i)||i==="presenting complaints"||i==="presenting complaint"||i.includes("duration")||i.includes("workstation"),ms=async i=>{const t=Array.isArray(i?.obs)?i.obs:[],r=[],d=async u=>{const y=String(await Ft(Y(u))).trim(),w=ce(y),N=String(ie(u)??"").trim().split(" - ")[0].trim(),c=ds(u),h=N&&pt(N)&&await Ht(c??N)||N;return!h||ps(h)||pt(h)?$t(w)?"":y:h},m=u=>{const y=String(u??"").trim();y&&!r.includes(y)&&r.push(y)};for(const u of t){const y=ce(await Ft(Y(u)));if(!y||Dt(y))continue;const w=r.length;(await Promise.all(wt(u).map(d))).filter(Boolean).forEach(m),r.length===w&&m(await d(u))}return r.length||(await Promise.all(st(i).map(d))).filter(Boolean).forEach(m),r.length?r.map((u,y)=>`(${y+1}). ${u}`).join(", "):"N/A"},gs=(i,t)=>{const r=O(i,b=>b.includes("temperature")),d=O(i,b=>b==="pulse"||b.includes("pulse rate")),m=O(i,b=>b.includes("heart rate")),u=O(i,b=>b.includes("systolic")),y=O(i,b=>b.includes("diastolic")),w=O(i,b=>b.includes("respiratory")),A=O(i,b=>b.includes("oxygen")||b.includes("spo2")||b.includes("sao2")||b==="sao2"),N=O(i,b=>b.includes("glucose")&&!b.includes("unit")),c=O(i,b=>b.includes("glucose")&&b.includes("unit"))||(N?"mmol/l":""),h=O(i,b=>b==="avpu"||b.includes("avpu"))||O(t,b=>b==="avpu"||b.includes("avpu")||b.includes("level of consciousness")),C=[];return r&&C.push(`Temperature: ${r} °C`),d&&C.push(`Pulse: ${d} bpm`),m&&C.push(`Heart: ${m} bpm`),(u||y)&&C.push(`BP: ${u||"-"}${y?`/${y}`:""} mmHg`),w&&C.push(`Respiratory: ${w} breaths/min`),A&&C.push(`Oxygen: ${A} %`),N&&C.push(`Glucose: ${us(N,c)}`),h&&C.push(`AVPU: ${h}`),C.length?C.join(" "):"N/A"},Bt=(i,t)=>i?.obs_datetime||i?.obsDatetime||i?.date_created||t,vs=i=>{const t=R.toStandardHisDisplayFormat(i),r=R.toStandardHisTimeFormat(i);return[t,r].filter(Boolean).join(" ")},ys=i=>{const t=String(ie(i)??"").trim(),r=Number.parseFloat(t);return Number.isFinite(r)?r:null},fs=async i=>{const t={systolic:[],diastolic:[],temperature:[],heartRate:[],respiratoryRate:[],oxygenSaturation:[],glucose:[],peakExpiratoryFlowRate:[],urineDipstickKetones:[]};for(const d of i||[]){const u=(Array.isArray(d?.obs)?d.obs:[]).filter(y=>ce(Y(y))==="triage result"&&wt(y).length>0);for(const y of u){const w=gt.flattenObservationTree(wt(y)),A=Bt(y,d?.encounter_datetime);for(const N of w){const c=ce(Y(N)),h=ys(N);if(h===null)continue;const C=Bt(N,A),b=C?vs(C):"";b&&(c.includes("systolic")?t.systolic.push({x:b,y:h}):c.includes("diastolic")?t.diastolic.push({x:b,y:h}):c.includes("temperature")?t.temperature.push({x:b,y:h}):c.includes("heart rate")?t.heartRate.push({x:b,y:h}):c.includes("respiratory")?t.respiratoryRate.push({x:b,y:h}):c.includes("oxygen")||c.includes("spo2")||c.includes("sao2")?t.oxygenSaturation.push({x:b,y:h}):c.includes("glucose")?t.glucose.push({x:b,y:h}):c.includes("peak expiratory")?t.peakExpiratoryFlowRate.push({x:b,y:h}):c.includes("urine")&&c.includes("ketone")&&t.urineDipstickKetones.push({x:b,y:h}))}}}return Object.values(t).some(d=>d.length>0)?{charts:[{key:"bloodPressure",title:"Blood Pressure (BP)",series:[{name:"Systolic",data:t.systolic},{name:"Diastolic",data:t.diastolic}],colors:["#2563eb","#e11d48"]},{key:"temperature",title:"Temperature (°C)",series:[{name:"Temperature",data:t.temperature}],colors:["#8b5cf6"]},{key:"heartRate",title:"Heart Rate (bpm)",series:[{name:"Heart Rate",data:t.heartRate}],colors:["#14b8a6"]},{key:"respiratoryRate",title:"Respiratory Rate (breaths/min)",series:[{name:"Respiratory Rate",data:t.respiratoryRate}],colors:["#db2777"]},{key:"oxygenSaturation",title:"Oxygen Saturation (O₂ Sat)",series:[{name:"Oxygen Saturation",data:t.oxygenSaturation}],colors:["#f59e0b"]},{key:"glucose",title:"Glucose (mmol/L)",series:[{name:"Glucose",data:t.glucose}],colors:["#0891b2"]},{key:"peakExpiratoryFlowRate",title:"Peak Expiratory Flow Rate (L/min)",series:[{name:"PEFR",data:t.peakExpiratoryFlowRate}],colors:["#16a34a"]},{key:"urineDipstickKetones",title:"Urine Dipstick Ketones",series:[{name:"Ketones",data:t.urineDipstickKetones}],colors:["#7c3aed"]}]}:null},bs=async()=>{ze.value=!0,De.value=null;try{const i=await Z(f.VITALS);De.value=await fs(i||[])}catch(i){console.error("Failed to load monitoring chart records:",i),De.value=null}finally{ze.value=!1}},hs=[ae.phala,ae.water,ae.oralFluids,ae.ivFluids],_s=[ae.urineVolume,ae.urineAppearance,ae.vomitVolume,ae.vomitColour],ks=[ae.bristolType,ae.stoolColour,ae.sampleSent,ae.labPanel],Nt=(i,t)=>t.map(r=>{const d=(i||[]).filter(u=>ce(Y(u))===ce(r)),m=ut(d.map(u=>ie(u)));return m.length===0?null:{title:r,value:m.join(", ")}}).filter(Boolean),Vt=i=>i.reduce((t,r)=>{const d=Number.parseFloat(String(r.value));return Number.isFinite(d)?t+d:t},0),xs=async i=>{const t=(i||[]).filter(Boolean).map(r=>{const d=st(r),m=O(d,V=>V===ce(ae.entryDate)),u=O(d,V=>V===ce(ae.entryTime)),y=Nt(d,hs),w=Nt(d,_s),A=Nt(d,ks),N=O(d,V=>V===ce(ae.comments)),c=Vt(y),h=Vt(w.filter(V=>[ae.urineVolume,ae.vomitVolume].includes(V.title))),C=c-h,b=new Date(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime||0).getTime();return{id:r?.encounter_id||r?.encounterId||`${m}-${u}-${b}`,entryDate:m||R.toStandardHisDisplayFormat(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime),entryTime:u||R.toStandardHisTimeFormat(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime),intake:y,output:w,stool:A,comments:N,totalIntake:c,totalOutput:h,balance:C,balanceLabel:`${C>0?"+":""}${C} mL`,createdAt:b}}).filter(r=>r.intake.length||r.output.length||r.stool.length||r.comments).sort((r,d)=>d.createdAt-r.createdAt);return t.length?{entries:t}:null},Ss=async()=>{be.value=!0,F.value=null;try{const i=await Z(f.FLUID_BALANCE_AND_STOOL_MONITORING);F.value=await xs(i||[])}catch(i){console.error("Failed to load fluid balance and stool monitoring records:",i),F.value=null}finally{be.value=!1}},ws=async()=>{Ne.value=!0,fe.value=null;try{const[i,t,r,d,m]=await Promise.all([Z(f.TRIAGE_RESULT),Z(f.TRIAGE_PRESENTING_COMPLAINTS),Z(f.PRESENTING_COMPLAINTS),Z(f.VITALS),Z(f.CONSCIOUSNESS)]),u=[...t||[],...r||[]],y=q(i||[]),w=q([q(u),q(d||[]),q(m||[])].filter(Boolean)),A=y||w;if(!A)return;const N=Ot(A),c=St(u,N),h=St(d||[],N),C=St(m||[],N),b=st(y),V=st(h),G=st(C),K=await ms(c),pe=gs(V,G),Q=O(b,ye=>ye.includes("triage")&&(ye.includes("category")||ye.includes("result")||ye.includes("cat")))||"N/A",X=O(b,ye=>ye.includes("patient care area"))||O(b,ye=>ye==="location")||"N/A",ve=y?.provider_id||y?.provider?.id||y?.creator||A?.provider_id||A?.provider?.id||A?.creator,P=await Te(ve),x=Ie(y?.encounter_datetime||A?.encounter_datetime||A?.obs?.[0]?.obs_datetime),te=x?`created by ${P} on ${x}.`:`created by ${P}.`;fe.value={presentingComplaints:K,vitalSigns:pe,triageCategory:Q,patientCareArea:X,createdByLine:te}}catch(i){console.error("Failed to load triage information:",i),fe.value=null}finally{Ne.value=!1}},ut=i=>{const t=(i||[]).map(r=>String(r??"").trim()).filter(Boolean);return Array.from(new Set(t))},de=(i,t)=>{const r=t?.flattenChildren?gt.flattenObservationTree(i||[]):i||[];return ht(r).map(m=>{const u=String(Y(m)||"").trim()||"Observation",y=String(ie(m)??"").trim();return y?{title:u,value:y}:null}).filter(Boolean)},Ns=async()=>{me.value=!0,se.value=null;try{const i=[f.AIRWAY_ASSESSMENT,f.BREATHING_ASSESSMENT,f.CIRCULATION_ASSESSMENT,f.DISABILITY_ASSESSMENT,f.EXPOSURE_ASSESSMENT],t=await Promise.all(i.map(h=>Z(h))),r=new Map(i.map((h,C)=>[h,t[C]||[]])),d=t.flat(),m=q(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=[{id:f.AIRWAY_ASSESSMENT,title:"Airway"},{id:f.BREATHING_ASSESSMENT,title:"Breathing"},{id:f.CIRCULATION_ASSESSMENT,title:"Circulation"},{id:f.DISABILITY_ASSESSMENT,title:"Disability"},{id:f.EXPOSURE_ASSESSMENT,title:"Exposure"}],w={};for(const h of y){const C=r.get(h.id)||[],V=(u?C.filter(K=>R.toStandardHisFormat(K?.encounter_datetime)===u):C).flatMap(K=>K?.obs||[]),G=de(V);G.length&&(w[h.title]=G)}const A=await Te(m?.provider_id),N=Ie(m?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;se.value={sections:w,createdByLine:c}}catch(i){console.error("Failed to load primary survey:",i),se.value=null}finally{me.value=!1}},As=async()=>{xe.value=!0,le.value=null;try{const i=[f.ALLERGIES,f.REVIEW_OF_SYSTEMS,f.MEDICAL_HISTORY,f.OBSTETRIC_HISTORY,f.SUMMARY_ASSESSMENT,f.PRESCRIPTION,f.PRESENTING_COMPLAINTS,f.TRIAGE_PRESENTING_COMPLAINTS],t=await Promise.all(i.map(Q=>Z(Q))),r=new Map(i.map((Q,X)=>[Q,t[X]||[]])),d=t.flat(),m=q(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=(Q,X)=>{if(!X.length)return Q;const ve=X.map(P=>P.toLowerCase());return Q.filter(P=>{const x=(P.title||"").toLowerCase();return ve.some(te=>x.includes(te))})},w=async(Q,X)=>{const ve=u?Q.filter(Le=>R.toStandardHisFormat(Le?.encounter_datetime)===u):Q,P=q(ve),x=ve.flatMap(Le=>Le?.obs||[]);let te=de(x,{flattenChildren:X?.flattenChildren});X?.filterTitleIncludes?.length&&(te=y(te,X.filterTitleIncludes));const ye=await Te(P?.provider_id),Ye=Ie(P?.encounter_datetime),Ge=Ye?`${ye} ${Ye}`:ye;return{items:te,createdByLine:Ge?` ${Ge}`:""}},A=await w([...r.get(f.PRESENTING_COMPLAINTS)||[],...r.get(f.TRIAGE_PRESENTING_COMPLAINTS)||[]],{flattenChildren:!0}),N=await w(r.get(f.ALLERGIES)||[]),c=await w(r.get(f.PRESCRIPTION)||[],{filterTitleIncludes:["medication history"]}),h=r.get(f.MEDICAL_HISTORY)||[],C=r.get(f.OBSTETRIC_HISTORY)||[],b=[...h,...C],V=await w(b),G=await w(r.get(f.REVIEW_OF_SYSTEMS)||[]),K=r.get(f.SUMMARY_ASSESSMENT)||[],pe=await w(K,{filterTitleIncludes:["last meal","meal"]});le.value={cards:{symptoms:A,events:G,allergies:N,medications:c,priorConditions:V,lastMeal:pe}}}catch(i){console.error("Failed to load SAMPLE history:",i),le.value=null}finally{xe.value=!1}},Es=async()=>{U.value=!0,Se.value=null;try{const i=[f.GENERAL_INFORMATION,f.HEAD_AND_NECK_ASSESSMENT,f.CHEST_ASSESSMENT,f.ABDOMEN_AND_PELVIS_ASSESSMENT,f.EXTREMITIES_ASSESSMENT,f.NEUROLOGICAL_EXAMINATION],t=await Promise.all(i.map(h=>Z(h))),r=new Map(i.map((h,C)=>[h,t[C]||[]])),d=t.flat(),m=q(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=[{id:f.GENERAL_INFORMATION,title:"General Information"},{id:f.HEAD_AND_NECK_ASSESSMENT,title:"Head and Neck"},{id:f.CHEST_ASSESSMENT,title:"Chest"},{id:f.ABDOMEN_AND_PELVIS_ASSESSMENT,title:"Abdomen and Pelvis"},{id:f.EXTREMITIES_ASSESSMENT,title:"Extremities"},{id:f.NEUROLOGICAL_EXAMINATION,title:"Neurological"}],w={};for(const h of y){const C=r.get(h.id)||[],V=(u?C.filter(K=>R.toStandardHisFormat(K?.encounter_datetime)===u):C).flatMap(K=>K?.obs||[]),G=de(V);G.length&&(w[h.title]=G)}const A=await Te(m?.provider_id),N=Ie(m?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;Se.value={sections:w,createdByLine:c}}catch(i){console.error("Failed to load secondary survey:",i),Se.value=null}finally{U.value=!1}},Cs=async()=>{he.value=!0,Ce.value=null;try{const i=await Z(f.OUTPATIENT_DIAGNOSIS),t=q(i);if(!t)return;const r=R.toStandardHisFormat(t?.encounter_datetime)||"",m=(r?i.filter(h=>R.toStandardHisFormat(h?.encounter_datetime)===r):i).flatMap(h=>h?.obs||[]),u=await We(m),y={},w=de(u);w.length&&(y["Outpatient Diagnosis"]=w);const A=await Te(t?.provider_id),N=Ie(t?.encounter_datetime),c=N?`created by ${A} on ${N}.`:`created by ${A}.`;Ce.value={sections:y,createdByLine:c}}catch(i){console.error("Failed to load diagnosis:",i),Ce.value=null}finally{he.value=!1}},Ps=async()=>{B.value=!0,Pe.value=null;try{const i=[f.BEDSIDE_INVESTIGATION_PLAN,f.LAB_ORDERS_PLAN],t=await Promise.all(i.map(N=>Z(N))),r=new Map(i.map((N,c)=>[N,t[c]||[]])),d=t.flat(),m=q(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=async N=>{const c=u?N.filter(pe=>R.toStandardHisFormat(pe?.encounter_datetime)===u):N,h=q(c),C=c.flatMap(pe=>pe?.obs||[]),b=de(C),V=await Te(h?.provider_id),G=Ie(h?.encounter_datetime),K=G?`${V} ${G}`:V;return{items:b,createdByLine:K?` ${K}`:""}},w=await y(r.get(f.LAB_ORDERS_PLAN)||[]),A=await y(r.get(f.BEDSIDE_INVESTIGATION_PLAN)||[]);Pe.value={cards:{labOrdersPlan:w,bedsidePlan:A}}}catch(i){console.error("Failed to load laboratory / radiology findings:",i),Pe.value=null}finally{B.value=!1}},Is=async()=>{je.value=!0,ge.value=null;try{const i=[f.NON_PHARMACOLOGICAL,f.PATIENT_CARE_AREA,f.PRESCRIPTION],t=await Promise.all(i.map(c=>Z(c))),r=new Map(i.map((c,h)=>[c,t[h]||[]])),d=t.flat(),m=q(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=async(c,h)=>{const C=u?c.filter(X=>R.toStandardHisFormat(X?.encounter_datetime)===u):c,b=q(C),V=C.flatMap(X=>X?.obs||[]);let G=de(V);if(h?.excludeTitleIncludes?.length){const X=h.excludeTitleIncludes.map(ve=>ve.toLowerCase());G=G.filter(ve=>{const P=(ve.title||"").toLowerCase();return!X.some(x=>P.includes(x))})}const K=await Te(b?.provider_id),pe=Ie(b?.encounter_datetime),Q=pe?`${K} ${pe}`:K;return{items:G,createdByLine:Q?` ${Q}`:""}},w=await y(r.get(f.NON_PHARMACOLOGICAL)||[]),A=await y(r.get(f.PATIENT_CARE_AREA)||[]),N=await y(r.get(f.PRESCRIPTION)||[],{excludeTitleIncludes:["medication history"]});ge.value={cards:{nonPharmacological:w,patientCareArea:A,medications:N}}}catch(i){console.error("Failed to load patient management plan:",i),ge.value=null}finally{je.value=!1}},Ts=async()=>{_e.value=!0,He.value=null;try{const i=await Z(f.CONTINUATION_SHEET),t=q(i);if(!t)return;const r=R.toStandardHisFormat(t?.encounter_datetime)||"",m=(r?i.filter(c=>R.toStandardHisFormat(c?.encounter_datetime)===r):i).flatMap(c=>c?.obs||[]),u={},y=de(m);y.length&&(u["Continuation Sheet"]=y);const w=await Te(t?.provider_id),A=Ie(t?.encounter_datetime),N=A?`created by ${w} on ${A}.`:`created by ${w}.`;He.value={sections:u,createdByLine:N}}catch(i){console.error("Failed to load continuation notes:",i),He.value=null}finally{_e.value=!1}},Ls=async()=>{Fe.value=!0,Ue.value=null;try{const i=[f.DISPOSITION,f.AWAITING_SPECIALTY],t=await Promise.all(i.map(P=>Z(P))),r=new Map(i.map((P,x)=>[P,t[x]||[]])),d=t.flat(),m=q(d);if(!m)return;const u=R.toStandardHisFormat(m?.encounter_datetime)||"",y=async P=>{const x=u?P.filter(Je=>R.toStandardHisFormat(Je?.encounter_datetime)===u):P,te=q(x),ye=x.flatMap(Je=>Je?.obs||[]),Ye=de(ye),Ge=await Te(te?.provider_id),Le=Ie(te?.encounter_datetime),mt=Le?`${Ge} ${Le}`:Ge;return{items:Ye,createdByLine:mt?` ${mt}`:""}},w=P=>{const x=(P||"").toLowerCase().trim();return x?x.includes("admission")||x.includes("ward")||x.includes("bed number")||x.includes("reason for admission")||x.includes("speciality department")?"admission":x.includes("death")||x.includes("cause of death")||x.includes("mortuary")||x.includes("family informed")||x.includes("relationship to deceased")||x.includes("last office")?"death":x.includes("transfer out")||x.includes("facility name")||x.includes("reason for transfer")?"transfer_out":x.includes("discharge home")||x.includes("discharge plan")||x.includes("followup plan")||x.includes("home care")||x.includes("followup details")||x.includes("discharge notes")||x.includes("specialist clinic")?"discharge_home":x.includes("absconded")||x.includes("last seen location")||x.includes("time of absconding")||x.includes("date of absconding")?"absconded":x.includes("refused hospital treatment")||x.includes("reason for refusal")||x.includes("plans to return")||x.includes("date of refusal")||x.includes("witness name")?"refused_treatment":"other":"other"},A=[{key:"admission",title:"Admission"},{key:"death",title:"Death"},{key:"transfer_out",title:"Transfer Out"},{key:"discharge_home",title:"Discharge Home"},{key:"absconded",title:"Absconded"},{key:"refused_treatment",title:"Refused Treatment"},{key:"other",title:"Other Disposition"}],N=await y(r.get(f.AWAITING_SPECIALTY)||[]),c=r.get(f.DISPOSITION)||[],h=u?c.filter(P=>R.toStandardHisFormat(P?.encounter_datetime)===u):c,C=q(h),b=h.flatMap(P=>P?.obs||[]),V=de(b),G={};for(const P of V){const x=w(P.title);G[x]||(G[x]=[]),G[x].push(P)}const K=await Te(C?.provider_id),pe=Ie(C?.encounter_datetime),Q=pe?`${K} ${pe}`:K,X=Q?` ${Q}`:"",ve=A.map(P=>({key:P.key,title:P.title,items:G[P.key]||[],createdByLine:(G[P.key]||[]).length?X:""})).filter(P=>P.items.length>0);Ue.value={cards:{awaitingSpecialty:N},otherCards:ve}}catch(i){console.error("Failed to load disposition notes:",i),Ue.value=null}finally{Fe.value=!1}},Rs=async()=>{ke.value=!0,Re.value=null;try{const[i,t,r]=await Promise.all([Z(f.NURSING_CARE_NOTES),Z(f.SOAPIER_PRESCRIPTION),Z(f.SOAPIER_DISPENSING)]),d=q(i);if(!d)return;const m=d?.obs||[],u=R.toStandardHisFormat(d?.encounter_datetime)||"",y=_=>{if(!Array.isArray(_)||_.length===0)return null;if(u){const Ut=_.filter(Ds=>R.toStandardHisFormat(Ds?.encounter_datetime)===u);if(Ut.length>0)return q(Ut)}return q(_)},w=y(t),A=y(r),N=w?.obs||[],c=A?.obs||[],h=O(m,_=>_==="subjective"||_.includes("subjective"))||"",C=O(m,_=>_==="objective"||_.includes("objective"))||"",b=O(m,_=>_==="assessment"||_.includes("assessment"))||"",V=O(m,_=>_==="plan"||_.includes("plan"))||"",G=O(m,_=>_==="evaluation"||_.includes("evaluation"))||"",K=O(m,_=>_==="replan"||_.includes("replan"))||"",pe=O(m,_=>_.includes("spo2")||_.includes("sao2")||_.includes("oxygen saturation")),Q=O(m,_=>_.includes("systolic")),X=O(m,_=>_.includes("diastolic")),ve=O(m,_=>_.includes("respiratory rate")||_==="respiratory rate"||_.includes("respiratory")),P=O(m,_=>_==="pulse"||_.includes("pulse rate")),x=O(m,_=>_.includes("temperature")),te=[];if(pe&&te.push(`SPO2: ${pe} %`),Q||X){const _=`${Q||"-"}${X?`/${X}`:""}`;te.push(`BP: ${_} mmHg`)}ve&&te.push(`Respiratory: ${ve} breaths/min`),P&&te.push(`Pulse: ${P} bpm`),x&&te.push(`Temperature: ${x} °C`);const ye=te.length?te.join(" "):"N/A",Ye=ut(c.filter(_=>ce(Y(_))==="procedures").map(_=>ie(_))),Ge=ut(c.filter(_=>ce(Y(_))==="supportive care").map(_=>ie(_))),Le=[];Ye.length&&Le.push(`Procedures: ${Ye.join(", ")}`),Ge.length&&Le.push(`Supportive care: ${Ge.join(", ")}`);const mt=Le.length?Le.join(`
`):"N/A",Je=ut(N.filter(_=>ce(Y(_))==="drug given").map(_=>ie(_))),Ms=Je.length?Je.join(", "):"N/A",zt=await Te(d?.provider_id),jt=Ie(d?.encounter_datetime),Os=jt?`created by ${zt} on ${jt}.`:`created by ${zt}.`;Re.value={subjective:h,objective:C,vitalSigns:ye,assessment:b,plan:V,evaluation:G,replan:K,nonPharmacological:mt,medications:Ms,createdByLine:Os}}catch(i){console.error("Failed to load SOAPIER notes:",i),Re.value=null}finally{ke.value=!1}},Gt=async i=>{j.value=i,i==="surgical"&&await is(),i==="medical"&&await ns(),i==="gyneacology"&&await as(),i==="all"&&(await ws(),await Rs(),await bs(),await Ss(),await Ns(),await As(),await Es(),await Cs(),await Ps(),await Is(),await Ts(),await Ls())};return{clinicalNotesView:j,surgicalNotesRecords:M,gyneacologyRecords:J,medicalInpatientRecords:$,clinicalNotesLoading:L,gyneacologyLoading:H,medicalInpatientLoading:oe,expandedClinicalTiles:$e,toggleClinicalTile:yt,clinicalNotesAllLoading:W,refreshAllClinicalNotes:Qe,aetcClinicalTiles:Xe,triageSummary:fe,soapierSummary:Re,monitoringChartSummary:De,fluidBalanceSummary:F,primarySurveySummary:se,sampleHistorySummary:le,secondarySurveySummary:Se,diagnosisSummary:Ce,investigationPlanSummary:Pe,patientManagementSummary:ge,continuationSummary:He,dispositionSummary:Ue,surgicalNotesBySection:Me,gyneacologyBySection:ss,medicalInpatientBySection:dt,surgicalPhysicalExam:Ze,surgicalInitialManagement:bt,surgicalPresenting:rt,surgicalPastMedicalHistoryItems:tt,surgicalReviewOfSystemsItems:Ve,surgicalReviewOfSystemsCols:ne,surgicalPastSurgicalHistoryItems:s,surgicalFamilyHistoryItems:E,surgicalSocialHistoryItems:D,surgicalGynecologicalHistoryItems:p,medicalInpatientPresenting:g,medicalInpatientPhysicalExam:z,medicalInpatientExamZones:Jt,medicalReviewOfSystemsItems:Pt,medicalReviewOfSystemsCols:Qt,getObsDisplayValue:ie,downloadClinicalNotesPdf:cs,setClinicalNotesView:Gt}},ci={class:"clinical-notes-section print-area"},di={class:"clinical-notes-actions"},pi={key:0,class:"clinical-notes-list"},ui={key:0,class:"clinical-notes-placeholder"},mi={key:1,class:"clinical-notes-placeholder"},gi={key:2,class:"clinical-notes-records surgical-notes-records"},vi={class:"clinical-notes-section-title"},yi={key:0,class:"clinical-notes-section-items"},fi={class:"pe-card"},bi={class:"pe-line"},hi={class:"pe-value"},_i={class:"pe-row4"},ki={class:"pe-line"},xi={class:"pe-value"},Si={class:"pe-line"},wi={class:"pe-value"},Ni={class:"pe-line"},Ai={class:"pe-value"},Ei={class:"pe-line"},Ci={class:"pe-value"},Pi={class:"pe-row3",style:{"margin-top":"10px"}},Ii={class:"pe-line"},Ti={class:"pe-value"},Li={class:"pe-line"},Ri={class:"pe-value"},Mi={class:"pe-line"},Oi={class:"pe-value"},Di={class:"pe-line",style:{"margin-top":"10px"}},Hi={class:"pe-value"},Fi={class:"pe-line"},$i={class:"pe-value"},Bi={class:"pe-line"},Vi={class:"pe-value"},Gi={class:"pe-line"},zi={class:"pe-value"},ji={class:"pe-line"},Ui={class:"pe-value"},Wi={class:"pe-line"},Yi={class:"pe-value"},qi={class:"pe-table"},Ki={class:"pe-value"},Xi={class:"pe-value"},Zi={class:"pe-value"},Ji={class:"pe-value"},Qi={class:"pe-value"},en={class:"pe-value"},tn={key:1,class:"clinical-notes-section-items"},sn={class:"im-card"},nn={class:"im-row3"},an={class:"im-line"},on={class:"im-value"},ln={class:"im-line"},rn={class:"im-value"},cn={class:"im-line"},dn={class:"im-value"},pn={key:2,class:"clinical-notes-section-items"},un={class:"pm-card"},mn={class:"pc-block"},gn={class:"pc-line"},vn={class:"pc-value"},yn={class:"pc-line",style:{"margin-top":"10px"}},fn={class:"pc-value"},bn={key:3,class:"clinical-notes-section-items"},hn={class:"pm-card"},_n={class:"pm-list"},kn={class:"pm-label"},xn={class:"pm-value"},Sn={key:0,class:"pm-empty"},wn={key:4,class:"clinical-notes-section-items"},Nn={class:"pm-card"},An={class:"ros-grid"},En={class:"ros-col"},Cn={class:"ros-label"},Pn={class:"ros-value"},In={class:"ros-col"},Tn={class:"ros-label"},Ln={class:"ros-value"},Rn={key:0,class:"pm-empty"},Mn={key:5,class:"clinical-notes-section-items"},On={class:"pm-card"},Dn={class:"pm-list"},Hn={class:"pm-label"},Fn={class:"pm-value"},$n={key:0,class:"pm-empty"},Bn={key:6,class:"clinical-notes-section-items"},Vn={class:"pm-card"},Gn={class:"pm-list"},zn={class:"pm-label"},jn={class:"pm-value"},Un={key:0,class:"pm-empty"},Wn={key:7,class:"clinical-notes-section-items"},Yn={class:"pm-card"},qn={class:"pm-list"},Kn={class:"pm-label"},Xn={class:"pm-value"},Zn={key:0,class:"pm-empty"},Jn={key:8,class:"clinical-notes-section-items"},Qn={class:"pm-card"},ea={class:"pm-list"},ta={class:"pm-label"},sa={class:"pm-value"},ia={key:0,class:"pm-empty"},na={class:"surgical-record-label"},aa={class:"surgical-record-value"},oa={key:1,class:"clinical-notes-list"},la={key:0,class:"clinical-notes-placeholder"},ra={key:1,class:"clinical-notes-placeholder"},ca={key:2,class:"clinical-notes-records gyne-notes-records"},da={class:"clinical-notes-section-title"},pa={class:"gyne-record-label"},ua={class:"gyne-record-value"},ma={key:2,class:"clinical-notes-list"},ga={key:0,class:"clinical-notes-placeholder"},va={key:1,class:"clinical-notes-placeholder"},ya={key:2,class:"clinical-notes-records medical-notes-records"},fa={class:"clinical-notes-section-title"},ba={key:0,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},ha={class:"medical-record"},_a={class:"medical-record-value"},ka={class:"medical-record"},xa={class:"medical-record-value"},Sa={key:1,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},wa={class:"pm-card medical-review-card"},Na={class:"ros-grid"},Aa={class:"ros-col"},Ea={class:"ros-label"},Ca={class:"ros-value"},Pa={class:"ros-col"},Ia={class:"ros-label"},Ta={class:"ros-value"},La={key:0,class:"pm-empty"},Ra={key:2,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},Ma={class:"mipe-card"},Oa={class:"mipe-line"},Da={class:"mipe-value"},Ha={class:"mipe-row6"},Fa={class:"mipe-line"},$a={class:"mipe-value"},Ba={class:"mipe-line"},Va={class:"mipe-value"},Ga={class:"mipe-line"},za={class:"mipe-value"},ja={class:"mipe-line"},Ua={class:"mipe-value"},Wa={class:"mipe-line"},Ya={class:"mipe-value"},qa={class:"mipe-line"},Ka={class:"mipe-value"},Xa={class:"mipe-row5"},Za={class:"mipe-line"},Ja={class:"mipe-value"},Qa={class:"mipe-line"},eo={class:"mipe-value"},to={class:"mipe-line"},so={class:"mipe-value"},io={class:"mipe-line"},no={class:"mipe-value"},ao={class:"mipe-line"},oo={class:"mipe-value"},lo={key:0,class:"mipe-line",style:{"margin-top":"8px"}},ro={class:"mipe-value"},co={class:"mipe-row2"},po={class:"mipe-line"},uo={class:"mipe-value"},mo={class:"mipe-line"},go={class:"mipe-value"},vo={class:"mipe-row3"},yo={class:"mipe-line"},fo={class:"mipe-value"},bo={class:"mipe-line"},ho={class:"mipe-value"},_o={class:"mipe-line"},ko={class:"mipe-value"},xo={class:"mipe-row2"},So={class:"mipe-line"},wo={class:"mipe-value"},No={class:"mipe-line"},Ao={class:"mipe-value"},Eo={class:"mipe-row2"},Co={class:"mipe-line"},Po={class:"mipe-value"},Io={class:"mipe-line"},To={class:"mipe-value"},Lo={class:"mipe-row2",style:{"margin-top":"8px"}},Ro={class:"mipe-line"},Mo={class:"mipe-value"},Oo={class:"mipe-line"},Do={class:"mipe-value"},Ho={class:"mipe-row3",style:{"margin-top":"8px"}},Fo={class:"mipe-line"},$o={class:"mipe-value"},Bo={class:"mipe-line"},Vo={class:"mipe-value"},Go={class:"mipe-line"},zo={class:"mipe-value"},jo={key:1,class:"mipe-zones"},Uo={class:"mipe-zone-title"},Wo={class:"mipe-label"},Yo={class:"mipe-value"},qo={key:2},Ko={class:"mipe-zones"},Xo={class:"mipe-zone-title"},Zo={class:"mipe-label"},Jo={class:"mipe-value"},Qo={class:"mipe-line"},el={class:"mipe-value"},tl={class:"mipe-row2"},sl={class:"mipe-line"},il={class:"mipe-value"},nl={class:"mipe-line"},al={class:"mipe-value"},ol={class:"mipe-line"},ll={class:"mipe-value"},rl={class:"mipe-row3"},cl={class:"mipe-line"},dl={class:"mipe-value"},pl={class:"mipe-line"},ul={class:"mipe-value"},ml={class:"mipe-line"},gl={class:"mipe-value"},vl={class:"pe-table"},yl={class:"pe-value"},fl={class:"pe-value"},bl={class:"pe-value"},hl={class:"pe-value"},_l={class:"pe-value"},kl={class:"pe-value"},xl={class:"pe-value"},Sl={class:"pe-value"},wl={class:"pe-value"},Nl={class:"pe-value"},Al={class:"pe-value"},El={class:"pe-value"},Cl={class:"pe-value"},Pl={class:"medical-record-label"},Il={class:"medical-record-value"},Tl={key:3,class:"clinical-notes-list"},Ll={class:"clinical-notes-tab"},Rl={class:"notes-header"},Ml={class:"actions"},Ol={key:0,class:"skeleton-wrapper"},Dl={key:1,class:"empty-state"},Hl={class:"empty-icon-wrapper"},Fl={key:2,class:"tiles-grid"},$l=["onClick"],Bl={class:"tile-title-wrapper"},Vl={class:"tile-title"},Gl={key:0},zl={key:0,class:"no-observations"},jl={key:1,class:"triage-summary-list"},Ul={class:"triage-summary-row"},Wl={class:"triage-summary-content"},Yl={class:"triage-summary-row"},ql={class:"triage-summary-content"},Kl={class:"triage-summary-row"},Xl={class:"triage-summary-content"},Zl={class:"triage-summary-row"},Jl={class:"triage-summary-content"},Ql={class:"triage-summary-created"},er={key:1},tr={key:0,class:"no-observations"},sr={key:1,class:"clinical-notes-section-items"},ir={class:"soapier-grid"},nr={class:"soapier-card"},ar={class:"soapier-card-body"},or={class:"soapier-card"},lr={class:"soapier-card-body"},rr={class:"soapier-block"},cr={class:"soapier-block-value"},dr={class:"soapier-block",style:{"margin-top":"10px"}},pr={class:"soapier-block-value"},ur={class:"soapier-card"},mr={class:"soapier-card-body"},gr={class:"soapier-card"},vr={class:"soapier-card-body"},yr={class:"soapier-card"},fr={class:"soapier-card-body"},br={class:"soapier-block"},hr={class:"soapier-block-value"},_r={class:"soapier-block",style:{"margin-top":"10px"}},kr={class:"soapier-block-value"},xr={class:"soapier-card"},Sr={class:"soapier-card-body"},wr={class:"soapier-card"},Nr={class:"soapier-card-body"},Ar={class:"soapier-footer"},Er={key:2},Cr={key:0,class:"no-observations"},Pr={key:1,class:"monitoring-chart-grid"},Ir={class:"monitoring-chart-title"},Tr={key:0,class:"monitoring-chart-body"},Lr={key:1,class:"monitoring-chart-legend"},Rr={key:2,class:"monitoring-chart-empty"},Mr={key:3},Or={key:0,class:"no-observations"},Dr={key:1,class:"fluid-balance-entry-grid"},Hr={class:"fluid-balance-card-header"},Fr={class:"fluid-balance-card-title"},$r={class:"fluid-balance-card-subtitle"},Br={class:"fluid-balance-sections"},Vr={class:"fluid-balance-section"},Gr={class:"fluid-balance-list"},zr={key:0,class:"fluid-balance-empty"},jr={class:"fluid-balance-section"},Ur={class:"fluid-balance-list"},Wr={key:0,class:"fluid-balance-empty"},Yr={class:"fluid-balance-section"},qr={class:"fluid-balance-list"},Kr={key:0,class:"fluid-balance-empty"},Xr={class:"fluid-balance-section"},Zr={class:"fluid-balance-list"},Jr={key:0},Qr={key:4},ec={key:0,class:"no-observations"},tc={key:1},sc={class:"survey-print-grid survey-print-grid--primary"},ic={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},nc={class:"observation-list"},ac={class:"obs-concept"},oc={class:"obs-value"},lc={class:"tile-footer"},rc={key:5},cc={key:0,class:"no-observations"},dc={key:1,class:"sample-grid"},pc={class:"sample-card"},uc={class:"sample-list"},mc={class:"sample-label"},gc={class:"sample-value"},vc={key:0,class:"sample-empty"},yc={class:"sample-footer"},fc={class:"sample-card"},bc={class:"sample-list"},hc={class:"sample-label"},_c={class:"sample-value"},kc={key:0,class:"sample-empty"},xc={class:"sample-footer"},Sc={class:"sample-card"},wc={class:"sample-list"},Nc={class:"sample-label"},Ac={class:"sample-value"},Ec={key:0,class:"sample-empty"},Cc={class:"sample-footer"},Pc={class:"sample-card"},Ic={class:"sample-list"},Tc={class:"sample-label"},Lc={class:"sample-value"},Rc={key:0,class:"sample-empty"},Mc={class:"sample-footer"},Oc={class:"sample-card"},Dc={class:"sample-list"},Hc={class:"sample-label"},Fc={class:"sample-value"},$c={key:0,class:"sample-empty"},Bc={class:"sample-footer"},Vc={class:"sample-card"},Gc={class:"sample-list"},zc={class:"sample-label"},jc={class:"sample-value"},Uc={key:0,class:"sample-empty"},Wc={class:"sample-footer"},Yc={key:6},qc={key:0,class:"no-observations"},Kc={key:1},Xc={class:"survey-print-grid survey-print-grid--secondary"},Zc={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},Jc={class:"observation-list"},Qc={class:"obs-concept"},ed={class:"obs-value"},td={class:"tile-footer"},sd={key:7},id={key:0,class:"no-observations"},nd={key:1},ad={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},od={class:"observation-list"},ld={class:"obs-concept"},rd={class:"obs-value"},cd={class:"tile-footer"},dd={key:8},pd={key:0,class:"no-observations"},ud={key:1,class:"pm-grid"},md={key:0,class:"pm-card"},gd={class:"pm-list"},vd={class:"pm-label"},yd={class:"pm-value"},fd={class:"pm-footer"},bd={key:1,class:"pm-card"},hd={class:"pm-list"},_d={class:"pm-label"},kd={class:"pm-value"},xd={class:"pm-footer"},Sd={key:2,class:"no-observations"},wd={key:9},Nd={key:0,class:"no-observations"},Ad={key:1,class:"pm-grid"},Ed={class:"pm-card"},Cd={class:"pm-list"},Pd={class:"pm-label"},Id={class:"pm-value"},Td={key:0,class:"pm-empty"},Ld={class:"pm-footer"},Rd={class:"pm-card"},Md={class:"pm-list"},Od={class:"pm-label"},Dd={class:"pm-value"},Hd={key:0,class:"pm-empty"},Fd={class:"pm-footer"},$d={class:"pm-card"},Bd={class:"pm-list"},Vd={class:"pm-label"},Gd={class:"pm-value"},zd={key:0,class:"pm-empty"},jd={class:"pm-footer"},Ud={key:10},Wd={key:0,class:"no-observations"},Yd={key:1},qd={class:"clinical-notes-section-title",style:{"font-size":"var(--mahis-text-md)"}},Kd={class:"observation-list"},Xd={class:"obs-concept"},Zd={class:"obs-value"},Jd={class:"tile-footer"},Qd={key:11},ep={key:0,class:"no-observations"},tp={key:1,class:"pm-grid"},sp={class:"pm-card"},ip={class:"pm-list"},np={class:"pm-label"},ap={class:"pm-value"},op={key:0,class:"pm-empty"},lp={class:"pm-footer"},rp={class:"pm-card-title"},cp={class:"pm-list"},dp={class:"pm-label"},pp={class:"pm-value"},up={key:0,class:"pm-empty"},mp={class:"pm-footer"},gp={key:4,class:"clinical-notes-placeholder"},Dp=Kt({__name:"PatientClinicalNotes",setup(j){const M=ne=>ne?.concept_name||ne?.concept_id||"Observation",J=ne=>["Complaints","Impression","Plan","Other"].includes(ne),$=ne=>["Investigations","Working Differential Diagnosis","Other"].includes(ne),L=ne=>["Past Surgical History","Social History","Family History","Summary","Management Plan","Other"].includes(ne),H=ne=>(ne?.series||[]).some(s=>Array.isArray(s?.data)&&s.data.length>0),oe=ne=>(ne?.series||[]).filter(s=>Array.isArray(s?.data)&&s.data.length>0).length>1,Ne=ne=>({chart:{toolbar:{show:!0},zoom:{enabled:!0},animations:{enabled:!1},parentHeightOffset:0},colors:ne?.colors||["#0ea5e9"],dataLabels:{enabled:!0},stroke:{curve:"smooth",width:3},markers:{size:4},grid:{borderColor:"#e5e7eb",strokeDashArray:0,padding:{left:8,right:12,top:0,bottom:0}},xaxis:{type:"category",labels:{show:!1,style:{fontSize:"10px",colors:"#64748b"}},tooltip:{enabled:!0}},yaxis:{labels:{style:{fontSize:"10px",colors:"#64748b"}}},legend:{show:!1},tooltip:{x:{show:!0}}}),{clinicalNotesView:fe,surgicalNotesRecords:Ae,gyneacologyRecords:Ee,medicalInpatientRecords:ke,clinicalNotesLoading:Re,gyneacologyLoading:ze,medicalInpatientLoading:De,expandedClinicalTiles:be,toggleClinicalTile:F,clinicalNotesAllLoading:me,refreshAllClinicalNotes:se,aetcClinicalTiles:xe,triageSummary:le,soapierSummary:U,monitoringChartSummary:Se,fluidBalanceSummary:he,primarySurveySummary:Ce,sampleHistorySummary:B,secondarySurveySummary:Pe,diagnosisSummary:je,investigationPlanSummary:ge,patientManagementSummary:_e,continuationSummary:He,dispositionSummary:Fe,surgicalNotesBySection:Ue,gyneacologyBySection:$e,medicalInpatientBySection:yt,surgicalPhysicalExam:W,surgicalInitialManagement:Qe,surgicalPresenting:Xe,surgicalPastMedicalHistoryItems:ot,surgicalReviewOfSystemsItems:ft,surgicalReviewOfSystemsCols:lt,surgicalPastSurgicalHistoryItems:Y,surgicalFamilyHistoryItems:we,surgicalSocialHistoryItems:ie,surgicalGynecologicalHistoryItems:We,medicalInpatientPresenting:et,medicalInpatientPhysicalExam:v,medicalInpatientExamZones:Ze,medicalReviewOfSystemsItems:bt,medicalReviewOfSystemsCols:rt,getObsDisplayValue:tt,downloadClinicalNotesPdf:ct,setClinicalNotesView:Ve}=ri();return Xt(()=>{Ve(fe.value)}),(ne,s)=>(a(),o("div",ci,[ue(n(Bs),{class:"clinical-notes-card"},{default:Ke(()=>[ue(n(Hs),null,{default:Ke(()=>[e("div",di,[ue(it,{name:"Download PDF",fill:"solid",class:"clinical-notes-btn",onClick:n(ct)},null,8,["onClick"]),ue(it,{name:"Surgical Notes",fill:"clear",class:"clinical-notes-btn",onClick:s[0]||(s[0]=E=>n(Ve)("surgical"))}),ue(it,{name:"Gyneacology",fill:"clear",class:"clinical-notes-btn",onClick:s[1]||(s[1]=E=>n(Ve)("gyneacology"))}),ue(it,{name:"Medical Inpatient",fill:"clear",class:"clinical-notes-btn",onClick:s[2]||(s[2]=E=>n(Ve)("medical"))}),ue(it,{name:"All",fill:"clear",class:"clinical-notes-btn",onClick:s[3]||(s[3]=E=>n(Ve)("all"))})]),ue(ni,{class:"clinical-notes-demographics"}),n(fe)==="surgical"?(a(),o("div",pi,[s[52]||(s[52]=e("div",{class:"clinical-notes-list-header"},"Surgical Notes",-1)),n(Re)?(a(),o("div",ui,"Loading surgical notes...")):n(Ae).length===0?(a(),o("div",mi," No surgical notes found. ")):(a(),o("div",gi,[(a(!0),o(k,null,S(n(Ue),(E,D)=>(a(),o("div",{key:D,class:"clinical-notes-section-block surgical-section-block"},[e("div",vi,l(D),1),D==="Physical Examination"?(a(),o("div",yi,[e("div",fi,[s[26]||(s[26]=e("div",{class:"pe-title"},"Physical Examination",-1)),e("div",bi,[s[5]||(s[5]=e("span",{class:"pe-label"},"General Condition:",-1)),e("span",hi,l(n(W).generalCondition||"N/A"),1)]),s[27]||(s[27]=e("div",{class:"pe-subtitle"},"Vitals",-1)),e("div",_i,[e("div",ki,[s[6]||(s[6]=e("span",{class:"pe-label"},"Temperature:",-1)),e("span",xi,l(n(W).temperature||"N/A"),1)]),e("div",Si,[s[7]||(s[7]=e("span",{class:"pe-label"},"Pulse Rate:",-1)),e("span",wi,l(n(W).pulseRate||"N/A"),1)]),e("div",Ni,[s[8]||(s[8]=e("span",{class:"pe-label"},"Blood Pressure:",-1)),e("span",Ai,l(n(W).bloodPressure||"N/A"),1)]),e("div",Ei,[s[9]||(s[9]=e("span",{class:"pe-label"},"Respiratory Rate:",-1)),e("span",Ci,l(n(W).respiratoryRate||"N/A"),1)])]),e("div",Pi,[e("div",Ii,[s[10]||(s[10]=e("span",{class:"pe-label"},"Eyes:",-1)),e("span",Ti,l(n(W).eyes||"N/A"),1)]),e("div",Li,[s[11]||(s[11]=e("span",{class:"pe-label"},"Mouth:",-1)),e("span",Ri,l(n(W).mouth||"N/A"),1)]),e("div",Mi,[s[12]||(s[12]=e("span",{class:"pe-label"},"Neck:",-1)),e("span",Oi,l(n(W).neck||"N/A"),1)])]),e("div",Di,[s[13]||(s[13]=e("span",{class:"pe-label"},"Chest Examination:",-1)),e("span",Hi,l(n(W).chestExamination||"N/A"),1)]),e("div",Fi,[s[14]||(s[14]=e("span",{class:"pe-label"},"Endocrine Examination:",-1)),e("span",$i,l(n(W).endocrineExamination||"N/A"),1)]),e("div",Bi,[s[15]||(s[15]=e("span",{class:"pe-label"},"Abdominal Examination:",-1)),e("span",Vi,l(n(W).abdominalExamination||"N/A"),1)]),s[28]||(s[28]=e("div",{class:"pe-divider"},null,-1)),s[29]||(s[29]=e("div",{class:"pe-subtitle"},"Glasgow Coma Scale (GCS)",-1)),e("div",Gi,[s[16]||(s[16]=e("span",{class:"pe-label"},"Motor Response:",-1)),e("span",zi,l(n(W).motorResponse||"N/A"),1)]),e("div",ji,[s[17]||(s[17]=e("span",{class:"pe-label"},"Verbal Response:",-1)),e("span",Ui,l(n(W).verbalResponse||"N/A"),1)]),e("div",Wi,[s[18]||(s[18]=e("span",{class:"pe-label"},"Eye Response:",-1)),e("span",Yi,l(n(W).eyeOpeningResponse||"N/A"),1)]),s[30]||(s[30]=e("div",{class:"pe-divider"},null,-1)),s[31]||(s[31]=e("div",{class:"pe-subtitle"},"Additional Examinations & Extremities",-1)),e("table",qi,[s[25]||(s[25]=e("thead",null,[e("tr",null,[e("th",null,"Additional Examinations"),e("th",null,"Extremities")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[s[19]||(s[19]=e("span",{class:"pe-label"},"Cranial Nerves:",-1)),e("span",Ki,l(n(W).cranialNerves||"N/A"),1)]),e("td",null,[s[20]||(s[20]=e("span",{class:"pe-label"},"Pulsations:",-1)),e("span",Xi,l(n(W).pulsations||"N/A"),1)])]),e("tr",null,[e("td",null,[s[21]||(s[21]=e("span",{class:"pe-label"},"Gross Motor:",-1)),e("span",Zi,l(n(W).grossMotor||"N/A"),1)]),e("td",null,[s[22]||(s[22]=e("span",{class:"pe-label"},"Rectal Examination:",-1)),e("span",Ji,l(n(W).rectalExamination||"N/A"),1)])]),e("tr",null,[e("td",null,[s[23]||(s[23]=e("span",{class:"pe-label"},"Sensation:",-1)),e("span",Qi,l(n(W).sensation||"N/A"),1)]),e("td",null,[s[24]||(s[24]=e("span",{class:"pe-label"},"Extremities:",-1)),e("span",en,l(n(W).extremities||"N/A"),1)])])])])])])):D==="Initial Management"?(a(),o("div",tn,[e("div",sn,[s[35]||(s[35]=e("div",{class:"im-title"},"Initial Management",-1)),e("div",nn,[e("div",an,[s[32]||(s[32]=e("span",{class:"im-label"},"Clerk Name:",-1)),e("span",on,l(n(Qe).clerkName||"N/A"),1)]),e("div",ln,[s[33]||(s[33]=e("span",{class:"im-label"},"Designation:",-1)),e("span",rn,l(n(Qe).designation||"N/A"),1)]),e("div",cn,[s[34]||(s[34]=e("span",{class:"im-label"},"Signature:",-1)),e("span",dn,l(n(Qe).signature||"N/A"),1)])])])])):D==="Presenting Complaints"?(a(),o("div",pn,[e("div",un,[s[38]||(s[38]=e("div",{class:"pm-card-title"},"Presenting Complaints",-1)),s[39]||(s[39]=e("div",{class:"pm-card-divider"},null,-1)),e("div",mn,[e("div",gn,[s[36]||(s[36]=e("span",{class:"pc-label"},"Presenting Complaints:",-1)),e("span",vn,l(n(Xe).complaints||"N/A"),1)]),e("div",yn,[s[37]||(s[37]=e("span",{class:"pc-label"},"Presenting History:",-1)),e("span",fn,l(n(Xe).history||"N/A"),1)])])])])):D==="Past Medical History"?(a(),o("div",bn,[e("div",hn,[s[40]||(s[40]=e("div",{class:"pm-card-title"},"Past Medical History",-1)),s[41]||(s[41]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",_n,[(a(!0),o(k,null,S(n(ot),(p,g)=>(a(),o("li",{key:g},[e("span",kn,l(p.title)+":",1),e("span",xn,l(p.value),1)]))),128)),n(ot).length===0?(a(),o("li",Sn,"No records.")):T("",!0)])])])):D==="Review of Systems"?(a(),o("div",wn,[e("div",Nn,[s[42]||(s[42]=e("div",{class:"pm-card-title"},"Review of Systems",-1)),s[43]||(s[43]=e("div",{class:"pm-card-divider"},null,-1)),e("div",An,[e("div",En,[(a(!0),o(k,null,S(n(lt).left,(p,g)=>(a(),o("div",{key:`ros-l-${g}`,class:"ros-item"},[e("span",Cn,l(p.title)+":",1),e("span",Pn,l(p.value),1)]))),128))]),e("div",In,[(a(!0),o(k,null,S(n(lt).right,(p,g)=>(a(),o("div",{key:`ros-r-${g}`,class:"ros-item"},[e("span",Tn,l(p.title)+":",1),e("span",Ln,l(p.value),1)]))),128))])]),n(ft).length===0?(a(),o("div",Rn,"No records.")):T("",!0)])])):D==="Past Surgical History"?(a(),o("div",Mn,[e("div",On,[s[44]||(s[44]=e("div",{class:"pm-card-title"},"Past Surgical History",-1)),s[45]||(s[45]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Dn,[(a(!0),o(k,null,S(n(Y),(p,g)=>(a(),o("li",{key:g},[e("span",Hn,l(p.title)+":",1),e("span",Fn,l(p.value),1)]))),128)),n(Y).length===0?(a(),o("li",$n,"No records.")):T("",!0)])])])):D==="Family History"?(a(),o("div",Bn,[e("div",Vn,[s[46]||(s[46]=e("div",{class:"pm-card-title"},"Family History",-1)),s[47]||(s[47]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Gn,[(a(!0),o(k,null,S(n(we),(p,g)=>(a(),o("li",{key:g},[e("span",zn,l(p.title)+":",1),e("span",jn,l(p.value),1)]))),128)),n(we).length===0?(a(),o("li",Un,"No records.")):T("",!0)])])])):D==="Social History"?(a(),o("div",Wn,[e("div",Yn,[s[48]||(s[48]=e("div",{class:"pm-card-title"},"Social History",-1)),s[49]||(s[49]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",qn,[(a(!0),o(k,null,S(n(ie),(p,g)=>(a(),o("li",{key:g},[e("span",Kn,l(p.title)+":",1),e("span",Xn,l(p.value),1)]))),128)),n(ie).length===0?(a(),o("li",Zn,"No records.")):T("",!0)])])])):D==="Gynecological History"?(a(),o("div",Jn,[e("div",Qn,[s[50]||(s[50]=e("div",{class:"pm-card-title"},"Gynecological History",-1)),s[51]||(s[51]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",ea,[(a(!0),o(k,null,S(n(We),(p,g)=>(a(),o("li",{key:g},[e("span",ta,l(p.title)+":",1),e("span",sa,l(p.value),1)]))),128)),n(We).length===0?(a(),o("li",ia," No records. ")):T("",!0)])])])):(a(),o("div",{key:9,class:Oe(["clinical-notes-section-items surgical-section-items",{"surgical-section-items--stacked":$(D)}])},[(a(!0),o(k,null,S(E,(p,g)=>(a(),o("div",{key:g,class:"surgical-record"},[e("span",na,l(M(p))+":",1),e("span",aa,l(n(tt)(p)),1)]))),128))],2))]))),128))]))])):n(fe)==="gyneacology"?(a(),o("div",oa,[s[53]||(s[53]=e("div",{class:"clinical-notes-list-header"},"Gyneacology Ward",-1)),n(ze)?(a(),o("div",la," Loading gyneacology ward records... ")):n(Ee).length===0?(a(),o("div",ra," No gyneacology ward records found. ")):(a(),o("div",ca,[(a(!0),o(k,null,S(n($e),(E,D)=>(a(),o("div",{key:D,class:"clinical-notes-section-block gyne-section-block"},[e("div",da,l(D),1),e("div",{class:Oe(["clinical-notes-section-items gyne-section-items",{"gyne-section-items--wide":D==="General Examination","gyne-section-items--stacked":J(D)}])},[(a(!0),o(k,null,S(E,(p,g)=>(a(),o("div",{key:g,class:"gyne-record"},[e("span",pa,l(M(p))+":",1),e("span",ua,l(n(tt)(p)),1)]))),128))],2)]))),128))]))])):n(fe)==="medical"?(a(),o("div",ma,[s[128]||(s[128]=e("div",{class:"clinical-notes-list-header"},"Medical Inpatient",-1)),n(De)?(a(),o("div",ga," Loading medical inpatient records... ")):n(ke).length===0?(a(),o("div",va," No medical inpatient records found. ")):(a(),o("div",ya,[(a(!0),o(k,null,S(n(yt),(E,D)=>(a(),o("div",{key:D,class:"clinical-notes-section-block medical-section-block"},[e("div",fa,l(D),1),D==="Presenting Complaints"?(a(),o("div",ba,[e("div",ha,[s[54]||(s[54]=e("span",{class:"medical-record-label"},"Presenting Complaints:",-1)),e("span",_a,l(n(et).complaints||"N/A"),1)]),e("div",ka,[s[55]||(s[55]=e("span",{class:"medical-record-label"},"Presenting History:",-1)),e("span",xa,l(n(et).history||"N/A"),1)])])):D==="Review of Systems"?(a(),o("div",Sa,[e("div",wa,[e("div",Na,[e("div",Aa,[(a(!0),o(k,null,S(n(rt).left,(p,g)=>(a(),o("div",{key:`mi-ros-l-${g}`,class:"ros-item"},[e("span",Ea,l(p.title)+":",1),e("span",Ca,l(p.value),1)]))),128))]),e("div",Pa,[(a(!0),o(k,null,S(n(rt).right,(p,g)=>(a(),o("div",{key:`mi-ros-r-${g}`,class:"ros-item"},[e("span",Ia,l(p.title)+":",1),e("span",Ta,l(p.value),1)]))),128))])]),n(bt).length===0?(a(),o("div",La,"No records.")):T("",!0)])])):D==="Physical Examination"?(a(),o("div",Ra,[e("div",Ma,[e("div",Oa,[s[56]||(s[56]=e("span",{class:"mipe-label"},"General condition:",-1)),e("span",Da,l(n(v).general||"N/A"),1)]),s[107]||(s[107]=e("div",{class:"mipe-subtitle"},"Vitals",-1)),e("div",Ha,[e("div",Fa,[s[57]||(s[57]=e("span",{class:"mipe-label"},"Temperature:",-1)),e("span",$a,l(n(v).temperature||"N/A"),1)]),e("div",Ba,[s[58]||(s[58]=e("span",{class:"mipe-label"},"Pulse Rate:",-1)),e("span",Va,l(n(v).pulseRate||"N/A"),1)]),e("div",Ga,[s[59]||(s[59]=e("span",{class:"mipe-label"},"Systolic:",-1)),e("span",za,l(n(v).systolic||"N/A"),1)]),e("div",ja,[s[60]||(s[60]=e("span",{class:"mipe-label"},"Diastolic:",-1)),e("span",Ua,l(n(v).diastolic||"N/A"),1)]),e("div",Wa,[s[61]||(s[61]=e("span",{class:"mipe-label"},"Respiratory Rate:",-1)),e("span",Ya,l(n(v).respiratoryRate||"N/A"),1)]),e("div",qa,[s[62]||(s[62]=e("span",{class:"mipe-label"},"Oxygen Saturation:",-1)),e("span",Ka,l(n(v).oxygenSaturation||"N/A"),1)])]),s[108]||(s[108]=e("div",{class:"mipe-divider"},null,-1)),s[109]||(s[109]=e("div",{class:"mipe-subtitle"},"Head and Neck",-1)),e("div",Xa,[e("div",Za,[s[63]||(s[63]=e("span",{class:"mipe-label"},"Pupils Symmetrical:",-1)),e("span",Ja,l(n(v).pupilsSymmetrical||"N/A"),1)]),e("div",Qa,[s[64]||(s[64]=e("span",{class:"mipe-label"},"Conjunctiva:",-1)),e("span",eo,l(n(v).conjunctiva||"N/A"),1)]),e("div",to,[s[65]||(s[65]=e("span",{class:"mipe-label"},"Oral KS:",-1)),e("span",so,l(n(v).oralKs||"N/A"),1)]),e("div",io,[s[66]||(s[66]=e("span",{class:"mipe-label"},"Oral Candidiasis:",-1)),e("span",no,l(n(v).oralThrush||"N/A"),1)]),e("div",ao,[s[67]||(s[67]=e("span",{class:"mipe-label"},"Lymphadenopathy:",-1)),e("span",oo,l(n(v).lymphadenopathy||"N/A"),1)])]),n(v).headNeckOther?(a(),o("div",lo,[s[68]||(s[68]=e("span",{class:"mipe-label"},"Other:",-1)),e("span",ro,l(n(v).headNeckOther),1)])):T("",!0),s[110]||(s[110]=e("div",{class:"mipe-divider"},null,-1)),s[111]||(s[111]=e("div",{class:"mipe-subtitle"},"Chest",-1)),e("div",co,[e("div",po,[s[69]||(s[69]=e("span",{class:"mipe-label"},"Symmetrical Expansion:",-1)),e("span",uo,l(n(v).symmetricalExpansion||"N/A"),1)]),e("div",mo,[s[70]||(s[70]=e("span",{class:"mipe-label"},"Symmetrical Expansion Description:",-1)),e("span",go,l(n(v).symmetricalExpansionDescription||"N/A"),1)])]),s[112]||(s[112]=e("div",{class:"mipe-divider"},null,-1)),s[113]||(s[113]=e("div",{class:"mipe-subtitle"},"Heart",-1)),e("div",vo,[e("div",yo,[s[71]||(s[71]=e("span",{class:"mipe-label"},"Apex Beat:",-1)),e("span",fo,l(n(v).apexBeat||"N/A"),1)]),e("div",bo,[s[72]||(s[72]=e("span",{class:"mipe-label"},"Thrill Heaves:",-1)),e("span",ho,l(n(v).thrillHeaves||"N/A"),1)]),e("div",_o,[s[73]||(s[73]=e("span",{class:"mipe-label"},"Auscultation (Heart):",-1)),e("span",ko,l(n(v).auscultationHeart||"N/A"),1)])]),s[114]||(s[114]=e("div",{class:"mipe-divider"},null,-1)),s[115]||(s[115]=e("div",{class:"mipe-subtitle"},"Lungs",-1)),e("div",xo,[e("div",So,[s[74]||(s[74]=e("span",{class:"mipe-label"},"Lung Condition:",-1)),e("span",wo,l(n(v).lungCondition||"N/A"),1)]),e("div",No,[s[75]||(s[75]=e("span",{class:"mipe-label"},"Lung Position:",-1)),e("span",Ao,l(n(v).lungPosition||"N/A"),1)])]),s[116]||(s[116]=e("div",{class:"mipe-divider"},null,-1)),s[117]||(s[117]=e("div",{class:"mipe-subtitle"},"Abdomen",-1)),e("div",Eo,[e("div",Co,[s[76]||(s[76]=e("span",{class:"mipe-label"},"Region:",-1)),e("span",Po,l(n(v).abdomenRegion||"N/A"),1)]),e("div",Io,[s[77]||(s[77]=e("span",{class:"mipe-label"},"Inspection:",-1)),e("span",To,l(n(v).abdomenInspection||"N/A"),1)])]),e("div",Lo,[e("div",Ro,[s[78]||(s[78]=e("span",{class:"mipe-label"},"Light Palpation:",-1)),e("span",Mo,l(n(v).abdomenLightPalpation||"N/A"),1)]),e("div",Oo,[s[79]||(s[79]=e("span",{class:"mipe-label"},"Deep Palpation:",-1)),e("span",Do,l(n(v).abdomenDeepPalpation||"N/A"),1)])]),e("div",Ho,[e("div",Fo,[s[80]||(s[80]=e("span",{class:"mipe-label"},"Auscultation:",-1)),e("span",$o,l(n(v).abdomenAuscultation||"N/A"),1)]),e("div",Bo,[s[81]||(s[81]=e("span",{class:"mipe-label"},"Shifting Dullness:",-1)),e("span",Vo,l(n(v).abdomenShiftingDullness||"N/A"),1)]),e("div",Go,[s[82]||(s[82]=e("span",{class:"mipe-label"},"Fluid Thrill:",-1)),e("span",zo,l(n(v).abdomenFluidThrill||"N/A"),1)])]),n(Ze).abdomen.length?(a(),o("div",jo,[(a(!0),o(k,null,S(n(Ze).abdomen,(p,g)=>(a(),o("div",{class:"mipe-zone",key:`mi-abd-${g}`},[e("div",Uo,l(p.zone),1),(a(!0),o(k,null,S(p.findings,(z,re)=>(a(),o("div",{class:"mipe-line",key:`mi-abd-${g}-${re}`},[e("span",Wo,l(z.title)+":",1),e("span",Yo,l(z.value),1)]))),128))]))),128))])):T("",!0),n(Ze).respiratory.length?(a(),o("div",qo,[s[83]||(s[83]=e("div",{class:"mipe-divider"},null,-1)),s[84]||(s[84]=e("div",{class:"mipe-subtitle"},"Respiratory Examination",-1)),e("div",Ko,[(a(!0),o(k,null,S(n(Ze).respiratory,(p,g)=>(a(),o("div",{class:"mipe-zone",key:`mi-resp-${g}`},[e("div",Xo,l(p.zone),1),(a(!0),o(k,null,S(p.findings,(z,re)=>(a(),o("div",{class:"mipe-line",key:`mi-resp-${g}-${re}`},[e("span",Zo,l(z.title)+":",1),e("span",Jo,l(z.value),1)]))),128))]))),128))])])):T("",!0),s[118]||(s[118]=e("div",{class:"mipe-divider"},null,-1)),s[119]||(s[119]=e("div",{class:"mipe-subtitle"},"Extremities",-1)),e("div",Qo,[s[85]||(s[85]=e("span",{class:"mipe-label"},"Oedema:",-1)),e("span",el,l(n(v).oedema||"N/A"),1)]),s[120]||(s[120]=e("div",{class:"mipe-divider"},null,-1)),s[121]||(s[121]=e("div",{class:"mipe-subtitle"},"Skin",-1)),e("div",tl,[e("div",sl,[s[86]||(s[86]=e("span",{class:"mipe-label"},"Skin Rash:",-1)),e("span",il,l(n(v).skinRash||"N/A"),1)]),e("div",nl,[s[87]||(s[87]=e("span",{class:"mipe-label"},"Herpes Zoster Scar:",-1)),e("span",al,l(n(v).herpesScar||"N/A"),1)])]),s[122]||(s[122]=e("div",{class:"mipe-divider"},null,-1)),s[123]||(s[123]=e("div",{class:"mipe-subtitle"},"Neurological Examination",-1)),e("div",ol,[s[88]||(s[88]=e("span",{class:"mipe-label"},"Neck Stiffness:",-1)),e("span",ll,l(n(v).neckStiffness||"N/A"),1)]),s[124]||(s[124]=e("div",{class:"mipe-divider"},null,-1)),s[125]||(s[125]=e("div",{class:"mipe-subtitle"},"Glasgow Coma Scale (GCS)",-1)),e("div",rl,[e("div",cl,[s[89]||(s[89]=e("span",{class:"mipe-label"},"Eye Opening Response:",-1)),e("span",dl,l(n(v).eyeOpeningResponse||"N/A"),1)]),e("div",pl,[s[90]||(s[90]=e("span",{class:"mipe-label"},"Verbal Response:",-1)),e("span",ul,l(n(v).verbalResponse||"N/A"),1)]),e("div",ml,[s[91]||(s[91]=e("span",{class:"mipe-label"},"Motor Response:",-1)),e("span",gl,l(n(v).motorResponse||"N/A"),1)])]),s[126]||(s[126]=e("div",{class:"mipe-divider"},null,-1)),s[127]||(s[127]=e("div",{class:"mipe-subtitle"},"Cranial and Peripheral Nerves",-1)),e("table",vl,[s[106]||(s[106]=e("thead",null,[e("tr",null,[e("th",null,"Cranial Nerves"),e("th",null,"Peripheral Nerves")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[s[92]||(s[92]=e("span",{class:"pe-label"},"Pupil:",-1)),e("span",yl,l(n(v).cnPupil||"N/A"),1)]),e("td",null,[s[93]||(s[93]=e("span",{class:"pe-label"},"Power:",-1)),e("span",fl,l(n(v).pnPower||"N/A"),1)])]),e("tr",null,[e("td",null,[s[94]||(s[94]=e("span",{class:"pe-label"},"Visual Field/Acuity:",-1)),e("span",bl,l(n(v).cnVisualField||"N/A"),1)]),e("td",null,[s[95]||(s[95]=e("span",{class:"pe-label"},"Tone:",-1)),e("span",hl,l(n(v).pnTone||"N/A"),1)])]),e("tr",null,[e("td",null,[s[96]||(s[96]=e("span",{class:"pe-label"},"Eye Movements/Nystagmus:",-1)),e("span",_l,l(n(v).cnEyeMovements||"N/A"),1)]),e("td",null,[s[97]||(s[97]=e("span",{class:"pe-label"},"Reflexes:",-1)),e("span",kl,l(n(v).pnReflexes||"N/A"),1)])]),e("tr",null,[e("td",null,[s[98]||(s[98]=e("span",{class:"pe-label"},"Facial Movements/Sensation:",-1)),e("span",xl,l(n(v).cnFacial||"N/A"),1)]),e("td",null,[s[99]||(s[99]=e("span",{class:"pe-label"},"Plantars:",-1)),e("span",Sl,l(n(v).pnPlantars||"N/A"),1)])]),e("tr",null,[e("td",null,[s[100]||(s[100]=e("span",{class:"pe-label"},"Hearing:",-1)),e("span",wl,l(n(v).cnHearing||"N/A"),1)]),e("td",null,[s[101]||(s[101]=e("span",{class:"pe-label"},"Sensation:",-1)),e("span",Nl,l(n(v).pnSensation||"N/A"),1)])]),e("tr",null,[e("td",null,[s[102]||(s[102]=e("span",{class:"pe-label"},"Tongue Movement/Tastes:",-1)),e("span",Al,l(n(v).cnTongue||"N/A"),1)]),e("td",null,[s[103]||(s[103]=e("span",{class:"pe-label"},"Coordination:",-1)),e("span",El,l(n(v).pnCoordination||"N/A"),1)])]),e("tr",null,[e("td",null,[s[104]||(s[104]=e("span",{class:"pe-label"},"Cough/Gag Reflex:",-1)),e("span",Cl,l(n(v).cnCoughGag||"N/A"),1)]),s[105]||(s[105]=e("td",null,null,-1))])])])])])):(a(),o("div",{key:3,class:Oe(["clinical-notes-section-items medical-section-items",{"medical-section-items--stacked":L(D)}])},[(a(!0),o(k,null,S(E,(p,g)=>(a(),o("div",{key:g,class:"medical-record"},[e("span",Pl,l(M(p))+":",1),e("span",Il,l(n(tt)(p)),1)]))),128))],2))]))),128))]))])):n(fe)==="all"?(a(),o("div",Tl,[e("div",Ll,[e("header",Rl,[s[129]||(s[129]=e("div",null,[e("h2",{class:"title"},"Clinical Health Card"),e("p",{class:"subtitle"},"Complete timeline of patient's clinical review and outcomes.")],-1)),e("div",Ml,[ue(n(Fs),{fill:"clear",size:"small",class:"refresh-btn",disabled:n(me),onClick:n(se),title:"Refresh Health Card"},{default:Ke(()=>[ue(n(nt),{icon:n(ti),slot:"icon-only",class:Oe({"spin-anim":n(me)})},null,8,["icon","class"])]),_:1},8,["disabled","onClick"])])]),n(me)?(a(),o("div",Ol,[(a(),o(k,null,S(3,E=>e("div",{class:"skeleton-card",key:"skel-"+E},[...s[130]||(s[130]=[e("div",{class:"skeleton-header"},[e("div",{class:"skeleton-icon shimmer"}),e("div",{class:"skeleton-text-wrapper"},[e("div",{class:"skeleton-title shimmer"}),e("div",{class:"skeleton-subtitle shimmer"})])],-1)])])),64))])):n(xe).length?(a(),o("div",Fl,[(a(!0),o(k,null,S(n(xe),(E,D)=>(a(),o("div",{key:E.id,class:Oe(["encounter-tile",{"is-expanded":n(be)[E.id]}]),onClick:p=>n(F)(E.id),style:at({animationDelay:D*.05+"s"})},[e("div",{class:Oe(["tile-header",{"header-expanded":n(be)[E.id]}])},[e("div",{class:"tile-icon-wrapper",style:at({backgroundColor:n(be)[E.id]?E.color:E.color+"15",color:n(be)[E.id]?"#fff":E.color})},[ue(n(nt),{icon:E.icon,class:"tile-icon"},null,8,["icon"])],4),e("div",Bl,[e("h4",Vl,l(E.title),1)]),ue(n(nt),{icon:n(si),class:Oe(["expand-icon",{expanded:n(be)[E.id]}])},null,8,["icon","class"])],2),e("div",{class:Oe(["tile-body",{"body-expanded":n(be)[E.id]}])},[e("div",{class:"tile-body-inner",onClick:s[4]||(s[4]=$s(()=>{},["stop"]))},[E.id==="triage"?(a(),o("div",Gl,[n(le)?(a(),o("div",jl,[e("div",Ul,[s[134]||(s[134]=e("span",{class:"triage-summary-letter"},"A.",-1)),e("p",Wl,[s[133]||(s[133]=e("strong",null,"Presenting Complaints:",-1)),e("span",null,l(n(le).presentingComplaints),1)])]),e("div",Yl,[s[136]||(s[136]=e("span",{class:"triage-summary-letter"},"B.",-1)),e("p",ql,[s[135]||(s[135]=e("strong",null,"Vital Signs:",-1)),e("span",null,l(n(le).vitalSigns),1)])]),e("div",Kl,[s[138]||(s[138]=e("span",{class:"triage-summary-letter"},"C.",-1)),e("p",Xl,[s[137]||(s[137]=e("strong",null,"Triage Category:",-1)),e("span",null,l(n(le).triageCategory),1)])]),e("div",Zl,[s[140]||(s[140]=e("span",{class:"triage-summary-letter"},"D.",-1)),e("p",Jl,[s[139]||(s[139]=e("strong",null,"Patient Care Area:",-1)),e("span",null,l(n(le).patientCareArea),1)])]),e("p",Ql,l(n(le).createdByLine),1)])):(a(),o("div",zl,"No triage information found."))])):E.id==="soapier"?(a(),o("div",er,[n(U)?(a(),o("div",sr,[e("div",ir,[e("div",nr,[s[141]||(s[141]=e("div",{class:"soapier-card-title"},"Subjective",-1)),s[142]||(s[142]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",ar,l(n(U).subjective||"N/A"),1)]),e("div",or,[s[145]||(s[145]=e("div",{class:"soapier-card-title"},"Objective",-1)),s[146]||(s[146]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",lr,[e("div",rr,[s[143]||(s[143]=e("div",{class:"soapier-block-title"},"Objective",-1)),e("div",cr,l(n(U).objective||"N/A"),1)]),e("div",dr,[s[144]||(s[144]=e("div",{class:"soapier-block-title"},"Vital Signs",-1)),e("div",pr,l(n(U).vitalSigns||"N/A"),1)])])]),e("div",ur,[s[147]||(s[147]=e("div",{class:"soapier-card-title"},"Assessment",-1)),s[148]||(s[148]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",mr,l(n(U).assessment||"N/A"),1)]),e("div",gr,[s[149]||(s[149]=e("div",{class:"soapier-card-title"},"Plan",-1)),s[150]||(s[150]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",vr,l(n(U).plan||"N/A"),1)]),e("div",yr,[s[153]||(s[153]=e("div",{class:"soapier-card-title"},"Intervention / Implementation",-1)),s[154]||(s[154]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",fr,[e("div",br,[s[151]||(s[151]=e("div",{class:"soapier-block-title"},"Non‑Pharmacological",-1)),e("div",hr,[n(U).nonPharmacological&&n(U).nonPharmacological!=="N/A"?(a(!0),o(k,{key:0},S(n(U).nonPharmacological.split(/\n|\s*\|\s*/).filter(Boolean),(p,g)=>(a(),o("div",{key:"np-all-"+g},l(p),1))),128)):(a(),o(k,{key:1},[Be("N/A")],64))])]),e("div",_r,[s[152]||(s[152]=e("div",{class:"soapier-block-title"},"Medications",-1)),e("div",kr,l(n(U).medications||"N/A"),1)])])]),e("div",xr,[s[155]||(s[155]=e("div",{class:"soapier-card-title"},"Evaluation",-1)),s[156]||(s[156]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",Sr,l(n(U).evaluation||"N/A"),1)]),e("div",wr,[s[157]||(s[157]=e("div",{class:"soapier-card-title"},"Replan",-1)),s[158]||(s[158]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",Nr,l(n(U).replan||"N/A"),1)])]),e("div",Ar,l(n(U).createdByLine),1)])):(a(),o("div",tr,"No SOAPIER notes found."))])):E.id==="monitoring_chart"?(a(),o("div",Er,[n(Se)?(a(),o("div",Pr,[(a(!0),o(k,null,S(n(Se).charts,p=>(a(),o("div",{key:p.key,class:"monitoring-chart-card"},[e("div",Ir,l(p.title),1),s[159]||(s[159]=e("div",{class:"monitoring-chart-divider"},null,-1)),H(p)?(a(),o("div",Tr,[n(be)[E.id]?(a(),vt(n(Ys),{key:`${E.id}-${p.key}`,width:"100%",height:"160",type:"line",options:Ne(p),series:p.series},null,8,["options","series"])):T("",!0)])):T("",!0),oe(p)?(a(),o("div",Lr,[(a(!0),o(k,null,S(p.series,(g,z)=>(a(),o("span",{key:`${p.key}-${g.name}`,class:"monitoring-chart-legend-item"},[e("span",{class:"monitoring-chart-legend-marker",style:at({color:p.colors?.[z]||"#0ea5e9"}),"aria-hidden":"true"}," ● ",4),e("span",null,l(g.name),1)]))),128))])):T("",!0),H(p)?T("",!0):(a(),o("div",Rr," No chartable records. "))]))),128))])):(a(),o("div",Cr," No monitoring chart records found. "))])):E.id==="fluid_balance"?(a(),o("div",Mr,[n(he)?(a(),o("div",Dr,[(a(!0),o(k,null,S(n(he).entries,p=>(a(),o("div",{key:p.id,class:"fluid-balance-card"},[e("div",Hr,[e("div",null,[e("div",Fr,l(p.entryDate||"Date not recorded"),1),e("div",$r,l(p.entryTime||"Time not recorded"),1)]),e("div",{class:Oe(["fluid-balance-badge",{"fluid-balance-badge--alert":Math.abs(p.balance)>1e3}])},l(p.balanceLabel),3)]),e("div",Br,[e("div",Vr,[s[160]||(s[160]=e("div",{class:"fluid-balance-section-title"},"Intake",-1)),e("ul",Gr,[(a(!0),o(k,null,S(p.intake,g=>(a(),o("li",{key:`intake-${g.title}`},[e("span",null,l(g.title)+":",1),Be(" "+l(g.value),1)]))),128)),p.intake.length===0?(a(),o("li",zr,"No intake recorded.")):T("",!0)])]),e("div",jr,[s[161]||(s[161]=e("div",{class:"fluid-balance-section-title"},"Output",-1)),e("ul",Ur,[(a(!0),o(k,null,S(p.output,g=>(a(),o("li",{key:`output-${g.title}`},[e("span",null,l(g.title)+":",1),Be(" "+l(g.value),1)]))),128)),p.output.length===0?(a(),o("li",Wr,"No output recorded.")):T("",!0)])]),e("div",Yr,[s[162]||(s[162]=e("div",{class:"fluid-balance-section-title"},"Stool / Lab",-1)),e("ul",qr,[(a(!0),o(k,null,S(p.stool,g=>(a(),o("li",{key:`stool-${g.title}`},[e("span",null,l(g.title)+":",1),Be(" "+l(g.value),1)]))),128)),p.stool.length===0?(a(),o("li",Kr,"No stool details recorded.")):T("",!0)])]),e("div",Xr,[s[167]||(s[167]=e("div",{class:"fluid-balance-section-title"},"Summary",-1)),e("ul",Zr,[e("li",null,[s[163]||(s[163]=e("span",null,"Total Intake:",-1)),Be(" "+l(p.totalIntake)+" mL",1)]),e("li",null,[s[164]||(s[164]=e("span",null,"Total Output:",-1)),Be(" "+l(p.totalOutput)+" mL",1)]),e("li",null,[s[165]||(s[165]=e("span",null,"24-hour Balance:",-1)),Be(" "+l(p.balanceLabel),1)]),p.comments?(a(),o("li",Jr,[s[166]||(s[166]=e("span",null,"Notes:",-1)),Be(" "+l(p.comments),1)])):T("",!0)])])])]))),128))])):(a(),o("div",Or," No fluid balance and stool monitoring records found. "))])):E.id==="primary_survey"?(a(),o("div",Qr,[n(Ce)?(a(),o("div",tc,[e("div",sc,[(a(!0),o(k,null,S(n(Ce).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",ic,l(g),1),e("ul",nc,[(a(!0),o(k,null,S(p,(z,re)=>(a(),o("li",{key:re,class:"observation-row"},[e("span",ac,l(z.title),1),e("span",oc,l(z.value),1)]))),128))])]))),128))]),e("div",lc,l(n(Ce).createdByLine),1)])):(a(),o("div",ec," No primary survey records found. "))])):E.id==="sample_history"?(a(),o("div",rc,[n(B)?(a(),o("div",dc,[e("div",pc,[s[168]||(s[168]=e("div",{class:"sample-card-title"},"Symptoms - Presenting Complaints",-1)),s[169]||(s[169]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",uc,[(a(!0),o(k,null,S(n(B).cards.symptoms.items,(p,g)=>(a(),o("li",{key:g},[e("span",mc,l(p.title)+":",1),e("span",gc,l(p.value),1)]))),128)),n(B).cards.symptoms.items.length===0?(a(),o("li",vc," No records. ")):T("",!0)]),e("div",yc,l(n(B).cards.symptoms.createdByLine),1)]),e("div",fc,[s[170]||(s[170]=e("div",{class:"sample-card-title"},"Events",-1)),s[171]||(s[171]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",bc,[(a(!0),o(k,null,S(n(B).cards.events.items,(p,g)=>(a(),o("li",{key:g},[e("span",hc,l(p.title)+":",1),e("span",_c,l(p.value),1)]))),128)),n(B).cards.events.items.length===0?(a(),o("li",kc," No records. ")):T("",!0)]),e("div",xc,l(n(B).cards.events.createdByLine),1)]),e("div",Sc,[s[172]||(s[172]=e("div",{class:"sample-card-title"},"Allergies",-1)),s[173]||(s[173]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",wc,[(a(!0),o(k,null,S(n(B).cards.allergies.items,(p,g)=>(a(),o("li",{key:g},[e("span",Nc,l(p.title)+":",1),e("span",Ac,l(p.value),1)]))),128)),n(B).cards.allergies.items.length===0?(a(),o("li",Ec," No records. ")):T("",!0)]),e("div",Cc,l(n(B).cards.allergies.createdByLine),1)]),e("div",Pc,[s[174]||(s[174]=e("div",{class:"sample-card-title"},"Medications",-1)),s[175]||(s[175]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Ic,[(a(!0),o(k,null,S(n(B).cards.medications.items,(p,g)=>(a(),o("li",{key:g},[e("span",Tc,l(p.title)+":",1),e("span",Lc,l(p.value),1)]))),128)),n(B).cards.medications.items.length===0?(a(),o("li",Rc," No records. ")):T("",!0)]),e("div",Mc,l(n(B).cards.medications.createdByLine),1)]),e("div",Oc,[s[176]||(s[176]=e("div",{class:"sample-card-title"},"Prior/Existing Conditions",-1)),s[177]||(s[177]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Dc,[(a(!0),o(k,null,S(n(B).cards.priorConditions.items,(p,g)=>(a(),o("li",{key:g},[e("span",Hc,l(p.title)+":",1),e("span",Fc,l(p.value),1)]))),128)),n(B).cards.priorConditions.items.length===0?(a(),o("li",$c," No records. ")):T("",!0)]),e("div",Bc,l(n(B).cards.priorConditions.createdByLine),1)]),e("div",Vc,[s[178]||(s[178]=e("div",{class:"sample-card-title"},"Last Meal",-1)),s[179]||(s[179]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Gc,[(a(!0),o(k,null,S(n(B).cards.lastMeal.items,(p,g)=>(a(),o("li",{key:g},[e("span",zc,l(p.title)+":",1),e("span",jc,l(p.value),1)]))),128)),n(B).cards.lastMeal.items.length===0?(a(),o("li",Uc," No records. ")):T("",!0)]),e("div",Wc,l(n(B).cards.lastMeal.createdByLine),1)])])):(a(),o("div",cc," No SAMPLE history records found. "))])):E.id==="secondary_survey"?(a(),o("div",Yc,[n(Pe)?(a(),o("div",Kc,[e("div",Xc,[(a(!0),o(k,null,S(n(Pe).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",Zc,l(g),1),e("ul",Jc,[(a(!0),o(k,null,S(p,(z,re)=>(a(),o("li",{key:re,class:"observation-row"},[e("span",Qc,l(z.title),1),e("span",ed,l(z.value),1)]))),128))])]))),128))]),e("div",td,l(n(Pe).createdByLine),1)])):(a(),o("div",qc," No secondary survey records found. "))])):E.id==="diagnosis"?(a(),o("div",sd,[n(je)?(a(),o("div",nd,[(a(!0),o(k,null,S(n(je).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",ad,l(g),1),e("ul",od,[(a(!0),o(k,null,S(p,(z,re)=>(a(),o("li",{key:re,class:"observation-row"},[e("span",ld,l(z.title),1),e("span",rd,l(z.value),1)]))),128))])]))),128)),e("div",cd,l(n(je).createdByLine),1)])):(a(),o("div",id," No diagnosis records found. "))])):E.id==="investigations"?(a(),o("div",dd,[n(ge)?(a(),o("div",ud,[n(ge).cards.labOrdersPlan.items.length?(a(),o("div",md,[s[180]||(s[180]=e("div",{class:"pm-card-title"},"Lab Orders Plan",-1)),s[181]||(s[181]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",gd,[(a(!0),o(k,null,S(n(ge).cards.labOrdersPlan.items,(p,g)=>(a(),o("li",{key:g},[e("span",vd,l(p.title)+":",1),e("span",yd,l(p.value),1)]))),128))]),e("div",fd,l(n(ge).cards.labOrdersPlan.createdByLine),1)])):T("",!0),n(ge).cards.bedsidePlan.items.length?(a(),o("div",bd,[s[182]||(s[182]=e("div",{class:"pm-card-title"},"Bedside Investigation Plan",-1)),s[183]||(s[183]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",hd,[(a(!0),o(k,null,S(n(ge).cards.bedsidePlan.items,(p,g)=>(a(),o("li",{key:g},[e("span",_d,l(p.title)+":",1),e("span",kd,l(p.value),1)]))),128))]),e("div",xd,l(n(ge).cards.bedsidePlan.createdByLine),1)])):T("",!0),!n(ge).cards.labOrdersPlan.items.length&&!n(ge).cards.bedsidePlan.items.length?(a(),o("div",Sd," No findings recorded. ")):T("",!0)])):(a(),o("div",pd," No laboratory / radiology findings found. "))])):E.id==="patient_management"?(a(),o("div",wd,[n(_e)?(a(),o("div",Ad,[e("div",Ed,[s[184]||(s[184]=e("div",{class:"pm-card-title"},"Non‑Pharmacological",-1)),s[185]||(s[185]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Cd,[(a(!0),o(k,null,S(n(_e).cards.nonPharmacological.items,(p,g)=>(a(),o("li",{key:g},[e("span",Pd,l(p.title)+":",1),e("span",Id,l(p.value),1)]))),128)),n(_e).cards.nonPharmacological.items.length===0?(a(),o("li",Td," No records. ")):T("",!0)]),e("div",Ld,l(n(_e).cards.nonPharmacological.createdByLine),1)]),e("div",Rd,[s[186]||(s[186]=e("div",{class:"pm-card-title"},"Patient Care Area",-1)),s[187]||(s[187]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Md,[(a(!0),o(k,null,S(n(_e).cards.patientCareArea.items,(p,g)=>(a(),o("li",{key:g},[e("span",Od,l(p.title)+":",1),e("span",Dd,l(p.value),1)]))),128)),n(_e).cards.patientCareArea.items.length===0?(a(),o("li",Hd," No records. ")):T("",!0)]),e("div",Fd,l(n(_e).cards.patientCareArea.createdByLine),1)]),e("div",$d,[s[188]||(s[188]=e("div",{class:"pm-card-title"},"Medications",-1)),s[189]||(s[189]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Bd,[(a(!0),o(k,null,S(n(_e).cards.medications.items,(p,g)=>(a(),o("li",{key:g},[e("span",Vd,l(p.title)+":",1),e("span",Gd,l(p.value),1)]))),128)),n(_e).cards.medications.items.length===0?(a(),o("li",zd," No records. ")):T("",!0)]),e("div",jd,l(n(_e).cards.medications.createdByLine),1)])])):(a(),o("div",Nd," No patient management plan records found. "))])):E.id==="continuation"?(a(),o("div",Ud,[n(He)?(a(),o("div",Yd,[(a(!0),o(k,null,S(n(He).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",qd,l(g),1),e("ul",Kd,[(a(!0),o(k,null,S(p,(z,re)=>(a(),o("li",{key:re,class:"observation-row"},[e("span",Xd,l(z.title),1),e("span",Zd,l(z.value),1)]))),128))])]))),128)),e("div",Jd,l(n(He).createdByLine),1)])):(a(),o("div",Wd," No continuation notes found. "))])):E.id==="disposition"?(a(),o("div",Qd,[n(Fe)?(a(),o("div",tp,[e("div",sp,[s[190]||(s[190]=e("div",{class:"pm-card-title"},"Awaiting Specialty",-1)),s[191]||(s[191]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",ip,[(a(!0),o(k,null,S(n(Fe).cards.awaitingSpecialty.items,(p,g)=>(a(),o("li",{key:g},[e("span",np,l(p.title)+":",1),e("span",ap,l(p.value),1)]))),128)),n(Fe).cards.awaitingSpecialty.items.length===0?(a(),o("li",op," No records. ")):T("",!0)]),e("div",lp,l(n(Fe).cards.awaitingSpecialty.createdByLine),1)]),(a(!0),o(k,null,S(n(Fe).otherCards,p=>(a(),o("div",{key:p.key,class:"pm-card"},[e("div",rp,l(p.title),1),s[192]||(s[192]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",cp,[(a(!0),o(k,null,S(p.items,(g,z)=>(a(),o("li",{key:z},[e("span",dp,l(g.title)+":",1),e("span",pp,l(g.value),1)]))),128)),p.items.length===0?(a(),o("li",up,"No records.")):T("",!0)]),e("div",mp,l(p.createdByLine),1)]))),128))])):(a(),o("div",ep," No disposition notes found. "))])):T("",!0)])],2)],14,$l))),128))])):(a(),o("div",Dl,[e("div",Hl,[ue(n(nt),{icon:n(Et),class:"empty-icon"},null,8,["icon"])]),s[131]||(s[131]=e("h3",null,"No Clinical Records Found",-1)),s[132]||(s[132]=e("p",null,"The clinical review workflow has not been started or saved yet.",-1))]))])])):(a(),o("div",gp,"Clinical notes records will appear here."))]),_:1})]),_:1})]))}}),Yt={Weight:["Weight (kg)","Weight"],"Height (cm)":["Height (cm)","Height"],Temperature:["Temperature (c)","Temperature"],Pulse:["Pulse","Pulse Rate","Pulse rate"],Systolic:["Systolic blood pressure","Systolic"],Diastolic:["Diastolic blood pressure","Diastolic"],"Respiratory rate":["Respiratory rate","Respiratory Rate"]},Zt=j=>{const M=`${j??""}`.trim();return Date.parse(M)||Date.parse(M.replace(" ","T").replace(/ ?([+-]\d\d)(\d\d)$/,"$1:$2"))||0},vp=j=>{const M=j?.value_numeric??j?.value_text;if(M==null||`${M}`.trim()==="")return;const J=Number(M);return Number.isFinite(J)?J:void 0},Hp=j=>{let M;const J=$=>{if($){if(`${$.concept_name??""}`.trim().toLowerCase()==="blood glucose"&&!Number($.voided)){const H=`${$.value_text??$.value_numeric??""}`.trim().match(/^([\d.]+)\s*(.*)$/);if(H){const oe=Zt($.obs_datetime);(!M||oe>M.at)&&(M={at:oe,value:H[1],unit:H[2]||"mmol/l"})}}($.children||$.child||$.groupMembers||[]).forEach(J)}};return(j?.observations||[]).forEach($=>($?.obs||[]).forEach(J)),M?{value:M.value,unit:M.unit}:void 0},Fp=j=>{const M=new Map;Object.entries(Yt).forEach(([L,H])=>H.forEach(oe=>M.set(oe.toLowerCase(),L)));const J={},$=L=>{if(!L)return;const H=M.get(`${L.concept_name??""}`.trim().toLowerCase()),oe=H&&!Number(L.voided)?vp(L):void 0;if(H&&oe!==void 0){const Ne=Zt(L.obs_datetime);(!J[H]||Ne>J[H].at)&&(J[H]={at:Ne,value:oe})}(L.children||L.child||L.groupMembers||[]).forEach($)};return(j?.observations||[]).forEach(L=>(L?.obs||[]).forEach($)),Object.keys(Yt).reduce((L,H)=>(L[H]=J[H]?.value,L),{})},yp={key:0,class:"menu-note"},fp={class:"item-title"},bp=Kt({__name:"StartVisitMenu",props:{items:{},note:{}},emits:["select"],setup(j,{expose:M,emit:J}){const $=J,L=I(!1),H=I(null),oe=I(null),Ne=I({top:"0px",left:"0px"}),fe=I({overflowY:"auto"});let Ae=null,Ee=null;const ke=()=>{L.value=!1,Ae=null,Ee!==null&&cancelAnimationFrame(Ee),Ee=null},Re=()=>{if(!L.value||!Ae||!H.value)return;const F=Ae.getBoundingClientRect();if(!F.width||!F.height){ke();return}const me=H.value.offsetWidth,se=oe.value?.scrollHeight||H.value.offsetHeight,xe=8,le=Math.max(8,Math.min(F.right-me,window.innerWidth-me-8)),U=Math.max(0,window.innerHeight-F.bottom-xe-12),Se=Math.max(0,F.top-xe-12),he=se>U&&Se>U,Ce=Math.min(se,he?Se:U),B=he?F.top-xe-Ce:F.bottom+xe,Pe=Math.max(8,Math.min(me-20,le+me-(F.left+F.width/2)-6));fe.value={maxHeight:`${he?Se:U}px`,overflowY:"auto",boxSizing:"border-box"},Ne.value={top:`${B}px`,left:`${le}px`,"--arrow-right":`${Pe}px`,"--arrow-top":he?"auto":"-6px","--arrow-bottom":he?"-6px":"auto","--arrow-transform":he?"rotate(225deg)":"rotate(45deg)","--arrow-shadow":he?"2px 2px 3px rgba(0, 0, 0, 0.05)":"-2px -2px 3px rgba(0, 0, 0, 0.05)"},Ee=requestAnimationFrame(Re)},ze=async F=>{if(F.stopPropagation(),L.value){ke();return}Ae=F.currentTarget,L.value=!0,await qt(),Re()},De=F=>{F.disabled||(ke(),$("select",F))},be=F=>{F.key==="Escape"&&L.value&&ke()};return Xt(()=>window.addEventListener("keydown",be)),Vs(()=>{ke(),window.removeEventListener("keydown",be)}),M({open:ze,close:ke}),(F,me)=>(a(),vt(Gs,{to:"body"},[L.value?(a(),o("div",{key:0,class:"custom-menu-backdrop",onClick:ke})):T("",!0),L.value?(a(),o("div",{key:1,ref_key:"menuElement",ref:H,class:"custom-premium-menu profile-program-menu",style:at(Ne.value)},[me[0]||(me[0]=e("div",{class:"menu-arrow"},null,-1)),e("div",{ref_key:"menuContentElement",ref:oe,class:"modern-popover-container",style:at(fe.value)},[j.note?(a(),o("div",yp,l(j.note),1)):T("",!0),ue(n(Ws),{lines:"none"},{default:Ke(()=>[(a(!0),o(k,null,S(j.items,(se,xe)=>(a(),o(k,{key:xe},[se.isHeader?(a(),vt(n(zs),{key:0,class:"program-section-label"},{default:Ke(()=>[ue(n(js),null,{default:Ke(()=>[Be(l(se.label),1)]),_:2},1024)]),_:2},1024)):(a(),vt(n(Us),{key:1,button:!0,detail:!1,class:Oe(["modern-popover-item",{"child-item":se.isChild}]),disabled:se.disabled,onClick:le=>De(se)},{default:Ke(()=>[ue(n(nt),{slot:"start",icon:n(ii),class:"add-icon"},null,8,["icon"]),e("span",fp,l(se.label),1)]),_:2},1032,["class","disabled","onClick"]))],64))),128))]),_:1})],4)],4)):T("",!0)]))}}),$p=li(bp,[["__scopeId","data-v-d854a4c6"]]);export{$p as S,Dp as _,Fp as a,Hp as g};

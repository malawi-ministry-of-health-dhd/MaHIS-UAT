import{f as Y,r as T,n as Ps,d as Ts,o as Ls,j as a,k as o,A as oe,v as St,t as n,C as Os,x as e,F as S,U as N,z as l,s as P,Q as Se,G as Rs,E as pt,X as xt,J as Ms,y as Ee,q as Ds,I as Hs}from"../index-Pf_Y93WX.js";import{m as Bs}from"./vue3-apexcharts-wnrFfWRq.js";import{I as Fs,ae as wt,V as $s,U as Nt,ce as zs,_ as Gs,Y as Vs,bA as Us,bc as js,cd as Ys,a6 as qs}from"./index-a2IQmcsu.js";import Ws from"./DemographicBar-s9V0DARW.js";import{D as st}from"./Alerts-BKpjCcVq.js";import{O as H}from"./GlobalPropertyStore-BOoQ0Nr2.js";import{E as b}from"./encounter_type-De0fYk0H.js";import{ConceptService as Ut}from"./concept_service-EV77wC_D.js";import{UserService as Ks}from"./user_service-BzEFTYIo.js";import{H as L}from"./service-Cp3tdMlR.js";/* empty css                                                                      *//* empty css                                                                          */import{toastWarning as Be}from"./toasts-BhaDAbdf.js";import{F as Z}from"./useFluidBalanceStoolMonitoringForm-EOLTWtEB.js";const Xs=()=>{const ve=T("all"),ye=T([]),Ce=T([]),xe=T([]),qe=T(!1),Fe=T(!1),We=T(!1),Ke=T(!1),ce=T(null),$e=new Map,ze=new Map,Xe=T(!1),Ie=T(null),Ze=T(!1),Pe=T(null),de=T(!1),Te=T(null),Le=T(!1),Oe=T(null),Ge=T(!1),le=T(null),W=T(!1),we=T(null),Ve=T(!1),be=T(null),B=T(!1),fe=T(null),Re=T(!1),se=T(null),ae=T(!1),_e=T(null),he=T(!1),Me=T(null),ke=T({}),ut=i=>{ke.value[i]=!ke.value[i]},$=Y(()=>Ke.value||Xe.value||Ze.value||de.value||Le.value||Ge.value||W.value||Ve.value||B.value||Re.value||ae.value||he.value),Je=async()=>{await $t("all")},Ue=Y(()=>{const i=[];return ce.value&&i.push({id:"triage",title:"Triage Information",icon:Fs,color:"#ef4444"}),Ie.value&&i.push({id:"soapier",title:"SOAPIER Notes",icon:wt,color:"#f43f5e"}),Pe.value&&i.push({id:"monitoring_chart",title:"Monitoring Charts",icon:wt,color:"#0ea5e9"}),Te.value&&i.push({id:"fluid_balance",title:"Fluid Balance & Stool Monitoring",icon:wt,color:"#14b8a6"}),Oe.value&&i.push({id:"primary_survey",title:"Primary Survey",icon:$s,color:"#8b5cf6"}),le.value&&i.push({id:"sample_history",title:"SAMPLE History",icon:Nt,color:"#0ea5e9"}),we.value&&i.push({id:"secondary_survey",title:"Secondary Survey",icon:zs,color:"#22c55e"}),be.value&&i.push({id:"diagnosis",title:"Diagnosis",icon:Gs,color:"#f59e0b"}),fe.value&&i.push({id:"investigations",title:"Laboratory / Radiology Findings",icon:Vs,color:"#0ea5e9"}),se.value&&i.push({id:"patient_management",title:"Patient Management Plan",icon:Us,color:"#14b8a6"}),_e.value&&i.push({id:"continuation",title:"Continuation Notes",icon:Nt,color:"#64748b"}),Me.value&&i.push({id:"disposition",title:"Disposition Notes",icon:js,color:"#14b8a6"}),i}),it=i=>{const t=(i||"").toLowerCase();return t.includes("presenting")?"Presenting Complaints":t.includes("surgical procedure")||t==="procedures"?"Past Surgical History":t.includes("family history")?"Family History":t.includes("allergy")||t.includes("allergen")?"Allergies":t.includes("smokes")||t.includes("smoking")||t.includes("alcohol intake")||t.includes("recreational drug")||t.includes("expected duration")?"Social History":t.includes("pregnancy")||t.includes("lnmp")||t.includes("gestational")||t.includes("parity")?"Gynecological History":t.includes("review of systems")||t.includes("severe respiratory")?"Review of Systems":t.includes("differential diagnosis")?"Working Differential Diagnosis":t.includes("notes")?"Investigations":t.includes("clerk")||t.includes("designation")||t.includes("signature")||t.includes("additional notes")?"Initial Management":t.includes("general condition")||t.includes("blood pressure")||t.includes("pulse")||t.includes("respiratory")||t.includes("temperature")||t.includes("eyes")||t.includes("mouth")||t.includes("neck")||t.includes("chest")||t.includes("endocrine examination")||t.includes("abdominal")||t.includes("motor response")||t.includes("verbal response")||t.includes("eye opening response")||t.includes("cranial")||t.includes("gross motor")||t.includes("sensation")||t.includes("pulsations")||t.includes("rectal")||t.includes("extremities")||t.includes("vaginal")?"Physical Examination":t.includes("condition")||t.includes("medication")||t.includes("treatment")||t.includes("reason for request")?"Past Medical History":"Other"},mt=i=>{const t=(i||"").toLowerCase();return t.includes("presenting complaints")||t.includes("presenting history")?"Presenting Complaints":t.includes("other medication")?"Past Medical History":t.includes("medication")||t.includes("drug")||t.includes("prescription")||t.includes("none")?"Drug History":t.includes("hiv")||t.includes("arv")||t.includes("health center")||t.includes("historical drug start date")?"Past Medical History":t.includes("surgical history")?"Past Surgical History":t.includes("allergy")||t.includes("allergen")||t.includes("allergic")||t.includes("hypersensitivity")?"Allergy":t.includes("intoxication")?"Intoxication":t.includes("social history")?"Social History":t.includes("family history")?"Family History":t.includes("review of systems")||t.includes("severe respiratory")||t.includes("skin infection")?"Review of Systems":t.includes("general")||t.includes("blood pressure")||t.includes("pulse")||t.includes("respiratory")||t.includes("temperature")||t.includes("oxygen")||t.includes("pupil")||t.includes("conjunctiva")||t.includes("oral")||t.includes("jvp")||t.includes("lymphadenopathy")||t.includes("trachea")||t.includes("expansion")||t.includes("apex")||t.includes("thrill heaves")||t.includes("auscultation")||t.includes("lung condition")||t.includes("lung position")||t.includes("palpation")||t==="condition"||t==="other"||t.includes("oedema")||t.includes("rash")||t.includes("herpes")||t.includes("neck stiffness")||t.includes("motor response")||t.includes("verbal response")||t.includes("eye opening response")||t.includes("visual field")||t.includes("eye movements")||t.includes("hearing")||t.includes("tongue")||t.includes("cough")||t.includes("power")||t.includes("tone")||t.includes("reflexes")||t.includes("plantars")||t.includes("sensation")||t.includes("coordination")||t.includes("gait")?"Physical Examination":t.includes("summary")?"Summary":t.includes("differential diagnosis")?"Differential Diagnosis":t.includes("assessment")||t.includes("additional notes")?"Investigations":t==="plan"?"Management Plan":"Other"},nt=i=>{const t=(i||"").toLowerCase();return t.includes("chief complaint")||t.includes("history of present illness")?"Complaints":t.includes("lnmp")||t.includes("edd")||t.includes("gestational")||t.includes("gravidity")||t.includes("parity")||t.includes("living children")||t.includes("menarche")||t.includes("menstrual")||t.includes("duration")||t.includes("abortion")||t.includes("ectopic")||t.includes("vaginal discharge")||t.includes("consistency")||t.includes("color")||t.includes("colour")||t.includes("odour")||t.includes("amount")||t.includes("contraceptive")||t.includes("side effects")||t.includes("cancer screening")||t.includes("history of stis")?"Obstetric And Gynaecology History":t.includes("hypertension")||t.includes("diabetes")||t.includes("tuberculosis")||t.includes("epilepsy")||t.includes("asthma")||t.includes("mental illness")||t.includes("blood transfusion")||t.includes("drug allergies")?"Medical History":t.includes("alcohol")||t.includes("smok")||t.includes("recreational drug")?"Habits":t.includes("oxygen")||t.includes("pulse")||t.includes("blood pressure")||t.includes("respiratory")||t.includes("temperature")||t.includes("blood glucose")||t.includes("weight")||t.includes("height")?"Vital Signs":t.includes("general condition")||t.includes("pallor")||t.includes("chest")||t.includes("abdomen")||t.includes("vaginal")||t.includes("extremities")?"General Examination":t.includes("impression")?"Impression":t==="plan"||t.includes("immediate intervention")?"Plan":"Other"},z=i=>i?.concept_name||i?.concept_id||"",re=i=>i!=null&&`${i}`.trim()!=="",K=i=>{if(!i)return"";const t=i?.value_coded_name??i?.value_coded_display??i?.valueCodedName??i?.valueCodedDisplay??i?.value_coded?.name??i?.value_coded?.label??i?.value_coded?.value;if(re(t))return t;const r=i?.value_text??i?.valueText;if(re(r))return r;const d=i?.value_numeric??i?.valueNumeric??i?.value_number??i?.valueNumber;if(re(d)){const A=i?.value_modifier??i?.valueModifier,w=re(A)?` ${A}`:"";return`${d}${w}`}const m=i?.value_datetime??i?.valueDatetime??i?.valueDateTime;if(re(m))return L.toStandardHisDisplayFormat(m);const u=i?.value_date??i?.valueDate;if(re(u))return L.toStandardHisDisplayFormat(u);const y=i?.value_boolean??i?.valueBoolean;if(re(y))return String(y);if(re(i?.value))return i.value;const x=i?.value_coded??i?.valueCoded;return re(x)?x:""},De=async i=>{const t=i.filter(m=>{const u=z(m).toLowerCase();return u.includes("differential diagnosis")||u.includes("attempted/ differential diagnosis")}),r=Array.from(new Set(t.map(m=>Number(m?.value_coded)).filter(m=>Number.isFinite(m)&&m>0)));if(r.length===0)return i;const d=new Map;return await Promise.all(r.map(async m=>{const u=await Ut.getConceptName(m);u&&d.set(m,u)})),i.map(m=>{const u=Number(m?.value_coded);return d.has(u)&&!m?.value_text&&!m?.value_coded_name?{...m,value_text:d.get(u)}:m})},Qe=i=>{const t=i.filter(u=>z(u).toLowerCase()==="presenting complaints"),r=i.filter(u=>z(u).toLowerCase()==="presenting history"),m=[...i.filter(u=>{const y=z(u).toLowerCase();return y!=="presenting complaints"&&y!=="presenting history"})];if(t.length>0){const u=t.map(y=>String(K(y)).trim()).filter(Boolean);u.length>0&&m.push({...t[0],concept_name:"Presenting Complaints",value_text:u.join(", ")})}if(r.length>0){const u=r.reduce((y,x)=>{const A=new Date(y?.obs_datetime||0).getTime();return new Date(x?.obs_datetime||0).getTime()>A?x:y});m.push(u)}return m},v=(i,t)=>{const r=(i||[]).find(d=>{const m=Q(z(d));return t.some(u=>u(m))});return r?String(K(r)??"").trim():""},je=Y(()=>{const i=ge.value?.["Physical Examination"]||[];return{generalCondition:v(i,[t=>t.includes("general condition")]),temperature:v(i,[t=>t==="temperature"||t.includes("temperature")]),pulseRate:v(i,[t=>t.includes("pulse rate")||t==="pulse rate"||t==="pulse"]),bloodPressure:v(i,[t=>t.includes("blood pressure")]),respiratoryRate:v(i,[t=>t.includes("respiratory rate")||t.includes("respiratory")]),eyes:v(i,[t=>t==="eyes"||t.includes("eyes")]),mouth:v(i,[t=>t==="mouth"||t.includes("mouth")]),neck:v(i,[t=>t==="neck"||t.includes("neck")]),chestExamination:v(i,[t=>t.includes("chest examination")]),endocrineExamination:v(i,[t=>t.includes("endocrine examination")]),abdominalExamination:v(i,[t=>t.includes("abdominal examination")]),motorResponse:v(i,[t=>t.includes("motor response")]),verbalResponse:v(i,[t=>t.includes("verbal response")]),eyeOpeningResponse:v(i,[t=>t.includes("eye opening response")||t.includes("eye response")]),cranialNerves:v(i,[t=>t.includes("cranial")]),grossMotor:v(i,[t=>t.includes("gross motor")]),sensation:v(i,[t=>t==="sensation"||t.includes("sensation")]),pulsations:v(i,[t=>t.includes("pulsations")]),rectalExamination:v(i,[t=>t.includes("rectal examination")]),extremities:v(i,[t=>t==="extremities"||t.includes("extremities")])}}),gt=Y(()=>{const i=ge.value?.["Initial Management"]||[];return{clerkName:v(i,[t=>t.includes("clerk name")]),designation:v(i,[t=>t.includes("designation")]),signature:v(i,[t=>t.includes("signature")])}}),at=Y(()=>{const i=ge.value?.["Presenting Complaints"]||[];return{complaints:v(i,[t=>t==="presenting complaints"||t.includes("presenting complaints")]),history:v(i,[t=>t==="presenting history"||t.includes("presenting history")])}}),et=Y(()=>{const i=ge.value?.["Past Medical History"]||[];return ee(i)}),ot=i=>{const t=[],r=[];return i.forEach((d,m)=>{(m%2===0?t:r).push(d)}),{left:t,right:r}},Ne=Y(()=>{const i=ge.value?.["Review of Systems"]||[];return ee(i)}),X=Y(()=>ot(Ne.value)),s=Y(()=>{const i=ge.value?.["Past Surgical History"]||[];return ee(i)}),E=Y(()=>{const i=ge.value?.["Family History"]||[];return ee(i)}),R=Y(()=>{const i=ge.value?.["Social History"]||[];return ee(i)}),p=Y(()=>{const i=ge.value?.["Gynecological History"]||[];return ee(i)}),g=Y(()=>{const i=lt.value?.["Presenting Complaints"]||[];return{complaints:v(i,[t=>t==="presenting complaints"||t.includes("presenting complaints")]),history:v(i,[t=>t==="presenting history"||t.includes("presenting history")])}}),F=Y(()=>{const i=lt.value?.["Physical Examination"]||[],t=c=>v(i,c),r=t([c=>c==="auscultation"||c.includes("auscultation")&&!c.includes("lung")]),d=t([c=>c==="region"||c.includes("region")]),m=t([c=>c==="inspection"||c.includes("inspection")]),u=t([c=>c.includes("light palpation")]),y=t([c=>c.includes("deep palpation")]),x=t([c=>c==="auscultation_lung"||c.includes("auscultation")&&c!=="auscultation"]),A=t([c=>c.includes("shifting dullness")]),w=t([c=>c.includes("fluid thrill")]);return{general:t([c=>c==="general"||c.includes("general")]),temperature:t([c=>c.includes("temperature")]),pulseRate:t([c=>c==="pulse rate"||c.includes("pulse rate")]),systolic:t([c=>c.includes("systolic")]),diastolic:t([c=>c.includes("diastolic")]),respiratoryRate:t([c=>c.includes("respiratory rate")||c==="respiratory rate"]),oxygenSaturation:t([c=>c.includes("oxygen saturation")]),pupilsSymmetrical:t([c=>c.includes("pupils symmetrical")]),conjunctiva:t([c=>c.includes("conjunctiva")]),oralKs:t([c=>c.includes("oral ks")]),oralThrush:t([c=>c.includes("oral thrush")||c.includes("candidosis")]),lymphadenopathy:t([c=>c.includes("lymphadenopathy")]),headNeckOther:t([c=>c==="other"]),symmetricalExpansion:t([c=>c.includes("symmetrical expansion")]),symmetricalExpansionDescription:t([c=>c==="description"||c.includes("description")&&!c.includes("additional")]),apexBeat:t([c=>c.includes("apex beat")]),thrillHeaves:t([c=>c.includes("thrill")||c.includes("thrill heaves")]),auscultationHeart:r,lungCondition:t([c=>c.includes("lung condition")||c==="condition"]),lungPosition:t([c=>c.includes("lung position")]),abdomenRegion:d,abdomenInspection:m,abdomenLightPalpation:u,abdomenDeepPalpation:y,abdomenAuscultation:x,abdomenShiftingDullness:A,abdomenFluidThrill:w,oedema:t([c=>c.includes("oedema")]),skinRash:t([c=>c.includes("skin rash")||c==="rash"]),herpesScar:t([c=>c.includes("herpes zoster")]),neckStiffness:t([c=>c.includes("neck stiffness")]),eyeOpeningResponse:t([c=>c.includes("eye opening response")]),verbalResponse:t([c=>c.includes("verbal response")]),motorResponse:t([c=>c.includes("motor response")]),cnPupil:t([c=>c==="pupil"||c.includes("pupil:")||c.includes("pupil")]),cnVisualField:t([c=>c.includes("visual field")]),cnEyeMovements:t([c=>c.includes("eye movements")&&c.includes("nystagmus")]),cnFacial:t([c=>c.includes("facial")||c.includes("eye movements/sensation")]),cnHearing:t([c=>c.includes("hearing")]),cnTongue:t([c=>c.includes("tongue movement")||c.includes("tongue")]),cnCoughGag:t([c=>c.includes("cough")||c.includes("gag")]),pnPower:t([c=>c==="power"||c.includes("power")]),pnTone:t([c=>c==="tone"||c.includes("tone")]),pnReflexes:t([c=>c.includes("reflexes")]),pnPlantars:t([c=>c.includes("plantars")]),pnSensation:t([c=>c==="sensation"||c.includes("sensation")&&!c.includes("facial")]),pnCoordination:t([c=>c.includes("coordination")])}}),J=i=>{const t=i?.children??i?.child??i?.groupMembers??[];return Array.isArray(t)?t:[]},At=i=>i.flatMap(t=>J(t).map(r=>({zone:String(K(r)??"").trim(),findings:J(r).map(d=>({title:z(d),value:String(K(d)??"").trim()})).filter(d=>d.title&&d.value)}))).filter(t=>t.zone&&t.findings.length>0),jt=Y(()=>{const i=xe.value||[],t=r=>i.filter(d=>J(d).length>0&&r(Q(z(d))));return{respiratory:At(t(r=>r.includes("lung position"))),abdomen:At(t(r=>r==="palpation"))}}),Et=Y(()=>{const i=lt.value?.["Review of Systems"]||[];return ee(i)}),Yt=Y(()=>ot(Et.value)),vt=i=>{const t=new Map;return i.forEach(r=>{const d=String(z(r));if(!d)return;const m=new Date(r?.obs_datetime||0).getTime(),u=t.get(d),y=u?new Date(u?.obs_datetime||0).getTime():-1;(!u||m>=y)&&t.set(d,r)}),Array.from(t.values())},qt=i=>[...i||[]].sort((t,r)=>new Date(r?.obs_datetime||0).getTime()-new Date(t?.obs_datetime||0).getTime()),Wt=i=>{const t=new Set;return(i||[]).filter(r=>{if(J(r).length>0)return!0;const d=`${z(r)}::${Q(K(r))}`;return t.has(d)?!1:(t.add(d),!0)})},yt=(i,t=[])=>{const r={};for(const d of t)i[d]&&(r[d]=i[d]);return Object.entries(i).forEach(([d,m])=>{r[d]||(r[d]=m)}),r},ge=Y(()=>{const i={},t=Qe(ye.value);for(const r of t){const d=it(r?.concept_name||r?.concept_id||"");i[d]||(i[d]=[]),i[d].push(r)}return yt(i,["Presenting Complaints","Past Medical History","Past Surgical History","Family History","Social History","Allergies","Gynecological History","Review of Systems","Physical Examination","Working Differential Diagnosis","Investigations","Initial Management","Other"])}),lt=Y(()=>{const i={},t=Qe(xe.value);for(const r of t){const d=mt(r?.concept_name||r?.concept_id||"");i[d]||(i[d]=[]),i[d].push(r)}return yt(i,["Presenting Complaints","Drug History","Past Medical History","Past Surgical History","Social History","Family History","Allergy","Intoxication","Review of Systems","Physical Examination","Summary","Differential Diagnosis","Investigations","Management Plan"])}),Kt=Y(()=>{const i={};for(const t of Ce.value){const r=nt(t?.concept_name||t?.concept_id||"");i[r]||(i[r]=[]),i[r].push(t)}return yt(i,["Complaints","Obstetric And Gynaecology History","Medical History","Habits","Vital Signs","General Examination","Impression","Plan"])}),Xt=async()=>{qe.value=!0;try{const t=(await H.getObsByEncounterId(b.SURGICAL_NOTES_TEMPLATE)).flatMap(u=>u.obs||[]),r=t.map(u=>L.toStandardHisFormat(u?.obs_datetime)).filter(Boolean).sort().pop(),d=r?t.filter(u=>L.toStandardHisFormat(u?.obs_datetime)===r):[],m=await De(d);ye.value=vt(m)}catch(i){console.error("Failed to load surgical notes records:",i),ye.value=[]}finally{qe.value=!1}},Zt=async()=>{We.value=!0;try{const t=(await H.getObsByEncounterId(b.MEDICAL_IN_PATIENT)).flatMap(d=>d.obs||[]),r=await De(qt(t));xe.value=Wt(r)}catch(i){console.error("Failed to load medical inpatient records:",i),xe.value=[]}finally{We.value=!1}},Jt=async()=>{Fe.value=!0;try{const t=(await H.getObsByEncounterId(b.GYNEACOLOGY_WARD)).flatMap(u=>u.obs||[]),r=t.map(u=>L.toStandardHisFormat(u?.obs_datetime)).filter(Boolean).sort().pop(),d=r?t.filter(u=>L.toStandardHisFormat(u?.obs_datetime)===r):[],m=await De(d);Ce.value=vt(m)}catch(i){console.error("Failed to load gyneacology ward records:",i),Ce.value=[]}finally{Fe.value=!1}},Ct={all:"Clinical Notes",surgical:"Surgical Notes",gyneacology:"Gyneacology Ward",medical:"Medical Inpatient"},bt=async()=>{await Ps(),await new Promise(i=>{if(typeof window>"u"||!window.requestAnimationFrame){i();return}window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>i()))})},It=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Pt=()=>{const i=window.open("","_blank","width=900,height=1000");return i?(i.document.open(),i.document.write("<!doctype html><html><head><title>Preparing clinical notes...</title></head><body>Preparing clinical notes...</body></html>"),i.document.close(),i):(Be("Please allow pop-ups to download clinical notes."),null)},Tt=i=>{i.querySelectorAll("button, .clinical-notes-actions, .navigation-arrows, .scroll-indicator, .menu-trigger, .expand-icon, .refresh-btn, .actions, .demographics-actions, .three-dot-menu, .patient-card-menu, ion-icon, ion-button").forEach(t=>t.remove()),i.querySelectorAll(".apexcharts-toolbar, .apexcharts-menu, .apexcharts-zoom-icon, .apexcharts-zoomin-icon, .apexcharts-zoomout-icon, .apexcharts-pan-icon, .apexcharts-reset-icon, .apexcharts-menu-icon").forEach(t=>t.remove()),i.querySelectorAll(".apexcharts-legend").forEach(t=>t.remove())},Qt=()=>{const i=document.querySelector(".clinical-notes-section"),t=i?.querySelector(".clinical-notes-demographics")?.cloneNode(!0),r=i?.querySelector(".clinical-notes-list")?.cloneNode(!0);if(t&&Tt(t),r&&Tt(r),!r)return"";const d=Ct[ve.value],m=!!r.querySelector(".clinical-notes-list-header");return`
            <main class="clinical-notes-print-document">
                ${t?`<section class="clinical-notes-print-demographics">${t.innerHTML}</section>`:""}
                ${m?"":`<h1 class="notes-print-title">${It(d)}</h1>`}
                ${r.outerHTML}
            </main>
        `},es=(i,t)=>`
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>${It(t)}</title>
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
`,Lt=async i=>{await bt();const t=Qt();if(!t.trim()){i.close(),Be("No clinical notes content available to download.");return}const r=Ct[ve.value];i.document.open(),i.document.write(es(t,r)),i.document.close()},ft=async()=>{const i=Pt();i&&await Lt(i)},ts=async()=>{if(!Ue.value.length){Be("No clinical notes records available to download.");return}const i=Pt();if(!i)return;const t={...ke.value};ke.value=Ue.value.reduce((r,d)=>(r[d.id]=!0,r),{...ke.value});try{await bt(),typeof window<"u"&&window.dispatchEvent(new Event("resize")),await bt(),await Lt(i)}finally{ke.value=t}},ss=async()=>{if(ve.value==="all"){await ts();return}if(ve.value==="surgical"){if(!ye.value.length){Be("No surgical notes records available to download.");return}await ft();return}if(ve.value==="medical"){if(!xe.value.length){Be("No medical inpatient records available to download.");return}await ft();return}if(ve.value==="gyneacology"){if(!Ce.value.length){Be("No gyneacology ward records available to download.");return}await ft();return}Be("Please select Surgical Notes, Gyneacology, Medical Inpatient, or All to download.")},Q=i=>String(i??"").trim().toLowerCase(),G=i=>{if(!Array.isArray(i)||i.length===0)return null;const t=r=>{const d=r?.encounter_datetime;if(d){const u=new Date(d).getTime();if(Number.isFinite(u))return u}const m=(r?.obs||[]).map(u=>new Date(u?.obs_datetime||0).getTime()).filter(u=>Number.isFinite(u)&&u>0);return m.length?Math.max(...m):-1};return i.reduce((r,d)=>t(d)>t(r)?d:r,i[0])},pe=i=>{const t=new Date(i);if(!Number.isFinite(t.getTime()))return"";const r=t.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),d=t.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0});return`${r} at ${d}`},ue=async i=>{const t=Number(i);if(!Number.isFinite(t)||t<=0)return"Unknown";if($e.has(t))return $e.get(t);try{const r=await Ks.getUserByID(t),d=r?.name||r?.username||`User #${t}`;return $e.set(t,d),d}catch{const d=`User #${t}`;return $e.set(t,d),d}},O=(i,t)=>{const r=(i||[]).find(d=>t(Q(z(d))));return r?String(K(r)??"").trim():""},is=i=>i?.value_coded??i?.valueCoded??i?.answer_concept_id??i?.value?.concept_id??i?.value?.conceptId??i?.value?.concept?.concept_id??i?.value?.concept?.id,tt=i=>i?H.flattenObservationTree(Array.isArray(i?.obs)?i.obs:[]):[],Ot=i=>{const t=i?.encounter_datetime||i?.obs?.[0]?.obs_datetime;if(!t)return"";try{return L.toStandardHisFormat(t)}catch{return""}},_t=(i,t)=>{const r=Array.isArray(i)?i.filter(Boolean):[],d=t?r.filter(m=>Ot(m)===t):[];return G(d.length?d:r)},ht=i=>{const t=i?.obs||i?.children||i?.child||i?.groupMembers||[];return Array.isArray(t)?t:[]},Rt=i=>i.includes("workstation")||i==="location"||i.includes("patient care area")||i.includes("triage result")||i.includes("triage category"),ns=i=>/\b(hour|hours|day|days|week|weeks|month|months|year|years|minute|minutes)\b/i.test(i),rt=i=>/^\d+(\.\d+)?$/.test(i.trim()),Mt=async i=>{const t=String(i??"").trim(),r=Number(t);if(!t||!Number.isFinite(r)||r<=0)return"";if(ze.has(r))return ze.get(r)||"";try{const d=String(await Ut.getConceptName(r)||"").trim();return ze.set(r,d),d}catch{return ze.set(r,""),""}},Dt=async i=>{const t=String(i??"").trim();return!t||!rt(t)?t:await Mt(t)||t},as=(i,t)=>{const r=String(i??"").trim(),d=String(t??"").trim();return r?d&&r.toLowerCase().includes(d.toLowerCase())?r:d?`${r} ${d}`:r:""},Ht=i=>!i||rt(i)||Rt(i)||i==="presenting complaints"||i==="presenting complaint"||i.includes("duration")||i.includes("workstation"),os=async i=>{const t=Array.isArray(i?.obs)?i.obs:[],r=[],d=async u=>{const y=String(await Dt(z(u))).trim(),x=Q(y),w=String(K(u)??"").trim().split(" - ")[0].trim(),c=is(u),_=w&&rt(w)&&await Mt(c??w)||w;return!_||ns(_)||rt(_)?Ht(x)?"":y:_},m=u=>{const y=String(u??"").trim();y&&!r.includes(y)&&r.push(y)};for(const u of t){const y=Q(await Dt(z(u)));if(!y||Rt(y))continue;const x=r.length;(await Promise.all(ht(u).map(d))).filter(Boolean).forEach(m),r.length===x&&m(await d(u))}return r.length||(await Promise.all(tt(i).map(d))).filter(Boolean).forEach(m),r.length?r.map((u,y)=>`(${y+1}). ${u}`).join(", "):"N/A"},ls=(i,t)=>{const r=O(i,f=>f.includes("temperature")),d=O(i,f=>f==="pulse"||f.includes("pulse rate")),m=O(i,f=>f.includes("heart rate")),u=O(i,f=>f.includes("systolic")),y=O(i,f=>f.includes("diastolic")),x=O(i,f=>f.includes("respiratory")),A=O(i,f=>f.includes("oxygen")||f.includes("spo2")||f.includes("sao2")||f==="sao2"),w=O(i,f=>f.includes("glucose")&&!f.includes("unit")),c=O(i,f=>f.includes("glucose")&&f.includes("unit"))||(w?"mmol/l":""),_=O(i,f=>f==="avpu"||f.includes("avpu"))||O(t,f=>f==="avpu"||f.includes("avpu")||f.includes("level of consciousness")),C=[];return r&&C.push(`Temperature: ${r} °C`),d&&C.push(`Pulse: ${d} bpm`),m&&C.push(`Heart: ${m} bpm`),(u||y)&&C.push(`BP: ${u||"-"}${y?`/${y}`:""} mmHg`),x&&C.push(`Respiratory: ${x} breaths/min`),A&&C.push(`Oxygen: ${A} %`),w&&C.push(`Glucose: ${as(w,c)}`),_&&C.push(`AVPU: ${_}`),C.length?C.join(" "):"N/A"},Bt=(i,t)=>i?.obs_datetime||i?.obsDatetime||i?.date_created||t,rs=i=>{const t=L.toStandardHisDisplayFormat(i),r=L.toStandardHisTimeFormat(i);return[t,r].filter(Boolean).join(" ")},cs=i=>{const t=String(K(i)??"").trim(),r=Number.parseFloat(t);return Number.isFinite(r)?r:null},ds=async i=>{const t={systolic:[],diastolic:[],temperature:[],heartRate:[],respiratoryRate:[],oxygenSaturation:[],glucose:[],peakExpiratoryFlowRate:[],urineDipstickKetones:[]};for(const d of i||[]){const u=(Array.isArray(d?.obs)?d.obs:[]).filter(y=>Q(z(y))==="triage result"&&ht(y).length>0);for(const y of u){const x=H.flattenObservationTree(ht(y)),A=Bt(y,d?.encounter_datetime);for(const w of x){const c=Q(z(w)),_=cs(w);if(_===null)continue;const C=Bt(w,A),f=C?rs(C):"";f&&(c.includes("systolic")?t.systolic.push({x:f,y:_}):c.includes("diastolic")?t.diastolic.push({x:f,y:_}):c.includes("temperature")?t.temperature.push({x:f,y:_}):c.includes("heart rate")?t.heartRate.push({x:f,y:_}):c.includes("respiratory")?t.respiratoryRate.push({x:f,y:_}):c.includes("oxygen")||c.includes("spo2")||c.includes("sao2")?t.oxygenSaturation.push({x:f,y:_}):c.includes("glucose")?t.glucose.push({x:f,y:_}):c.includes("peak expiratory")?t.peakExpiratoryFlowRate.push({x:f,y:_}):c.includes("urine")&&c.includes("ketone")&&t.urineDipstickKetones.push({x:f,y:_}))}}}return Object.values(t).some(d=>d.length>0)?{charts:[{key:"bloodPressure",title:"Blood Pressure (BP)",series:[{name:"Systolic",data:t.systolic},{name:"Diastolic",data:t.diastolic}],colors:["#2563eb","#e11d48"]},{key:"temperature",title:"Temperature (°C)",series:[{name:"Temperature",data:t.temperature}],colors:["#8b5cf6"]},{key:"heartRate",title:"Heart Rate (bpm)",series:[{name:"Heart Rate",data:t.heartRate}],colors:["#14b8a6"]},{key:"respiratoryRate",title:"Respiratory Rate (breaths/min)",series:[{name:"Respiratory Rate",data:t.respiratoryRate}],colors:["#db2777"]},{key:"oxygenSaturation",title:"Oxygen Saturation (O₂ Sat)",series:[{name:"Oxygen Saturation",data:t.oxygenSaturation}],colors:["#f59e0b"]},{key:"glucose",title:"Glucose (mmol/L)",series:[{name:"Glucose",data:t.glucose}],colors:["#0891b2"]},{key:"peakExpiratoryFlowRate",title:"Peak Expiratory Flow Rate (L/min)",series:[{name:"PEFR",data:t.peakExpiratoryFlowRate}],colors:["#16a34a"]},{key:"urineDipstickKetones",title:"Urine Dipstick Ketones",series:[{name:"Ketones",data:t.urineDipstickKetones}],colors:["#7c3aed"]}]}:null},ps=async()=>{Ze.value=!0,Pe.value=null;try{const i=await H.getObsByEncounterId(b.VITALS);Pe.value=await ds(i||[])}catch(i){console.error("Failed to load monitoring chart records:",i),Pe.value=null}finally{Ze.value=!1}},us=[Z.phala,Z.water,Z.oralFluids,Z.ivFluids],ms=[Z.urineVolume,Z.urineAppearance,Z.vomitVolume,Z.vomitColour],gs=[Z.bristolType,Z.stoolColour,Z.sampleSent,Z.labPanel],kt=(i,t)=>t.map(r=>{const d=(i||[]).filter(u=>Q(z(u))===Q(r)),m=ct(d.map(u=>K(u)));return m.length===0?null:{title:r,value:m.join(", ")}}).filter(Boolean),Ft=i=>i.reduce((t,r)=>{const d=Number.parseFloat(String(r.value));return Number.isFinite(d)?t+d:t},0),vs=async i=>{const t=(i||[]).filter(Boolean).map(r=>{const d=tt(r),m=O(d,M=>M===Q(Z.entryDate)),u=O(d,M=>M===Q(Z.entryTime)),y=kt(d,us),x=kt(d,ms),A=kt(d,gs),w=O(d,M=>M===Q(Z.comments)),c=Ft(y),_=Ft(x.filter(M=>[Z.urineVolume,Z.vomitVolume].includes(M.title))),C=c-_,f=new Date(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime||0).getTime();return{id:r?.encounter_id||r?.encounterId||`${m}-${u}-${f}`,entryDate:m||L.toStandardHisDisplayFormat(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime),entryTime:u||L.toStandardHisTimeFormat(r?.encounter_datetime||r?.obs?.[0]?.obs_datetime),intake:y,output:x,stool:A,comments:w,totalIntake:c,totalOutput:_,balance:C,balanceLabel:`${C>0?"+":""}${C} mL`,createdAt:f}}).filter(r=>r.intake.length||r.output.length||r.stool.length||r.comments).sort((r,d)=>d.createdAt-r.createdAt);return t.length?{entries:t}:null},ys=async()=>{de.value=!0,Te.value=null;try{const i=await H.getObsByEncounterId(b.FLUID_BALANCE_AND_STOOL_MONITORING);Te.value=await vs(i||[])}catch(i){console.error("Failed to load fluid balance and stool monitoring records:",i),Te.value=null}finally{de.value=!1}},bs=async()=>{Ke.value=!0,ce.value=null;try{const[i,t,r,d,m]=await Promise.all([H.getObsByEncounterId(b.TRIAGE_RESULT),H.getObsByEncounterId(b.TRIAGE_PRESENTING_COMPLAINTS),H.getObsByEncounterId(b.PRESENTING_COMPLAINTS),H.getObsByEncounterId(b.VITALS),H.getObsByEncounterId(b.CONSCIOUSNESS)]),u=[...t||[],...r||[]],y=G(i||[]),x=G([G(u),G(d||[]),G(m||[])].filter(Boolean)),A=y||x;if(!A)return;const w=Ot(A),c=_t(u,w),_=_t(d||[],w),C=_t(m||[],w),f=tt(y),M=tt(_),D=tt(C),V=await os(c),te=ls(M,D),j=O(f,ne=>ne.includes("triage")&&(ne.includes("category")||ne.includes("result")||ne.includes("cat")))||"N/A",U=O(f,ne=>ne.includes("patient care area"))||O(f,ne=>ne==="location")||"N/A",ie=y?.provider_id||y?.provider?.id||y?.creator||A?.provider_id||A?.provider?.id||A?.creator,I=await ue(ie),k=pe(y?.encounter_datetime||A?.encounter_datetime||A?.obs?.[0]?.obs_datetime),q=k?`created by ${I} on ${k}.`:`created by ${I}.`;ce.value={presentingComplaints:V,vitalSigns:te,triageCategory:j,patientCareArea:U,createdByLine:q}}catch(i){console.error("Failed to load triage information:",i),ce.value=null}finally{Ke.value=!1}},ct=i=>{const t=(i||[]).map(r=>String(r??"").trim()).filter(Boolean);return Array.from(new Set(t))},ee=(i,t)=>{const r=t?.flattenChildren?H.flattenObservationTree(i||[]):i||[];return vt(r).map(m=>{const u=String(z(m)||"").trim()||"Observation",y=String(K(m)??"").trim();return y?{title:u,value:y}:null}).filter(Boolean)},fs=async()=>{Le.value=!0,Oe.value=null;try{const i=[b.AIRWAY_ASSESSMENT,b.BREATHING_ASSESSMENT,b.CIRCULATION_ASSESSMENT,b.DISABILITY_ASSESSMENT,b.EXPOSURE_ASSESSMENT],t=await Promise.all(i.map(_=>H.getObsByEncounterId(_))),r=new Map(i.map((_,C)=>[_,t[C]||[]])),d=t.flat(),m=G(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=[{id:b.AIRWAY_ASSESSMENT,title:"Airway"},{id:b.BREATHING_ASSESSMENT,title:"Breathing"},{id:b.CIRCULATION_ASSESSMENT,title:"Circulation"},{id:b.DISABILITY_ASSESSMENT,title:"Disability"},{id:b.EXPOSURE_ASSESSMENT,title:"Exposure"}],x={};for(const _ of y){const C=r.get(_.id)||[],M=(u?C.filter(V=>L.toStandardHisFormat(V?.encounter_datetime)===u):C).flatMap(V=>V?.obs||[]),D=ee(M);D.length&&(x[_.title]=D)}const A=await ue(m?.provider_id),w=pe(m?.encounter_datetime),c=w?`created by ${A} on ${w}.`:`created by ${A}.`;Oe.value={sections:x,createdByLine:c}}catch(i){console.error("Failed to load primary survey:",i),Oe.value=null}finally{Le.value=!1}},_s=async()=>{Ge.value=!0,le.value=null;try{const i=[b.ALLERGIES,b.REVIEW_OF_SYSTEMS,b.MEDICAL_HISTORY,b.OBSTETRIC_HISTORY,b.SUMMARY_ASSESSMENT,b.PRESCRIPTION,b.PRESENTING_COMPLAINTS,b.TRIAGE_PRESENTING_COMPLAINTS],t=await Promise.all(i.map(j=>H.getObsByEncounterId(j))),r=new Map(i.map((j,U)=>[j,t[U]||[]])),d=t.flat(),m=G(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=(j,U)=>{if(!U.length)return j;const ie=U.map(I=>I.toLowerCase());return j.filter(I=>{const k=(I.title||"").toLowerCase();return ie.some(q=>k.includes(q))})},x=async(j,U)=>{const ie=u?j.filter(me=>L.toStandardHisFormat(me?.encounter_datetime)===u):j,I=G(ie),k=ie.flatMap(me=>me?.obs||[]);let q=ee(k,{flattenChildren:U?.flattenChildren});U?.filterTitleIncludes?.length&&(q=y(q,U.filterTitleIncludes));const ne=await ue(I?.provider_id),He=pe(I?.encounter_datetime),Ae=He?`${ne} ${He}`:ne;return{items:q,createdByLine:Ae?` ${Ae}`:""}},A=await x([...r.get(b.PRESENTING_COMPLAINTS)||[],...r.get(b.TRIAGE_PRESENTING_COMPLAINTS)||[]],{flattenChildren:!0}),w=await x(r.get(b.ALLERGIES)||[]),c=await x(r.get(b.PRESCRIPTION)||[],{filterTitleIncludes:["medication history"]}),_=r.get(b.MEDICAL_HISTORY)||[],C=r.get(b.OBSTETRIC_HISTORY)||[],f=[..._,...C],M=await x(f),D=await x(r.get(b.REVIEW_OF_SYSTEMS)||[]),V=r.get(b.SUMMARY_ASSESSMENT)||[],te=await x(V,{filterTitleIncludes:["last meal","meal"]});le.value={cards:{symptoms:A,events:D,allergies:w,medications:c,priorConditions:M,lastMeal:te}}}catch(i){console.error("Failed to load SAMPLE history:",i),le.value=null}finally{Ge.value=!1}},hs=async()=>{W.value=!0,we.value=null;try{const i=[b.GENERAL_INFORMATION,b.HEAD_AND_NECK_ASSESSMENT,b.CHEST_ASSESSMENT,b.ABDOMEN_AND_PELVIS_ASSESSMENT,b.EXTREMITIES_ASSESSMENT,b.NEUROLOGICAL_EXAMINATION],t=await Promise.all(i.map(_=>H.getObsByEncounterId(_))),r=new Map(i.map((_,C)=>[_,t[C]||[]])),d=t.flat(),m=G(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=[{id:b.GENERAL_INFORMATION,title:"General Information"},{id:b.HEAD_AND_NECK_ASSESSMENT,title:"Head and Neck"},{id:b.CHEST_ASSESSMENT,title:"Chest"},{id:b.ABDOMEN_AND_PELVIS_ASSESSMENT,title:"Abdomen and Pelvis"},{id:b.EXTREMITIES_ASSESSMENT,title:"Extremities"},{id:b.NEUROLOGICAL_EXAMINATION,title:"Neurological"}],x={};for(const _ of y){const C=r.get(_.id)||[],M=(u?C.filter(V=>L.toStandardHisFormat(V?.encounter_datetime)===u):C).flatMap(V=>V?.obs||[]),D=ee(M);D.length&&(x[_.title]=D)}const A=await ue(m?.provider_id),w=pe(m?.encounter_datetime),c=w?`created by ${A} on ${w}.`:`created by ${A}.`;we.value={sections:x,createdByLine:c}}catch(i){console.error("Failed to load secondary survey:",i),we.value=null}finally{W.value=!1}},ks=async()=>{Ve.value=!0,be.value=null;try{const i=await H.getObsByEncounterId(b.OUTPATIENT_DIAGNOSIS),t=G(i);if(!t)return;const r=L.toStandardHisFormat(t?.encounter_datetime)||"",m=(r?i.filter(_=>L.toStandardHisFormat(_?.encounter_datetime)===r):i).flatMap(_=>_?.obs||[]),u=await De(m),y={},x=ee(u);x.length&&(y["Outpatient Diagnosis"]=x);const A=await ue(t?.provider_id),w=pe(t?.encounter_datetime),c=w?`created by ${A} on ${w}.`:`created by ${A}.`;be.value={sections:y,createdByLine:c}}catch(i){console.error("Failed to load diagnosis:",i),be.value=null}finally{Ve.value=!1}},Ss=async()=>{B.value=!0,fe.value=null;try{const i=[b.BEDSIDE_INVESTIGATION_PLAN,b.LAB_ORDERS_PLAN],t=await Promise.all(i.map(w=>H.getObsByEncounterId(w))),r=new Map(i.map((w,c)=>[w,t[c]||[]])),d=t.flat(),m=G(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=async w=>{const c=u?w.filter(te=>L.toStandardHisFormat(te?.encounter_datetime)===u):w,_=G(c),C=c.flatMap(te=>te?.obs||[]),f=ee(C),M=await ue(_?.provider_id),D=pe(_?.encounter_datetime),V=D?`${M} ${D}`:M;return{items:f,createdByLine:V?` ${V}`:""}},x=await y(r.get(b.LAB_ORDERS_PLAN)||[]),A=await y(r.get(b.BEDSIDE_INVESTIGATION_PLAN)||[]);fe.value={cards:{labOrdersPlan:x,bedsidePlan:A}}}catch(i){console.error("Failed to load laboratory / radiology findings:",i),fe.value=null}finally{B.value=!1}},xs=async()=>{Re.value=!0,se.value=null;try{const i=[b.NON_PHARMACOLOGICAL,b.PATIENT_CARE_AREA,b.PRESCRIPTION],t=await Promise.all(i.map(c=>H.getObsByEncounterId(c))),r=new Map(i.map((c,_)=>[c,t[_]||[]])),d=t.flat(),m=G(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=async(c,_)=>{const C=u?c.filter(U=>L.toStandardHisFormat(U?.encounter_datetime)===u):c,f=G(C),M=C.flatMap(U=>U?.obs||[]);let D=ee(M);if(_?.excludeTitleIncludes?.length){const U=_.excludeTitleIncludes.map(ie=>ie.toLowerCase());D=D.filter(ie=>{const I=(ie.title||"").toLowerCase();return!U.some(k=>I.includes(k))})}const V=await ue(f?.provider_id),te=pe(f?.encounter_datetime),j=te?`${V} ${te}`:V;return{items:D,createdByLine:j?` ${j}`:""}},x=await y(r.get(b.NON_PHARMACOLOGICAL)||[]),A=await y(r.get(b.PATIENT_CARE_AREA)||[]),w=await y(r.get(b.PRESCRIPTION)||[],{excludeTitleIncludes:["medication history"]});se.value={cards:{nonPharmacological:x,patientCareArea:A,medications:w}}}catch(i){console.error("Failed to load patient management plan:",i),se.value=null}finally{Re.value=!1}},ws=async()=>{ae.value=!0,_e.value=null;try{const i=await H.getObsByEncounterId(b.CONTINUATION_SHEET),t=G(i);if(!t)return;const r=L.toStandardHisFormat(t?.encounter_datetime)||"",m=(r?i.filter(c=>L.toStandardHisFormat(c?.encounter_datetime)===r):i).flatMap(c=>c?.obs||[]),u={},y=ee(m);y.length&&(u["Continuation Sheet"]=y);const x=await ue(t?.provider_id),A=pe(t?.encounter_datetime),w=A?`created by ${x} on ${A}.`:`created by ${x}.`;_e.value={sections:u,createdByLine:w}}catch(i){console.error("Failed to load continuation notes:",i),_e.value=null}finally{ae.value=!1}},Ns=async()=>{he.value=!0,Me.value=null;try{const i=[b.DISPOSITION,b.AWAITING_SPECIALTY],t=await Promise.all(i.map(I=>H.getObsByEncounterId(I))),r=new Map(i.map((I,k)=>[I,t[k]||[]])),d=t.flat(),m=G(d);if(!m)return;const u=L.toStandardHisFormat(m?.encounter_datetime)||"",y=async I=>{const k=u?I.filter(Ye=>L.toStandardHisFormat(Ye?.encounter_datetime)===u):I,q=G(k),ne=k.flatMap(Ye=>Ye?.obs||[]),He=ee(ne),Ae=await ue(q?.provider_id),me=pe(q?.encounter_datetime),dt=me?`${Ae} ${me}`:Ae;return{items:He,createdByLine:dt?` ${dt}`:""}},x=I=>{const k=(I||"").toLowerCase().trim();return k?k.includes("admission")||k.includes("ward")||k.includes("bed number")||k.includes("reason for admission")||k.includes("speciality department")?"admission":k.includes("death")||k.includes("cause of death")||k.includes("mortuary")||k.includes("family informed")||k.includes("relationship to deceased")||k.includes("last office")?"death":k.includes("transfer out")||k.includes("facility name")||k.includes("reason for transfer")?"transfer_out":k.includes("discharge home")||k.includes("discharge plan")||k.includes("followup plan")||k.includes("home care")||k.includes("followup details")||k.includes("discharge notes")||k.includes("specialist clinic")?"discharge_home":k.includes("absconded")||k.includes("last seen location")||k.includes("time of absconding")||k.includes("date of absconding")?"absconded":k.includes("refused hospital treatment")||k.includes("reason for refusal")||k.includes("plans to return")||k.includes("date of refusal")||k.includes("witness name")?"refused_treatment":"other":"other"},A=[{key:"admission",title:"Admission"},{key:"death",title:"Death"},{key:"transfer_out",title:"Transfer Out"},{key:"discharge_home",title:"Discharge Home"},{key:"absconded",title:"Absconded"},{key:"refused_treatment",title:"Refused Treatment"},{key:"other",title:"Other Disposition"}],w=await y(r.get(b.AWAITING_SPECIALTY)||[]),c=r.get(b.DISPOSITION)||[],_=u?c.filter(I=>L.toStandardHisFormat(I?.encounter_datetime)===u):c,C=G(_),f=_.flatMap(I=>I?.obs||[]),M=ee(f),D={};for(const I of M){const k=x(I.title);D[k]||(D[k]=[]),D[k].push(I)}const V=await ue(C?.provider_id),te=pe(C?.encounter_datetime),j=te?`${V} ${te}`:V,U=j?` ${j}`:"",ie=A.map(I=>({key:I.key,title:I.title,items:D[I.key]||[],createdByLine:(D[I.key]||[]).length?U:""})).filter(I=>I.items.length>0);Me.value={cards:{awaitingSpecialty:w},otherCards:ie}}catch(i){console.error("Failed to load disposition notes:",i),Me.value=null}finally{he.value=!1}},As=async()=>{Xe.value=!0,Ie.value=null;try{const[i,t,r]=await Promise.all([H.getObsByEncounterId(b.NURSING_CARE_NOTES),H.getObsByEncounterId(b.SOAPIER_PRESCRIPTION),H.getObsByEncounterId(b.SOAPIER_DISPENSING)]),d=G(i);if(!d)return;const m=d?.obs||[],u=L.toStandardHisFormat(d?.encounter_datetime)||"",y=h=>{if(!Array.isArray(h)||h.length===0)return null;if(u){const Vt=h.filter(Is=>L.toStandardHisFormat(Is?.encounter_datetime)===u);if(Vt.length>0)return G(Vt)}return G(h)},x=y(t),A=y(r),w=x?.obs||[],c=A?.obs||[],_=O(m,h=>h==="subjective"||h.includes("subjective"))||"",C=O(m,h=>h==="objective"||h.includes("objective"))||"",f=O(m,h=>h==="assessment"||h.includes("assessment"))||"",M=O(m,h=>h==="plan"||h.includes("plan"))||"",D=O(m,h=>h==="evaluation"||h.includes("evaluation"))||"",V=O(m,h=>h==="replan"||h.includes("replan"))||"",te=O(m,h=>h.includes("spo2")||h.includes("sao2")||h.includes("oxygen saturation")),j=O(m,h=>h.includes("systolic")),U=O(m,h=>h.includes("diastolic")),ie=O(m,h=>h.includes("respiratory rate")||h==="respiratory rate"||h.includes("respiratory")),I=O(m,h=>h==="pulse"||h.includes("pulse rate")),k=O(m,h=>h.includes("temperature")),q=[];if(te&&q.push(`SPO2: ${te} %`),j||U){const h=`${j||"-"}${U?`/${U}`:""}`;q.push(`BP: ${h} mmHg`)}ie&&q.push(`Respiratory: ${ie} breaths/min`),I&&q.push(`Pulse: ${I} bpm`),k&&q.push(`Temperature: ${k} °C`);const ne=q.length?q.join(" "):"N/A",He=ct(c.filter(h=>Q(z(h))==="procedures").map(h=>K(h))),Ae=ct(c.filter(h=>Q(z(h))==="supportive care").map(h=>K(h))),me=[];He.length&&me.push(`Procedures: ${He.join(", ")}`),Ae.length&&me.push(`Supportive care: ${Ae.join(", ")}`);const dt=me.length?me.join(`
`):"N/A",Ye=ct(w.filter(h=>Q(z(h))==="drug given").map(h=>K(h))),Es=Ye.length?Ye.join(", "):"N/A",zt=await ue(d?.provider_id),Gt=pe(d?.encounter_datetime),Cs=Gt?`created by ${zt} on ${Gt}.`:`created by ${zt}.`;Ie.value={subjective:_,objective:C,vitalSigns:ne,assessment:f,plan:M,evaluation:D,replan:V,nonPharmacological:dt,medications:Es,createdByLine:Cs}}catch(i){console.error("Failed to load SOAPIER notes:",i),Ie.value=null}finally{Xe.value=!1}},$t=async i=>{ve.value=i,i==="surgical"&&await Xt(),i==="medical"&&await Zt(),i==="gyneacology"&&await Jt(),i==="all"&&(await bs(),await As(),await ps(),await ys(),await fs(),await _s(),await hs(),await ks(),await Ss(),await xs(),await ws(),await Ns())};return{clinicalNotesView:ve,surgicalNotesRecords:ye,gyneacologyRecords:Ce,medicalInpatientRecords:xe,clinicalNotesLoading:qe,gyneacologyLoading:Fe,medicalInpatientLoading:We,expandedClinicalTiles:ke,toggleClinicalTile:ut,clinicalNotesAllLoading:$,refreshAllClinicalNotes:Je,aetcClinicalTiles:Ue,triageSummary:ce,soapierSummary:Ie,monitoringChartSummary:Pe,fluidBalanceSummary:Te,primarySurveySummary:Oe,sampleHistorySummary:le,secondarySurveySummary:we,diagnosisSummary:be,investigationPlanSummary:fe,patientManagementSummary:se,continuationSummary:_e,dispositionSummary:Me,surgicalNotesBySection:ge,gyneacologyBySection:Kt,medicalInpatientBySection:lt,surgicalPhysicalExam:je,surgicalInitialManagement:gt,surgicalPresenting:at,surgicalPastMedicalHistoryItems:et,surgicalReviewOfSystemsItems:Ne,surgicalReviewOfSystemsCols:X,surgicalPastSurgicalHistoryItems:s,surgicalFamilyHistoryItems:E,surgicalSocialHistoryItems:R,surgicalGynecologicalHistoryItems:p,medicalInpatientPresenting:g,medicalInpatientPhysicalExam:F,medicalInpatientExamZones:jt,medicalReviewOfSystemsItems:Et,medicalReviewOfSystemsCols:Yt,getObsDisplayValue:K,downloadClinicalNotesPdf:ss,setClinicalNotesView:$t}},Zs={class:"clinical-notes-section print-area"},Js={class:"clinical-notes-actions"},Qs={key:0,class:"clinical-notes-list"},ei={key:0,class:"clinical-notes-placeholder"},ti={key:1,class:"clinical-notes-placeholder"},si={key:2,class:"clinical-notes-records surgical-notes-records"},ii={class:"clinical-notes-section-title"},ni={key:0,class:"clinical-notes-section-items"},ai={class:"pe-card"},oi={class:"pe-line"},li={class:"pe-value"},ri={class:"pe-row4"},ci={class:"pe-line"},di={class:"pe-value"},pi={class:"pe-line"},ui={class:"pe-value"},mi={class:"pe-line"},gi={class:"pe-value"},vi={class:"pe-line"},yi={class:"pe-value"},bi={class:"pe-row3",style:{"margin-top":"10px"}},fi={class:"pe-line"},_i={class:"pe-value"},hi={class:"pe-line"},ki={class:"pe-value"},Si={class:"pe-line"},xi={class:"pe-value"},wi={class:"pe-line",style:{"margin-top":"10px"}},Ni={class:"pe-value"},Ai={class:"pe-line"},Ei={class:"pe-value"},Ci={class:"pe-line"},Ii={class:"pe-value"},Pi={class:"pe-line"},Ti={class:"pe-value"},Li={class:"pe-line"},Oi={class:"pe-value"},Ri={class:"pe-line"},Mi={class:"pe-value"},Di={class:"pe-table"},Hi={class:"pe-value"},Bi={class:"pe-value"},Fi={class:"pe-value"},$i={class:"pe-value"},zi={class:"pe-value"},Gi={class:"pe-value"},Vi={key:1,class:"clinical-notes-section-items"},Ui={class:"im-card"},ji={class:"im-row3"},Yi={class:"im-line"},qi={class:"im-value"},Wi={class:"im-line"},Ki={class:"im-value"},Xi={class:"im-line"},Zi={class:"im-value"},Ji={key:2,class:"clinical-notes-section-items"},Qi={class:"pm-card"},en={class:"pc-block"},tn={class:"pc-line"},sn={class:"pc-value"},nn={class:"pc-line",style:{"margin-top":"10px"}},an={class:"pc-value"},on={key:3,class:"clinical-notes-section-items"},ln={class:"pm-card"},rn={class:"pm-list"},cn={class:"pm-label"},dn={class:"pm-value"},pn={key:0,class:"pm-empty"},un={key:4,class:"clinical-notes-section-items"},mn={class:"pm-card"},gn={class:"ros-grid"},vn={class:"ros-col"},yn={class:"ros-label"},bn={class:"ros-value"},fn={class:"ros-col"},_n={class:"ros-label"},hn={class:"ros-value"},kn={key:0,class:"pm-empty"},Sn={key:5,class:"clinical-notes-section-items"},xn={class:"pm-card"},wn={class:"pm-list"},Nn={class:"pm-label"},An={class:"pm-value"},En={key:0,class:"pm-empty"},Cn={key:6,class:"clinical-notes-section-items"},In={class:"pm-card"},Pn={class:"pm-list"},Tn={class:"pm-label"},Ln={class:"pm-value"},On={key:0,class:"pm-empty"},Rn={key:7,class:"clinical-notes-section-items"},Mn={class:"pm-card"},Dn={class:"pm-list"},Hn={class:"pm-label"},Bn={class:"pm-value"},Fn={key:0,class:"pm-empty"},$n={key:8,class:"clinical-notes-section-items"},zn={class:"pm-card"},Gn={class:"pm-list"},Vn={class:"pm-label"},Un={class:"pm-value"},jn={key:0,class:"pm-empty"},Yn={class:"surgical-record-label"},qn={class:"surgical-record-value"},Wn={key:1,class:"clinical-notes-list"},Kn={key:0,class:"clinical-notes-placeholder"},Xn={key:1,class:"clinical-notes-placeholder"},Zn={key:2,class:"clinical-notes-records gyne-notes-records"},Jn={class:"clinical-notes-section-title"},Qn={class:"gyne-record-label"},ea={class:"gyne-record-value"},ta={key:2,class:"clinical-notes-list"},sa={key:0,class:"clinical-notes-placeholder"},ia={key:1,class:"clinical-notes-placeholder"},na={key:2,class:"clinical-notes-records medical-notes-records"},aa={class:"clinical-notes-section-title"},oa={key:0,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},la={class:"medical-record"},ra={class:"medical-record-value"},ca={class:"medical-record"},da={class:"medical-record-value"},pa={key:1,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},ua={class:"pm-card medical-review-card"},ma={class:"ros-grid"},ga={class:"ros-col"},va={class:"ros-label"},ya={class:"ros-value"},ba={class:"ros-col"},fa={class:"ros-label"},_a={class:"ros-value"},ha={key:0,class:"pm-empty"},ka={key:2,class:"clinical-notes-section-items medical-section-items medical-section-items--stacked"},Sa={class:"mipe-card"},xa={class:"mipe-line"},wa={class:"mipe-value"},Na={class:"mipe-row6"},Aa={class:"mipe-line"},Ea={class:"mipe-value"},Ca={class:"mipe-line"},Ia={class:"mipe-value"},Pa={class:"mipe-line"},Ta={class:"mipe-value"},La={class:"mipe-line"},Oa={class:"mipe-value"},Ra={class:"mipe-line"},Ma={class:"mipe-value"},Da={class:"mipe-line"},Ha={class:"mipe-value"},Ba={class:"mipe-row5"},Fa={class:"mipe-line"},$a={class:"mipe-value"},za={class:"mipe-line"},Ga={class:"mipe-value"},Va={class:"mipe-line"},Ua={class:"mipe-value"},ja={class:"mipe-line"},Ya={class:"mipe-value"},qa={class:"mipe-line"},Wa={class:"mipe-value"},Ka={key:0,class:"mipe-line",style:{"margin-top":"8px"}},Xa={class:"mipe-value"},Za={class:"mipe-row2"},Ja={class:"mipe-line"},Qa={class:"mipe-value"},eo={class:"mipe-line"},to={class:"mipe-value"},so={class:"mipe-row3"},io={class:"mipe-line"},no={class:"mipe-value"},ao={class:"mipe-line"},oo={class:"mipe-value"},lo={class:"mipe-line"},ro={class:"mipe-value"},co={class:"mipe-row2"},po={class:"mipe-line"},uo={class:"mipe-value"},mo={class:"mipe-line"},go={class:"mipe-value"},vo={class:"mipe-row2"},yo={class:"mipe-line"},bo={class:"mipe-value"},fo={class:"mipe-line"},_o={class:"mipe-value"},ho={class:"mipe-row2",style:{"margin-top":"8px"}},ko={class:"mipe-line"},So={class:"mipe-value"},xo={class:"mipe-line"},wo={class:"mipe-value"},No={class:"mipe-row3",style:{"margin-top":"8px"}},Ao={class:"mipe-line"},Eo={class:"mipe-value"},Co={class:"mipe-line"},Io={class:"mipe-value"},Po={class:"mipe-line"},To={class:"mipe-value"},Lo={key:1,class:"mipe-zones"},Oo={class:"mipe-zone-title"},Ro={class:"mipe-label"},Mo={class:"mipe-value"},Do={key:2},Ho={class:"mipe-zones"},Bo={class:"mipe-zone-title"},Fo={class:"mipe-label"},$o={class:"mipe-value"},zo={class:"mipe-line"},Go={class:"mipe-value"},Vo={class:"mipe-row2"},Uo={class:"mipe-line"},jo={class:"mipe-value"},Yo={class:"mipe-line"},qo={class:"mipe-value"},Wo={class:"mipe-line"},Ko={class:"mipe-value"},Xo={class:"mipe-row3"},Zo={class:"mipe-line"},Jo={class:"mipe-value"},Qo={class:"mipe-line"},el={class:"mipe-value"},tl={class:"mipe-line"},sl={class:"mipe-value"},il={class:"pe-table"},nl={class:"pe-value"},al={class:"pe-value"},ol={class:"pe-value"},ll={class:"pe-value"},rl={class:"pe-value"},cl={class:"pe-value"},dl={class:"pe-value"},pl={class:"pe-value"},ul={class:"pe-value"},ml={class:"pe-value"},gl={class:"pe-value"},vl={class:"pe-value"},yl={class:"pe-value"},bl={class:"medical-record-label"},fl={class:"medical-record-value"},_l={key:3,class:"clinical-notes-list"},hl={class:"clinical-notes-tab"},kl={class:"notes-header"},Sl={class:"actions"},xl={key:0,class:"skeleton-wrapper"},wl={key:1,class:"empty-state"},Nl={class:"empty-icon-wrapper"},Al={key:2,class:"tiles-grid"},El=["onClick"],Cl={class:"tile-title-wrapper"},Il={class:"tile-title"},Pl={key:0},Tl={key:0,class:"no-observations"},Ll={key:1,class:"triage-summary-list"},Ol={class:"triage-summary-row"},Rl={class:"triage-summary-content"},Ml={class:"triage-summary-row"},Dl={class:"triage-summary-content"},Hl={class:"triage-summary-row"},Bl={class:"triage-summary-content"},Fl={class:"triage-summary-row"},$l={class:"triage-summary-content"},zl={class:"triage-summary-created"},Gl={key:1},Vl={key:0,class:"no-observations"},Ul={key:1,class:"clinical-notes-section-items"},jl={class:"soapier-grid"},Yl={class:"soapier-card"},ql={class:"soapier-card-body"},Wl={class:"soapier-card"},Kl={class:"soapier-card-body"},Xl={class:"soapier-block"},Zl={class:"soapier-block-value"},Jl={class:"soapier-block",style:{"margin-top":"10px"}},Ql={class:"soapier-block-value"},er={class:"soapier-card"},tr={class:"soapier-card-body"},sr={class:"soapier-card"},ir={class:"soapier-card-body"},nr={class:"soapier-card"},ar={class:"soapier-card-body"},or={class:"soapier-block"},lr={class:"soapier-block-value"},rr={class:"soapier-block",style:{"margin-top":"10px"}},cr={class:"soapier-block-value"},dr={class:"soapier-card"},pr={class:"soapier-card-body"},ur={class:"soapier-card"},mr={class:"soapier-card-body"},gr={class:"soapier-footer"},vr={key:2},yr={key:0,class:"no-observations"},br={key:1,class:"monitoring-chart-grid"},fr={class:"monitoring-chart-title"},_r={key:0,class:"monitoring-chart-body"},hr={key:1,class:"monitoring-chart-legend"},kr={key:2,class:"monitoring-chart-empty"},Sr={key:3},xr={key:0,class:"no-observations"},wr={key:1,class:"fluid-balance-entry-grid"},Nr={class:"fluid-balance-card-header"},Ar={class:"fluid-balance-card-title"},Er={class:"fluid-balance-card-subtitle"},Cr={class:"fluid-balance-sections"},Ir={class:"fluid-balance-section"},Pr={class:"fluid-balance-list"},Tr={key:0,class:"fluid-balance-empty"},Lr={class:"fluid-balance-section"},Or={class:"fluid-balance-list"},Rr={key:0,class:"fluid-balance-empty"},Mr={class:"fluid-balance-section"},Dr={class:"fluid-balance-list"},Hr={key:0,class:"fluid-balance-empty"},Br={class:"fluid-balance-section"},Fr={class:"fluid-balance-list"},$r={key:0},zr={key:4},Gr={key:0,class:"no-observations"},Vr={key:1},Ur={class:"survey-print-grid survey-print-grid--primary"},jr={class:"clinical-notes-section-title",style:{"font-size":"1rem"}},Yr={class:"observation-list"},qr={class:"obs-concept"},Wr={class:"obs-value"},Kr={class:"tile-footer"},Xr={key:5},Zr={key:0,class:"no-observations"},Jr={key:1,class:"sample-grid"},Qr={class:"sample-card"},ec={class:"sample-list"},tc={class:"sample-label"},sc={class:"sample-value"},ic={key:0,class:"sample-empty"},nc={class:"sample-footer"},ac={class:"sample-card"},oc={class:"sample-list"},lc={class:"sample-label"},rc={class:"sample-value"},cc={key:0,class:"sample-empty"},dc={class:"sample-footer"},pc={class:"sample-card"},uc={class:"sample-list"},mc={class:"sample-label"},gc={class:"sample-value"},vc={key:0,class:"sample-empty"},yc={class:"sample-footer"},bc={class:"sample-card"},fc={class:"sample-list"},_c={class:"sample-label"},hc={class:"sample-value"},kc={key:0,class:"sample-empty"},Sc={class:"sample-footer"},xc={class:"sample-card"},wc={class:"sample-list"},Nc={class:"sample-label"},Ac={class:"sample-value"},Ec={key:0,class:"sample-empty"},Cc={class:"sample-footer"},Ic={class:"sample-card"},Pc={class:"sample-list"},Tc={class:"sample-label"},Lc={class:"sample-value"},Oc={key:0,class:"sample-empty"},Rc={class:"sample-footer"},Mc={key:6},Dc={key:0,class:"no-observations"},Hc={key:1},Bc={class:"survey-print-grid survey-print-grid--secondary"},Fc={class:"clinical-notes-section-title",style:{"font-size":"1rem"}},$c={class:"observation-list"},zc={class:"obs-concept"},Gc={class:"obs-value"},Vc={class:"tile-footer"},Uc={key:7},jc={key:0,class:"no-observations"},Yc={key:1},qc={class:"clinical-notes-section-title",style:{"font-size":"1rem"}},Wc={class:"observation-list"},Kc={class:"obs-concept"},Xc={class:"obs-value"},Zc={class:"tile-footer"},Jc={key:8},Qc={key:0,class:"no-observations"},ed={key:1,class:"pm-grid"},td={key:0,class:"pm-card"},sd={class:"pm-list"},id={class:"pm-label"},nd={class:"pm-value"},ad={class:"pm-footer"},od={key:1,class:"pm-card"},ld={class:"pm-list"},rd={class:"pm-label"},cd={class:"pm-value"},dd={class:"pm-footer"},pd={key:2,class:"no-observations"},ud={key:9},md={key:0,class:"no-observations"},gd={key:1,class:"pm-grid"},vd={class:"pm-card"},yd={class:"pm-list"},bd={class:"pm-label"},fd={class:"pm-value"},_d={key:0,class:"pm-empty"},hd={class:"pm-footer"},kd={class:"pm-card"},Sd={class:"pm-list"},xd={class:"pm-label"},wd={class:"pm-value"},Nd={key:0,class:"pm-empty"},Ad={class:"pm-footer"},Ed={class:"pm-card"},Cd={class:"pm-list"},Id={class:"pm-label"},Pd={class:"pm-value"},Td={key:0,class:"pm-empty"},Ld={class:"pm-footer"},Od={key:10},Rd={key:0,class:"no-observations"},Md={key:1},Dd={class:"clinical-notes-section-title",style:{"font-size":"1rem"}},Hd={class:"observation-list"},Bd={class:"obs-concept"},Fd={class:"obs-value"},$d={class:"tile-footer"},zd={key:11},Gd={key:0,class:"no-observations"},Vd={key:1,class:"pm-grid"},Ud={class:"pm-card"},jd={class:"pm-list"},Yd={class:"pm-label"},qd={class:"pm-value"},Wd={key:0,class:"pm-empty"},Kd={class:"pm-footer"},Xd={class:"pm-card-title"},Zd={class:"pm-list"},Jd={class:"pm-label"},Qd={class:"pm-value"},ep={key:0,class:"pm-empty"},tp={class:"pm-footer"},sp={key:4,class:"clinical-notes-placeholder"},bp=Ts({__name:"PatientClinicalNotes",setup(ve){const ye=X=>X?.concept_name||X?.concept_id||"Observation",Ce=X=>["Complaints","Impression","Plan","Other"].includes(X),xe=X=>["Investigations","Working Differential Diagnosis","Other"].includes(X),qe=X=>["Past Surgical History","Social History","Family History","Summary","Management Plan","Other"].includes(X),Fe=X=>(X?.series||[]).some(s=>Array.isArray(s?.data)&&s.data.length>0),We=X=>(X?.series||[]).filter(s=>Array.isArray(s?.data)&&s.data.length>0).length>1,Ke=X=>({chart:{toolbar:{show:!0},zoom:{enabled:!0},animations:{enabled:!1},parentHeightOffset:0},colors:X?.colors||["#0ea5e9"],dataLabels:{enabled:!0},stroke:{curve:"smooth",width:3},markers:{size:4},grid:{borderColor:"#e5e7eb",strokeDashArray:0,padding:{left:8,right:12,top:0,bottom:0}},xaxis:{type:"category",labels:{show:!1,style:{fontSize:"10px",colors:"#64748b"}},tooltip:{enabled:!0}},yaxis:{labels:{style:{fontSize:"10px",colors:"#64748b"}}},legend:{show:!1},tooltip:{x:{show:!0}}}),{clinicalNotesView:ce,surgicalNotesRecords:$e,gyneacologyRecords:ze,medicalInpatientRecords:Xe,clinicalNotesLoading:Ie,gyneacologyLoading:Ze,medicalInpatientLoading:Pe,expandedClinicalTiles:de,toggleClinicalTile:Te,clinicalNotesAllLoading:Le,refreshAllClinicalNotes:Oe,aetcClinicalTiles:Ge,triageSummary:le,soapierSummary:W,monitoringChartSummary:we,fluidBalanceSummary:Ve,primarySurveySummary:be,sampleHistorySummary:B,secondarySurveySummary:fe,diagnosisSummary:Re,investigationPlanSummary:se,patientManagementSummary:ae,continuationSummary:_e,dispositionSummary:he,surgicalNotesBySection:Me,gyneacologyBySection:ke,medicalInpatientBySection:ut,surgicalPhysicalExam:$,surgicalInitialManagement:Je,surgicalPresenting:Ue,surgicalPastMedicalHistoryItems:it,surgicalReviewOfSystemsItems:mt,surgicalReviewOfSystemsCols:nt,surgicalPastSurgicalHistoryItems:z,surgicalFamilyHistoryItems:re,surgicalSocialHistoryItems:K,surgicalGynecologicalHistoryItems:De,medicalInpatientPresenting:Qe,medicalInpatientPhysicalExam:v,medicalInpatientExamZones:je,medicalReviewOfSystemsItems:gt,medicalReviewOfSystemsCols:at,getObsDisplayValue:et,downloadClinicalNotesPdf:ot,setClinicalNotesView:Ne}=Xs();return Ls(()=>{Ne(ce.value)}),(X,s)=>(a(),o("div",Zs,[oe(n(Hs),{class:"clinical-notes-card"},{default:St(()=>[oe(n(Os),null,{default:St(()=>[e("div",Js,[oe(st,{name:"Download PDF",fill:"solid",class:"clinical-notes-btn",onClick:n(ot)},null,8,["onClick"]),oe(st,{name:"Surgical Notes",fill:"clear",class:"clinical-notes-btn",onClick:s[0]||(s[0]=E=>n(Ne)("surgical"))}),oe(st,{name:"Gyneacology",fill:"clear",class:"clinical-notes-btn",onClick:s[1]||(s[1]=E=>n(Ne)("gyneacology"))}),oe(st,{name:"Medical Inpatient",fill:"clear",class:"clinical-notes-btn",onClick:s[2]||(s[2]=E=>n(Ne)("medical"))}),oe(st,{name:"All",fill:"clear",class:"clinical-notes-btn",onClick:s[3]||(s[3]=E=>n(Ne)("all"))})]),oe(Ws,{class:"clinical-notes-demographics"}),n(ce)==="surgical"?(a(),o("div",Qs,[s[52]||(s[52]=e("div",{class:"clinical-notes-list-header"},"Surgical Notes",-1)),n(Ie)?(a(),o("div",ei,"Loading surgical notes...")):n($e).length===0?(a(),o("div",ti," No surgical notes found. ")):(a(),o("div",si,[(a(!0),o(S,null,N(n(Me),(E,R)=>(a(),o("div",{key:R,class:"clinical-notes-section-block surgical-section-block"},[e("div",ii,l(R),1),R==="Physical Examination"?(a(),o("div",ni,[e("div",ai,[s[26]||(s[26]=e("div",{class:"pe-title"},"Physical Examination",-1)),e("div",oi,[s[5]||(s[5]=e("span",{class:"pe-label"},"General Condition:",-1)),e("span",li,l(n($).generalCondition||"N/A"),1)]),s[27]||(s[27]=e("div",{class:"pe-subtitle"},"Vitals",-1)),e("div",ri,[e("div",ci,[s[6]||(s[6]=e("span",{class:"pe-label"},"Temperature:",-1)),e("span",di,l(n($).temperature||"N/A"),1)]),e("div",pi,[s[7]||(s[7]=e("span",{class:"pe-label"},"Pulse Rate:",-1)),e("span",ui,l(n($).pulseRate||"N/A"),1)]),e("div",mi,[s[8]||(s[8]=e("span",{class:"pe-label"},"Blood Pressure:",-1)),e("span",gi,l(n($).bloodPressure||"N/A"),1)]),e("div",vi,[s[9]||(s[9]=e("span",{class:"pe-label"},"Respiratory Rate:",-1)),e("span",yi,l(n($).respiratoryRate||"N/A"),1)])]),e("div",bi,[e("div",fi,[s[10]||(s[10]=e("span",{class:"pe-label"},"Eyes:",-1)),e("span",_i,l(n($).eyes||"N/A"),1)]),e("div",hi,[s[11]||(s[11]=e("span",{class:"pe-label"},"Mouth:",-1)),e("span",ki,l(n($).mouth||"N/A"),1)]),e("div",Si,[s[12]||(s[12]=e("span",{class:"pe-label"},"Neck:",-1)),e("span",xi,l(n($).neck||"N/A"),1)])]),e("div",wi,[s[13]||(s[13]=e("span",{class:"pe-label"},"Chest Examination:",-1)),e("span",Ni,l(n($).chestExamination||"N/A"),1)]),e("div",Ai,[s[14]||(s[14]=e("span",{class:"pe-label"},"Endocrine Examination:",-1)),e("span",Ei,l(n($).endocrineExamination||"N/A"),1)]),e("div",Ci,[s[15]||(s[15]=e("span",{class:"pe-label"},"Abdominal Examination:",-1)),e("span",Ii,l(n($).abdominalExamination||"N/A"),1)]),s[28]||(s[28]=e("div",{class:"pe-divider"},null,-1)),s[29]||(s[29]=e("div",{class:"pe-subtitle"},"Glasgow Coma Scale (GCS)",-1)),e("div",Pi,[s[16]||(s[16]=e("span",{class:"pe-label"},"Motor Response:",-1)),e("span",Ti,l(n($).motorResponse||"N/A"),1)]),e("div",Li,[s[17]||(s[17]=e("span",{class:"pe-label"},"Verbal Response:",-1)),e("span",Oi,l(n($).verbalResponse||"N/A"),1)]),e("div",Ri,[s[18]||(s[18]=e("span",{class:"pe-label"},"Eye Response:",-1)),e("span",Mi,l(n($).eyeOpeningResponse||"N/A"),1)]),s[30]||(s[30]=e("div",{class:"pe-divider"},null,-1)),s[31]||(s[31]=e("div",{class:"pe-subtitle"},"Additional Examinations & Extremities",-1)),e("table",Di,[s[25]||(s[25]=e("thead",null,[e("tr",null,[e("th",null,"Additional Examinations"),e("th",null,"Extremities")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[s[19]||(s[19]=e("span",{class:"pe-label"},"Cranial Nerves:",-1)),e("span",Hi,l(n($).cranialNerves||"N/A"),1)]),e("td",null,[s[20]||(s[20]=e("span",{class:"pe-label"},"Pulsations:",-1)),e("span",Bi,l(n($).pulsations||"N/A"),1)])]),e("tr",null,[e("td",null,[s[21]||(s[21]=e("span",{class:"pe-label"},"Gross Motor:",-1)),e("span",Fi,l(n($).grossMotor||"N/A"),1)]),e("td",null,[s[22]||(s[22]=e("span",{class:"pe-label"},"Rectal Examination:",-1)),e("span",$i,l(n($).rectalExamination||"N/A"),1)])]),e("tr",null,[e("td",null,[s[23]||(s[23]=e("span",{class:"pe-label"},"Sensation:",-1)),e("span",zi,l(n($).sensation||"N/A"),1)]),e("td",null,[s[24]||(s[24]=e("span",{class:"pe-label"},"Extremities:",-1)),e("span",Gi,l(n($).extremities||"N/A"),1)])])])])])])):R==="Initial Management"?(a(),o("div",Vi,[e("div",Ui,[s[35]||(s[35]=e("div",{class:"im-title"},"Initial Management",-1)),e("div",ji,[e("div",Yi,[s[32]||(s[32]=e("span",{class:"im-label"},"Clerk Name:",-1)),e("span",qi,l(n(Je).clerkName||"N/A"),1)]),e("div",Wi,[s[33]||(s[33]=e("span",{class:"im-label"},"Designation:",-1)),e("span",Ki,l(n(Je).designation||"N/A"),1)]),e("div",Xi,[s[34]||(s[34]=e("span",{class:"im-label"},"Signature:",-1)),e("span",Zi,l(n(Je).signature||"N/A"),1)])])])])):R==="Presenting Complaints"?(a(),o("div",Ji,[e("div",Qi,[s[38]||(s[38]=e("div",{class:"pm-card-title"},"Presenting Complaints",-1)),s[39]||(s[39]=e("div",{class:"pm-card-divider"},null,-1)),e("div",en,[e("div",tn,[s[36]||(s[36]=e("span",{class:"pc-label"},"Presenting Complaints:",-1)),e("span",sn,l(n(Ue).complaints||"N/A"),1)]),e("div",nn,[s[37]||(s[37]=e("span",{class:"pc-label"},"Presenting History:",-1)),e("span",an,l(n(Ue).history||"N/A"),1)])])])])):R==="Past Medical History"?(a(),o("div",on,[e("div",ln,[s[40]||(s[40]=e("div",{class:"pm-card-title"},"Past Medical History",-1)),s[41]||(s[41]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",rn,[(a(!0),o(S,null,N(n(it),(p,g)=>(a(),o("li",{key:g},[e("span",cn,l(p.title)+":",1),e("span",dn,l(p.value),1)]))),128)),n(it).length===0?(a(),o("li",pn,"No records.")):P("",!0)])])])):R==="Review of Systems"?(a(),o("div",un,[e("div",mn,[s[42]||(s[42]=e("div",{class:"pm-card-title"},"Review of Systems",-1)),s[43]||(s[43]=e("div",{class:"pm-card-divider"},null,-1)),e("div",gn,[e("div",vn,[(a(!0),o(S,null,N(n(nt).left,(p,g)=>(a(),o("div",{key:`ros-l-${g}`,class:"ros-item"},[e("span",yn,l(p.title)+":",1),e("span",bn,l(p.value),1)]))),128))]),e("div",fn,[(a(!0),o(S,null,N(n(nt).right,(p,g)=>(a(),o("div",{key:`ros-r-${g}`,class:"ros-item"},[e("span",_n,l(p.title)+":",1),e("span",hn,l(p.value),1)]))),128))])]),n(mt).length===0?(a(),o("div",kn,"No records.")):P("",!0)])])):R==="Past Surgical History"?(a(),o("div",Sn,[e("div",xn,[s[44]||(s[44]=e("div",{class:"pm-card-title"},"Past Surgical History",-1)),s[45]||(s[45]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",wn,[(a(!0),o(S,null,N(n(z),(p,g)=>(a(),o("li",{key:g},[e("span",Nn,l(p.title)+":",1),e("span",An,l(p.value),1)]))),128)),n(z).length===0?(a(),o("li",En,"No records.")):P("",!0)])])])):R==="Family History"?(a(),o("div",Cn,[e("div",In,[s[46]||(s[46]=e("div",{class:"pm-card-title"},"Family History",-1)),s[47]||(s[47]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Pn,[(a(!0),o(S,null,N(n(re),(p,g)=>(a(),o("li",{key:g},[e("span",Tn,l(p.title)+":",1),e("span",Ln,l(p.value),1)]))),128)),n(re).length===0?(a(),o("li",On,"No records.")):P("",!0)])])])):R==="Social History"?(a(),o("div",Rn,[e("div",Mn,[s[48]||(s[48]=e("div",{class:"pm-card-title"},"Social History",-1)),s[49]||(s[49]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Dn,[(a(!0),o(S,null,N(n(K),(p,g)=>(a(),o("li",{key:g},[e("span",Hn,l(p.title)+":",1),e("span",Bn,l(p.value),1)]))),128)),n(K).length===0?(a(),o("li",Fn,"No records.")):P("",!0)])])])):R==="Gynecological History"?(a(),o("div",$n,[e("div",zn,[s[50]||(s[50]=e("div",{class:"pm-card-title"},"Gynecological History",-1)),s[51]||(s[51]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Gn,[(a(!0),o(S,null,N(n(De),(p,g)=>(a(),o("li",{key:g},[e("span",Vn,l(p.title)+":",1),e("span",Un,l(p.value),1)]))),128)),n(De).length===0?(a(),o("li",jn," No records. ")):P("",!0)])])])):(a(),o("div",{key:9,class:Se(["clinical-notes-section-items surgical-section-items",{"surgical-section-items--stacked":xe(R)}])},[(a(!0),o(S,null,N(E,(p,g)=>(a(),o("div",{key:g,class:"surgical-record"},[e("span",Yn,l(ye(p))+":",1),e("span",qn,l(n(et)(p)),1)]))),128))],2))]))),128))]))])):n(ce)==="gyneacology"?(a(),o("div",Wn,[s[53]||(s[53]=e("div",{class:"clinical-notes-list-header"},"Gyneacology Ward",-1)),n(Ze)?(a(),o("div",Kn," Loading gyneacology ward records... ")):n(ze).length===0?(a(),o("div",Xn," No gyneacology ward records found. ")):(a(),o("div",Zn,[(a(!0),o(S,null,N(n(ke),(E,R)=>(a(),o("div",{key:R,class:"clinical-notes-section-block gyne-section-block"},[e("div",Jn,l(R),1),e("div",{class:Se(["clinical-notes-section-items gyne-section-items",{"gyne-section-items--wide":R==="General Examination","gyne-section-items--stacked":Ce(R)}])},[(a(!0),o(S,null,N(E,(p,g)=>(a(),o("div",{key:g,class:"gyne-record"},[e("span",Qn,l(ye(p))+":",1),e("span",ea,l(n(et)(p)),1)]))),128))],2)]))),128))]))])):n(ce)==="medical"?(a(),o("div",ta,[s[128]||(s[128]=e("div",{class:"clinical-notes-list-header"},"Medical Inpatient",-1)),n(Pe)?(a(),o("div",sa," Loading medical inpatient records... ")):n(Xe).length===0?(a(),o("div",ia," No medical inpatient records found. ")):(a(),o("div",na,[(a(!0),o(S,null,N(n(ut),(E,R)=>(a(),o("div",{key:R,class:"clinical-notes-section-block medical-section-block"},[e("div",aa,l(R),1),R==="Presenting Complaints"?(a(),o("div",oa,[e("div",la,[s[54]||(s[54]=e("span",{class:"medical-record-label"},"Presenting Complaints:",-1)),e("span",ra,l(n(Qe).complaints||"N/A"),1)]),e("div",ca,[s[55]||(s[55]=e("span",{class:"medical-record-label"},"Presenting History:",-1)),e("span",da,l(n(Qe).history||"N/A"),1)])])):R==="Review of Systems"?(a(),o("div",pa,[e("div",ua,[e("div",ma,[e("div",ga,[(a(!0),o(S,null,N(n(at).left,(p,g)=>(a(),o("div",{key:`mi-ros-l-${g}`,class:"ros-item"},[e("span",va,l(p.title)+":",1),e("span",ya,l(p.value),1)]))),128))]),e("div",ba,[(a(!0),o(S,null,N(n(at).right,(p,g)=>(a(),o("div",{key:`mi-ros-r-${g}`,class:"ros-item"},[e("span",fa,l(p.title)+":",1),e("span",_a,l(p.value),1)]))),128))])]),n(gt).length===0?(a(),o("div",ha,"No records.")):P("",!0)])])):R==="Physical Examination"?(a(),o("div",ka,[e("div",Sa,[e("div",xa,[s[56]||(s[56]=e("span",{class:"mipe-label"},"General condition:",-1)),e("span",wa,l(n(v).general||"N/A"),1)]),s[107]||(s[107]=e("div",{class:"mipe-subtitle"},"Vitals",-1)),e("div",Na,[e("div",Aa,[s[57]||(s[57]=e("span",{class:"mipe-label"},"Temperature:",-1)),e("span",Ea,l(n(v).temperature||"N/A"),1)]),e("div",Ca,[s[58]||(s[58]=e("span",{class:"mipe-label"},"Pulse Rate:",-1)),e("span",Ia,l(n(v).pulseRate||"N/A"),1)]),e("div",Pa,[s[59]||(s[59]=e("span",{class:"mipe-label"},"Systolic:",-1)),e("span",Ta,l(n(v).systolic||"N/A"),1)]),e("div",La,[s[60]||(s[60]=e("span",{class:"mipe-label"},"Diastolic:",-1)),e("span",Oa,l(n(v).diastolic||"N/A"),1)]),e("div",Ra,[s[61]||(s[61]=e("span",{class:"mipe-label"},"Respiratory Rate:",-1)),e("span",Ma,l(n(v).respiratoryRate||"N/A"),1)]),e("div",Da,[s[62]||(s[62]=e("span",{class:"mipe-label"},"Oxygen Saturation:",-1)),e("span",Ha,l(n(v).oxygenSaturation||"N/A"),1)])]),s[108]||(s[108]=e("div",{class:"mipe-divider"},null,-1)),s[109]||(s[109]=e("div",{class:"mipe-subtitle"},"Head and Neck",-1)),e("div",Ba,[e("div",Fa,[s[63]||(s[63]=e("span",{class:"mipe-label"},"Pupils Symmetrical:",-1)),e("span",$a,l(n(v).pupilsSymmetrical||"N/A"),1)]),e("div",za,[s[64]||(s[64]=e("span",{class:"mipe-label"},"Conjunctiva:",-1)),e("span",Ga,l(n(v).conjunctiva||"N/A"),1)]),e("div",Va,[s[65]||(s[65]=e("span",{class:"mipe-label"},"Oral KS:",-1)),e("span",Ua,l(n(v).oralKs||"N/A"),1)]),e("div",ja,[s[66]||(s[66]=e("span",{class:"mipe-label"},"Oral Candidiasis:",-1)),e("span",Ya,l(n(v).oralThrush||"N/A"),1)]),e("div",qa,[s[67]||(s[67]=e("span",{class:"mipe-label"},"Lymphadenopathy:",-1)),e("span",Wa,l(n(v).lymphadenopathy||"N/A"),1)])]),n(v).headNeckOther?(a(),o("div",Ka,[s[68]||(s[68]=e("span",{class:"mipe-label"},"Other:",-1)),e("span",Xa,l(n(v).headNeckOther),1)])):P("",!0),s[110]||(s[110]=e("div",{class:"mipe-divider"},null,-1)),s[111]||(s[111]=e("div",{class:"mipe-subtitle"},"Chest",-1)),e("div",Za,[e("div",Ja,[s[69]||(s[69]=e("span",{class:"mipe-label"},"Symmetrical Expansion:",-1)),e("span",Qa,l(n(v).symmetricalExpansion||"N/A"),1)]),e("div",eo,[s[70]||(s[70]=e("span",{class:"mipe-label"},"Symmetrical Expansion Description:",-1)),e("span",to,l(n(v).symmetricalExpansionDescription||"N/A"),1)])]),s[112]||(s[112]=e("div",{class:"mipe-divider"},null,-1)),s[113]||(s[113]=e("div",{class:"mipe-subtitle"},"Heart",-1)),e("div",so,[e("div",io,[s[71]||(s[71]=e("span",{class:"mipe-label"},"Apex Beat:",-1)),e("span",no,l(n(v).apexBeat||"N/A"),1)]),e("div",ao,[s[72]||(s[72]=e("span",{class:"mipe-label"},"Thrill Heaves:",-1)),e("span",oo,l(n(v).thrillHeaves||"N/A"),1)]),e("div",lo,[s[73]||(s[73]=e("span",{class:"mipe-label"},"Auscultation (Heart):",-1)),e("span",ro,l(n(v).auscultationHeart||"N/A"),1)])]),s[114]||(s[114]=e("div",{class:"mipe-divider"},null,-1)),s[115]||(s[115]=e("div",{class:"mipe-subtitle"},"Lungs",-1)),e("div",co,[e("div",po,[s[74]||(s[74]=e("span",{class:"mipe-label"},"Lung Condition:",-1)),e("span",uo,l(n(v).lungCondition||"N/A"),1)]),e("div",mo,[s[75]||(s[75]=e("span",{class:"mipe-label"},"Lung Position:",-1)),e("span",go,l(n(v).lungPosition||"N/A"),1)])]),s[116]||(s[116]=e("div",{class:"mipe-divider"},null,-1)),s[117]||(s[117]=e("div",{class:"mipe-subtitle"},"Abdomen",-1)),e("div",vo,[e("div",yo,[s[76]||(s[76]=e("span",{class:"mipe-label"},"Region:",-1)),e("span",bo,l(n(v).abdomenRegion||"N/A"),1)]),e("div",fo,[s[77]||(s[77]=e("span",{class:"mipe-label"},"Inspection:",-1)),e("span",_o,l(n(v).abdomenInspection||"N/A"),1)])]),e("div",ho,[e("div",ko,[s[78]||(s[78]=e("span",{class:"mipe-label"},"Light Palpation:",-1)),e("span",So,l(n(v).abdomenLightPalpation||"N/A"),1)]),e("div",xo,[s[79]||(s[79]=e("span",{class:"mipe-label"},"Deep Palpation:",-1)),e("span",wo,l(n(v).abdomenDeepPalpation||"N/A"),1)])]),e("div",No,[e("div",Ao,[s[80]||(s[80]=e("span",{class:"mipe-label"},"Auscultation:",-1)),e("span",Eo,l(n(v).abdomenAuscultation||"N/A"),1)]),e("div",Co,[s[81]||(s[81]=e("span",{class:"mipe-label"},"Shifting Dullness:",-1)),e("span",Io,l(n(v).abdomenShiftingDullness||"N/A"),1)]),e("div",Po,[s[82]||(s[82]=e("span",{class:"mipe-label"},"Fluid Thrill:",-1)),e("span",To,l(n(v).abdomenFluidThrill||"N/A"),1)])]),n(je).abdomen.length?(a(),o("div",Lo,[(a(!0),o(S,null,N(n(je).abdomen,(p,g)=>(a(),o("div",{class:"mipe-zone",key:`mi-abd-${g}`},[e("div",Oo,l(p.zone),1),(a(!0),o(S,null,N(p.findings,(F,J)=>(a(),o("div",{class:"mipe-line",key:`mi-abd-${g}-${J}`},[e("span",Ro,l(F.title)+":",1),e("span",Mo,l(F.value),1)]))),128))]))),128))])):P("",!0),n(je).respiratory.length?(a(),o("div",Do,[s[83]||(s[83]=e("div",{class:"mipe-divider"},null,-1)),s[84]||(s[84]=e("div",{class:"mipe-subtitle"},"Respiratory Examination",-1)),e("div",Ho,[(a(!0),o(S,null,N(n(je).respiratory,(p,g)=>(a(),o("div",{class:"mipe-zone",key:`mi-resp-${g}`},[e("div",Bo,l(p.zone),1),(a(!0),o(S,null,N(p.findings,(F,J)=>(a(),o("div",{class:"mipe-line",key:`mi-resp-${g}-${J}`},[e("span",Fo,l(F.title)+":",1),e("span",$o,l(F.value),1)]))),128))]))),128))])])):P("",!0),s[118]||(s[118]=e("div",{class:"mipe-divider"},null,-1)),s[119]||(s[119]=e("div",{class:"mipe-subtitle"},"Extremities",-1)),e("div",zo,[s[85]||(s[85]=e("span",{class:"mipe-label"},"Oedema:",-1)),e("span",Go,l(n(v).oedema||"N/A"),1)]),s[120]||(s[120]=e("div",{class:"mipe-divider"},null,-1)),s[121]||(s[121]=e("div",{class:"mipe-subtitle"},"Skin",-1)),e("div",Vo,[e("div",Uo,[s[86]||(s[86]=e("span",{class:"mipe-label"},"Skin Rash:",-1)),e("span",jo,l(n(v).skinRash||"N/A"),1)]),e("div",Yo,[s[87]||(s[87]=e("span",{class:"mipe-label"},"Herpes Zoster Scar:",-1)),e("span",qo,l(n(v).herpesScar||"N/A"),1)])]),s[122]||(s[122]=e("div",{class:"mipe-divider"},null,-1)),s[123]||(s[123]=e("div",{class:"mipe-subtitle"},"Neurological Examination",-1)),e("div",Wo,[s[88]||(s[88]=e("span",{class:"mipe-label"},"Neck Stiffness:",-1)),e("span",Ko,l(n(v).neckStiffness||"N/A"),1)]),s[124]||(s[124]=e("div",{class:"mipe-divider"},null,-1)),s[125]||(s[125]=e("div",{class:"mipe-subtitle"},"Glasgow Coma Scale (GCS)",-1)),e("div",Xo,[e("div",Zo,[s[89]||(s[89]=e("span",{class:"mipe-label"},"Eye Opening Response:",-1)),e("span",Jo,l(n(v).eyeOpeningResponse||"N/A"),1)]),e("div",Qo,[s[90]||(s[90]=e("span",{class:"mipe-label"},"Verbal Response:",-1)),e("span",el,l(n(v).verbalResponse||"N/A"),1)]),e("div",tl,[s[91]||(s[91]=e("span",{class:"mipe-label"},"Motor Response:",-1)),e("span",sl,l(n(v).motorResponse||"N/A"),1)])]),s[126]||(s[126]=e("div",{class:"mipe-divider"},null,-1)),s[127]||(s[127]=e("div",{class:"mipe-subtitle"},"Cranial and Peripheral Nerves",-1)),e("table",il,[s[106]||(s[106]=e("thead",null,[e("tr",null,[e("th",null,"Cranial Nerves"),e("th",null,"Peripheral Nerves")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,[s[92]||(s[92]=e("span",{class:"pe-label"},"Pupil:",-1)),e("span",nl,l(n(v).cnPupil||"N/A"),1)]),e("td",null,[s[93]||(s[93]=e("span",{class:"pe-label"},"Power:",-1)),e("span",al,l(n(v).pnPower||"N/A"),1)])]),e("tr",null,[e("td",null,[s[94]||(s[94]=e("span",{class:"pe-label"},"Visual Field/Acuity:",-1)),e("span",ol,l(n(v).cnVisualField||"N/A"),1)]),e("td",null,[s[95]||(s[95]=e("span",{class:"pe-label"},"Tone:",-1)),e("span",ll,l(n(v).pnTone||"N/A"),1)])]),e("tr",null,[e("td",null,[s[96]||(s[96]=e("span",{class:"pe-label"},"Eye Movements/Nystagmus:",-1)),e("span",rl,l(n(v).cnEyeMovements||"N/A"),1)]),e("td",null,[s[97]||(s[97]=e("span",{class:"pe-label"},"Reflexes:",-1)),e("span",cl,l(n(v).pnReflexes||"N/A"),1)])]),e("tr",null,[e("td",null,[s[98]||(s[98]=e("span",{class:"pe-label"},"Facial Movements/Sensation:",-1)),e("span",dl,l(n(v).cnFacial||"N/A"),1)]),e("td",null,[s[99]||(s[99]=e("span",{class:"pe-label"},"Plantars:",-1)),e("span",pl,l(n(v).pnPlantars||"N/A"),1)])]),e("tr",null,[e("td",null,[s[100]||(s[100]=e("span",{class:"pe-label"},"Hearing:",-1)),e("span",ul,l(n(v).cnHearing||"N/A"),1)]),e("td",null,[s[101]||(s[101]=e("span",{class:"pe-label"},"Sensation:",-1)),e("span",ml,l(n(v).pnSensation||"N/A"),1)])]),e("tr",null,[e("td",null,[s[102]||(s[102]=e("span",{class:"pe-label"},"Tongue Movement/Tastes:",-1)),e("span",gl,l(n(v).cnTongue||"N/A"),1)]),e("td",null,[s[103]||(s[103]=e("span",{class:"pe-label"},"Coordination:",-1)),e("span",vl,l(n(v).pnCoordination||"N/A"),1)])]),e("tr",null,[e("td",null,[s[104]||(s[104]=e("span",{class:"pe-label"},"Cough/Gag Reflex:",-1)),e("span",yl,l(n(v).cnCoughGag||"N/A"),1)]),s[105]||(s[105]=e("td",null,null,-1))])])])])])):(a(),o("div",{key:3,class:Se(["clinical-notes-section-items medical-section-items",{"medical-section-items--stacked":qe(R)}])},[(a(!0),o(S,null,N(E,(p,g)=>(a(),o("div",{key:g,class:"medical-record"},[e("span",bl,l(ye(p))+":",1),e("span",fl,l(n(et)(p)),1)]))),128))],2))]))),128))]))])):n(ce)==="all"?(a(),o("div",_l,[e("div",hl,[e("header",kl,[s[129]||(s[129]=e("div",null,[e("h2",{class:"title"},"Clinical Health Card"),e("p",{class:"subtitle"},"Complete timeline of patient's clinical review and outcomes.")],-1)),e("div",Sl,[oe(n(Rs),{fill:"clear",size:"small",class:"refresh-btn",disabled:n(Le),onClick:n(Oe),title:"Refresh Health Card"},{default:St(()=>[oe(n(pt),{icon:n(Ys),slot:"icon-only",class:Se({"spin-anim":n(Le)})},null,8,["icon","class"])]),_:1},8,["disabled","onClick"])])]),n(Le)?(a(),o("div",xl,[(a(),o(S,null,N(3,E=>e("div",{class:"skeleton-card",key:"skel-"+E},[...s[130]||(s[130]=[e("div",{class:"skeleton-header"},[e("div",{class:"skeleton-icon shimmer"}),e("div",{class:"skeleton-text-wrapper"},[e("div",{class:"skeleton-title shimmer"}),e("div",{class:"skeleton-subtitle shimmer"})])],-1)])])),64))])):n(Ge).length?(a(),o("div",Al,[(a(!0),o(S,null,N(n(Ge),(E,R)=>(a(),o("div",{key:E.id,class:Se(["encounter-tile",{"is-expanded":n(de)[E.id]}]),onClick:p=>n(Te)(E.id),style:xt({animationDelay:R*.05+"s"})},[e("div",{class:Se(["tile-header",{"header-expanded":n(de)[E.id]}])},[e("div",{class:"tile-icon-wrapper",style:xt({backgroundColor:n(de)[E.id]?E.color:E.color+"15",color:n(de)[E.id]?"#fff":E.color})},[oe(n(pt),{icon:E.icon,class:"tile-icon"},null,8,["icon"])],4),e("div",Cl,[e("h4",Il,l(E.title),1)]),oe(n(pt),{icon:n(qs),class:Se(["expand-icon",{expanded:n(de)[E.id]}])},null,8,["icon","class"])],2),e("div",{class:Se(["tile-body",{"body-expanded":n(de)[E.id]}])},[e("div",{class:"tile-body-inner",onClick:s[4]||(s[4]=Ms(()=>{},["stop"]))},[E.id==="triage"?(a(),o("div",Pl,[n(le)?(a(),o("div",Ll,[e("div",Ol,[s[134]||(s[134]=e("span",{class:"triage-summary-letter"},"A.",-1)),e("p",Rl,[s[133]||(s[133]=e("strong",null,"Presenting Complaints:",-1)),e("span",null,l(n(le).presentingComplaints),1)])]),e("div",Ml,[s[136]||(s[136]=e("span",{class:"triage-summary-letter"},"B.",-1)),e("p",Dl,[s[135]||(s[135]=e("strong",null,"Vital Signs:",-1)),e("span",null,l(n(le).vitalSigns),1)])]),e("div",Hl,[s[138]||(s[138]=e("span",{class:"triage-summary-letter"},"C.",-1)),e("p",Bl,[s[137]||(s[137]=e("strong",null,"Triage Category:",-1)),e("span",null,l(n(le).triageCategory),1)])]),e("div",Fl,[s[140]||(s[140]=e("span",{class:"triage-summary-letter"},"D.",-1)),e("p",$l,[s[139]||(s[139]=e("strong",null,"Patient Care Area:",-1)),e("span",null,l(n(le).patientCareArea),1)])]),e("p",zl,l(n(le).createdByLine),1)])):(a(),o("div",Tl,"No triage information found."))])):E.id==="soapier"?(a(),o("div",Gl,[n(W)?(a(),o("div",Ul,[e("div",jl,[e("div",Yl,[s[141]||(s[141]=e("div",{class:"soapier-card-title"},"Subjective",-1)),s[142]||(s[142]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",ql,l(n(W).subjective||"N/A"),1)]),e("div",Wl,[s[145]||(s[145]=e("div",{class:"soapier-card-title"},"Objective",-1)),s[146]||(s[146]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",Kl,[e("div",Xl,[s[143]||(s[143]=e("div",{class:"soapier-block-title"},"Objective",-1)),e("div",Zl,l(n(W).objective||"N/A"),1)]),e("div",Jl,[s[144]||(s[144]=e("div",{class:"soapier-block-title"},"Vital Signs",-1)),e("div",Ql,l(n(W).vitalSigns||"N/A"),1)])])]),e("div",er,[s[147]||(s[147]=e("div",{class:"soapier-card-title"},"Assessment",-1)),s[148]||(s[148]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",tr,l(n(W).assessment||"N/A"),1)]),e("div",sr,[s[149]||(s[149]=e("div",{class:"soapier-card-title"},"Plan",-1)),s[150]||(s[150]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",ir,l(n(W).plan||"N/A"),1)]),e("div",nr,[s[153]||(s[153]=e("div",{class:"soapier-card-title"},"Intervention / Implementation",-1)),s[154]||(s[154]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",ar,[e("div",or,[s[151]||(s[151]=e("div",{class:"soapier-block-title"},"Non‑Pharmacological",-1)),e("div",lr,[n(W).nonPharmacological&&n(W).nonPharmacological!=="N/A"?(a(!0),o(S,{key:0},N(n(W).nonPharmacological.split(/\n|\s*\|\s*/).filter(Boolean),(p,g)=>(a(),o("div",{key:"np-all-"+g},l(p),1))),128)):(a(),o(S,{key:1},[Ee("N/A")],64))])]),e("div",rr,[s[152]||(s[152]=e("div",{class:"soapier-block-title"},"Medications",-1)),e("div",cr,l(n(W).medications||"N/A"),1)])])]),e("div",dr,[s[155]||(s[155]=e("div",{class:"soapier-card-title"},"Evaluation",-1)),s[156]||(s[156]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",pr,l(n(W).evaluation||"N/A"),1)]),e("div",ur,[s[157]||(s[157]=e("div",{class:"soapier-card-title"},"Replan",-1)),s[158]||(s[158]=e("div",{class:"soapier-card-divider"},null,-1)),e("div",mr,l(n(W).replan||"N/A"),1)])]),e("div",gr,l(n(W).createdByLine),1)])):(a(),o("div",Vl,"No SOAPIER notes found."))])):E.id==="monitoring_chart"?(a(),o("div",vr,[n(we)?(a(),o("div",br,[(a(!0),o(S,null,N(n(we).charts,p=>(a(),o("div",{key:p.key,class:"monitoring-chart-card"},[e("div",fr,l(p.title),1),s[159]||(s[159]=e("div",{class:"monitoring-chart-divider"},null,-1)),Fe(p)?(a(),o("div",_r,[n(de)[E.id]?(a(),Ds(n(Bs),{key:`${E.id}-${p.key}`,width:"100%",height:"160",type:"line",options:Ke(p),series:p.series},null,8,["options","series"])):P("",!0)])):P("",!0),We(p)?(a(),o("div",hr,[(a(!0),o(S,null,N(p.series,(g,F)=>(a(),o("span",{key:`${p.key}-${g.name}`,class:"monitoring-chart-legend-item"},[e("span",{class:"monitoring-chart-legend-marker",style:xt({color:p.colors?.[F]||"#0ea5e9"}),"aria-hidden":"true"}," ● ",4),e("span",null,l(g.name),1)]))),128))])):P("",!0),Fe(p)?P("",!0):(a(),o("div",kr," No chartable records. "))]))),128))])):(a(),o("div",yr," No monitoring chart records found. "))])):E.id==="fluid_balance"?(a(),o("div",Sr,[n(Ve)?(a(),o("div",wr,[(a(!0),o(S,null,N(n(Ve).entries,p=>(a(),o("div",{key:p.id,class:"fluid-balance-card"},[e("div",Nr,[e("div",null,[e("div",Ar,l(p.entryDate||"Date not recorded"),1),e("div",Er,l(p.entryTime||"Time not recorded"),1)]),e("div",{class:Se(["fluid-balance-badge",{"fluid-balance-badge--alert":Math.abs(p.balance)>1e3}])},l(p.balanceLabel),3)]),e("div",Cr,[e("div",Ir,[s[160]||(s[160]=e("div",{class:"fluid-balance-section-title"},"Intake",-1)),e("ul",Pr,[(a(!0),o(S,null,N(p.intake,g=>(a(),o("li",{key:`intake-${g.title}`},[e("span",null,l(g.title)+":",1),Ee(" "+l(g.value),1)]))),128)),p.intake.length===0?(a(),o("li",Tr,"No intake recorded.")):P("",!0)])]),e("div",Lr,[s[161]||(s[161]=e("div",{class:"fluid-balance-section-title"},"Output",-1)),e("ul",Or,[(a(!0),o(S,null,N(p.output,g=>(a(),o("li",{key:`output-${g.title}`},[e("span",null,l(g.title)+":",1),Ee(" "+l(g.value),1)]))),128)),p.output.length===0?(a(),o("li",Rr,"No output recorded.")):P("",!0)])]),e("div",Mr,[s[162]||(s[162]=e("div",{class:"fluid-balance-section-title"},"Stool / Lab",-1)),e("ul",Dr,[(a(!0),o(S,null,N(p.stool,g=>(a(),o("li",{key:`stool-${g.title}`},[e("span",null,l(g.title)+":",1),Ee(" "+l(g.value),1)]))),128)),p.stool.length===0?(a(),o("li",Hr,"No stool details recorded.")):P("",!0)])]),e("div",Br,[s[167]||(s[167]=e("div",{class:"fluid-balance-section-title"},"Summary",-1)),e("ul",Fr,[e("li",null,[s[163]||(s[163]=e("span",null,"Total Intake:",-1)),Ee(" "+l(p.totalIntake)+" mL",1)]),e("li",null,[s[164]||(s[164]=e("span",null,"Total Output:",-1)),Ee(" "+l(p.totalOutput)+" mL",1)]),e("li",null,[s[165]||(s[165]=e("span",null,"24-hour Balance:",-1)),Ee(" "+l(p.balanceLabel),1)]),p.comments?(a(),o("li",$r,[s[166]||(s[166]=e("span",null,"Notes:",-1)),Ee(" "+l(p.comments),1)])):P("",!0)])])])]))),128))])):(a(),o("div",xr," No fluid balance and stool monitoring records found. "))])):E.id==="primary_survey"?(a(),o("div",zr,[n(be)?(a(),o("div",Vr,[e("div",Ur,[(a(!0),o(S,null,N(n(be).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",jr,l(g),1),e("ul",Yr,[(a(!0),o(S,null,N(p,(F,J)=>(a(),o("li",{key:J,class:"observation-row"},[e("span",qr,l(F.title),1),e("span",Wr,l(F.value),1)]))),128))])]))),128))]),e("div",Kr,l(n(be).createdByLine),1)])):(a(),o("div",Gr," No primary survey records found. "))])):E.id==="sample_history"?(a(),o("div",Xr,[n(B)?(a(),o("div",Jr,[e("div",Qr,[s[168]||(s[168]=e("div",{class:"sample-card-title"},"Symptoms - Presenting Complaints",-1)),s[169]||(s[169]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",ec,[(a(!0),o(S,null,N(n(B).cards.symptoms.items,(p,g)=>(a(),o("li",{key:g},[e("span",tc,l(p.title)+":",1),e("span",sc,l(p.value),1)]))),128)),n(B).cards.symptoms.items.length===0?(a(),o("li",ic," No records. ")):P("",!0)]),e("div",nc,l(n(B).cards.symptoms.createdByLine),1)]),e("div",ac,[s[170]||(s[170]=e("div",{class:"sample-card-title"},"Events",-1)),s[171]||(s[171]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",oc,[(a(!0),o(S,null,N(n(B).cards.events.items,(p,g)=>(a(),o("li",{key:g},[e("span",lc,l(p.title)+":",1),e("span",rc,l(p.value),1)]))),128)),n(B).cards.events.items.length===0?(a(),o("li",cc," No records. ")):P("",!0)]),e("div",dc,l(n(B).cards.events.createdByLine),1)]),e("div",pc,[s[172]||(s[172]=e("div",{class:"sample-card-title"},"Allergies",-1)),s[173]||(s[173]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",uc,[(a(!0),o(S,null,N(n(B).cards.allergies.items,(p,g)=>(a(),o("li",{key:g},[e("span",mc,l(p.title)+":",1),e("span",gc,l(p.value),1)]))),128)),n(B).cards.allergies.items.length===0?(a(),o("li",vc," No records. ")):P("",!0)]),e("div",yc,l(n(B).cards.allergies.createdByLine),1)]),e("div",bc,[s[174]||(s[174]=e("div",{class:"sample-card-title"},"Medications",-1)),s[175]||(s[175]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",fc,[(a(!0),o(S,null,N(n(B).cards.medications.items,(p,g)=>(a(),o("li",{key:g},[e("span",_c,l(p.title)+":",1),e("span",hc,l(p.value),1)]))),128)),n(B).cards.medications.items.length===0?(a(),o("li",kc," No records. ")):P("",!0)]),e("div",Sc,l(n(B).cards.medications.createdByLine),1)]),e("div",xc,[s[176]||(s[176]=e("div",{class:"sample-card-title"},"Prior/Existing Conditions",-1)),s[177]||(s[177]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",wc,[(a(!0),o(S,null,N(n(B).cards.priorConditions.items,(p,g)=>(a(),o("li",{key:g},[e("span",Nc,l(p.title)+":",1),e("span",Ac,l(p.value),1)]))),128)),n(B).cards.priorConditions.items.length===0?(a(),o("li",Ec," No records. ")):P("",!0)]),e("div",Cc,l(n(B).cards.priorConditions.createdByLine),1)]),e("div",Ic,[s[178]||(s[178]=e("div",{class:"sample-card-title"},"Last Meal",-1)),s[179]||(s[179]=e("div",{class:"sample-card-divider"},null,-1)),e("ul",Pc,[(a(!0),o(S,null,N(n(B).cards.lastMeal.items,(p,g)=>(a(),o("li",{key:g},[e("span",Tc,l(p.title)+":",1),e("span",Lc,l(p.value),1)]))),128)),n(B).cards.lastMeal.items.length===0?(a(),o("li",Oc," No records. ")):P("",!0)]),e("div",Rc,l(n(B).cards.lastMeal.createdByLine),1)])])):(a(),o("div",Zr," No SAMPLE history records found. "))])):E.id==="secondary_survey"?(a(),o("div",Mc,[n(fe)?(a(),o("div",Hc,[e("div",Bc,[(a(!0),o(S,null,N(n(fe).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",Fc,l(g),1),e("ul",$c,[(a(!0),o(S,null,N(p,(F,J)=>(a(),o("li",{key:J,class:"observation-row"},[e("span",zc,l(F.title),1),e("span",Gc,l(F.value),1)]))),128))])]))),128))]),e("div",Vc,l(n(fe).createdByLine),1)])):(a(),o("div",Dc," No secondary survey records found. "))])):E.id==="diagnosis"?(a(),o("div",Uc,[n(Re)?(a(),o("div",Yc,[(a(!0),o(S,null,N(n(Re).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",qc,l(g),1),e("ul",Wc,[(a(!0),o(S,null,N(p,(F,J)=>(a(),o("li",{key:J,class:"observation-row"},[e("span",Kc,l(F.title),1),e("span",Xc,l(F.value),1)]))),128))])]))),128)),e("div",Zc,l(n(Re).createdByLine),1)])):(a(),o("div",jc," No diagnosis records found. "))])):E.id==="investigations"?(a(),o("div",Jc,[n(se)?(a(),o("div",ed,[n(se).cards.labOrdersPlan.items.length?(a(),o("div",td,[s[180]||(s[180]=e("div",{class:"pm-card-title"},"Lab Orders Plan",-1)),s[181]||(s[181]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",sd,[(a(!0),o(S,null,N(n(se).cards.labOrdersPlan.items,(p,g)=>(a(),o("li",{key:g},[e("span",id,l(p.title)+":",1),e("span",nd,l(p.value),1)]))),128))]),e("div",ad,l(n(se).cards.labOrdersPlan.createdByLine),1)])):P("",!0),n(se).cards.bedsidePlan.items.length?(a(),o("div",od,[s[182]||(s[182]=e("div",{class:"pm-card-title"},"Bedside Investigation Plan",-1)),s[183]||(s[183]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",ld,[(a(!0),o(S,null,N(n(se).cards.bedsidePlan.items,(p,g)=>(a(),o("li",{key:g},[e("span",rd,l(p.title)+":",1),e("span",cd,l(p.value),1)]))),128))]),e("div",dd,l(n(se).cards.bedsidePlan.createdByLine),1)])):P("",!0),!n(se).cards.labOrdersPlan.items.length&&!n(se).cards.bedsidePlan.items.length?(a(),o("div",pd," No findings recorded. ")):P("",!0)])):(a(),o("div",Qc," No laboratory / radiology findings found. "))])):E.id==="patient_management"?(a(),o("div",ud,[n(ae)?(a(),o("div",gd,[e("div",vd,[s[184]||(s[184]=e("div",{class:"pm-card-title"},"Non‑Pharmacological",-1)),s[185]||(s[185]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",yd,[(a(!0),o(S,null,N(n(ae).cards.nonPharmacological.items,(p,g)=>(a(),o("li",{key:g},[e("span",bd,l(p.title)+":",1),e("span",fd,l(p.value),1)]))),128)),n(ae).cards.nonPharmacological.items.length===0?(a(),o("li",_d," No records. ")):P("",!0)]),e("div",hd,l(n(ae).cards.nonPharmacological.createdByLine),1)]),e("div",kd,[s[186]||(s[186]=e("div",{class:"pm-card-title"},"Patient Care Area",-1)),s[187]||(s[187]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Sd,[(a(!0),o(S,null,N(n(ae).cards.patientCareArea.items,(p,g)=>(a(),o("li",{key:g},[e("span",xd,l(p.title)+":",1),e("span",wd,l(p.value),1)]))),128)),n(ae).cards.patientCareArea.items.length===0?(a(),o("li",Nd," No records. ")):P("",!0)]),e("div",Ad,l(n(ae).cards.patientCareArea.createdByLine),1)]),e("div",Ed,[s[188]||(s[188]=e("div",{class:"pm-card-title"},"Medications",-1)),s[189]||(s[189]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Cd,[(a(!0),o(S,null,N(n(ae).cards.medications.items,(p,g)=>(a(),o("li",{key:g},[e("span",Id,l(p.title)+":",1),e("span",Pd,l(p.value),1)]))),128)),n(ae).cards.medications.items.length===0?(a(),o("li",Td," No records. ")):P("",!0)]),e("div",Ld,l(n(ae).cards.medications.createdByLine),1)])])):(a(),o("div",md," No patient management plan records found. "))])):E.id==="continuation"?(a(),o("div",Od,[n(_e)?(a(),o("div",Md,[(a(!0),o(S,null,N(n(_e).sections,(p,g)=>(a(),o("div",{key:g,class:"clinical-notes-section-block"},[e("div",Dd,l(g),1),e("ul",Hd,[(a(!0),o(S,null,N(p,(F,J)=>(a(),o("li",{key:J,class:"observation-row"},[e("span",Bd,l(F.title),1),e("span",Fd,l(F.value),1)]))),128))])]))),128)),e("div",$d,l(n(_e).createdByLine),1)])):(a(),o("div",Rd," No continuation notes found. "))])):E.id==="disposition"?(a(),o("div",zd,[n(he)?(a(),o("div",Vd,[e("div",Ud,[s[190]||(s[190]=e("div",{class:"pm-card-title"},"Awaiting Specialty",-1)),s[191]||(s[191]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",jd,[(a(!0),o(S,null,N(n(he).cards.awaitingSpecialty.items,(p,g)=>(a(),o("li",{key:g},[e("span",Yd,l(p.title)+":",1),e("span",qd,l(p.value),1)]))),128)),n(he).cards.awaitingSpecialty.items.length===0?(a(),o("li",Wd," No records. ")):P("",!0)]),e("div",Kd,l(n(he).cards.awaitingSpecialty.createdByLine),1)]),(a(!0),o(S,null,N(n(he).otherCards,p=>(a(),o("div",{key:p.key,class:"pm-card"},[e("div",Xd,l(p.title),1),s[192]||(s[192]=e("div",{class:"pm-card-divider"},null,-1)),e("ul",Zd,[(a(!0),o(S,null,N(p.items,(g,F)=>(a(),o("li",{key:F},[e("span",Jd,l(g.title)+":",1),e("span",Qd,l(g.value),1)]))),128)),p.items.length===0?(a(),o("li",ep,"No records.")):P("",!0)]),e("div",tp,l(p.createdByLine),1)]))),128))])):(a(),o("div",Gd," No disposition notes found. "))])):P("",!0)])],2)],14,El))),128))])):(a(),o("div",wl,[e("div",Nl,[oe(n(pt),{icon:n(Nt),class:"empty-icon"},null,8,["icon"])]),s[131]||(s[131]=e("h3",null,"No Clinical Records Found",-1)),s[132]||(s[132]=e("p",null,"The clinical review workflow has not been started or saved yet.",-1))]))])])):(a(),o("div",sp,"Clinical notes records will appear here."))]),_:1})]),_:1})]))}});export{bp as _};

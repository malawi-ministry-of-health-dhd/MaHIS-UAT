import{d as N,o as k,W as R,q as b,v,t as s,r,u as L,j as u,A as a,B as A,x as m,k as E,z as S,s as O,K as P,f as x}from"../index-CIT-7-LI.js";import{F as T,aA as V}from"./index-a2IQmcsu.js";import{T as $}from"./Toolbar-7Y6Nt4MX.js";import{D as w}from"./Alerts-BzF_5ZgR.js";import{R as G}from"./ReusableDataTable-JB5j_RRQ.js";import{G as U}from"./GoBack-D9lAx6Ob.js";import{l as z}from"./aetc_brought_in_dead_service-Q7JRbxOp.js";import{o as F}from"./workerStore-DUdr34pd.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";const j={class:"bid-list-page"},q={class:"list-toolbar"},H={class:"list-toolbar-primary"},J={key:0,class:"load-error",role:"alert"},M=N({__name:"BroughtDead",setup(W){const d=L(),l=r([]),c=r(!1),o=r(""),p=r(0);let f=null;const y=["First Name","Last Name","Age","National ID","Place of Death","Date of Death","Sex","Brought By","Confirmed By","Confirmation Date","Actions"],D={responsive:!0,ordering:!1,buttons:[],pageLength:10,language:{emptyTable:"No brought in dead records found",zeroRecords:"No matching brought in dead records found"}},h=t=>{if(!t||t==="N/A")return"N/A";const e=new Date(String(t));return Number.isNaN(e.getTime())?String(t):e.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})},_=t=>{const e=JSON.stringify({patientId:t.patientId,patientLookupIds:t.patientLookupIds});return`
        <div class="bid-row-actions">
            <button
                class="btn-table view-profile-btn"
                data-id='${e}'
                title="View death report"
                aria-label="View death report"
            >
                View
            </button>
            <button
                class="btn-table edit-demographics-btn"
                data-id='${e}'
                title="Edit death report"
                aria-label="Edit death report"
            >
                Edit
            </button>
        </div>
    `},B=x(()=>l.value.map(t=>[t.firstName,t.surname,t.age,t.nationalId,t.placeOfDeath,h(t.dateOfDeath),t.gender,t.broughtBy,t.confirmedBy,h(t.dateOfConfirmation),_(t)])),n=async()=>{try{c.value=!0,o.value="",l.value=await z()}catch(t){console.error("Unable to load AETC brought in dead records",t),l.value=[],o.value="Brought in dead records could not be loaded. Check the connection and try again."}finally{p.value+=1,c.value=!1}},I=async()=>{await d.push("/aetc/brought-dead/register")},g=t=>encodeURIComponent(String(t?.patientId||t?.patientLookupIds?.[0]||"")),C={"view-profile-btn":async t=>{const e=g(t);e&&await d.push(`/aetc/brought-dead/${e}/view`)},"edit-demographics-btn":async t=>{const e=g(t);e&&await d.push(`/aetc/brought-dead/${e}/edit`)}},i=()=>void n();return k(async()=>{f=F(()=>void n()),window.addEventListener("online",i),window.addEventListener("offline",i),await n()}),R(()=>{f?.(),window.removeEventListener("online",i),window.removeEventListener("offline",i)}),(t,e)=>(u(),b(s(P),null,{default:v(()=>[a($),a(s(A),{fullscreen:!0},{default:v(()=>[a(U,{title:"Brought In Dead Records"}),m("main",j,[m("div",q,[m("div",H,[a(w,{name:"Register BID",icon:s(T),fill:"solid",color:"success","onClicked:btn":I},null,8,["icon"])]),a(w,{name:"Refresh",icon:s(V),fill:"outline",loading:c.value,"onClicked:btn":n},null,8,["icon","loading"])]),o.value?(u(),E("div",J,S(o.value),1)):O("",!0),(u(),b(G,{key:p.value,headers:y,data:B.value,options:D,actionHandlers:C,containerClass:"bid-table-wrap"},null,8,["data"]))])]),_:1})]),_:1}))}}),rt=K(M,[["__scopeId","data-v-11333708"]]);export{rt as default};

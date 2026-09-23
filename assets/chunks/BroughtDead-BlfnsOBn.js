import{d as k,o as R,W as E,q as b,v as g,t as s,r,u as L,j as u,A as a,B as N,x as p,k as A,z as O,s as P,K as x,f as T}from"../index-B8axcE7A.js";import{F as V,aA as S}from"./index-OBd6-vo9.js";import{T as $}from"./Toolbar-CnkjOOrO.js";import{D as v}from"./Alerts-DfAQSbTl.js";import{R as U}from"./ReusableDataTable-DUy8nw1G.js";import{G as z}from"./GoBack-45baX0N9.js";import{l as F}from"./aetc_brought_in_dead_service-C9ryLFcl.js";import{o as G}from"./workerStore-5LFddciu.js";import{b as w}from"./tableDateTime-Dgwv7PaX.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";const j={class:"bid-list-page"},q={class:"list-toolbar"},H={class:"list-toolbar-primary"},J={key:0,class:"load-error",role:"alert"},M=k({__name:"BroughtDead",setup(W){const l=L(),d=r([]),c=r(!1),o=r(""),f=r(0);let m=null;const _=["First Name","Last Name","Age","National ID","Place of Death","Date of Death","Sex","Brought By","Confirmed By","Confirmation Date","Actions"],y={responsive:!0,ordering:!1,buttons:[],pageLength:10,language:{emptyTable:"No brought in dead records found",zeroRecords:"No matching brought in dead records found"}},D=e=>{const t=JSON.stringify({patientId:e.patientId,patientLookupIds:e.patientLookupIds});return`
        <div class="bid-row-actions">
            <button
                class="btn-table view-profile-btn"
                data-id='${t}'
                title="View death report"
                aria-label="View death report"
            >
                View
            </button>
            <button
                class="btn-table edit-demographics-btn"
                data-id='${t}'
                title="Edit death report"
                aria-label="Edit death report"
            >
                Edit
            </button>
        </div>
    `},B=T(()=>d.value.map(e=>[e.firstName,e.surname,e.age,e.nationalId,e.placeOfDeath,w(e.dateOfDeath),e.gender,e.broughtBy,e.confirmedBy,w(e.dateOfConfirmation),D(e)])),n=async()=>{try{c.value=!0,o.value="",d.value=await F()}catch(e){console.error("Unable to load AETC brought in dead records",e),d.value=[],o.value="Brought in dead records could not be loaded. Check the connection and try again."}finally{f.value+=1,c.value=!1}},I=async()=>{await l.push("/aetc/brought-dead/register")},h=e=>encodeURIComponent(String(e?.patientId||e?.patientLookupIds?.[0]||"")),C={"view-profile-btn":async e=>{const t=h(e);t&&await l.push(`/aetc/brought-dead/${t}/view`)},"edit-demographics-btn":async e=>{const t=h(e);t&&await l.push(`/aetc/brought-dead/${t}/edit`)}},i=()=>void n();return R(async()=>{m=G(()=>void n()),window.addEventListener("online",i),window.addEventListener("offline",i),await n()}),E(()=>{m?.(),window.removeEventListener("online",i),window.removeEventListener("offline",i)}),(e,t)=>(u(),b(s(x),null,{default:g(()=>[a($),a(s(N),{fullscreen:!0},{default:g(()=>[a(z,{title:"Brought In Dead Records"}),p("main",j,[p("div",q,[p("div",H,[a(v,{name:"Register BID",icon:s(V),fill:"solid",color:"success","onClicked:btn":I},null,8,["icon"])]),a(v,{name:"Refresh",icon:s(S),fill:"outline",loading:c.value,"onClicked:btn":n},null,8,["icon","loading"])]),o.value?(u(),A("div",J,O(o.value),1)):P("",!0),(u(),b(U,{key:f.value,headers:_,data:B.value,options:y,actionHandlers:C,containerClass:"bid-table-wrap"},null,8,["data"]))])]),_:1})]),_:1}))}}),le=K(M,[["__scopeId","data-v-51c106f1"]]);export{le as default};

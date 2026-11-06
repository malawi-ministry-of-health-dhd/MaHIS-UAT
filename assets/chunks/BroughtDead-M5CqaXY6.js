import{d as k,k as R,X as E,A as b,C as g,u as s,i as r,g as N,o as u,B as a,E as L,a as p,c as A,t as O,e as P,N as T,f as V}from"../index-Cqy-hc6f.js";import{G as x,aG as S}from"./index-DeFNm7HQ.js";import{T as G}from"./Toolbar-hLWJG15b.js";import{D as v}from"./Alerts-CbcuaCLX.js";import{R as $}from"./ReusableDataTable-DQ6HyRzA.js";import{G as U}from"./GoBack-BynRLVaJ.js";import{l as z}from"./aetc_brought_in_dead_service-SsJ_uttS.js";import{o as F}from"./workerStore-C9iELMdc.js";import{b as w}from"./tableDateTime-Dgwv7PaX.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";const J={class:"bid-list-page"},K={class:"list-toolbar"},M={class:"list-toolbar-primary"},X={key:0,class:"load-error",role:"alert"},j=k({__name:"BroughtDead",setup(q){const l=N(),d=r([]),c=r(!1),o=r(""),f=r(0);let m=null;const _=["First Name","Last Name","Age","National ID","Place of Death","Date of Death","Sex","Brought By","Confirmed By","Confirmation Date","Actions"],y={responsive:!0,ordering:!1,buttons:[],pageLength:10,language:{emptyTable:"No brought in dead records found",zeroRecords:"No matching brought in dead records found"}},D=e=>{const t=JSON.stringify({patientId:e.patientId,patientLookupIds:e.patientLookupIds});return`
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
    `},B=V(()=>d.value.map(e=>[e.firstName,e.surname,e.age,e.nationalId,e.placeOfDeath,w(e.dateOfDeath),e.gender,e.broughtBy,e.confirmedBy,w(e.dateOfConfirmation),D(e)])),n=async()=>{try{c.value=!0,o.value="",d.value=await z()}catch(e){console.error("Unable to load AETC brought in dead records",e),d.value=[],o.value="Brought in dead records could not be loaded. Check the connection and try again."}finally{f.value+=1,c.value=!1}},I=async()=>{await l.push("/aetc/brought-dead/register")},h=e=>encodeURIComponent(String(e?.patientId||e?.patientLookupIds?.[0]||"")),C={"view-profile-btn":async e=>{const t=h(e);t&&await l.push(`/aetc/brought-dead/${t}/view`)},"edit-demographics-btn":async e=>{const t=h(e);t&&await l.push(`/aetc/brought-dead/${t}/edit`)}},i=()=>void n();return R(async()=>{m=F(()=>void n()),window.addEventListener("online",i),window.addEventListener("offline",i),await n()}),E(()=>{m?.(),window.removeEventListener("online",i),window.removeEventListener("offline",i)}),(e,t)=>(u(),b(s(T),null,{default:g(()=>[a(G),a(s(L),{fullscreen:!0},{default:g(()=>[a(U,{title:"Brought In Dead Records"}),p("main",J,[p("div",K,[p("div",M,[a(v,{name:"Register BID",icon:s(x),fill:"solid",color:"success","onClicked:btn":I},null,8,["icon"])]),a(v,{name:"Refresh",icon:s(S),fill:"outline",loading:c.value,"onClicked:btn":n},null,8,["icon","loading"])]),o.value?(u(),A("div",X,O(o.value),1)):P("",!0),(u(),b($,{key:f.value,headers:_,data:B.value,options:y,actionHandlers:C,containerClass:"bid-table-wrap"},null,8,["data"]))])]),_:1})]),_:1}))}}),le=H(j,[["__scopeId","data-v-9b0c1775"]]);export{le as default};

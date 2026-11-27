import{H as k,S as R,au as E,f as b,l as g,I as s,x as r,Q as L,o as u,k as a,a3 as N,b as p,c as A,t as O,i as P,a5 as x,C as S}from"../index-1dJPXL1s.js";import{aD as T,ah as V}from"./index-Bx111SMv.js";import{T as $}from"./Toolbar-CfWPuoRv.js";import{D as v}from"./Alerts-ft61EleC.js";import{R as U}from"./ReusableDataTable-COIzRslq.js";import{G}from"./GoBack-Ch_MeMih.js";import{l as H}from"./aetc_brought_in_dead_service-DaC5j3az.js";import{c as z}from"./workerStore-C2BVaD-S.js";import{b as w}from"./tableDateTime-DUQRVe0c.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const J={class:"bid-list-page"},K={class:"list-toolbar"},M={class:"list-toolbar-primary"},Q={key:0,class:"load-error",role:"alert"},j=k({__name:"BroughtDead",setup(q){const l=L(),d=r([]),c=r(!1),o=r(""),m=r(0);let f=null;const _=["First Name","Last Name","Age","National ID","Place of Death","Date of Death","Sex","Brought By","Confirmed By","Confirmation Date","Actions"],D={responsive:!0,ordering:!1,buttons:[],pageLength:10,language:{emptyTable:"No patient on list",zeroRecords:"No matching brought in dead records found"}},y=e=>{const t=JSON.stringify({patientId:e.patientId,patientLookupIds:e.patientLookupIds});return`
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
    `},B=S(()=>d.value.map(e=>[e.firstName,e.surname,e.age,e.nationalId,e.placeOfDeath,w(e.dateOfDeath),e.gender,e.broughtBy,e.confirmedBy,w(e.dateOfConfirmation),y(e)])),n=async()=>{try{c.value=!0,o.value="",d.value=await H()}catch(e){console.error("Unable to load AETC brought in dead records",e),d.value=[],o.value="Brought in dead records could not be loaded. Check the connection and try again."}finally{m.value+=1,c.value=!1}},I=async()=>{await l.push("/aetc/brought-dead/register")},h=e=>encodeURIComponent(String(e?.patientId||e?.patientLookupIds?.[0]||"")),C={"view-profile-btn":async e=>{const t=h(e);t&&await l.push(`/aetc/brought-dead/${t}/view`)},"edit-demographics-btn":async e=>{const t=h(e);t&&await l.push(`/aetc/brought-dead/${t}/edit`)}},i=()=>void n();return R(async()=>{f=z(()=>void n()),window.addEventListener("online",i),window.addEventListener("offline",i),await n()}),E(()=>{f?.(),window.removeEventListener("online",i),window.removeEventListener("offline",i)}),(e,t)=>(u(),b(s(x),null,{default:g(()=>[a($),a(s(N),{fullscreen:!0},{default:g(()=>[a(G,{title:"Brought In Dead Records"}),p("main",J,[p("div",K,[p("div",M,[a(v,{name:"Register BID",icon:s(T),fill:"solid",color:"success","onClicked:btn":I},null,8,["icon"])]),a(v,{name:"Refresh",icon:s(V),fill:"outline",loading:c.value,"onClicked:btn":n},null,8,["icon","loading"])]),o.value?(u(),A("div",Q,O(o.value),1)):P("",!0),(u(),b(U,{key:m.value,headers:_,data:B.value,options:D,actionHandlers:C,containerClass:"bid-table-wrap"},null,8,["data"]))])]),_:1})]),_:1}))}}),le=F(j,[["__scopeId","data-v-8b9e6e9c"]]);export{le as default};

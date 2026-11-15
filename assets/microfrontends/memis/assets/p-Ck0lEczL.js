import { bO as H, bP as l, bQ as t, bR as P, bS as c } from './breadCrumb.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const n=()=>{const n=window;n.addEventListener("statusTap",(()=>{H((()=>{const o=document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(!o)return;const i=l(o);i&&new Promise((o=>t(i,o))).then((()=>{P((async()=>{i.style.setProperty("--overflow","hidden"),await c(i,300),i.style.removeProperty("--overflow");}));}));}));}));};

export { n as startStatusTap };

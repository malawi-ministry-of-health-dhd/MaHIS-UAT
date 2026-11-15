import { b$ as I, b_ as r } from './breadCrumb.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=(i,r$1)=>{var a,n,e;const s="40px",c="back"===r$1.direction,l=r$1.leavingEl,p=I(r$1.enteringEl),b=p.querySelector("ion-toolbar"),u=r();if(u.addElement(p).fill("both").beforeRemoveClass("ion-page-invisible"),c?u.duration((null!==(a=r$1.duration)&&void 0!==a?a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):u.duration((null!==(n=r$1.duration)&&void 0!==n?n:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${s})`,"translateY(0px)").fromTo("opacity",.01,1),b){const t=r();t.addElement(b),u.addAnimation(t);}if(l&&c){u.duration((null!==(e=r$1.duration)&&void 0!==e?e:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const i=r();i.addElement(I(l)).onFinish((o=>{1===o&&i.elements.length>0&&i.elements[0].style.setProperty("display","none");})).fromTo("transform","translateY(0px)",`translateY(${s})`).fromTo("opacity",1,0),u.addAnimation(i);}return u};

export { i as mdTransitionAnimation };

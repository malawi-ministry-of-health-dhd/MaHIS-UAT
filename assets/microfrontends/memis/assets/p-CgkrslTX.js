import { bJ as o, bK as n, bL as v } from './breadCrumb.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=(s,e,n$1,a,c)=>{const i=s.ownerDocument.defaultView;let p=o(s);const m=t=>p?-t.deltaX:t.deltaX;return n({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(p=o(s),(t=>{const{startX:o}=t;return p?o>=i.innerWidth-50:o<=50})(t)&&e()),onStart:n$1,onMove:t=>{const o=m(t);a(o/i.innerWidth);},onEnd:o=>{const r=m(o),s=i.innerWidth,e=r/s,n=(t=>p?-t.velocityX:t.velocityX)(o),a=n>=0&&(n>.2||r>s/2),f=(a?1-e:e)*s;let u=0;if(f>5){const t=f/Math.abs(n);u=Math.min(t,540);}c(a,e<=0?.01:v(0,e,.9999),u);}})};

export { s as createSwipeBackGesture };

import{p as h,O as y,f as V,j as g,X as P,s as B,a as u,u as S,l as t,Y as p,q as F,e as n,H as I,J as R,D as w,n as x,t as k,a2 as z}from"./index-tVFnhngH.js";import{I as M,E as T,V as r,M as D}from"./VImg-CqzECyj5.js";const E=h({app:Boolean,appear:Boolean,extended:Boolean,location:{type:String,default:"bottom end"},offset:Boolean,modelValue:{type:Boolean,default:!0},...y(M({active:!0}),["location"]),...V(),...T({transition:"fab-transition"})},"VFab"),O=g()({name:"VFab",props:E(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:c}=f;const d=P(e,"modelValue"),s=B(56),l=u(),{resizeRef:v}=S(a=>{a.length&&(s.value=a[0].target.clientHeight)}),o=t(()=>e.app||e.absolute),i=t(()=>o.value?e.location.split(" ").shift():!1),m=t(()=>o.value?e.location.split(" ")[1]??"end":!1);p(()=>e.app,()=>{const a=x({id:e.name,order:t(()=>parseInt(e.order,10)),position:i,layoutSize:s,elementSize:t(()=>s.value+32),active:t(()=>e.app&&d.value),absolute:k(e,"absolute")});z(()=>{l.value=a.layoutItemStyles.value})});const b=u();return F(()=>{const a=r.filterProps(e);return n("div",{ref:b,class:["v-fab",{"v-fab--absolute":e.absolute,"v-fab--app":!!e.app,"v-fab--extended":e.extended,"v-fab--offset":e.offset,[`v-fab--${i.value}`]:o.value,[`v-fab--${m.value}`]:o.value},e.class],style:[e.app?{...l.value}:{height:"inherit",width:void 0},e.style]},[n("div",{class:"v-fab__container"},[n(D,{appear:e.appear,transition:e.transition},{default:()=>[I(n(r,w({ref:v},a,{active:void 0,location:void 0}),c),[[R,e.active]])]})])])}),{}}});export{O as V};

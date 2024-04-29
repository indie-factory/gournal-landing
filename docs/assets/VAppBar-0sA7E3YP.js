import{x as L,m as U,a as D,b as F,u as M,c as q,d as z,e as Y,n as j,p as C}from"./VImg-CqzECyj5.js";import{p,m as R,h as E,j as _,q as w,e as s,i as G,t as I,k as O,U as Q,s as S,l as i,L as X,v as k,a as H,Q as P,P as $,R as J,a1 as K,f as W,X as Z,Y as ee,G as te,n as ae,D as le,a2 as oe}from"./index-tVFnhngH.js";import{a as ne}from"./VTextField-BDNSIpOp.js";const he=L("v-spacer","div","VSpacer"),se=p({text:String,...R(),...E()},"VToolbarTitle"),re=_()({name:"VToolbarTitle",props:se(),setup(e,m){let{slots:t}=m;return w(()=>{const u=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[u&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),ie=[null,"prominent","default","comfortable","compact"],A=p({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ie.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...U(),...R(),...D(),...F(),...E({tag:"header"}),...G()},"VToolbar"),N=_()({name:"VToolbar",props:A(),setup(e,m){var n;let{slots:t}=m;const{backgroundColorClasses:u,backgroundColorStyles:o}=M(I(e,"color")),{borderClasses:a}=q(e),{elevationClasses:d}=z(e),{roundedClasses:v}=Y(e),{themeClasses:g}=O(e),{rtlClasses:h}=Q(),r=S(!!(e.extended||(n=t.extension)!=null&&n.call(t))),f=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=i(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return X({VBtn:{variant:"text"}}),w(()=>{var l;const b=!!(e.title||t.title),T=!!(t.image||e.image),B=(l=t.extension)==null?void 0:l.call(t);return r.value=!!(e.extended||B),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,a.value,d.value,v.value,g.value,h.value,e.class],style:[o.value,e.style]},{default:()=>[T&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(j,{key:"image-img",cover:!0,src:e.image},null)]),s(C,{defaults:{VTabs:{height:k(f.value)}}},{default:()=>{var y,x,V;return[s("div",{class:"v-toolbar__content",style:{height:k(f.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(y=t.prepend)==null?void 0:y.call(t)]),b&&s(re,{key:"title",text:e.title},{text:t.title}),(x=t.default)==null?void 0:x.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(V=t.append)==null?void 0:V.call(t)])])]}}),s(C,{defaults:{VTabs:{height:k(c.value)}}},{default:()=>[s(ne,null,{default:()=>[r.value&&s("div",{class:"v-toolbar__extension",style:{height:k(c.value)}},[B])]})]})]})}),{contentHeight:f,extensionHeight:c}}}),ue=p({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ce(e){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=m;let u=0;const o=H(null),a=S(0),d=S(0),v=S(0),g=S(!1),h=S(!1),r=i(()=>Number(e.scrollThreshold)),f=i(()=>K((r.value-a.value)/r.value||0)),c=()=>{const n=o.value;!n||t&&!t.value||(u=a.value,a.value="window"in n?n.pageYOffset:n.scrollTop,h.value=a.value<u,v.value=Math.abs(a.value-r.value))};return P(h,()=>{d.value=d.value||a.value}),P(g,()=>{d.value=0}),$(()=>{P(()=>e.scrollTarget,n=>{var T;const b=n?document.querySelector(n):window;b&&b!==o.value&&((T=o.value)==null||T.removeEventListener("scroll",c),o.value=b,o.value.addEventListener("scroll",c,{passive:!0}))},{immediate:!0})}),J(()=>{var n;(n=o.value)==null||n.removeEventListener("scroll",c)}),t&&P(t,c,{immediate:!0}),{scrollThreshold:r,currentScroll:a,currentThreshold:v,isScrollActive:g,scrollRatio:f,isScrollingUp:h,savedScroll:d}}const ve=p({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...A(),...W(),...ue(),height:{type:[Number,String],default:64}},"VAppBar"),fe=_()({name:"VAppBar",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:t}=m;const u=H(),o=Z(e,"modelValue"),a=i(()=>{var y;const l=new Set(((y=e.scrollBehavior)==null?void 0:y.split(" "))??[]);return{hide:l.has("hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),d=i(()=>{const l=a.value;return l.hide||l.inverted||l.collapse||l.elevate||l.fadeImage||!o.value}),{currentScroll:v,scrollThreshold:g,isScrollingUp:h,scrollRatio:r}=ce(e,{canScroll:d}),f=i(()=>e.collapse||a.value.collapse&&(a.value.inverted?r.value>0:r.value===0)),c=i(()=>e.flat||a.value.elevate&&(a.value.inverted?v.value>0:v.value===0)),n=i(()=>a.value.fadeImage?a.value.inverted?1-r.value:r.value:void 0),b=i(()=>{var x,V;if(a.value.hide&&a.value.inverted)return 0;const l=((x=u.value)==null?void 0:x.contentHeight)??0,y=((V=u.value)==null?void 0:V.extensionHeight)??0;return l+y});ee(i(()=>!!e.scrollBehavior),()=>{oe(()=>{a.value.hide?a.value.inverted?o.value=v.value>g.value:o.value=h.value||v.value<g.value:o.value=!0})});const{ssrBootStyles:T}=te(),{layoutItemStyles:B}=ae({id:e.name,order:i(()=>parseInt(e.order,10)),position:I(e,"location"),layoutSize:b,elementSize:S(void 0),active:o,absolute:I(e,"absolute")});return w(()=>{const l=N.filterProps(e);return s(N,le({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":n.value,height:void 0,...T.value},e.style]},l,{collapse:f.value,flat:c.value}),t)}),{}}});export{he as V,fe as a,re as b,se as m};

import{v as f,h as n,x as v,y as x,A as d,g as r,d as p,f as b}from"./vuetify-BSzJFLH5.js";import{j as _,o as u,c as h,a as i,e as g,_ as t,Z as c,t as s,b as V,F as y,q as C,f as e,u as k}from"./@vue-BCi2DSPG.js";import{d as S}from"./dayjs-B2CR7XcO.js";import{g as w}from"./index-BGyg5uf-.js";import"./@toast-ui-ByfNNsDZ.js";import"./prosemirror-model-DfrscQcC.js";import"./orderedmap-C4TimWWB.js";import"./prosemirror-view-C8GFL5qc.js";import"./prosemirror-state-QVoFbwxj.js";import"./prosemirror-transform-Cg2yShc_.js";import"./prosemirror-keymap-C5wSqEO9.js";import"./w3c-keyname-DEtA-KhA.js";import"./prosemirror-commands-DBoMJ0a0.js";import"./prosemirror-inputrules-COeJEC4j.js";import"./prosemirror-history-KEdM-JI1.js";import"./rope-sequence-Cxv9J64N.js";/* empty css             */import"./@date-io-BFoq4MFi.js";import"./vue-router-Iii3SGC6.js";import"./axios-Cm0UX6qg.js";const B={class:"mb-2"},D={class:"text-subtitle-1 bold text-grey ml-1"},I={class:"text-sm-h6 ml-1"},N=_({__name:"FormText",props:{prependIcon:{default:"",type:String},title:{default:"",type:String},value:{default:"",type:String}},setup(a){return(l,m)=>(u(),h(y,null,[i("div",B,[a.prependIcon?(u(),g(f,{key:0,class:"mb-1",color:"info"},{default:t(()=>[c(s(a.prependIcon),1)]),_:1})):V("",!0),i("span",D,s(a.title),1)]),i("div",I,s(a.value),1)],64))}}),X=_({__name:"Setting",setup(a){const l=C(w());function m(){window.open(`https://github.com/${l.value.username}`,"_blank")}return(T,Y)=>{const o=N;return u(),g(b,{class:"h-100"},{default:t(()=>[e(r,null,{default:t(()=>[e(n,null,{default:t(()=>[e(v,{class:"pa-3 rounded-lg",variant:"elevated",color:"secondary"},{default:t(()=>[e(x,{class:"mb-3"},{default:t(()=>[e(f,{color:"info",class:"mb-1"},{default:t(()=>[c("mdi-account")]),_:1}),c(" Profile ")]),_:1}),e(d,null,{default:t(()=>[e(r,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{title:"Username",value:l.value.username,"prepend-icon":"mdi-calendar-range"},null,8,["value"])]),_:1}),e(n,null,{default:t(()=>[e(o,{title:"Email",value:l.value.email,"prepend-icon":"mdi-email"},null,8,["value"])]),_:1}),e(n,null,{default:t(()=>[e(o,{title:"Signup Date",value:k(S)(l.value.createdAt).format("YYYY-MM-DD"),"prepend-icon":"mdi-calendar-range"},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(p,{text:"GitHub","prepend-icon":"mdi-github",class:"text-none mr-2",onClick:m,color:"info"})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(n,null,{default:t(()=>[e(p,{text:"Delete Account","prepend-icon":"mdi-trash-can-outline",class:"text-none",color:"warning"})]),_:1})]),_:1})]),_:1})}}});export{X as default};

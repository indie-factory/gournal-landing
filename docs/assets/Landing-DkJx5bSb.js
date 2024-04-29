import{j as V}from"./jsonp-KpewqY_V.js";import{d as G,a as z,Q as i,V as h,c as e,R as d,S as o,W as t,O as s,X as p,F as x,Y as y,P as A}from"./@vue-D2tTWFBi.js";import{b as B,d as F,e as S,f,g,h as u,i as m,j as w,k as _,l as Z,m as j,u as q,a as E,V as R}from"./vuetify-BAfO4iES.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./copy-to-clipboard-gvHgSpPc.js";import"./toggle-selection-BHUZwh74.js";import"./debug-C-siL6uO.js";import"./ms-nT7xfLs5.js";const W={class:"d-flex ga-5 flex-1-1-auto flex-wrap justify-end px-4",style:{position:"fixed",width:"800px",height:"60px",bottom:"40px",right:"40px"}},P="https://indie-factory.us22.list-manage.com/subscribe/post?u=a2cdb9bd0c43dc67dd013ed37&amp;id=7e1270df03&amp;f_id=00c9cae1f0",D=G({__name:"RegisterEmail",setup(c){const l=z("");async function a(){V(P+`&EMAIL=${l.value}`,{param:"c"},(r,n)=>{r||n&&n.result==="error"?console.error(n):(alert("성공"),l.value="",console.log(n))})}return(r,n)=>(i(),h("div",W,[e(B,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=b=>l.value=b),"hide-details":"",label:"@Email",rounded:"","single-line":"",style:{"min-width":"300px","max-width":"300px"},variant:"solo-filled","bg-color":"warning"},null,8,["modelValue"]),e(F,{color:"warning",height:"55","max-height":"55","max-width":"200",rounded:"",text:"🤞3개월 할인 혜택 받기",onClick:a})]))}}),O={},T={class:"text-body-1"},I=t("span",{class:"d-none d-sm-inline-block"},"Indie Factory",-1);function N(c,l){return i(),d(S,{class:"pa-8",color:"secondary"},{default:o(()=>[t("div",T,[s(" © 2024-"+p(new Date().getFullYear())+" ",1),I])]),_:1})}const Q=C(O,[["render",N]]),Y=t("div",{class:"text-h4 font-weight-medium pt-15"}," ⁉️Frequently Asked Questions ",-1),H={class:"text-h6 font-weight-bold text-blue-grey-darken-2"},U=["innerHTML"],J={__name:"FAQSection",setup(c){const l=[{question:"Gournal이 무엇인가요?",answer:"✅ Github Repository의 Commit을 기반으로 일기를 작성하는 서비스입니다."},{question:"무료인가요?",answer:"✅ 베타 기간 동안 무료로 제공할 예정입니다.<br/>✅ 5월 중 오픈 후 베타 기간은 약 3개월 지속될 예정입니다."},{question:"내가 작성한 일기를 다른 사람이 볼 수 있나요?",answer:"✅ 아니요. Gournal 기본적으로 비공개 글쓰기 서비스입니다.<br/>✅ Gournal 개발자의 일기는 읽어볼 수 있어요."},{question:"일기 쓰기 Editor에 어떤 기능을 지원하나요?",answer:"✅ Markdown 문법으로 일기를 작성할 수 있습니다. <br/>✅ Markdown 문법에 따라 작성된 글은 실시간으로 style이 반영됩니다."},{question:"일기 쓰기 외 어떤 기능이 지원되나요?",answer:"✅ 베타 버전은 Github Commit 기반 일기 쓰기만 제공됩니다. <br/>✅ 정식 출시 후 일기 모아 보기, 일기 잔디 심기 등 여러 기능이 제공될 예정입니다."},{question:"더 궁금한 것이 있어요.",answer:'✅ <a href="mailto:support@gournal.me">support@gournal.me</a> 으로 질문해주세요!'}];return(a,r)=>(i(),d(m,{class:"text-center","min-height":"700",color:"primary"},{default:o(()=>[Y,e(f,null,{default:o(()=>[e(g,{class:"pa-10 text-left"},{default:o(()=>[(i(),h(x,null,y(l,n=>e(u,{key:n.question,class:"pa-10",cols:"12",md:"6"},{default:o(()=>[t("div",H,p(n.question),1),t("div",{class:"text-body-1 text-medium-emphasis mt-5",innerHTML:n.answer},null,8,U)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}},K="/gournal-landing/assets/code.png",X={},t1=t("div",{class:"text-h4 font-weight-bold ma-5 text-center"}," 🤞Benefit ",-1),e1=t("div",{class:"text-h6 font-weight-light mb-5 text-center"},[t("span",{class:"font-weight-bold",style:{color:"#03C75A"}},"네"),t("span",{class:"font-weight-bold",style:{color:"#FEE500"}},"카"),t("span",{class:"font-weight-bold",style:{color:"#06C755"}},"라"),t("span",{class:"font-weight-bold",style:{color:"#945226"}},"쿠"),t("span",{class:"font-weight-bold",style:{color:"#2AC1BC"}},"배"),s(" 개발자의 CODE와 일기를 볼 수 있는 기회!!! ")],-1),o1=t("div",{class:"text-body-1 text-medium-emphasis my-5"},[s(" ✅ Gournal Github Repository의 읽기 권한이 부여됩니다. (베타 기간 후 정식 출시 후 제공) "),t("br"),t("br"),t("br"),s(" ✅ Gournal 개발자의 Gournal 일기를 읽을 수 있습니다. (베타 기간 후 정식 출시 후 제공) "),t("br"),t("br"),t("br"),s(" ✅ Gournal Code를 읽고 궁금한 점을 저에게 질문할 수 있어요. "),t("br"),t("br"),t("br"),s(" ✅ Gournal 업데이트 사항을 Code로 확인할 수 있습니다. "),t("br"),t("br"),t("br"),s(" ✅ Gournal과 함께 성장하세요. "),t("br"),t("br")],-1);function n1(c,l){return i(),d(m,{class:"py-16 d-flex flex-column",color:"secondary"},{default:o(()=>[t1,e1,e(f,null,{default:o(()=>[e(g,null,{default:o(()=>[e(u,{cols:"12",md:"5"},{default:o(()=>[e(w,{src:K})]),_:1}),e(u,{cols:"12",md:"7"},{default:o(()=>[o1]),_:1})]),_:1})]),_:1})]),_:1})}const s1=C(X,[["render",n1]]),l1="/gournal-landing/assets/journal.png",i1={},c1=t("div",{class:"text-h4 font-weight-bold ma-5 text-center"}," 🧑‍💻 Gournal 개발자 이야기 ",-1),r1={class:"text-body-1 text-medium-emphasis my-5 align-center"},a1=t("br",null,null,-1),d1=t("br",null,null,-1),_1=t("h3",null,'"설명할 수 없다면, 아는 게 아니다."',-1),u1=t("br",null,null,-1),p1=t("br",null,null,-1),h1=t("br",null,null,-1),m1=t("br",null,null,-1),C1=t("br",null,null,-1),f1=t("br",null,null,-1),g1=t("br",null,null,-1),b1=t("br",null,null,-1),x1=t("br",null,null,-1),w1=t("br",null,null,-1),y1=t("br",null,null,-1);function L1(c,l){return i(),d(m,{class:"py-16 d-flex flex-column",color:"primary"},{default:o(()=>[c1,e(f,null,{default:o(()=>[e(g,null,{default:o(()=>[e(u,{cols:"12",md:"7"},{default:o(()=>[t("div",r1,[s(" Gournal 개발자인 저는 네카라쿠배 중 3개 회사를 다녔습니다. 어느 날 아는 선배가 저에게 이런 말을 합니다. "),a1,d1,_1,u1,e(_,{color:"accent",icon:"mdi-check-bold",size:"15",start:""}),s(" 저는 지식이 단순히 읽으면 아는 줄 알았습니다. 선배 말을 듣고 누군가를 가르친다는 생각으로 글을 쓰기 시작했습니다."),p1,e(_,{color:"accent",icon:"mdi-check-bold",size:"15",start:""}),s(" 글과 코드를 읽을 때도 누군가에게 설명한다는 생각으로 읽었어요."),h1,m1,e(_,{color:"accent",icon:"mdi-check-bold",size:"15",start:""}),s(" 지식을 단순 읽기(input)로 끝내지 않고, 글쓰기(output)를 시작했어요. 자연스럽게 내 지식을 누군가에게 설명을 잘하게 됐어요."),C1,e(_,{color:"accent",icon:"mdi-check-bold",size:"15",start:""}),s(" 글쓰기를 통해 저는 꽤 많은 성장을 했다고 생각해요."),f1,g1,e(_,{color:"accent",icon:"mdi-check-bold",size:"15",start:""}),s(" 글을 쓰다 보면 생각만 했던 것보다 훨씬 다양한 생각이 출력돼요. 지식을 글로 쓴다는 것만으로, 성장하는 개발자가 될 거라고 생각해요."),b1,x1,e(_,{color:"accent",icon:"mdi-check-bold",size:"15",start:""}),s(" 이 글을 읽는 대부분은 개발자분들이기 때문에 아마 글을 코드로 대입하면 더 이해가 쉬울 거에요."),w1,s(" 코드를 읽는 것만으로 코드 작성을 잘하게 될까요? 코드 작성을 잘하고 싶다면 읽는 것도 중요해요. 하지만 코드 작성은 더 중요합니다."),y1])]),_:1}),e(u,{cols:"12",md:"5"},{default:o(()=>[e(w,{src:l1})]),_:1})]),_:1})]),_:1})]),_:1})}const $1=C(i1,[["render",L1]]),v1=t("div",{class:"text-h4 font-weight-bold"}," 📈 Gournal을 통한 성장 ",-1),M1=t("br",null,null,-1),k1=t("br",null,null,-1),V1=["src"],G1={class:"text-h6 mt-1"},z1={class:"text-body-1 mt-2 text-medium-emphasis w-80 text-left"},A1=t("br",null,null,-1),B1={__name:"WhatWeDoSection",setup(c){const l=[{icon:"./assets/what/code-journal.png",title:"Code 일기",description1:"✅ Github Commit 기반으로 일기를 작성해보세요.",description2:"✅ 나의 생각이 담긴 일기를 쓰는 것으로 충분해요."},{icon:"./assets/what/growth.png",title:"성장",description1:"✅ 개발자 성장은 Code 작성만으로 부족해요.",description2:"✅ 일기를 통해 얼마나 성장했는지 확인하세요."},{icon:"./assets/what/retrospective.png",title:"회고",description1:"✅ 성장 스토리가 담긴 일기를 주기적으로 되돌아보세요.",description2:"✅ 주기적인 회고를 할 수 있게 도와드릴게요."},{icon:"./assets/what/journal-grass.png",title:"일기 잔디",description1:"✅ 일기를 작성하면 일기 잔디를 심을 수 있어요.",description2:"✅ 1일 1 커밋과 함께 1일 1 Gournal도 시작해보세요."},{icon:"./assets/what/repository-book.png",title:"Repository BOOK",description1:"✅ Code의 추억을 담는 그릇 Gournal을 작성 해보세요.",description2:"✅ 일기는 Repository 기준으로 모아 책이돼요."},{icon:"./assets/what/markdown.png",title:"Markdown",description1:"✅ 글쓰기에 부담 가질 필요 없어요.",description2:"✅ Markdown 문법으로 일기를 작성해보세요."}];return(a,r)=>(i(),d(m,{id:"about",class:"py-16 text-center",color:"secondary"},{default:o(()=>[v1,M1,k1,e(f,null,{default:o(()=>[e(g,null,{default:o(()=>[(i(),h(x,null,y(l,n=>e(u,{key:n.title,class:"d-flex flex-column align-center",cols:"12",md:"4"},{default:o(()=>[t("img",{src:n.icon,width:"75"},null,8,V1),t("div",G1,p(n.title),1),t("div",z1,[s(p(n.description1)+" ",1),A1,s(" "+p(n.description2),1)])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}},F1="/gournal-landing/assets/journal.webp",S1={},Z1=t("div",{class:"text-h3 font-weight-medium mb-5 mt-10"}," Write Code, Write Journal. ",-1),j1=t("div",{class:"text-h6 font-weight-light",style:{"max-width":"468px"}}," Github Commit을 기반으로 일기를 작성해보세요. ",-1);function q1(c,l){return i(),d(m,{id:"home",class:"d-flex justify-center align-center text-center flex-column",color:"info","min-height":"600"},{default:o(()=>[Z1,j1,e(w,{src:F1,width:"50%","min-width":"400"})]),_:1})}const E1=C(S1,[["render",q1]]),R1={class:"logo"},W1=t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"50",zoomAndPan:"magnify",viewBox:"0 0 37.5 37.499999",height:"50",preserveAspectRatio:"xMidYMid meet",version:"1.0"},[t("defs",null,[t("g"),t("clipPath",{id:"2babcd00a0"},[t("path",{d:"M 3.699219 3.699219 L 32.472656 3.699219 L 32.472656 32.472656 L 3.699219 32.472656 Z M 3.699219 3.699219 ","clip-rule":"nonzero"})]),t("clipPath",{id:"e5ef5e113a"},[t("path",{d:"M 18.085938 3.699219 C 10.140625 3.699219 3.699219 10.140625 3.699219 18.085938 C 3.699219 26.035156 10.140625 32.472656 18.085938 32.472656 C 26.035156 32.472656 32.472656 26.035156 32.472656 18.085938 C 32.472656 10.140625 26.035156 3.699219 18.085938 3.699219 Z M 18.085938 3.699219 ","clip-rule":"nonzero"})]),t("clipPath",{id:"c3bf2e7d37"},[t("path",{d:"M 11 6 L 27 6 L 27 31 L 11 31 Z M 11 6 ","clip-rule":"nonzero"})]),t("clipPath",{id:"f972390a0d"},[t("path",{d:"M 7.964844 11.734375 L 26.574219 6.835938 L 31.472656 25.445312 L 12.863281 30.34375 Z M 7.964844 11.734375 ","clip-rule":"nonzero"})]),t("clipPath",{id:"0a957ef88b"},[t("path",{d:"M 7.964844 11.734375 L 26.574219 6.835938 L 31.472656 25.445312 L 12.863281 30.34375 Z M 7.964844 11.734375 ","clip-rule":"nonzero"})])]),t("g",{"clip-path":"url(#2babcd00a0)"},[t("g",{"clip-path":"url(#e5ef5e113a)"},[t("path",{fill:"#344955",d:"M 3.699219 3.699219 L 32.472656 3.699219 L 32.472656 32.472656 L 3.699219 32.472656 Z M 3.699219 3.699219 ","fill-opacity":"1","fill-rule":"nonzero"})])]),t("g",{"clip-path":"url(#c3bf2e7d37)"},[t("g",{"clip-path":"url(#f972390a0d)"},[t("g",{"clip-path":"url(#0a957ef88b)"},[t("path",{fill:"#fbf3d5",d:"M 25.75 8.128906 C 26.011719 7.945312 26.386719 7.109375 26.675781 6.816406 C 26.578125 6.867188 25.863281 7.160156 25.457031 7.3125 C 25.046875 7.460938 23.09375 8.46875 22.957031 8.582031 C 22.820312 8.769531 22.222656 9.609375 22.109375 9.679688 C 22.195312 9.578125 22.34375 8.957031 22.320312 8.945312 C 22.257812 8.976562 21.363281 9.644531 21.257812 9.707031 C 21.152344 9.769531 20.957031 10.101562 20.875 10.253906 C 20.792969 10.402344 20.609375 10.714844 20.523438 10.742188 C 20.582031 10.65625 20.753906 10.121094 20.71875 10.011719 C 20.683594 10.039062 19.1875 11.269531 18.9375 11.519531 C 18.6875 11.769531 18.285156 13.09375 18.285156 13.28125 C 18.242188 13.234375 18.207031 12.859375 18.261719 12.699219 C 18.3125 12.542969 18.320312 12.011719 18.363281 11.847656 C 18.3125 11.898438 17.617188 12.535156 17.335938 12.800781 C 17.054688 13.066406 16.996094 13.609375 16.949219 13.972656 C 16.90625 13.941406 16.921875 13.332031 16.949219 13.167969 C 16.890625 13.242188 15.773438 14.765625 15.511719 15.203125 C 15.25 15.640625 15.28125 17.335938 15.285156 17.554688 C 15.132812 17.09375 15.210938 15.730469 15.304688 15.460938 C 15.21875 15.527344 14.339844 16.785156 13.828125 17.578125 C 13.425781 18.445312 13.941406 19.46875 14 19.628906 C 13.894531 19.570312 13.3125 18.421875 13.308594 18.230469 C 13.214844 18.316406 12.71875 19.070312 12.625 19.339844 C 12.527344 19.613281 12.234375 20.191406 12.070312 20.496094 C 12.101562 20.558594 12.574219 21.609375 12.648438 21.90625 C 12.574219 21.890625 12.164062 21.191406 11.984375 20.78125 C 11.769531 22.296875 13.351562 24.707031 13.351562 24.707031 C 13.351562 24.707031 13.355469 24.707031 13.355469 24.707031 L 13.148438 25.574219 C 13.148438 25.574219 12.980469 26.65625 12.917969 27.007812 C 12.855469 27.359375 12.828125 29.03125 12.820312 29.222656 C 12.808594 29.417969 12.8125 30.15625 12.910156 30.15625 C 13.207031 29.886719 13.269531 29.070312 13.285156 28.992188 C 13.300781 28.917969 13.503906 28.503906 13.539062 28.363281 C 13.570312 28.222656 13.785156 28.035156 13.847656 27.863281 C 13.910156 27.691406 13.835938 27.496094 13.789062 27.28125 C 13.753906 26.921875 13.914062 25.707031 13.914062 25.707031 L 14.136719 24.8125 C 14.164062 24.808594 14.1875 24.804688 14.210938 24.792969 C 14.492188 24.699219 15.929688 24.027344 16.15625 23.78125 C 15.910156 23.867188 14.996094 23.898438 14.996094 23.898438 C 14.996094 23.898438 16.140625 23.539062 16.601562 23.300781 C 17.066406 23.058594 17.457031 22.101562 17.621094 21.699219 C 17.785156 21.292969 18.175781 20.425781 18.136719 20.347656 C 18.015625 20.511719 16.375 21.355469 16.246094 21.335938 C 16.503906 21.007812 17.863281 20.277344 18.175781 20.066406 C 18.488281 19.851562 18.75 19.039062 18.828125 18.710938 C 18.738281 18.792969 17.476562 19.242188 17.230469 19.304688 C 17.324219 19.132812 18.839844 18.523438 18.9375 18.417969 C 19.113281 18.125 19.742188 17.074219 19.789062 16.921875 C 19.742188 16.976562 19.195312 17.023438 19.042969 17.019531 C 19.113281 16.886719 19.742188 16.703125 19.949219 16.589844 C 20.226562 16.347656 20.804688 15.253906 20.878906 14.917969 C 20.789062 15.011719 19.734375 15.363281 19.53125 15.402344 C 19.617188 15.191406 21.027344 14.71875 21.097656 14.628906 C 21.339844 14.261719 22.738281 12.449219 22.816406 12.289062 C 22.746094 12.316406 21.875 12.710938 21.722656 12.691406 C 21.871094 12.527344 22.777344 12.167969 23.085938 11.945312 C 23.398438 11.722656 24.433594 10.1875 24.578125 9.910156 C 24.472656 10 22.851562 10.824219 22.699219 10.871094 C 22.976562 10.597656 23.886719 10.042969 24.46875 9.722656 C 25.050781 9.402344 25.515625 8.542969 25.65625 8.339844 C 25.621094 8.410156 24.84375 8.78125 24.707031 8.859375 C 24.757812 8.6875 25.492188 8.3125 25.75 8.128906 Z M 18.917969 13.914062 C 18.382812 14.640625 16.234375 17.851562 15.195312 20.839844 C 14.992188 21.3125 13.910156 23.820312 13.519531 26.417969 L 13.511719 26.414062 C 13.46875 26.707031 13.429688 27.488281 13.417969 27.53125 C 13.402344 27.582031 13.324219 27.785156 13.304688 27.777344 C 13.285156 27.769531 13.269531 27.710938 13.214844 27.5625 C 13.148438 27.386719 13.238281 26.65625 13.273438 26.375 C 13.273438 26.375 13.273438 26.375 13.273438 26.371094 C 13.285156 26.308594 13.289062 26.265625 13.289062 26.265625 C 13.289062 26.265625 13.292969 26.265625 13.296875 26.265625 C 13.402344 25.726562 13.882812 23.324219 14.207031 22.480469 C 14.566406 21.523438 16.347656 17.398438 17.015625 16.289062 C 17.683594 15.175781 20.339844 11.316406 23.652344 9.136719 C 23.371094 9.488281 20.507812 11.765625 18.917969 13.914062 Z M 18.917969 13.914062 ","fill-opacity":"1","fill-rule":"nonzero"})])])]),t("g",{fill:"#fbf3d5","fill-opacity":"1"},[t("g",{transform:"translate(3.700658, 23.472649)"},[t("g",null,[t("path",{d:"M 1.390625 -3.78125 C 1.285156 -3.875 1.222656 -3.945312 1.203125 -4 C 1.179688 -4.050781 1.171875 -4.160156 1.171875 -4.328125 L 1.171875 -5.046875 C 1.171875 -5.210938 1.179688 -5.320312 1.203125 -5.375 C 1.222656 -5.425781 1.285156 -5.503906 1.390625 -5.609375 L 7.546875 -12.015625 C 7.679688 -12.160156 7.765625 -12.226562 7.796875 -12.21875 C 7.828125 -12.207031 7.84375 -12.097656 7.84375 -11.890625 L 7.84375 -10.421875 C 7.84375 -10.316406 7.835938 -10.234375 7.828125 -10.171875 C 7.828125 -10.109375 7.816406 -10.054688 7.796875 -10.015625 C 7.785156 -9.972656 7.757812 -9.925781 7.71875 -9.875 C 7.675781 -9.832031 7.625 -9.773438 7.5625 -9.703125 L 3.03125 -4.953125 C 2.945312 -4.867188 2.90625 -4.796875 2.90625 -4.734375 C 2.914062 -4.671875 2.96875 -4.585938 3.0625 -4.484375 L 7.5625 0.3125 C 7.632812 0.394531 7.6875 0.457031 7.71875 0.5 C 7.757812 0.539062 7.785156 0.582031 7.796875 0.625 C 7.816406 0.675781 7.828125 0.726562 7.828125 0.78125 C 7.835938 0.84375 7.84375 0.925781 7.84375 1.03125 L 7.84375 2.515625 C 7.84375 2.722656 7.828125 2.832031 7.796875 2.84375 C 7.765625 2.851562 7.679688 2.785156 7.546875 2.640625 Z M 1.390625 -3.78125 "})])])]),t("g",{fill:"#fbf3d5","fill-opacity":"1"},[t("g",{transform:"translate(23.947193, 23.472649)"},[t("g",null,[t("path",{d:"M 1.125 2.640625 C 0.988281 2.785156 0.90625 2.851562 0.875 2.84375 C 0.84375 2.832031 0.828125 2.722656 0.828125 2.515625 L 0.828125 1.03125 C 0.828125 0.925781 0.828125 0.84375 0.828125 0.78125 C 0.835938 0.71875 0.847656 0.664062 0.859375 0.625 C 0.878906 0.582031 0.910156 0.535156 0.953125 0.484375 C 0.992188 0.441406 1.046875 0.382812 1.109375 0.3125 L 5.609375 -4.484375 C 5.703125 -4.585938 5.75 -4.671875 5.75 -4.734375 C 5.757812 -4.796875 5.722656 -4.867188 5.640625 -4.953125 L 1.109375 -9.703125 C 1.035156 -9.773438 0.976562 -9.832031 0.9375 -9.875 C 0.90625 -9.925781 0.878906 -9.972656 0.859375 -10.015625 C 0.847656 -10.066406 0.835938 -10.117188 0.828125 -10.171875 C 0.828125 -10.234375 0.828125 -10.316406 0.828125 -10.421875 L 0.828125 -11.890625 C 0.828125 -12.097656 0.84375 -12.207031 0.875 -12.21875 C 0.90625 -12.226562 0.988281 -12.160156 1.125 -12.015625 L 7.28125 -5.609375 C 7.382812 -5.503906 7.445312 -5.425781 7.46875 -5.375 C 7.488281 -5.320312 7.5 -5.210938 7.5 -5.046875 L 7.5 -4.328125 C 7.5 -4.160156 7.488281 -4.050781 7.46875 -4 C 7.445312 -3.945312 7.382812 -3.875 7.28125 -3.78125 Z M 1.125 2.640625 "})])])])],-1),P1={__name:"Logo2",props:{to:{type:String,required:!0}},setup(c){return(l,a)=>{const r=A("router-link");return i(),h("div",R1,[e(r,{to:c.to},{default:o(()=>[W1]),_:1},8,["to"])])}}},D1={},O1={class:"d-inline-flex align-center text-h4 font-weight-bold my-5 text-primary"},T1=t("span",{style:{color:"#344955"}},"GOURNAL",-1);function I1(c,l){const a=P1;return i(),d(j,{color:"secondary"},{title:o(()=>[t("div",O1,[e(a,{class:"pt-2 pr-5",to:"/"}),T1])]),default:o(()=>[e(Z)]),_:1})}const N1=C(D1,[["render",I1]]),e2={__name:"Landing",setup(c){return q().global.name.value="light",(l,a)=>{const r=N1,n=E1,b=B1,L=$1,$=s1,v=J,M=Q,k=D;return i(),h(x,null,[e(E,null,{default:o(()=>[e(r),e(R,null,{default:o(()=>[e(n),e(b),e(L),e($),e(v)]),_:1}),e(M)]),_:1}),e(k)],64)}}};export{e2 as default};

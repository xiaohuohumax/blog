import{w as V,N as g,_ as $}from"./loading-81aca0c2.js";import{_ as G}from"./COver.vue_vue_type_script_setup_true_lang-88ae84f7.js";import{_ as O}from"./CSubTitle.vue_vue_type_script_setup_true_lang-138944eb.js";import{d as D,aq as E,a as _,ai as i,ah as t,ao as e,aw as w,ax as S,aK as F,af as o,ad as l,ag as C,av as K,S as T,al as z,am as r,ap as p,an as f}from"./index-489450fe.js";import{a as P}from"../app.config.292072ac.js";import{N as j,a as H}from"./Grid-f485f261.js";import{N as q,h as v}from"./Space-8907ff94.js";import"./VResizeObserver-028c1bed.js";const J=["href"],M=["src","alt"],Q={size:"small",class:"flex items-center text-xl hover:text-orange-500 dark:hover:text-green-300"},R=["href"],U={size:"small",class:"flex items-center hover:text-orange-500 dark:hover:text-green-300"},W=["href"],X={class:"text-center"},Y={key:1,class:"text-center"},Z=["href"],B=10,ue=D({__name:"PLink",setup(ee){let m=1;const{t:n}=E(),u=_([]),d=V({state:"loading",fail:()=>n("component.cLoading.fail",{name:n("page.link.subtitle")})}),x=_(!1);async function b(c){d.value="loading";const[s,a]=await w(S.qIssuePage({labels:P.label.linkLabel,state:"all",page:c.toString(),per_page:B.toString()}));if(s){d.value="fail";return}(a.data.length==0||a.data.length<B)&&(x.value=!0);const I=a.data.map(N=>{const L=F(N.body);return{...N,anchor:L.length>0?L[0]:null}});u.value.push(...I),d.value="success"}b(m);function y(){const c=u.value.length,s=m+1;b(s).then(()=>{c!=u.value.length&&(m+=s)})}const k=_(null),h=_("loading");async function A(){const[c,s]=await w(S.qIssuePage({labels:P.label.applyLinkLabel,state:"all",page:"1",per_page:"1"}));if(c||s.data.length==0){h.value="fail";return}k.value=s.data[0],h.value="success"}return A(),(c,s)=>(o(),i(e(v),{vertical:""},{default:t(()=>[l(e(O),{context:e(n)("page.link.subtitle")},null,8,["context"]),u.value.length>0?(o(),i(e(j),{key:0,cols:"1 s:2 m:3 l:4 xl:5 2xl:6",responsive:"screen","x-gap":12,"y-gap":12},{default:t(()=>[(o(!0),C(T,null,K(u.value,a=>(o(),i(e(H),{key:a.number},{default:t(()=>[l(e(q),{size:"small",bordered:!1},{default:t(()=>[l(e(v),{class:"h-full"},{default:t(()=>[r("a",{class:"font-bold flex-shrink-0 mt-1",target:"_blank",href:a.user.html_url},[r("img",{class:"w-16 rounded-md mx-auto hover:scale-105 duration-100",src:a.user.avatar_url,alt:a.user.login},null,8,M)],8,J),l(e(v),{size:"small",vertical:"",class:"flex-grow"},{default:t(()=>[r("div",Q,[r("a",{href:a.anchor?a.anchor.href:a.user.html_url,target:"_blank"},f(a.anchor?a.anchor.content:a.title),9,R)]),r("div",U,[r("a",{href:a.user.html_url,target:"_blank"},f(a.user.login),9,W)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):z("",!0),l(e($),{state:e(d)},{fail:t(()=>[r("div",X,[l(e(g),{onClick:y},{default:t(()=>[p(f(e(n)("comment.button.retry")),1)]),_:1})])]),default:t(()=>[x.value?(o(),i(e(G),{key:0,context:e(n)("component.cOver.context")},null,8,["context"])):(o(),C("div",Y,[l(e(g),{onClick:y},{default:t(()=>[p(f(e(n)("comment.button.more")),1)]),_:1})]))]),_:1},8,["state"]),h.value=="success"?(o(),i(e(q),{key:1,size:"small",bordered:!1},{default:t(()=>[r("a",{href:k.value.html_url,target:"_blank"},[l(e(g),{class:"w-full",type:"info"},{default:t(()=>[p(f(e(n)("page.link.gotoApply")),1)]),_:1})],8,Z)]),_:1})):z("",!0)]),_:1}))}});export{ue as default};

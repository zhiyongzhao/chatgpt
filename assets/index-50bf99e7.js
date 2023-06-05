import{_ as S}from"./index-03157d49.js";import{d as R,B as F,g as J,b as M,v as b,r as $,h as N,o as I,c as z,i as t,w as a,j as l,t as h,a3 as B,a2 as m,k as d,l as p,a as k,a4 as P,J as V,E as G,a5 as H,f as K,y as W,a6 as q}from"./index-8b44b1d9.js";import{u as Y}from"./useBasicLayout-938ba7cd.js";import"./_plugin-vue_export-helper-c27b6911.js";function Q(){const f=new Date,i=f.getDate(),r=f.getMonth()+1;return`${f.getFullYear()}-${r}-${i}`}const X={class:"space-y-5 min-h-[200px]"},Z={class:"flex flex-wrap items-center gap-4"},ee={class:"flex flex-wrap items-center gap-4"},te=R({__name:"General",setup(f){const i=F(),r=J(),{isMobile:w}=Y(),c=M(),_=b(()=>i.theme),g=b(()=>r.userInfo),y=$(g.value.avatar??""),C=$(g.value.name??"");$(g.value.description??"");const x=b({get(){return i.language},set(e){i.setLanguage(e)}}),D=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],L=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"},{label:"Русский язык",key:"ru-RU",value:"ru-RU"}];function U(e){r.updateUserInfo(e),c.success(h("common.saveSuccess"))}function O(){r.resetUserInfo(),c.success(h("common.success")),window.location.reload()}function T(){const e=Q(),n=localStorage.getItem("chatStorage")||"{}",s=JSON.stringify(JSON.parse(n),null,2),u=new Blob([s],{type:"application/json"}),o=URL.createObjectURL(u),v=document.createElement("a");v.href=o,v.download=`chat-store_${e}.json`,document.body.appendChild(v),v.click(),document.body.removeChild(v)}function j(e){const n=e.target;if(!n||!n.files)return;const s=n.files[0];if(!s)return;const u=new FileReader;u.onload=()=>{try{const o=JSON.parse(u.result);localStorage.setItem("chatStorage",JSON.stringify(o)),c.success(h("common.success")),location.reload()}catch{c.error(h("common.invalidFileFormat"))}},u.readAsText(s)}function A(){localStorage.removeItem("chatStorage"),location.reload()}function E(){const e=document.getElementById("fileInput");e&&e.click()}return(e,n)=>{const s=N("n-form-item"),u=N("n-form");return I(),z("div",X,[t(u,{ref:"formRef","label-placement":l(w)?"top":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:a(()=>[t(s,{label:l(h)("setting.avatarLink"),"label-style":"font-weight: 900"},{default:a(()=>[t(l(B),{value:y.value,"onUpdate:value":n[0]||(n[0]=o=>y.value=o),class:"mr-2"},null,8,["value"]),t(l(m),{size:"tiny",text:"",type:"primary",onClick:n[1]||(n[1]=o=>U({avatar:y.value}))},{default:a(()=>[d(p(e.$t("common.save")),1)]),_:1})]),_:1},8,["label"]),t(s,{label:e.$t("setting.name"),"label-style":"font-weight: 900"},{default:a(()=>[t(l(B),{value:C.value,"onUpdate:value":n[2]||(n[2]=o=>C.value=o),class:"mr-2"},null,8,["value"]),t(l(m),{size:"tiny",text:"",type:"primary",onClick:n[3]||(n[3]=o=>U({name:C.value}))},{default:a(()=>[d(p(e.$t("common.save")),1)]),_:1})]),_:1},8,["label"]),t(s,{label:e.$t("setting.chatHistory"),"label-style":"font-weight: 900"},{default:a(()=>[k("div",Z,[t(l(m),{size:"small",onClick:T},{icon:a(()=>[t(l(S),{icon:"ri:download-2-fill"})]),default:a(()=>[d(" "+p(e.$t("common.export")),1)]),_:1}),k("input",{id:"fileInput",style:{display:"none"},type:"file",onChange:j},null,32),t(l(m),{size:"small",onClick:E},{icon:a(()=>[t(l(S),{icon:"ri:upload-2-fill"})]),default:a(()=>[d(" "+p(e.$t("common.import")),1)]),_:1}),t(l(P),{placement:"bottom",onPositiveClick:A},{trigger:a(()=>[t(l(m),{size:"small"},{icon:a(()=>[t(l(S),{icon:"ri:close-circle-line"})]),default:a(()=>[d(" "+p(e.$t("common.clear")),1)]),_:1})]),default:a(()=>[d(" "+p(e.$t("chat.clearHistoryConfirm")),1)]),_:1})])]),_:1},8,["label"]),t(s,{label:e.$t("setting.theme"),"label-style":"font-weight: 900"},{default:a(()=>[k("div",ee,[(I(),z(V,null,G(D,o=>t(l(m),{key:o.key,type:o.key===_.value?"primary":void 0,size:"small",onClick:v=>l(i).setTheme(o.key)},{icon:a(()=>[t(l(S),{icon:o.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),_:1},8,["label"]),t(s,{label:e.$t("setting.language"),"label-style":"font-weight: 900"},{default:a(()=>[t(l(H),{options:L,value:x.value,style:{width:"140px"},onUpdateValue:n[4]||(n[4]=o=>l(i).setLanguage(o))},null,8,["value"])]),_:1},8,["label"]),t(s,{label:e.$t("setting.resetUserInfo"),"label-style":"font-weight: 900"},{default:a(()=>[t(l(m),{size:"small",onClick:O},{default:a(()=>[d(p(e.$t("common.reset")),1)]),_:1})]),_:1},8,["label"])]),_:1},8,["label-placement"])])}}}),ae={class:"min-h-[100px]"},ie=R({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(f,{emit:i}){const r=f,w=K();b(()=>!!w.isChatGPTAPI),$("General");const c=b({get(){return r.visible},set(_){i("update:visible",_)}});return(_,g)=>(I(),W(l(q),{show:c.value,"onUpdate:show":g[0]||(g[0]=y=>c.value=y),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:a(()=>[k("div",null,[k("div",ae,[t(te)])])]),_:1},8,["show"]))}});export{ie as default};

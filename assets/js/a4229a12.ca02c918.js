"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[27823],{21551:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=t(85893),i=t(11151);const s={title:"Use Besu-extended privacy",description:"Hyperledger Besu-extended privacy",sidebar_position:2,tags:["private networks"]},a="Use Besu-extended privacy",p={id:"private-networks/how-to/use-privacy/besu-extended",title:"Use Besu-extended privacy",description:"Hyperledger Besu-extended privacy",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/besu-extended.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/besu-extended",permalink:"/23.4.1/private-networks/how-to/use-privacy/besu-extended",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/besu-extended.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1718049735,formattedLastUpdatedAt:"Jun 10, 2024",sidebarPosition:2,frontMatter:{title:"Use Besu-extended privacy",description:"Hyperledger Besu-extended privacy",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use EEA-compliant privacy",permalink:"/23.4.1/private-networks/how-to/use-privacy/eea-compliant"},next:{title:"Run Tessera with Besu",permalink:"/23.4.1/private-networks/how-to/use-privacy/tessera"}},o={},c=[{value:"Privacy group type",id:"privacy-group-type",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"use-besu-extended-privacy",children:"Use Besu-extended privacy"}),"\n",(0,n.jsxs)(r.p,{children:["Hyperledger Besu provides an extended implementation of privacy allowing you to ",(0,n.jsx)(r.a,{href:"/23.4.1/private-networks/concepts/privacy/privacy-groups",children:"create a privacy group for a set of participants"}),". You must specify the privacy group ID when sending private transactions."]}),"\n",(0,n.jsxs)(r.p,{children:["To enable the ",(0,n.jsxs)(r.a,{href:"/23.4.1/private-networks/reference/api/#priv-methods",children:[(0,n.jsx)(r.code,{children:"PRIV"})," API methods"]}),", use the ",(0,n.jsx)(r.a,{href:"/23.4.1/public-networks/reference/cli/options#rpc-http-api",children:(0,n.jsx)(r.code,{children:"--rpc-http-api"})})," or ",(0,n.jsx)(r.a,{href:"/23.4.1/public-networks/reference/cli/options#rpc-ws-api",children:(0,n.jsx)(r.code,{children:"--rpc-ws-api"})})," command line options."]}),"\n",(0,n.jsxs)(r.p,{children:["To create the privacy group containing the recipients of a private transaction, use ",(0,n.jsx)(r.a,{href:"/23.4.1/private-networks/reference/api/#priv_createprivacygroup",children:(0,n.jsx)(r.code,{children:"priv_createPrivacyGroup"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["To create an EEA-compliant private transaction, specify ",(0,n.jsx)(r.code,{children:"privacyGroupId"})," when creating the signed transaction passed as an input parameter to ",(0,n.jsx)(r.a,{href:"/23.4.1/private-networks/reference/api/#eea_sendrawtransaction",children:(0,n.jsx)(r.code,{children:"eea_sendRawTransaction"})}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"privacy-group-type",children:"Privacy group type"}),"\n",(0,n.jsxs)(r.p,{children:["Privacy groups created using ",(0,n.jsx)(r.a,{href:"/23.4.1/private-networks/reference/api/#priv_createprivacygroup",children:(0,n.jsx)(r.code,{children:"priv_createPrivacyGroup"})})," have a ",(0,n.jsx)(r.code,{children:"BESU"})," privacy group type when returned by ",(0,n.jsx)(r.a,{href:"/23.4.1/private-networks/reference/api/#priv_findprivacygroup",children:(0,n.jsx)(r.code,{children:"priv_findPrivacyGroup"})}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "privacyGroupId": "GpK3ErNO0xF27T0sevgkJ3+4qk9Z+E3HtXYxcKIBKX8=",\n      "name": "Group B",\n      "description": "Description of Group B",\n      "type": "BESU",\n      "members": [\n        "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",\n        "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw="\n      ]\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>p,a:()=>a});var n=t(67294);const i={},s=n.createContext(i);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
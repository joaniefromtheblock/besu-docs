"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78305],{86193:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(85893),s=i(11151);const r={title:"Plugins",sidebar_position:6,description:"Plugins overview",tags:["private networks"]},o="Plugins",l={id:"private-networks/concepts/plugins",title:"Plugins",description:"Plugins overview",source:"@site/versioned_docs/version-23.7.3/private-networks/concepts/plugins.md",sourceDirName:"private-networks/concepts",slug:"/private-networks/concepts/plugins",permalink:"/23.7.3/private-networks/concepts/plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/concepts/plugins.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1718035808,formattedLastUpdatedAt:"Jun 10, 2024",sidebarPosition:6,frontMatter:{title:"Plugins",sidebar_position:6,description:"Plugins overview",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Public key infrastructure",permalink:"/23.7.3/private-networks/concepts/pki"},next:{title:"Tutorials",permalink:"/23.7.3/private-networks/tutorials"}},a={},c=[{value:"Install plugins",id:"install-plugins",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"plugins",children:"Plugins"}),"\n",(0,t.jsx)(n.p,{children:"You can extend Hyperledger Besu functionality by building Java plugins or using existing open source Besu plugins. Use the Plugin API to take data from any Besu network, public or permissioned, and feed it into an application or system."}),"\n",(0,t.jsx)(n.p,{children:"For example, create a plugin to add more monitoring functionality or stream event data to a third-party application. The API exposes data about the following components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Blocks"}),"\n",(0,t.jsx)(n.li,{children:"Balances"}),"\n",(0,t.jsx)(n.li,{children:"Transactions"}),"\n",(0,t.jsx)(n.li,{children:"Smart contracts"}),"\n",(0,t.jsx)(n.li,{children:"Execution results"}),"\n",(0,t.jsx)(n.li,{children:"Logs"}),"\n",(0,t.jsx)(n.li,{children:"Syncing state."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Besu plugin API",src:i(24367).Z+"",width:"1512",height:"944"})}),"\n",(0,t.jsxs)(n.p,{children:["The plugin API provides access to ",(0,t.jsx)(n.a,{href:"/23.7.3/private-networks/reference/plugin-api-interfaces",children:"interfaces"})," allowing you to build the plugin."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"https://youtu.be/78sa2WuA1rg",children:"plugin API webinar"})," for an example of how to build a plugin."]}),(0,t.jsxs)(n.p,{children:["For more information about the available interfaces, see the ",(0,t.jsx)(n.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/index.html",children:"Plugin API Javadoc"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"install-plugins",children:"Install plugins"}),"\n",(0,t.jsxs)(n.p,{children:["To allow Besu to access and use the plugin, copy the plugin (",(0,t.jsx)(n.code,{children:".jar"}),") to the ",(0,t.jsx)(n.code,{children:"plugins"})," directory."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["If not already present, you must create the ",(0,t.jsx)(n.code,{children:"plugins"})," directory one directory level below (",(0,t.jsx)(n.code,{children:"../"}),") the ",(0,t.jsx)(n.code,{children:"besu"})," executable."]})}),"\n",(0,t.jsx)(n.p,{children:"Each plugin in the directory has the following lifecycle events:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Register"})," - Executed when Besu starts. Besu checks plugin compatibility and registers plugins."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Start"})," - Plugins start after being successfully registered."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Stop"})," - Besu stops plugins."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The order in which Besu calls plugins during lifecycle events is not guaranteed."})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},24367:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Hyperledger-Besu-Plugin-API-55b61f51dd27221eb8c9de3892b1fb2e.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(67294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
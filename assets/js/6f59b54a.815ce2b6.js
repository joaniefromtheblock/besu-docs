"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[27482],{42530:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=n(85893),l=n(11151),t=n(74866),o=n(85162);const s={title:"Block proposal permissioning",description:"Block proposal permissioning",sidebar_position:7,tags:["private networks"]},a="Block proposal permissioning",c={id:"private-networks/how-to/configure/block-proposal-permissioning",title:"Block proposal permissioning",description:"Block proposal permissioning",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/configure/block-proposal-permissioning.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/block-proposal-permissioning",permalink:"/23.7.3/private-networks/how-to/configure/block-proposal-permissioning",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/configure/block-proposal-permissioning.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1718049735,formattedLastUpdatedAt:"Jun 10, 2024",sidebarPosition:7,frontMatter:{title:"Block proposal permissioning",description:"Block proposal permissioning",sidebar_position:7,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Peer-to-peer TLS",permalink:"/23.7.3/private-networks/how-to/configure/tls/p2p"},next:{title:"Alternative elliptic curves",permalink:"/23.7.3/private-networks/how-to/configure/curves"}},d={},p=[{value:"Configure block proposal permissioning",id:"configure-block-proposal-permissioning",level:2},{value:"Command line options",id:"command-line-options",level:2},{value:"<code>Xpki-block-creation-crl-file</code>",id:"xpki-block-creation-crl-file",level:3},{value:"<code>Xpki-block-creation-enabled</code>",id:"xpki-block-creation-enabled",level:3},{value:"<code>Xpki-block-creation-keystore-certificate-alias</code>",id:"xpki-block-creation-keystore-certificate-alias",level:3},{value:"<code>Xpki-block-creation-keystore-file</code>",id:"xpki-block-creation-keystore-file",level:3},{value:"<code>Xpki-block-creation-keystore-password-file</code>",id:"xpki-block-creation-keystore-password-file",level:3},{value:"<code>Xpki-block-creation-keystore-type</code>",id:"xpki-block-creation-keystore-type",level:3},{value:"<code>Xpki-block-creation-truststore-file</code>",id:"xpki-block-creation-truststore-file",level:3},{value:"<code>Xpki-block-creation-truststore-password-file</code>",id:"xpki-block-creation-truststore-password-file",level:3},{value:"<code>Xpki-block-creation-truststore-type</code>",id:"xpki-block-creation-truststore-type",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"block-proposal-permissioning",children:"Block proposal permissioning"}),"\n",(0,i.jsxs)(r.admonition,{type:"info",children:[(0,i.jsxs)(r.p,{children:["Only private networks using the ",(0,i.jsx)(r.a,{href:"/23.7.3/private-networks/how-to/configure/consensus/qbft",children:"QBFT consensus protocol"})," support block proposal permissioning."]}),(0,i.jsx)(r.p,{children:"Block proposal permissioning is an early access feature, and functionality and options may be updated between releases."})]}),"\n",(0,i.jsxs)(r.p,{children:["You can configure ",(0,i.jsx)(r.a,{href:"/23.7.3/private-networks/concepts/pki#block-proposal-permissioning",children:"block proposal permissioning"})," to ensure only authorized validator nodes can propose blocks in the network."]}),"\n",(0,i.jsx)(r.p,{children:"Use certificates issued by a trusted authority to ensure validators are authorized to propose blocks."}),"\n",(0,i.jsx)(r.h2,{id:"configure-block-proposal-permissioning",children:"Configure block proposal permissioning"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Prerequisites"}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["A configured network. For example, ",(0,i.jsx)(r.a,{href:"/23.7.3/private-networks/tutorials/qbft",children:"see steps 1 to 5 in the QBFT tutorial"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"A keystore containing the certificate and key for each network node."}),"\n",(0,i.jsx)(r.li,{children:"A truststore containing all the trusted certificates for the network."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Start Besu and include the following command line options on the required nodes:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:'besu --Xpki-block-creation-enabled=true \\\n--Xpki-block-creation-keystore-type="pkcs12" \\\n--Xpki-block-creation-keystore-file="keystore" \\\n--Xpki-block-creation-keystore-password-file="keystore.password" \\\n--Xpki-block-creation-crl-file="crl2.pem" \\\n--Xpki-block-creation-keystore-certificate-alias="validator" \\\n--Xpki-block-creation-truststore-type="pkcs12" \\\n--Xpki-block-creation-truststore-file="truststore" \\\n--Xpki-block-creation-truststore-password-file="truststore.password"\n'})}),"\n",(0,i.jsx)(r.p,{children:"In the command line:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Enable block proposal permissioning using ",(0,i.jsx)(r.a,{href:"#xpki-block-creation-enabled",children:(0,i.jsx)(r.code,{children:"--Xpki-block-creation-enabled=true"})}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Specify the keystore type and keystore file using ",(0,i.jsx)(r.a,{href:"#xpki-block-creation-keystore-type",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-keystore-type"})})," and ",(0,i.jsx)(r.a,{href:"#xpki-block-creation-keystore-file",children:(0,i.jsx)(r.code,{children:"--Xpki-block-creation-keystore-file"})}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Specify the text file containing the password to unlock the keystore file using ",(0,i.jsx)(r.a,{href:"#xpki-block-creation-keystore-password-file",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-keystore-password-file"})}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Specify the optional ",(0,i.jsx)(r.a,{href:"https://www.securew2.com/blog/certificate-revocation-crl-explained",children:"certificate revocation list (CRL)"})," file using ",(0,i.jsx)(r.a,{href:"#xpki-block-creation-crl-file",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-crl-file"})}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Specify the alias of the certificate to be included in blocks proposed by this validator using ",(0,i.jsx)(r.a,{href:"#xpki-block-creation-keystore-certificate-alias",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-keystore-certificate-alias"})}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Specify the truststore type and truststore file using ",(0,i.jsx)(r.a,{href:"#xpki-block-creation-truststore-type",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-truststore-type"})})," and ",(0,i.jsx)(r.a,{href:"#xpki-block-creation-truststore-file",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-truststore-file"})}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Specify the text file containing the password to unlock the truststore file using ",(0,i.jsx)(r.a,{href:"#xpki-block-creation-truststore-password-file",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-truststore-password-file"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"command-line-options",children:"Command line options"}),"\n",(0,i.jsx)(r.h3,{id:"xpki-block-creation-crl-file",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-crl-file"})}),"\n",(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-crl-file=<FILE>\n"})})}),(0,i.jsx)(o.Z,{value:"Example",label:"Example",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-crl-file=/home/cert/cert.crl.pem\n"})})}),(0,i.jsx)(o.Z,{value:"Environment variable",label:"Environment variable",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_CRL_FILE=/home/cert/cert.crl.pem\n"})})})]}),"\n",(0,i.jsx)(r.p,{children:"Path to the optional certificate revocation list (CRL) file."}),"\n",(0,i.jsx)(r.h3,{id:"xpki-block-creation-enabled",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-enabled"})}),"\n",(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-enabled[=<true|false>]\n"})})}),(0,i.jsx)(o.Z,{value:"Example",label:"Example",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-enabled=true\n"})})}),(0,i.jsx)(o.Z,{value:"Environment variable",label:"Environment variable",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_ENABLED=true\n"})})})]}),"\n",(0,i.jsxs)(r.p,{children:["Enable PKI integration. The default is ",(0,i.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"xpki-block-creation-keystore-certificate-alias",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-keystore-certificate-alias"})}),"\n",(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-certificate-alias=<NAME>\n"})})}),(0,i.jsx)(o.Z,{value:"Example",label:"Example",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-certificate-alias=validatorA\n"})})}),(0,i.jsx)(o.Z,{value:"Environment variable",label:"Environment variable",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_KEYSTORE_CERTIFICATE_ALIAS=validatorA\n"})})})]}),"\n",(0,i.jsxs)(r.p,{children:["Alias of the certificate to be included in the blocks proposed by this validator. The default is ",(0,i.jsx)(r.code,{children:"validator"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"xpki-block-creation-keystore-file",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-keystore-file"})}),"\n",(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-file=<FILE>\n"})})}),(0,i.jsx)(o.Z,{value:"Example",label:"Example",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-file=/home/cert/keystore.jks\n"})})}),(0,i.jsx)(o.Z,{value:"Environment variable",label:"Environment variable",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_KEYSTORE_FILE=/home/cert/keystore.jks\n"})})})]}),"\n",(0,i.jsx)(r.p,{children:"Keystore file containing the key and certificate for PKI block creation."}),"\n",(0,i.jsx)(r.h3,{id:"xpki-block-creation-keystore-password-file",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-keystore-password-file"})}),"\n",(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-password-file=<FILE>\n"})})}),(0,i.jsx)(o.Z,{value:"Example",label:"Example",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-password-file=/home/cert/password.txt\n"})})}),(0,i.jsx)(o.Z,{value:"Environment variable",label:"Environment variable",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_KEYSTORE_PASSWORD-FILE=/home/cert/password.txt\n"})})})]}),"\n",(0,i.jsx)(r.p,{children:"Text file containing the password to unlock the keystore file."}),"\n",(0,i.jsx)(r.h3,{id:"xpki-block-creation-keystore-type",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-keystore-type"})}),"\n",(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-type=<TYPE>\n"})})}),(0,i.jsx)(o.Z,{value:"Example",label:"Example",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-type=JKS\n"})})}),(0,i.jsx)(o.Z,{value:"Environment variable",label:"Environment variable",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_KEYSTORE_TYPE=JKS\n"})})})]}),"\n",(0,i.jsxs)(r.p,{children:["PKI keystore type. Valid options are ",(0,i.jsx)(r.code,{children:"JKS"})," and ",(0,i.jsx)(r.code,{children:"PKCS12"}),". The default is ",(0,i.jsx)(r.code,{children:"JKS"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"xpki-block-creation-truststore-file",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-truststore-file"})}),"\n",(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-file=<FILE>\n"})})}),(0,i.jsx)(o.Z,{value:"Example",label:"Example",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-file=/home/cert/truststore.jks\n"})})}),(0,i.jsx)(o.Z,{value:"Environment variable",label:"Environment variable",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_TRUSTSTORE_FILE=/home/cert/truststore.jks\n"})})})]}),"\n",(0,i.jsx)(r.p,{children:"Truststore containing the trusted certificates for PKI block creation."}),"\n",(0,i.jsx)(r.h3,{id:"xpki-block-creation-truststore-password-file",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-truststore-password-file"})}),"\n",(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-password-file=<FILE>\n"})})}),(0,i.jsx)(o.Z,{value:"Example",label:"Example",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-password-file=/home/cert/password.txt\n"})})}),(0,i.jsx)(o.Z,{value:"Environment variable",label:"Environment variable",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_TRUSTSTORE_PASSWORD_FILE=/home/cert/password.txt\n"})})})]}),"\n",(0,i.jsx)(r.p,{children:"Text file containing the password to unlock the truststore file."}),"\n",(0,i.jsx)(r.h3,{id:"xpki-block-creation-truststore-type",children:(0,i.jsx)(r.code,{children:"Xpki-block-creation-truststore-type"})}),"\n",(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-type=<TYPE>\n"})})}),(0,i.jsx)(o.Z,{value:"Example",label:"Example",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-type=JKS\n"})})}),(0,i.jsx)(o.Z,{value:"Environment variable",label:"Environment variable",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_TRUSTSTORE_TYPE=JKS\n"})})})]}),"\n",(0,i.jsxs)(r.p,{children:["PKI truststore type. Valid options are ",(0,i.jsx)(r.code,{children:"JKS"})," and ",(0,i.jsx)(r.code,{children:"PKCS12"}),". The default is ",(0,i.jsx)(r.code,{children:"JKS"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>o});n(67294);var i=n(36905);const l={tabItem:"tabItem_Ymn6"};var t=n(85893);function o(e){let{children:r,hidden:n,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)(l.tabItem,o),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>y});var i=n(67294),l=n(36905),t=n(12466),o=n(16550),s=n(20469),a=n(91980),c=n(67392),d=n(50012);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??function(e){return p(e).map((e=>{let{props:{value:r,label:n,attributes:i,default:l}}=e;return{value:r,label:n,attributes:i,default:l}}))}(n);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function k(e){let{queryString:r=!1,groupId:n}=e;const l=(0,o.k6)(),t=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,a._X)(t),(0,i.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(l.location.search);r.set(t,e),l.replace({...l.location,search:r.toString()})}),[t,l])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:l}=e,t=u(e),[o,a]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:t}))),[c,p]=k({queryString:n,groupId:l}),[b,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,t]=(0,d.Nk)(n);return[l,(0,i.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:l}),f=(()=>{const e=c??b;return h({value:e,tabValues:t})?e:null})();(0,s.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),p(e),x(e)}),[p,x,t]),tabValues:t}}var x=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function m(e){let{className:r,block:n,selectedValue:i,selectValue:o,tabValues:s}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),d=e=>{const r=e.currentTarget,n=a.indexOf(r),l=s[n].value;l!==i&&(c(r),o(l))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;r=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;r=a[n]??a[a.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},r),children:s.map((e=>{let{value:r,label:n,attributes:t}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>a.push(e),onKeyDown:p,onClick:d,...t,className:(0,l.Z)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":i===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:l}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function g(e){const r=b(e);return(0,j.jsxs)("div",{className:(0,l.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(m,{...e,...r}),(0,j.jsx)(v,{...e,...r})]})}function y(e){const r=(0,x.Z)();return(0,j.jsx)(g,{...e,children:p(e.children)},String(r))}},11151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>o});var i=n(67294);const l={},t=i.createContext(l);function o(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);
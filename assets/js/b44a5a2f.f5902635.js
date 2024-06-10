"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[54803],{77846:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=o(85893),i=o(11151);const s={title:"Manage peers",sidebar_position:3,description:"Managing Hyperledger Besu peers",tags:["public networks","private networks"]},t="Manage peers",c={id:"public-networks/how-to/connect/manage-peers",title:"Manage peers",description:"Managing Hyperledger Besu peers",source:"@site/versioned_docs/version-23.4.1/public-networks/how-to/connect/manage-peers.md",sourceDirName:"public-networks/how-to/connect",slug:"/public-networks/how-to/connect/manage-peers",permalink:"/23.4.1/public-networks/how-to/connect/manage-peers",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/how-to/connect/manage-peers.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"},{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1718015441,formattedLastUpdatedAt:"Jun 10, 2024",sidebarPosition:3,frontMatter:{title:"Manage peers",sidebar_position:3,description:"Managing Hyperledger Besu peers",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure ports",permalink:"/23.4.1/public-networks/how-to/connect/configure-ports"},next:{title:"Specify NAT method",permalink:"/23.4.1/public-networks/how-to/connect/specify-nat"}},d={},l=[{value:"Limit peers",id:"limit-peers",level:2},{value:"Limit remote connections",id:"limit-remote-connections",level:2},{value:"Monitor peer connections",id:"monitor-peer-connections",level:2},{value:"List node connections",id:"list-node-connections",level:2},{value:"Disable discovery",id:"disable-discovery",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"manage-peers",children:"Manage peers"}),"\n",(0,r.jsxs)(n.p,{children:["Hyperledger Besu peer-to-peer (P2P) discovery happens periodically based on the number of peers in a network and the node's ",(0,r.jsx)(n.a,{href:"#limit-peers",children:"peer limit"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The frequency of discovery isn't configurable, but you can ",(0,r.jsx)(n.a,{href:"#limit-remote-connections",children:"limit remote connections"})," in public networks and ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#random-peer-priority-enabled",children:"randomly prioritize connections"})," in small, stable networks."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#admin_addpeer",children:(0,r.jsx)(n.code,{children:"admin_addPeer"})})," to attempt a specific connection, but this isn't P2P discovery."]})}),"\n",(0,r.jsxs)(n.p,{children:["In private networks, we recommend ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/bootnodes",children:"using bootnodes"})," to initially discover peers."]}),"\n",(0,r.jsx)(n.h2,{id:"limit-peers",children:"Limit peers"}),"\n",(0,r.jsx)(n.p,{children:"You can limit peers to reduce the bandwidth, CPU time, and disk access Besu uses to manage and respond to peers."}),"\n",(0,r.jsxs)(n.p,{children:["To reduce the maximum number of peers, use the ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#max-peers",children:(0,r.jsx)(n.code,{children:"--max-peers"})})," option. The default is 25."]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["The minimum number of peers is set by the ",(0,r.jsx)(n.code,{children:"--Xp2p-peer-lower-bound"})," option, which also has a default of 25. If you reduce the ",(0,r.jsx)(n.code,{children:"--max-peers"})," from the default, you must also set the ",(0,r.jsx)(n.code,{children:"--Xp2p-peer-lower-bound"})," option to the same value or lower. For example, if you decrease ",(0,r.jsx)(n.code,{children:"--max-peers"})," to 20, set ",(0,r.jsx)(n.code,{children:"--Xp2p-peer-lower-bound"})," to 20 or lower."]}),(0,r.jsxs)(n.p,{children:["Note, ",(0,r.jsx)(n.code,{children:"Xp2p-peer-lower-bound"})," is an early access option."]})]}),"\n",(0,r.jsx)(n.h2,{id:"limit-remote-connections",children:"Limit remote connections"}),"\n",(0,r.jsxs)(n.p,{children:["Prevent eclipse attacks when using ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#sync-mode",children:(0,r.jsx)(n.code,{children:"--sync-mode"})})," and ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#fast-sync-min-peers",children:(0,r.jsx)(n.code,{children:"--fast-sync-min-peers"})})," on public networks by enabling the ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#remote-connections-limit-enabled",children:"remote connection limits"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In private and permissioned networks with only trusted peers, enabling the remote connection limits is unnecessary and might adversely affect the speed at which nodes can join the network. Limiting remote connections can cause a closed group of peers to form when the number of nodes in the network is slightly higher than ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#max-peers",children:(0,r.jsx)(n.code,{children:"--max-peers"})}),". The nodes in this closed group are all connected to each other and can't accept more connections."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#random-peer-priority-enabled",children:(0,r.jsx)(n.code,{children:"--random-peer-priority-enabled"})})," to help prevent closed groups of peers in small, stable networks."]})}),"\n",(0,r.jsx)(n.h2,{id:"monitor-peer-connections",children:"Monitor peer connections"}),"\n",(0,r.jsx)(n.p,{children:"JSON-RPC API methods to monitor peer connections include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/api/#net_peercount",children:(0,r.jsx)(n.code,{children:"net_peerCount"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/api/#admin_peers",children:(0,r.jsx)(n.code,{children:"admin_peers"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/api/#debug_metrics",children:(0,r.jsx)(n.code,{children:"debug_metrics"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Each peer entry returned by ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/api/#admin_peers",children:(0,r.jsx)(n.code,{children:"admin_peers"})})," includes a ",(0,r.jsx)(n.code,{children:"protocols"})," section. Use the information in the ",(0,r.jsx)(n.code,{children:"protocols"})," section to:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Determine the health of peers. For example, an external process can use ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/api/#admin_peers",children:(0,r.jsx)(n.code,{children:"admin_peers"})})," and ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/api/#admin_removepeer",children:(0,r.jsx)(n.code,{children:"admin_removePeer"})})," to disconnect from peers that are stalled at a single difficulty for an extended period of time."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Monitor node health. For example, if peers report increasing difficulties but the node is stuck at the same block number, the node may be on a different fork to most peers."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Determine which protocol level peers are communicating with. For example, you can see if ",(0,r.jsx)(n.code,{children:'"version": 65'})," is being used to reduce transaction sharing traffic."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"list-node-connections",children:"List node connections"}),"\n",(0,r.jsxs)(n.p,{children:["The default logging configuration doesn't list node connection and disconnection messages. To enable listing them, set the ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#logging",children:(0,r.jsx)(n.code,{children:"--logging"})})," option to ",(0,r.jsx)(n.code,{children:"DEBUG"}),". For more verbosity, set the option to ",(0,r.jsx)(n.code,{children:"TRACE"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The console logs connection and disconnection events when the log level is ",(0,r.jsx)(n.code,{children:"DEBUG"})," or higher. If the message ",(0,r.jsx)(n.code,{children:"Successfully accepted connection from ..."})," displays, connections are getting through the firewalls."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Sample log output"',children:"2018-10-16 12:37:35.479-04:00 | nioEventLoopGroup-3-1 | INFO | NettyP2PNetwork | Successfully accepted connection from 0xa979fb575495b8d6db44f750317d0f4622bf4c2aa3365d6af7c284339968eef29b69ad0dce72a4d8db5ebb4968de0e3bec910127f134779fbcb0cb6d3331163c\n"})}),"\n",(0,r.jsx)(n.h2,{id:"disable-discovery",children:"Disable discovery"}),"\n",(0,r.jsxs)(n.p,{children:["To disable P2P discovery, set the ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#discovery-enabled",children:(0,r.jsx)(n.code,{children:"--discovery-enabled"})})," option to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["With discovery disabled, peers can't open connections with the node unless they were previously discovered or manually peered (for example, using ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/api/#admin_addpeer",children:(0,r.jsx)(n.code,{children:"admin_addPeer"})}),"). ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/how-to/connect/static-nodes",children:"Static nodes"})," can also open connections."]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,r.jsxs)(n.p,{children:["If your nodes fail to connect, ensure the ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/how-to/connect/configure-ports",children:"required ports are open"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If your nodes are running in AWS, check you have appropriate ",(0,r.jsx)(n.code,{children:"SecurityGroups"})," to allow access to the required ports."]}),"\n",(0,r.jsxs)(n.p,{children:["Check that the ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/concepts/node-keys#enode-url",children:"enode URLs"})," specified for ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/bootnodes",children:"bootnodes"})," or ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/how-to/connect/static-nodes",children:"static nodes"})," match the enode URLs displayed when starting the remote nodes."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>t});var r=o(67294);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
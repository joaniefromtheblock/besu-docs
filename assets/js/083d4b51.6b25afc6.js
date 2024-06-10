"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[40378],{36015:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(85893),i=s(11151);const a={title:"Transaction types",sidebar_position:1,description:"Description of the different transaction types",tags:["public networks","private networks"]},r="Transaction types",c={id:"public-networks/concepts/transactions/types",title:"Transaction types",description:"Description of the different transaction types",source:"@site/docs/public-networks/concepts/transactions/types.md",sourceDirName:"public-networks/concepts/transactions",slug:"/public-networks/concepts/transactions/types",permalink:"/development/public-networks/concepts/transactions/types",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/concepts/transactions/types.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1718015441,formattedLastUpdatedAt:"Jun 10, 2024",sidebarPosition:1,frontMatter:{title:"Transaction types",sidebar_position:1,description:"Description of the different transaction types",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Data storage formats",permalink:"/development/public-networks/concepts/data-storage-formats"},next:{title:"Transaction pool",permalink:"/development/public-networks/concepts/transactions/pool"}},o={},d=[{value:"<code>FRONTIER</code> transactions",id:"frontier-transactions",level:2},{value:"<code>ACCESS_LIST</code> transactions",id:"access_list-transactions",level:2},{value:"<code>EIP1559</code> transactions",id:"eip1559-transactions",level:2},{value:"<code>BLOB</code> transactions",id:"blob-transactions",level:2},{value:"View blob transaction costs",id:"view-blob-transaction-costs",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"transaction-types",children:"Transaction types"}),"\n",(0,n.jsxs)(t.p,{children:["You can interact with the Hyperledger Besu JSON-RPC API using different transaction types (specified by the ",(0,n.jsx)(t.code,{children:"transactionType"})," parameter)."]}),"\n",(0,n.jsxs)(t.p,{children:["The following API objects use a unique format for each ",(0,n.jsx)(t.code,{children:"transactionType"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/development/public-networks/reference/api/objects#pending-transaction-object",children:"Pending transaction object"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/development/public-networks/reference/api/objects#transaction-object",children:"Transaction object"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/development/public-networks/reference/api/objects#transaction-call-object",children:"Transaction call object"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/development/public-networks/reference/api/objects#transaction-receipt-object",children:"Transaction receipt object"})}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"frontier-transactions",children:[(0,n.jsx)(t.code,{children:"FRONTIER"})," transactions"]}),"\n",(0,n.jsxs)(t.p,{children:["Transactions with type ",(0,n.jsx)(t.code,{children:"FRONTIER"})," are ",(0,n.jsx)(t.em,{children:"legacy transactions"})," that use the transaction format existing before typed transactions were introduced in ",(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-2718",children:"EIP-2718"}),". They contain the parameters ",(0,n.jsx)(t.code,{children:"chainId"}),", ",(0,n.jsx)(t.code,{children:"nonce"}),", ",(0,n.jsx)(t.code,{children:"gasPrice"}),", ",(0,n.jsx)(t.code,{children:"gasLimit"}),", ",(0,n.jsx)(t.code,{children:"to"}),", ",(0,n.jsx)(t.code,{children:"value"}),", ",(0,n.jsx)(t.code,{children:"data"}),", ",(0,n.jsx)(t.code,{children:"v"}),", ",(0,n.jsx)(t.code,{children:"r"}),", and ",(0,n.jsx)(t.code,{children:"s"}),". Legacy transactions don't use ",(0,n.jsx)(t.a,{href:"#access_list-transactions",children:"access lists"})," or incorporate ",(0,n.jsx)(t.a,{href:"#eip1559-transactions",children:"EIP-1559 fee market changes"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"access_list-transactions",children:[(0,n.jsx)(t.code,{children:"ACCESS_LIST"})," transactions"]}),"\n",(0,n.jsxs)(t.p,{children:["Transactions with type ",(0,n.jsx)(t.code,{children:"ACCESS_LIST"})," are transactions introduced in ",(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-2930",children:"EIP-2930"}),". They contain, along with the ",(0,n.jsx)(t.a,{href:"#frontier-transactions",children:"legacy parameters"}),", an ",(0,n.jsx)(t.code,{children:"accessList"})," parameter, which specifies an array of addresses and storage keys that the transaction plans to access (an ",(0,n.jsx)(t.em,{children:"access list"}),"). ",(0,n.jsx)(t.code,{children:"ACCESS_LIST"})," transactions must specify an access list, and they don't incorporate ",(0,n.jsx)(t.a,{href:"#eip1559-transactions",children:"EIP-1559 fee market changes"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.a,{href:"/development/public-networks/reference/api/#eth_createaccesslist",children:(0,n.jsx)(t.code,{children:"eth_createAccessList"})})," API to simulate a transaction which returns the addresses and storage keys that may be used to send the real transaction, and the approximate gas cost."]}),"\n",(0,n.jsxs)(t.h2,{id:"eip1559-transactions",children:[(0,n.jsx)(t.code,{children:"EIP1559"})," transactions"]}),"\n",(0,n.jsxs)(t.p,{children:["Transactions with type ",(0,n.jsx)(t.code,{children:"EIP1559"})," are transactions introduced in ",(0,n.jsx)(t.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md",children:"EIP-1559"}),". EIP-1559 addresses the network congestion and overpricing of transaction fees caused by the historical fee market, in which users send transactions specifying a gas price bid using the ",(0,n.jsx)(t.code,{children:"gasPrice"})," parameter, and miners choose transactions with the highest bids."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"EIP1559"})," transactions don't specify ",(0,n.jsx)(t.code,{children:"gasPrice"}),", and instead use an in-protocol, dynamically changing ",(0,n.jsx)(t.em,{children:"base fee"})," per gas. At each block, the base fee per gas is adjusted to address network congestion as measured by a gas target."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"EIP1559"})," transactions contain, along with the ",(0,n.jsx)(t.a,{href:"#access_list-transactions",children:(0,n.jsx)(t.code,{children:"accessList"})})," parameter and ",(0,n.jsx)(t.a,{href:"#frontier-transactions",children:"legacy parameters"})," except for ",(0,n.jsx)(t.code,{children:"gasPrice"}),", a ",(0,n.jsx)(t.code,{children:"maxPriorityFeePerGas"})," parameter, which specifies the maximum fee the sender is willing to pay per gas above the base fee (the maximum ",(0,n.jsx)(t.em,{children:"priority fee"})," per gas), and a ",(0,n.jsx)(t.code,{children:"maxFeePerGas"})," parameter, which specifies the maximum total fee (base fee + priority fee) the sender is willing to pay per gas."]}),"\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.code,{children:"EIP1559"})," transaction always pays the base fee of the block it's included in, and it pays a priority fee as priced by ",(0,n.jsx)(t.code,{children:"maxPriorityFeePerGas"})," or, if the base fee per gas + ",(0,n.jsx)(t.code,{children:"maxPriorityFeePerGas"})," exceeds ",(0,n.jsx)(t.code,{children:"maxFeePerGas"}),", it pays a priority fee as priced by ",(0,n.jsx)(t.code,{children:"maxFeePerGas"})," minus the base fee per gas. The base fee is burned, and the priority fee is paid to the miner that included the transaction. A transaction's priority fee per gas incentivizes miners to include the transaction over other transactions with lower priority fees per gas."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"EIP1559"})," transactions must specify both ",(0,n.jsx)(t.code,{children:"maxPriorityFeePerGas"})," and ",(0,n.jsx)(t.code,{children:"maxFeePerGas"}),". They must not specify ",(0,n.jsx)(t.code,{children:"gasPrice"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"blob-transactions",children:[(0,n.jsx)(t.code,{children:"BLOB"})," transactions"]}),"\n",(0,n.jsxs)(t.p,{children:["Shard blob transactions introduced in ",(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-4844",children:"EIP-4844"})," enable scaling the\nEthereum network by allowing large amounts of data (blobs) to be included that cannot be directly accessed or\nprocessed by the Ethereum Virtual Machine (EVM)."]}),"\n",(0,n.jsx)(t.p,{children:"When the network includes a blob-carrying transaction in a block, the transaction doesn't actually contain\nthe blob data itself. Instead, it contains a commitment to this data. The EVM can verify this commitment to\nensure the data's availability and integrity without directly accessing the data."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"A commitment is a type of cryptographic proof that securely and verifiably confirms the existence and integrity\nof large data blobs."})}),"\n",(0,n.jsx)(t.p,{children:"This mechanism significantly reduces the computational and storage burden on the Ethereum network while ensuring\nthat the data is available for those who need it (for example, rollups or other layer 2 solutions that rely on data\navailability for their security and operation)."}),"\n",(0,n.jsx)(t.p,{children:"Blobs are temporarily stored by consensus clients such as Teku, and blocks on the execution layer permanently store\nthe the reference to the blob."}),"\n",(0,n.jsx)(t.h3,{id:"view-blob-transaction-costs",children:"View blob transaction costs"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.a,{href:"/development/public-networks/reference/api/#eth_blobbasefee",children:(0,n.jsx)(t.code,{children:"eth_blobBaseFee"})})," method to view the current base\nfee per blob gas in wei."]}),"\n",(0,n.jsxs)(t.p,{children:["You can also use ",(0,n.jsx)(t.a,{href:"/development/public-networks/reference/api/#eth_feehistory",children:(0,n.jsx)(t.code,{children:"eth_feeHistory"})})," to view the historical\nblob transaction cost details."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var n=s(67294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
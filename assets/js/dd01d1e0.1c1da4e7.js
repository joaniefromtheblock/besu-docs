"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[7194],{91341:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(85893),s=r(11151);const o={title:"Run Besu from Docker image",sidebar_position:1,description:"Run Hyperledger Besu using the official docker image",tags:["public networks"]},i="Run Besu from a Docker image",a={id:"public-networks/get-started/install/run-docker-image",title:"Run Besu from Docker image",description:"Run Hyperledger Besu using the official docker image",source:"@site/versioned_docs/version-24.3.0/public-networks/get-started/install/run-docker-image.md",sourceDirName:"public-networks/get-started/install",slug:"/public-networks/get-started/install/run-docker-image",permalink:"/24.3.0/public-networks/get-started/install/run-docker-image",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.3.0/public-networks/get-started/install/run-docker-image.md",tags:[{label:"public networks",permalink:"/24.3.0/tags/public-networks"}],version:"24.3.0",lastUpdatedAt:1718049735,formattedLastUpdatedAt:"Jun 10, 2024",sidebarPosition:1,frontMatter:{title:"Run Besu from Docker image",sidebar_position:1,description:"Run Hyperledger Besu using the official docker image",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Installation options",permalink:"/24.3.0/public-networks/get-started/install/"},next:{title:"Install binary distribution",permalink:"/24.3.0/public-networks/get-started/install/binary-distribution"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Default node for Mainnet",id:"default-node-for-mainnet",level:2},{value:"Expose ports",id:"expose-ports",level:2},{value:"Start Besu",id:"start-besu",level:2},{value:"Run a node for testing",id:"run-a-node-for-testing",level:3},{value:"Run a node on Goerli testnet",id:"run-a-node-on-goerli-testnet",level:3},{value:"Run a node on Ethereum Mainnet",id:"run-a-node-on-ethereum-mainnet",level:3},{value:"Stop Besu and clean up resources",id:"stop-besu-and-clean-up-resources",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-besu-from-a-docker-image",children:"Run Besu from a Docker image"}),"\n",(0,t.jsx)(n.p,{children:"Hyperledger Besu provides a Docker image to run a Besu node in a Docker container."}),"\n",(0,t.jsx)(n.p,{children:"Use this Docker image to run a single Besu node without installing Besu."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/install/",children:"Docker"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"MacOS or Linux"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The Docker image doesn't run on Windows."})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"default-node-for-mainnet",children:"Default node for Mainnet"}),"\n",(0,t.jsx)(n.p,{children:"To run a Besu node in a container connected to the Ethereum Mainnet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run hyperledger/besu:latest\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/hyperledger/besu/tags",children:"https://hub.docker.com/r/hyperledger/besu/tags"})," lists the available tags for the image."]}),(0,t.jsxs)(n.p,{children:["If you previously pulled ",(0,t.jsx)(n.code,{children:"latest"}),", Docker runs the cached version."]}),(0,t.jsxs)(n.p,{children:["To ensure your image is up to date, pull the ",(0,t.jsx)(n.code,{children:"latest"})," version again using ",(0,t.jsx)(n.code,{children:"docker pull hyperledger/besu:latest"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"expose-ports",children:"Expose ports"}),"\n",(0,t.jsxs)(n.p,{children:["Expose ports for P2P discovery, GraphQL, metrics, and HTTP and WebSocket JSON-RPC. You need to expose the ports to use the default ports or the ports specified using ",(0,t.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#rpc-http-port",children:(0,t.jsx)(n.code,{children:"--rpc-http-port"})}),", ",(0,t.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#p2p-port",children:(0,t.jsx)(n.code,{children:"--p2p-port"})}),", ",(0,t.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#rpc-ws-port",children:(0,t.jsx)(n.code,{children:"--rpc-ws-port"})}),", ",(0,t.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#metrics-port",children:(0,t.jsx)(n.code,{children:"--metrics-port"})}),", ",(0,t.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#graphql-http-port",children:(0,t.jsx)(n.code,{children:"--graphql-http-port"})}),", and ",(0,t.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#metrics-push-port",children:(0,t.jsx)(n.code,{children:"--metrics-push-port"})})," options."]}),"\n",(0,t.jsx)(n.p,{children:"To run Besu exposing local ports for access:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -p <localportJSON-RPC>:8545 -p <localportWS>:8546 -p <localportP2P>:30303 hyperledger/besu:latest --rpc-http-enabled --rpc-ws-enabled\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["The examples on this page expose TCP ports only. To expose UDP ports, specify ",(0,t.jsx)(n.code,{children:"/udp"})," at the end of the argument for the ",(0,t.jsx)(n.code,{children:"-p"})," Docker subcommand option:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -p <port>:<port>/udp\n"})}),(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsxs)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose",children:[(0,t.jsx)(n.code,{children:"docker run -p"})," documentation"]}),"."]})]}),"\n",(0,t.jsxs)(n.p,{children:["To enable JSON-RPC HTTP calls to ",(0,t.jsx)(n.code,{children:"127.0.0.1:8545"})," and P2P discovery on ",(0,t.jsx)(n.code,{children:"127.0.0.1:13001"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -p 8545:8545 -p 13001:30303 hyperledger/besu:latest --rpc-http-enabled\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start-besu",children:"Start Besu"}),"\n",(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsxs)(n.p,{children:["Don't mount a volume at the default data path (",(0,t.jsx)(n.code,{children:"/opt/besu"}),"). Mounting a volume at the default data path interferes with the operation of Besu and prevents Besu from safely launching."]}),(0,t.jsxs)(n.p,{children:["To run a node that maintains the node state (key and database), ",(0,t.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#data-path",children:(0,t.jsx)(n.code,{children:"--data-path"})})," must be set to a location other than ",(0,t.jsx)(n.code,{children:"/opt/besu"})," and a storage volume mounted at that location."]}),(0,t.jsxs)(n.p,{children:["When running in a Docker container, ",(0,t.jsx)(n.a,{href:"/24.3.0/public-networks/how-to/connect/specify-nat",children:(0,t.jsx)(n.code,{children:"--nat-method"})})," must be set to ",(0,t.jsx)(n.code,{children:"DOCKER"})," or ",(0,t.jsx)(n.code,{children:"AUTO"})," (default). Don't set ",(0,t.jsx)(n.a,{href:"/24.3.0/public-networks/how-to/connect/specify-nat",children:(0,t.jsx)(n.code,{children:"--nat-method"})})," to ",(0,t.jsx)(n.code,{children:"NONE"})," or ",(0,t.jsx)(n.code,{children:"UPNP"}),"."]})]}),"\n",(0,t.jsxs)(n.p,{children:["You can specify ",(0,t.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#specify-options",children:"Besu environment variables"})," with the Docker image instead of the command line options."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Example"',children:"docker run -p 30303:30303 -p 8545:8545 -e BESU_RPC_HTTP_ENABLED=true -e BESU_NETWORK=goerli hyperledger/besu:latest\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Unsupported address type exception",type:"caution",children:[(0,t.jsx)(n.p,{children:"When running Besu from a Docker image, you might get the following exception:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Unsupported address type exception when connecting to peer {}, this is likely due to ipv6 not being enabled at runtime.\n"})}),(0,t.jsx)(n.p,{children:"This happens when the IPv6 support in Docker is disabled while connecting to an IPv6 peer, preventing outbound communication. IPv6 is disabled by default in Docker."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.docker.com/config/daemon/ipv6/",children:"Enable IPv6 support in Docker"})," to allow outbound IPv6 traffic and allow connection with IPv6 peers."]})]}),"\n",(0,t.jsx)(n.h3,{id:"run-a-node-for-testing",children:"Run a node for testing"}),"\n",(0,t.jsx)(n.p,{children:"To run a node that mines blocks at a rate suitable for testing purposes with WebSocket enabled:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -p 8546:8546 --mount type=bind,source=/<myvolume/besu/testnode>,target=/var/lib/besu hyperledger/besu:latest --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-ws-enabled --network=dev --data-path=/var/lib/besu\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-a-node-on-goerli-testnet",children:"Run a node on Goerli testnet"}),"\n",(0,t.jsx)(n.p,{children:"To run a node on Goerli:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -p 30303:30303 --mount type=bind,source=/<myvolume/besu/goerli>,target=/var/lib/besu hyperledger/besu:latest --network=goerli --data-path=/var/lib/besu\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-a-node-on-ethereum-mainnet",children:"Run a node on Ethereum Mainnet"}),"\n",(0,t.jsx)(n.p,{children:"To run a node on Ethereum Mainnet with the HTTP JSON-RPC service enabled:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -p 8545:8545 --mount type=bind,source=/<myvolume/besu/mainnet>,target=/var/lib/besu  -p 30303:30303 hyperledger/besu:latest --rpc-http-enabled --data-path=/var/lib/besu\n"})}),"\n",(0,t.jsx)(n.h2,{id:"stop-besu-and-clean-up-resources",children:"Stop Besu and clean up resources"}),"\n",(0,t.jsxs)(n.p,{children:["When done running nodes, you can shut down the node container without deleting resources or you can delete the container after stopping it. Run ",(0,t.jsx)(n.code,{children:"docker container ls"})," and ",(0,t.jsx)(n.code,{children:"docker volume ls"})," to get the container and volume names."]}),"\n",(0,t.jsx)(n.p,{children:"To stop a container:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker stop <container-name>\n"})}),"\n",(0,t.jsx)(n.p,{children:"To delete a container:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker rm <container-name>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var t=r(67294);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
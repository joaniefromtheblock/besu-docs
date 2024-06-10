"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[72060],{29729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(85893),r=t(11151);const i={title:"Deploy Besu using Kubernetes",description:"Deploy a Besu node using Kubernetes.",toc_max_heading_level:3,tags:["public networks"]},o="Deploy a Besu public node using Kubernetes",a={id:"public-networks/tutorials/kubernetes",title:"Deploy Besu using Kubernetes",description:"Deploy a Besu node using Kubernetes.",source:"@site/versioned_docs/version-24.5.2/public-networks/tutorials/kubernetes.md",sourceDirName:"public-networks/tutorials",slug:"/public-networks/tutorials/kubernetes",permalink:"/public-networks/tutorials/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.2/public-networks/tutorials/kubernetes.md",tags:[{label:"public networks",permalink:"/tags/public-networks"}],version:"24.5.2",lastUpdatedAt:1718015441,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{title:"Deploy Besu using Kubernetes",description:"Deploy a Besu node using Kubernetes.",toc_max_heading_level:3,tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Run Besu and Teku on a testnet",permalink:"/public-networks/tutorials/besu-teku-testnet"},next:{title:"Reference",permalink:"/public-networks/reference"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a security group for discovery",id:"1-create-a-security-group-for-discovery",level:3},{value:"Outbound rules",id:"outbound-rules",level:4},{value:"Inbound rules",id:"inbound-rules",level:4},{value:"2. Add a node group to your cluster",id:"2-add-a-node-group-to-your-cluster",level:3},{value:"3. Install the EBS or EFS drivers",id:"3-install-the-ebs-or-efs-drivers",level:3},{value:"4. Set up the pod",id:"4-set-up-the-pod",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-a-besu-public-node-using-kubernetes",children:"Deploy a Besu public node using Kubernetes"}),"\n",(0,s.jsxs)(n.p,{children:["You can use a cloud provider such as ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/eks/",children:"Amazon Elastic Kubernetes Service (EKS)"}),"\nto deploy a Besu public node.\nThis tutorial walks you through adding an extra node group to your Besu pod."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["Set up a Kubernetes cluster using a managed Kubernetes service such as\n",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/eks/",children:"Amazon EKS"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-create-a-security-group-for-discovery",children:"1. Create a security group for discovery"}),"\n",(0,s.jsxs)(n.p,{children:["Create a security group in your VPC that allows traffic from anywhere on ports ",(0,s.jsx)(n.code,{children:"30303"})," and ",(0,s.jsx)(n.code,{children:"9000"}),"\n(or equivalent ports that you are using for discovery)."]}),"\n",(0,s.jsx)(n.h4,{id:"outbound-rules",children:"Outbound rules"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Protocol"}),(0,s.jsx)(n.th,{children:"Port range"}),(0,s.jsx)(n.th,{children:"Destination"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"All traffic"}),(0,s.jsx)(n.td,{children:"All"}),(0,s.jsx)(n.td,{children:"All"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0.0.0.0/0"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"All traffic"}),(0,s.jsx)(n.td,{children:"All"}),(0,s.jsx)(n.td,{children:"All"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"::/0"})})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"inbound-rules",children:"Inbound rules"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Protocol"}),(0,s.jsx)(n.th,{children:"Port range"}),(0,s.jsx)(n.th,{children:"Destination"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Custom UDP"}),(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"9000"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0.0.0.0/0"})}),(0,s.jsx)(n.td,{children:"CL client"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Custom TCP"}),(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"9000"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0.0.0.0/0"})}),(0,s.jsx)(n.td,{children:"CL client"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Custom UDP"}),(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"30303"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0.0.0.0/0"})}),(0,s.jsx)(n.td,{children:"EL client"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Custom TCP"}),(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"30303"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0.0.0.0/0"})}),(0,s.jsx)(n.td,{children:"EL client"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{title:"important",type:"warning",children:(0,s.jsx)(n.p,{children:"The key here is to allow traffic on both TCP and UDP for the consensus layer client and the\nexecution layer client."})}),"\n",(0,s.jsx)(n.h3,{id:"2-add-a-node-group-to-your-cluster",children:"2. Add a node group to your cluster"}),"\n",(0,s.jsxs)(n.p,{children:["In your VPC settings, enable ",(0,s.jsx)(n.strong,{children:"Auto-assign public IPv4 address"})," on the public subnets on which you\nspin up your nodes."]}),"\n",(0,s.jsxs)(n.p,{children:["This allows you to isolate your Besu node on a public subnet and separate it from the other apps and\nnode groups you might have running.\nIf you are using ",(0,s.jsx)(n.a,{href:"https://eksctl.io/",children:"EKSCTL"}),", add the following snippet to your setup:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'managedNodeGroups:\n  - name: ng-ethereum\n    instanceType: m6a.xlarge\n    desiredCapacity: 1 # Increase this capacity if you need more nodes.\n    \n    subnets:\n      - public-subnet-id1\n      - public-subnet-id2\n      - public-subnet-id3\n    labels: { "ng": "ethereum" }\n    securityGroups:\n      attachIDs: ["sg-1234..."] # The ID of the security group from the previous step.\n    iam:\n      withAddonPolicies:\n        ebs: true\n        # efs: true\n    taints:\n      - key: ethereum\n        value: "true"\n        effect: NoSchedule\n      - key: ethereum\n        value: "true"\n        effect: NoExecute\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you are using ",(0,s.jsx)(n.a,{href:"https://www.terraform.io/",children:"Terraform"}),", use something like the following for your\nnew node pool:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'    ng-ethereum = {\n      desired_size = 1\n      subnet_ids = module.vpc.public_subnets # Only public subnets here.\n      vpc_security_group_ids  = [ sg-1234 ] # The ID of the security group from the previous step.\n      instance_types = ["m6a.xlarge"]\n      iam_role_name = "${local.name}-eks-ng-ethereum-role"\n      taints = [\n        {\n          key    = "ethereum"\n          value  = "true"\n          effect = "NO_SCHEDULE"\n        },\n        {\n          key    = "ethereum"\n          value  = "true"\n          effect = "NO_EXECUTE"\n        }\n      ]\n      labels = {\n        ng   = "ethereum"\n      }\n    ...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-install-the-ebs-or-efs-drivers",children:"3. Install the EBS or EFS drivers"}),"\n",(0,s.jsxs)(n.p,{children:["We recommend using EBS or NvME storage for your chain data.\nFor most cases, the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html",children:"EBS drivers"})," or\n",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html",children:"EFS drivers"})," are sufficient.\nHowever, if you are using instance stores, use the\n",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/blogs/containers/eks-persistent-volumes-for-instance-store/",children:"Local Storage Static Provisioner"}),"\ninstead."]}),"\n",(0,s.jsx)(n.h3,{id:"4-set-up-the-pod",children:"4. Set up the pod"}),"\n",(0,s.jsxs)(n.p,{children:["Now that the infrastructure is set up, use ",(0,s.jsx)(n.code,{children:"hostNetworking"})," to bind your pod to the host and use the\nhost node's public IP for your Besu node."]}),"\n",(0,s.jsx)(n.p,{children:"First, add the following snippet to your StatefulSet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"template:\n  metadata:\n    labels:\n      ...\n    spec:\n      hostNetwork: true\n      dnsPolicy: ClusterFirstWithHostNet\n      affinity: ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, add an init container and a shared volume to store the public IP.\nThe init container ",(0,s.jsx)(n.code,{children:"init"})," runs and gets the public IP of the host using the AWS metadata service and\nsaves it to a local shared volume ",(0,s.jsx)(n.code,{children:"besu-pip"})," (between the init container and the Besu pod)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'template:\n  metadata:\n    labels:\n      ...\n    spec:\n      hostNetwork: true\n      dnsPolicy: ClusterFirstWithHostNet\n      affinity: ...\n      initContainers:\n      - name: init\n        image: alpine/curl:8.5.0\n        volumeMounts:\n          - name: pip\n            mountPath: /pip\n          - name: shared-jwt\n            mountPath: /jwt           \n          - name: besu-data\n            mountPath: /data\n        securityContext:\n          runAsUser: 0                        \n        command:\n        - /bin/bash\n        - -xec\n        - |\n          TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")\n          \n          # Get the existing public IP to associate with.\n          PUBLIC_IP_TO_ASSOCIATE=$(curl -H "X-aws-ec2-metadata-token: $TOKEN"  http://169.254.169.254/latest/meta-data/public-ipv4)\n          \n          # Store the public IP in a local file to be used by the container.\n          echo -ne "$PUBLIC_IP_TO_ASSOCIATE" > /pip/ip\n          \n          # Create the JWT key.\n          openssl rand -hex 32 | tr -d "\\n" > /jwt/jwtSecret.hex\n\n          # Update permissions on the data volume (if needed).\n          chown -R 1000:1000 /data\n\n      containers:\n      ...\n\n      volumes:\n      - name: pip\n        emptyDir: {}\n      - name: jwt\n        emptyDir: {}\n      - name: besu-data\n        persistentVolumeClaim:\n          claimName: besu-pvc\n      - name: teku-data\n        persistentVolumeClaim:\n          claimName: teku-pvc\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When you start Besu up in the pod, use the text file in ",(0,s.jsx)(n.code,{children:"pip"})," as your ",(0,s.jsx)(n.code,{children:"p2p-host"}),", which allows\ntraffic in and out as normal."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'template:\n  metadata:\n    labels:\n      ...\n    spec:\n      hostNetwork: true\n      dnsPolicy: ClusterFirstWithHostNet\n      affinity: ...\n      initContainers:\n      - name: init\n        image: alpine/curl:8.5.0\n        volumeMounts:\n          - name: pip\n            mountPath: /pip\n          - name: shared-jwt\n            mountPath: /jwt             \n          - name: besu-data\n            mountPath: /data\n        securityContext:\n          runAsUser: 0                        \n        command:\n        - /bin/bash\n        - -xec\n        - |\n          TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")\n          \n          # Get the existing public IP to associate with.\n          PUBLIC_IP_TO_ASSOCIATE=$(curl -H "X-aws-ec2-metadata-token: $TOKEN"  http://169.254.169.254/latest/meta-data/public-ipv4)\n          \n          # Store the public IP in a local file to be used by the container.\n          echo -ne "$PUBLIC_IP_TO_ASSOCIATE" > /pip/ip\n          \n          # Create the JWT key.\n          openssl rand -hex 32 | tr -d "\\n" > /jwt/jwtSecret.hex\n\n          # Update permissions on the data volume (if needed).\n          chown -R 1000:1000 /data\n\n      containers:\n      - name: besu\n        image: hyperledger/besu:latest\n        volumeMounts:\n          - name: pip\n            mountPath: /pip\n            readOnly: true\n          - name: shared-jwt\n            mountPath: /jwt               \n          - name: besu-data\n            mountPath: {{ .Values.settings.dataPath }}\n        ports:\n          - name: elc-rpc\n            containerPort: 8545\n            protocol: TCP\n          - name: elc-ws\n            containerPort: 8546\n            protocol: TCP\n          - name: elc-rlpx\n            containerPort: 30303\n            protocol: TCP\n          - name: elc-discovery\n            containerPort: 30303\n            protocol: UDP\n          - name: elc-metrics\n            containerPort: 8545\n            protocol: TCP\n          - name: elc-engine\n            containerPort: 8551\n            protocol: TCP         \n        command:\n          - /bin/sh\n          - -c\n        args:\n          - |\n            pip=$(cat /pip/ip)\n            /opt/besu/bin/besu \\\n              --p2p-host=${pip} \\\n              ...\n      \n      - name: teku\n        image: consensys/teku:develop\n        ...\n\n      volumes:\n      - name: pip\n        emptyDir: {}\n      - name: jwt\n        emptyDir: {}\n      - name: besu-data\n        persistentVolumeClaim:\n          claimName: besu-pvc\n      - name: teku-data\n        persistentVolumeClaim:\n          claimName: teku-pvc          \n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5044],{16944:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(74848),r=n(28453);const s={title:"Compile Your Contract",slug:"/getting-started/building-your-contract"},c=void 0,i={id:"getting-started/compiling",title:"Compile Your Contract",description:"Run the following command in your flipper directory to compile your smart contract:",source:"@site/versioned_docs/version-3.x/getting-started/compiling.md",sourceDirName:"getting-started",slug:"/getting-started/building-your-contract",permalink:"/3.x/getting-started/building-your-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/getting-started/compiling.md",tags:[],version:"3.x",frontMatter:{title:"Compile Your Contract",slug:"/getting-started/building-your-contract"},sidebar:"reference",previous:{title:"Creating an ink! Project",permalink:"/3.x/getting-started/creating-an-ink-project"},next:{title:"Run a Substrate Node",permalink:"/3.x/getting-started/running-substrate"}},a={},l=[];function d(t){const e={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Run the following command in your ",(0,o.jsx)(e.code,{children:"flipper"})," directory to compile your smart contract:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"cargo +nightly contract build\n"})}),"\n",(0,o.jsxs)(e.p,{children:["This command will build the following for your contract: a Wasm binary, a metadata file (which contains the\ncontract's ABI) and a ",(0,o.jsx)(e.code,{children:".contract"})," file which bundles both. This ",(0,o.jsx)(e.code,{children:".contract"})," file can be used to\ndeploy your contract to a chain. If all goes well, you should see a ",(0,o.jsx)(e.code,{children:"target"})," folder which\ncontains these files:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"target\n  \u2514\u2500 ink\n    \u2514\u2500 flipper.contract\n    \u2514\u2500 flipper.wasm\n    \u2514\u2500 metadata.json\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Let's take a look at the structure of the ",(0,o.jsx)(e.code,{children:"metadata.json"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "metadataVersion": "0.1.0",\n  "source": {...},\n  "contracts": {...},\n  "spec": {\n    "constructors": [...],\n    "docs": [],\n    "events": [],\n    "messages": [...],\n  },\n  "storage": {...},\n  "types": [...]\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"This file describes all the interfaces that can be used to interact with your contract:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"types"})," provides the custom ",(0,o.jsx)(e.strong,{children:"data types"})," used throughout the rest of the JSON."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"storage"})," defines all the ",(0,o.jsx)(e.strong,{children:"storage"})," items managed by your contract and how to ultimately access them."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"spec"})," stores information about the callable functions like ",(0,o.jsx)(e.strong,{children:"constructors"})," and ",(0,o.jsx)(e.strong,{children:"messages"})," a\nuser can call to interact with the contract. It also has helpful information like the ",(0,o.jsx)(e.strong,{children:"events"}),"\nthat are emitted by the contract or any ",(0,o.jsx)(e.strong,{children:"docs"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["If you look closely at the constructors and messages, you will also notice a ",(0,o.jsx)(e.code,{children:"selector"})," which\ncontains a 4-byte hash of the function name and is used to route your contract calls to the correct\nfunctions."]}),"\n",(0,o.jsxs)(e.p,{children:["In the next section we will start a ",(0,o.jsx)(e.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:"Substrate Smart Contracts node"}),"\nand configure the ",(0,o.jsx)(e.a,{href:"https://github.com/paritytech/contracts-ui",children:"Contracts UI"})," to interact with it."]})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function c(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);
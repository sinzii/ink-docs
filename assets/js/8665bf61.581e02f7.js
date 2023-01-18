"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7046],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7568:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Compile Your Contract",slug:"/getting-started/building-your-contract"},i=void 0,c={unversionedId:"getting-started/compiling",id:"version-4.0.0-alpha.1/getting-started/compiling",title:"Compile Your Contract",description:"Run the following command in your flipper directory to compile your smart contract:",source:"@site/versioned_docs/version-4.0.0-alpha.1/getting-started/compiling.md",sourceDirName:"getting-started",slug:"/getting-started/building-your-contract",permalink:"/4.0.0-alpha.1/getting-started/building-your-contract",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/getting-started/compiling.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Compile Your Contract",slug:"/getting-started/building-your-contract"},sidebar:"reference",previous:{title:"Creating an ink! Project",permalink:"/4.0.0-alpha.1/getting-started/creating-an-ink-project"},next:{title:"Run a Substrate Node",permalink:"/4.0.0-alpha.1/getting-started/running-substrate"}},l={},s=[],p={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Run the following command in your ",(0,a.kt)("inlineCode",{parentName:"p"},"flipper")," directory to compile your smart contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo +nightly contract build\n")),(0,a.kt)("p",null,"This command will build the following for your contract: a Wasm binary, a metadata file (which contains the\ncontract's ABI) and a ",(0,a.kt)("inlineCode",{parentName:"p"},".contract")," file which bundles both. This ",(0,a.kt)("inlineCode",{parentName:"p"},".contract")," file can be used to\ndeploy your contract to a chain. If all goes well, you should see a ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," folder which\ncontains these files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"target\n  \u2514\u2500 ink\n    \u2514\u2500 flipper.contract\n    \u2514\u2500 flipper.wasm\n    \u2514\u2500 metadata.json\n")),(0,a.kt)("p",null,"Let's take a look at the structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metadataVersion": "0.1.0",\n  "source": {...},\n  "contracts": {...},\n  "spec": {\n    "constructors": [...],\n    "docs": [],\n    "events": [],\n    "messages": [...],\n  },\n  "storage": {...},\n  "types": [...]\n}\n')),(0,a.kt)("p",null,"This file describes all the interfaces that can be used to interact with your contract:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"types")," provides the custom ",(0,a.kt)("strong",{parentName:"li"},"data types")," used throughout the rest of the JSON."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storage")," defines all the ",(0,a.kt)("strong",{parentName:"li"},"storage")," items managed by your contract and how to ultimately access them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec")," stores information about the callable functions like ",(0,a.kt)("strong",{parentName:"li"},"constructors")," and ",(0,a.kt)("strong",{parentName:"li"},"messages")," a\nuser can call to interact with the contract. It also has helpful information like the ",(0,a.kt)("strong",{parentName:"li"},"events"),"\nthat are emitted by the contract or any ",(0,a.kt)("strong",{parentName:"li"},"docs"),".\n")),(0,a.kt)("p",null,"If you look closely at the constructors and messages, you will also notice a ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," which\ncontains a 4-byte hash of the function name and is used to route your contract calls to the correct\nfunctions."),(0,a.kt)("p",null,"In the next section we will start a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},"Substrate Smart Contracts node"),"\nand configure the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/contracts-ui"},"Contracts UI")," to interact with it."))}u.isMDXComponent=!0}}]);
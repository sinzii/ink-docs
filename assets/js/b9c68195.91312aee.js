"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7176],{64306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=n(74848),i=n(28453);const o={title:"ink! vs. CosmWasm",slug:"/ink-vs-cosmwasm",hide_title:!0},c="ink! vs. CosmWasm",r={id:"intro/ink-vs-cosmwasm",title:"ink! vs. CosmWasm",description:"This is a short comparison between ink!",source:"@site/docs/intro/ink-vs-cosmwasm.md",sourceDirName:"intro",slug:"/ink-vs-cosmwasm",permalink:"/ink-vs-cosmwasm",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/ink-vs-cosmwasm.md",tags:[],version:"current",frontMatter:{title:"ink! vs. CosmWasm",slug:"/ink-vs-cosmwasm",hide_title:!0},sidebar:"reference",previous:{title:"ink! vs. Solidity",permalink:"/ink-vs-solidity"},next:{title:"Migrating an ink! contract to a Parachain Runtime",permalink:"/migrate-ink-contracts-to-polkadot-frame-parachain"}},a={},d=[{value:"Architecture",id:"architecture",level:2},{value:"Unit Testing",id:"unit-testing",level:2},{value:"Compiler",id:"compiler",level:2},{value:"Testnets",id:"testnets",level:2},{value:"Development Workflow",id:"development-workflow",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Environment Setup",id:"environment-setup",level:3},{value:"Compile and Test",id:"compile-and-test",level:3},{value:"Deploy and Interact",id:"deploy-and-interact",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/cosmwasm.svg",className:"titlePic"}),"\n",(0,s.jsx)(t.h1,{id:"ink-vs-cosmwasm",children:"ink! vs. CosmWasm"}),"\n",(0,s.jsxs)(t.p,{children:["This is a short comparison between ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink/",children:"ink!"}),"\nand ",(0,s.jsx)(t.a,{href:"https://github.com/CosmWasm/cosmwasm",children:"CosmWasm"})," meant to onboard\ndevelopers coming from the Cosmos ecosystem."]}),"\n",(0,s.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsxs)(t.p,{children:["CosmWasm is modular, meaning that any blockchain using the Cosmos SDK can add smart\ncontract support to their chain. That is similar to the ",(0,s.jsx)(t.a,{href:"https://substrate.io/",children:"Substrate"}),"\napproach, where chains have the option to add ",(0,s.jsx)(t.code,{children:"pallet-contracts"})," to their runtime."]}),"\n",(0,s.jsx)(t.p,{children:"Aside from that, the architecture philosophy is likely the point where CosmWasm and ink!\ndiffer the most. CosmWasm follows the actor model design pattern, while ink! follows a\nsynchronous execution model. That means some fundamental differences in how the source\ncode is structured."}),"\n",(0,s.jsx)(t.p,{children:"The main entry point functions of CosmWasm contracts are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"instantiate"})," which bootstraps the initial contract state (assuming it's already been\ndeployed)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"execute"})," which has the actor perform operations to its internal state."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"query"})," which retrieves data from the actor\u2019s internal state."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"An ink! contract can have as many public dispatchables as the developer desires, and\ndifferently from CosmWasm, it doesn\u2019t rely on JSON schemas for defining how the messages\nare structured."}),"\n",(0,s.jsx)(t.p,{children:"Instead, ink! makes heavy usage of Rust macros. The main ink! macros are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"#[ink(constructor)]"})," which is called when the contract is deployed, and is responsible\nfor bootstrapping the initial contract state into the storage. It is analogous to the\nCosmWasm ",(0,s.jsx)(t.code,{children:"instantiate"})," function."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"#[ink(storage)]"})," which annotates a struct that represents the contract's internal\nstate."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"#[ink(message)]"})," which marks a function as a public dispatchable, meaning that it is\nexposed in the contract interface to the outside world. This macro can make a function\nbehave analogously to CosmWasm\u2019s ",(0,s.jsx)(t.code,{children:"execute"})," and ",(0,s.jsx)(t.code,{children:"query"})," functions. This depends on how it\naffects the internal contract state and what the return types."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"#[ink(event)]"})," and ",(0,s.jsx)(t.code,{children:"#[ink(topic)]"})," which annotates a struct and its members as the\nevents and topics that the contract might emit."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["There are other ink! macros, for which details can be found at ",(0,s.jsx)(t.a,{href:"/macros-attributes",children:"Macros & Attributes"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"unit-testing",children:"Unit Testing"}),"\n",(0,s.jsxs)(t.p,{children:["Unit testing in CosmWasm is quite similar to ink!. Both use the conventional Rust\n",(0,s.jsx)(t.code,{children:"#[cfg(test)]"})," macro and set up a mock on-chain environment."]}),"\n",(0,s.jsxs)(t.p,{children:["While CosmWasm unit tests have different modules for each of the three main entry-point\nfunctions, ink! allows for a more generalised approach, where the ",(0,s.jsx)(t.code,{children:"#[ink(test)]"})," macro is\nused for each unit test."]}),"\n",(0,s.jsxs)(t.p,{children:["You can read more about ink! unit tests ",(0,s.jsx)(t.a,{href:"https://use.ink/basics/contract-testing#unit-tests",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"compiler",children:"Compiler"}),"\n",(0,s.jsxs)(t.p,{children:["CosmWasm uses ",(0,s.jsx)(t.a,{href:"https://docs.rs/crate/cargo-wasm/latest",children:"cargo-wasm"})," as its main\ncompiler, while ink! uses ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/cargo-contract",children:"cargo-contract"}),".\n",(0,s.jsx)(t.code,{children:"cargo-contract"})," is developed by Parity specifically for building, testing, and deploying\nink! contracts."]}),"\n",(0,s.jsx)(t.h1,{id:"local-development-network",children:"Local Development Network"}),"\n",(0,s.jsxs)(t.p,{children:["In terms of local development networks, the ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/gaia",children:"cosmos/gaia"}),"\nrepository acts as the basic template for a generic Cosmos node. With the addition of the\n",(0,s.jsx)(t.code,{children:"x/wasm"})," module and some clean-up, this template repository becomes\n",(0,s.jsx)(t.a,{href:"https://github.com/CosmWasm/wasmd",children:"wasmd"}),", the entry point for CosmWasm development."]}),"\n",(0,s.jsxs)(t.p,{children:["In terms of Substrate, ",(0,s.jsx)(t.code,{children:"substrate-node-template"})," is a basic generic template of a node.\nSimilar to ",(0,s.jsx)(t.code,{children:"x/wasm"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,s.jsx)(t.code,{children:"pallet-contracts"})}),"\nis the module that adds WebAssembly smart contract functionality to the chain. Parity\nprovides the ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:"substrate-contracts-node"}),",\nwhich is analogous to ",(0,s.jsx)(t.code,{children:"wasmd"})," - a basic template node for smart contract development."]}),"\n",(0,s.jsx)(t.h2,{id:"testnets",children:"Testnets"}),"\n",(0,s.jsxs)(t.p,{children:["For CosmWasm development and on-chain testing, ",(0,s.jsx)(t.code,{children:"wasmd"})," can be operated as a local setup\n(single or multiple nodes), or connected to the ",(0,s.jsx)(t.code,{children:"cliffnet"})," public test network."]}),"\n",(0,s.jsx)(t.p,{children:"ink! contracts can be deployed on a few different options:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Locally, on a single or multiple node setup of ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:(0,s.jsx)(t.code,{children:"substrate-contracts-node"})}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer",children:"Contracts on Rococo Parachain"}),",\nwhich is connected to the ",(0,s.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer",children:"Rococo relay chain test network"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.astar.network/docs/build/Introduction/astar_family/#shibuya",children:"Astar Network\u2019s Shibuya testnet"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"development-workflow",children:"Development Workflow"}),"\n",(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.p,{children:["The first step in CosmWasm development is to\n",(0,s.jsx)(t.a,{href:"https://docs.cosmwasm.com/docs/getting-started/installation",children:"install dependencies"}),",\nnamely Go, Rust and ",(0,s.jsx)(t.code,{children:"wasmd"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For ink! you can also find ",(0,s.jsx)(t.a,{href:"/getting-started/setup",children:"a setup guide"})," which will help you\nwith dependencies, namely Rust, ",(0,s.jsx)(t.code,{children:"cargo-contract"})," and ",(0,s.jsx)(t.code,{children:"substrate-contracts-node"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,s.jsxs)(t.p,{children:["The next step in the CosmWasm development workflow is\n",(0,s.jsx)(t.a,{href:"https://docs.cosmwasm.com/docs/getting-started/setting-env",children:"setting up the environment"}),".\nThat consists mainly of configuring ",(0,s.jsx)(t.code,{children:"wasmd"})," such that it has prefunded accounts that are able\nto interact with the network."]}),"\n",(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.code,{children:"substrate-contracts-node"})," is started, it already contains well\nknown pre-funded accounts (",(0,s.jsx)(t.code,{children:"alice"}),", ",(0,s.jsx)(t.code,{children:"bob"}),", etc.) which are ready to be used for development."]}),"\n",(0,s.jsx)(t.h3,{id:"compile-and-test",children:"Compile and Test"}),"\n",(0,s.jsxs)(t.p,{children:["CosmWasm provides example contracts at the\n",(0,s.jsx)(t.a,{href:"https://github.com/InterWasm/cw-contracts",children:"cw-contracts"})," repository. After the\nrepository is cloned, from the contract directory it can be compiled via:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ cargo wasm\n"})}),"\n",(0,s.jsx)(t.p,{children:"and tested via:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ cargo unit-test\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Similarly, ink! provides an\n",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink-examples/tree/main",children:(0,s.jsx)(t.code,{children:"examples"})})," directory of its\nmain repository."]}),"\n",(0,s.jsx)(t.p,{children:"A contract can be compiled from its directory via:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ cargo contract build\n"})}),"\n",(0,s.jsx)(t.p,{children:"and tested via:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ cargo test\n"})}),"\n",(0,s.jsx)(t.h3,{id:"deploy-and-interact",children:"Deploy and Interact"}),"\n",(0,s.jsxs)(t.p,{children:["CosmWasm contracts are deployed and instantiated with help of the ",(0,s.jsx)(t.code,{children:"wasmd"})," executable. The\nlist of step is provided ",(0,s.jsx)(t.a,{href:"https://docs.cosmwasm.com/docs/getting-started/interact-with-contract",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["It is possible to deploy and interact with ink! contracts using either a CLI\n(",(0,s.jsx)(t.code,{children:"cargo-contract"}),"), or a web UI (",(0,s.jsx)(t.a,{href:"https://contracts-ui.substrate.io/",children:(0,s.jsx)(t.code,{children:"contracts-ui"})}),")."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://github.com/paritytech/cargo-contract/blob/master/crates/extrinsics/README.md",children:["Instructions for ",(0,s.jsx)(t.code,{children:"cargo-contract"})]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"/getting-started/deploy-your-contract",children:["Instructions for ",(0,s.jsx)(t.code,{children:"contracts-ui"})]})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
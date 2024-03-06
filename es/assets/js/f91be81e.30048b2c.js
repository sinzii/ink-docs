"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9352],{83164:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=n(74848),r=n(28453);const c={title:"Contract Verification",slug:"/basics/verification/contract-verification",hide_title:!0},o="Contract Verification",a={id:"basics/verification/contract-verification",title:"Contract Verification",description:"Contract verification is the process of matching a deployed ink! contract",source:"@site/docs/basics/verification/contract-verification.md",sourceDirName:"basics/verification",slug:"/basics/verification/contract-verification",permalink:"/es/basics/verification/contract-verification",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/verification/contract-verification.md",tags:[],version:"current",frontMatter:{title:"Contract Verification",slug:"/basics/verification/contract-verification",hide_title:!0},sidebar:"reference",previous:{title:"Contract Debugging",permalink:"/es/basics/contract-debugging"},next:{title:"Sirato",permalink:"/es/basics/verification/sirato"}},s={},d=[{value:"Verifiable build",id:"verifiable-build",level:2},{value:"Verifying contract",id:"verifying-contract",level:2},{value:"Advanced usage",id:"advanced-usage",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:"/img/title/verification.svg",className:"titlePic"}),"\n",(0,t.jsx)(i.h1,{id:"contract-verification",children:"Contract Verification"}),"\n",(0,t.jsx)(i.p,{children:"Contract verification is the process of matching a deployed ink! contract\nwith the source code and metadata generated when it was built."}),"\n",(0,t.jsx)(i.p,{children:"The verification process for Rust-based smart contract languages is more\ncomplex than EVM-based languages such as Solidity due to the Rust\ncompiler not providing deterministic builds of contracts."}),"\n",(0,t.jsx)(i.p,{children:"In order to verify an ink! smart contract, the verification\nprocess must recompile the contract in an identical host environment to\nwhich it was originally built. The simplest way to do this is using a Docker\ncontainer."}),"\n",(0,t.jsxs)(i.p,{children:["Since ink! ",(0,t.jsx)(i.code,{children:"4.0.0"}),", ",(0,t.jsx)(i.code,{children:"cargo-contract"})," provides the necessary tools to produce\na verifiable build and verify a binary against the reference contract."]}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsxs)(i.p,{children:["Contract verification tools are currently available in ",(0,t.jsx)(i.code,{children:"cargo-contract"}),"\nversion ",(0,t.jsx)(i.code,{children:"4.0.0-alpha"}),". To install it, run"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"cargo install cargo-contract --locked --version 4.0.0-alpha\n"})})]}),"\n",(0,t.jsx)(i.h2,{id:"verifiable-build",children:"Verifiable build"}),"\n",(0,t.jsxs)(i.p,{children:["As mentioned earlier, due to the non-deterministic nature of Rust compilation,\nsmart contract developers are advised to build their project inside\na Docker container we provide. Luckily, ",(0,t.jsx)(i.code,{children:"cargo contract build"}),"\nprovides the ",(0,t.jsx)(i.code,{children:"--verifiable"})," flag for this purpose."]}),"\n",(0,t.jsx)(i.p,{children:"The steps for the verifiable build production are:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://docs.docker.com/engine/install/",children:"Install Docker Engine"})}),"\n",(0,t.jsxs)(i.li,{children:["(Linux users) Make sure you complete the ",(0,t.jsx)(i.a,{href:"https://docs.docker.com/engine/install/linux-postinstall/",children:"post-installation step"}),".\nThis is required for the correct operation of the command."]}),"\n",(0,t.jsx)(i.li,{children:"Ensure Docker Engine is up and running, and the socket is accessible."}),"\n",(0,t.jsxs)(i.li,{children:["Simply run ",(0,t.jsx)(i.code,{children:"cargo contract build --verifiable"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["This will pull the image with the version that corresponds to your ",(0,t.jsx)(i.code,{children:"cargo-contract"})," crate version,\nperform a build, and write artifacts in the standard output directory."]}),"\n",(0,t.jsxs)(i.p,{children:["If everything is correct, you can verify the image version in the metadata file.\nIt should contain a key-value ",(0,t.jsx)(i.code,{children:"image"})," after the ",(0,t.jsx)(i.code,{children:"contract"})," information:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'  "contract": {\n    "name": "flipper",\n    "version": "4.3.0",\n    "authors": [\n      "Parity Technologies <admin@parity.io>"\n    ]\n  },\n  "image": "paritytech/contracts-verifiable:4.0.0-alpha",\n'})}),"\n",(0,t.jsx)(i.p,{children:"You are now ready to deploy your contract to a production chain."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["The image is ",(0,t.jsx)(i.code,{children:"amd64"})," based. Therefore, the build times can be significantly slower\non Apple Silicon machines. To overcome the issue enable ",(0,t.jsx)(i.em,{children:"Rosetta for x86/amd64 emulation"}),"\nin ",(0,t.jsx)(i.em,{children:"Settings"})," \u2192 ",(0,t.jsx)(i.em,{children:"Features in development"})," tab in Docker Desktop App."]})}),"\n",(0,t.jsx)(i.h2,{id:"verifying-contract",children:"Verifying contract"}),"\n",(0,t.jsx)(i.p,{children:"Similarly to etherscan, you want to ensure that the given contract bundle\nis indeed a copy of some well-known contract code."}),"\n",(0,t.jsx)(i.p,{children:"There are two options when it comes to verification:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Local bare-bones verification using ",(0,t.jsx)(i.code,{children:"cargo contract verify"})]}),"\n",(0,t.jsxs)(i.li,{children:["A third-party service ",(0,t.jsx)(i.a,{href:"/basics/verification/sirato",children:"Sirato"})]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"cargo contract verify"})," allows you to verify the given cargo project\nagainst a reference contract bundle."]}),"\n",(0,t.jsxs)(i.p,{children:["Simply run ",(0,t.jsx)(i.code,{children:"cargo contract verify <path>"}),"\nin the cargo project directory."]}),"\n",(0,t.jsx)(i.p,{children:"If the reference contract was not build inside a docker container, the command\nwill compare the build info from the reference contract with the current environment\nto ensure a match in environment."}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"If you are not using standardized verifiable builds. It is your responsibility\nto ensure deterministic environment both for build and verification of\nsmart contracts."})}),"\n",(0,t.jsxs)(i.p,{children:["If the build info from the ",(0,t.jsx)(i.code,{children:".contract"})," file matches the environment and a\ndocker ",(0,t.jsx)(i.code,{children:"image"})," is present in metadata, ",(0,t.jsx)(i.code,{children:"cargo contract"})," will build the\nproject inside the specified ",(0,t.jsx)(i.code,{children:"image"})," docker container.\nOtherwise, a local build is carried out."]}),"\n",(0,t.jsx)(i.p,{children:"Upon completion, the built contract bundle is compared to the reference one\nand the result is returned."}),"\n",(0,t.jsx)(i.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,t.jsxs)(i.p,{children:["If you would like to carry out other operations inside a deterministic environment\nyou can use our docker image. It is availble on ",(0,t.jsx)(i.a,{href:"https://hub.docker.com/repository/docker/paritytech/contracts-verifiable/general",children:"Docker Hub"}),".\nThe entry point is set to ",(0,t.jsx)(i.code,{children:"cargo contract"})," allowing you to specify other commands to be\nexecuted."]}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsx)(i.p,{children:"If you are building a multi-contract project,\nmake sure you are executing the build in the parent directory in order to mount the directory\nof all contracts to be visible. Specify a relative manifest path to the root contract:"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"cargo contract build --verifiable --manifest-path ink-project-a/Cargo.toml"})})]}),"\n",(0,t.jsxs)(i.p,{children:["You can find a Dockefile and further documentation on image usage\nin ",(0,t.jsxs)(i.a,{href:"https://github.com/paritytech/cargo-contract/tree/master/build-image",children:["the ",(0,t.jsx)(i.code,{children:"cargo-contract"})," repository"]})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(96540);const r={},c=t.createContext(r);function o(e){const i=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(c.Provider,{value:i},e.children)}}}]);
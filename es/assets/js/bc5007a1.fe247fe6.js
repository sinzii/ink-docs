"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1020],{12987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(74848),s=t(28453);const o={title:"August '22",slug:"/monthly-update/2022/08"},r=void 0,a={id:"monthly-update/2022/08",title:"August '22",description:"Releases \ud83d\udea2",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/monthly-update/2022/08.md",sourceDirName:"monthly-update/2022",slug:"/monthly-update/2022/08",permalink:"/es/3.x/monthly-update/2022/08",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/monthly-update/2022/08.md",tags:[],version:"3.x",frontMatter:{title:"August '22",slug:"/monthly-update/2022/08"}},c={},l=[{value:"Releases \ud83d\udea2",id:"releases-",level:2},{value:"W3F Grant \ud83d\ude4c",id:"w3f-grant-",level:2},{value:"Squink in Cambridge \ud83c\uddec\ud83c\udde7",id:"squink-in-cambridge-",level:2},{value:"Swanky \ud83d\ude0e",id:"swanky-",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"releases-",children:"Releases \ud83d\udea2"}),"\n",(0,i.jsx)(n.p,{children:"We've made a couple releases this month:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cargo-contract"})," ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/cargo-contract/releases/tag/v1.5.0",children:(0,i.jsx)(n.code,{children:"v1.5.0"})})]}),"\n",(0,i.jsxs)(n.li,{children:["ink! ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/ink/releases/tag/v4.0.0-alpha.1",children:(0,i.jsx)(n.code,{children:"v4.0.0-alpha.1"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cargo-contract"})," ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/cargo-contract/releases/tag/v2.0.0-alpha.1",children:(0,i.jsx)(n.code,{children:"v2.0.0-alpha.1"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Our goal is to publish the next major releases of  ink! and ",(0,i.jsx)(n.code,{children:"cargo-contract"})," in October;\nthis will then be ink! 4.0 with an accompanying ",(0,i.jsx)(n.code,{children:"cargo-contract"})," 2.0.\nYou can find the tracking issue for ink! 4.0 ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/ink/issues/1343",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"w3f-grant-",children:"W3F Grant \ud83d\ude4c"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cargo-contract"})," currently requires some external dependencies to be installed by users\nbefore they can use it.\nOne of those is ",(0,i.jsx)(n.code,{children:"wasm-opt"}),", which we use for optimizing the WebAssembly file size of\nan ink! contract."]}),"\n",(0,i.jsxs)(n.p,{children:["Having this tool as an external dependency is causing friction for beginners.\nThey have to install it manually and the process varies for each operating system.\nIt bloats up the ",(0,i.jsx)(n.code,{children:"cargo-contract"})," installation instructions and people not following\nthem properly run into errors because of a missing dependency."]}),"\n",(0,i.jsxs)(n.p,{children:["Luckily ",(0,i.jsx)(n.a,{href:"https://github.com/brson",children:"@brson"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/aimeedeer",children:"@aimeedeer"}),"\nhave applied for a Web3 Foundation (W3F) grant to fix exactly that for\n",(0,i.jsx)(n.code,{children:"wasm-opt"}),"!\nThey've delivered the first milestone \u2012 a proof of concept \u2012 this month.\nYou can read their summary ",(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/552",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Their next milestone is the integration into ",(0,i.jsx)(n.code,{children:"cargo-contract"})," which will reduce our\ninstallation instructions by one step \ud83d\ude4c!"]}),"\n",(0,i.jsx)(n.h2,{id:"squink-in-cambridge-",children:"Squink in Cambridge \ud83c\uddec\ud83c\udde7"}),"\n",(0,i.jsx)(n.p,{children:"Some people from our team spent a week in Cambridge for a Parity\nevent. We can't disclose too much about it at this point, but\nthere'll be more information on it in a while."}),"\n",(0,i.jsxs)(n.p,{children:["We brought our mascot ",(0,i.jsx)(n.a,{href:"/faq#who-is-squink",children:"Squink"})," along and ",(0,i.jsx)(n.a,{href:"https://github.com/ascjones",children:"Andrew"}),"\nplayed around with his early access to DALL\xb7E 2.\nThe photo below was generated by asking for Instagram posts of Squink visiting\nthe Corpus Christi college in Cambridge."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Squink in Cambridge",src:t(79609).A+"",width:"1132",height:"293"})}),"\n",(0,i.jsx)(n.h2,{id:"swanky-",children:"Swanky \ud83d\ude0e"}),"\n",(0,i.jsx)(n.p,{children:"The Astar team has developed a suite of tools for WebAssembly smart contract\ndevelopment called Swanky!"}),"\n",(0,i.jsxs)(n.p,{children:["It consists of a command-line tool and a node for easy contract development.\nRead more about it in their\n",(0,i.jsx)(n.a,{href:"https://medium.com/astar-network/swanky-the-all-in-one-wasm-tool-50c0ed9f07a6",children:"Medium post"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79609:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/squink-in-cambridge-0b219d073a6ba25a92470bf5143d6067.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
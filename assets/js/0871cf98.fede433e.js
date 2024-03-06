"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2191],{29410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(74848),a=n(28453);const i={title:"Mutating Storage Values",slug:"/basics/mutating-values",hide_title:!0},o="Mutating Storage Values",r={id:"basics/mutating-values",title:"Mutating Storage Values",description:"It's time to modify some storage!",source:"@site/docs/basics/mutating-values.md",sourceDirName:"basics",slug:"/basics/mutating-values",permalink:"/basics/mutating-values",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/mutating-values.md",tags:[],version:"current",frontMatter:{title:"Mutating Storage Values",slug:"/basics/mutating-values",hide_title:!0},sidebar:"reference",previous:{title:"Reading Values from Storage",permalink:"/basics/reading-values"},next:{title:"Events",permalink:"/basics/events"}},u={},c=[{value:"Mutable and Immutable Functions",id:"mutable-and-immutable-functions",level:2}];function l(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/storage-mutating.svg",className:"titlePic"}),"\n",(0,s.jsx)(t.h1,{id:"mutating-storage-values",children:"Mutating Storage Values"}),"\n",(0,s.jsx)(t.p,{children:"It's time to modify some storage!"}),"\n",(0,s.jsx)(t.h2,{id:"mutable-and-immutable-functions",children:"Mutable and Immutable Functions"}),"\n",(0,s.jsxs)(t.p,{children:["You may have noticed that the function template included ",(0,s.jsx)(t.code,{children:"self"})," as the first parameter of the\ncontract functions. It is through ",(0,s.jsx)(t.code,{children:"self"})," that you gain access to all your contract functions and\nstorage items."]}),"\n",(0,s.jsxs)(t.p,{children:["If you are simply ",(0,s.jsx)(t.em,{children:"reading"})," from the contract storage, you only need to pass ",(0,s.jsx)(t.code,{children:"&self"}),". But\nif you want to ",(0,s.jsx)(t.em,{children:"modify"})," storage items, you will need to explicitly mark it as mutable,\n",(0,s.jsx)(t.code,{children:"&mut self"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.my_number\n    }\n\n    #[ink(message)]\n    pub fn my_setter(&mut self, new_value: u32) {\n        self.my_number = new_value;\n    }\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
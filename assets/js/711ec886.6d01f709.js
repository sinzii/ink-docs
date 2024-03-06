"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8718],{54346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var s=n(74848),a=n(28453);const i={title:'#[ink(namespace = "\u2026")]',slug:"/macros-attributes/namespace",hide_title:!0},r=void 0,o={id:"macros-attributes/namespace",title:'#[ink(namespace = "\u2026")]',description:"Applicable to ink! trait implementation blocks.",source:"@site/versioned_docs/version-5.x/macros-attributes/namespace.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/namespace",permalink:"/5.x/macros-attributes/namespace",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/macros-attributes/namespace.md",tags:[],version:"5.x",frontMatter:{title:'#[ink(namespace = "\u2026")]',slug:"/macros-attributes/namespace",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(message)]",permalink:"/5.x/macros-attributes/message"},next:{title:"#[ink(payable)]",permalink:"/5.x/macros-attributes/payable"}},c={},m=[{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/text/namespace.svg",className:"titlePic"}),"\n",(0,s.jsx)(t.p,{children:"Applicable to ink! trait implementation blocks."}),"\n",(0,s.jsx)(t.p,{children:"Applied on ink! trait implementation blocks to disambiguate other trait\nimplementation blocks with equal names."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[ink(namespace = "my_namespace")]\nimpl MyTrait for MyStorage {\n    #[ink(message)]\n    fn my_message(&self) {}\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"This changes the resulting selectors of all the ink! messages and ink! constructors within the trait implementation.\nThus allowing disambiguation between trait implementations with overlapping message or constructor names."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
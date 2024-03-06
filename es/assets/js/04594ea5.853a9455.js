"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6738],{76693:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(74848),r=s(28453);const i={title:"#[ink(storage)]",slug:"/macros-attributes/storage",hide_title:!0},o=void 0,a={id:"macros-attributes/storage",title:"#[ink(storage)]",description:"Aplicable a las definiciones struct.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/macros-attributes/storage.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/storage",permalink:"/es/5.x/macros-attributes/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/macros-attributes/storage.md",tags:[],version:"5.x",frontMatter:{title:"#[ink(storage)]",slug:"/macros-attributes/storage",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(selector = S:u32)]",permalink:"/es/5.x/macros-attributes/selector"},next:{title:"#[ink(topic)]",permalink:"/es/5.x/macros-attributes/topic"}},c={},l=[{value:"Ejemplo",id:"ejemplo",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:"/img/title/text/storage.svg",className:"titlePic"}),"\n",(0,n.jsxs)(t.p,{children:["Aplicable a las definiciones ",(0,n.jsx)(t.code,{children:"struct"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Aplicado en tipos ",(0,n.jsx)(t.code,{children:"struct"})," para marcarlos por\nser la definici\xf3n del storage del contrato.\nSolo puede ser la definici\xf3n del storage ink! del contrato."]}),"\n",(0,n.jsxs)(t.p,{children:["Tiene que haber exactamente un struct ",(0,n.jsx)(t.code,{children:"#[ink(storage)]"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"El struct define el dise\xf1o del storage donde el smart contract ink! opera.\nEl usuario puede utilizar una variedad de facilidades built-in, combinandolos de varias maneras\no incluso proveendo sus propias implementaciones de las estructuras de datos del storage."}),"\n",(0,n.jsxs)(t.p,{children:["Para m\xe1s informaci\xf3n visita la documentaci\xf3n del crate ",(0,n.jsx)(t.code,{children:"ink_storage"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"#[ink::contract]\nmod flipper {\n\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn construct() -> Self { Flipper { value: false } }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8511],{27322:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(74848),s=a(28453);const r={title:"#[ink(payable)]",slug:"/macros-attributes/payable",hide_title:!0},l=void 0,i={id:"macros-attributes/payable",title:"#[ink(payable)]",description:"Aplicable a los mensajes ink!.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/macros-attributes/payable.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/payable",permalink:"/es/5.x/macros-attributes/payable",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/macros-attributes/payable.md",tags:[],version:"5.x",frontMatter:{title:"#[ink(payable)]",slug:"/macros-attributes/payable",hide_title:!0},sidebar:"reference",previous:{title:'#[ink(namespace = "\u2026")]',permalink:"/es/5.x/macros-attributes/namespace"},next:{title:"#[ink(selector = S:u32)]",permalink:"/es/5.x/macros-attributes/selector"}},o={},c=[{value:"Ejemplo",id:"ejemplo",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:"/img/title/text/payable.svg",className:"titlePic"}),"\n",(0,t.jsx)(n.p,{children:"Aplicable a los mensajes ink!."}),"\n",(0,t.jsx)(n.p,{children:"Permite recibir valor como parte de la llamada del mensaje ink!.\nLos constructores ink! son implicitamente payables, dada la dotaci\xf3n inicial que requiere un contrato."}),"\n",(0,t.jsxs)(n.p,{children:["Un mensaje ink! por defecto rechazara las llamadas que adicionalmente financian el smart contract.\nLos autores de los smart contracts ink! pueden hacer que los mensajes ink! sean payable\na\xf1adiendole la marca ",(0,t.jsx)(n.code,{children:"payable"}),". Un ejemplo a continuaci\xf3n:"]}),"\n",(0,t.jsx)(n.p,{children:"Date cuenta que los constructores ink! son siempre implicitamente payable y por lo tanto no pueden\nser marcados como tal."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod flipper {\n\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Voltea el valor actual.\n        #[ink(message)]\n        #[ink(payable)] // Tu puedes especificar payable out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Devuelve el valor actual.\n        #[ink(message, payable)] // o especificar payable inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[ink(message, payable)]\npub fn pay_me(&self) {\n    let _transferred = self.env().transferred_balance();\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Mira el contrato ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink-examples/blob/main/contract-transfer/lib.rs",children:(0,t.jsx)(n.code,{children:"examples/contract-transfer"})})," para un ejemplo m\xe1s externo."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var t=a(96540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6065],{54042:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(74848),a=s(28453);const o={title:"#[ink(message)]",slug:"/macros-attributes/message",hide_title:!0},i=void 0,r={id:"macros-attributes/message",title:"#[ink(message)]",description:"Aplicable a m\xe9todos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/macros-attributes/message.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/message",permalink:"/es/macros-attributes/message",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/message.md",tags:[],version:"current",frontMatter:{title:"#[ink(message)]",slug:"/macros-attributes/message",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(impl)]",permalink:"/es/macros-attributes/impl"},next:{title:'#[ink(namespace = "\u2026")]',permalink:"/es/macros-attributes/namespace"}},c={},l=[{value:"Valor de retorno de los mensajes",id:"valor-de-retorno-de-los-mensajes",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:"/img/title/text/message.svg",className:"titlePic"}),"\n",(0,t.jsx)(n.p,{children:"Aplicable a m\xe9todos."}),"\n",(0,t.jsx)(n.p,{children:"Marca un m\xe9todo para el struct storage de ink! como mensaje haciendo que este disponible para la API al llamar al contrato."}),"\n",(0,t.jsxs)(n.p,{children:["Date cuenta que todas las funciones p\xfablicas deben utilizar el atributo ",(0,t.jsx)(n.code,{children:"#[ink(message)]"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Al menos debe haber un m\xe9todo ",(0,t.jsx)(n.code,{children:"#[ink(message)]"})," definido."]}),"\n",(0,t.jsxs)(n.p,{children:["Los m\xe9todos marcados con ",(0,t.jsx)(n.code,{children:"#[ink(message)]"})," son especiales de un modo que son dispatchables\nen la invocaci\xf3n del contrato. El conjunto de mensajes de ink! definidos por los smart contract ink!\ndefined su superficie API con los usuarios que est\xe1n permitidos interactuar."]}),"\n",(0,t.jsx)(n.p,{children:"Un smart contract de ink! puede tener multiples mensajes ink! definidos."}),"\n",(0,t.jsxs)(n.p,{children:["Un mensaje ink! con un receptor  ",(0,t.jsx)(n.code,{children:"&self"})," solo puede leer el estado mientras un mensaje ink!\ncon un receptor ",(0,t.jsx)(n.code,{children:"&mut self"})," puede mutar el storage del contrato."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[ink(message)]\npub fn purely_reading(&self, from: AccountId) {\n    // implementaci\xf3n actual\n}\n\n#[ink(message)]\npub fn mutates_storage(&mut self, from: AccountId) {\n    // implementaci\xf3n actual\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"valor-de-retorno-de-los-mensajes",children:"Valor de retorno de los mensajes"}),"\n",(0,t.jsxs)(n.p,{children:["El valor de returno de un mensaje tiene que implementar  ",(0,t.jsx)(n.code,{children:"scale::Encode"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Es notable que la colecci\xf3n bajo  ",(0,t.jsx)(n.code,{children:"ink_storage"})," \u2012 como por ejemplo ",(0,t.jsx)(n.code,{children:"Vec"})," o ",(0,t.jsx)(n.code,{children:"HashMap"})," \u2012\nno implementa ",(0,t.jsx)(n.code,{children:"scale::Encode"}),". Esto quiere decir que no puedes solo retornar un ",(0,t.jsx)(n.code,{children:"Vec"})," desde un mensaje ink!.\nEsta restricci\xf3n es intencional \u2012 devolviendo una estructura de datos completa con un contenido potencialmente ilimitado\nes un anti patr\xf3n para smart contracts. Simplemente piensa en como de impredecible ser\xedan los costes del gas."]}),"\n",(0,t.jsxs)(n.p,{children:["Si tu ",(0,t.jsx)(n.em,{children:"realmente"})," necesitas devolver una estructura de datos entera entonces utiliza un de\n",(0,t.jsx)(n.code,{children:"ink_prelude"})," (e.g. ",(0,t.jsx)(n.code,{children:"ink_prelude::vec::Vec"}),"). Estas implementan ",(0,t.jsx)(n.code,{children:"scale::Encode"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Dada la definici\xf3n del contrato ",(0,t.jsx)(n.code,{children:"Flipper"})," de arriba a\xf1adimos las definiciones ",(0,t.jsx)(n.code,{children:"#[ink(message)]"}),"\ncomo vemos a continuaci\xf3n:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Voltea el valor actual.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Devuelve el valor actual.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(96540);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
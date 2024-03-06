"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2005],{334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=t(74848),s=t(28453);const a={title:"Chain Environment Types",slug:"/basics/chain-environment-types",hide_title:!0},r="Chain Environment Types",o={id:"basics/environment",title:"Chain Environment Types",description:"\xa1 Si escribes un contrato para una cadena que no usa los tipos Substrate",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/environment.md",sourceDirName:"basics",slug:"/basics/chain-environment-types",permalink:"/es/basics/chain-environment-types",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/environment.md",tags:[],version:"current",frontMatter:{title:"Chain Environment Types",slug:"/basics/chain-environment-types",hide_title:!0},sidebar:"reference",previous:{title:"Funciones de Entorno",permalink:"/es/basics/environment-functions"},next:{title:"Metadata",permalink:"/es/metadata"}},c={},u=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/title/environment.svg",className:"titlePic"}),"\n",(0,i.jsx)(n.h1,{id:"chain-environment-types",children:"Chain Environment Types"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["\xa1 Si escribes un contrato para una cadena que no usa los tipos Substrate\npor defecto, tienes que comprobar que configuras el ",(0,i.jsx)(n.code,{children:"Environment"})," para\nel contrato!"]})}),"\n",(0,i.jsxs)(n.p,{children:["ink! define un trait ",(0,i.jsx)(n.a,{href:"https://paritytech.github.io/ink/ink_env/trait.Environment.html",children:(0,i.jsx)(n.code,{children:"Environment"})}),"\ny tambi\xe9n una implementaci\xf3n por defecto del trait - ",(0,i.jsx)(n.a,{href:"https://paritytech.github.io/ink/ink_env/enum.DefaultEnvironment.html",children:(0,i.jsx)(n.code,{children:"DefaultEnvironment"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Estos son los tipos que utiliza ink! si no se toman medidas expl\xedcitas:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'/// Los tipos fundamentales de la configuraci\xf3n por defecto.\n#[derive(Debug, Clone, PartialEq, Eq)]\n#[cfg_attr(feature = "std", derive(TypeInfo))]\npub enum DefaultEnvironment {}\n\nimpl Environment for DefaultEnvironment {\n    const MAX_EVENT_TOPICS: usize = 4;\n\n    type AccountId = ink_primitives::AccountId;\n    type Balance = u128;\n    type Hash = ink_primitives::Hash;\n    type Timestamp = u64;\n    type BlockNumber = u32;\n    type ChainExtension = NoChainExtension;\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["El contexto es que puedse usar ink! en cualquier blockchain que haya sido\nconstruida con ",(0,i.jsx)(n.a,{href:"https://substrate.io",children:"Substrate"})," e incluya el m\xf3dulo\n",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,i.jsx)(n.code,{children:"pallet-contracts"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Las cadenas construidas con Substrate pueden decidir que tipos quieres usar\npara, por ejemplo, el numero de bloque o el id de una cuenta. Las cadenas\nque quieran ser compatibles con Ethereum tendr\xe1n a usar su mismo ",(0,i.jsx)(n.code,{children:"AccountId"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["La mayor\xeda de cadenas Substrate mantienen los tipos por defecto de Substrate y\nink! tambi\xe9n los usa. Es posible configurar el entorno de manera diferente en\nla macro de contrato (",(0,i.jsx)(n.a,{href:"https://paritytech.github.io/ink/ink/attr.contract.html#header-arguments",children:"documentaci\xf3n aqu\xed"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract(env = MyCustomTypes)]\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
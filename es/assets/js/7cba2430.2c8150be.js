"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5813],{24601:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=e(74848),a=e(28453);const r={title:"Working with Mapping",slug:"/datastructures/mapping"},s=void 0,o={id:"datastructures/mapping",title:"Working with Mapping",description:"In this section we want to demonstrate how to work with ink! Mapping.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/datastructures/mapping.md",sourceDirName:"datastructures",slug:"/datastructures/mapping",permalink:"/es/3.x/datastructures/mapping",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/datastructures/mapping.md",tags:[],version:"3.x",frontMatter:{title:"Working with Mapping",slug:"/datastructures/mapping"},sidebar:"reference",previous:{title:"Overview",permalink:"/es/3.x/datastructures/overview"},next:{title:"Spread Storage Layout",permalink:"/es/3.x/datastructures/spread-storage-layout"}},c={},l=[{value:"Initializing a Mapping",id:"initializing-a-mapping",level:2}];function u(n){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In this section we want to demonstrate how to work with ink! ",(0,i.jsx)(t.a,{href:"https://docs.rs/ink_storage/3.3.1/ink_storage/struct.Mapping.html",children:(0,i.jsx)(t.code,{children:"Mapping"})}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of a mapping from a user to a number:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[ink(storage)]\n#[derive(SpreadAllocate)]\npub struct MyContract {\n    // Store a mapping from AccountIds to a u32\n    map: ink_storage::Mapping<AccountId, u32>,\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:'This means that for a given key, you can store a unique instance of a value type. In this\ncase, each "user" gets their own number.'}),"\n",(0,i.jsx)(t.h2,{id:"initializing-a-mapping",children:"Initializing a Mapping"}),"\n",(0,i.jsxs)(t.p,{children:["In order to correctly initialize a ",(0,i.jsx)(t.code,{children:"Mapping"})," we need two things:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["An implementation of the ",(0,i.jsx)(t.a,{href:"https://docs.rs/ink_storage/3.3.1/ink_storage/traits/trait.SpreadAllocate.html",children:(0,i.jsx)(t.code,{children:"SpreadAllocate"})})," trait on our storage struct"]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.a,{href:"https://docs.rs/ink_lang/3.3.1/ink_lang/utils/fn.initialize_contract.html",children:(0,i.jsx)(t.code,{children:"ink_lang::utils::initalize_contract"})})," initializer"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Not initializing storage before you use it is a common mistake that can break your smart\ncontract. If you do not initialize your ",(0,i.jsx)(t.code,{children:"Mapping"}),"'s correctly you may end up with\ndifferent ",(0,i.jsx)(t.code,{children:"Mapping"}),"'s operating on the same set of storage entries \ud83d\ude31."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"\n#![cfg_attr(not(feature = \"std\"), no_std)]\n\nuse ink_lang as ink;\n\n#[ink::contract]\nmod mycontract {\n    use ink_storage::traits::SpreadAllocate;\n\n    #[ink(storage)]\n    #[derive(SpreadAllocate)]\n    pub struct MyContract {\n        // Store a mapping from AccountIds to a u32\n        map: ink_storage::Mapping<AccountId, u32>,\n    }\n\n    impl MyContract {\n        #[ink(constructor)]\n        pub fn new(count: u32) -> Self {\n            // This call is required in order to correctly initialize the\n            // `Mapping`s of our contract.\n            ink_lang::utils::initialize_contract(|contract: &mut Self| {\n                let caller = Self::env().caller();\n                contract.map.insert(&caller, &count);\n            })\n        }\n\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            // Even though we're not explicitly initializing the `Mapping`,\n            // we still need to call this\n            ink_lang::utils::initialize_contract(|_| {})\n        }\n\n        // Grab the number at the caller's AccountID, if it exists\n        #[ink(message)]\n        pub fn get(&self) -> u32 {\n            let caller = Self::env().caller();\n            self.map.get(&caller).unwrap_or_default()\n        }\n    }\n}\n"})})]})}function p(n={}){const{wrapper:t}={...(0,a.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>o});var i=e(96540);const a={},r=i.createContext(a);function s(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);
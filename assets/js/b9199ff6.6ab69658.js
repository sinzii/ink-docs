"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2679],{64741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(74848),i=t(28453);const r={title:"Contract Testing",slug:"/basics/contract-testing"},a=void 0,o={id:"basics/testing",title:"Contract Testing",description:"Unit Tests",source:"@site/versioned_docs/version-3.x/basics/testing.md",sourceDirName:"basics",slug:"/basics/contract-testing",permalink:"/3.x/basics/contract-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/basics/testing.md",tags:[],version:"3.x",frontMatter:{title:"Contract Testing",slug:"/basics/contract-testing"},sidebar:"reference",previous:{title:"Upgradeable Contracts",permalink:"/3.x/basics/upgradeable-contracts"},next:{title:"Environment Functions",permalink:"/3.x/basics/environment-functions"}},c={},l=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Off-chain Testing",id:"off-chain-testing",level:2},{value:"How do you find out if your test requires the off-chain environment?",id:"how-do-you-find-out-if-your-test-requires-the-off-chain-environment",level:2},{value:"Example",id:"example",level:2},{value:"On-chain Testing",id:"on-chain-testing",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,s.jsxs)(n.p,{children:["Testing contracts off-chain is done by ",(0,s.jsx)(n.code,{children:"cargo test"})," and users can simply use the standard routines\nof creating unit test modules within the ink! project:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn my_test() { ... }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Test instances of contracts can be created with something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let contract = MyContract::my_constructor(a, b);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Messages can simply be called on the returned instance as if ",(0,s.jsx)(n.code,{children:"MyContract::my_constructor"})," returns a\n",(0,s.jsx)(n.code,{children:"Self"})," instance."]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/ink-examples/blob/main/flipper/lib.rs",children:"flipper example"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"off-chain-testing",children:"Off-chain Testing"}),"\n",(0,s.jsx)(n.p,{children:"ink! smart contracts can compile in several different modes.\nThere are two main compilation models using either"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["on-chain mode: ",(0,s.jsx)(n.code,{children:"no_std"})," + WebAssembly as target"]}),"\n",(0,s.jsxs)(n.li,{children:["off-chain mode: ",(0,s.jsx)(n.code,{children:"std"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We generally use the on-chain mode for actual smart contract deployment\nwhereas we use the off-chain mode for smart contract testing using the\noff-chain environment provided by the ",(0,s.jsx)(n.code,{children:"ink_env"})," crate."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"#[ink::test]"})," proc. macro enables more elaborate off-chain testing."]}),"\n",(0,s.jsx)(n.p,{children:"If you annotate a test with this attribute it will be executed in a simulated\nenvironment, similar to as it would be run on-chain.\nYou then have fine-grained control over how a contract is called;\nfor example you can influence the block advancement, the value transferred to it,\nby which account it is called, which storage it is run with, etc.."}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/ink-examples/blob/main/erc20/lib.rs",children:(0,s.jsx)(n.code,{children:"examples/erc20"})})," contract on how to utilize those or ",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_lang/3.3.1/ink_lang/attr.test.html",children:"the documentation"})," for details."]}),"\n",(0,s.jsx)(n.p,{children:"At the moment there are some known limitations to our off-chain environment and we are working\non making it behave as close to the real chain environment as possible."}),"\n",(0,s.jsx)(n.p,{children:"Defines a unit test that makes use of ink!'s off-chain testing capabilities."}),"\n",(0,s.jsx)(n.p,{children:"If your unit test does not require the existence of an off-chain environment\nit is fine to not use this macro since it bears some overhead with the test."}),"\n",(0,s.jsx)(n.p,{children:"Note that this macro is not required to run unit tests that require ink!'s\noff-chain testing capabilities but merely improves code readability."}),"\n",(0,s.jsx)(n.h2,{id:"how-do-you-find-out-if-your-test-requires-the-off-chain-environment",children:"How do you find out if your test requires the off-chain environment?"}),"\n",(0,s.jsxs)(n.p,{children:["Normally if the test recursively uses or invokes some contract methods that\ncall a method defined in ",(0,s.jsx)(n.code,{children:"self.env()"})," or ",(0,s.jsx)(n.code,{children:"Self::env()"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"An examples is the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let caller: AccountId = self.env().caller();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use ink_lang as ink;\n\n#[cfg(test)]\nmod tests {\n    // Conventional unit test that works with assertions.\n    #[ink::test]\n    fn test1() {\n        // test code comes here as usual\n    }\n\n    // Conventional unit test that returns some Result.\n    // The test code can make use of operator-`?`.\n    #[ink::test]\n    fn test2() -> Result<(), ink_env::Error> {\n        // test code that returns a Rust Result type\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"on-chain-testing",children:"On-chain Testing"}),"\n",(0,s.jsxs)(n.p,{children:["The easiest way to do on-chain testing is to\n",(0,s.jsx)(n.a,{href:"/getting-started/running-substrate",children:"run a local substrate node"}),",\ndeploy your contract there and interact with it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use ink_lang as ink;\n\n#[ink::contract]\nmod greeter {\n    #[ink(storage)]\n    pub struct Greeter;\n\n    impl Greeter {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            let caller = Self::env().caller();\n            let message = format!("thanks for instantiation {:?}", caller);\n            ink_env::debug_println(&message);\n            Greeter {}\n        }\n\n        #[ink(message, payable)]\n        pub fn fund(&mut self) {\n            let caller = self.env().caller();\n            let value = self.env().transferred_balance();\n            let message = format!("thanks for the funding of {:?} from {:?}", value, caller);\n            ink_env::debug_println(&message);\n        }\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
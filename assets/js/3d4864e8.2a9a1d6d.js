"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7171],{30990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(74848),s=t(28453);const r={title:"DRink!",hide_title:!0,slug:"/basics/contract-testing/drink"},o="DRink!",a={id:"testing/drink",title:"DRink!",description:"Apart from the core ink! testing framework, Aleph Zero also provides the DRink! library.",source:"@site/versioned_docs/version-5.x/testing/drink.md",sourceDirName:"testing",slug:"/basics/contract-testing/drink",permalink:"/5.x/basics/contract-testing/drink",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/testing/drink.md",tags:[],version:"5.x",frontMatter:{title:"DRink!",hide_title:!0,slug:"/basics/contract-testing/drink"},sidebar:"reference",previous:{title:"Off-chain Tests",permalink:"/5.x/basics/contract-testing/off-chain"},next:{title:"End-to-End (E2E) Tests",permalink:"/5.x/basics/contract-testing/end-to-end-e2e-testing"}},l={},c=[{value:"Comparison to the other testing strategies",id:"comparison-to-the-other-testing-strategies",level:2},{value:"When to use <code>DRink!</code>?",id:"when-to-use-drink",level:2},{value:"How to use DRink!?",id:"how-to-use-drink",level:2},{value:"Directly as a library",id:"directly-as-a-library",level:3},{value:"As an alternative backend to ink!&#39;s E2E testing framework",id:"as-an-alternative-backend-to-inks-e2e-testing-framework",level:3},{value:"With a command line tool",id:"with-a-command-line-tool",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/title/testing1.svg",className:"titlePic"}),"\n",(0,i.jsx)(n.h1,{id:"drink",children:"DRink!"}),"\n",(0,i.jsxs)(n.p,{children:["Apart from the core ink! testing framework, Aleph Zero also provides the ",(0,i.jsx)(n.a,{href:"https://github.com/inkdevhub/drink",children:"DRink!"})," library.\nIt offers an intermediate solution between integration and E2E testing."]}),"\n",(0,i.jsxs)(n.p,{children:["Intuitively, DRink! maintains a full in-memory blockchain state and allows you to interact with it directly.\nThis gives a notably robust methodology in contrast to the off-chain engine facilitated by the ",(0,i.jsx)(n.code,{children:"ink::test"})," macro.\nNevertheless, it is essential to note that the absence of the entire node layer makes the environment less realistic compared to the comprehensive setup employed in the end-to-end tests."]}),"\n",(0,i.jsx)(n.h2,{id:"comparison-to-the-other-testing-strategies",children:"Comparison to the other testing strategies"}),"\n",(0,i.jsx)(n.p,{children:"To better assess when DRink! performs better than other testing methods, it is crucial to gain a deeper understanding of the consequences of its unique design and the trade-offs it entails."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Speed:"})," since DRink! doesn't spawn any node or background process, everything happens locally, within the testing thread.\nThis means that the execution can be synchronous and significantly faster than the E2E tests.\nTherefore, its performance should be comparable to the unit or integration testing.\nAlso, there is no block production or finalization delay, which is a noticeable factor in the E2E tests.\nThanks to that, we can launch long-running simulations in a reasonable time."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Testing multiple contracts:"})," since we are working with a full blockchain state, we can perform any interaction with the contracts, which includes working with mutliple contracts at the same time.\nOf course, this is the same as in the E2E tests, but it is not possible in either the unit or integration tests."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Working with arbitrary runtimes:"})," similarly to the E2E tests, where we can spawn any node with customized runtime (Polkadot's term for the state transition function), in DRink! tests we can work with any blockchain runtime we want."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Full control over runtime state:"})," we hold the state of the blockchain and exercise full control over it, so we can easily manipulate it however we want.\nThis covers manipulating block number, timestamp, account balances, etc.\nSome of these are also possible in the E2E tests, but usually they require more effort or overhead."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Powerful features:"})," thanks to the unique design of DRink!, we can easily take advantage of some powerful, not available in other testing strategies, features:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"contract mocking:"})," you can mock any contract or message you want, specifying the default behavior or the exact return value."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"enhanced debugging and call tracing:"})," you can get more insights into the contract execution process, like stack trace, debug buffers and more."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Nevertheless, there are some drawbacks of DRink! as well:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"No node layer:"})," since we don't spawn any node, we don't have access to the node layer, which means that we can't test any node-related functionality, like RPC calls, block production, etc."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Artificial, isolated environment:"})," this is the main trade-off of DRink!.\nIt might give a false sense of security, while in the real environment, the contract could behave differently.\nThe discrepancy can be mitigated by a careful and precise simulation and setup of the environment, but it is still a factor to consider."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"No typed contract API:"})," currently, DRink! works with string-encoded arguments and values, which means that we lose the type safety and convenience that was present in the other testing frameworks.\nFortunately, this is going to change soon, as there is an ongoing effort to integrate it with ",(0,i.jsx)(n.a,{href:"https://github.com/Cardinal-Cryptography/ink-wrapper",children:"ink-wrapper"})," library."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"when-to-use-drink",children:["When to use ",(0,i.jsx)(n.code,{children:"DRink!"}),"?"]}),"\n",(0,i.jsx)(n.p,{children:"Usually, DRink! is a good choice for the development phase of your project.\nWhen the iteration speed is crucial, and you want to quickly test your contracts, DRink! will offer a versatile, yet highly efficient testing environment.\nHowever, you must not forget that it is not a replacement for the E2E tests, which should be run before the deployment to the production network, as well as in your CI/CD pipelines."}),"\n",(0,i.jsx)(n.p,{children:"DRink! also comes in handy when you need to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"mock some parts of your contract suite"}),"\n",(0,i.jsx)(n.li,{children:"debug the execution process"}),"\n",(0,i.jsx)(n.li,{children:"launch long-running simulations, that would normally take a lot of time when relying on a real block-time"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-use-drink",children:"How to use DRink!?"}),"\n",(0,i.jsx)(n.p,{children:"There are three ways to use DRink!:"}),"\n",(0,i.jsx)(n.h3,{id:"directly-as-a-library",children:"Directly as a library"}),"\n",(0,i.jsx)(n.p,{children:"This way you gain access to full DRink! power in your test suites."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"drink"})," library is continuously published to ",(0,i.jsx)(n.a,{href:"https://crates.io/crates/drink",children:"crates.io"}),", so you can use it in your project with either ",(0,i.jsx)(n.code,{children:"cargo add drink"})," or by adding the following line to your ",(0,i.jsx)(n.code,{children:"Cargo.toml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'drink = { version = "0.8" }\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, you can write your tests like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'#[cfg(test)]\nmod tests {\n    /// This will take care of building all contract dependencies in the compilation phase and gather all contract \n    /// bundles (metadata and the compiled code) into a single registry.\n    #[drink::contract_bundle_provider]\n    enum BundleProvider {}\n\n   /// Within `drink::test` macro, you are provided with a `session` object, which is a wrapper around the\n   /// blockchain state. You can use it to deploy contracts, call their methods, and more.\n    #[drink::test]\n    fn deploy_and_call_a_contract(mut session: Session) -> Result<(), Box<dyn Error>> {\n        let result: bool = sesison\n            .deploy_bundle_and(BundleProvider::local(), "new", &["true"], NO_SALT, NO_ENDOWMENT)?\n            .call_and("flip", NO_ARGS, NO_ENDOWMENT)?\n            .call_and("flip", NO_ARGS, NO_ENDOWMENT)?\n            .call_and("flip", NO_ARGS, NO_ENDOWMENT)?\n            .call("get", NO_ARGS, NO_ENDOWMENT)??;\n        assert_eq!(result, false);\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can check some helpful and verbose examples ",(0,i.jsx)(n.a,{href:"https://github.com/inkdevhub/drink/tree/main/examples",children:"here"}),", including the ",(0,i.jsx)(n.a,{href:"https://github.com/inkdevhub/drink/tree/main/examples/quick-start-with-drink",children:(0,i.jsx)(n.strong,{children:"quick start guide"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"as-an-alternative-backend-to-inks-e2e-testing-framework",children:"As an alternative backend to ink!'s E2E testing framework"}),"\n",(0,i.jsx)(n.p,{children:"DRink! is already integrated with the ink! framework and can be used as a drop-in replacement for the standard E2E testing environment.\nJust use corresponding argument in the test macro:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink_e2e::test(backend(runtime_only()))]\n"})}),"\n",(0,i.jsx)(n.p,{children:"to your test function and you have just switched from E2E testcase to DRink!-based one, that doesn't use any running node in the background!"}),"\n",(0,i.jsxs)(n.p,{children:["For a full example check out ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/master/integration-tests/e2e-runtime-only-backend/lib.rs",children:"ink! repository"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"with-a-command-line-tool",children:"With a command line tool"}),"\n",(0,i.jsxs)(n.p,{children:["We provide a CLI which puts DRink! behind friendly TUI.\nFor more details, consult ",(0,i.jsx)(n.a,{href:"https://github.com/inkdevhub/drink/blob/main/drink-cli/README.md",children:"its README"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Similarly to ",(0,i.jsx)(n.code,{children:"drink"})," library, ",(0,i.jsx)(n.code,{children:"drink-cli"})," is published to ",(0,i.jsx)(n.a,{href:"https://crates.io/crates/drink-cli",children:"crates.io"})," as well.\nYou can install it with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cargo install drink-cli\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
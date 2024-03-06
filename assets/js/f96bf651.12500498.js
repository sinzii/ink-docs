"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3594],{42256:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=a(74848),s=a(28453);const i={title:"Working with Mapping",slug:"/datastructures/mapping",hide_title:!0},l="Working with Mapping",r={id:"datastructures/mapping",title:"Working with Mapping",description:"In this section we demonstrate how to work with ink! Mapping.",source:"@site/versioned_docs/version-5.x/datastructures/mapping.md",sourceDirName:"datastructures",slug:"/datastructures/mapping",permalink:"/5.x/datastructures/mapping",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/datastructures/mapping.md",tags:[],version:"5.x",frontMatter:{title:"Working with Mapping",slug:"/datastructures/mapping",hide_title:!0},sidebar:"reference",previous:{title:"Working with StorageVec",permalink:"/5.x/datastructures/storagevec"},next:{title:"Storage Layout",permalink:"/5.x/datastructures/storage-layout"}},o={},c=[{value:"Example: Using a <code>Mapping</code>",id:"example-using-a-mapping",level:2},{value:"Considerations when using the <code>Mapping</code> type",id:"considerations-when-using-the-mapping-type",level:2},{value:"Storage loading behavior",id:"storage-loading-behavior",level:3},{value:"Use fallible storage methods for dynamically sized values",id:"use-fallible-storage-methods-for-dynamically-sized-values",level:3},{value:"Updating values",id:"updating-values",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:"/img/title/storage.svg",className:"titlePic"}),"\n",(0,t.jsx)(n.h1,{id:"working-with-mapping",children:"Working with Mapping"}),"\n",(0,t.jsxs)(n.p,{children:["In this section we demonstrate how to work with ink! ",(0,t.jsx)(n.a,{href:"https://docs.rs/ink_storage/5.0.0-rc.1/ink_storage/struct.Mapping.html",children:(0,t.jsx)(n.code,{children:"Mapping"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example of a mapping from a user to a ",(0,t.jsx)(n.code,{children:"Balance"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct MyContract {\n    /// Assign a balance to every account.\n    balances: ink::storage::Mapping<AccountId, Balance>,\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:'This means that for a given key, you can store a unique instance of a value type. In this\ncase, each "user" gets credited their own balance.'}),"\n",(0,t.jsxs)(n.h2,{id:"example-using-a-mapping",children:["Example: Using a ",(0,t.jsx)(n.code,{children:"Mapping"})]}),"\n",(0,t.jsxs)(n.p,{children:["The following example contract utilizes a ",(0,t.jsx)(n.code,{children:"Mapping"})," so that anyone can deposit and withdraw\nbalance for their own account:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[ink::contract]\nmod mycontract {\n    use ink::storage::Mapping;\n\n    #[ink(storage)]\n    pub struct MyContract {\n        /// Assign a balance to every account ID\n        balances: Mapping<AccountId, Balance>,\n    }\n\n    impl MyContract {\n        /// Constructor to initialize the contract with an empty mapping.\n        #[ink(constructor, payable)]\n        pub fn new() -> Self {\n            let balances = Mapping::default();\n            Self { balances }\n        }\n\n        /// Retrieve the balance of the caller.\n        #[ink(message)]\n        pub fn get_balance(&self) -> Option<Balance> {\n            let caller = self.env().caller();\n            self.balances.get(caller)\n        }\n\n        /// Credit more money to the contract.\n        #[ink(message, payable)]\n        pub fn transfer(&mut self) {\n            let caller = self.env().caller();\n            let balance = self.balances.get(caller).unwrap_or(0);\n            let endowment = self.env().transferred_value();\n            self.balances.insert(caller, &(balance + endowment));\n        }\n\n        /// Withdraw all your balance from the contract.\n        pub fn withdraw(&mut self) {\n            let caller = self.env().caller();\n            let balance = self.balances.get(caller).unwrap();\n            self.balances.remove(caller);\n            self.env().transfer(caller, balance).unwrap()\n        }\n    }\n}\n\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"considerations-when-using-the-mapping-type",children:["Considerations when using the ",(0,t.jsx)(n.code,{children:"Mapping"})," type"]}),"\n",(0,t.jsxs)(n.p,{children:["One of the main purposes of the ink! ",(0,t.jsx)(n.code,{children:"Mapping"})," is to allow storing a lot of values."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["There are many additional data structures accessible under ",(0,t.jsx)(n.code,{children:"ink::prelude::collections"}),",\nsuch as ",(0,t.jsx)(n.code,{children:"HashMap"})," or ",(0,t.jsx)(n.code,{children:"BTreeMap"})," (to name a few). Note that these data structures all exhibit\n",(0,t.jsx)(n.code,{children:"Packed"})," storage loading behavior, as opposed to the ink! ",(0,t.jsx)(n.code,{children:"Mapping"}),"!"]})}),"\n",(0,t.jsx)(n.h3,{id:"storage-loading-behavior",children:"Storage loading behavior"}),"\n",(0,t.jsxs)(n.p,{children:["Each ",(0,t.jsx)(n.code,{children:"Mapping"})," value lives under it's own storage key. Briefly, this means that ",(0,t.jsx)(n.code,{children:"Mapping"}),"s\nare lazily loaded in ink!. In other words, if your message only accesses a single key of a\nmapping, it will not load the whole mapping but only the value being accessed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'// This causes only a single storage access and the decoding of a single "MyValue" struct,\n// no matter how many elements there are inside the mapping.\nlet foo: MyValue = my_mapping.get(0)?;\n\nfor n in 0..5 {\n    // This causes a storage access and a decoding operation for each loop iteration.\n    // It is not possible to "fetch" all key/value pairs directly at once.\n    let bar: MyValue = my_mapping.get(n)?;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Furthermore, it follows that mapping values do not have a contiguous storage layout, and it is\nnot possible to iterate over the contents of a map."}),"\n",(0,t.jsx)(n.h3,{id:"use-fallible-storage-methods-for-dynamically-sized-values",children:"Use fallible storage methods for dynamically sized values"}),"\n",(0,t.jsxs)(n.p,{children:["Reading from or writing to a ",(0,t.jsx)(n.code,{children:"Mapping"})," implies encoding or decoding\nthe according ",(0,t.jsx)(n.code,{children:"Mapping"})," key and value. This happens transparently under the hood.\nHowever, because the static buffer used to store the encoded data is of limited\nsize, it can fail and trap the contract."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The static buffer defaults to 16KB in size."})}),"\n",(0,t.jsxs)(n.p,{children:["This can be an issue for values with dynamically sized types.\nIt is recommended to use fallible storage methods (prefixed with ",(0,t.jsx)(n.code,{children:"try_"}),") for\n",(0,t.jsx)(n.code,{children:"Mapping"}),"s containing dynamically sized values."]}),"\n",(0,t.jsxs)(n.p,{children:["Consider a ",(0,t.jsx)(n.code,{children:"Mapping"})," with ",(0,t.jsx)(n.code,{children:"String"})," values like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct MyContract {\n    on_chain_log: Mapping<u64, String>,\n    nonce: u64,\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"String"})," overgrows the static buffer size, it will no longer fit into the mapping:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'#[ink(message)]\npub fn do_something(&mut self, data: String) {\n    let caller = self.env().caller();\n\n    let log_message = format!("{caller:?}: {data}");\n\n    // Panics if log_message overgrows the static buffer size!\n    self.on_chain_log.insert(&self.nonce, &log_message);\n\n    self.nonce += 1;\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Instead, consider using the fallible ",(0,t.jsx)(n.code,{children:"try_insert"})," method to handle the situation:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'#[ink(message)]\npub fn do_something2(&mut self, data: String) {\n    let caller = self.env().caller();\n\n    let log_message = format!("{caller:?}: {data}");\n\n    // `try_insert` will not panic but return an error instead.\n    if self\n        .on_chain_log\n        .try_insert(&self.nonce, &log_message)\n        .is_err()\n    {\n        // We get the chance to handle this problem properly:\n        // Restrain the log message to a size guaranteed to fit.\n        let log_message = format!("{caller:?}: <data omitted>");\n        self.on_chain_log.insert(&self.nonce, &log_message);\n    }\n\n    self.nonce += 1;\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We provide fallible ",(0,t.jsx)(n.code,{children:"try_"})," versions for all storage operations on ",(0,t.jsx)(n.code,{children:"Mapping"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"updating-values",children:"Updating values"}),"\n",(0,t.jsxs)(n.p,{children:["The attentive reader may have noticed that accessing mapping values via the ",(0,t.jsx)(n.code,{children:"Mapping::get()"}),"\nmethod will result in an owned value (a local copy), as opposed to a direct reference\ninto the storage. Changes to this value won't be reflected in the contract's storage\n\"automatically\". To avoid this common pitfall, the value must be inserted again at the same\nkey after it was modified. The ",(0,t.jsx)(n.code,{children:"transfer"})," function from above example illustrates this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub fn transfer(&mut self) {\n    let caller = self.env().caller();\n    // `balance` is a local value and not a reference to the value on storage!\n    let balance = self.balances.get(caller).unwrap_or(0);\n    let endowment = self.env().transferred_value();\n    // The following line of code would have no effect to the balance of the\n    // caller stored in contract storage:\n    //\n    // balance += endowment;\n    //\n    // Instead, we use the `insert` function to write it back like so:\n    self.balances.insert(caller, &(balance + endowment));\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>r});var t=a(96540);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
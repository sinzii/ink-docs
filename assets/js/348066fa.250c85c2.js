"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3833],{22382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(74848),a=n(28453);const r={title:"Custom Data Structures",slug:"/datastructures/custom-datastructure",hide_title:!0},o="Custom Data Structures",i={id:"datastructures/custom",title:"Custom Data Structures",description:"The ink_storage crate provides useful utilities and data structures to organize and",source:"@site/docs/datastructures/custom.md",sourceDirName:"datastructures",slug:"/datastructures/custom-datastructure",permalink:"/datastructures/custom-datastructure",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/datastructures/custom.md",tags:[],version:"current",frontMatter:{title:"Custom Data Structures",slug:"/datastructures/custom-datastructure",hide_title:!0},sidebar:"reference",previous:{title:"Storage Layout",permalink:"/datastructures/storage-layout"},next:{title:"Metadata Format",permalink:"/datastructures/storage-in-metadata"}},c={},l=[{value:"Using custom types on storage",id:"using-custom-types-on-storage",level:2},{value:"Generic storage fields",id:"generic-storage-fields",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/storage.svg",className:"titlePic"}),"\n",(0,s.jsx)(t.h1,{id:"custom-data-structures",children:"Custom Data Structures"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ink_storage"})," crate provides useful utilities and data structures to organize and\nmanipulate the contract's storage. However, contract authors should know that they can\nalso create their own custom data structures."]}),"\n",(0,s.jsx)(t.h2,{id:"using-custom-types-on-storage",children:"Using custom types on storage"}),"\n",(0,s.jsxs)(t.p,{children:["Any custom type wanting to be compatible with ink! storage must implement the\n",(0,s.jsx)(t.a,{href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Storable.html",children:(0,s.jsx)(t.code,{children:"Storable"})}),"\ntrait, so it can be SCALE\n",(0,s.jsx)(t.a,{href:"https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Encode.html",children:(0,s.jsx)(t.code,{children:"encoded"})}),"\nand\n",(0,s.jsx)(t.a,{href:"https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Decode.html",children:(0,s.jsx)(t.code,{children:"decoded"})}),".\nAdditionally, the traits\n",(0,s.jsx)(t.a,{href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.StorageLayout.html",children:(0,s.jsx)(t.code,{children:"StorageLayout"})}),"\nand ",(0,s.jsx)(t.a,{href:"https://docs.rs/scale-info/2.3.1/scale_info/trait.TypeInfo.html",children:(0,s.jsx)(t.code,{children:"TypeInfo"})}),"\nare required as well. But don't worry, usually these traits can just be derived:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'/// A custom type that we can use in our contract storage\n#[derive(scale::Decode, scale::Encode)]\n#[cfg_attr(\n    feature = "std",\n    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)\n)]\npub struct Inner {\n    value: bool,\n}\n\n#[ink(storage)]\npub struct ContractStorage {\n    inner: Inner,\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Even better: there is a macro\n",(0,s.jsx)(t.a,{href:"https://docs.rs/ink_macro/4.0.0/ink_macro/attr.storage_item.html",children:(0,s.jsx)(t.code,{children:"#[ink::storage_item]"})}),",\nwhich derives all necessary traits for you. If there is no need to implement any special\nbehavior, the above code example can be simplified further as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"/// A custom type that we can use in our contract storage\n#[ink::storage_item]\npub struct Inner {\n    value: bool,\n}\n\n#[ink(storage)]\npub struct ContractStorage {\n    inner: Inner,\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Naturally, you can as well implement any required trait manually. Please directly refer to\nthe relevant trait documentations for more information."}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"#[ink::storage_item]"})," macro is responsible for storage key calculation of\nnon-",(0,s.jsx)(t.a,{href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Packed.html",children:(0,s.jsx)(t.code,{children:"Packed"})}),"\ntypes. Without it, the key for non-",(0,s.jsx)(t.code,{children:"Packed"})," fields will be zero. Using this macro is\nnecessary if you don't plan to use a\n",(0,s.jsx)(t.a,{href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/struct.ManualKey.html",children:(0,s.jsx)(t.code,{children:"ManualKey"})}),"\non a non-",(0,s.jsx)(t.code,{children:"Packed"})," type."]}),(0,s.jsxs)(t.p,{children:["Types with custom implementations of the ink! storage traits can still use this macro only\nfor key calculation by disabling the derives: ",(0,s.jsx)(t.code,{children:"#[ink::storage_item(derive = false)]"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"generic-storage-fields",children:"Generic storage fields"}),"\n",(0,s.jsxs)(t.p,{children:["It is possible to use generic data types in your storage, as long as any generic type\nsatisfies the required storage trait bounds. In fact, we already witnessed this in the\nprevious sections about the\n",(0,s.jsx)(t.a,{href:"https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html",children:(0,s.jsx)(t.code,{children:"Mapping"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's say you want a mapping where accessing a non-existent key should just return\nit's default value, akin to how mappings work in Solidity. Additionally, you want to know\nhow many values there are in the mapping (its length). This could be implemented as a\nthin wrapper around the ink! ",(0,s.jsx)(t.code,{children:"Mapping"})," as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"/// Values for this map need to implement the `Default` trait.\n/// Naturally, they also must be compatible with contract storage.\n/// Note that the underlying `Mapping` type only supports `Packed` values.\n#[ink::storage_item]\npub struct DefaultMap<K, V: Packed + Default> {\n    values: Mapping<K, V>,\n    length: u32,\n}\n\nimpl<K: Encode, V: Packed + Default> DefaultMap<K, V> {\n    /// Accessing non-existent keys will return the default value.\n    pub fn get(&self, key: &K) -> V {\n        self.values.get(key).unwrap_or_default()\n    }\n\n    /// Inserting into the map increases its length by one.\n    pub fn set<I, U>(&mut self, key: I, value: &U)\n    where\n        I: scale::EncodeLike<K>,\n        E: scale::EncodeLike<V> + Storable,\n    {\n        if self.values.insert(key, value).is_none() {\n            self.length += 1\n        }\n    }\n\n    /// Removing a value from the map decreases its length by one.\n    pub fn remove(&mut self, key: &K) {\n        if self.values.take(key).is_some() {\n            self.length -= 1\n        }\n    }\n\n    /// Return how many values the mapping contains\n    pub fn len(&self) -> u32 {\n        self.length\n    }\n}\n\n/// `DefaultMap` is compatible with contract storage.\n#[ink(storage)]\npub struct MyContract {\n    my_map: DefaultMap<BlockNumber, Balance>,\n}\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:"Generic data types may substantially increase your contracts overall code size, making it\nmore costly to store on-chain."}),(0,s.jsxs)(t.p,{children:["The reason for this is ",(0,s.jsx)(t.a,{href:"https://rustwasm.github.io/twiggy/concepts/generic-functions-and-monomorphization.html",children:"Rust's monomorphization"}),"."]})]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
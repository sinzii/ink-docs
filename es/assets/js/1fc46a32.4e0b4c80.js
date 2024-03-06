"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5775],{95247:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>i});var s=r(74848),n=r(28453);const t={title:"Estructura del storage",slug:"/datastructures/storage-layout",hide_title:!0},o="Estructura del storage",c={id:"datastructures/storage-layout",title:"Estructura del storage",description:"A los autores de smart contracts se les da cierta flexibilidad respecto a c\xf3mo ellos quieren organizar la estructura de storage de sus smart contracts.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/datastructures/storage-layout.md",sourceDirName:"datastructures",slug:"/datastructures/storage-layout",permalink:"/es/5.x/datastructures/storage-layout",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/datastructures/storage-layout.md",tags:[],version:"5.x",frontMatter:{title:"Estructura del storage",slug:"/datastructures/storage-layout",hide_title:!0},sidebar:"reference",previous:{title:"Trabajando con Mapping",permalink:"/es/5.x/datastructures/mapping"},next:{title:"Estructuras de Datos Personalizadas",permalink:"/es/5.x/datastructures/custom-datastructure"}},d={},i=[{value:"Organizaci\xf3n del storage",id:"organizaci\xf3n-del-storage",level:2},{value:"Estructura Packed vs Non-Packed",id:"estructura-packed-vs-non-packed",level:2},{value:"Eager Loading vs. Lazy Loading",id:"eager-loading-vs-lazy-loading",level:2},{value:"Generaci\xf3n de key Manual vs. Autom\xe1tica",id:"generaci\xf3n-de-key-manual-vs-autom\xe1tica",level:2},{value:"Consideraciones",id:"consideraciones",level:2}];function l(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/storage.svg",className:"titlePic"}),"\n",(0,s.jsx)(a.h1,{id:"estructura-del-storage",children:"Estructura del storage"}),"\n",(0,s.jsx)(a.p,{children:"A los autores de smart contracts se les da cierta flexibilidad respecto a c\xf3mo ellos quieren organizar la estructura de storage de sus smart contracts.\r\nProfundicemos sobre los conceptos detr\xe1s del storage de ink! para comprender mejor algunas de sus implicaciones y limitaciones."}),"\n",(0,s.jsx)(a.h2,{id:"organizaci\xf3n-del-storage",children:"Organizaci\xf3n del storage"}),"\n",(0,s.jsx)(a.p,{children:"El siguiente esquema representa el storage que es expuesto a ink! por el contract pallet:"}),"\n",(0,s.jsx)("div",{class:"schema",children:(0,s.jsx)("img",{src:"/img/kv.svg",alt:"Organizaci\xf3n del storage: estructura"})}),"\n",(0,s.jsxs)(a.p,{children:["Los datos de storage siempre se codifican con el codec\r\n",(0,s.jsx)(a.a,{href:"https://docs.substrate.io/reference/scale-codec/",children:(0,s.jsx)(a.code,{children:"SCALE"})}),".\r\nLa API de storage funciona guardando y cargando registros en y desde celdas de storage \xfanicas, donde se accede a cada celda de storage con su propia storage key. Hasta cierto punto, la API del storage funciona de manera similar a una base de datos key-value tradicional."]}),"\n",(0,s.jsx)(a.h2,{id:"estructura-packed-vs-non-packed",children:"Estructura Packed vs Non-Packed"}),"\n",(0,s.jsxs)(a.p,{children:["Los tipos que se pueden guardar completamente en una sola celda de storage se consideran ",(0,s.jsx)(a.a,{href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Packed.html",children:(0,s.jsx)(a.code,{children:"Packed"})}),".\r\nPor default, ink! intenta guardar todos los campos de struct de storage en una \xfanica celda de storage.\r\nEn consecuencia, con una estructura de storage ",(0,s.jsx)(a.code,{children:"Packed"}),", cualquier mensaje que interact\xfae con el storage del contrato siempre necesitar\xe1 operar en todo el struct de storage del contrato."]}),"\n",(0,s.jsx)(a.p,{children:"Por ejemplo, si tenemos un struct de storage relativamente peque\xf1o que consiste de unos pocos campos diminutos, obtener todo desde el storage en cada mensaje no es problem\xe1tico. Quiz\xe1s hasta sea favorable - especialmente si esperamos que la mayor\xeda de los mensajes interact\xfaen con la mayor\xeda de los campos del storage."}),"\n",(0,s.jsxs)(a.p,{children:["Por otro lado, esto puede ser problem\xe1tico si estamos guardando un gran ",(0,s.jsx)(a.code,{children:"ink::prelude::vec::Vec"})," en el storage del contrato pero provee mensajes que no necesitan ser le\xeddos y escritos de este ",(0,s.jsx)(a.code,{children:"Vec"}),". En ese escenario, todos y cada uno de los mensajes del contrato sufre de un overhead de ejecuci\xf3n al tratar con ese ",(0,s.jsx)(a.code,{children:"Vec"}),", independientemente de si acceden a \xe9l o no. Esto resulta en costos de gas extra. Para resolver este problema necesitamos transformar nuestro storage en una estructura non-packed de alg\xfan modo."]}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsxs)(a.p,{children:["Si alg\xfan tipo que muestra estructura ",(0,s.jsx)(a.code,{children:"Packed"})," se hace lo suficientemente grande (un ",(0,s.jsx)(a.code,{children:"Vec"})," en crecimiento constante podr\xeda ser un candidato perfecto para esto), romper\xe1 el contrato. Esto sucede porque para codificar y decodificar elementos del storage, hay un buffer con solamente capacidad limitada (alrededor de 16KB en la configuraci\xf3n por default) disponible. Esto significa que cada contrato que intente decodificar m\xe1s que eso lanzar\xe1 un error. Si uno no est\xe1 seguro del tama\xf1o potencial que pueda adquirir una estructura de datos, se deber\xeda considerar usar un ink! ",(0,s.jsx)(a.code,{children:"Mapping"}),", que puede guardar un n\xfamero arbitrario de elementos en cambio."]})}),"\n",(0,s.jsx)(a.h2,{id:"eager-loading-vs-lazy-loading",children:"Eager Loading vs. Lazy Loading"}),"\n",(0,s.jsxs)(a.p,{children:["ink! provee medios para dividir el storage en partes m\xe1s peque\xf1as, que pueden ser cargadas a demanda, con la primitiva ",(0,s.jsx)(a.a,{href:"https://paritytech.github.io/ink/ink/storage/struct.Lazy.html",children:(0,s.jsx)(a.code,{children:"Lazy"})}),". Envolver cualquier campo dentro de un struct ",(0,s.jsx)(a.code,{children:"Lazy"})," hace que el struct de storage en el cual ese campo aparezca tambi\xe9n sea non-",(0,s.jsx)(a.code,{children:"Packed"}),", evitando que sea cargado anticipadamente durante operaciones de storage arbitrarias:"]}),"\n",(0,s.jsx)("div",{class:"schema",children:(0,s.jsx)("img",{src:"/img/storage-layout.svg",alt:"Organizaci\xf3n del storage: estructura con un campo lazy"})}),"\n",(0,s.jsxs)(a.p,{children:["Tener en cuenta que en la ilustraci\xf3n de arriba, la key ",(0,s.jsx)(a.code,{children:"0x12345678"})," s\xf3lo sirve como ejemplo, aprenderemos m\xe1s sobre c\xe1lculo de storage key\r\n",(0,s.jsx)(a.a,{href:"/datastructures/storage-layout#generaci%C3%B3n-de-key-manual-vs-autom%C3%A1tica",children:"en este cap\xedtulo"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"El siguiente ejemplo demuestra c\xf3mo podemos resolver el problema presentado en la secci\xf3n anterior. Se ver\xe1 que para el campo de storage cargado de manera lazy, ahora trabajamos con getters y setters para tener acceso y modificar el valor de storage interno:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-rust",children:'#![cfg_attr(not(feature = "std"), no_std)]\r\n\r\n#[ink::contract]\r\nmod mycontract {\r\n    use ink::prelude::vec::Vec;\r\n    use ink::storage::Lazy;\r\n\r\n    #[derive(Default)]\r\n    #[ink(storage)]\r\n    pub struct MyContract {\r\n        tiny_value: Balance,\r\n        /// Este vector puede volverse grande y caro para utilizarlo.\r\n        /// Queremos forzar una estructura de storage non-`Packed`\r\n        large_vec: Lazy<Vec<Balance>>,\r\n    }\r\n\r\n    impl MyContract {\r\n        #[ink(constructor)]\r\n        pub fn new() -> Self {\r\n            Self::default()\r\n        }\r\n\r\n        /// Este mensaje siempre es barato ya que `large_vec` es cargado de forma lazy.\r\n        #[ink(message)]\r\n        pub fn get_balance(&self) -> Balance {\r\n            self.tiny_value\r\n        }\r\n\r\n        /// Los campos lazy como `large_vec` proveen los operadores de storage `get()` y `set()`. \r\n        #[ink(message)]\r\n        pub fn add_balance(&mut self, value: Balance) {\r\n            let mut balances = self.large_vec.get_or_default();\r\n            balances.push(value);\r\n            self.large_vec.set(&balances);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsxs)(a.p,{children:["Los ",(0,s.jsx)(a.code,{children:"ink::prelude::vec::Vec"})," son siempre cargados en su totalidad. Esto sucede porque todos los elementos del ",(0,s.jsx)(a.code,{children:"ink::prelude::vec::Vec"})," existen en una sola storage key. Si se envuelve el ",(0,s.jsx)(a.code,{children:"ink::prelude::vec::Vec"})," dentro del ",(0,s.jsx)(a.code,{children:"Lazy"}),", como muestra el ejemplo de arriba, no tiene influencia en su estructura interior. Si se est\xe1 tratando con arrays grandes o dispersos en storage de contratos, se deber\xeda considerar usar un ",(0,s.jsx)(a.code,{children:"Mapping"})," en cambio."]})}),"\n",(0,s.jsx)(a.h2,{id:"generaci\xf3n-de-key-manual-vs-autom\xe1tica",children:"Generaci\xf3n de key Manual vs. Autom\xe1tica"}),"\n",(0,s.jsxs)(a.p,{children:["Por defecto, las keys son calculadas autom\xe1ticamente, gracias a la primitiva ",(0,s.jsx)(a.a,{href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/struct.AutoKey.html",children:(0,s.jsx)(a.code,{children:"AutoKey"})}),". Estas ser\xe1n generadas en tiempo de compilaci\xf3n y descartadas de conflictos.\r\nSin embargo, para tipos non-",(0,s.jsx)(a.code,{children:"Packed"})," como ",(0,s.jsx)(a.code,{children:"Lazy"})," o ",(0,s.jsx)(a.code,{children:"Mapping"}),", la primitiva ",(0,s.jsx)(a.a,{href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/struct.ManualKey.html",children:(0,s.jsx)(a.code,{children:"ManualKey"})})," permite un control manual sobre la storage key de un campo, as\xed:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-rust",children:"#[ink(storage)]\r\npub struct MyContract {\r\n    /// La storage key para este campo siempre es `0x0000007f`\r\n    inner: Lazy<bool, ManualKey<127>>,\r\n}\n"})}),"\n",(0,s.jsx)(a.p,{children:"Esto puede ser ventajoso: Su key de storage ser\xe1 siempre la misma, independientemente de la versi\xf3n de su contrato o de ink! en s\xed mismo (Tenga en cuenta que el algoritmo de c\xe1lculo de la key puede cambiar con futuras versiones de ink!)."}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:["El uso de una ",(0,s.jsx)(a.code,{children:"ManualKey"})," en vez de una ",(0,s.jsx)(a.code,{children:"AutoKey"})," puede ser espec\xedficamente deseable para contratos actualizables, ya que usar ",(0,s.jsx)(a.code,{children:"AutoKey"})," puede resultar en una storage key diferente para el mismo campo en una nueva versi\xf3n de contrato. Esto puede romper su contrato luego de una actualizaci\xf3n \ud83d\ude31!"]})}),"\n",(0,s.jsxs)(a.p,{children:["La key del storage de la struct del storage ra\xedz del contrato tiene como valor default ",(0,s.jsx)(a.code,{children:"0x00000000"}),". Sin embargo, los desarrolladores pueden definir la key como un valor arbitrario de 4 bytes al proveer una ",(0,s.jsx)(a.code,{children:"ManualKey"})," as\xed:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-rust",children:"/// Definici\xf3n manual de la root storage key de `MyContract` para que sea `0xcafebabe`.\r\n#[ink(storage)]\r\npub struct MyContract<KEY: StorageKey = ManualKey<0xcafebabe>> {\r\n    value: bool,\r\n}\n"})}),"\n",(0,s.jsx)(a.h2,{id:"consideraciones",children:"Consideraciones"}),"\n",(0,s.jsxs)(a.p,{children:["Ser\xeda conveniente pensar cual es la estructura de storage deseada para un contrato. Si usamos una estructura ",(0,s.jsx)(a.code,{children:"Packed"})," se mantendr\xe1 el tama\xf1o del c\xf3digo general del contrato m\xe1s peque\xf1o lo cual puede ocasionar altos costos de gas innecesarios. Por lo tanto, consideramos una buena pr\xe1ctica dividir estructuras de storage grandes o complejas en distintas celdas de storage de tama\xf1o razonable."]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsxs)(a.p,{children:["Los ",(0,s.jsx)(a.code,{children:"Mapping"})," de ink! son siempre non-",(0,s.jsx)(a.code,{children:"Packed"})," y cargados de manera lazy, un par key-value por vez."]})})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>o,x:()=>c});var s=r(96540);const n={},t=s.createContext(n);function o(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);
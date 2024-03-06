"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6813],{71868:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=a(74848),r=a(28453);const t={title:"Contratos Actualizables",slug:"/basics/upgradeable-contracts",hide_title:!0},o="Contratos Actualizables",i={id:"basics/upgradeability",title:"Contratos Actualizables",description:"A pesar de que los smart contracts est\xe1n destinados a ser inmutables por dise\xf1o,",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/basics/upgradeability.md",sourceDirName:"basics",slug:"/basics/upgradeable-contracts",permalink:"/es/5.x/basics/upgradeable-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/basics/upgradeability.md",tags:[],version:"5.x",frontMatter:{title:"Contratos Actualizables",slug:"/basics/upgradeable-contracts",hide_title:!0},sidebar:"reference",previous:{title:"Llamadas Cross-Contract",permalink:"/es/5.x/basics/cross-contract-calling"},next:{title:"Funciones de Entorno",permalink:"/es/5.x/basics/environment-functions"}},l={},c=[{value:"Proxy Forwarding",id:"proxy-forwarding",level:2},{value:"Propiedades",id:"propiedades",level:3},{value:"Reemplazar el C\xf3digo del Contrto con <code>set_code_hash()</code>",id:"reemplazar-el-c\xf3digo-del-contrto-con-set_code_hash",level:2},{value:"Propiedades",id:"propiedades-1",level:3},{value:"Compatibilidad del Storage",id:"compatibilidad-del-storage",level:3},{value:"Una peque\xf1a nota sobre el determinismo de las direcciones de los contratos",id:"una-peque\xf1a-nota-sobre-el-determinismo-de-las-direcciones-de-los-contratos",level:3},{value:"Ejemplos",id:"ejemplos",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/upgradeable-contract.svg",className:"titlePic"}),"\n",(0,s.jsx)(n.h1,{id:"contratos-actualizables",children:"Contratos Actualizables"}),"\n",(0,s.jsx)(n.p,{children:"A pesar de que los smart contracts est\xe1n destinados a ser inmutables por dise\xf1o,\na menudo es necesario realizar una actualizaci\xf3n del smart contract."}),"\n",(0,s.jsx)(n.p,{children:"Para este escenario, ink! tiene diferentas estrategias de actualizaci\xf3n."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#proxy-forwarding",children:"Proxy Forwarding"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#properties",children:"Propiedades"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.a,{href:"#replacing-contract-code-with-set_code_hash",children:["Reemplazar el C\xf3digo del Contrto con ",(0,s.jsx)(n.code,{children:"set_code_hash()"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#properties-1",children:"Propiedades"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#storage-compatibility",children:"Compatibilidad del Storage"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#a-little-note-on-the-determinism-of-contract-addresses",children:"Una peque\xf1a nota sobre el determinismo de las direcciones de los contratos"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Ejemplos"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"proxy-forwarding",children:"Proxy Forwarding"}),"\n",(0,s.jsx)(n.p,{children:"Este m\xe9todo se basa en la capacidad de los contratos para hacer llamadas proxy con otros contratos."}),"\n",(0,s.jsx)(n.h3,{id:"propiedades",children:"Propiedades"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reenv\xeda cualquier llamada en la que no coincidan  un selector propio con el de otro contrato."}),"\n",(0,s.jsx)(n.li,{children:"El otro contrato necesita ser desplegado on-chain."}),"\n",(0,s.jsx)(n.li,{children:"El estado es almacenado en el storage del contrato en la que se desv\xedan las llamadas."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"User ---- tx ---\x3e Proxy ----------\x3e Implementation_v0\n                     |\n                      ------------\x3e Implementation_v1\n                     |\n                      ------------\x3e Implementation_v2\n"})}),"\n",(0,s.jsx)(n.p,{children:"Nuestro contrato proxy tendra estos dos campos en el storage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct Proxy {\n    /// The `AccountId` of a contract where any call that does not match a\n    /// selector of this contract is forwarded to.\n    forward_to: AccountId,\n    /// The `AccountId` of a privileged account that can update the\n    /// forwarding address. This address is set to the account that\n    /// instantiated this contract.\n    admin: AccountId,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Necesitamos una manera de cambiar la direcci\xf3n de un contrato al que desviamos las llamadas\ny el selector de mensajes actual para hacer proxy de la llamada:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'impl Proxy {\n    /// Changes the `AccountId` of the contract where any call that does\n    /// not match a selector of this contract is forwarded to.\n    #[ink(message)]\n    pub fn change_forward_address(&mut self, new_address: AccountId) {\n        assert_eq!(\n            self.env().caller(),\n            self.admin,\n            "caller {:?} does not have sufficient permissions, only {:?} does",\n            self.env().caller(),\n            self.admin,\n        );\n        self.forward_to = new_address;\n    }\n\n    /// Fallback message for a contract call that doesn\'t match any\n    /// of the other message selectors.\n    ///\n    /// # Note:\n    ///\n    /// - We allow payable messages here and would forward any optionally supplied\n    ///   value as well.\n    /// - If the self receiver were `forward(&mut self)` here, this would not\n    ///   have any effect whatsoever on the contract we forward to.\n    #[ink(message, payable, selector = _)]\n    pub fn forward(&self) -> u32 {\n        ink::env::call::build_call::<ink::env::DefaultEnvironment>()\n            .call_type(\n                Call::new()\n                    .callee(self.forward_to)\n                    .transferred_value(self.env().transferred_value())\n                    .gas_limit(0),\n            )\n            .call_flags(\n                ink::env::CallFlags::default()\n                    .set_forward_input(true)\n                    .set_tail_call(true),\n            )\n            .fire()\n            .unwrap_or_else(|err| {\n                panic!(\n                    "cross-contract call to {:?} failed due to {:?}",\n                    self.forward_to, err\n                )\n            });\n        unreachable!(\n            "the forwarded call will never return since `tail_call` was set"\n        );\n    }\n}\n'})}),"\n",(0,s.jsx)(n.div,{children:(0,s.jsxs)(n.p,{children:["Eche un vistazo al patr\xf3n selector en el atribut de la macro, declarando ",(0,s.jsx)(n.code,{children:"selector = _"}),"\nespecificamos que todos los dem\xe1s mensajes deben ser manejados por este selector de mensajes."]})}),"\n",(0,s.jsx)(n.p,{children:"Con este patr\xf3n, puede introducir otro mensaje en su contrato proxy.\nCualquier mensaje que no coincida con el contrato proxy\nse reenviar\xe1 a la direcci\xf3n del contrato especificada."}),"\n",(0,s.jsxs)(n.h2,{id:"reemplazar-el-c\xf3digo-del-contrto-con-set_code_hash",children:["Reemplazar el C\xf3digo del Contrto con ",(0,s.jsx)(n.code,{children:"set_code_hash()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Siguiendo la filosofia de ",(0,s.jsx)(n.a,{href:"https://docs.substrate.io/maintain/runtime-upgrades/",children:"Substrate's runtime upgradeability"}),",\nink! tambi\xe9n soporta una manera sencilla de actualizar el c\xf3digo de tus contratos via la funci\xf3n especial\n",(0,s.jsx)(n.a,{href:"https://paritytech.github.io/ink/ink_env/fn.set_code_hash.html",children:(0,s.jsx)(n.code,{children:"set_code_hash()"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"propiedades-1",children:"Propiedades"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Actualizar el c\xf3digo del contrato con ",(0,s.jsx)(n.code,{children:"set_code_hash()"}),".\nEsto reemplaza de manera efectiva el c\xf3digo que se ejecuta para la direcci\xf3n del contrato."]}),"\n",(0,s.jsx)(n.li,{children:"El otro contrato necesita ser desplegado on-chain."}),"\n",(0,s.jsx)(n.li,{children:"El estado es almacenado en el storage del contrato instanciado originalmente."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Simplemente a\xf1ade la siguiente funci\xf3n al contrato que quieres actualizar en el futuro."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'/// Modifies the code which is used to execute calls to this contract address (`AccountId`).\n///\n/// We use this to upgrade the contract logic. We don\'t do any authorization here, any caller\n/// can execute this method. In a production contract you would do some authorization here.\n#[ink(message)]\npub fn set_code(&mut self, code_hash: [u8; 32]) {\n    ink::env::set_code_hash(&code_hash).unwrap_or_else(|err| {\n        panic!(\n            "Failed to `set_code_hash` to {:?} due to {:?}",\n            code_hash, err\n        )\n    });\n    ink::env::debug_println!("Switched code hash to {:?}.", code_hash);\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"compatibilidad-del-storage",children:"Compatibilidad del Storage"}),"\n",(0,s.jsx)(n.p,{children:"Es responsabilidad del desarrollador asegurarse que el storage del nuevo contrato es compatible con el storage del contrato que esta siendo reemplazado."}),"\n",(0,s.jsxs)(n.admonition,{title:"\xa1Atenci\xf3n!",type:"danger",children:[(0,s.jsx)(n.p,{children:"No deberias cambiar el otden en el que las variables de estado del contrato son declaradas, ni su tipo!"}),(0,s.jsxs)(n.p,{children:["Violar esta restricci\xf3n no impedir\xe1 una exitosa compilaci\xf3n,\npero podria resultar en  ",(0,s.jsx)(n.strong,{children:"el mix-up de valores"})," o ",(0,s.jsx)(n.strong,{children:"fallos al leer correctamente el storage"}),".\nEsto podr\xeda resultar en errores severos en la aplicaci\xf3n que utiliza el contrato."]})]}),"\n",(0,s.jsx)(n.p,{children:"Si el storage de tu contrato tiene esta pinta:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct YourContract {\n    x: u32,\n    y: bool,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Los procedimientos enumerados a continuaci\xf3n har\xe1n que sea ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"invalido"})})]}),"\n",(0,s.jsx)(n.p,{children:"Cambiar el orden de las variables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct YourContract {\n    y: bool,\n    x: u32,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Eliminar una variable existente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct YourContract {\n    x: u32,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Cambiar el tipo de la variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct YourContract {\n    x: u64,\n    y: bool,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Introducir una nueva variable antes de una de las ya existentes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct YourContract {\n    z: Vec<u32>,\n    x: u32,\n    y: bool,\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"una-peque\xf1a-nota-sobre-el-determinismo-de-las-direcciones-de-los-contratos",children:"Una peque\xf1a nota sobre el determinismo de las direcciones de los contratos"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Si tu contato utiliza este enfoque, ya no mantiene la suposici\xf3n de address determinista.\nYa no puedes asumir que la direcci\xf3n del contrato identifica un c\xf3digo hash espec\xedfico.\nPor favor vaya ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/pull/10690#issuecomment-1025702389",children:"al error"}),"\npara m\xe1s detaller."]})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,s.jsxs)(n.p,{children:["Puedes ver ejemplos de actualizaciones de contratos en el",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts",children:"repositorio ink!"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var s=a(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
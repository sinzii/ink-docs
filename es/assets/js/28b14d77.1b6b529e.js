"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1168],{44406:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(74848),o=n(28453);const r={title:"ink! vs. CosmWasm",slug:"/ink-vs-cosmwasm",hide_title:!0},t="ink! vs. CosmWasm",c={id:"intro/ink-vs-cosmwasm",title:"ink! vs. CosmWasm",description:"A continuaci\xf3n, una breve comparaci\xf3n entre ink!",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/intro/ink-vs-cosmwasm.md",sourceDirName:"intro",slug:"/ink-vs-cosmwasm",permalink:"/es/5.x/ink-vs-cosmwasm",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/intro/ink-vs-cosmwasm.md",tags:[],version:"5.x",frontMatter:{title:"ink! vs. CosmWasm",slug:"/ink-vs-cosmwasm",hide_title:!0},sidebar:"reference",previous:{title:"ink! vs. Solidity",permalink:"/es/5.x/ink-vs-solidity"},next:{title:"Migrating an ink! contract to a Parachain Runtime",permalink:"/es/5.x/migrate-ink-contracts-to-polkadot-frame-parachain"}},i={},l=[{value:"Arquitectura",id:"arquitectura",level:2},{value:"Tests unitarios",id:"tests-unitarios",level:2},{value:"Compilador",id:"compilador",level:2},{value:"Desarrollo Local",id:"desarrollo-local",level:2},{value:"Testnets",id:"testnets",level:2},{value:"Workflow de Desarrollo",id:"workflow-de-desarrollo",level:2},{value:"Dependencias",id:"dependencias",level:3},{value:"Setup del entorno",id:"setup-del-entorno",level:3},{value:"Compilaci\xf3n y Tests",id:"compilaci\xf3n-y-tests",level:3},{value:"Despliegue e Interacci\xf3n",id:"despliegue-e-interacci\xf3n",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:"/img/title/cosmwasm.svg",className:"titlePic"}),"\n",(0,a.jsx)(s.h1,{id:"ink-vs-cosmwasm",children:"ink! vs. CosmWasm"}),"\n",(0,a.jsxs)(s.p,{children:["A continuaci\xf3n, una breve comparaci\xf3n entre ",(0,a.jsx)(s.a,{href:"https://github.com/paritytech/ink/",children:"ink!"}),"\ny ",(0,a.jsx)(s.a,{href:"https://github.com/CosmWasm/cosmwasm",children:"CosmWasm"})," enfocada a desarrolladores que vengan\ndel ecosistema de Cosmos."]}),"\n",(0,a.jsx)(s.h2,{id:"arquitectura",children:"Arquitectura"}),"\n",(0,a.jsxs)(s.p,{children:["CosmWasm es modular, de manera que cualquier blockchain que use Cosmos SDK puede a\xf1adir\nsoporte para smart contracts. Siendo muy similar al enfoque que toma ",(0,a.jsx)(s.a,{href:"https://substrate.io",children:"Substrate"}),",\ncon el cual cualquier red tiene la opci\xf3n de a\xf1adir el ",(0,a.jsx)(s.code,{children:"pallet-conctracts"})," en su runtime."]}),"\n",(0,a.jsx)(s.p,{children:"Salvo en esto, la filosof\xeda con la que se ha hecho la arquitectura de CosmWasm e ink! es\ntotalmente diferente. El patr\xf3n de dise\xf1o seguido por CosmWasm es el modelo actor, mientras\nque ink! se construye sobre un modelo de ejecuci\xf3n s\xedncrona. Esto se traduce en diferencias\nfundamentales en como el c\xf3digo fuente es estructurado."}),"\n",(0,a.jsx)(s.p,{children:"El principal punto de entrada de funciones en contratos de CosmWasm son:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"instantiate"})," que inicializa el estrado del contrato (asumiendo que ya ha sido desplegado)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"execute"})," el actor realizar\xe1 operaciones sobre su estado interno."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"query"})," devuelve informaci\xf3n sobre el estado interno del actor."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Un contracto en ink! puede tener tanto dispatchables publicos como el desarrollador desee,\ny de manera diferente a CosmWasm, no depende de JSON schemas para definir la estructura de los\nmensajes."}),"\n",(0,a.jsx)(s.p,{children:"En cambio, ink! hace un uso intensivo de las macros de Rust. Las principales macros usadas en ink! son:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"#[ink(constructor)]"})," la cual es llamada cuando el contrato se despliega, y es responsable\nde inicializar el estado del contrato. Es analoga a la funci\xf3n ",(0,a.jsx)(s.code,{children:"instantiate"})," de CosmWasm."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"#[ink(storage)]"})," anotar\xe1 una estrucura que represente el estado interno del contrato."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"#[ink(message)]"})," denota una funci\xf3n como un dispatchable p\xfablico, esto significa que es expuesta\nen la interfaz del contrato al resto del mundo. Esta macro hace que una funci\xf3n se comporte\nanalogamente a las funciones ",(0,a.jsx)(s.code,{children:"execute"})," y ",(0,a.jsx)(s.code,{children:"query"})," de CosmWasm."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"#[ink(event)]"})," y ",(0,a.jsx)(s.code,{children:"#[ink(topic)]"})," anotar\xe1n estructuras cuyos elementos ser\xe1n los eventos y topics\nque el contrato pueda emitir."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Hay m\xe1s macros usadas en ink!, sus detalles pueden ser encontrados en ",(0,a.jsx)(s.a,{href:"/macros-attributes",children:"Macros & Attributes"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"tests-unitarios",children:"Tests unitarios"}),"\n",(0,a.jsxs)(s.p,{children:["Los test unitarios en CosmWasm son bastante similares a ink!. Ambos usan la convencional\n",(0,a.jsx)(s.code,{children:"#[cfg(test)]"})," macro de Rust y establecen un entonrno mock on-chain."]}),"\n",(0,a.jsxs)(s.p,{children:["Mientras que los tests unitarios de CosmWasm tienen diferentes m\xf3dules para cada uno de las tres\nposibles funciones de entrada, ink! permite un enfoque m\xe1s general, ",(0,a.jsx)(s.code,{children:"#[ink(test)]"})," ser\xe1 usado\npara cada test."]}),"\n",(0,a.jsxs)(s.p,{children:["Puedes leer m\xe1s sobre ink! y los test unitarios ",(0,a.jsx)(s.a,{href:"https://use.ink/basics/contract-testing#unit-tests",children:"aqui"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"compilador",children:"Compilador"}),"\n",(0,a.jsxs)(s.p,{children:["CosmWasm usa ",(0,a.jsx)(s.a,{href:"https://docs.rs/crate/cargo-wasm/latest",children:"cargo-wasm"})," como su principal\ncompilador, mientras que ink! usa ",(0,a.jsx)(s.a,{href:"https://github.com/paritytech/cargo-contract",children:"cargo-contract"}),".\n",(0,a.jsx)(s.code,{children:"cargo-contract"})," ha sido desarrollado por Parity espec\xedficamente para construir, testear y desplegar\ncontractos escritos usando ink!."]}),"\n",(0,a.jsx)(s.h2,{id:"desarrollo-local",children:"Desarrollo Local"}),"\n",(0,a.jsxs)(s.p,{children:["En cuanto a redes para desarrollo local, el repositorio ",(0,a.jsx)(s.a,{href:"https://github.com/cosmos/gaia",children:"cosmos/gaia"}),"\nactua como un template b\xe1sico de un nodo gen\xe9rico de Cosmos. Con la adici\xf3n del m\xf3dulo ",(0,a.jsx)(s.code,{children:"x/wasm"}),"\ny algo de reorganizaci\xf3n del c\xf3digo, este repositorio se conviernte en ",(0,a.jsx)(s.a,{href:"https://github.com/CosmWasm/wasmd",children:"wasmd"}),",\npunto de entrada para el desarrollo con CosmWasm."]}),"\n",(0,a.jsxs)(s.p,{children:["Con Substrate, ",(0,a.jsx)(s.code,{children:"substrate-node-template"})," es un template gen\xe9rico de un nodo. Similar a ",(0,a.jsx)(s.code,{children:"x/wasm"}),",\n",(0,a.jsx)(s.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,a.jsx)(s.code,{children:"pallet-contracts"})})," es el m\xf3dulo\nque a\xf1ade soporte para WebAssembly smart contracts a la red. Parity provee ",(0,a.jsx)(s.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:(0,a.jsx)(s.code,{children:"substrate-contracts-node"})}),", que es el an\xe1logo a ",(0,a.jsx)(s.code,{children:"wasmd"})," - un template de un nodo b\xe1sico para\nel desarrollo de smart contracts."]}),"\n",(0,a.jsx)(s.h2,{id:"testnets",children:"Testnets"}),"\n",(0,a.jsxs)(s.p,{children:["Para el desarrolly on-chain testing con CosmWasm, ",(0,a.jsx)(s.code,{children:"wasmd"})," puede ser usado para lanzar localmente\n(uno o m\xfaltiples nodos), o conectados a la testnet p\xfablica ",(0,a.jsx)(s.code,{children:"cliffnet"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"Por otro lado, existen varias opciones para desplegar contratos ink!:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Localmente, en un \xfanico, o m\xfaltiples, nodos ",(0,a.jsx)(s.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:(0,a.jsx)(s.code,{children:"substrate-contracts-node"})}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer",children:"Contracts Parachain en Rococo"}),", que est\xe1 contectada a ",(0,a.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer",children:"Rococo relay chain test network"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"https://docs.astar.network/docs/build/wasm",children:"Astar Network\u2019s Shibuya testnet"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"workflow-de-desarrollo",children:"Workflow de Desarrollo"}),"\n",(0,a.jsx)(s.h3,{id:"dependencias",children:"Dependencias"}),"\n",(0,a.jsxs)(s.p,{children:["El primer paso desarrollando con CosmWasm es ",(0,a.jsx)(s.a,{href:"https://docs.cosmwasm.com/docs/1.0/getting-started/installation",children:"instalar las dependencias"}),", como son Go, Rust y ",(0,a.jsx)(s.code,{children:"wasmd"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Para ink! tambi\xe9n puedes encontrar una ",(0,a.jsx)(s.a,{href:"/getting-started/setup",children:"gu\xeda de configuraci\xf3n"})," que te ayudar\xe1 a instalar\nlas dependencias necesarias, como Rust, ",(0,a.jsx)(s.code,{children:"cargo-contract"})," y ",(0,a.jsx)(s.code,{children:"substrate-contracts-node"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"setup-del-entorno",children:"Setup del entorno"}),"\n",(0,a.jsxs)(s.p,{children:["El siguiente paso en el desarrollo con CosmWasm es hacer el ",(0,a.jsx)(s.a,{href:"https://docs.cosmwasm.com/docs/1.0/getting-started/setting-env",children:"preparar el entorno"}),". Consiste en configurar ",(0,a.jsx)(s.code,{children:"wasmd"})," de manera que tengamos\nciertas cuentas con un balance inicial haciendo posible interactuar con la red."]}),"\n",(0,a.jsxs)(s.p,{children:["De manera similar, cuando lanzamos ",(0,a.jsx)(s.code,{children:"substrate-contracts-node"})," obtendremos\ncuentas pre-fundadas (",(0,a.jsx)(s.code,{children:"alice"}),", ",(0,a.jsx)(s.code,{children:"bob"}),", etc.) que est\xe1n listas para ser usadas en nuestro desarrollo."]}),"\n",(0,a.jsx)(s.h3,{id:"compilaci\xf3n-y-tests",children:"Compilaci\xf3n y Tests"}),"\n",(0,a.jsxs)(s.p,{children:["CosmWasm provee contratos de ejemplo en el repositorio ",(0,a.jsx)(s.a,{href:"https://github.com/InterWasm/cw-contracts",children:"cw-contracts"}),".\nTras clonar el repositorio, podremos compilalo con:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"$ cargo wasm\n"})}),"\n",(0,a.jsx)(s.p,{children:"y realizar los tests con:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"$ cargo test\n"})}),"\n",(0,a.jsxs)(s.p,{children:["De manera similar, podemos encontrar ejemplos de ink! en el directorio ",(0,a.jsx)(s.a,{href:"https://github.com/paritytech/ink-examples/tree/main",children:(0,a.jsx)(s.code,{children:"examples"})})," del repositorio principal."]}),"\n",(0,a.jsx)(s.p,{children:"Un contrato pude ser compilado desde su directorio ejecutando:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"$ cargo contract build\n"})}),"\n",(0,a.jsx)(s.p,{children:"y realizar tests con:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"$ cargo test\n"})}),"\n",(0,a.jsx)(s.h3,{id:"despliegue-e-interacci\xf3n",children:"Despliegue e Interacci\xf3n"}),"\n",(0,a.jsxs)(s.p,{children:["Los contratos de CosmWasm son deplegados e instanciados con ayuda del ejecutable ",(0,a.jsx)(s.code,{children:"wasmd"}),".\nLa lista de pasos a seguir puede encontrarse ",(0,a.jsx)(s.a,{href:"https://docs.cosmwasm.com/docs/1.0/getting-started/interact-with-contract",children:"aqu\xed"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Es posible desplegar e interactuar un contrato ink! usando el CLI(",(0,a.jsx)(s.code,{children:"cargo-contract"}),"), o el UI web (",(0,a.jsx)(s.a,{href:"https://contracts-ui.substrate.io/",children:(0,a.jsx)(s.code,{children:"contracts-ui"})}),")."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsxs)(s.a,{href:"https://github.com/paritytech/cargo-contract/blob/master/crates/extrinsics/README.md",children:["Instrucciones para ",(0,a.jsx)(s.code,{children:"cargo-contract"})]})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsxs)(s.a,{href:"/getting-started/deploy-your-contract",children:["Instrucciones para ",(0,a.jsx)(s.code,{children:"contracts-ui"})]})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var a=n(96540);const o={},r=a.createContext(o);function t(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);
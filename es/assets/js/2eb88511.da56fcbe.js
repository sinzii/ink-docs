"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2065],{98992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(74848),o=n(28453);const s={title:"Contratos en Rococo",hide_title:!0,slug:"/testnet"},r="Contratos en Rococo",c={id:"testnet/overview",title:"Contratos en Rococo",description:"Rococo es una testnet para",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/testnet/overview.md",sourceDirName:"testnet",slug:"/testnet",permalink:"/es/testnet",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/testnet/overview.md",tags:[],version:"current",frontMatter:{title:"Contratos en Rococo",hide_title:!0,slug:"/testnet"},sidebar:"reference",previous:{title:"Kickstart your project!",permalink:"/es/inkubator-overview"},next:{title:"Faucet",permalink:"/es/faucet"}},i={},l=[{value:"\xbfQu\xe9 es la Parachain Contracts?",id:"qu\xe9-es-la-parachain-contracts",level:2},{value:"\xbfC\xf3mo puedo usarla?",id:"c\xf3mo-puedo-usarla",level:2},{value:"(1) Crear una Cuenta",id:"1-crear-una-cuenta",level:3},{value:"(2) Obtener Tokens de Testnet",id:"2-obtener-tokens-de-testnet",level:3},{value:"(3) Despliega Tu Contrato",id:"3-despliega-tu-contrato",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:"/img/title/testnet.svg",className:"titlePic"}),"\n",(0,a.jsx)(t.h1,{id:"contratos-en-rococo",children:"Contratos en Rococo"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/build-pdk#rococo-testnet",children:"Rococo"})," es una testnet para\nlas parachains de Polkadot y Kusama. All\xed tenemos una testnet llamada Contracts funcionando como una parachain."]}),"\n",(0,a.jsx)("img",{src:"/img/contracts-on-polkadot-js.png",alt:"Parachain para Contratos Inteligentes en Rococo"}),"\n",(0,a.jsx)(t.h2,{id:"qu\xe9-es-la-parachain-contracts",children:"\xbfQu\xe9 es la Parachain Contracts?"}),"\n",(0,a.jsxs)(t.p,{children:["Es una parachain de ",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/substrate",children:"Substrate"})," para\nContratos Inteligentes. La hemos configurado para usar el modulo de Contratos Inteligentes\nde Substrate - el pallet ",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,a.jsx)(t.code,{children:"contracts"})})," -\ncon una configuraci\xf3n default."]}),"\n",(0,a.jsxs)(t.p,{children:["El c\xf3digo de esta parachain puede ser encontrado ",(0,a.jsxs)(t.a,{href:"https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo",children:["en el repositorio de ",(0,a.jsx)(t.code,{children:"cumulus"})]}),". Nuestra parachain usa el token nativo de la relay chain Rococo (",(0,a.jsx)(t.code,{children:"ROC"}),") en lugar de tener el suyo propio.\nDebido a esto, necesitar\xe1s ",(0,a.jsx)(t.code,{children:"ROC"})," para poder desplegar tus contratos en nuestra testnet."]}),"\n",(0,a.jsx)(t.h2,{id:"c\xf3mo-puedo-usarla",children:"\xbfC\xf3mo puedo usarla?"}),"\n",(0,a.jsx)(t.h3,{id:"1-crear-una-cuenta",children:"(1) Crear una Cuenta"}),"\n",(0,a.jsxs)(t.p,{children:["Como primer paso, deber\xedas crearte una cuenta. Esto puede hacerse utilizando herramientas de linea de comandos (por ejemplo, ",(0,a.jsx)(t.code,{children:"subxt"}),")\no via billetera (por ejemplo, con la extensi\xf3n de navegador ",(0,a.jsx)(t.code,{children:"polkadot-js"}),"). ",(0,a.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-account-generation",children:"Aqu\xed"})," tienes una gu\xeda detallada."]}),"\n",(0,a.jsx)(t.h3,{id:"2-obtener-tokens-de-testnet",children:"(2) Obtener Tokens de Testnet"}),"\n",(0,a.jsx)("img",{src:"/img/chest.svg",alt:"imagen de un cofre del tesoro",className:"faucetHeroImage"}),"\n",(0,a.jsxs)(t.p,{children:["Como segundo paso, debes adquirir tokens de testnet ",(0,a.jsx)(t.code,{children:"ROC"})," a traves del ",(0,a.jsx)(t.a,{href:"/faucet",children:"Faucet de Rococo"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternativamente, puedes usar la ",(0,a.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-rococo-testnet",children:"sala de chat de Element"}),". Debes enviar un mensaje como el siguiente (Notar el ",(0,a.jsx)(t.code,{children:":1002"})," luego de la direcci\xf3n de la billetera):"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"!drip YOUR_SS_58_ADDRESS:1002\n"})}),"\n",(0,a.jsxs)(t.p,{children:["El n\xfamero ",(0,a.jsx)(t.code,{children:"1002"})," es la identificaci\xf3n de la parachain Contracts en Rococo. Al suministrarlo, le indicas al faucet que teletransporte tokens ",(0,a.jsx)(t.code,{children:"ROC"})," directamente a tu cuenta en la parachain.\nSi tienes algunos tokens en la relay chain Rococo, puedes transportarlos a la parachain Contracts por tus propios medios. Lee m\xe1s acerca de transportar activos ",(0,a.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-teleport",children:"aqu\xed"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Si todo funcion\xf3 bien, los tokenes ",(0,a.jsx)(t.code,{children:"ROC"})," telentransportados van aparecer en tu cuenta.\nEn caso de que est\xe9s usando el frontend de ",(0,a.jsx)(t.code,{children:"polkadot-js"}),", los podr\xe1s ver en ",(0,a.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts",children:'la pesta\xf1a de "Cuentas" para la parachain Contracts'}),"."]}),"\n",(0,a.jsx)("img",{src:"/img/roc-in-wallet.png",alt:"Tokens de la testnet Rococo en la billetera"}),"\n",(0,a.jsx)(t.h3,{id:"3-despliega-tu-contrato",children:"(3) Despliega Tu Contrato"}),"\n",(0,a.jsxs)(t.p,{children:["Una vez que tengas tokens ",(0,a.jsx)(t.code,{children:"ROC"})," en la parachain Contracts, puedes desplegar tu contrato casi como si lo har\xedas con un nodo local de desarrollador.\nLa \xfanica diferencia es que no puedes utilizar cuentas pre-creadas como ",(0,a.jsx)(t.code,{children:"Alice"})," o ",(0,a.jsx)(t.code,{children:"Bob"}),", sino la que t\xfa has generado."]}),"\n",(0,a.jsx)("img",{src:"/img/deployment-acc.png",alt:"Despliega un contrato inteligente en Rococo/Polkadot"}),"\n",(0,a.jsxs)(t.p,{children:["Tambi\xe9n puedes desplegar tu contrato desde la l\xednea de comandos a trav\xe9s de ",(0,a.jsx)(t.code,{children:"cargo-contract"}),".\nAseg\xfarate de estar en la carpeta de tu contrato y que se ha compilado recientemente.\nA continuaci\xf3n, ejecute:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'cargo contract upload --suri "your twelve or twenty-four words"\ncargo contract instantiate --suri \u2026 --constructor new --args true\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"new"})," en este caso ser\xeda un m\xe9todo constructor expuesto por el contrato,\n",(0,a.jsx)(t.code,{children:"--args"})," ser\xeda cualquier argumento que el constructor espere."]}),"\n",(0,a.jsxs)(t.p,{children:["Consulte ",(0,a.jsxs)(t.a,{href:"https://github.com/paritytech/cargo-contract/blob/master/crates/extrinsics/README.md#commands",children:["la documentaci\xf3n de ",(0,a.jsx)(t.code,{children:"cargo-contract"})]})," para obtener informaci\xf3n m\xe1s detallada."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var a=n(96540);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
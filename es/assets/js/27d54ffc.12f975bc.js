"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4268],{63513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var a=t(74848),o=t(28453);const c={title:"Desplega tu Contrato",slug:"/getting-started/deploy-your-contract",hide_title:!0},s="Desplega tu Contrato",r={id:"getting-started/deploying",title:"Desplega tu Contrato",description:"Ahora que hemos generado el binario Wasm desde nuestro c\xf3digo fuente y nos hemos conectado a un nodo local,",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/getting-started/deploying.md",sourceDirName:"getting-started",slug:"/getting-started/deploy-your-contract",permalink:"/es/getting-started/deploy-your-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/getting-started/deploying.md",tags:[],version:"current",frontMatter:{title:"Desplega tu Contrato",slug:"/getting-started/deploy-your-contract",hide_title:!0},sidebar:"reference",previous:{title:"Arranca un Nodo Substrate",permalink:"/es/getting-started/running-substrate"},next:{title:"Ejecute su Contrato",permalink:"/es/getting-started/calling-your-contract"}},i={},l=[{value:"TODO: Using the Contracts UI",id:"todo-using-the-contracts-ui",level:2},{value:"1. Cargar el c\xf3digo del Contrato",id:"1-cargar-el-c\xf3digo-del-contrato",level:3},{value:"2. Instanciar un Contrato en la Blockchain",id:"2-instanciar-un-contrato-en-la-blockchain",level:3},{value:"Uso de <code>cargo-contract</code>",id:"uso-de-cargo-contract",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:"/img/title/rocket.svg",className:"titlePic"}),"\n",(0,a.jsx)(n.h1,{id:"desplega-tu-contrato",children:"Desplega tu Contrato"}),"\n",(0,a.jsx)(n.p,{children:"Ahora que hemos generado el binario Wasm desde nuestro c\xf3digo fuente y nos hemos conectado a un nodo local,\nqueremos desplegar este contrato en nuestro Substrate blockchain."}),"\n",(0,a.jsx)(n.p,{children:"El despliegue de los smart contracts en Substrate es un poco diferente que los blockchain smart contracts tradicionales."}),"\n",(0,a.jsxs)(n.p,{children:["Mientras que en otras plataformas cada vez que se carga un contrato se despliega un nuevo blob del c\xf3digo fuente de los smart contracts,\nSubstrate opta por optimizar este comportamiento. Por ejemplo, el token est\xe1ndar ERC20 se ha desplegado en Ethereum miles de veces,\nalgunas veces solo con cambios en la configuraci\xf3n inicial (mediante la funci\xf3n de Solidity ",(0,a.jsx)(n.code,{children:"constructor"}),"). Cada una de estas instancias\nocupan espacio en la blockchain equivalente al tama\xf1o del c\xf3digo fuente del contrato, aunque en realidad no se modific\xf3 ning\xfan c\xf3digo."]}),"\n",(0,a.jsx)(n.p,{children:"En Substrate, el proceso de despliegue del contrato se divide en dos pasos:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Poner el c\xf3digo del contrato en la blockchain."}),"\n",(0,a.jsx)(n.li,{children:"Crear una instancia de tu contrato."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Con este patr\xf3n, c\xf3digo de un contrato como el est\xe1ndar ERC20 puede ponerse en la blockchain una sola vez, pero instanciarse muchas veces.\nNo es necesario cargar el mismo c\xf3digo fuente continuamente y desperdiciar espacio en la blockchain."}),"\n",(0,a.jsx)(n.h2,{id:"todo-using-the-contracts-ui",children:"TODO: Using the Contracts UI"}),"\n",(0,a.jsx)(n.h3,{id:"1-cargar-el-c\xf3digo-del-contrato",children:"1. Cargar el c\xf3digo del Contrato"}),"\n",(0,a.jsx)(n.p,{children:"Aqu\xed cargaremos el c\xf3digo del contrato e instanciaremos una copia del contrato en la blockchain (que suele ser la raz\xf3n por la que cargamos el c\xf3digo del contrato en primer lugar):"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Haga clic en el bot\xf3n ",(0,a.jsx)(n.strong,{children:"Add New Contract"})," de la barra lateral."]}),"\n",(0,a.jsxs)(n.li,{children:["Haga clic en el bot\xf3n ",(0,a.jsx)(n.strong,{children:"Upload New Contract Code"})," en la p\xe1gina de ",(0,a.jsx)(n.code,{children:"Add New Contract"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Elige una ",(0,a.jsx)(n.strong,{children:"Instantiation account"})," (e.g. ALICE)."]}),"\n",(0,a.jsxs)(n.li,{children:["Dale una descripci\xf3n al contrato ",(0,a.jsx)(n.strong,{children:"Name"})," (e.g. Flipper Contract)."]}),"\n",(0,a.jsxs)(n.li,{children:["Arrastra el fichero ",(0,a.jsx)(n.code,{children:"flipper.contract"})," que contiene el paquete Wasm blob y la metadata en el area de ",(0,a.jsx)(n.code,{children:"drag & drop"}),". Ver\xe1s la UI analizar los metadatos  y habilitar el bot\xf3n que te permitira avanzar al siguiente paso."]}),"\n",(0,a.jsxs)(n.li,{children:["aga clic en el bot\xf3n ",(0,a.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Flipper Instantiate Contract 01",src:t(47248).A+"",width:"2272",height:"1586"})}),"\n",(0,a.jsx)(n.h3,{id:"2-instanciar-un-contrato-en-la-blockchain",children:"2. Instanciar un Contrato en la Blockchain"}),"\n",(0,a.jsxs)(n.p,{children:["Los Smarts contracts existen como una extensi\xf3n del account system de la blockchain. Por lo tanto,\ncrear una instancia de este contrato crear\xe1 un nuevo ",(0,a.jsx)(n.code,{children:"AccountId"})," que almacenar\xe1 cualquier balance gestionado por el\nsmart contract y nos permite interactuar con el contrato."]}),"\n",(0,a.jsx)(n.p,{children:"Ahora una pantalla nos mostrara la informaci\xf3n que representa nuestro smart contract. Vamos a instanciar una copia del smart contract:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Aceptar las opciones por defecto del contrato ",(0,a.jsx)(n.strong,{children:"Deployment Constructor"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Aceptar la opci\xf3n por defecto ",(0,a.jsx)(n.strong,{children:"Max Gas Allowed"})," de ",(0,a.jsx)(n.code,{children:"200000"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Haga click en ",(0,a.jsx)(n.code,{children:"Next"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Flipper Instantiate Contract 02",src:t(53497).A+"",width:"2588",height:"1778"})}),"\n",(0,a.jsxs)(n.p,{children:["La transacci\xf3n ahora est\xe1 en cola, revisa tus datos y haga clic en  ",(0,a.jsx)(n.strong,{children:"Upload and Instantiate"})," o vuelve para modificar tus inputs."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Flipper Instantiate Contract 03",src:t(70562).A+"",width:"2396",height:"1778"})}),"\n",(0,a.jsxs)(n.p,{children:["Cuando hagas clic en ",(0,a.jsx)(n.strong,{children:"Upload and Instantiate"})," deber\xedas ver que el extrinsic ",(0,a.jsx)(n.code,{children:"instantiateWithCode"}),"\nse est\xe1 procesando, y aparece una r\xe1faga de eventos, incluyendo la creaci\xf3n de una nueva cuenta (",(0,a.jsx)(n.code,{children:"system.NewAccount"}),")\ny la instanciaci\xf3n del contrato (",(0,a.jsx)(n.code,{children:"contracts.Instantiated"}),").\nSeras redirigido a una nueva p\xe1gina, donde podr\xe1s interactuar con la nueva instancia creada del contrato."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Flipper Instantiate Success",src:t(61067).A+"",width:"2396",height:"1778"})}),"\n",(0,a.jsxs)(n.h2,{id:"uso-de-cargo-contract",children:["Uso de ",(0,a.jsx)(n.code,{children:"cargo-contract"})]}),"\n",(0,a.jsxs)(n.p,{children:["Los contratos tambi\xe9n pueden ser desplegados desde la l\xednea de comandos .\nUsando ",(0,a.jsx)(n.code,{children:"cargo-contract"})," simplemente hace falta ejecutar la siguiente secuencia:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cargo contract build\ncargo contract upload --suri //Alice\ncargo contract instantiate --suri //Alice --args true\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},47248:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/contracts-ui-0-2c4dfe8d0bd5999bbd3a7c18c04b4210.png"},53497:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/contracts-ui-1-1182917a65f2198560ea8769359806bb.png"},70562:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/contracts-ui-2-5a1361c41163cb95b9bb942c7a2a9cf8.png"},61067:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/contracts-ui-3-55fe9a77f09f39f3d2445267313a873a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(96540);const o={},c=a.createContext(o);function s(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);
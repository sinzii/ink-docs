"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7430],{92416:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=a(74848),t=a(28453);const s={title:"Plantilla de un Contrato",slug:"/basics/contract-template",hide_title:!0},r="Plantilla de un Contrato",i={id:"basics/contract-template",title:"Plantilla de un Contrato",description:"En esta p\xe1gina cubriremos como crear un contrato b\xe1sico y explicaremos",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/contract-template.md",sourceDirName:"basics",slug:"/basics/contract-template",permalink:"/es/basics/contract-template",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/contract-template.md",tags:[],version:"current",frontMatter:{title:"Plantilla de un Contrato",slug:"/basics/contract-template",hide_title:!0},sidebar:"reference",previous:{title:"Troubleshooting",permalink:"/es/getting-started/troubleshooting"},next:{title:"Almacenando Valores",permalink:"/es/basics/storing-values"}},c={},l=[{value:"Creando la plantilla",id:"creando-la-plantilla",level:2},{value:"Template Content",id:"template-content",level:2},{value:"Contenido de la plantilla",id:"contenido-de-la-plantilla",level:2},{value:"<code>Cargo.toml</code>",id:"cargotoml",level:3},{value:"<code>lib.rs</code>",id:"librs",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"/img/title/macro.svg",className:"titlePic"}),"\n",(0,o.jsx)(n.h1,{id:"plantilla-de-un-contrato",children:"Plantilla de un Contrato"}),"\n",(0,o.jsx)(n.p,{children:"En esta p\xe1gina cubriremos como crear un contrato b\xe1sico y explicaremos\nsus diferentes elementos."}),"\n",(0,o.jsx)(n.h2,{id:"creando-la-plantilla",children:"Creando la plantilla"}),"\n",(0,o.jsx)(n.p,{children:"Cambia tu directorio de trabajo y arranca:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cargo contract new foobar\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Esto creara una nueva carpeta para el proyecto llamada ",(0,o.jsx)(n.code,{children:"foobar"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd foobar/\n"})}),"\n",(0,o.jsxs)(n.p,{children:["En el fichero ",(0,o.jsx)(n.code,{children:"lib.rs"})," encontraras un c\xf3digo ",(0,o.jsx)(n.code,{children:"scaffolded"})," inicial, que podr\xe1s utilizar como punto de inicio."]}),"\n",(0,o.jsx)(n.p,{children:"R\xe1pidamente comprueba si compila y pasa los test triviales con:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cargo test\n"})}),"\n",(0,o.jsx)(n.p,{children:"Y comprueba que puedes construir el fichero Wasm arrancando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cargo contract build\n"})}),"\n",(0,o.jsx)(n.p,{children:"Si todo esta bien, entonces estamos preparados para comenzar a programar!"}),"\n",(0,o.jsx)(n.h2,{id:"template-content",children:"Template Content"}),"\n",(0,o.jsx)(n.h2,{id:"contenido-de-la-plantilla",children:"Contenido de la plantilla"}),"\n",(0,o.jsx)(n.p,{children:"La plantilla provee un esqueleto inicial con el que comenzar a escribir\nun contrato ink!. A continuaci\xf3n veremos el contenido del fichero.\nLos ficheros que tendr\xe1s localmente ser\xe1n similares, en estos simplemente\nhemos a\xf1adido comentarios explicativos."}),"\n",(0,o.jsx)(n.h3,{id:"cargotoml",children:(0,o.jsx)(n.code,{children:"Cargo.toml"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[package]\nname = "foobar"\nversion = "0.1.0"\nauthors = ["[your_name] <[your_email]>"]\nedition = "2021"\n\n[dependencies]\n# El crate `ink` contiene el eDSL de ink! y re-exporta\n# otros crates specificos de ink!. Por ejemplo, `ink::env`\n# es el crate `ink_env` que contiene funciones para\n# interactuar con el entorno de un contrato (pedir informaci\xf3n\n# sobre el caller, el numero de bloque actual, etc.).\nink = { version = "4.0.0-beta", default-features = false }\n\n# Las blockchains creadas con Substrate usan el codec SCALE\n# para todo lo que tenga que ver con la codificaci\xf3n y decodificaci\xf3n\n# de informaci\xf3n. Si un contrato ink! es llamado, los valores\n# que se hayan pasado tienen que ser SCALE-codificados y los\n# valores que se devuelvan han de ser SCALE-decodificados. Todos\n# los valores que son almacenados en un contrato son SCALE-codificados tambi\xe9n.\nscale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }\n\n# Este crate es usado para escribir informaci\xf3n sobre los tipos\n# de un contrato en su metadata (por ejemplo, su ABI). Esto es \n# necesario para que los clientes sepan requiere cada mensaje del contrato\n# por ejemplo, un Array y que ha de SACLE-codificar los valores\n# como un Array.\nscale-info = { version = "2.3", default-features = false, features = ["derive"], optional = true }\n\n[dev-dependencies]\n# Esta dependencia es para el framework de tests End-to-End.\nink_e2e = { path = "../../crates/e2e" }\n\n[lib]\nname = "foobar"\npath = "lib.rs"\n\n# Con la siguiente configuraci\xf3n especificamos que el compilador ha de\n# crear una librer\xeda din\xe1mica. Aunque para WebAssembly especifica\n# que el compilador debe crear un `*.wasm` sin funci\xf3n start.\ncrate-type = [\n    "cdylib",\n]\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink/std",\n    "scale/std",\n    "scale-info/std",\n]\nink-as-dependency = []\n\n# Esta feature es simplemente una convenci\xf3n, para que los tests\n# end-to-end solo sean ejecutados si `cargo test` es explicitamente invocado\n# con `--features e2e-tests`.\ne2e-tests = []\n'})}),"\n",(0,o.jsx)(n.h3,{id:"librs",children:(0,o.jsx)(n.code,{children:"lib.rs"})}),"\n",(0,o.jsx)(n.p,{children:"Cada contrato ink! necesita contener:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Exactamente una estructura ",(0,o.jsx)(n.code,{children:"#[ink(storage)]"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Al menos una functi\xf3n ",(0,o.jsx)(n.code,{children:"#[ink(constructor)]"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Al menos una funci\xf3n ",(0,o.jsx)(n.code,{children:"#[ink(message)]"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"El c\xf3digo ser\xe1 algo similar al siguiente, aunque hemos cambiado\nlos comentarios para explicar qu\xe9 est\xe1 pasando a alto nivel."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'// Si la feature `std` en el fichero `Cargo.toml` no est\xe1 activada\n// activamos  `no_std`, esta es la consecuencia de que la librer\xeda\n// estandard de Rust no haya sido incluida en el contrato.\n//\n// La librer\xeda estandard de Rust depende del sistema operativo\n// y Wasm es independiente de la arquitectura.\n#![cfg_attr(not(feature = "std"), no_std)]\n\n// Esta es la macro ink!, el punto inicial de tu contrato.\n// Todo lo que est\xe1 por debajo de ella parecer\xe1 c\xf3digo Rust,\n// pero en realidad ser\xe1 ejecutado a trav\xe9s de un parser en ink!.\n#[ink::contract]\npub mod flipper {\n    /// Este es el storage del contrato.\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        /// Un contructor con el que el contrato puede ser inicializado.\n        #[ink(constructor)]\n        pub fn new(init_value: bool) -> Self {\n            /* --snip-- */\n        }\n\n        /// Un contructor alternativo con el que el contrato\n        /// puede ser incializado.\n        #[ink(constructor)]\n        pub fn new_default() -> Self {\n            /* --snip-- */\n        }\n\n        /// Una funci\xf3n que puede mutar el estado del contrato y es expuesta\n        /// al mundo exterior.\n        /// \n        /// Por defecto las funciones ser\xe1 privadas, habr\xe1 que anotarlas\n        /// con `#[ink(message)]` y `pub` para que est\xe9n disponibles\n        /// desde el exterior.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            /* --snip-- */\n        }\n\n        /// Una funci\xf3n p\xfablica que no tendr\xe1 ning\xfan efecto.\n        /// \n        /// Cuando una funci\xf3n sea puramente de lectura pueden ser\n        /// invocada enviando una transacci\xf3n on-chain, normalmente\n        /// esto no se hace ya que no tienen ning\xfan efecto, y los\n        /// costes de la transacci\xf3n ser\xedan malgastados.\n        /// T\xedpicamente estas funciones ser\xe1n invocadas via RPC\n        /// para devolver el estado del contrato.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            /* --snip-- */\n        }\n    }\n\n    #[cfg(test)]\n    mod tests {\n        use super::*;\n\n        /// Este atributo denotaque el test es ejecutado en un entorno\n        /// simulado. Hay funciones disponibles para influenciar como\n        /// el entorno de testing ser\xe1 configurado (por ejemplo, \n        /// dando un balance espec\xedfico a una cuenta).\n        #[ink::test]\n        fn default_works() {\n            /* --snip-- */\n        }\n\n        /* --snip-- */\n    }\n\n    #[cfg(all(test, feature = "e2e-tests"))]\n    mod e2e_tests {\n        use super::*;\n        use ink_e2e::build_message;\n\n        type E2EResult<T> = std::result::Result<T, Box<dyn std::error::Error>>;\n\n        /// Con este atributo el contrato ser\xe1 compilado y desplegado\n        /// en un nodo Substrate que necesariamente tendr\xe1 que estar ejecutandose.\n        ///\n        /// Ofrecemos funciones API que permiten a los desarrollardores interactuar\n        /// con el contrato. ink! se encargar\xe1 de crear transacciones con las\n        /// llamadas que ser\xe1n enviadas a la red Substrate.\n        /// \n        /// Los desarrolladores pueden declarar aserciones en el resultado\n        /// de sus transacciones, como comprobar mutaciones de estado, fallos\n        /// o costes de gas.\n        #[ink_e2e::test]\n        async fn it_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {\n            /* --snip-- */\n        }\n\n        /* --snip-- */\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>i});var o=a(96540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
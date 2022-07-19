"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[7860],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(f,i(i({ref:a},u),{},{components:t})):n.createElement(f,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2230:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"cuentas-permisos",title:"Cuentas y Permisos de EOSIO",sidebar_label:"Cuentas y Permisos",description:"Cuentas y Permisos para el uso de EOSIO",keywords:["cuentas permisos","Cuentas y Permisos","cuentas","permisos","EOSIO","EOS","EOS Costa Rica","Para qu\xe9 son los permisos EOSIO"]},l=void 0,c={unversionedId:"aprender-eosio/cuentas-permisos",id:"aprender-eosio/cuentas-permisos",title:"Cuentas y Permisos de EOSIO",description:"Cuentas y Permisos para el uso de EOSIO",source:"@site/docs/aprender-eosio/cuentas-permisos.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/cuentas-permisos",permalink:"/docs/aprender-eosio/cuentas-permisos",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/cuentas-permisos.md",tags:[],version:"current",lastUpdatedBy:"Helbertson Torres",lastUpdatedAt:1658211098,formattedLastUpdatedAt:"19 jul 2022",frontMatter:{id:"cuentas-permisos",title:"Cuentas y Permisos de EOSIO",sidebar_label:"Cuentas y Permisos",description:"Cuentas y Permisos para el uso de EOSIO",keywords:["cuentas permisos","Cuentas y Permisos","cuentas","permisos","EOSIO","EOS","EOS Costa Rica","Para qu\xe9 son los permisos EOSIO"]},sidebar:"docs",previous:{title:"Componentes EOSIO",permalink:"/docs/aprender-eosio/componentes-eosio"},next:{title:"Funciones Importantes",permalink:"/docs/aprender-eosio/funciones-importantes"}},u={},d=[{value:"Cuentas",id:"cuentas",level:2},{value:"Permisos",id:"permisos",level:2},{value:"Autorizaciones",id:"autorizaciones",level:2},{value:"Autenticado (Wallets)",id:"autenticado-wallets",level:2},{value:"Capa de Acceso al Wallet de Tr\xe1nsito",id:"capa-de-acceso-al-wallet-de-tr\xe1nsito",level:3},{value:"Biblioteca de Autenticaci\xf3n Universal",id:"biblioteca-de-autenticaci\xf3n-universal",level:2},{value:"Autenticadores Disponibles:",id:"autenticadores-disponibles",level:3},{value:"KEOSD",id:"keosd",level:2},{value:"Permisos de EOSIO",id:"permisos-de-eosio",level:2}],p={toc:d};function m(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cuentas"},"Cuentas"),(0,o.kt)("p",null,"Una ",(0,o.kt)("strong",{parentName:"p"},"cuenta")," en EOSIO es un nombre legible para humanos que se almacena en la cadena de bloques. Puede ser propiedad de un individuo o grupo de individuos dependiendo de la configuraci\xf3n de los permisos. Se requiere una cuenta para transferir o enviar cualquier transacci\xf3n v\xe1lida a la cadena de bloques."),(0,o.kt)("p",null,"El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," a la ",(0,o.kt)("inlineCode",{parentName:"p"},"z")," en min\xfascula, n\xfameros del ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," al ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," y tener una longitud de 12 caracteres. Por ejemplo : ",(0,o.kt)("inlineCode",{parentName:"p"},"cuentaeosio1"),"."),(0,o.kt)("p",null,"M\xe1s infomaci\xf3n sobre ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-create-an-account"}," creaci\xf3n de cuenta EOSIO"),"."),(0,o.kt)("h2",{id:"permisos"},"Permisos"),(0,o.kt)("p",null,"EOSIO permite crear permisos jer\xe1rquicos personalizados que se derivan del permiso ",(0,o.kt)("inlineCode",{parentName:"p"},"owner"),". Un permiso personalizado es b\xe1sicamente una llave que solo puede realizar las acciones que se le permite realizar."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Por ejemplo"),": Cualquier cuenta puede crear un permiso personalizado con su par de llaves \xfanicas para interactuar \xfanicamente con un contrato.")),(0,o.kt)("p",null,"De esta manera, EOSIO ofrece capacidades de permisos de \xfaltima generaci\xf3n con una gran flexibilidad para configurar un protocolo simple o complejo integrado en el protocolo base."),(0,o.kt)("p",null,"Los permisos de la cuenta tambi\xe9n fortalecen la seguridad en caso de que alguien que no est\xe9 autorizado obtenga una llave privada, lo \xfanico que puede hacer son las acciones que la clave se ha limitado a ejecutar."),(0,o.kt)("h2",{id:"autorizaciones"},"Autorizaciones"),(0,o.kt)("p",null,"Una cuenta puede definir una asignaci\xf3n entre cualquiera de sus permisos nombrados y un contrato inteligente o acci\xf3n dentro de ese contrato. Esto permite un control m\xe1s preciso sobre las autorizaciones de acci\xf3n, lo que facilita mucho que las cuentas que pertenecen a actores con diferentes roles dentro de una organizaci\xf3n reflejen la estructura organizativa en la cadena de bloques."),(0,o.kt)("p",null,"En otras palabras, el permiso de cada cuenta se puede vincular a una tabla de autoridad utilizada para determinar si se puede satisfacer una autorizaci\xf3n de acci\xf3n determinada."),(0,o.kt)("p",null,"Para obtener m\xe1s informaci\xf3n sobre estos conceptos, consulte ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/v2.1/smart-contract-guides/before-you-begin/accounts-and-permissions"},"documentaci\xf3n de cuentas y permisos"),"."),(0,o.kt)("h2",{id:"autenticado-wallets"},"Autenticado (Wallets)"),(0,o.kt)("p",null,"Las billeteras son clientes que almacenan llaves privadas asociadas con los permisos de una o m\xe1s cuentas. Idealmente, una billetera tiene un estado bloqueado (encriptado) y desbloqueado (sin encriptar) que est\xe1 protegido por una contrase\xf1a de alta entrop\xeda."),(0,o.kt)("h3",{id:"capa-de-acceso-al-wallet-de-tr\xe1nsito"},"Capa de Acceso al Wallet de Tr\xe1nsito"),(0,o.kt)("p",null,"Esta biblioteca es una peque\xf1a capa de abstracci\xf3n sobre ",(0,o.kt)("inlineCode",{parentName:"p"},"eosjs")," que tiene como objetivo ayudar a los desarrolladores de EOS dApp (aplicaci\xf3n descentralizada) con la comunicaci\xf3n de billetera (verificaci\xf3n y aceptaci\xf3n de firma) al proporcionar una API simple e intuitiva."),(0,o.kt)("p",null,"En lugar de centrarse en admitir proveedores de firmas espec\xedficos uno por uno, los desarrolladores pueden admitir a todos los que han creado un complemento de Transit, lo que permite al usuario utilizar su proveedor de firmas de elecci\xf3n. De esta manera, gana el mejor UX para proveedores de firmas y los desarrolladores pueden centrarse en construir su dApp en lugar de configurar conexiones ",(0,o.kt)("inlineCode",{parentName:"p"},"eosjs")," y de billetera."),(0,o.kt)("p",null,"Consulte la ",(0,o.kt)("strong",{parentName:"p"},"Gu\xeda de inicio r\xe1pido")," y la gu\xeda completa en los documentos del paquete ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eosnewyork/eos-transit"},"eos-transit"),"."),(0,o.kt)("h2",{id:"biblioteca-de-autenticaci\xf3n-universal"},"Biblioteca de Autenticaci\xf3n Universal"),(0,o.kt)("p",null,"Existe una biblioteca que permite a las aplicaciones usar f\xe1cilmente diferentes proveedores de autenticaci\xf3n. Los desarrolladores de aplicaciones deben admitir muchos proveedores de autenticaci\xf3n (billeteras) para maximizar el alcance del usuario y permitir la elecci\xf3n del usuario."),(0,o.kt)("p",null,"La librer\xeda ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/universal-authenticator-library"},"Universal Authenticator Library (UAL)")," logra este objetivo al abstraer la l\xf3gica comercial interna de muchos proveedores de autenticaci\xf3n y exponer una \xfanica API universal."),(0,o.kt)("h3",{id:"autenticadores-disponibles"},"Autenticadores Disponibles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-scatter"},"UAL for Scatter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-lynx"},"UAL for Lynx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-ledger"},"UAL for Ledger")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-token-pocket"},"UAL for Token Pocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/meet-one/ual-meetone"},"UAL for MEET.ONE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/greymass/ual-anchor"},"UAL for Anchor"))),(0,o.kt)("h2",{id:"keosd"},"KEOSD"),(0,o.kt)("p",null,"En la distribuci\xf3n de EOSIO viene incluido un cliente CLI llamado ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/cleos/index"},"cleos")," que interact\xfaa con un cliente llamado ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/keosd/index"},"keosd")," que proporciona un servicio de billetera seguro y un punto final API para aplicaciones que requieren integraci\xf3n de back-end con un proveedor de firmas digitales."),(0,o.kt)("h2",{id:"permisos-de-eosio"},"Permisos de EOSIO"),(0,o.kt)("p",null,"Los permisos de EOSIO hacen posible fortalecer la seguridad de la cuenta al punto donde la p\xe9rdida o robo de las llaves son nada m\xe1s que peque\xf1as inconveniencias. Este episodio semanal de EOS cubre qu\xe9 son los permisos de EOSIO a un nivel conceptual y la tendencia a redes de cuentas interconectadas fuertes."),(0,o.kt)("figure",{class:"video_container"},(0,o.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/kTjF0-Edxw8",frameborder:"0",allowfullscreen:"true"}," ")))}m.isMDXComponent=!0}}]);
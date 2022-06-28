"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[9933],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return g}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(o),g=a,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||r;return o?n.createElement(m,s(s({ref:t},d),{},{components:o})):n.createElement(m,s({ref:t},d))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8314:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),s=["components"],i={id:"contratos-inteligentes",title:"Contratos Inteligentes",sidebar_label:"Contratos Inteligentes"},c=void 0,l={unversionedId:"aprender-eosio/contratos-inteligentes",id:"aprender-eosio/contratos-inteligentes",title:"Contratos Inteligentes",description:"Un contrato es un acuerdo que rige los resultados de las acciones una vez dado un conjunto de datos de entrada. Un contrato puede ir desde los tipo legal (ejemplo transacciones financieras) hasta algo m\xe1s simple como las reglas de un juego. Las acciones t\xedpicas pueden ser transacciones de fondos (en el caso de un contrato financiero) o movimientos de juegos (en el caso de un contrato de juego).",source:"@site/docs/aprender-eosio/contratos-inteligentes.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/contratos-inteligentes",permalink:"/docs/aprender-eosio/contratos-inteligentes",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/contratos-inteligentes.md",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1656450971,formattedLastUpdatedAt:"28/6/2022",frontMatter:{id:"contratos-inteligentes",title:"Contratos Inteligentes",sidebar_label:"Contratos Inteligentes"},sidebar:"docs",previous:{title:"Cadena de Bloques EOS",permalink:"/docs/aprender-eosio/cadena-de-bloques-eos"},next:{title:"Contratos Ricardianos",permalink:"/docs/aprender-eosio/contratos-ricardianos"}},d=[{value:"Framework de Dise\xf1o de Contratos Inteligentes",id:"framework-de-dise\xf1o-de-contratos-inteligentes",children:[{value:"Pasos del Proceso",id:"pasos-del-proceso",children:[],level:3},{value:"Modelo de Datos",id:"modelo-de-datos",children:[],level:3},{value:"Acciones",id:"acciones",children:[],level:3},{value:"Pre- y Post- Condiciones",id:"pre--y-post--condiciones",children:[],level:3}],level:2},{value:"Contratos Inteligentes de C\xf3digo Abierto",id:"contratos-inteligentes-de-c\xf3digo-abierto",children:[],level:2},{value:"Esquema de Contrato Inteligente B\xe1sico",id:"esquema-de-contrato-inteligente-b\xe1sico",children:[],level:2}],u={toc:d};function p(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un contrato es un acuerdo que rige los resultados de las acciones una vez dado un conjunto de datos de entrada. Un contrato puede ir desde los tipo legal (ejemplo transacciones financieras) hasta algo m\xe1s simple como las reglas de un juego. Las acciones t\xedpicas pueden ser transacciones de fondos (en el caso de un contrato financiero) o movimientos de juegos (en el caso de un contrato de juego)."),(0,r.kt)("p",null,"Un Contrato Inteligente de EOSIO es software registrado en el blockchain y ejecutado en los nodos de EOSIO, esto implementa las sem\xe1nticas de un contracto cuyo registro de solicitudes de acciones est\xe1n siendo guardadas en el blockchain. El Contrato Inteligente define la interfaz (acciones, par\xe1metros, estructuras de datos) y el c\xf3digo que implementa la interfaz. El c\xf3digo es compilado en el formato ",(0,r.kt)("strong",{parentName:"p"},"bytecode can\xf3nico")," el cual puede ser obtenido y ejecutado por los nodos. El blockchain guarda las transacciones (tranferencias legales, moviemientos de juego) del contrato. Cada Contrato Inteligente debe ser acompa\xf1ado de un Contrato Ricardiano que define la legalidad de los t\xe9rminos y condiciones enlazadas del contrato."),(0,r.kt)("p",null,"Lee m\xe1s aqu\xed : ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/tutoriales/cpp-moderno"},"https://guias.eoscostarica.io/docs/tutoriales/cpp-moderno")),(0,r.kt)("h2",{id:"framework-de-dise\xf1o-de-contratos-inteligentes"},"Framework de Dise\xf1o de Contratos Inteligentes"),(0,r.kt)("p",null,"Escasez Digital ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/digital-scarcity/equiprental"},"github repo")," tiene un ejemplo dise\xf1ado para proveer un framework paso a paso y ejemplo de c\xf3mo crear un Contrato Inteligente en EOS. Usa un simple caso de alquiler de equipos que lista el equipo para alquilar y los alquiladores que pagan por el alquier de dicho equipo."),(0,r.kt)("h3",{id:"pasos-del-proceso"},"Pasos del Proceso"),(0,r.kt)("p",null,"Aqu\xed se pueden ver los pasos generales para desarrollar un Contrato Inteligente.\n",(0,r.kt)("img",{alt:"alt text",src:o(7887).Z,title:"Pasos"})),(0,r.kt)("h3",{id:"modelo-de-datos"},"Modelo de Datos"),(0,r.kt)("p",null,"Define la informaci\xf3n que persistir\xe1 en el Contrato Inteligente.\n",(0,r.kt)("img",{alt:"alt text",src:o(5892).Z,title:"Modelo de Datos"})),(0,r.kt)("h3",{id:"acciones"},"Acciones"),(0,r.kt)("p",null,"Define las acciones o el estado de cambio que deben existir en el Contrato Inteligente.\n",(0,r.kt)("img",{alt:"alt text",src:o(5165).Z,title:"Acciones"})),(0,r.kt)("h3",{id:"pre--y-post--condiciones"},"Pre- y Post- Condiciones"),(0,r.kt)("p",null,"Define las acciones o el estado de cambios que deben existir en tu Contrato Inteligente.\n",(0,r.kt)("img",{alt:"alt text",src:o(5789).Z,title:"Pre y Post Condiciones"})),(0,r.kt)("h2",{id:"contratos-inteligentes-de-c\xf3digo-abierto"},"Contratos Inteligentes de C\xf3digo Abierto"),(0,r.kt)("p",null,"Nosotros manteneos una lista de Contratos Inteligentes de EOS de c\xf3digo de abierto en el siguiente repositorio:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-contracts"},"https://github.com/eoscostarica/eos-contracts")),(0,r.kt)("p",null,"Tambi\xe9n, revisar la siguiente lista de Contratos Inteligenes de EOS de c\xf3digo abierto mantenida por C\xe9sar Rodr\xedguez:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kesar/eos-awesome-contracts"},"https://github.com/kesar/eos-awesome-contracts")),(0,r.kt)("h2",{id:"esquema-de-contrato-inteligente-b\xe1sico"},"Esquema de Contrato Inteligente B\xe1sico"),(0,r.kt)("figure",{class:"video_container"},(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/EbWDHrm2ETY",frameborder:"0",allowfullscreen:"true"}," ")),(0,r.kt)("p",null,"Puedes ver m\xe1s en este canal: ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/user/grandmoren1/videos"},"https://www.youtube.com/user/grandmoren1/videos")))}p.isMDXComponent=!0},5165:function(e,t,o){t.Z=o.p+"assets/images/actions-ef6bc27cbec5bd9baa054e04ef8ddfdd.png"},5892:function(e,t,o){t.Z=o.p+"assets/images/datamodel-f09fc54e5c4d60b77cb7890a8c3aa209.png"},5789:function(e,t,o){t.Z=o.p+"assets/images/prepostconditions-9f58d60fe9dc118abf3e4412d0ee5dd1.png"},7887:function(e,t,o){t.Z=o.p+"assets/images/steps-237995356b038cbfd6f411698f7e2dd4.png"}}]);
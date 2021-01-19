(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{124:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),p=function(e){var a=n.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=p(e.components);return n.a.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},b=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?n.a.createElement(m,c(c({ref:a},l),{},{components:t})):n.a.createElement(m,c({ref:a},l))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},99:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return p}));var r=t(3),n=t(7),o=(t(0),t(124)),i={id:"como-iniciar",title:"Como Iniciar",sidebar_label:"Como Iniciar"},c={unversionedId:"tutoriales/como-iniciar",id:"tutoriales/como-iniciar",isDocsHomePage:!1,title:"Como Iniciar",description:"Antes de iniciar",source:"@site/docs/tutoriales/como-iniciar.md",slug:"/tutoriales/como-iniciar",permalink:"/docs/tutoriales/como-iniciar",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/como-iniciar.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1611094880,sidebar_label:"Como Iniciar",sidebar:"docs",previous:{title:"Contratos Ricardianos",permalink:"/docs/aprender-eosio/contratos-ricardianos"},next:{title:"Instalaci\xf3n de Nodos",permalink:"/docs/tutoriales/instalacion-de-nodos"}},s=[{value:"Antes de iniciar",id:"antes-de-iniciar",children:[]},{value:"Obtenga sus llaves privadas",id:"obtenga-sus-llaves-privadas",children:[]},{value:"Creador de cuentas \xe1gil",id:"creador-de-cuentas-\xe1gil",children:[]}],l={toc:s};function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"antes-de-iniciar"},"Antes de iniciar"),Object(o.b)("p",null,"Primero, es recomendable tener instalado el software ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eosio"}),"EOSIO")," desarrollado por ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://block.one/"}),"Block.one")," para realizar acciones con el protocolo EOS siguiendo el comando ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio/eosio")," y ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio"),". Este software se compone de:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"cleos:")," es el command line tool que se conecta con el API expuesto por nodeos y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nodeos:")," funciona como el daemon central que maneja la red EOSIO y puede ser configurado como nodo para producir bloques."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"keosd:")," funciona como billetera para manejar las llaves para EOSIO.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://es.latamlink.io/img/diagramas/cleos.png",alt:"Diagrama"}))),Object(o.b)("p",null,"Adicionalmente, recomendamos instalar desde antes el Contract Development Toolkit (CDT), que se puede instalar utilizando el comando ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio.cdt")," y seguido de ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio.cdt")," para acceder a recursos para crear los contratos."),Object(o.b)("h2",{id:"obtenga-sus-llaves-privadas"},"Obtenga sus llaves privadas"),Object(o.b)("p",null,"Mas informaci\xf3n sobre ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas"}),"llaves privadas"),"."),Object(o.b)("h2",{id:"creador-de-cuentas-\xe1gil"},"Creador de cuentas \xe1gil"),Object(o.b)("p",null,"Portal para crear cuentas y llaves p\xfablicas o privadas en un solo clic."))}p.isMDXComponent=!0}}]);
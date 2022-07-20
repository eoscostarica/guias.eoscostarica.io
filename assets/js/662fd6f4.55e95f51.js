"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[2527],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return m}});var o=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||t;return a?o.createElement(b,i(i({ref:n},d),{},{components:a})):o.createElement(b,i({ref:n},d))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,i=new Array(t);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<t;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2582:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=a(7462),r=a(3366),t=(a(7294),a(3905)),i=["components"],s={id:"seguridad-blockchain",title:"Vulnerabilidades del Blockchain",sidebar_label:"Seguridad Blockchain",description:"Consideraciones de Seguridad que para Aplicaciones Blockchain",keywords:["seguridad","blockchain","eosio","eos","EOS","Vulnerabilidades Blockchain","\xbfRiesgo de Seguridad en blockchain?"]},c=void 0,l={unversionedId:"aprender-eosio/seguridad-blockchain",id:"aprender-eosio/seguridad-blockchain",title:"Vulnerabilidades del Blockchain",description:"Consideraciones de Seguridad que para Aplicaciones Blockchain",source:"@site/docs/aprender-eosio/seguridad-blockchain.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/seguridad-blockchain",permalink:"/docs/aprender-eosio/seguridad-blockchain",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/seguridad-blockchain.md",tags:[],version:"current",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1658347420,formattedLastUpdatedAt:"20 jul 2022",frontMatter:{id:"seguridad-blockchain",title:"Vulnerabilidades del Blockchain",sidebar_label:"Seguridad Blockchain",description:"Consideraciones de Seguridad que para Aplicaciones Blockchain",keywords:["seguridad","blockchain","eosio","eos","EOS","Vulnerabilidades Blockchain","\xbfRiesgo de Seguridad en blockchain?"]},sidebar:"docs",previous:{title:"Contratos Ricardianos",permalink:"/docs/aprender-eosio/contratos-ricardianos"},next:{title:"NFTs en el ecosistema de EOSIO",permalink:"/docs/aprender-eosio/nfts-en-eosio"}},d={},u=[{value:"Explotando Vulnerabilidades en Blockchain",id:"explotando-vulnerabilidades-en-blockchain",level:2}],p={toc:u};function m(e){var n=e.components,a=(0,r.Z)(e,i);return(0,t.kt)("wrapper",(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"explotando-vulnerabilidades-en-blockchain"},"Explotando Vulnerabilidades en Blockchain"),(0,t.kt)("p",null,'El blockchain es un conjunto de tecnolog\xedas emergentes que se presentan como alternativas a sistemas centralizados. Un ejemplo notable es que buscan reemplazar los tradicionales sistemas bancarios por medio del uso de criptomonedas sin un control centralizado, como el caso del conocido Bitcoin. Tambi\xe9n tienen otras aplicaciones importantes, como en la trazabilidad de bienes, el control de la corrupci\xf3n, e incluso los sistemas democr\xe1ticos. Algunas de estas capacidades se implementan por medio de "contratos inteligentes", b\xe1sicamente software que se ejecute sobre las blockchain.'),(0,t.kt)("p",null,"Al ser una tecnolog\xeda relativamente nueva, en pleno auge de investigaci\xf3n y desarrollo, tambi\xe9n presenta problemas de seguridad que pueden ser explotados por atacantes. Como se menciona antes, algunos de los sistemas que las blockchain buscan reemplazar son cr\xedticos. Cualquier problema de seguridad puede tener consecuencias catastr\xf3ficas en dinero y continuidad de las organizaciones."),(0,t.kt)("p",null,"En esta charla hablaremos de los principales problemas de seguridad que afectan a las blockchain, especialmente con un enfoque en los contratos inteligentes. Mostraremos como se pueden explotar estas fallas y daremos algunos ejemplos pr\xe1cticos. Tambi\xe9n hablaremos de algunos hackeos famosos en los que atacantes han sido capaz de robar millones de dolares de algunas sistemas basados en blockchain. Finalmente explicaremos como se pueden evitar dichas fallas. Nos enfocaremos especialmente en a tecnolog\xeda de EOSIO."),(0,t.kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/tss1d0sow0o",frameborder:"0",allow:"true",allowfullscreen:!0}))}m.isMDXComponent=!0}}]);
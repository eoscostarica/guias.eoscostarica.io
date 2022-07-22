"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[5178],{3905:function(e,a,r){r.d(a,{Zo:function(){return d},kt:function(){return v}});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),c=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),v=t,m=p["".concat(s,".").concat(v)]||p[v]||u[v]||o;return r?n.createElement(m,l(l({ref:a},d),{},{components:r})):n.createElement(m,l({ref:a},d))}));function v(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4243:function(e,a,r){r.r(a),r.d(a,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(7462),t=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"llaves-privadas",title:"Manejo de Llaves Privadas",sidebar_label:"Llaves Privadas",description:"Manejo de Llaves Privadas en blockchain",keywords:["llaves privadas","blockchain","eosio","EOS","EOS Costa Rica","manejo de llaves privadas","Qu\xe9 es una llave privada","Para qu\xe9 es una llave privada"]},s=void 0,c={unversionedId:"aprender-eosio/llaves-privadas",id:"aprender-eosio/llaves-privadas",title:"Manejo de Llaves Privadas",description:"Manejo de Llaves Privadas en blockchain",source:"@site/docs/aprender-eosio/llaves-privadas.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/llaves-privadas",permalink:"/docs/aprender-eosio/llaves-privadas",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/llaves-privadas.md",tags:[],version:"current",lastUpdatedBy:"Warner Hurtado Laguna",lastUpdatedAt:1658512708,formattedLastUpdatedAt:"22 jul 2022",frontMatter:{id:"llaves-privadas",title:"Manejo de Llaves Privadas",sidebar_label:"Llaves Privadas",description:"Manejo de Llaves Privadas en blockchain",keywords:["llaves privadas","blockchain","eosio","EOS","EOS Costa Rica","manejo de llaves privadas","Qu\xe9 es una llave privada","Para qu\xe9 es una llave privada"]},sidebar:"docs",previous:{title:"Funciones Importantes",permalink:"/docs/aprender-eosio/funciones-importantes"},next:{title:"Desarrollo de Dapps",permalink:"/docs/aprender-eosio/desarrollo-de-dapps"}},d={},u=[{value:"Crear Cuenta en el Blockchain P\xfablico",id:"crear-cuenta-en-el-blockchain-p\xfablico",level:2},{value:"Generar y Gestionar las Llaves",id:"generar-y-gestionar-las-llaves",level:2},{value:"Administrar la Billetera con Cleos",id:"administrar-la-billetera-con-cleos",level:2},{value:"Autenticadores Externos (Wallets)",id:"autenticadores-externos-wallets",level:2}],p={toc:u};function v(e){var a=e.components,r=(0,t.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"crear-cuenta-en-el-blockchain-p\xfablico"},"Crear Cuenta en el Blockchain P\xfablico"),(0,o.kt)("p",null,"En la mayor\xeda de las billeteras puede generar nuevas llaves para EOSIO, en esta gu\xeda crearemos claves en el terminal. Ejecutemos el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"cleos")," para generar las claves criptogr\xe1ficas necesarias para crear una cuenta. Para crear una cuenta en Jungle Testnet."),(0,o.kt)("h2",{id:"generar-y-gestionar-las-llaves"},"Generar y Gestionar las Llaves"),(0,o.kt)("p",null,"Para generar llaves, requisito para crear una cuenta en una blockchain, vamos a correr el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"cleos create key")," en la terminal. Este comando nos va a generar llaves privadas y p\xfablicas \u2014 podemos crear la cantidad de llaves que queramos. Las cuentas cleos, por defecto, vienen en pares: una ",(0,o.kt)("inlineCode",{parentName:"p"},"active key")," y una ",(0,o.kt)("inlineCode",{parentName:"p"},"owner key")," (para recuperar cuenta en caso de perder la active key)."),(0,o.kt)("p",null,"Una vez generadas las llaves, nos dirigimos al sandbox, Jungle Testnet, para crear la cuenta. El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la A a la Z en min\xfascula, n\xfameros del 1 al 5 y tener una longitud de 12 caracteres. Para el ejemplo, llamaremos la cuenta: ",(0,o.kt)("inlineCode",{parentName:"p"},"holacontrato"),"."),(0,o.kt)("p",null,"Luego, introducimos las llaves p\xfablicas de ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," para ejecutar el contrato. Estas pueden ser cualquiera de las que se generaron con el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"cleos create key")," anteriormente. Se recomienda no compartir las llaves privadas."),(0,o.kt)("h2",{id:"administrar-la-billetera-con-cleos"},"Administrar la Billetera con Cleos"),(0,o.kt)("p",null,"Una vez creada la cuenta, debemos generar la billetera e identificarla con el nombre de la cuenta, que en este ejemplo es ",(0,o.kt)("inlineCode",{parentName:"p"},"holacontrato"),", mediante el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"cleos wallet create -n holacontrato --to-console"),"."),(0,o.kt)("p",null,"En este momento, las llaves est\xe1n guardadas \xfanicamente en la consola, por lo que es necesario crear la billetera que contendr\xe1 las llaves. De esta manera, se podr\xe1 acceder a estas llaves con una \xfanica contrase\xf1a. Hay que importar las llaves en la billetera una a la vez, siguiendo el comando: ",(0,o.kt)("inlineCode",{parentName:"p"},"cleos wallet import")," y a\xf1adiendo el nombre de la cuenta."),(0,o.kt)("h2",{id:"autenticadores-externos-wallets"},"Autenticadores Externos (Wallets)"),(0,o.kt)("p",null,"La \xfaltima actualizaci\xf3n importante para EOSJS incluy\xf3 soporte incorporado para proveedores de firmas intercambiables; eliminando la carga de manejar la gesti\xf3n segura de claves de su alcance y mejorando la inter-operabilidad. Lo que es m\xe1s importante, esta es una mejora importante de seguridad que limita la exposici\xf3n de las claves de un usuario en muchas aplicaciones a un \xfanico proveedor de firmas confiable que mitiga los riesgos potenciales que pueden surgir de un c\xf3digo malicioso o un error del usuario al usar aplicaciones blockchain."))}v.isMDXComponent=!0}}]);
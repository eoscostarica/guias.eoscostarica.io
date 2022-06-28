"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[8276],{1749:function(e,t,n){var a=n(5987),o=n(7462),s=n(7294),r=n(6010),i=n(5557),l=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=s.forwardRef((function(e,t){var n=e.alignContent,i=void 0===n?"stretch":n,l=e.alignItems,c=void 0===l?"stretch":l,d=e.classes,u=e.className,p=e.component,m=void 0===p?"div":p,f=e.container,g=void 0!==f&&f,k=e.direction,v=void 0===k?"row":k,b=e.item,x=void 0!==b&&b,y=e.justify,h=e.justifyContent,T=void 0===h?"flex-start":h,w=e.lg,j=void 0!==w&&w,N=e.md,O=void 0!==N&&N,F=e.sm,S=void 0!==F&&F,q=e.spacing,C=void 0===q?0:q,E=e.wrap,P=void 0===E?"wrap":E,I=e.xl,M=void 0!==I&&I,D=e.xs,W=void 0!==D&&D,Z=e.zeroMinWidth,z=void 0!==Z&&Z,A=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=(0,r.Z)(d.root,u,g&&[d.container,0!==C&&d["spacing-xs-".concat(String(C))]],x&&d.item,z&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==P&&d["wrap-xs-".concat(String(P))],"stretch"!==c&&d["align-items-xs-".concat(String(c))],"stretch"!==i&&d["align-content-xs-".concat(String(i))],"flex-start"!==(y||T)&&d["justify-content-xs-".concat(String(y||T))],!1!==W&&d["grid-xs-".concat(String(W))],!1!==S&&d["grid-sm-".concat(String(S))],!1!==O&&d["grid-md-".concat(String(O))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==M&&d["grid-xl-".concat(String(M))]);return s.createElement(m,(0,o.Z)({className:B,ref:t},A))})),p=(0,i.Z)((function(e){return(0,o.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var o=e.spacing(a);0!==o&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(o,2)),width:"calc(100% + ".concat(d(o),")"),"& > $item":{padding:d(o,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,o.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.Z=p},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3160:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),r=n(1749),i=n(4996),l=["components"],c={id:"nfts-en-eosio",title:"NFTs en el ecosistema de EOSIO",sidebar_label:"NFTs en el ecosistema de EOSIO"},d=void 0,u={unversionedId:"aprender-eosio/nfts-en-eosio",id:"aprender-eosio/nfts-en-eosio",title:"NFTs en el ecosistema de EOSIO",description:"Los activos digitales han incursionado en la vida cotidiana de cientos de personas. Utilidades como la verificaci\xf3n de productos, la trazabilidad o la autenticaci\xf3n son algunos de los hechos m\xe1s importantes para los que se utilizan los tokens no fungibles.",source:"@site/docs/aprender-eosio/nft-en-eosio.mdx",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/nfts-en-eosio",permalink:"/docs/aprender-eosio/nfts-en-eosio",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/nft-en-eosio.mdx",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1656450971,formattedLastUpdatedAt:"28/6/2022",frontMatter:{id:"nfts-en-eosio",title:"NFTs en el ecosistema de EOSIO",sidebar_label:"NFTs en el ecosistema de EOSIO"},sidebar:"docs",previous:{title:"Seguridad",permalink:"/docs/aprender-eosio/seguridad-blockchain"},next:{title:"Contrato Hola Mundo",permalink:"/docs/tutoriales/contrato-hola-mundo"}},p=[{value:"\xbfQu\xe9 son los NFTs?",id:"qu\xe9-son-los-nfts",children:[],level:2},{value:"NTFs Marketplaces",id:"ntfs-marketplaces",children:[],level:2},{value:"\xbfCuales Marketplaces de NFT existen en EOSIO y que diferencias hay entre estos?",id:"cuales-marketplaces-de-nft-existen-en-eosio-y-que-diferencias-hay-entre-estos",children:[],level:2},{value:"\xbfQu\xe9 es IPFS y c\xf3mo se usa para NFT?",id:"qu\xe9-es-ipfs-y-c\xf3mo-se-usa-para-nft",children:[],level:2},{value:"\xbfQu\xe9 ventajas y desventajas poseen los Marketplaces del ecosistema EOSIO sobre los otros?",id:"qu\xe9-ventajas-y-desventajas-poseen-los-marketplaces-del-ecosistema-eosio-sobre-los-otros",children:[],level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Los activos digitales han incursionado en la vida cotidiana de cientos de personas. Utilidades como la verificaci\xf3n de productos, la trazabilidad o la autenticaci\xf3n son algunos de los hechos m\xe1s importantes para los que se utilizan los tokens no fungibles."),(0,s.kt)("p",null,"Para recorrer el tema puedes aprender los siguientes aspectos:"),(0,s.kt)("h2",{id:"qu\xe9-son-los-nfts"},"\xbfQu\xe9 son los NFTs?"),(0,s.kt)("p",null,"NFT es la versi\xf3n abreviada de Token No Fungible , una aplicaci\xf3n de cadena de bloques que representa la propiedad de cualquier activo f\xedsico o digital, tiene la caracter\xedstica de ser \xfanica y poco com\xfan. M\xfasica, videos y arte (digitales) Bienes ra\xedces, joyer\xeda o automovil\xedstica son solo algunos ejemplos de tokenizar activos."),(0,s.kt)("h2",{id:"ntfs-marketplaces"},"NTFs Marketplaces"),(0,s.kt)("p",null,"Un Marketplace de NFTs es un lugar conveniente para que las personas descubran, compren y vendan NFT. Las personas pueden encontrar lo que buscan, ya sea arte, videos, im\xe1genes o m\xe1s.\nActualmente existe una gran variedad de mercados de NFTs que nos ofrecen contenidos de todo tipo. "),(0,s.kt)("p",null,"Podemos resaltar caracter\xedsticas importantes al elegir un mercado para nuestro NFT.\nNecesitamos considerar qu\xe9 plataforma se adapta mejor al tipo de NFT que tenemos o estamos buscando, cu\xe1nto cobrar\xe1 el mercado por venta, si corresponde, y qu\xe9 cadena de bloques utiliza. "),(0,s.kt)("h2",{id:"cuales-marketplaces-de-nft-existen-en-eosio-y-que-diferencias-hay-entre-estos"},"\xbfCuales Marketplaces de NFT existen en EOSIO y que diferencias hay entre estos?"),(0,s.kt)("p",null,"En esta tabla se encuentran algunos de los mejores Marketplaces de NFT en EOSIO, donde puede crear y vender NFT, o simplemente comprar y recolectar nuevos proyectos. Ya sea que est\xe9 comprando, vendiendo o simplemente tenga curiosidad sobre NFT."),(0,s.kt)(r.Z,{className:"table-nft-marketplaces",mdxType:"Grid"},(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Marketplace"),(0,s.kt)("th",null,"Descripci\xf3n"),(0,s.kt)("th",null,"Especificaciones")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("a",{href:"https://www.protonmarket.com/"},(0,s.kt)("img",{src:"https://www.protonmarket.com/beta-logo.svg"}))),(0,s.kt)("td",null,(0,s.kt)("p",null,"A trav\xe9s de Proton Market, cualquiera puede crear, acu\xf1ar y vender NFT f\xe1cil y r\xe1pidamente a una fracci\xf3n del costo de otras plataformas NFT.")),(0,s.kt)("td",null,(0,s.kt)("p",null,(0,s.kt)("strong",null,"Tipo NFT:")," Juegos, m\xfasica, coleccionables, Personajes virtuales y m\xe1s."),(0,s.kt)("p",null,(0,s.kt)("strong",null,"Blockchain:")," Proton."))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("a",{href:"https://areaxnft.com/"},(0,s.kt)("img",{src:"https://areaxnft.com/img/areax%20logo%20light.68b6831b.svg"}))),(0,s.kt)("td",null,(0,s.kt)("p",null,"AreaX NFT es un Marketplace basado en el est\xe1ndar de la cadena de bloques de Telos.")),(0,s.kt)("td",null,(0,s.kt)("p",null,(0,s.kt)("strong",null,"Tipo NFT:")," Arte digital, memes, m\xfasica, videos and m\xe1s."),(0,s.kt)("p",null,(0,s.kt)("strong",null,"Blockchain:")," Telos."))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("a",{href:"https://wax.atomichub.io/"},(0,s.kt)("img",{className:"atomicHubLogo",src:"https://wax.atomichub.io/images/logos/atomichub.svg"}))),(0,s.kt)("td",null,(0,s.kt)("p",null,"The NFT marketplace para juegos y coleccionables.")),(0,s.kt)("td",null,(0,s.kt)("p",null,(0,s.kt)("strong",null,"Tipo NFT:")," Arte digital, carros, colecciones raras, etc."),(0,s.kt)("p",null,(0,s.kt)("strong",null,"Blockchain:")," Wax."))))),(0,s.kt)("h2",{id:"qu\xe9-es-ipfs-y-c\xf3mo-se-usa-para-nft"},"\xbfQu\xe9 es IPFS y c\xf3mo se usa para NFT?"),(0,s.kt)("p",null,"Primero definamos qu\xe9 es IPFS, en pocas palabras IPFS es un sistema de archivos distribuido que almacena im\xe1genes, videos, documentos y m\xe1s. Cuando hablamos de c\xf3mo se usa IPFS para NFT, se trata de almacenamiento y seguridad."),(0,s.kt)("p",null,"Cuando creamos una NFT, se vincula autom\xe1ticamente a un archivo digital que se almacena en un sistema, por lo tanto, debemos considerar la importancia de c\xf3mo se vinculan los datos a ese sistema."),(0,s.kt)("p",null,"IPFS tiene direccionamiento de contenido, esto genera un identificador de contenido (CID) que se vincula directamente al archivo almacenado en la red de IPFS, el CID solo se puede vincular a un archivo espec\xedfico, esto nos da la seguridad de que nadie puede reemplazar el contenido sin da\xf1ar el enlace."),(0,s.kt)("h2",{id:"qu\xe9-ventajas-y-desventajas-poseen-los-marketplaces-del-ecosistema-eosio-sobre-los-otros"},"\xbfQu\xe9 ventajas y desventajas poseen los Marketplaces del ecosistema EOSIO sobre los otros?"),(0,s.kt)(r.Z,{className:"table-nft-marketplaces",mdxType:"Grid"},(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,(0,s.kt)("p",{className:"icono"},(0,s.kt)("img",{src:(0,i.Z)("img/nft-on-eosio/check-32.png")})),"Ventajas"),(0,s.kt)("th",null,(0,s.kt)("p",{className:"icono"},(0,s.kt)("img",{src:(0,i.Z)("img/nft-on-eosio/delete-32.png")})),"Desventajas")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("p",null,"Proton, WAX y Telos tienen diferencias distinguibles sobre otras Blockchains. Una de las principales preocupaciones es la tarifa de gas por transacci\xf3n, que es muy baja o nula. El ecosistema tiene esa ventaja.")),(0,s.kt)("td",null,(0,s.kt)("p",null,"Estos Market Places no reciben conexiones con las billeteras m\xe1s populares como Metamask, CoinbaseWallet, Wallet Connect u otras."))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("p",null,"Crear el NFT es un proceso en el que debe tener cuidado y estar preparado para administrar el proceso. La experiencia de subir tu cripto arte es una de las m\xe1s f\xe1ciles, con no m\xe1s de 5 pasos.")),(0,s.kt)("td",null,(0,s.kt)("p",null,"Solamente se puede usar billeteras permitidas por el ecosistema eosio."))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("p",null,"En Proton, solo necesita tener la autenticaci\xf3n de la billetera administrada por su perfil.")),(0,s.kt)("td",null,(0,s.kt)("p",null,"No son tan conocidos como los Marketplaces de Ethereum."))))))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[2659],{1749:function(e,t,a){var o=a(5987),n=a(7462),r=a(7294),i=a(6010),s=a(5557),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var p=r.forwardRef((function(e,t){var a=e.alignContent,s=void 0===a?"stretch":a,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,p=e.className,m=e.component,g=void 0===m?"div":m,u=e.container,h=void 0!==u&&u,k=e.direction,b=void 0===k?"row":k,f=e.item,S=void 0!==f&&f,y=e.justify,v=e.justifyContent,O=void 0===v?"flex-start":v,E=e.lg,w=void 0!==E&&E,x=e.md,_=void 0!==x&&x,N=e.sm,C=void 0!==N&&N,P=e.spacing,j=void 0===P?0:P,D=e.wrap,T=void 0===D?"wrap":D,I=e.xl,q=void 0!==I&&I,M=e.xs,L=void 0!==M&&M,z=e.zeroMinWidth,R=void 0!==z&&z,A=(0,o.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),Z=(0,i.Z)(d.root,p,h&&[d.container,0!==j&&d["spacing-xs-".concat(String(j))]],S&&d.item,R&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==T&&d["wrap-xs-".concat(String(T))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==(y||O)&&d["justify-content-xs-".concat(String(y||O))],!1!==L&&d["grid-xs-".concat(String(L))],!1!==C&&d["grid-sm-".concat(String(C))],!1!==_&&d["grid-md-".concat(String(_))],!1!==w&&d["grid-lg-".concat(String(w))],!1!==q&&d["grid-xl-".concat(String(q))]);return r.createElement(g,(0,n.Z)({className:Z,ref:t},A))})),m=(0,s.Z)((function(e){return(0,n.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return c.forEach((function(o){var n=e.spacing(o);0!==n&&(a["spacing-".concat(t,"-").concat(o)]={margin:"-".concat(d(n,2)),width:"calc(100% + ".concat(d(n),")"),"& > $item":{padding:d(n,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var o={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var n="".concat(Math.round(e/12*1e8)/1e6,"%");o[t]={flexBasis:n,flexGrow:0,maxWidth:n}}else o[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?(0,n.Z)(e,o):e[t.breakpoints.up(a)]=o}(t,e,a),t}),{}))}),{name:"MuiGrid"})(p);t.Z=m},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),g=n,u=m["".concat(c,".").concat(g)]||m[g]||p[g]||r;return a?o.createElement(u,i(i({ref:t},d),{},{components:a})):o.createElement(u,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6084:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return u},default:function(){return v},eosio_networks_data:function(){return S},frontMatter:function(){return g},metadata:function(){return h},projectsData:function(){return f},toc:function(){return b}});var o=a(7462),n=a(3366),r=a(7294),i=a(3905),s=a(1749),c=a(4996),l=function(e){var t=e.projectData;return r.createElement(s.Z,{item:!0,md:4,xs:12},r.createElement(s.Z,{className:"container-border"},t.logos.map((function(e,a){return r.createElement(s.Z,{container:!0,key:a,alignItems:"center",justifyContent:"center"},r.createElement("a",{href:e.link},r.createElement("img",{className:"logo",src:(0,c.Z)(e.image),loading:"lazy",alt:t.name+" logo"})))})),r.createElement(s.Z,{container:!0,spacing:1,alignItems:"center",justifyContent:"center"},t.images.map((function(e,a){var o;return r.createElement(r.Fragment,null,r.createElement(s.Z,{item:!0,xs:6,md:6},r.createElement("a",{href:e.link,id:a},r.createElement("img",{className:null!=(o=e.class)?o:"",src:(0,c.Z)(e.image),loading:"lazy",height:"60%",alt:t.name+" screenshot preview "+(a+1)}))),r.createElement("a",{href:t.href,className:"lightbox",id:e.id},r.createElement("img",{className:"box-img",src:(0,c.Z)(e.image),loading:"lazy",alt:t.name+" screenshot "+(a+1)})))})))))},d=function(e){var t=e.projectData;return r.createElement(r.Fragment,null,t.website&&t.website.map((function(e,a){var o;return r.createElement("ul",{key:a},r.createElement("li",null,r.createElement("p",null,r.createElement("strong",null,null!=(o=e.title)?o:"Sitio Web",": "),e.image?r.createElement("a",{href:e.link},r.createElement("img",{src:e.image,width:"9%",alt:"Icono del sitio web de "+t.name,loading:"lazy"})):r.createElement("a",{href:e.link},e.name))))})),t.github&&t.github.map((function(e,a){var o;return r.createElement("ul",{key:a},r.createElement("li",null,r.createElement("p",null,r.createElement("strong",null,"GitHub: "),r.createElement("a",{href:e.link},r.createElement("img",{src:null!=(o=e.image)?o:"https://cdn-icons-png.flaticon.com/32/25/25231.png",loading:"lazy",width:"32px",height:"32px",alt:"Enlace al repositorio en Github de "+t.name})))))})))},p=function(e){var t,a=e.projectData,o=(null==(t=a.images)?void 0:t.length)>0;return r.createElement(s.Z,{container:!0},r.createElement(s.Z,{item:!0,md:o?8:12,xs:12},r.createElement(s.Z,{className:"content"},a.description&&a.description.map((function(e,t){return r.createElement("p",{key:t},e)})),r.createElement(d,{projectData:a}))),o&&a.logos&&r.createElement(l,{projectData:a}))},m=["components"],g={id:"proyectos-de-codigo-abierto",title:"Proyectos de C\xf3digo Abierto",sidebar_label:"Proyectos de C\xf3digo Abierto",description:"Proyectos open source desarrollados por EOS Costarica",keywords:["proyectos","codigo abierto","open source","EOS","EOS costarica","Qu\xe9 es un proyecto de c\xf3digo abierto"]},u=void 0,h={unversionedId:"proyectos-de-codigo-abierto",id:"proyectos-de-codigo-abierto",title:"Proyectos de C\xf3digo Abierto",description:"Proyectos open source desarrollados por EOS Costarica",source:"@site/docs/proyectos-de-codigo-abierto.mdx",sourceDirName:".",slug:"/proyectos-de-codigo-abierto",permalink:"/docs/proyectos-de-codigo-abierto",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/proyectos-de-codigo-abierto.mdx",tags:[],version:"current",lastUpdatedBy:"Helbertson Torres",lastUpdatedAt:1658211098,formattedLastUpdatedAt:"19 jul 2022",frontMatter:{id:"proyectos-de-codigo-abierto",title:"Proyectos de C\xf3digo Abierto",sidebar_label:"Proyectos de C\xf3digo Abierto",description:"Proyectos open source desarrollados por EOS Costarica",keywords:["proyectos","codigo abierto","open source","EOS","EOS costarica","Qu\xe9 es un proyecto de c\xf3digo abierto"]},sidebar:"docs",previous:{title:"Herramientas para desarrollo",permalink:"/docs/herramientas-para-desarrolladores"},next:{title:"Boilerplates",permalink:"/docs/boilerplate"}},k={},b=[{value:"Proyectos para la Comunidad",id:"proyectos-para-la-comunidad",level:2},{value:"EOSIO Dashboard",id:"eosio-dashboard",level:3},{value:"EOS Rate",id:"eos-rate",level:3},{value:"Programa Proton Affiliate",id:"programa-proton-affiliate",level:3},{value:"Contratos Inteligentes Libre Dao",id:"contratos-inteligentes-libre-dao",level:3},{value:"LACChain EOSIO Testnet",id:"lacchain-eosio-testnet",level:3},{value:"Evodex",id:"evodex",level:3},{value:"MyvoteEOS Proxy Website",id:"myvoteeos-proxy-website",level:3},{value:"Eden Smart Contracts",id:"eden-smart-contracts",level:3},{value:"EOS Token Sale Platform",id:"eos-token-sale-platform",level:3},{value:"EOS Token Sale Contract",id:"eos-token-sale-contract",level:3},{value:"Herramientas",id:"herramientas",level:2},{value:"Eden Members Check",id:"eden-members-check",level:3},{value:"Contrato Inteligente Digital Notary",id:"contrato-inteligente-digital-notary",level:3},{value:"Entornos de Desarrollo Local",id:"entornos-de-desarrollo-local",level:3},{value:"Red de EOSIO Bootstrap",id:"red-de-eosio-bootstrap",level:3},{value:"Muestras de Nodeos Configurations",id:"muestras-de-nodeos-configurations",level:3},{value:"Boilerplates",id:"boilerplates",level:2},{value:"Componentes React para EOSIO",id:"componentes-react-para-eosio",level:2},{value:"Constancias Municipales",id:"constancias-municipales",level:2},{value:"EOSIO Hackathons",id:"eosio-hackathons",level:2},{value:"LifeBank",id:"lifebank",level:3},{value:"gGoods",id:"ggoods",level:3},{value:"Paquetes NPM",id:"paquetes-npm",level:2}],f=[{name:"EOSIO Dashboard",description:["Un Monitor de Infraestructura EOSIO y un tablero de nodos."],href:"#eosio-dashboard",website:[{link:"https://eosio.online/",name:"EOSIO Dashboard"}],github:[{link:"https://github.com/eoscostarica/eosio-dashboard",image:"https://cdn-icons-png.flaticon.com/32/25/25231.png"}],logos:[{image:"https://eosio.online/images/d-logo.svg",link:"https://eosio.online/"}],images:[{image:"img/OSS_screnshots/EOSIO_Network_monitor.webp",link:"#screen-eos-1",id:"screen-eos-1"},{image:"img/OSS_screnshots/EOSIO_Network_monitor_2.webp",link:"#screen-eos-2",id:"screen-eos-2"},{image:"img/OSS_screnshots/EOSIO_Network_monitor_3.webp",link:"#screen-eos-3",id:"screen-eos-3"},{image:"img/OSS_screnshots/EOSIO_Network_monitor_4.webp",link:"#screen-eos-4",id:"screen-eos-4"}]},{name:"EOS Rate",description:["EOS Rate es una herramienta visual de calificaci\xf3n manejada por la comunidad que permite a los titulares de los tokens de EOS calificar f\xe1cilmente a los Productores de Bloques en distintas categor\xedas."],href:"#eos-rate",website:[{link:"https://eosrate.io/",name:"EOS Rate"}],github:[{link:"https://github.com/eoscostarica/eos-rate"}],logos:[{image:"/img/eosrate-logo.webp",link:"https://eosrate.io/"}],images:[{image:"img/OSS_screnshots/EOS_Rate.webp",link:"#screen-rate-1",id:"screen-rate-1"},{image:"img/OSS_screnshots/EOS_Rate_2.webp",link:"#screen-rate-2",id:"screen-rate-2"}]},{name:"Programa Proton Affiliate",href:"#programa-proton-affiliate",website:[{link:"https://www.protonchain.com/",image:"/img/proton.webp"},{title:"Anuncio del Proyecto",link:"https://eoscostarica.io/blog/proton-announcement/",name:"Programa Proton Affiliate"}],logos:[{image:"img/OSS_screnshots/Proton_Program_Logo.webp",link:"https://www.protonchain.com/"}],images:[{image:"img/OSS_screnshots/Proton_Program.webp",link:"#screen-proton-1",id:"screen-proton-1"},{image:"img/OSS_screnshots/Proton_Program_2.webp",link:"#screen-proton-2",id:"screen-proton-2"},{image:"img/OSS_screnshots/Proton_Program_3.webp",link:"#screen-proton-3",id:"screen-proton-3"},{image:"img/OSS_screnshots/Proton_Program_4.webp",link:"#screen-proton-4",id:"screen-proton-4"}]},{name:"Contratos Inteligentes Libre Dao",description:["Este sistema funciona como un mecanismo de votaci\xf3n descentralizado establecido en las reglas que rigen la cadena de bloques, donde se proponen y financian presupuestos para proyectos espec\xedficos una vez que reciben suficientes votos de los poseedores de fichas."],href:"#contratos-inteligentes-libre-dao",website:[{link:"https://dao.libre.org/",name:"Contratos Inteligentes Libre Dao"}],github:[{link:"https://github.com/eoscostarica/btc-libre-governance"}],logos:[{image:"img/OSS_screnshots/Libre_Dao_Smart_Contracts.webp",link:"https://dao.libre.org/"}],images:[{image:"img/OSS_screnshots/Bitcoin_Libre.webp",link:"#screen-dao-1",id:"screen-dao-1"},{image:"img/OSS_screnshots/Bitcoin_Libre_2.webp",link:"#screen-dao-2",id:"screen-dao-2"}]},{name:"LACChain EOSIO",description:["Somos parte de LACChain EOSIO, una iniciativa de c\xf3digo abierto que ofrece una red de blockchain EOSIO que se integra en la red de LACChain."],href:"#lacchain-eosio-testnet",website:[{link:"https://eosio.lacchain.net/en/",name:"LACChain EOSIO"}],github:[{link:"https://github.com/lacchain/eosio.lacchain.net"}],logos:[{image:"/img/lacchain-eosio.webp",link:"https://eosio.lacchain.net/en/"}],images:[{image:"img/OSS_screnshots/Lacchain_EOSIO.webp",link:"#screen-chain-1",id:"screen-chain-1"},{image:"img/OSS_screnshots/Lacchain_EOSIO_2.webp",link:"#screen-chain-2",id:"screen-chain-2"},{image:"img/OSS_screnshots/Lacchain_EOSIO_3.webp",link:"#screen-chain-3",id:"screen-chain-3"},{image:"img/OSS_screnshots/Lacchain_EOSIO_4.webp",link:"#screen-chain-4",id:"screen-chain-4"}]},{name:"Evodex",description:["Evodex es un protocolo creado por EOS Argentina que permite a cualquier persona crear y lanzar sus propios pares comerciales en un intercambio descentralizado y obtener tarifas comerciales al agregar liquidez al grupo de tokens. EOS Costa Rica colabor\xf3 con EOS Argentina creando una interfaz web que brinda acceso a liquidez entre todos los intercambios que se conectan a Evodex."],href:"#evodex",website:[{link:"https://evodex.io",name:"Evodex"}],github:[{link:"https://github.com/eoscostarica/evodex"}],logos:[{image:"/img/evodex-logo.webp",link:"https://evodex.io"}],images:[{image:"img/OSS_screnshots/Evodex.webp",link:"#screen-evodex-1",id:"screen-evodex-1"},{image:"img/OSS_screnshots/Evodex_2.webp",link:"#screen-evodex-2",id:"screen-evodex-2"},{image:"img/OSS_screnshots/Evodex_3.webp",link:"#screen-evodex-3",id:"screen-evodex-3"},{image:"img/OSS_screnshots/Evodex_4.webp",link:"#screen-evodex-4",id:"screen-evodex-4"}]},{name:"Componentes React para EOSIO",description:["Una colecci\xf3n de componentes de React para la comunidad de desarrolladores de EOSIO."],href:"#componentes-react-para-eosio",website:[{link:"https://components.edenia.cloud",name:"Componentes React"}],github:[{link:"https://github.com/eoscostarica/eoscr-components"}],logos:[{image:"/img/React_logo.webp",link:"https://components.edenia.cloud/"}],images:[{image:"img/OSS_screnshots/React_EOS.webp",link:"#screen-react-1",id:"screen-react-1"},{image:"img/OSS_screnshots/React_EOS_2.webp",link:"#screen-react-2",id:"screen-react-2"},{image:"img/OSS_screnshots/React_EOS_3.webp",link:"#screen-react-3",id:"screen-react-3"},{image:"img/OSS_screnshots/React_EOS_4.webp",link:"#screen-react-4",id:"screen-react-4"}]},{name:"LifeBank",description:["Lifebank es una dapp basada en EOSIO que ayuda a las comunidades locales a crear un c\xedrculo virtuoso de intercambio de valor entre tres partes:  donantes de vida elegibles, centros comunitarios de donaci\xf3n y empresas locales participantes (patrocinadores).","Lifebank es una iniciativa de EOS Costa Rica, empresa que desarrolla soluciones basadas en blockchain para resolver problemas del mundo real. Lifebank es nuestra entrada al desaf\xedo Coding for Change organizado por la empresa l\xedder en blockchain, Block.one."],href:"#lifebank",website:[{link:"https://lifebank.io/",name:"LifeBank"}],github:[{link:"https://github.com/eoscostarica/lifebank"}],logos:[{image:"/img/life-bank-logo.webp",link:"https://lifebank.io/"}],images:[{image:"img/OSS_screnshots/LifeBank.webp",link:"#screen-lifebank-1",id:"screen-lifebank-1"},{image:"img/OSS_screnshots/LifeBank_2.webp",link:"#screen-lifebank-2",id:"screen-lifebank-2"},{image:"img/OSS_screnshots/LifeBank_3.webp",link:"#screen-lifebank-3",id:"screen-lifebank-3"},{image:"img/OSS_screnshots/LifeBank_4.webp",link:"#screen-lifebank-4",id:"screen-lifebank-4"}]},{name:"gGoods",description:["gGoods es un est\xe1ndar NFT de c\xf3digo abierto que permite a las organizaciones y comunidades crear sus propios NFT para recaudar fondos. Crear un NFT es f\xe1cil y sencillo con nuestro creador de avatares. Luego, los donantes compran los NFT como art\xedculos coleccionables que no solo respaldan una causa, sino que tambi\xe9n pueden integrarse en innumerables aplicaciones, como juegos, emojis, calcoman\xedas de chat, avatares, etc."],href:"#ggoods",website:[{link:"https://ggoods.io/",name:"gGoods"}],github:[{link:"https://github.com/eoscostarica/gGoods"}],logos:[{image:"https://raw.githubusercontent.com/eoscostarica/gGoods/main/docs/ggoods-logo.svg",link:"https://ggoods.io/"}],images:[{image:"/img/OSS_screnshots/gGoods.webp",link:"#screen-ggoods-1",id:"screen-ggoods-1"},{image:"/img/OSS_screnshots/gGoods_2.webp",link:"#screen-ggoods-2",id:"screen-ggoods-2"},{image:"/img/OSS_screnshots/gGoods_3.webp",link:"#screen-ggoods-3",id:"screen-ggoods-3"},{image:"/img/OSS_screnshots/gGoods_4.webp",link:"#screen-ggoods-4",id:"screen-ggoods-4"}]},{name:"MyvoteEOS Proxy Website",description:["El proxy basado en EOS facilita la transici\xf3n hacia una cadena verdaderamente democr\xe1tica y libre de control de Pareto al votar por los productores de bloques que no se comprometen con el reembolso directo del voto."],href:"#myvoteeos-proxy-website",website:[{link:"https://myvoteeos.com/home",name:"MyvoteEOS"}],github:[{link:"https://github.com/eoscostarica/MyvoteEOS-proxy"}],logos:[{image:"/img/my-vote-eos-logo.webp",link:"https://myvoteeos.com/home"}],images:[{image:"/img/OSS_screnshots/MyvoteEOS.webp",link:"#screen-MyvoteEOS-1",id:"screen-MyvoteEOS-1"},{image:"/img/OSS_screnshots/MyvoteEOS_2.webp",link:"#screen-MyvoteEOS-2",id:"screen-MyvoteEOS-2"},{image:"/img/OSS_screnshots/MyvoteEOS_3.webp",link:"#screen-MyvoteEOS-3",id:"screen-MyvoteEOS-3"},{image:"/img/OSS_screnshots/MyvoteEOS_4.webp",link:"#screen-MyvoteEOS-4",id:"screen-MyvoteEOS-4"}]},{name:"Eden Smart Contracts",description:["Actualizaciones y Mantenimiento de la aplicaci\xf3n web de la Comunidad Eden y de los contratos inteligentes."],href:"#eden-smart-contracts",website:[{link:"https://eden-dev.vercel.app/",name:"Eden Smart Contracts"}],github:[{link:"https://github.com/edenia/Eden"}],logos:[{image:"https://raw.githubusercontent.com/edenia/Eden/master/packages/webapp/public/images/eden-logo.svg",link:"https://eden-dev.vercel.app/"}],images:[{image:"/img/OSS_screnshots/Eden.webp",link:"#screen-Eden-1",id:"screen-Eden-1"},{image:"/img/OSS_screnshots/Eden_2.webp",link:"#screen-Eden-2",id:"screen-Eden-2"},{image:"/img/OSS_screnshots/Eden_3.webp",link:"#screen-Eden-3",id:"screen-Eden-3"}]},{name:"EOS Token Sale Contract",description:["Un contrato de c\xf3digo abierto que cualquier proyecto EOS puede utilizar para vender sus tokens. Estos contratos est\xe1n destinados a apoyar una plataforma de venta de tokens descentralizada, que permite a los usuarios configurar una venta de tokens, determinar los par\xe1metros de la venta de tokens y desplegar su venta en la Mainnet de EOS."],href:"#eos-token-sale-contract",github:[{link:"https://github.com/eostarter/eostarter.sale-smart-contract"}]},{name:"EOS Token Sale Platform",description:["Una plataforma de venta de tokens descentralizada, que permite a los usuarios configurar una venta de tokens, determinar los par\xe1metros de la venta de tokens y desplegar su venta en la red principal de EOS. La plataforma de venta de tokens es una aplicaci\xf3n descentralizada basada en dos contratos inteligentes de c\xf3digo abierto que cualquier proyecto puede utilizar para vender sus tokens."],href:"#eos-token-sale-platform",website:[{link:"https://tokensale.edenia.cloud",name:"EOS Token Sale Platform"}],github:[{link:"https://github.com/eostarter/token-sale-platform"}],logos:[{image:"https://raw.githubusercontent.com/eostarter/token-sale-platform/master/docs/img/logo-words.png",link:"https://tokensale.edenia.cloud"}],images:[{image:"/img/OSS_screnshots/Token_Sale_Platform.webp",link:"#screen-Token_Sale_Platform-1",id:"screen-Token_Sale_Platform-1"},{image:"/img/OSS_screnshots/Token_Sale_Platform_2.webp",link:"#screen-Token_Sale_Platform-2",id:"screen-Token_Sale_Platform-2"},{image:"/img/OSS_screnshots/Token_Sale_Platform_3.webp",link:"#screen-Token_Sale_Platform-3",id:"screen-Token_Sale_Platform-3"}]},{name:"Constancias de Pago de Impuestos Municipales ",description:["El generador de constancias municipales es una aplicaci\xf3n web que permite a los contribuyentes de los Gobiernos Locales Costarricenses obtener un documento digital en el que podr\xe1 ver los pagos de los impuestos municipales de las propiedades a su nombre. Este documento es firmado digitalmente por la instituci\xf3n que emite dicho documento, por lo que es oficial y v\xe1lido para utilizar en distintas instituciones de Costa Rica."],href:"#constancias-municipales",github:[{link:"https://github.com/edenia/constancias-municipales"}]},{name:"Eden Members Check",description:["Este proyecto proporciona una forma r\xe1pida de comenzar a integrar la l\xf3gica para validar si una cuenta EOS es un miembro activo de Eden. Est\xe1 destinado a ser utilizado como un ejemplo para ayudar a otros proyectos a integrar funciones para los miembros de eden."],github:[{link:"https://github.com/eoscostarica/eden-member-check"}]},{name:"Contrato Inteligente Digital Notary",description:["Este contrato inteligente sirve como herramienta para cualquier usuario que desee registrar la existencia de documentos digitales (textos/im\xe1genes) en un momento determinado.","Tambi\xe9n permite que cualquier persona que posea el documento valide el registro en la cadena de bloques."],website:[{link:"https://notarize.edenia.cloud/dashboard/notary",name:"Contrato Inteligente Digital Notary"}],github:[{link:"https://github.com/eoscostarica/notarioeoscr"}]},{name:"Red de EOSIO Bootstrap",description:['Esta colecci\xf3n de scripts inicia una red EOSIO local con m\xfaltiples configuraciones de nodos. Tambi\xe9n hay una secuencia de inicio automatizada que utiliza un nodo de "bios" temporal para iniciar la cadena, implementar contratos de sistema y establecer un cronograma con tres nodos productores de bloques activos.',"Este proyecto puede ser \xfatil como entorno de desarrollo para contratos de sistema."],github:[{link:"https://github.com/eoscostarica/eosio-network-bootstrap"}]},{name:"Muestras de Nodeos Configurations",description:["Configuraciones de ejemplo para diferentes tipos de nodos EOSIO."],github:[{link:"https://github.com/eoscostarica/sample-nodeos-configs"}]}],S=[{name:"EOS Mainnet",href:"https://mainnet.eosio.online",image:"/img/eos.webp"},{name:"Jungle Testnet",href:"https://jungle.eosio.online",image:"/img/jungle.webp"},{name:"Proton Testnet",href:"https://proton.eosio.online",image:"/img/proton.webp"},{name:"LACChain EOSIO",href:"https://lacchain.eosio.online",image:"/img/lacchain.webp"},{name:"Telos Testnet",href:"https://telos.eosio.online/",image:"/img/telos.webp"}],y={toc:b,projectsData:f,eosio_networks_data:S};function v(e){var t=e.components,a=(0,n.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"proyectos-para-la-comunidad"},"Proyectos para la Comunidad"),(0,i.kt)("p",null,"Los siguientes proyectos est\xe1n dirigidos a la comunidad de desarrolladores."),(0,i.kt)("h3",{id:"eosio-dashboard"},"EOSIO Dashboard"),(0,i.kt)(s.Z,{container:!0,mdxType:"Grid"},(0,i.kt)(s.Z,{item:!0,md:8,xs:12,mdxType:"Grid"},(0,i.kt)(s.Z,{className:"content",mdxType:"Grid"},(0,i.kt)("p",null,f[0].description),(0,i.kt)(d,{projectData:f[0],mdxType:"DisplayLinks"})),(0,i.kt)(s.Z,{className:"table-container",mdxType:"Grid"},(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,S.map((function(e,t){return(0,i.kt)("th",null,e.name)}))),(0,i.kt)("tr",null,S.map((function(e,t){return(0,i.kt)("td",null,(0,i.kt)("a",{href:e.href},(0,i.kt)("img",{src:e.image,width:"32px",height:"32px",alt:e.name+" logo"})))}))))))),(0,i.kt)(l,{projectData:f[0],mdxType:"DisplayImages"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eos-rate"},"EOS Rate"),(0,i.kt)(p,{projectData:f[1],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"programa-proton-affiliate"},"Programa Proton Affiliate"),(0,i.kt)(s.Z,{container:!0,mdxType:"Grid"},(0,i.kt)(s.Z,{item:!0,md:8,xs:12,mdxType:"Grid"},(0,i.kt)(s.Z,{className:"content",mdxType:"Grid"},(0,i.kt)("p",null,"Edenia, tambi\xe9n conocida como ",(0,i.kt)("a",{href:"https://eoscostarica.io/"},"EOS Costa Rica"),", se complace en anunciar nuestra colaboraci\xf3n estrat\xe9gica con el equipo de Proton, una cadena de bloques desarrollada por Metallicus. ",(0,i.kt)("a",{href:"https://www.protonchain.com/"},"Proton")," se cre\xf3 para simplificar procesamiento de pagos en cadena, agregando gobernanza, recursos de red asignaci\xf3n y participaci\xf3n de recompensas."),(0,i.kt)("p",null,"Durante los \xfaltimos meses, nuestro equipo ha estado trabajando en una funci\xf3n del Programa de afiliados (AP) para la ",(0,i.kt)("a",{href:"https://www.protonchain.com/wallet/"},"cartera Proton"),", que se lanz\xf3 en la etapa beta para pa\xedses seleccionados."),(0,i.kt)(d,{projectData:f[2],mdxType:"DisplayLinks"}))),(0,i.kt)(l,{projectData:f[2],mdxType:"DisplayImages"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contratos-inteligentes-libre-dao"},"Contratos Inteligentes Libre Dao"),(0,i.kt)(p,{projectData:f[3],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lacchain-eosio-testnet"},"LACChain EOSIO Testnet"),(0,i.kt)(p,{projectData:f[4],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"evodex"},"Evodex"),(0,i.kt)(p,{projectData:f[5],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"myvoteeos-proxy-website"},"MyvoteEOS Proxy Website"),(0,i.kt)(p,{projectData:f[9],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eden-smart-contracts"},"Eden Smart Contracts"),(0,i.kt)(p,{projectData:f[10],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eos-token-sale-platform"},"EOS Token Sale Platform"),(0,i.kt)(p,{projectData:f[12],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eos-token-sale-contract"},"EOS Token Sale Contract"),(0,i.kt)(p,{projectData:f[11],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"herramientas"},"Herramientas"),(0,i.kt)("h3",{id:"eden-members-check"},"Eden Members Check"),(0,i.kt)(p,{projectData:f[14],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contrato-inteligente-digital-notary"},"Contrato Inteligente Digital Notary"),(0,i.kt)(p,{projectData:f[15],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entornos-de-desarrollo-local"},"Entornos de Desarrollo Local"),(0,i.kt)("p",null,"EOS Costa Rica ofrece una amplia variedad de entornos de desarrollo local para la comunidad de desarrolladores EOSIO."),(0,i.kt)("div",{className:"table-wrapper",markdown:"block",style:{overflow:"scroll",height:"200px"}},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Entornos de Desarrollo Local"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Descripci\xf3n"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/eos-local"},"EOS")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Red EOS basada en Docker para el desarrollo local")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/telos-local"},"Telos")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Red Telos basada en Docker para el desarrollo local")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/proton-local"},"Proton")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Red Proton basada en Docker para el desarrollo local")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/wax-local"},"Wax")),(0,i.kt)("td",{parentName:"tr",align:"center"},"WAX Entorno de desarrollo local Docker")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/eosio-explorer"},"EOSIO Explorer")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Una aplicaci\xf3n que proporciona Web GUI para comunicarse con EOSIO blockchain en un entorno de desarrollo local"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"red-de-eosio-bootstrap"},"Red de EOSIO Bootstrap"),(0,i.kt)(p,{projectData:f[16],mdxType:"ProjectContainer"}),(0,i.kt)("h3",{id:"muestras-de-nodeos-configurations"},"Muestras de Nodeos Configurations"),(0,i.kt)(p,{projectData:f[17],mdxType:"ProjectContainer"}),(0,i.kt)("h2",{id:"boilerplates"},"Boilerplates"),(0,i.kt)("p",null,"EOS Costa Rica ofrece una amplia variedad de boilerplates para la comunidad de desarrolladores."),(0,i.kt)("div",{className:"table-wrapper",markdown:"block",style:{overflow:"scroll",height:"200px"}},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Boilerplates"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Descripci\xf3n"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/full-stack-boilerplate"},"Full Stack")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Una plantilla Full Stack para lanzar f\xe1cilmente su proyecto en EOSIO.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/wax-webapp-boilerplate"},"Wax Webapp")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Una aplicaci\xf3n React Web b\xe1sica con autenticadores WAX (wallets).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/wax-full-stack-boilerplate"},"Wax")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Una plantilla Full Stack para lanzar f\xe1cilmente su proyecto en Wax.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/proton-full-stack-boilerplate"},"Proton")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Una plantilla Full Stack para lanzar f\xe1cilmente su proyecto en Proton.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/webapp-boilerplate"},"Webapp")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Una aplicaci\xf3n web de reacci\xf3n b\xe1sica con autenticadores UAL para EOSIO (wallets).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/ipfs-boilerplate"},"IPFS")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Un repositorio para ayudarlo a comenzar a integrar IPFS en su proyecto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/backend-boilerplate"},"Backend")),(0,i.kt)("td",{parentName:"tr",align:"center"},"NodeJS Backend + Hasura + PGDB con EOSJS y KEOSD wallet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/eos-dapp-boilerplate"},"EOS dapp")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Modelos de aplicaciones EOSIO."))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"componentes-react-para-eosio"},"Componentes React para EOSIO"),(0,i.kt)(p,{projectData:f[6],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"constancias-municipales"},"Constancias Municipales"),(0,i.kt)(p,{projectData:f[13],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"eosio-hackathons"},"EOSIO Hackathons"),(0,i.kt)("h3",{id:"lifebank"},"LifeBank"),(0,i.kt)(p,{projectData:f[7],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ggoods"},"gGoods"),(0,i.kt)(p,{projectData:f[8],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"paquetes-npm"},"Paquetes NPM"),(0,i.kt)("div",{className:"table-wrapper",markdown:"block",style:{overflow:"scroll",height:"200px"}},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Paquetes"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Descripci\xf3n"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-components"},"Componentes")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Una colecci\xf3n de componentes React para EOSIO")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-theme"},"Tema Est\xe1ndar")),(0,i.kt)("td",{parentName:"tr",align:"center"},"El tema est\xe1ndar de EOS Costa Rica nos permitir\xe1 un desarrollo m\xe1s r\xe1pido de sus aplicaciones web y al mismo tiempo est\xe1 disponible para cualquier persona que quiera usarlo")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@eoscostarica/eosjs-camel-api"},"M\xf3dulo API")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Este proyecto envuelve la eosio/eosjs-api oficial para proporcionar una salida camelcase")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/fastify-eos"},"Fastify EOS")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Un complemento que decora Fastify con una instancia de EOS.js"))))))}v.isMDXComponent=!0}}]);
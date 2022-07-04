"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[5306],{3905:function(e,a,o){o.d(a,{Zo:function(){return u},kt:function(){return m}});var r=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,r,n=function(e,a){if(null==e)return{};var o,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},u=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||t;return o?r.createElement(b,i(i({ref:a},u),{},{components:o})):r.createElement(b,i({ref:a},u))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<t;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5518:function(e,a,o){o.r(a),o.d(a,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=o(7462),n=o(3366),t=(o(7294),o(3905)),i=["components"],s={id:"contrato-hola-mundo",title:"Contrato Hola Mundo",sidebar_label:"Contrato Hola Mundo"},l=void 0,c={unversionedId:"tutoriales/contrato-hola-mundo",id:"tutoriales/contrato-hola-mundo",title:"Contrato Hola Mundo",description:"Explicamos con ejemplos c\xf3mo crear una cuenta y un contrato Hello World para subir a una blockchain basada en EOS.IO. Para este ejemplo, nos basamos en recursos publicados por Block.one para compartir con la comunidad.",source:"@site/docs/tutoriales/contrato-hola-mundo.md",sourceDirName:"tutoriales",slug:"/tutoriales/contrato-hola-mundo",permalink:"/docs/tutoriales/contrato-hola-mundo",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/contrato-hola-mundo.md",tags:[],version:"current",lastUpdatedBy:"JAMares",lastUpdatedAt:1656950858,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"contrato-hola-mundo",title:"Contrato Hola Mundo",sidebar_label:"Contrato Hola Mundo"},sidebar:"docs",previous:{title:"NFTs en el ecosistema de EOSIO",permalink:"/docs/aprender-eosio/nfts-en-eosio"},next:{title:"C++ Moderno",permalink:"/docs/tutoriales/cpp-moderno"}},u={},d=[{value:"Obtenga sus Llaves Privadas",id:"obtenga-sus-llaves-privadas",level:2},{value:"Adquirir Recurso RAM",id:"adquirir-recurso-ram",level:2},{value:"Crear un Contrato",id:"crear-un-contrato",level:2},{value:"Publicar el Contrato",id:"publicar-el-contrato",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2}],p={toc:d};function m(e){var a=e.components,o=(0,n.Z)(e,i);return(0,t.kt)("wrapper",(0,r.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Explicamos con ejemplos c\xf3mo crear una cuenta y un contrato ",(0,t.kt)("inlineCode",{parentName:"p"},"Hello World")," para subir a una blockchain basada en EOS.IO. Para este ejemplo, nos basamos en recursos publicados por ",(0,t.kt)("a",{parentName:"p",href:"https://developers.eos.io/"},"Block.one para compartir con la comunidad"),"."),(0,t.kt)("h2",{id:"obtenga-sus-llaves-privadas"},"Obtenga sus Llaves Privadas"),(0,t.kt)("p",null,"Mas informaci\xf3n ",(0,t.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas"},"sobre llaves privadas"),"."),(0,t.kt)("h2",{id:"adquirir-recurso-ram"},"Adquirir Recurso RAM"),(0,t.kt)("p",null,"Una vez que se tiene la cuenta, podemos usar el Faucet para recibir tokens ficticios gratis, que en este caso ser\xe1n EOS, necesarios para usar recursos de la red (siempre y cuando se tenga participaci\xf3n en esa red). La l\xf3gica de esto es que, para el contrato, estaremos requiriendo adquirir recursos RAM de block producers, para lo cual necesitaremos estos EOS que se nos acaban de enviar."),(0,t.kt)("p",null,"Con este comando podemos revisar la cantidad de EOS con los que contamos en esta cuenta (que en este caso son 100 EOS), as\xed como el recurso RAM, que en este momento es de 5.366 KiB."),(0,t.kt)("p",null,"Para adquirir RAM, escribimos el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"buyram")," para nuestra cuenta. Se debe especificar dos veces el nombre de la cuenta, una vez para definir de d\xf3nde salen los EOS y otra vez para indicar hacia d\xf3nde se env\xeda el RAM. En la misma l\xednea, se debe indicar la cantidad de EOS que estaremos aportando. Para el ejemplo estaremos enviando 50 EOS. Al tener la billetera desbloqueada, autom\xe1ticamente adquirimos el RAM por el monto de EOS que indicamos."),(0,t.kt)("p",null,"Luego de ejecutar la compra, se puede verificar que ahora se tienen 86 KiB de RAM y solo 50 EOS de los 100 que originalmente nos fueron asignados."),(0,t.kt)("p",null,"En el block explorer de Bloks.io, se puede buscar la informaci\xf3n de esa cuenta. Adicionalmente, se pueden revisar las acciones tomadas, incluyendo las transacciones de compra de RAM, los tokens del Faucet y el historial completo de movimientos."),(0,t.kt)("h2",{id:"crear-un-contrato"},"Crear un Contrato"),(0,t.kt)("p",null,"Para continuar, vamos a crear un contrato sencillo dentro de un nuevo directorio, el cual llamamos \u201cholacontrato\u201d. Como en EOS se requieren recursos, estos deber\xe1n estar asociados a los tokens de una cuenta, por lo que se debe poner el mismo nombre del contrato anteriormente creado."),(0,t.kt)("p",null,"Para editar el contrato, puede usarse un editor de texto. Para este ejemplo se utiliz\xf3 Sublime Text."),(0,t.kt)("p",null,"La primera l\xednea incluye una librer\xeda que a la cual se tiene acceso a trav\xe9s del Contract Development Toolkit (CDT), una herramienta que permite acceder a recursos para crear los contratos."),(0,t.kt)("p",null,"En la l\xednea de clase, se deber\xe1 exponer nuestro contrato \u201cholacontrato\u201d que tiene una acci\xf3n definida, que en este caso llamamos \u201cHola\u201d y su argumento es un usuario tipo nombre. Al guardar el contrato, en el directorio queda un archivo C++."),(0,t.kt)("p",null,"El archivo C++ se tiene que compilar usando la herramienta CDT (Contract Development Toolkit), que recibe de input el archivo C++ y como output origina un archivo web assembly (wasm) que es un archivo ejecutable por el contrato. Adicional al archivo wasm, tambi\xe9n se genera un archivo abi que sirve para el mapeo de las funciones del contrato. El comando va a recibir el contrato como un input y como output va a generar un archivo wasm que es el archivo que realmente se sube al blockchain."),(0,t.kt)("p",null,"Como no especificamos una, el sistema nos da un mensaje de que no existe una cl\xe1usula ricardiana. Una cl\xe1usula ricardiana es un contrato en prosa, escrito en ingl\xe9s, que describe la intenci\xf3n del contrato y que debe estar alineada con la intenci\xf3n para la que se cre\xf3. En el sitio de Block.one vienen recursos para las cl\xe1usulas ricardianas. Para efectos del ejemplo no creamos uno."),(0,t.kt)("p",null,"Una vez ejecutado el comando para set contract, el sistema lee la informaci\xf3n en el contrato para luego publicarlo."),(0,t.kt)("h2",{id:"publicar-el-contrato"},"Publicar el Contrato"),(0,t.kt)("p",null,"Para publicar nuestro contrato, debemos usar el comando usado en ",(0,t.kt)("inlineCode",{parentName:"p"},"cleos")," y el API endpoint usado anteriormente para subir el contrato a la ubicaci\xf3n que queremos con un permiso activo para poder firmar con la billetera creada."),(0,t.kt)("p",null,"De vuelta al block explorer (Bloks.io), podemos verificar que la cuenta es due\xf1a de un contrato que expone la acci\xf3n \u201cHola\u201d y que contiene la informaci\xf3n abi en la que se especifican en estructura JSON las acciones dentro del contrato y componentes asociados."),(0,t.kt)("p",null,"Una vez que el contrato est\xe9 listo, podemos ejecutar una acci\xf3n en el contrato. Con cleos existe un comando para especificar el endpoint y as\xed ejecutar la acci\xf3n \u201cHola\u201d. Para este ejemplo, ponemos como input: \u201ceoscostarica\u201d. El output de la acci\xf3n ser\xe1 el texto \u201cHola eoscostarica\u201d."),(0,t.kt)("p",null,"Podemos verificar en el explorador de bloques las acciones ejecutadas."),(0,t.kt)("p",null,"Es necesario esperar unos segundos para completar la irreversibilidad del bloque, ya que los block producers deben hacer la validaci\xf3n del bloque de datos para esto."),(0,t.kt)("p",null,"Finalmente, esta es una muestra de c\xf3mo se puede interactuar con una blockchain. Existen herramientas de Javascript, librer\xeda ",(0,t.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramientas/librerias-sdk#eosjs"},"EOS JS")," que podr\xeda implementarse para ejecutar acciones de una manera m\xe1s program\xe1tica para integrar con dApps, poder persistir datos, o incluso ejecutar l\xf3gica de negocios en la blockchain con este mismo patr\xf3n."),(0,t.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,t.kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/nMivNMvS09Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}m.isMDXComponent=!0}}]);
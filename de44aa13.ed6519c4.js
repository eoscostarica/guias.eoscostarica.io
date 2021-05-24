(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{126:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return c})),o.d(a,"metadata",(function(){return i})),o.d(a,"toc",(function(){return s})),o.d(a,"default",(function(){return u}));var r=o(3),n=o(7),t=(o(0),o(136)),c={id:"contrato-hola-mundo",title:"Contrato Hola Mundo",sidebar_label:"Contrato Hola Mundo"},i={unversionedId:"tutoriales/contrato-hola-mundo",id:"tutoriales/contrato-hola-mundo",isDocsHomePage:!1,title:"Contrato Hola Mundo",description:"Explicamos con ejemplos c\xf3mo crear una cuenta y un contrato Hello World para subir a una blockchain basada en EOS.IO. Para este ejemplo, nos basamos en recursos publicados por Block.one para compartir con la comunidad.",source:"@site/docs/tutoriales/contrato-hola-mundo.md",slug:"/tutoriales/contrato-hola-mundo",permalink:"/docs/tutoriales/contrato-hola-mundo",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/contrato-hola-mundo.md",version:"current",lastUpdatedBy:"Xavier",lastUpdatedAt:1621891842,sidebar_label:"Contrato Hola Mundo",sidebar:"docs",previous:{title:"Contratos Ricardianos",permalink:"/docs/aprender-eosio/contratos-ricardianos"},next:{title:"C++ Moderno",permalink:"/docs/tutoriales/cpp-moderno"}},s=[{value:"Obtenga sus Llaves Privadas",id:"obtenga-sus-llaves-privadas",children:[]},{value:"Adquirir Recurso RAM",id:"adquirir-recurso-ram",children:[]},{value:"Crear un Contrato",id:"crear-un-contrato",children:[]},{value:"Publicar el Contrato",id:"publicar-el-contrato",children:[]},{value:"Video Tutorial",id:"video-tutorial",children:[]}],l={toc:s};function u(e){var a=e.components,o=Object(n.a)(e,["components"]);return Object(t.b)("wrapper",Object(r.a)({},l,o,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Explicamos con ejemplos c\xf3mo crear una cuenta y un contrato ",Object(t.b)("inlineCode",{parentName:"p"},"Hello World")," para subir a una blockchain basada en EOS.IO. Para este ejemplo, nos basamos en recursos publicados por ",Object(t.b)("a",{parentName:"p",href:"https://developers.eos.io/"},"Block.one para compartir con la comunidad"),"."),Object(t.b)("h2",{id:"obtenga-sus-llaves-privadas"},"Obtenga sus Llaves Privadas"),Object(t.b)("p",null,"Mas informaci\xf3n ",Object(t.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas"},"sobre llaves privadas"),"."),Object(t.b)("h2",{id:"adquirir-recurso-ram"},"Adquirir Recurso RAM"),Object(t.b)("p",null,"Una vez que se tiene la cuenta, podemos usar el Faucet para recibir tokens ficticios gratis, que en este caso ser\xe1n EOS, necesarios para usar recursos de la red (siempre y cuando se tenga participaci\xf3n en esa red). La l\xf3gica de esto es que, para el contrato, estaremos requiriendo adquirir recursos RAM de block producers, para lo cual necesitaremos estos EOS que se nos acaban de enviar."),Object(t.b)("p",null,"Con este comando podemos revisar la cantidad de EOS con los que contamos en esta cuenta (que en este caso son 100 EOS), as\xed como el recurso RAM, que en este momento es de 5.366 KiB."),Object(t.b)("p",null,"Para adquirir RAM, escribimos el comando ",Object(t.b)("inlineCode",{parentName:"p"},"buyram")," para nuestra cuenta. Se debe especificar dos veces el nombre de la cuenta, una vez para definir de d\xf3nde salen los EOS y otra vez para indicar hacia d\xf3nde se env\xeda el RAM. En la misma l\xednea, se debe indicar la cantidad de EOS que estaremos aportando. Para el ejemplo estaremos enviando 50 EOS. Al tener la billetera desbloqueada, autom\xe1ticamente adquirimos el RAM por el monto de EOS que indicamos."),Object(t.b)("p",null,"Luego de ejecutar la compra, se puede verificar que ahora se tienen 86 KiB de RAM y solo 50 EOS de los 100 que originalmente nos fueron asignados."),Object(t.b)("p",null,"En el block explorer de Bloks.io, se puede buscar la informaci\xf3n de esa cuenta. Adicionalmente, se pueden revisar las acciones tomadas, incluyendo las transacciones de compra de RAM, los tokens del Faucet y el historial completo de movimientos."),Object(t.b)("h2",{id:"crear-un-contrato"},"Crear un Contrato"),Object(t.b)("p",null,"Para continuar, vamos a crear un contrato sencillo dentro de un nuevo directorio, el cual llamamos \u201cholacontrato\u201d. Como en EOS se requieren recursos, estos deber\xe1n estar asociados a los tokens de una cuenta, por lo que se debe poner el mismo nombre del contrato anteriormente creado."),Object(t.b)("p",null,"Para editar el contrato, puede usarse un editor de texto. Para este ejemplo se utiliz\xf3 Sublime Text."),Object(t.b)("p",null,"La primera l\xednea incluye una librer\xeda que a la cual se tiene acceso a trav\xe9s del Contract Development Toolkit (CDT), una herramienta que permite acceder a recursos para crear los contratos."),Object(t.b)("p",null,"En la l\xednea de clase, se deber\xe1 exponer nuestro contrato \u201cholacontrato\u201d que tiene una acci\xf3n definida, que en este caso llamamos \u201cHola\u201d y su argumento es un usuario tipo nombre. Al guardar el contrato, en el directorio queda un archivo C++."),Object(t.b)("p",null,"El archivo C++ se tiene que compilar usando la herramienta CDT (Contract Development Toolkit), que recibe de input el archivo C++ y como output origina un archivo web assembly (wasm) que es un archivo ejecutable por el contrato. Adicional al archivo wasm, tambi\xe9n se genera un archivo abi que sirve para el mapeo de las funciones del contrato. El comando va a recibir el contrato como un input y como output va a generar un archivo wasm que es el archivo que realmente se sube al blockchain."),Object(t.b)("p",null,"Como no especificamos una, el sistema nos da un mensaje de que no existe una cl\xe1usula ricardiana. Una cl\xe1usula ricardiana es un contrato en prosa, escrito en ingl\xe9s, que describe la intenci\xf3n del contrato y que debe estar alineada con la intenci\xf3n para la que se cre\xf3. En el sitio de Block.one vienen recursos para las cl\xe1usulas ricardianas. Para efectos del ejemplo no creamos uno."),Object(t.b)("p",null,"Una vez ejecutado el comando para set contract, el sistema lee la informaci\xf3n en el contrato para luego publicarlo."),Object(t.b)("h2",{id:"publicar-el-contrato"},"Publicar el Contrato"),Object(t.b)("p",null,"Para publicar nuestro contrato, debemos usar el comando usado en ",Object(t.b)("inlineCode",{parentName:"p"},"cleos")," y el API endpoint usado anteriormente para subir el contrato a la ubicaci\xf3n que queremos con un permiso activo para poder firmar con la billetera creada."),Object(t.b)("p",null,"De vuelta al block explorer (Bloks.io), podemos verificar que la cuenta es due\xf1a de un contrato que expone la acci\xf3n \u201cHola\u201d y que contiene la informaci\xf3n abi en la que se especifican en estructura JSON las acciones dentro del contrato y componentes asociados."),Object(t.b)("p",null,"Una vez que el contrato est\xe9 listo, podemos ejecutar una acci\xf3n en el contrato. Con cleos existe un comando para especificar el endpoint y as\xed ejecutar la acci\xf3n \u201cHola\u201d. Para este ejemplo, ponemos como input: \u201ceoscostarica\u201d. El output de la acci\xf3n ser\xe1 el texto \u201cHola eoscostarica\u201d."),Object(t.b)("p",null,"Podemos verificar en el explorador de bloques las acciones ejecutadas."),Object(t.b)("p",null,"Es necesario esperar unos segundos para completar la irreversibilidad del bloque, ya que los block producers deben hacer la validaci\xf3n del bloque de datos para esto."),Object(t.b)("p",null,"Finalmente, esta es una muestra de c\xf3mo se puede interactuar con una blockchain. Existen herramientas de Javascript, librer\xeda ",Object(t.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramientas/librerias-sdk#eosjs"},"EOS JS")," que podr\xeda implementarse para ejecutar acciones de una manera m\xe1s program\xe1tica para integrar con dApps, poder persistir datos, o incluso ejecutar l\xf3gica de negocios en la blockchain con este mismo patr\xf3n."),Object(t.b)("h2",{id:"video-tutorial"},"Video Tutorial"),Object(t.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/nMivNMvS09Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0},136:function(e,a,o){"use strict";o.d(a,"a",(function(){return d})),o.d(a,"b",(function(){return b}));var r=o(0),n=o.n(r);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function c(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?c(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,r,n=function(e,a){if(null==e)return{};var o,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),u=function(e){var a=n.a.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},d=function(e){var a=u(e.components);return n.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var o=e.components,r=e.mdxType,t=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||t;return o?n.a.createElement(b,i(i({ref:a},l),{},{components:o})):n.a.createElement(b,i({ref:a},l))}));function b(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=o.length,c=new Array(t);c[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<t;l++)c[l]=o[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);
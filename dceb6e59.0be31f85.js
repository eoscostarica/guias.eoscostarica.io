(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{106:function(e,o,a){"use strict";a.d(o,"a",(function(){return u})),a.d(o,"b",(function(){return m}));var r=a(0),n=a.n(r);function s(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function t(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?t(Object(a),!0).forEach((function(o){s(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,r,n=function(e,o){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),l=function(e){var o=n.a.useContext(c),a=o;return e&&(a="function"==typeof e?e(o):d(d({},o),e)),a},u=function(e){var o=l(e.components);return n.a.createElement(c.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},b=n.a.forwardRef((function(e,o){var a=e.components,r=e.mdxType,s=e.originalType,t=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),b=r,m=u["".concat(t,".").concat(b)]||u[b]||p[b]||s;return a?n.a.createElement(m,d(d({ref:o},c),{},{components:a})):n.a.createElement(m,d({ref:o},c))}));function m(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=a.length,t=new Array(s);t[0]=b;var d={};for(var i in o)hasOwnProperty.call(o,i)&&(d[i]=o[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,t[1]=d;for(var c=2;c<s;c++)t[c]=a[c];return n.a.createElement.apply(null,t)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},99:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return t})),a.d(o,"metadata",(function(){return d})),a.d(o,"rightToc",(function(){return i})),a.d(o,"default",(function(){return l}));var r=a(2),n=a(6),s=(a(0),a(106)),t={id:"mecanismo-de-consenso",title:"Mecanismo de Consenso",sidebar_label:"Mecanismo de Consenso"},d={unversionedId:"aprender-eosio/mecanismo-de-consenso",id:"aprender-eosio/mecanismo-de-consenso",isDocsHomePage:!1,title:"Mecanismo de Consenso",description:"El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la \xfanica versi\xf3n de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo com\xfan que sea una aceptado por toda la red.",source:"@site/docs/aprender-eosio/mecanismo-de-consenso.md",permalink:"/docs/aprender-eosio/mecanismo-de-consenso",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/mecanismo-de-consenso.md",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1598064002,sidebar_label:"Mecanismo de Consenso",sidebar:"docs",previous:{title:"Protocolo EOSIO",permalink:"/docs/aprender-eosio/protocolo-eosio"},next:{title:"Uso de recursos",permalink:"/docs/aprender-eosio/uso-de-recursos"}},i=[{value:"\xbfQu\xe9 es un productor de bloques?",id:"\xbfqu\xe9-es-un-productor-de-bloques",children:[{value:"Explicando el rol de un productor de bloques de EOS.",id:"explicando-el-rol-de-un-productor-de-bloques-de-eos",children:[]}]},{value:"Productores de Bloques Activos",id:"productores-de-bloques-activos",children:[{value:"Cronograma de producci\xf3n",id:"cronograma-de-producci\xf3n",children:[]},{value:"Tolerancia a fallas bizantinas",id:"tolerancia-a-fallas-bizantinas",children:[]},{value:"Tolerancia a fallas en nodos",id:"tolerancia-a-fallas-en-nodos",children:[]}]},{value:"Productores de Bloques de Reserva",id:"productores-de-bloques-de-reserva",children:[]},{value:"Delegated Proof of Stake (DPoS)",id:"delegated-proof-of-stake-dpos",children:[]}],c={rightToc:i};function l(e){var o=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,a,{components:o,mdxType:"MDXLayout"}),Object(s.b)("p",null,"El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la \xfanica versi\xf3n de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo com\xfan que sea una aceptado por toda la red."),Object(s.b)("h2",{id:"\xbfqu\xe9-es-un-productor-de-bloques"},"\xbfQu\xe9 es un productor de bloques?"),Object(s.b)("p",null,"Los productores de bloques proveen la infraestructura requerida para procesar las transacciones. Algunos productores de bloques operan con sus propios equipos f\xedsicos, mientras otros proveen servicios utilizando servicios en la nube de terceros."),Object(s.b)("h3",{id:"explicando-el-rol-de-un-productor-de-bloques-de-eos"},"Explicando el rol de un productor de bloques de EOS."),Object(s.b)("figure",{class:"video_container"},Object(s.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/YLt5uexD9gg",frameborder:"0",allowfullscreen:"true"}," ")),Object(s.b)("h2",{id:"productores-de-bloques-activos"},"Productores de Bloques Activos"),Object(s.b)("p",null,"Los nodos autorizados como productores de bloques activos pertenecen a un grupo que comparte la responsabilidad de validar y escribir todas las acciones en la red."),Object(s.b)("p",null,"Son capaces de reconocer las firmas de los nodos escritores y verificar que las transacciones hayan sido transmitidas a la red por nodos autorizados mediante listas blancas en contratos inteligentes."),Object(s.b)("p",null,"Una red EOSIO esta configurada por defecto para utilizar 21 productores activos y una serie productores de reserva para una operaci\xf3n estable."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"EOSIO permite hasta 125 productores de bloque activos, especificado mediante max_producers en ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106"}),"config.hpp"))),Object(s.b)("h3",{id:"cronograma-de-producci\xf3n"},"Cronograma de producci\xf3n"),Object(s.b)("p",null,"En redes EOSIO, los productores de bloques activos se enumeran en un cronograma, llamado ",Object(s.b)("inlineCode",{parentName:"p"},"schedule")),Object(s.b)("p",null,"La lista de cuentas de productores en el ",Object(s.b)("inlineCode",{parentName:"p"},"schedule")," se ordena alfab\xe9ticamente y as\xed se define la secuencia en que deben firmar bloques."),Object(s.b)("p",null,"Cada productor recibe una ventana de 12 bloques para firmar antes de que el siguiente productor inicie su ventana. Los bloques nuevos son producidos por el primer nodo en la lista durante un periodo de 6 segundos (12 bloques) y luego pasa el siguiente nodo a producir los siguientes 12 bloques y as\xed sucesivamente."),Object(s.b)("p",null,"Si un nodo productor no est\xe1 listo o no est\xe1 disponible, no hay nadie para producir los 12 bloques, por lo que todas las transacciones especulativas se retrasan hasta que el pr\xf3ximo productor comience a firmar."),Object(s.b)("h3",{id:"tolerancia-a-fallas-bizantinas"},"Tolerancia a fallas bizantinas"),Object(s.b)("p",null,"Los bloques no se consideran irreversibles en la cadena hasta que hayan sido validados por 2/3 +1 de los productores activos. De tal manera que si un productor del grupo inserta un bloque invalido los nodos siguientes lo rechazaran y las transacciones y no ser\xe1n incluidas sin que 2/3 +1 hayan validado ese bloque."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Ejemplo:")," Una red de 21 productores activos requiere validaci\xf3n de 15 nodos (2/3 +1), lo cual toma en promedio 90 segundos para obtener irreversibilidad de un bloque nuevo.")),Object(s.b)("h3",{id:"tolerancia-a-fallas-en-nodos"},"Tolerancia a fallas en nodos"),Object(s.b)("p",null,'Una vez que se firma un bloque, otros productores lo validan en el cronograma y pasa a un estado irreversible despu\xe9s de que 2/3 + 1 productores lo hayan validado. Entonces, si 1/3 o m\xe1s de todos los productores est\xe1n fuera de l\xednea, el \xfaltimo n\xfamero de bloque irreversible, conocido como "Last Irreversible Block" o LIB, no aumentar\xeda y la cadena de bloques se detendr\xe1.'),Object(s.b)("p",null,"Los servidores a veces fallan, y a veces deben ser retirados de operaci\xf3n para actualizaciones de software y mantenimiento del sistema, lo que es importante considerar en redes EOSIO peque\xf1as."),Object(s.b)("p",null,"Con solo 5 productores, la red tolerar\xe1 que 1 productor se desconecte. Si m\xe1s de uno est\xe1 fuera de l\xednea, el n\xfamero del ",Object(s.b)("strong",{parentName:"p"},"\xfaltimo bloque irreversible (LIB)")," dejar\xe1 de moverse y la red se detendr\xe1. Con 4 nodos, la interrupci\xf3n de un nodo interrumpir\xe1 la operaci\xf3n. Con 9 productores, dos nodos pueden desconectarse sin romper la red."),Object(s.b)("p",null,"Es importante que las llaves privadas de producci\xf3n est\xe9n respaldadas correctamente. Si se pierden llaves de productores de bloques debido a un desastre del sistema, existe la posibilidad de que la red deje de funcionar para siempre."),Object(s.b)("h2",{id:"productores-de-bloques-de-reserva"},"Productores de Bloques de Reserva"),Object(s.b)("p",null,"Las redes EOSIO manejan un grupo de nodos productores de bloques registrados que pueden asumir el rol de productores de bloques con solo ser agregado al ",Object(s.b)("inlineCode",{parentName:"p"},"schedule")," de productores activos."),Object(s.b)("h2",{id:"delegated-proof-of-stake-dpos"},"Delegated Proof of Stake (DPoS)"),Object(s.b)("figure",{class:"video_container"},Object(s.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/OVKAOwzAwHI",frameborder:"0",allowfullscreen:"true"}," ")),Object(s.b)("p",null,"Un Algoritmo de consenso es un proceso en Ciencias de la Computaci\xf3n usado para lograr acuerdo en un s\xf3lo valor de datos entre procesos o sistemas distribuidos."),Object(s.b)("p",null,"La tecnolog\xeda Blockchain depende de Algoritmos de Consenso para lograr un acuerdo entre los nodos. Un blokchain puede ser pensado como una base de datos descentralizada que es manejada por computadoras distribuidas en una red de punto a punto (P2P). Cada punto mantiene una copia del estado de la red para prevenir un punto \xfanico de fallo (en ingl\xe9s SPOF). Actualizacioes y validaciones son reflejadas en todas las copias simult\xe1neamente."),Object(s.b)("p",null,"El software EOSIO utiliza el \xfanico conocido Algoritmo de Consenso Descentralizado probado capaz de cumplir los requerimientos de rendimiento de las aplicaciones en el blockchain, ",Object(s.b)("strong",{parentName:"p"},"Prueba de Participaci\xf3n Delegada")," (Delegated Proof of Stake - DPOS). Bajo este algoritmo, aquellos que mantienen token en el blockchain adoptando el software EOSIO pueden seleccionar los productores de bloques atrav\xe9s de un sistema de aprobaci\xf3n continua. Cualquiera que elija participar en la producci\xf3n de bloques tendr\xe1n la oportunidad de producirlos, siempre que puedan persuadir a los titulares de tokens para que voten por ellos."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper"}),"DPOS Algoritmo de Consenso"))))}l.isMDXComponent=!0}}]);
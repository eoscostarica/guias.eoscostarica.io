"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[4150],{3905:function(e,o,a){a.d(o,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,n,t=function(e,o){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=n.createContext({}),c=function(e){var o=n.useContext(l),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},d=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=t,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return a?n.createElement(f,s(s({ref:o},d),{},{components:a})):n.createElement(f,s({ref:o},d))}));function p(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7457:function(e,o,a){a.r(o),a.d(o,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var n=a(7462),t=a(3366),r=(a(7294),a(3905)),s=["components"],i={id:"mecanismos-de-consenso-blockchain",title:"Algoritmos de Consenso Blockchain",sidebar_label:"Mecanismos de Consenso",description:"Definici\xf3n y explicaciones con temas relacionados a los mecanismos de consenso en protocolos Blockchain",keywords:["Algoritmo de Consenso","Mecanismos de Consenso","DPoS","POS","POW","Proof of Work","Delegated Proof of Stake","Proof of Stake","Protocolos Blockchain"]},l=void 0,c={unversionedId:"mecanismos-de-consenso-blockchain",id:"mecanismos-de-consenso-blockchain",title:"Algoritmos de Consenso Blockchain",description:"Definici\xf3n y explicaciones con temas relacionados a los mecanismos de consenso en protocolos Blockchain",source:"@site/docs/mecanismos-de-consenso-blockchain.md",sourceDirName:".",slug:"/mecanismos-de-consenso-blockchain",permalink:"/docs/mecanismos-de-consenso-blockchain",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/mecanismos-de-consenso-blockchain.md",tags:[],version:"current",lastUpdatedBy:"Warner Hurtado Laguna",lastUpdatedAt:1657815653,formattedLastUpdatedAt:"14/7/2022",frontMatter:{id:"mecanismos-de-consenso-blockchain",title:"Algoritmos de Consenso Blockchain",sidebar_label:"Mecanismos de Consenso",description:"Definici\xf3n y explicaciones con temas relacionados a los mecanismos de consenso en protocolos Blockchain",keywords:["Algoritmo de Consenso","Mecanismos de Consenso","DPoS","POS","POW","Proof of Work","Delegated Proof of Stake","Proof of Stake","Protocolos Blockchain"]},sidebar:"docs",previous:{title:"IPFS (Interplanetary File System)",permalink:"/docs/interplanetary-file-system"},next:{title:"Protocolo EOSIO",permalink:"/docs/aprender-eosio/protocolo-eosio"}},d={},m=[{value:"Proof of Work (PoW)",id:"proof-of-work-pow",level:2},{value:"Proof of Stake (PoS)",id:"proof-of-stake-pos",level:2},{value:"Diferencias entre los Mecanismos",id:"diferencias-entre-los-mecanismos",level:2},{value:"Otros Mecanismos de Consenso",id:"otros-mecanismos-de-consenso",level:2},{value:"Proof of Capacity (PoC)",id:"proof-of-capacity-poc",level:3},{value:"Proof of Activity (PoA)",id:"proof-of-activity-poa",level:3},{value:"Proof of Burn (PoB)",id:"proof-of-burn-pob",level:3},{value:"Proof of History (PoH)",id:"proof-of-history-poh",level:3},{value:"Proof of Elapsed Time (PoET)",id:"proof-of-elapsed-time-poet",level:3}],u={toc:m};function p(e){var o=e.components,a=(0,t.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Es importante tener conocimiento sobre cuales han sido los mecanismos de consenso utilizados por las distintas redes blockchain para mantener la seguridad e integridad dentro de la red, asi como los beneficios y las redes que aun la conforman."),(0,r.kt)("h2",{id:"proof-of-work-pow"},"Proof of Work (PoW)"),(0,r.kt)("figure",{class:"video_container"},(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/3EUAcxhuoU4",frameborder:"0",allowfullscreen:"true"}," ")),(0,r.kt)("p",null,'Es el primer mecanismo de consenso presentado por Satoshi Nakamoto en el whitepaper del Bitcoin en el 2008, en este consenso un grupo de transacciones denominadas "Mempool" son verificadas por los "mineros", los cuales resuelven un complejo problema matem\xe1tico (mismo que aumenta en complejidad entre m\xe1s se validen bloques) por lo que se requieren equipos de c\xf3mputo en este caso de "miner\xeda" especializados y a su vez grandes cantidades de energ\xeda.'),(0,r.kt)("p",null,'El primer minero que encuentre la soluci\xf3n al problema y esta sea probada por los dem\xe1s mineros obtiene el derecho de agregar el "Mempool" al blockchain y obtener una recompensa de bloque o "Block reward" compuesta por criptomonedas generadas por las comisiones de transacci\xf3n.'),(0,r.kt)("p",null,'Debido a los altos requerimientos para poder "minar" se han formado grupos de minado o "Pool mining" con el de fin de lograr encontrar la soluci\xf3n al problema matem\xe1tico con la utilizaci\xf3n de recursos, con ello tener mejores oportunidades de encontrar la soluci\xf3n primero que los mineros individuales con mayores recursos y la recompensa obtenida es repartida entre los miembros del pool.'),(0,r.kt)("p",null,"En la actualidad las redes que utilizan este mecanismo de consenso son:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bitcoin."),(0,r.kt)("li",{parentName:"ul"},"Ethereum (En un futuro es posible que cambie a PoS)."),(0,r.kt)("li",{parentName:"ul"},"Monero."),(0,r.kt)("li",{parentName:"ul"},"Entre otras.")),(0,r.kt)("p",null,"Si se desea obtener m\xe1s informaci\xf3n puede visitar el siguiente ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramientas/glosario#proof-of-work"},"enlace"),"."),(0,r.kt)("h2",{id:"proof-of-stake-pos"},"Proof of Stake (PoS)"),(0,r.kt)("figure",{class:"video_container"},(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/psKDXvXdr7k",frameborder:"0",allowfullscreen:"true"}," ")),(0,r.kt)("p",null,'Este mecanismo de consenso nace con el 2011 con el fin de eliminar aquellas limitaciones presentes en su antecesor proof of work, teniendo en lugar de "mineros" que requieren recursos para la verificaci\xf3n de transacciones tales como equipos especializados y grandes cantidades energ\xeda a los "validadores" los cuales son due\xf1os de monedas y ponen como colateral ',(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramientas/glosario/#stake"},'"Stake"'),' cierta cantidad de monedas, siendo escogido de manera aleatoria los validadores responsables de "validar" o "minar" en caso de que exista un validador corrupto perder\xe1 el stake y no podr\xe1 ser validador en el futuro.'),(0,r.kt)("p",null,"Para la validaci\xf3n de transacciones en EOSIO se requiere una mayor\xeda de 2/3+1 para el consenso (Este dato puede variar seg\xfan la red) del total de los validadores aprueben y el bloque de transacciones. Para la elecci\xf3n de los validadores se toma en consideraci\xf3n los siguientes aspectos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cantidad de tokens (Entre m\xe1s alta sea cantidad mayor la probabilidad de ser elegido)."),(0,r.kt)("li",{parentName:"ul"},"Edad de las monedas apostadas, una vez utilizadas se reinicia a 0 (Entre m\xe1s tiempo sin ser utilizadas mayor la probabilidad de ser elegido)."),(0,r.kt)("li",{parentName:"ul"},"Selecci\xf3n aleatoria.")),(0,r.kt)("p",null,"Como podemos ver, es un mecanismo que favorece a los mayores poseedores de monedas y este a su vez espera que act\xfaen de buena fe y castiga severamente a aquellos que no siendo la recompensa mucho menor que el riesgo."),(0,r.kt)("p",null,"En la actualidad las redes que utilizan este mecanismo de consenso son:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dash."),(0,r.kt)("li",{parentName:"ul"},"Ethereum (En un futuro)."),(0,r.kt)("li",{parentName:"ul"},"EOS / EOSIO."),(0,r.kt)("li",{parentName:"ul"},"Entre otras.")),(0,r.kt)("h2",{id:"diferencias-entre-los-mecanismos"},"Diferencias entre los Mecanismos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Aspecto"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Proof of Work (PoW)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Proof of Stake (PoS)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Delegated Proof of Stake (DPoS)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Requisitos de equipo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Equipos especializados"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Equipo con conexi\xf3n a internet"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Equipo con conexi\xf3n a internet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Quien se encarga de validar las transacciones"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Son validadas por el primer minero en encontrar la soluci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:"center"},"La persona escogida por el sistema"),(0,r.kt)("td",{parentName:"tr",align:"center"},"El delegado escogido")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Como se escoge el validador"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Los mineros compiten tratando de resolver el problema matem\xe1tico"),(0,r.kt)("td",{parentName:"tr",align:"center"},"La persona con mayor cantidad de stake o edad de stake"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Se realizan elecciones dentro de la comunidad y se otorga el stake al delegado escogido")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Principales fortalezas"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Es un mecanismo muy seguro"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Es m\xe1s amigable con los usuarios e involucra m\xe1s a la comunidad"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Permite una mayor democracia por parte de la comunidad")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Principales retos"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Es extremadamente costoso"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Favorece a aquellos con mayores recursos"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requiere una comunidad muy involucrada")))),(0,r.kt)("p",null,"Si desea aprender m\xe1s sobre Delegated Proof of Stake (DPoS) puede visitar el siguiente ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/aprender-eosio/mecanismo-de-consenso#delegated-proof-of-stake-dpos"},"enlace"),"."),(0,r.kt)("h2",{id:"otros-mecanismos-de-consenso"},"Otros Mecanismos de Consenso"),(0,r.kt)("p",null,"Hay otros mecanismos de consenso que no son tan populares en las comunidades de blockchain como las anteriores, las cuales son  las siguientes:  "),(0,r.kt)("h3",{id:"proof-of-capacity-poc"},"Proof of Capacity (PoC)"),(0,r.kt)("p",null,"Este mecanismo al igual que el proof of work se realiza el minado, pero como diferencia principal es el uso de discos duros como principal recurso de poder computacional. Solucionando problem\xe1ticas de PoW y PoS debido a la mayor capacidad con los discos duros."),(0,r.kt)("h3",{id:"proof-of-activity-poa"},"Proof of Activity (PoA)"),(0,r.kt)("p",null,"Este mecanismo utiliza las mejores caracter\xedsticas de PoW y PoS siendo un ejemplo que se valida un bloque de transacciones por medio del minado (PoW) se cambia al sistema de elecci\xf3n de validadores (PoS) una vez validado se cambia al sistema de minado."),(0,r.kt)("h3",{id:"proof-of-burn-pob"},"Proof of Burn (PoB)"),(0,r.kt)("p",null,'Este mecanismo naci\xf3 como soluci\xf3n al alto gasto energ\xe9tico por parte de PoW, haciendo uso de la idea de la quema de energ\xeda, al validar un bloque de transacciones se "queman" tokens para obtener m\xe1s potencia de minado como aparejo, cuantos m\xe1s tokens se quemen m\xe1s potencia se obtiene.'),(0,r.kt)("h3",{id:"proof-of-history-poh"},"Proof of History (PoH)"),(0,r.kt)("p",null,"Este mecanismo nace con una propuesta muy antigua, pero diferente a los mecanismos anteriores, ya que registra el tiempo y la hora exacta entre 2 eventos en una funci\xf3n hash, aunque ser\xeda imposible cambiar el registro en todos los ordenadores de la red."),(0,r.kt)("h3",{id:"proof-of-elapsed-time-poet"},"Proof of Elapsed Time (PoET)"),(0,r.kt)("p",null,"Este mecanismo naci\xf3 como una soluci\xf3n de Intel a la ventaja que obtienen los que tienen m\xe1s recursos a la hora de buscar el sistema de elecci\xf3n del validador de bloques m\xe1s justo, como una loter\xeda dentro de la red se asignan los validadores."),(0,r.kt)("p",null,"Si quiere saber m\xe1s sobre los diferentes mecanismos de consenso, puede visitar el siguiente ",(0,r.kt)("a",{parentName:"p",href:"https://www.allerin.com/blog/8-blockchain-consensus-mechanisms-you-should-know-about"},"enlace"),"."))}p.isMDXComponent=!0}}]);
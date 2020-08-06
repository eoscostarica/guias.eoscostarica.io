(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(e,a,n){"use strict";n.d(a,"a",(function(){return d})),n.d(a,"b",(function(){return b}));var t=n(0),o=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var a=o.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=u(e.components);return o.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},m=o.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=t,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?o.a.createElement(b,s(s({ref:a},l),{},{components:n})):o.a.createElement(b,s({ref:a},l))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,c=new Array(r);c[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return s})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return u}));var t=n(2),o=n(6),r=(n(0),n(103)),c={id:"uso-de-recursos",title:"Uso de recursos",sidebar_label:"Uso de recursos"},s={unversionedId:"aprender-eosio/uso-de-recursos",id:"aprender-eosio/uso-de-recursos",isDocsHomePage:!1,title:"Uso de recursos",description:"Tipos de Recursos",source:"@site/docs/aprender-eosio/uso-de-recursos.md",permalink:"/docs/aprender-eosio/uso-de-recursos",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/website/docs/aprender-eosio/uso-de-recursos.md",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1596673443,sidebar_label:"Uso de recursos",sidebar:"docs",previous:{title:"Mecanismo de Consenso",permalink:"/docs/aprender-eosio/mecanismo-de-consenso"},next:{title:"Cuentas y Permisos",permalink:"/docs/aprender-eosio/cuentas-permisos"}},i=[{value:"Tipos de Recursos",id:"tipos-de-recursos",children:[{value:"RAM",id:"ram",children:[]},{value:"CPU",id:"cpu",children:[]},{value:"Network (NET)",id:"network-net",children:[]}]},{value:"L\xedmites de recursos de la cuenta",id:"l\xedmites-de-recursos-de-la-cuenta",children:[]},{value:"Contabilidad de recursos",id:"contabilidad-de-recursos",children:[]},{value:"CPU y NET como recursos el\xe1sticos",id:"cpu-y-net-como-recursos-el\xe1sticos",children:[]},{value:"Asignaci\xf3n de recursos de EOS",id:"asignaci\xf3n-de-recursos-de-eos",children:[]}],l={rightToc:i};function u(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tipos-de-recursos"},"Tipos de Recursos"),Object(r.b)("p",null,"Las cuentas podr\xe1n utilizar los siguientes recursos en la red:"),Object(r.b)("h3",{id:"ram"},"RAM"),Object(r.b)("p",null,"En una red EOSIO, la RAM es el espacio de almacenamiento de memoria donde la cadena de bloques almacena datos, se mide en kilobytes (KiB). Si su contrato necesita almacenar datos en una tabla de blockchain, como en una base de datos, puede almacenarlos en la RAM de blockchain."),Object(r.b)("p",null,"RAM es un recurso muy importante y es limitado. Se utiliza al ejecutar muchas acciones que est\xe1n disponibles en la cadena de bloques, al crear una nueva cuenta, por ejemplo, la informaci\xf3n de esa cuenta se almacena en la memoria de la cadena de bloques. Adem\xe1s, cuando una cuenta acepta un nuevo tipo de token, se debe crear un nuevo registro en alg\xfan lugar de la memoria de blockchain que contenga el saldo del nuevo token aceptado, y esa memoria, el espacio de almacenamiento en blockchain, debe ser comprada por el cuenta que transfiere el token o por la cuenta que acepta el nuevo tipo de token."),Object(r.b)("p",null,"RAM es referido como ",Object(r.b)("inlineCode",{parentName:"p"},"memory")," en el siguiente resultado del comando ",Object(r.b)("inlineCode",{parentName:"p"},"cleos get account")," :"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),"    memory: \n     quota:     86.68 KiB    used:     11.62 KiB  \n")),Object(r.b)("p",null,"Puede encontrar m\xe1s detalles sobre RAM como recurso del sistema ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram"}),"aqu\xed"),"."),Object(r.b)("h3",{id:"cpu"},"CPU"),Object(r.b)("p",null,"La CPU est\xe1 procesando la potencia, la cantidad de CPU que tiene una cuenta se mide en microsegundos (\u03bcs), se conoce como ",Object(r.b)("inlineCode",{parentName:"p"},"CPU bandwith"),", el comando ",Object(r.b)("inlineCode",{parentName:"p"},"cleos get account")," emite la cantidad de tiempo de procesamiento que una cuenta tiene a su disposici\xf3n al presionar acciones a un contrato."),Object(r.b)("p",null,"Puede encontrar m\xe1s detalles sobre la CPU como recurso del sistema ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu"}),"aqu\xed"),"."),Object(r.b)("h3",{id:"network-net"},"Network (NET)"),Object(r.b)("p",null,"Como CPU y RAM, NET tambi\xe9n es un recurso muy importante en las cadenas de bloques basadas en EOSIO. NET es el ancho de banda de la red medido en bytes de transacciones y se conoce como ",Object(r.b)("inlineCode",{parentName:"p"},"net bandwidth"),"."),Object(r.b)("p",null,"Puede encontrar m\xe1s detalles sobre NET como recurso del sistema ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net"}),"aqu\xed"),"."),Object(r.b)("h2",{id:"l\xedmites-de-recursos-de-la-cuenta"},"L\xedmites de recursos de la cuenta"),Object(r.b)("p",null,"Cada cuenta en una cadena de bloques basada en EOSIO tiene l\xedmites de recursos para CPU / NET y RAM asociados. Estos l\xedmites especifican cu\xe1nto de cada recurso puede usar la cuenta y se pueden cambiar din\xe1micamente llamando a la API privilegiada ",Object(r.b)("inlineCode",{parentName:"p"},"set_resource_limits"),"."),Object(r.b)("p",null,"La diferencia entre los l\xedmites de recursos de CPU / NET y RAM es que la RAM, dado que es un recurso limitado, una vez utilizada, la \xfanica forma de recuperarla es liberar el espacio de almacenamiento utilizado. Por otro lado, CPU y NET se repondr\xe1n por completo cuando la cuenta no est\xe9 utilizando la red durante un per\xedodo de tiempo. Por defecto, este per\xedodo se establece en 24 horas."),Object(r.b)("h2",{id:"contabilidad-de-recursos"},"Contabilidad de recursos"),Object(r.b)("p",null,"Cuando un usuario (cuenta) desea interactuar con un contrato inteligente (otra cuenta), se crea una transacci\xf3n con una acci\xf3n que especifica la funci\xf3n inteligente para llamar junto con la cuenta (nivel de permiso) que autoriza la acci\xf3n."),Object(r.b)("p",null,"Luego, despu\xe9s de firmar con las claves que autorizan el nivel de permiso especificado en la acci\xf3n, la transacci\xf3n se transmite a la red hasta que alcanza el productor de bloques actual en la programaci\xf3n."),Object(r.b)("p",null,"El productor de bloques ejecutar\xe1 todas las acciones dentro de la transacci\xf3n y facturar\xe1 el tiempo utilizado para ejecutarlas (CPU) a la primera cuenta que autoriza la primera acci\xf3n. Adem\xe1s, facturar\xe1 a la primera cuenta de autorizaci\xf3n por el tama\xf1o de la transacci\xf3n (NET)."),Object(r.b)("p",null,"Si las acciones realizadas por el contrato inteligente implican alg\xfan tipo de almacenamiento de datos, el contrato inteligente puede elegir usar los recursos de RAM de cualquiera de las cuentas de autorizaci\xf3n de transacciones o usar los recursos de RAM de la cuenta del contrato inteligente."),Object(r.b)("h2",{id:"cpu-y-net-como-recursos-el\xe1sticos"},"CPU y NET como recursos el\xe1sticos"),Object(r.b)("p",null,"El ",Object(r.b)("inlineCode",{parentName:"p"},"resource limit manager")," de una cadena de bloques basada en EOSIO es la parte del protocolo que realiza un seguimiento de la cantidad de recursos de red disponibles en cualquier momento y cu\xe1ntos recursos est\xe1 usando cada cuenta."),Object(r.b)("p",null,"En particular, trata la CPU y NET como recursos el\xe1sticos que permiten a los usuarios consumir m\xe1s recursos de los que tienen derecho mientras este recurso est\xe1 por debajo del uso deseado (no congestionado)."),Object(r.b)("p",null,"Un recurso el\xe1stico tiene las siguientes propiedades."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"El uso deseado."),Object(r.b)("li",{parentName:"ul"},"El uso m\xe1ximo."),Object(r.b)("li",{parentName:"ul"},"El n\xfamero de per\xedodos de agregaci\xf3n que contribuyen al uso promedio."),Object(r.b)("li",{parentName:"ul"},"El multiplicador por el cual el espacio virtual puede sobrevender el uso cuando no est\xe1 congestionado."),Object(r.b)("li",{parentName:"ul"},"La tasa a la cual un recurso congestionado contrae su l\xedmite.\n-La velocidad a la que un recurso no congestionado expande sus l\xedmites.")),Object(r.b)("p",null,"Veamos la configuraci\xf3n predeterminada para el recurso de CPU como ejemplo:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),"    const static uint32_t default_max_block_cpu_usage        = 200'000; /// max block cpu usage in microseconds\n    const static uint32_t default_target_block_cpu_usage_pct = 10 * percent_1;\n    const static uint32_t block_cpu_usage_average_window_ms  = 60*1000l; \n")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),"elastic_limit_parameters cpu_limit_parameters = {\n    EOS_PERCENT(config::default_max_block_cpu_usage, config::default_target_block_cpu_usage_pct), //10% of 200ms\n    config::default_max_block_cpu_usage,                                                          //200ms\n    config::block_cpu_usage_average_window_ms / config::block_interval_ms,                        //60s (120 blocks)\n    1000,                                                                                         //x1000 multiplier\n    {99, 100},                                                                                    //contract ratio 0.99 \n    {1000, 999}                                                                                   //expand ratio 1.001\n};\n")),Object(r.b)("p",null,"Al hacer de la CPU un recurso el\xe1stico, se crear\xe1 una CPU virtual que oscilar\xe1 entre el valor m\xe1s bajo posible, que es el uso m\xe1ximo especificado, y el valor m\xe1s alto posible, que es el valor m\xe1s bajo posible multiplicador."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),"virtual cpu = [[maximum usage, maximum usage * multiplier]]\n")),Object(r.b)("p",null,"El l\xedmite de la CPU virtual se contraer\xe1 (expandir\xe1) mediante la ",Object(r.b)("inlineCode",{parentName:"p"},"relaci\xf3n de contrato (expandir) 'cuando la utilizaci\xf3n promedio est\xe9 por encima (debajo) del uso deseado, lo que significa que")," lo m\xe1ximo que una cuenta puede consumir durante los per\xedodos de inactividad es 1000x (multiplicador) ancho de banda se garantiza bajo congesti\xf3n."),Object(r.b)("p",null,"La utilizaci\xf3n promedio de la CPU se calcula utilizando un EMA (Promedio m\xf3vil exponencial) que otorga un mayor peso e importancia al uso m\xe1s reciente."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),"def update_elastic_limit(current_limit, average_usage, elastic_resource_limit) {\nresult = current_limit\nif average_usage > elastic_resource_limit.target:\n    result = result * elastic_resource_limit.contract_rate\nelse:\n    result = result * elastic_resource_limit.expand_rate\n\nreturn min(max(result, elastic_resource_limit.max), elastic_resource_limit.max * elastic_resource_limit.max_multiplier)\n")),Object(r.b)("h2",{id:"asignaci\xf3n-de-recursos-de-eos"},"Asignaci\xf3n de recursos de EOS"),Object(r.b)("figure",{class:"video_container"},Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/N6CTRdx6NVE",frameborder:"0",allowfullscreen:"true"}," ")))}u.isMDXComponent=!0}}]);
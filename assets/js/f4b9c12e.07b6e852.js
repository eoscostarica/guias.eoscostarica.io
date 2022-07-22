"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[462],{3905:function(e,a,o){o.d(a,{Zo:function(){return d},kt:function(){return m}});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},d=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return o?t.createElement(k,s(s({ref:a},d),{},{components:o})):t.createElement(k,s({ref:a},d))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=o[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3464:function(e,a,o){o.r(a),o.d(a,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var t=o(7462),n=o(3366),r=(o(7294),o(3905)),s=["components"],i={id:"componentes-eosio",title:"Componentes EOSIO",sidebar_label:"Componentes EOSIO",description:"Componentes EOSIO, explicacion de como funciona la cadena de bloques de EOS con distintos componentes",keywords:["componentes-eosio","Componentes EOSIO","blockchain","eos","eosio","eosio.io","EOS","EOS Costa Rica"]},l=void 0,c={unversionedId:"aprender-eosio/componentes-eosio",id:"aprender-eosio/componentes-eosio",title:"Componentes EOSIO",description:"Componentes EOSIO, explicacion de como funciona la cadena de bloques de EOS con distintos componentes",source:"@site/docs/aprender-eosio/componentes-eosio.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/componentes-eosio",permalink:"/docs/aprender-eosio/componentes-eosio",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/componentes-eosio.md",tags:[],version:"current",lastUpdatedBy:"Warner Hurtado Laguna",lastUpdatedAt:1658512708,formattedLastUpdatedAt:"22 jul 2022",frontMatter:{id:"componentes-eosio",title:"Componentes EOSIO",sidebar_label:"Componentes EOSIO",description:"Componentes EOSIO, explicacion de como funciona la cadena de bloques de EOS con distintos componentes",keywords:["componentes-eosio","Componentes EOSIO","blockchain","eos","eosio","eosio.io","EOS","EOS Costa Rica"]},sidebar:"docs",previous:{title:"Uso de Recursos",permalink:"/docs/aprender-eosio/uso-de-recursos"},next:{title:"Cuentas y Permisos",permalink:"/docs/aprender-eosio/cuentas-permisos"}},d={},p=[{value:"Nodeos",id:"nodeos",level:2},{value:"Cleos",id:"cleos",level:2},{value:"\xbfC\xf3mo utilizar Cleos?",id:"c\xf3mo-utilizar-cleos",level:3},{value:"Comandos Cleos",id:"comandos-cleos",level:3},{value:"Ejemplo Cleos",id:"ejemplo-cleos",level:3},{value:"EOSIO.CDT",id:"eosiocdt",level:2},{value:"Obtenga sus Llaves Privadas",id:"obtenga-sus-llaves-privadas",level:2},{value:"Empecemos",id:"empecemos",level:2},{value:"Instalaci\xf3n en Windows",id:"instalaci\xf3n-en-windows",level:3},{value:"Usar Terminal de Linux",id:"usar-terminal-de-linux",level:3},{value:"Instalar Binarios",id:"instalar-binarios",level:2}],u={toc:p};function m(e){var a=e.components,i=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"nodeos"},"Nodeos"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/nodeos/index"},"Nodeos")," es el daemon de servicio central que se ejecuta en cada nodo de EOSIO, puede ser configurado con plugins para ejecutar un nodo. Adem\xe1s, se conecta y sincroniza datos con otros nodos de la red a trav\xe9s de P2P. Puede ser configurado para procesar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contratos inteligentes."),(0,r.kt)("li",{parentName:"ul"},"Validar transacciones."),(0,r.kt)("li",{parentName:"ul"},"Producir bloques que contengan transacciones v\xe1lidas."),(0,r.kt)("li",{parentName:"ul"},"Confirmar bloques para registrarlos en el blockchain.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para m\xe1s informaci\xf3n visite ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramientas/opciones-configuracion-nodeos"},"Configuraci\xf3n Nodeos"))),(0,r.kt)("h2",{id:"cleos"},"Cleos"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/cleos/index"},"Cleos")," es una herramienta de l\xednea de comandos que interact\xfaa con Nodeos con una utilidad de billetera (Keosd) responsable de la gesti\xf3n de claves y la firma de transacciones. Los desarrolladores tambi\xe9n pueden utilizar cleos para desplegar y probar los contratos inteligentes de EOSIO."),(0,r.kt)("h3",{id:"c\xf3mo-utilizar-cleos"},"\xbfC\xf3mo utilizar Cleos?"),(0,r.kt)("p",null,"Para usar ",(0,r.kt)("strong",{parentName:"p"},"cleos"),", necesita el dominio o direcci\xf3n IP (y n\xfamero de puerto) de una instancia de ",(0,r.kt)("strong",{parentName:"p"},"nodeos")," en ejecuci\xf3n. La instancia de nodeos debe configurarse para cargar ",(0,r.kt)("inlineCode",{parentName:"p"},"eosio :: chain_api_plugin")," cuando se inicia. Esto permite que nodeos responda a las solicitudes de RPC que provienen de cleos."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/keosd/index"},"Keosd"),": es un daemon de servicio de administrador de claves para almacenar claves privadas y firmar mensajes digitales.")),(0,r.kt)("h3",{id:"comandos-cleos"},"Comandos Cleos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cleos --help\n$ cleos create --help\n$ cleos create account --help\n")),(0,r.kt)("h3",{id:"ejemplo-cleos"},"Ejemplo Cleos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cleos wallet create -n mywallet --to-console\n")),(0,r.kt)("p",null,"Para m\xe1s informaci\xf3n visite ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramientas/linea-de-comando"},"Linea de Comando")),(0,r.kt)("h2",{id:"eosiocdt"},"EOSIO.CDT"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.cdt/latest/index"},"EOSIO.CDT")," o ",(0,r.kt)("strong",{parentName:"p"},"Contract Development Toolkit")," es un\nkit de herramientas para WebAssembly(WASM) para facilitar el desarrollo de contratos inteligentes. Compilador de C++ a WASM y ","[",(0,r.kt)("strong",{parentName:"p"},"Application Binary Interface"),"]","((",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.cdt/latest/best-practices/abi/understanding-abi-files"},"https://developers.eos.io/manuals/eosio.cdt/latest/best-practices/abi/understanding-abi-files"),") (ABI) conjunto generador de bibliotecas C/C++ para el desarrollo de contratos inteligentes."),(0,r.kt)("h2",{id:"obtenga-sus-llaves-privadas"},"Obtenga sus Llaves Privadas"),(0,r.kt)("p",null,"M\xe1s informaci\xf3n sobre ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas"},"llaves privadas"),"."),(0,r.kt)("h2",{id:"empecemos"},"Empecemos"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagrama de cleos",src:o(1597).Z,width:"1400",height:"738"})),(0,r.kt)("h3",{id:"instalaci\xf3n-en-windows"},"Instalaci\xf3n en Windows"),(0,r.kt)("p",null,"Como una forma de ayudarlo a comenzar en el mundo EOSIO, aqu\xed hay una gu\xeda sobre c\xf3mo instalar el Kit de herramientas de desarrollo de contratos EOSIO. Si est\xe1 utilizando un sistema operativo diferente en lugar de ",(0,r.kt)("strong",{parentName:"p"},"Windows"),", visite la gu\xeda ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin"},"Configurar el entorno de desarrollo"),"\npara ver los requisitos previos y pasar a ",(0,r.kt)("a",{parentName:"p",href:"#instalar-binarios"},"Instalar binarios"),".\nEsta gu\xeda de instalaci\xf3n estar\xe1 dirigida a ",(0,r.kt)("strong",{parentName:"p"},"usuarios de Windows"),", desafortunadamente, EOSIO no proporciona puertos e instrucciones de PowerShell para este sistema operativo. Como desarrollador tienes dos opciones ",(0,r.kt)("em",{parentName:"p"},"una")," utilizar una M\xe1quina Virtual o, como en este caso un Terminal Linux en Windows. Siga estos pasos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vaya a su Panel de Control"),(0,r.kt)("li",{parentName:"ul"},"Vaya a Programas -> Programas y caracter\xedsticas"),(0,r.kt)("li",{parentName:"ul"},"A continuaci\xf3n, haz clic en ",(0,r.kt)("strong",{parentName:"li"},"Activar o desactivar caracter\xedsticas de Windows")),(0,r.kt)("li",{parentName:"ul"},"Busque la opci\xf3n y haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Subsistema de Windows para Linux")," y pulse ",(0,r.kt)("em",{parentName:"li"},"Aceptar")),(0,r.kt)("li",{parentName:"ul"},"Ahora debe reiniciar su sistema operativo Windows"),(0,r.kt)("li",{parentName:"ul"},"Por \xfaltimo, vaya a su ",(0,r.kt)("em",{parentName:"li"},"Microsoft Store")," y busque el sistema operativo Linux que desee, le recomendamos que instale Ubuntu 18.04 LTS")),(0,r.kt)("h3",{id:"usar-terminal-de-linux"},"Usar Terminal de Linux"),(0,r.kt)("p",null,'Le pedir\xe1 el nombre de usuario y la contrase\xf1a de UNIX, puede configurarlo como desee.\nEste es un ejemplo de navegaci\xf3n con un disco "C".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /mnt/c/\n")),(0,r.kt)("p",null,"Aqu\xed est\xe1 en su disco C donde puede ejecutar ",(0,r.kt)("inlineCode",{parentName:"p"},"$ ls -al"),' para ver sus archivos. El "nombre_de_usuario" es el usuario que tiene en su computadora.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ cd Users/"nombre_de_usuario"\n')),(0,r.kt)("p",null,"Una vez que est\xe9 en su carpeta deseada, puede seguir los siguientes pasos."),(0,r.kt)("h2",{id:"instalar-binarios"},"Instalar Binarios"),(0,r.kt)("p",null,"Esta gu\xeda utilizar\xe1 las l\xedneas de instalaci\xf3n de comandos de ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu 18.04"),". Para otros sistemas operativos y m\xe1s informaci\xf3n, vaya a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin"},"EOSIO Before You Begin"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Paso 1: Instalar Binarios"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ wget https://github.com/EOSIO/eos/releases/download/v2.0.0/eosio_2.0.0-1-ubuntu-18.04_amd64.deb\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt install ./eosio_2.0.0-1-ubuntu-18.04_amd64.deb\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Paso 2: Configurar un directorio de desarrollo"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ mkdir "su_nombre_de_directorio_de_desarrollo"\n$ cd "su_nombre_de_directorio_de_desarrollo"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Paso 3: Ingrese en su directorio local"))),(0,r.kt)("p",null,"Obtenga su ruta de directorio con ",(0,r.kt)("inlineCode",{parentName:"p"},"$ pwd"),", clone la versi\xf3n de EOSIO de ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/blob/master/README.md"},"GitHub")," en esa ruta de directorio."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone --recursive https://github.com/eosio/eosio.cdt --branch v1.6.3 --single-branch\n")),(0,r.kt)("p",null,"La clonaci\xf3n del repositorio puede tardar hasta 30 minutos. Despu\xe9s de eso, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$ cd eosio.cdt"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Paso 4: Construir el EOSIO.CDT"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./build.sh\n")),(0,r.kt)("p",null,"La instalaci\xf3n de eosio.cdt har\xe1 que el binario compilado sea global, por lo que puede ser accesible desde cualquier lugar. Para este tutorial, se recomienda encarecidamente que no omita el paso de instalaci\xf3n de eosio.cdt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo ./install.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para obtener m\xe1s informaci\xf3n sobre c\xf3mo instalar el contrato DEV. Kit de herramientas, vaya a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/install-the-CDT"},"esta p\xe1gina"),".")),(0,r.kt)("p",null,"Ahora est\xe1 listo para crear una billetera de desarrollo con la ayuda de Cleos. Para m\xe1s informaci\xf3n visite ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/create-development-wallet"},"Crear una Cartera de Desarrollo"),"."))}m.isMDXComponent=!0},1597:function(e,a,o){a.Z=o.p+"assets/images/cleos-3e2bc6a510e9d30e8c4937a9a9945c92.webp"}}]);
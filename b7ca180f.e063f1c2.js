(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),i=(t(0),t(136)),c=t(139),o={id:"publicacion-de-paquetes",title:"Publicaci\xf3n de Paquetes",sidebar_label:"Publicaci\xf3n de Paquetes"},l={unversionedId:"tutoriales/publicacion-de-paquetes",id:"tutoriales/publicacion-de-paquetes",isDocsHomePage:!1,title:"Publicaci\xf3n de Paquetes",description:"Publicaci\xf3n de Paquetes",source:"@site/docs/tutoriales/publicacion-de-paquetes.md",slug:"/tutoriales/publicacion-de-paquetes",permalink:"/docs/tutoriales/publicacion-de-paquetes",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/publicacion-de-paquetes.md",version:"current",lastUpdatedBy:"Xavier",lastUpdatedAt:1621891842,sidebar_label:"Publicaci\xf3n de Paquetes",sidebar:"docs",previous:{title:"Llaves de GitHub",permalink:"/docs/tutoriales/llaves-github"},next:{title:"Tutorial de flujo de trabajo de Git",permalink:"/docs/tutoriales/tutorial-flujo-trabajo-git"}},s=[{value:"Publicaci\xf3n de Paquetes",id:"publicaci\xf3n-de-paquetes",children:[]},{value:"Generaci\xf3n del Personal Access Token",id:"generaci\xf3n-del-personal-access-token",children:[]},{value:"Registro de Paquetes de Github",id:"registro-de-paquetes-de-github",children:[]},{value:"Autenticaci\xf3n Utilizando <code>npm login</code>",id:"autenticaci\xf3n-utilizando-npm-login",children:[]},{value:"Publicar un Paquete",id:"publicar-un-paquete",children:[]},{value:"Desplegar una Nueva Versi\xf3n del Paquete",id:"desplegar-una-nueva-versi\xf3n-del-paquete",children:[]},{value:"Instalar el Paquete Publicado",id:"instalar-el-paquete-publicado",children:[]},{value:"Referencias",id:"referencias",children:[]}],u={toc:s};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"publicaci\xf3n-de-paquetes"},"Publicaci\xf3n de Paquetes"),Object(i.b)("p",null,"La modularizaci\xf3n en el contexto del software es importante para la separaci\xf3n de c\xf3digo y archivos que tengan relevancia entre s\xed, as\xed como tambi\xe9n facilitar el consumo de m\xf3dulos que son comunes entre 2 o m\xe1s proyectos. Aunque existen distintos tipos de paquetes y formas de publicarlos, este tutorial se basa en la publicaci\xf3n de paquetes de NPM."),Object(i.b)("h2",{id:"generaci\xf3n-del-personal-access-token"},"Generaci\xf3n del Personal Access Token"),Object(i.b)("p",null,"Para poder publicar paquetes, es necesario generar un ",Object(i.b)("em",{parentName:"p"},"Personal Access Token")," o ",Object(i.b)("strong",{parentName:"p"},"Token de Acceso Personal"),". Este token puede ser generado al seguir los siguientes pasos:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Dir\xedjase a la opci\xf3n de ",Object(i.b)("strong",{parentName:"li"},"Ajustes")," o ",Object(i.b)("em",{parentName:"li"},"Settings"),Object(i.b)("p",{style:{align:"center"}},Object(i.b)("img",{src:Object(c.a)("/img/publicacion-de-paquetes/GoToSettings.png"),width:"100%"}))),Object(i.b)("li",{parentName:"ol"},"Una vez se se encuentra en el panel de configuraciones, presione el bot\xf3n ",Object(i.b)("em",{parentName:"li"},"Developer Settings")," o ",Object(i.b)("strong",{parentName:"li"},"Configuraciones de Desarrollador"),Object(i.b)("p",{style:{align:"center"}},Object(i.b)("img",{src:Object(c.a)("/img/publicacion-de-paquetes/DeveloperSettings.png"),width:"100%"}))),Object(i.b)("li",{parentName:"ol"},"Ahora, presione la opci\xf3n ",Object(i.b)("strong",{parentName:"li"},"Tokens de Acceso Personal")," o ",Object(i.b)("em",{parentName:"li"},"Personal Access Tokens"),Object(i.b)("p",{style:{align:"center"}},Object(i.b)("img",{src:Object(c.a)("/img/publicacion-de-paquetes/PersonalAccessToken.png"),width:"100%"}))),Object(i.b)("li",{parentName:"ol"},"Una vez presionada la anterior opci\xf3n, presione el bot\xf3n ",Object(i.b)("strong",{parentName:"li"},"Generar nuevo token")," o ",Object(i.b)("em",{parentName:"li"},"Generate new token"),Object(i.b)("p",{style:{align:"center"}},Object(i.b)("img",{src:Object(c.a)("/img/publicacion-de-paquetes/GenerateNewToken.png"),width:"100%"}))),Object(i.b)("li",{parentName:"ol"},"Ahora seleccioone el ",Object(i.b)("em",{parentName:"li"},"scope")," o ",Object(i.b)("strong",{parentName:"li"},"\xe1mbito")," adecuado para el token, como se muestra en la siguiente imagen",Object(i.b)("p",{style:{align:"center"}},Object(i.b)("img",{src:Object(c.a)("/img/publicacion-de-paquetes/TokenScope.png"),width:"100%"}))),Object(i.b)("li",{parentName:"ol"},"Finalmente, presione el bot\xf3n mostrado en la siguiente imagen (ubicado al final de la p\xe1gina) para obtener el token",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'<p style={{ align: "center" }}>\n  <img src={ useBaseUrl( \'/img/publicacion-de-paquetes/GenerateTokenButton.png\' )} width="100%" />\n</p>\n')),Object(i.b)("strong",{parentName:"li"},"El token se muestra una vez este es generado; proceda a copiarlo en un lugar seguro, ya que no se vuelve a mostrar."))),Object(i.b)("h2",{id:"registro-de-paquetes-de-github"},"Registro de Paquetes de Github"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Github Package Registry")," es un registro de paquetes que entre sus ventajas ofrece:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Manejo de las mismas credenciales que se utilizan en Github."),Object(i.b)("li",{parentName:"ul"},"Posibilidad de integraci\xf3n con ",Object(i.b)("em",{parentName:"li"},"Github Actions")," y ",Object(i.b)("em",{parentName:"li"},"Webhooks"),"."),Object(i.b)("li",{parentName:"ul"},"Paquetes privados que se mantienen dentro del mismo \xe1mbito o ",Object(i.b)("em",{parentName:"li"},"scope")," de la organizaci\xf3n.")),Object(i.b)("h2",{id:"autenticaci\xf3n-utilizando-npm-login"},"Autenticaci\xf3n Utilizando ",Object(i.b)("inlineCode",{parentName:"h2"},"npm login")),Object(i.b)("p",null,"Para autenticarse en el ",Object(i.b)("em",{parentName:"p"},"Github Registry")," es necesario utilizar el comando ",Object(i.b)("inlineCode",{parentName:"p"},"npm login")," de la siguiente manera:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ npm login --scope=@OWNER --registry=https://npm.pkg.github.com\n\n> Username: USERNAME\n> Password: TOKEN\n> Email: PUBLIC-EMAIL-ADDRESS\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Recuerda reemplazar USERNAME con el usuario de Github respectivo (el que cre\xf3 el ",Object(i.b)("em",{parentName:"p"},"Personal Access Token"),"), TOKEN con el ",Object(i.b)("em",{parentName:"p"},"Personal Access Token")," generado y el PUBLIC-EMAIL-ADDRESS con la direcci\xf3n de correo electr\xf3nico que corresponde al usuario.")),Object(i.b)("p",null,"Si desea autenticarse a\xf1adiendo su ",Object(i.b)("em",{parentName:"p"},"Personal Access Token")," al archivo ",Object(i.b)("inlineCode",{parentName:"p"},"~/.npmrc"),", puede dirigirse a la ",Object(i.b)("a",{parentName:"p",href:"https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages"},"documentaci\xf3n de github")," para mayor extensi\xf3n en este asunto."),Object(i.b)("h2",{id:"publicar-un-paquete"},"Publicar un Paquete"),Object(i.b)("p",null,"En el archivo ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," es necesario agregar un elemento m\xe1s llamado ",Object(i.b)("inlineCode",{parentName:"p"},"publishConfig"),", que hace referencia al registro donde se desea publicar el paquete."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edite el archivo ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," e incluya la entrada ",Object(i.b)("inlineCode",{parentName:"p"},"publishConfig")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-json"},'"publishConfig": {\n  "registry":"https://npm.pkg.github.com"\n}\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verifique si la entrada ",Object(i.b)("inlineCode",{parentName:"p"},"repository")," en el archivo ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," corresponde a la URL de repositorio. Por ejemplo si la URL del repositorio es ",Object(i.b)("inlineCode",{parentName:"p"},"github.com/my-org/test"),", entonces la entrada ",Object(i.b)("inlineCode",{parentName:"p"},"repository")," debe ser ",Object(i.b)("inlineCode",{parentName:"p"},"git://github.com/my-org/test.git"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Ahora ejecute el siguiente comando en la terminal para publicar el paquete"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ npm publish\n")))),Object(i.b)("h2",{id:"desplegar-una-nueva-versi\xf3n-del-paquete"},"Desplegar una Nueva Versi\xf3n del Paquete"),Object(i.b)("p",null,"A la hora publicar una nueva versi\xf3n, es necesario cambiar la entrada ",Object(i.b)("inlineCode",{parentName:"p"},"version")," en el archivo ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". Para esto se est\xe1 siguiendo el est\xe1ndar ",Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/about-semantic-versioning"},"Semantic Versioning")," de npm."),Object(i.b)("h2",{id:"instalar-el-paquete-publicado"},"Instalar el Paquete Publicado"),Object(i.b)("p",null,"Para instalar el paquete, es necesario ejecutar el siguiente c\xf3digo:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @scope/package-name\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Ten en cuenta que ",Object(i.b)("inlineCode",{parentName:"p"},"@scope")," se refiere al propietario (nombre de usuario o nombre de org) bajo el cual est\xe1 publicado el paquete.\nSi deseas instalar una versi\xf3n espec\xedfica del paquete, es necesario ejecutar el comando: ",Object(i.b)("inlineCode",{parentName:"p"},"yarn add @scope/package-name@versionhere"))),Object(i.b)("h2",{id:"referencias"},"Referencias"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages"},"Configuring npm for use with GitHub Packages")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mugan86.medium.com/crear-y-publicar-nuestro-primer-paquete-en-github-package-registry-9f229bd365bc"},"Crear y publicar nuestro primer paquete en Github Package Registry")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.npmjs.com/about-semantic-versioning"},"Semantic Versioning"))))}p.isMDXComponent=!0},136:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=u(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return t?r.a.createElement(m,o(o({ref:a},s),{},{components:t})):r.a.createElement(m,o({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},139:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return c}));var n=t(22),r=t(140);function i(){var e=Object(n.default)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,t=void 0===a?"/":a,i=e.url;return{withBaseUrl:function(e,a){return function(e,a,t,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,s=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(o)return a+t;var u=t.startsWith(a)?t:a+t.replace(/^\//,"");return s?e+u:u}(i,t,e,a)}}}function c(e,a){return void 0===a&&(a={}),(0,i().withBaseUrl)(e,a)}},140:function(e,a,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}))}}]);
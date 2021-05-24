(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),i=r(7),n=(r(0),r(136)),o=r(139),c={id:"guia-github",title:"Gu\xeda GitHub",sidebar_label:"Gu\xeda GitHub"},b={unversionedId:"tutoriales/guia-github",id:"tutoriales/guia-github",isDocsHomePage:!1,title:"Gu\xeda GitHub",description:"GitHub es un sistema de gesti\xf3n de proyectos en la nube que permite a los desarrolladores almacenar y tener un control de versiones de c\xf3digo. Esta plataforma te permite trabajar en colaboraci\xf3n con otras personas alrededor del mundo, realizar seguimientos de trabajos y administrar proyectos. Conoce m\xe1s de GitHub.",source:"@site/docs/tutoriales/guia-github.md",slug:"/tutoriales/guia-github",permalink:"/docs/tutoriales/guia-github",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/guia-github.md",version:"current",lastUpdatedBy:"Xavier",lastUpdatedAt:1621891842,sidebar_label:"Gu\xeda GitHub",sidebar:"docs",previous:{title:"GraphQL",permalink:"/docs/tutoriales/graphql"},next:{title:"Gu\xeda Markdown",permalink:"/docs/tutoriales/guia-markdown"}},l=[{value:"<strong>Herramientas</strong>",id:"herramientas",children:[{value:"GitHub CLI",id:"github-cli",children:[]},{value:"GitHub Desktop",id:"github-desktop",children:[]},{value:"GitHub para m\xf3viles",id:"github-para-m\xf3viles",children:[]},{value:"Git Bash",id:"git-bash",children:[]},{value:"Hub",id:"hub",children:[]},{value:"Git-extras",id:"git-extras",children:[]}]},{value:"<strong>Comandos</strong>",id:"comandos",children:[{value:"Iniciar Repositorio",id:"iniciar-repositorio",children:[]},{value:"Ramas",id:"ramas",children:[]},{value:"Subir Cambios",id:"subir-cambios",children:[]},{value:"Fork",id:"fork",children:[]},{value:"Otros Comandos",id:"otros-comandos",children:[]}]}],s={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github"},"GitHub")," es un sistema de gesti\xf3n de proyectos en la nube que permite a los desarrolladores almacenar y tener un control de versiones de c\xf3digo. Esta plataforma te permite trabajar en colaboraci\xf3n con otras personas alrededor del mundo, realizar seguimientos de trabajos y administrar proyectos. ",Object(n.b)("a",{parentName:"p",href:"https://www.xataka.com/basics/que-github-que-que-le-ofrece-a-desarrolladores"},"Conoce m\xe1s de GitHub"),"."),Object(n.b)("p",null,"Para EOS Costa Rica, es de suma importancia que nuestros colaboradores se familiaricen con esta herramienta, por lo que les ofrecemos a continuaci\xf3n una gu\xeda base para empezar en el mundo de GitHub."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"herramientas"},Object(n.b)("strong",{parentName:"h2"},"Herramientas")),Object(n.b)("h3",{id:"github-cli"},Object(n.b)("a",{parentName:"h3",href:"https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-cli"},"GitHub CLI")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://cli.github.com"},"CLI")," de GitHub es una herramienta de l\xednea de comandos para utilizar la funciones de GitHub en su propia computadora."),Object(n.b)("img",{alt:"Imagen GitHub CLI",src:Object(o.a)("img/LogosGitHub/GitHub-CLI.png")}),Object(n.b)("h3",{id:"github-desktop"},Object(n.b)("a",{parentName:"h3",href:"https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-desktop"},"GitHub Desktop")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://docs.github.com/es/free-pro-team@latest/desktop/installing-and-configuring-github-desktop/installing-github-desktop"},"GitHub Desktop")," es la aplicaci\xf3n de escritorio que permite interactuar al usuario con las funcionalidades de Github por medio de la interfaz gr\xe1fica, remplazando las l\xedneas de c\xf3digo por un dispositivo visual."),Object(n.b)("img",{alt:"Imagen GitHub Desktop",src:Object(o.a)("img/LogosGitHub/GitHub-Desktop.png")}),Object(n.b)("h3",{id:"github-para-m\xf3viles"},Object(n.b)("a",{parentName:"h3",href:"https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-for-mobile"},"GitHub para m\xf3viles")),Object(n.b)("p",null,"GitHub para ",Object(n.b)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.github.android&hl=es_419&gl=US"},"dispositivos m\xf3viles")," est\xe1 disponible para Android e iOS, te ofrece una forma de realizar un trabajo de alto impacto en GitHub de forma r\xe1pida y desde cualquier lugar. Adem\xe1s se vuelve una manera segura y estable de acceder a los datos de GitHub a trav\xe9s de una aplicaci\xf3n cliente confiable de primera parte."),Object(n.b)("img",{alt:"Imagen GitHub M\xf3vil",src:Object(o.a)("img/LogosGitHub/GitHub-Movil.png")}),Object(n.b)("h3",{id:"git-bash"},Object(n.b)("a",{parentName:"h3",href:"https://desarrolloweb.com/articulos/entiende-instala-configura-git.html#:~:text=Git%20Bash%20es%20la%20l%C3%ADnea,para%20usar%20Git%20en%20Windows."},"Git Bash")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://gitforwindows.org"},"Git Bash")," es una aplicaci\xf3n de Git para Windows, donde permite trabajar por medio de l\xedneas de comando el manejo de proyectos que se encuentran en GitHub."),Object(n.b)("img",{alt:"Imagen Git Bash",src:Object(o.a)("img/LogosGitHub/GitHub-Bash.png")}),Object(n.b)("h3",{id:"hub"},Object(n.b)("a",{parentName:"h3",href:"https://hub.github.com"},"Hub")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/github/hub"},"Hub")," es una extensi\xf3n de l\xednea de comandos de git, que te ayuda a realizar las tareas diarias de GitHub sin tener que salir de la terminal."),Object(n.b)("h3",{id:"git-extras"},Object(n.b)("a",{parentName:"h3",href:"https://www.mankier.com/1/git-extras"},"Git-extras")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/tj/git-extras"},"Git-extras")," repo aloja m\xe1s de 60 scripts que se suman a la funcionalidad b\xe1sica de Git. M\xe1s informaci\xf3n sobre ",Object(n.b)("a",{parentName:"p",href:"https://github.com/tj/git-extras/blob/master/Commands.md"},"Comandos"),"."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"comandos"},Object(n.b)("strong",{parentName:"h2"},"Comandos")),Object(n.b)("h3",{id:"iniciar-repositorio"},"Iniciar Repositorio"),Object(n.b)("p",null,"Crear un directorio nuevo."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"}," git init\n")),Object(n.b)("p",null,"Clonar un repositorio existente."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git clone <url>\n")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://dominicode.com/git-como-empezar/#:~:text=Para%20iniciar%20tu%20primer%20proyecto,ejecuta%20el%20comando%20git%20init%20.&text=Deber%C3%ADas%20tener%20un%20mensaje%20de,la%20carpeta%20no%20ver%C3%A1s%20nada."},"M\xe1s informaci\xf3n"),"."),Object(n.b)("h3",{id:"ramas"},"Ramas"),Object(n.b)("p",null,"Lista las ramas existentes."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git branch \n")),Object(n.b)("p",null,"Crear nueva rama."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git branch <nombre de la nueva rama> \n")),Object(n.b)("p",null,"Crear nueva rama y cambiarse a ella."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git branch -m <nombre de la nueva rama>\ngit checkout -b <nombre de la nueva rama>\n")),Object(n.b)("p",null,"Cambiar de rama."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git checkout <nombre de la rama> \n")),Object(n.b)("p",null,"Borrar una rama."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git branch -d <nombre de la rama> \n")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://git-scm.com/book/es/v2/Ramificaciones-en-Git-Gesti%C3%B3n-de-Ramas"},"M\xe1s informaci\xf3n"),"."),Object(n.b)("h3",{id:"subir-cambios"},"Subir Cambios"),Object(n.b)("p",null,"Actualizar tu repositorio local."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git pull\n")),Object(n.b)("p",null,"A\xf1adir un archivo al repositorio."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git add <nombre archivo>\n")),Object(n.b)("p",null,"A\xf1adir todos los archivos al repositorio."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git add .\n")),Object(n.b)("p",null,"A\xf1adir todos los archivos omitiendo los nuevos."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git add --all\n")),Object(n.b)("p",null,"A\xf1adir todos los archivos dentro de un directorio."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git add <url> \n")),Object(n.b)("p",null,"Realizar el commit de los cambios."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'git commit -m <"titulo del commit"> \n')),Object(n.b)("p",null,"Subir cambios al repositorio."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git push origin <nombre de la rama> \n")),Object(n.b)("p",null,"Fusionar otra rama a la actual."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git merge <nombre de la rama> \n")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://rogerdudler.github.io/git-guide/index.es.html"},"M\xe1s informaci\xf3n"),"."),Object(n.b)("h3",{id:"fork"},"Fork"),Object(n.b)("p",null,"Descargar remote de un fork"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git remote add upstream <url>\n")),Object(n.b)("p",null,"Hacer merge con master"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git fetch upstream\ngit merge upstream/master \n")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://aprendegit.com/fork-de-repositorios-para-que-sirve/"},"M\xe1s informaci\xf3n"),"."),Object(n.b)("h3",{id:"otros-comandos"},"Otros Comandos"),Object(n.b)("p",null,"Revisar logs de los commits."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git log\n")),Object(n.b)("p",null,"Mostrar cambios realizados a un archivo."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git diff \n")),Object(n.b)("p",null,"Sacar archivo de un commit."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git reset HEAD <archivo> \n")),Object(n.b)("p",null,"Agregar repositorio remoto."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git remote set-url origin <url> \n")),Object(n.b)("p",null,"Mostrar lista de repositorios."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git renite -v \n")),Object(n.b)("p",null,"Mostrar estado actual del repositorio."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git status \n")),Object(n.b)("p",null,"Verificar cambios en el repositorio online con el local."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git fetch \n")),Object(n.b)("p",null,"Borrar archivo del repositorio."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"git rm <archivo> \n")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://gist.github.com/dasdo/9ff71c5c0efa037441b6"},"M\xe1s informaci\xf3n"),"."))}u.isMDXComponent=!0},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||n;return r?i.a.createElement(m,c(c({ref:t},l),{},{components:r})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<n;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},139:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var a=r(22),i=r(140);function n(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var n=void 0===a?{}:a,o=n.forcePrependBaseUrl,c=void 0!==o&&o,b=n.absolute,l=void 0!==b&&b;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(n,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,n().withBaseUrl)(e,t)}},140:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}))}}]);
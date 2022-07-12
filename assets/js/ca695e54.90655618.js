"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[260],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(g,n(n({ref:t},p),{},{components:a})):r.createElement(g,n({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var u=2;u<o;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7598:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=a(7462),i=a(3366),o=(a(7294),a(3905)),n=a(4996),l=["components"],s={id:"guia-github",title:"Gu\xeda GitHub",sidebar_label:"Gu\xeda GitHub",description:"Definici\xf3n y uso de controlador de versiones en GitHub",keywords:["GitHub","Git","versiones","controlador","controladores","controlador de versiones","Qu\xe9 es GitHub","C\xf3mo usar Github"]},u=void 0,p={unversionedId:"tutoriales/guia-github",id:"tutoriales/guia-github",title:"Gu\xeda GitHub",description:"Definici\xf3n y uso de controlador de versiones en GitHub",source:"@site/docs/tutoriales/guia-github.md",sourceDirName:"tutoriales",slug:"/tutoriales/guia-github",permalink:"/docs/tutoriales/guia-github",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/guia-github.md",tags:[],version:"current",lastUpdatedBy:"Warner Hurtado Laguna",lastUpdatedAt:1657669580,formattedLastUpdatedAt:"12/7/2022",frontMatter:{id:"guia-github",title:"Gu\xeda GitHub",sidebar_label:"Gu\xeda GitHub",description:"Definici\xf3n y uso de controlador de versiones en GitHub",keywords:["GitHub","Git","versiones","controlador","controladores","controlador de versiones","Qu\xe9 es GitHub","C\xf3mo usar Github"]},sidebar:"docs",previous:{title:"GraphQL",permalink:"/docs/tutoriales/graphql"},next:{title:"Guia Markdown",permalink:"/docs/tutoriales/guia-markdown"}},c={},d=[{value:"<strong>Herramientas</strong>",id:"herramientas",level:2},{value:"GitHub CLI",id:"github-cli",level:3},{value:"GitHub Desktop",id:"github-desktop",level:3},{value:"GitHub para m\xf3viles",id:"github-para-m\xf3viles",level:3},{value:"Git Bash",id:"git-bash",level:3},{value:"Hub",id:"hub",level:3},{value:"Git-extras",id:"git-extras",level:3},{value:"<strong>Comandos</strong>",id:"comandos",level:2},{value:"Iniciar Repositorio",id:"iniciar-repositorio",level:3},{value:"Ramas",id:"ramas",level:3},{value:"Subir Cambios",id:"subir-cambios",level:3},{value:"Fork",id:"fork",level:3},{value:"Otros Comandos",id:"otros-comandos",level:3}],m={toc:d};function g(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/es/"},"GitHub")," es un sistema de gesti\xf3n de proyectos en la nube que permite a los desarrolladores almacenar y tener un control de versiones de c\xf3digo. Esta plataforma te permite trabajar en colaboraci\xf3n con otras personas alrededor del mundo, realizar seguimientos de trabajos y administrar proyectos. ",(0,o.kt)("a",{parentName:"p",href:"https://www.xataka.com/basics/que-github-que-que-le-ofrece-a-desarrolladores"},"Conoce m\xe1s de GitHub"),"."),(0,o.kt)("p",null,"Para EOS Costa Rica, es de suma importancia que nuestros colaboradores se familiaricen con esta herramienta, por lo que les ofrecemos a continuaci\xf3n una gu\xeda base para empezar en el mundo de GitHub."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"herramientas"},(0,o.kt)("strong",{parentName:"h2"},"Herramientas")),(0,o.kt)("h3",{id:"github-cli"},(0,o.kt)("a",{parentName:"h3",href:"https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-cli"},"GitHub CLI")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cli.github.com"},"CLI")," de GitHub es una herramienta de l\xednea de comandos para utilizar la funciones de GitHub en su propia computadora."),(0,o.kt)("img",{alt:"Imagen GitHub CLI",src:(0,n.Z)("img/LogosGitHub/GitHub-CLI.png")}),(0,o.kt)("h3",{id:"github-desktop"},(0,o.kt)("a",{parentName:"h3",href:"https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-desktop"},"GitHub Desktop")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/es/free-pro-team@latest/desktop/installing-and-configuring-github-desktop/installing-github-desktop"},"GitHub Desktop")," es la aplicaci\xf3n de escritorio que permite interactuar al usuario con las funcionalidades de Github por medio de la interfaz gr\xe1fica, remplazando las l\xedneas de c\xf3digo por un dispositivo visual."),(0,o.kt)("img",{alt:"Imagen GitHub Desktop",src:(0,n.Z)("img/LogosGitHub/GitHub-Desktop.png")}),(0,o.kt)("h3",{id:"github-para-m\xf3viles"},(0,o.kt)("a",{parentName:"h3",href:"https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-for-mobile"},"GitHub para m\xf3viles")),(0,o.kt)("p",null,"GitHub para ",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.github.android&hl=es_419&gl=US"},"dispositivos m\xf3viles")," est\xe1 disponible para Android e iOS, te ofrece una forma de realizar un trabajo de alto impacto en GitHub de forma r\xe1pida y desde cualquier lugar. Adem\xe1s se vuelve una manera segura y estable de acceder a los datos de GitHub a trav\xe9s de una aplicaci\xf3n cliente confiable de primera parte."),(0,o.kt)("img",{alt:"Imagen GitHub M\xf3vil",src:(0,n.Z)("img/LogosGitHub/GitHub-Movil.png")}),(0,o.kt)("h3",{id:"git-bash"},(0,o.kt)("a",{parentName:"h3",href:"https://desarrolloweb.com/articulos/entiende-instala-configura-git.html#:~:text=Git%20Bash%20es%20la%20l%C3%ADnea,para%20usar%20Git%20en%20Windows."},"Git Bash")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gitforwindows.org"},"Git Bash")," es una aplicaci\xf3n de Git para Windows, donde permite trabajar por medio de l\xedneas de comando el manejo de proyectos que se encuentran en GitHub."),(0,o.kt)("img",{alt:"Imagen Git Bash",src:(0,n.Z)("img/LogosGitHub/GitHub-Bash.png")}),(0,o.kt)("h3",{id:"hub"},(0,o.kt)("a",{parentName:"h3",href:"https://hub.github.com"},"Hub")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/github/hub"},"Hub")," es una extensi\xf3n de l\xednea de comandos de git, que te ayuda a realizar las tareas diarias de GitHub sin tener que salir de la terminal."),(0,o.kt)("h3",{id:"git-extras"},(0,o.kt)("a",{parentName:"h3",href:"https://www.mankier.com/1/git-extras"},"Git-extras")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tj/git-extras"},"Git-extras")," repo aloja m\xe1s de 60 scripts que se suman a la funcionalidad b\xe1sica de Git. M\xe1s informaci\xf3n sobre ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tj/git-extras/blob/master/Commands.md"},"Comandos"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"comandos"},(0,o.kt)("strong",{parentName:"h2"},"Comandos")),(0,o.kt)("h3",{id:"iniciar-repositorio"},"Iniciar Repositorio"),(0,o.kt)("p",null,"Crear un directorio nuevo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," git init\n")),(0,o.kt)("p",null,"Clonar un repositorio existente."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone <url>\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dominicode.com/git-como-empezar/#:~:text=Para%20iniciar%20tu%20primer%20proyecto,ejecuta%20el%20comando%20git%20init%20.&text=Deber%C3%ADas%20tener%20un%20mensaje%20de,la%20carpeta%20no%20ver%C3%A1s%20nada."},"M\xe1s informaci\xf3n"),"."),(0,o.kt)("h3",{id:"ramas"},"Ramas"),(0,o.kt)("p",null,"Lista las ramas existentes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git branch \n")),(0,o.kt)("p",null,"Crear nueva rama."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git branch <nombre de la nueva rama> \n")),(0,o.kt)("p",null,"Crear nueva rama y cambiarse a ella."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git branch -m <nombre de la nueva rama>\ngit checkout -b <nombre de la nueva rama>\n")),(0,o.kt)("p",null,"Cambiar de rama."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git checkout <nombre de la rama> \n")),(0,o.kt)("p",null,"Borrar una rama."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git branch -d <nombre de la rama> \n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/book/es/v2/Ramificaciones-en-Git-Gesti%C3%B3n-de-Ramas"},"M\xe1s informaci\xf3n"),"."),(0,o.kt)("h3",{id:"subir-cambios"},"Subir Cambios"),(0,o.kt)("p",null,"Actualizar tu repositorio local."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git pull\n")),(0,o.kt)("p",null,"A\xf1adir un archivo al repositorio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git add <nombre archivo>\n")),(0,o.kt)("p",null,"A\xf1adir todos los archivos al repositorio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git add .\n")),(0,o.kt)("p",null,"A\xf1adir todos los archivos omitiendo los nuevos."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git add --all\n")),(0,o.kt)("p",null,"A\xf1adir todos los archivos dentro de un directorio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git add <url> \n")),(0,o.kt)("p",null,"Realizar el commit de los cambios."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'git commit -m <"titulo del commit"> \n')),(0,o.kt)("p",null,"Subir cambios al repositorio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git push origin <nombre de la rama> \n")),(0,o.kt)("p",null,"Fusionar otra rama a la actual."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git merge <nombre de la rama> \n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://rogerdudler.github.io/git-guide/index.es.html"},"M\xe1s informaci\xf3n"),"."),(0,o.kt)("h3",{id:"fork"},"Fork"),(0,o.kt)("p",null,"Descargar remote de un fork"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git remote add upstream <url>\n")),(0,o.kt)("p",null,"Hacer merge con master"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git fetch upstream\ngit merge upstream/master \n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://aprendegit.com/fork-de-repositorios-para-que-sirve/"},"M\xe1s informaci\xf3n"),"."),(0,o.kt)("h3",{id:"otros-comandos"},"Otros Comandos"),(0,o.kt)("p",null,"Revisar logs de los commits."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git log\n")),(0,o.kt)("p",null,"Mostrar cambios realizados a un archivo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git diff \n")),(0,o.kt)("p",null,"Sacar archivo de un commit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git reset HEAD <archivo> \n")),(0,o.kt)("p",null,"Agregar repositorio remoto."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git remote set-url origin <url> \n")),(0,o.kt)("p",null,"Mostrar lista de repositorios."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git renite -v \n")),(0,o.kt)("p",null,"Mostrar estado actual del repositorio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git status \n")),(0,o.kt)("p",null,"Verificar cambios en el repositorio online con el local."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git fetch \n")),(0,o.kt)("p",null,"Borrar archivo del repositorio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git rm <archivo> \n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/dasdo/9ff71c5c0efa037441b6"},"M\xe1s informaci\xf3n"),"."))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[5337],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,b=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?o.createElement(b,n(n({ref:t},s),{},{components:r})):o.createElement(b,n({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,n[1]=u;for(var c=2;c<i;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1869:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var o=r(7462),a=r(3366),i=(r(7294),r(3905)),n=["components"],u={id:"tutorial-flujo-trabajo-git",title:"Tutorial de flujo de trabajo de Git",sidebar_label:"Flujo de Trabajo de Git",description:"Flujo de trabajo de EOS Costa Rica con Github",keywords:["github","git","gitflow","gitflow-eos","gitflow-eos-costa-rica","flujo git"]},l=void 0,c={unversionedId:"tutoriales/tutorial-flujo-trabajo-git",id:"tutoriales/tutorial-flujo-trabajo-git",title:"Tutorial de flujo de trabajo de Git",description:"Flujo de trabajo de EOS Costa Rica con Github",source:"@site/docs/tutoriales/tutorial-flujo-trabajo-git.md",sourceDirName:"tutoriales",slug:"/tutoriales/tutorial-flujo-trabajo-git",permalink:"/docs/tutoriales/tutorial-flujo-trabajo-git",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/tutorial-flujo-trabajo-git.md",tags:[],version:"current",lastUpdatedBy:"Warner Hurtado Laguna",lastUpdatedAt:1657669580,formattedLastUpdatedAt:"12/7/2022",frontMatter:{id:"tutorial-flujo-trabajo-git",title:"Tutorial de flujo de trabajo de Git",sidebar_label:"Flujo de Trabajo de Git",description:"Flujo de trabajo de EOS Costa Rica con Github",keywords:["github","git","gitflow","gitflow-eos","gitflow-eos-costa-rica","flujo git"]},sidebar:"docs",previous:{title:"Publicaci\xf3n de Paquetes",permalink:"/docs/tutoriales/publicacion-de-paquetes"},next:{title:"React JS",permalink:"/docs/tutoriales/tutorial-react"}},s={},d=[{value:"Tutorial de Flujo de Trabajo de Git",id:"tutorial-de-flujo-de-trabajo-de-git",level:2}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,n);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tutorial-de-flujo-de-trabajo-de-git"},"Tutorial de Flujo de Trabajo de Git"),(0,i.kt)("p",null,"En este tutorial, explicamos paso a paso c\xf3mo programar un proyecto de c\xf3digo abierto usando la plataforma ",(0,i.kt)("strong",{parentName:"p"},"GitHub"),". Este es un repositorio con acceso a diversas funciones y herramientas para el desarrollo y administraci\xf3n de proyectos."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GitHub")," contiene una funci\xf3n llamada ",(0,i.kt)("inlineCode",{parentName:"p"},"forking"),", que le permite copiar un repositorio de otra cuenta y solicitar acceso para modificarlo en la cuenta del usuario. En caso de que el usuario decida hacer cambios para compartir, puede enviar una notificaci\xf3n al propietario original del repositorio llamada ",(0,i.kt)("inlineCode",{parentName:"p"},"pull request"),". De esta forma, puedes unificar los cambios con el repositorio original, esto se llama ",(0,i.kt)("inlineCode",{parentName:"p"},"merge"),"."),(0,i.kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/K33cFzHWBt0",frameborder:"0",allowfullscreen:"true"}))}f.isMDXComponent=!0}}]);
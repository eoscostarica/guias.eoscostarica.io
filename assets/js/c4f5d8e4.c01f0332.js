"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[4195],{1749:function(e,t,n){var a=n(5987),o=n(7462),i=n(7294),r=n(6010),c=n(5557),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=i.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,m=e.classes,d=e.className,g=e.component,u=void 0===g?"div":g,f=e.container,p=void 0!==f&&f,h=e.direction,E=void 0===h?"row":h,v=e.item,x=void 0!==v&&v,b=e.justify,y=e.justifyContent,S=void 0===y?"flex-start":y,Z=e.lg,N=void 0!==Z&&Z,w=e.md,C=void 0!==w&&w,j=e.sm,k=void 0!==j&&j,z=e.spacing,F=void 0===z?0:z,I=e.wrap,O=void 0===I?"wrap":I,M=e.xl,B=void 0!==M&&M,P=e.xs,T=void 0!==P&&P,R=e.zeroMinWidth,W=void 0!==R&&R,A=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=(0,r.Z)(m.root,d,p&&[m.container,0!==F&&m["spacing-xs-".concat(String(F))]],x&&m.item,W&&m.zeroMinWidth,"row"!==E&&m["direction-xs-".concat(String(E))],"wrap"!==O&&m["wrap-xs-".concat(String(O))],"stretch"!==l&&m["align-items-xs-".concat(String(l))],"stretch"!==c&&m["align-content-xs-".concat(String(c))],"flex-start"!==(b||S)&&m["justify-content-xs-".concat(String(b||S))],!1!==T&&m["grid-xs-".concat(String(T))],!1!==k&&m["grid-sm-".concat(String(k))],!1!==C&&m["grid-md-".concat(String(C))],!1!==N&&m["grid-lg-".concat(String(N))],!1!==B&&m["grid-xl-".concat(String(B))]);return i.createElement(u,(0,o.Z)({className:D,ref:t},A))})),g=(0,c.Z)((function(e){return(0,o.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var o=e.spacing(a);0!==o&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(m(o,2)),width:"calc(100% + ".concat(m(o),")"),"& > $item":{padding:m(o,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,o.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.Z=g},5299:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a=n(7294),o=n(9652),i=n(2949),r=n(2263),c=n(4996),s=n(1749),l=n(2472),m=n(7462),d=n(5987),g=n(6010),u=n(9895),f=n(5557),p=a.forwardRef((function(e,t){var n=e.classes,o=e.className,i=e.raised,r=void 0!==i&&i,c=(0,d.Z)(e,["classes","className","raised"]);return a.createElement(u.Z,(0,m.Z)({className:(0,g.Z)(n.root,o),elevation:r?8:1,ref:t},c))})),h=(0,f.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(p),E=n(2707),v=n(8060);var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,E.Z)(e,(0,m.Z)({defaultTheme:v.Z},t))},b=a.forwardRef((function(e,t){var n=e.disableSpacing,o=void 0!==n&&n,i=e.classes,r=e.className,c=(0,d.Z)(e,["disableSpacing","classes","className"]);return a.createElement("div",(0,m.Z)({className:(0,g.Z)(i.root,r,!o&&i.spacing),ref:t},c))})),y=(0,f.Z)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(b),S=a.forwardRef((function(e,t){var n=e.classes,o=e.className,i=e.component,r=void 0===i?"div":i,c=(0,d.Z)(e,["classes","className","component"]);return a.createElement(r,(0,m.Z)({className:(0,g.Z)(n.root,o),ref:t},c))})),Z=(0,f.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(S),N=["video","audio","picture","iframe","img"],w=a.forwardRef((function(e,t){var n=e.children,o=e.classes,i=e.className,r=e.component,c=void 0===r?"div":r,s=e.image,l=e.src,u=e.style,f=(0,d.Z)(e,["children","classes","className","component","image","src","style"]),p=-1!==N.indexOf(c),h=!p&&s?(0,m.Z)({backgroundImage:'url("'.concat(s,'")')},u):u;return a.createElement(c,(0,m.Z)({className:(0,g.Z)(o.root,i,p&&o.media,-1!=="picture img".indexOf(c)&&o.img),ref:t,style:h,src:p?s||l:void 0},f),n)})),C=(0,f.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(w),j=n(2318),k=x({heroButton:{width:131,height:50,fontFamily:"PT Sans",fontSize:14.8,border:"none",lineHeight:1.8,letterSpacing:1.25,margin:"auto",backgroundColor:"#3EBBD3"},card:{backgroundColor:"#FFFFFF"},cardmedia:{height:194},imgcard:{display:"block",width:150,margin:"auto"},overline:{fontFamily:"PT Sans",fontSize:12.7},title:{fontFamily:"PT Sans",fontSize:21.1,fontWeight:"bold"},body:{fontFamily:"Open Sans",fontSize:13.8},button:{fontFamily:"PT Sans",fontSize:14.8,border:"none",lineHeight:1.8,letterSpacing:1.25,margin:"auto"},media:{objectFit:"cover",objectPosition:"bottom",height:140}}),z=x({heroButton:{width:131,height:50,fontFamily:"PT Sans",fontSize:14.8,border:"none",lineHeight:1.8,letterSpacing:1.25,margin:"auto",backgroundColor:"#3EBBD3"},card:{backgroundColor:"#242526"},cardmedia:{height:194},imgcard:{display:"block",width:150,margin:"auto",filter:"brightness(0) invert(1)"},overline:{fontFamily:"PT Sans",fontSize:12.7,color:"#E9E9E9"},title:{fontFamily:"PT Sans",fontSize:21.1,fontWeight:"bold",color:"#E9E9E9"},body:{fontFamily:"Open Sans",fontSize:13.8,color:"#E9E9E9"},button:{fontFamily:"PT Sans",fontSize:14.8,border:"none",lineHeight:1.8,letterSpacing:1.25,margin:"auto",color:"#E9E9E9"},media:{height:140}}),F=function(){var e=["/img/hero-images/heroe.png"],t=e[Math.floor(Math.random()*e.length)],n=null;return n=(0,i.I)().isDarkTheme?z():k(),a.createElement("div",{className:" hero-header"},a.createElement("img",{className:"hero-img",src:(0,c.Z)(t)}),a.createElement("div",{className:"hero-content"},a.createElement("div",{className:"title-container"},a.createElement("h1",{className:"EOS-Costa-Rica-Devel text-style-1 "},"EOS Costa Rica"),a.createElement("h1",{className:"EOS-Costa-Rica-Devel"},"GU\xcdAS GENERALES")),a.createElement("div",{className:"intro-container"},a.createElement("p",{className:"intro-text"},"Le damos la bienvenida a nuestro portal de aprendizaje de c\xf3digo abierto. Comience su viaje para aprender sobre la tecnolog\xeda blockchain y todo lo que la hace posible.")),a.createElement("div",{className:"buttons-intro-container"},a.createElement(l.Z,{className:n.heroButton,href:"/docs/cultura-ingenieril"},"EMPEZAR"))))},I=function(e){var t=null;return t=(0,i.I)().isDarkTheme?z():k(),a.createElement(h,{className:"cardroot "+t.card,variant:"outlined"},a.createElement("div",{className:"card-img-container"},a.createElement("img",{src:(0,c.Z)(e.img),className:t.imgcard,loading:"lazy"})),a.createElement(Z,null,a.createElement(j.Z,{className:t.overline,gutterBottom:!0},"SECCI\xd3N"),a.createElement(j.Z,{className:t.title,gutterBottom:!0,variant:"h5",component:"h2"},e.title),a.createElement(j.Z,{className:t.body,variant:"body2",component:"p"},e.body)),a.createElement(y,null,a.createElement(l.Z,{className:t.button,href:e.href},"Leer M\xe1s")))},O=function(){return a.createElement("div",{className:"container section-container"},a.createElement("h1",{className:"section-title"},"Empiece con estos recursos"),a.createElement(s.Z,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2},a.createElement(s.Z,{item:!0,xs:12,sm:12,md:4},a.createElement(I,{title:"Guias generales",body:"Gu\xedas generales para el desarrollo en c\xf3digo abierto.",href:"/docs/pautas-para-codigo-abierto",img:"/img/cards-icons/guidelines.svg"})),a.createElement(s.Z,{item:!0,xs:12,sm:12,md:4},a.createElement(I,{title:"Aprender EOSIO",body:"Recursos y informaci\xf3n para el aprendizaje del protocolo EOSIO.",href:"/docs/aprender-eosio/protocolo-eosio",img:"/img/cards-icons/icons-eosio.svg"})),a.createElement(s.Z,{item:!0,xs:12,sm:12,md:4},a.createElement(I,{title:"Tutoriales",body:"Informaci\xf3n de apoyo necesaria para realizar la instalaci\xf3n y la ejecuci\xf3n de procesos. ",href:"docs/tutoriales/contrato-hola-mundo",img:"/img/cards-icons/tutorials.svg"})),a.createElement(s.Z,{item:!0,xs:12,sm:12,md:4},a.createElement(I,{title:"Herramientas",body:"Conjunto de herramientas \xfatiles para el proceso de aprendizaje.",href:"docs/herramientas/glosario",img:"/img/cards-icons/tools.svg"})),a.createElement(s.Z,{item:!0,xs:12,sm:12,md:4},a.createElement(I,{title:"Comunidad",body:"Enlaces a sitios de inter\xe9s relacionados con la comunidad EOS.",href:"docs/comunidad/canales-de-telegram",img:"/img/cards-icons/community.svg"})),a.createElement(s.Z,{item:!0,xs:12,sm:12,md:4},a.createElement(I,{title:"Proyectos de c\xf3digo abierto",body:"Proyectos de c\xf3digo abierto desarrollados por EOS Costa Rica.",href:"docs/proyectos-de-codigo-abierto",img:"/img/cards-icons/icons-opensource.svg"}))))},M=function(e){var t=null;return t=(0,i.I)().isDarkTheme?z():k(),a.createElement(h,{className:"cardroot "+t.card,variant:"outlined"},a.createElement(C,{className:t.media,image:e.img,component:"img",loading:"lazy"}),a.createElement(Z,null,a.createElement(j.Z,{className:t.overline,gutterBottom:!0},"ART\xcdCULO"),a.createElement(j.Z,{className:t.title,gutterBottom:!0,variant:"h5",component:"h2"},e.title),a.createElement(j.Z,{className:t.body,variant:"body2",component:"p"},e.body)),a.createElement(y,null,a.createElement(l.Z,{className:t.button,href:e.href},"Leer M\xe1s")))},B=function(){return a.createElement("div",{className:"container section-container"},a.createElement("h1",{className:"section-title"},"Art\xedculos de blog"),a.createElement(s.Z,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2},a.createElement(s.Z,{item:!0,xs:12,sm:12,md:4},a.createElement(M,{title:"\xbfQu\xe9 es un smart contract?",body:"Explicamos como funcina la descentralizaci\xf3n en sus registros, mediante contratos inteligentes.",href:"https://medium.com/@eoscostarica/qu%C3%A9-es-un-smart-contract-793d2042c65d",img:"https://miro.medium.com/max/700/1*rjtG8XyIEQM5xApCbLHk5A.png"})),a.createElement(s.Z,{item:!0,xs:12,sm:12,md:4},a.createElement(M,{title:"\xbfQu\xe9 es EOSIO?",body:"Explicamos en qu\xe9 consiste el protocolo blockchain EOSIO.",href:"https://medium.com/@eoscostarica/que-es-eosio-178e21ac2ebb",img:"https://miro.medium.com/max/700/1*Po0W5EAkJDn4LPTFytFl9A.png"})),a.createElement(s.Z,{item:!0,xs:12,sm:12,md:4},a.createElement(M,{title:"\xbfC\xf3mo funciona una blockchain?",body:"Explicamos, con ejemplos, qu\xe9 es y c\xf3mo funciona una blockchain.",href:"https://medium.com/@eoscostarica/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3",img:"https://miro.medium.com/max/700/1*iv_880P8jBGDlTKRwmNmfw.jpeg"}))))},P=function(){var e=(0,r.Z)().siteConfig;return a.createElement(o.Z,{permalink:"/",title:e.title,description:e.tagline},a.createElement(F,null),a.createElement(O,null),a.createElement(B,null))}}}]);
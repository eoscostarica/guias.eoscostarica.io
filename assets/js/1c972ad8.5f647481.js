"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[964],{3929:function(e,t,a){a.r(t),a.d(t,{areaxStepper:function(){return T},assets:function(){return k},atomicHubStepper:function(){return C},contentTitle:function(){return v},default:function(){return F},frontMatter:function(){return h},metadata:function(){return S},protonStepper:function(){return x},toc:function(){return N}});var r=a(7462),o=a(3366),n=a(7294),i=a(3905),c=a(4996),s=a(2707),m=a(1552),l=a(1594),u=a(7769),p=a(8057),d=a(2318),b=(0,s.Z)((function(){return{resetButton:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},root:{width:"90%"},buttonContainer:{direction:"rtl",margin:"0% 4%"},button:{textTransform:"none",color:"#7f7f7f","&.MuiButton-containedPrimary":{color:"#fff",backgroundColor:"#3EBBD3",margin:"1%"}},instructions:{margin:"1% 5% 1%"},stepIconRoot:{color:"rgb(192 192 192)","&.MuiStepIcon-active":{color:"#3EBBD3"},"&.MuiStepIcon-completed":{color:"#82B982"}}}})),f=function(e){var t=e.Content,a=b(),r=(0,n.useState)(0),o=r[0],i=r[1];return n.createElement("div",{className:a.root},n.createElement(m.Z,{activeStep:o,alternativeLabel:!0},t.map((function(e,t){return n.createElement(l.Z,{key:t},n.createElement(u.Z,{StepIconProps:{classes:{root:a.stepIconRoot,active:a.stepIconActive,completed:a.stepIconCompleted}}},e.title&&e.title))}))),n.createElement("div",null,o===t.length?n.createElement("div",{className:a.resetButton},n.createElement(p.Z,{onClick:function(){i(0)},className:a.button},"Reset")):n.createElement("div",null,n.createElement(d.Z,{className:a.instructions},t[o].instruction),n.createElement("div",{className:a.instructions},n.createElement("img",{src:(0,c.Z)(t[o].imageSrc),loading:"lazy"})),n.createElement("div",{className:a.buttonContainer},n.createElement(p.Z,{variant:"contained",color:"primary",onClick:function(){i((function(e){return e+1}))},href:t[o].href,className:a.button},o===t.length-1?"Finish":"Next"),n.createElement(p.Z,{disabled:!o,onClick:function(){i((function(e){return e-1}))},className:a.button},"Back")))))},g=["components"],h={id:"como-mintear",title:"\xbf C\xf3mo mintear NFTs ?",sidebar_label:"\xbf C\xf3mo Mintear NFTs ?",description:"Pasos para mintear o crear un NFTs",keywords:["Qu\xe9 es mintear","C\xf3mo mintear","NFTs","EOS","EOS Costa Rica"]},v=void 0,S={unversionedId:"tutoriales/como-mintear",id:"tutoriales/como-mintear",title:"\xbf C\xf3mo mintear NFTs ?",description:"Pasos para mintear o crear un NFTs",source:"@site/docs/tutoriales/como-mintear.mdx",sourceDirName:"tutoriales",slug:"/tutoriales/como-mintear",permalink:"/docs/tutoriales/como-mintear",draft:!1,editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/como-mintear.mdx",tags:[],version:"current",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1660785473,formattedLastUpdatedAt:"18 ago 2022",frontMatter:{id:"como-mintear",title:"\xbf C\xf3mo mintear NFTs ?",sidebar_label:"\xbf C\xf3mo Mintear NFTs ?",description:"Pasos para mintear o crear un NFTs",keywords:["Qu\xe9 es mintear","C\xf3mo mintear","NFTs","EOS","EOS Costa Rica"]},sidebar:"docs",previous:{title:"React JS",permalink:"/docs/tutoriales/tutorial-react"},next:{title:"Glosario",permalink:"/docs/herramientas/glosario"}},k={},N=[{value:"Proton Marketplace",id:"proton-marketplace",level:2},{value:"AreaX NFT",id:"areax-nft",level:2},{value:"AtomicHub",id:"atomichub",level:2}],C=[{instruction:"Ir a wax.atomichub.io para poder conectar nuestra billetera, en este caso hemos seleccionado Anchor Wallet.",imageSrc:"img/como-mintear/wax_1.webp",href:"#atomichub"},{instruction:"Haga clic en \xabCreate New Collection\xbb.",imageSrc:"img/como-mintear/wax_2.webp",href:"#atomichub"},{instruction:"Rellena los espacios: Nombre de la colecci\xf3n, nombre para su exposici\xf3n y una descripci\xf3n, finalmente ajuste su comisi\xf3n por venta en mercado.",imageSrc:"img/como-mintear/wax_3.webp",href:"#atomichub"},{instruction:"Cree un nuevo esquema para su activo. Este es el pre\xe1mbulo utilizado para exponer su activo digital. No es necesario agregar nuevos atributos.",imageSrc:"img/como-mintear/wax_4.webp",href:"#atomichub"},{instruction:"Finalmente puede mintear su activo NFT. Establezca el archivo que desea exponer y el n\xfamero de copias (1-10).",imageSrc:"img/como-mintear/wax_5.webp",href:"#atomichub"},{instruction:"Regresa a la opci\xf3n \xabNFT Creator\xbb y haga clic en la nueva colecci\xf3n para publicar tu art\xedculo, en la opci\xf3n \xabMark for sale\xbb podr\xe1 fijar el precio de venta. Confirme la transacci\xf3n.",imageSrc:"img/como-mintear/wax_6.webp",href:"#atomichub"}],T=[{instruction:"Ir a Areaxnft.com para poder conectar nuestra billetera, en este caso hemos seleccionado Anchor Wallet.",imageSrc:"img/como-mintear/telos_1.webp",href:"#areax-marketplace"},{instruction:"Una vez que haya conectado su billetera, haga clic en \xabCreate NFT\xbb. Seleccione el tipo de conjunto que necesita. La cantidad de $ TLOS que necesitar\xe1 para mintear depender\xe1 de la cantidad de NFT que desee subir.",imageSrc:"img/como-mintear/telos_2.webp",href:"#areax-marketplace"},{instruction:"En esta secci\xf3n, como puede ver, debe configurar la informaci\xf3n para obtener una vista previa del NFT: nombre, tipo de activo, URLs de IPFS. Luego haga clic en \xabCreate NFT\xbb.",imageSrc:"img/como-mintear/telos_3.webp",href:"#areax-marketplace"},{instruction:"Regrese a su perfil principal y haga clic en \xabMy items\xbb, puede observar que existe un opci\xf3n adicional de \xabSell item\xbb la cual permite ponerle precio a su NFT en diferentes criptomonedas de EOSIO.",imageSrc:"img/como-mintear/telos_4.webp",href:"#areax-marketplace"}],x=[{instruction:"Ir a Protonmarket.com para poder conectar nuestra billetera, en este caso hemos seleccionado WebAuth.",imageSrc:"img/como-mintear/proton_1.webp",href:"#proton-marketplace"},{instruction:"Una vez que haya conectado su billetera, haga clic en \xabCreate\xbb y llene los espacios correspondientes a la vista previa de su NFT.",imageSrc:"img/como-mintear/proton_2.webp",href:"#proton-marketplace"},{instruction:"Debe subir el archivo de tu crypto arte posteriormente llenar los campos de la informaci\xf3n del NFT: Nombre, descripci\xf3n, n\xfamero de activo y n\xfamero que desea mintear en un principio.",imageSrc:"img/como-mintear/proton_3.webp",href:"#proton-marketplace"},{instruction:"Cuando haya terminado, haga clic en \xabCreate NFT\xbb. Necesitar\xe1s tener al menos 1 $XUSDC para mintear el NFT. Luego firme la confirmaci\xf3n.",imageSrc:"img/como-mintear/proton_4.webp",href:"#proton-marketplace"},{instruction:"Una vez que obtenga su NFT cargado, puede verlo en \xabMy items\xbb. Debe hacer clic en \xabMark for sale\xbb, para ponerle el precio al activo.",imageSrc:"img/como-mintear/proton_5.webp",href:"#proton-marketplace"}],w={toc:N,atomicHubStepper:C,areaxStepper:T,protonStepper:x};function F(e){var t=e.components,a=(0,o.Z)(e,g);return(0,i.kt)("wrapper",(0,r.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Las siguientes instrucciones est\xe1n dise\xf1adas para ayudarlo en el proceso de creaci\xf3n de un NFT, o sea, mintear. Ver\xe1 estos, basados \u200b\u200ben los marketplaces de las Sisterchains de EOS:"),(0,i.kt)("h2",{id:"proton-marketplace"},"Proton Marketplace"),(0,i.kt)(f,{Content:x,mdxType:"CustomStepper"}),(0,i.kt)("h2",{id:"areax-nft"},"AreaX NFT"),(0,i.kt)(f,{Content:T,mdxType:"CustomStepper"}),(0,i.kt)("h2",{id:"atomichub"},"AtomicHub"),(0,i.kt)(f,{Content:C,mdxType:"CustomStepper"}))}F.isMDXComponent=!0}}]);
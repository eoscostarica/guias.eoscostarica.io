"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[2659],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 6084:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": function() { return /* binding */ assets; },
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "eosio_networks_data": function() { return /* binding */ eosio_networks_data; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "projectsData": function() { return /* binding */ projectsData; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
;// CONCATENATED MODULE: ./src/components/ProjectContainer/DisplayImages.js
var DisplayImages=function DisplayImages(_ref){var projectData=_ref.projectData;return/*#__PURE__*/react.createElement(Grid/* default */.Z,{item:true,md:4,xs:12},/*#__PURE__*/react.createElement(Grid/* default */.Z,{className:"container-border"},projectData.logos.map(function(logo,i){return/*#__PURE__*/react.createElement(Grid/* default */.Z,{container:true,key:i,alignItems:"center",justifyContent:"center"},/*#__PURE__*/react.createElement("a",{href:logo.link},/*#__PURE__*/react.createElement("img",{className:"logo",src:(0,useBaseUrl/* default */.Z)(logo.image),loading:"lazy",alt:projectData.name+" logo"})));}),/*#__PURE__*/react.createElement(Grid/* default */.Z,{container:true,spacing:1,alignItems:"center",justifyContent:"center"},projectData.images.map(function(image,i){var _image$class;return/*#__PURE__*/react.createElement(Grid/* default */.Z,{key:i,item:true,xs:6,md:6},/*#__PURE__*/react.createElement("a",{href:image.link,id:i},/*#__PURE__*/react.createElement("img",{className:(_image$class=image.class)!=null?_image$class:"",src:(0,useBaseUrl/* default */.Z)(image.image),loading:"lazy",height:"60%",alt:projectData.name+" screenshot preview "+(i+1)})),/*#__PURE__*/react.createElement("a",{href:projectData.href,className:"lightbox",id:image.id},/*#__PURE__*/react.createElement("img",{className:"box-img",src:(0,useBaseUrl/* default */.Z)(image.image),loading:"lazy",alt:projectData.name+" screenshot "+(i+1)})));}))));};/* harmony default export */ var ProjectContainer_DisplayImages = (DisplayImages);
;// CONCATENATED MODULE: ./src/components/ProjectContainer/DisplayLinks.js
var DisplayLinks=function DisplayLinks(_ref){var projectData=_ref.projectData;var webTitle='Sitio Web';var gitHubIcon='https://cdn-icons-png.flaticon.com/32/25/25231.png';return/*#__PURE__*/react.createElement(react.Fragment,null,projectData.website&&projectData.website.map(function(web,i){var _web$title;return/*#__PURE__*/react.createElement("ul",{key:i},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("p",null,/*#__PURE__*/react.createElement("strong",null,(_web$title=web.title)!=null?_web$title:webTitle,": "),web.image?/*#__PURE__*/react.createElement("a",{href:web.link},/*#__PURE__*/react.createElement("img",{src:web.image,width:"9%",alt:"Icono del sitio web de "+projectData.name,loading:"lazy"})):/*#__PURE__*/react.createElement("a",{href:web.link},web.name))));}),projectData.github&&projectData.github.map(function(git,i){var _git$image;return/*#__PURE__*/react.createElement("ul",{key:i},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("p",null,/*#__PURE__*/react.createElement("strong",null,"GitHub: "),/*#__PURE__*/react.createElement("a",{href:git.link},/*#__PURE__*/react.createElement("img",{src:(_git$image=git.image)!=null?_git$image:gitHubIcon,loading:"lazy",width:"32px",height:"32px",alt:"Enlace al repositorio en Github de "+projectData.name})))));}));};/* harmony default export */ var ProjectContainer_DisplayLinks = (DisplayLinks);
;// CONCATENATED MODULE: ./src/components/ProjectContainer/ProjectContainer.js
var ProjectContainer=function ProjectContainer(_ref){var _projectData$images;var projectData=_ref.projectData;var hasImages=((_projectData$images=projectData.images)==null?void 0:_projectData$images.length)>0;return/*#__PURE__*/react.createElement(Grid/* default */.Z,{container:true},/*#__PURE__*/react.createElement(Grid/* default */.Z,{item:true,md:hasImages?8:12,xs:12},/*#__PURE__*/react.createElement(Grid/* default */.Z,{className:"content"},projectData.description&&projectData.description.map(function(paragraph,i){return/*#__PURE__*/react.createElement("p",{key:i},paragraph);}),/*#__PURE__*/react.createElement(ProjectContainer_DisplayLinks,{projectData:projectData}))),hasImages&&projectData.logos&&/*#__PURE__*/react.createElement(ProjectContainer_DisplayImages,{projectData:projectData}));};/* harmony default export */ var ProjectContainer_ProjectContainer = (ProjectContainer);
;// CONCATENATED MODULE: ./docs/proyectos-de-codigo-abierto.mdx
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'proyectos-de-codigo-abierto',title:'Proyectos de Código Abierto',sidebar_label:'Proyectos de Código Abierto',description:'Proyectos open source desarrollados por EOS Costarica',keywords:['proyectos','codigo abierto','open source','EOS','EOS costarica','Qué es un proyecto de código abierto']};var contentTitle=undefined;var metadata={"unversionedId":"proyectos-de-codigo-abierto","id":"proyectos-de-codigo-abierto","title":"Proyectos de Código Abierto","description":"Proyectos open source desarrollados por EOS Costarica","source":"@site/docs/proyectos-de-codigo-abierto.mdx","sourceDirName":".","slug":"/proyectos-de-codigo-abierto","permalink":"/docs/proyectos-de-codigo-abierto","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/proyectos-de-codigo-abierto.mdx","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675486037,"formattedLastUpdatedAt":"4 feb 2023","frontMatter":{"id":"proyectos-de-codigo-abierto","title":"Proyectos de Código Abierto","sidebar_label":"Proyectos de Código Abierto","description":"Proyectos open source desarrollados por EOS Costarica","keywords":["proyectos","codigo abierto","open source","EOS","EOS costarica","Qué es un proyecto de código abierto"]},"sidebar":"docs","previous":{"title":"Herramientas para desarrollo","permalink":"/docs/herramientas-para-desarrolladores"},"next":{"title":"Boilerplates","permalink":"/docs/boilerplate"}};var assets={};var toc=[{value:'Proyectos para la Comunidad',id:'proyectos-para-la-comunidad',level:2},{value:'Antelope Tools',id:'antelope-tools',level:3},{value:'EOS Rate',id:'eos-rate',level:3},{value:'Programa Proton Affiliate',id:'programa-proton-affiliate',level:3},{value:'Contratos Inteligentes Libre Dao',id:'contratos-inteligentes-libre-dao',level:3},{value:'LACChain EOSIO Testnet',id:'lacchain-eosio-testnet',level:3},{value:'Evodex',id:'evodex',level:3},{value:'MyvoteEOS Proxy Website',id:'myvoteeos-proxy-website',level:3},{value:'Eden Smart Contracts',id:'eden-smart-contracts',level:3},{value:'Eden UI kit',id:'eden-ui-kit',level:3},{value:'Eden Spend Explorer',id:'eden-spend-explorer',level:3},{value:'Eden Smart Proxy',id:'eden-smart-proxy',level:3},{value:'Eden API',id:'eden-api',level:3},{value:'EOS Token Sale Platform',id:'eos-token-sale-platform',level:3},{value:'EOS Token Sale Contract',id:'eos-token-sale-contract',level:3},{value:'Herramientas',id:'herramientas',level:2},{value:'Eden Members Check',id:'eden-members-check',level:3},{value:'Eden Cron Job',id:'eden-cron-job',level:3},{value:'Eden Msig Script',id:'eden-msig-script',level:3},{value:'Contrato Inteligente Digital Notary',id:'contrato-inteligente-digital-notary',level:3},{value:'Entornos de Desarrollo Local',id:'entornos-de-desarrollo-local',level:3},{value:'Red de EOSIO Bootstrap',id:'red-de-eosio-bootstrap',level:3},{value:'Muestras de Nodeos Configurations',id:'muestras-de-nodeos-configurations',level:3},{value:'Boilerplates',id:'boilerplates',level:2},{value:'Componentes React para EOSIO',id:'componentes-react-para-eosio',level:2},{value:'Constancias Municipales',id:'constancias-municipales',level:2},{value:'EOSIO Hackathons',id:'eosio-hackathons',level:2},{value:'LifeBank',id:'lifebank',level:3},{value:'gGoods',id:'ggoods',level:3},{value:'Paquetes NPM',id:'paquetes-npm',level:2}];var projectsData=[{name:"Antelope Tools",description:["Un Monitor de Infraestructura EOSIO + Antelope y un tablero de nodos."],href:"#antelope-tools",website:[{link:"https://antelope.tools/",name:"Antelope Tools"}],github:[{link:"https://github.com/edenia/antelope-tools",image:"https://cdn-icons-png.flaticon.com/32/25/25231.png"}],logos:[{image:"https://eos.antelope.tools/antelope-tools.svg",link:"https://antelope.tools/"}],images:[{image:"img/OSS_screnshots/EOSIO_Network_monitor.png",link:"#screen-eos-1",id:"screen-eos-1"},{image:"img/OSS_screnshots/EOSIO_Network_monitor_2.png",link:"#screen-eos-2",id:"screen-eos-2"},{image:"img/OSS_screnshots/EOSIO_Network_monitor_3.png",link:"#screen-eos-3",id:"screen-eos-3"},{image:"img/OSS_screnshots/EOSIO_Network_monitor_4.png",link:"#screen-eos-4",id:"screen-eos-4"}]},{name:"EOS Rate",description:["EOS Rate es una herramienta visual de calificación manejada por la comunidad que permite a los titulares de los tokens de EOS calificar fácilmente a los Productores de Bloques en distintas categorías."],href:"#eos-rate",website:[{link:"https://eosrate.io/",name:"EOS Rate"}],github:[{link:"https://github.com/eoscostarica/eos-rate"}],logos:[{image:"/img/eosrate-logo.webp",link:"https://eosrate.io/"}],images:[{image:"img/OSS_screnshots/EOS_Rate.webp",link:"#screen-rate-1",id:"screen-rate-1"},{image:"img/OSS_screnshots/EOS_Rate_2.webp",link:"#screen-rate-2",id:"screen-rate-2"}]},{name:"Programa Proton Affiliate",href:"#programa-proton-affiliate",website:[{link:"https://www.protonchain.com/",image:"/img/proton.webp"},{title:"Anuncio del Proyecto",link:"https://eoscostarica.io/blog/proton-announcement/",name:"Programa Proton Affiliate"}],logos:[{image:"img/OSS_screnshots/Proton_Program_Logo.webp",link:"https://www.protonchain.com/"}],images:[{image:"img/OSS_screnshots/Proton_Program.webp",link:"#screen-proton-1",id:"screen-proton-1"},{image:"img/OSS_screnshots/Proton_Program_2.webp",link:"#screen-proton-2",id:"screen-proton-2"},{image:"img/OSS_screnshots/Proton_Program_3.webp",link:"#screen-proton-3",id:"screen-proton-3"},{image:"img/OSS_screnshots/Proton_Program_4.webp",link:"#screen-proton-4",id:"screen-proton-4"}]},{name:"Contratos Inteligentes Libre Dao",description:["Este sistema funciona como un mecanismo de votación descentralizado establecido en las reglas que rigen la cadena de bloques, donde se proponen y financian presupuestos para proyectos específicos una vez que reciben suficientes votos de los poseedores de fichas."],href:"#contratos-inteligentes-libre-dao",website:[{link:"https://dao.libre.org/",name:"Contratos Inteligentes Libre Dao"}],github:[{link:"https://github.com/eoscostarica/btc-libre-governance"}],logos:[{image:"img/OSS_screnshots/Libre_Dao_Smart_Contracts.webp",link:"https://dao.libre.org/"}],images:[{image:"img/OSS_screnshots/Bitcoin_Libre.webp",link:"#screen-dao-1",id:"screen-dao-1"},{image:"img/OSS_screnshots/Bitcoin_Libre_2.webp",link:"#screen-dao-2",id:"screen-dao-2"}]},{name:"LACChain EOSIO",description:["Somos parte de LACChain EOSIO, una iniciativa de código abierto que ofrece una red de blockchain EOSIO que se integra en la red de LACChain."],href:"#lacchain-eosio-testnet",website:[{link:"https://eosio.lacchain.net/en/",name:"LACChain EOSIO"}],github:[{link:"https://github.com/lacchain/eosio.lacchain.net"}],logos:[{image:"/img/lacchain-eosio.webp",link:"https://eosio.lacchain.net/en/"}],images:[{image:"img/OSS_screnshots/Lacchain_EOSIO.webp",link:"#screen-chain-1",id:"screen-chain-1"},{image:"img/OSS_screnshots/Lacchain_EOSIO_2.webp",link:"#screen-chain-2",id:"screen-chain-2"},{image:"img/OSS_screnshots/Lacchain_EOSIO_3.webp",link:"#screen-chain-3",id:"screen-chain-3"},{image:"img/OSS_screnshots/Lacchain_EOSIO_4.webp",link:"#screen-chain-4",id:"screen-chain-4"}]},{name:"Evodex",description:["Evodex es un protocolo creado por EOS Argentina que permite a cualquier persona crear y lanzar sus propios pares comerciales en un intercambio descentralizado y obtener tarifas comerciales al agregar liquidez al grupo de tokens. EOS Costa Rica colaboró con EOS Argentina creando una interfaz web que brinda acceso a liquidez entre todos los intercambios que se conectan a Evodex."],href:"#evodex",website:[{link:"https://evodex.io",name:"Evodex"}],github:[{link:"https://github.com/eoscostarica/evodex"}],logos:[{image:"/img/evodex-logo.webp",link:"https://evodex.io"}],images:[{image:"img/OSS_screnshots/Evodex.webp",link:"#screen-evodex-1",id:"screen-evodex-1"},{image:"img/OSS_screnshots/Evodex_2.webp",link:"#screen-evodex-2",id:"screen-evodex-2"},{image:"img/OSS_screnshots/Evodex_3.webp",link:"#screen-evodex-3",id:"screen-evodex-3"},{image:"img/OSS_screnshots/Evodex_4.webp",link:"#screen-evodex-4",id:"screen-evodex-4"}]},{name:"Componentes React para EOSIO",description:["Una colección de componentes de React para la comunidad de desarrolladores de EOSIO."],href:"#componentes-react-para-eosio",website:[{link:"https://components.edenia.cloud",name:"Componentes React"}],github:[{link:"https://github.com/eoscostarica/eoscr-components"}],logos:[{image:"/img/React_logo.webp",link:"https://components.edenia.cloud/"}],images:[{image:"img/OSS_screnshots/React_EOS.webp",link:"#screen-react-1",id:"screen-react-1"},{image:"img/OSS_screnshots/React_EOS_2.webp",link:"#screen-react-2",id:"screen-react-2"},{image:"img/OSS_screnshots/React_EOS_3.webp",link:"#screen-react-3",id:"screen-react-3"},{image:"img/OSS_screnshots/React_EOS_4.webp",link:"#screen-react-4",id:"screen-react-4"}]},{name:"LifeBank",description:["Lifebank es una dapp basada en EOSIO que ayuda a las comunidades locales a crear un círculo virtuoso de intercambio de valor entre tres partes:  donantes de vida elegibles, centros comunitarios de donación y empresas locales participantes (patrocinadores).","Lifebank es una iniciativa de EOS Costa Rica, empresa que desarrolla soluciones basadas en blockchain para resolver problemas del mundo real. Lifebank es nuestra entrada al desafío Coding for Change organizado por la empresa líder en blockchain, Block.one."],href:"#lifebank",website:[{link:"https://lifebank.io/",name:"LifeBank"}],github:[{link:"https://github.com/eoscostarica/lifebank"}],logos:[{image:"/img/life-bank-logo.webp",link:"https://lifebank.io/"}],images:[{image:"img/OSS_screnshots/LifeBank.webp",link:"#screen-lifebank-1",id:"screen-lifebank-1"},{image:"img/OSS_screnshots/LifeBank_2.webp",link:"#screen-lifebank-2",id:"screen-lifebank-2"},{image:"img/OSS_screnshots/LifeBank_3.webp",link:"#screen-lifebank-3",id:"screen-lifebank-3"},{image:"img/OSS_screnshots/LifeBank_4.webp",link:"#screen-lifebank-4",id:"screen-lifebank-4"}]},{name:"gGoods",description:["gGoods es un estándar NFT de código abierto que permite a las organizaciones y comunidades crear sus propios NFT para recaudar fondos. Crear un NFT es fácil y sencillo con nuestro creador de avatares. Luego, los donantes compran los NFT como artículos coleccionables que no solo respaldan una causa, sino que también pueden integrarse en innumerables aplicaciones, como juegos, emojis, calcomanías de chat, avatares, etc."],href:"#ggoods",website:[{link:"https://ggoods.io/",name:"gGoods"}],github:[{link:"https://github.com/eoscostarica/gGoods"}],logos:[{image:"https://raw.githubusercontent.com/eoscostarica/gGoods/main/docs/ggoods-logo.svg",link:"https://ggoods.io/"}],images:[{image:"/img/OSS_screnshots/gGoods.webp",link:"#screen-ggoods-1",id:"screen-ggoods-1"},{image:"/img/OSS_screnshots/gGoods_2.webp",link:"#screen-ggoods-2",id:"screen-ggoods-2"},{image:"/img/OSS_screnshots/gGoods_3.webp",link:"#screen-ggoods-3",id:"screen-ggoods-3"},{image:"/img/OSS_screnshots/gGoods_4.webp",link:"#screen-ggoods-4",id:"screen-ggoods-4"}]},{name:"MyvoteEOS Proxy Website",description:["El proxy basado en EOS facilita la transición hacia una cadena verdaderamente democrática y libre de control de Pareto al votar por los productores de bloques que no se comprometen con el reembolso directo del voto."],href:"#myvoteeos-proxy-website",website:[{link:"https://myvoteeos.com/home",name:"MyvoteEOS"}],github:[{link:"https://github.com/eoscostarica/MyvoteEOS-proxy"}],logos:[{image:"/img/my-vote-eos-logo.webp",link:"https://myvoteeos.com/home"}],images:[{image:"/img/OSS_screnshots/MyvoteEOS.webp",link:"#screen-MyvoteEOS-1",id:"screen-MyvoteEOS-1"},{image:"/img/OSS_screnshots/MyvoteEOS_2.webp",link:"#screen-MyvoteEOS-2",id:"screen-MyvoteEOS-2"},{image:"/img/OSS_screnshots/MyvoteEOS_3.webp",link:"#screen-MyvoteEOS-3",id:"screen-MyvoteEOS-3"},{image:"/img/OSS_screnshots/MyvoteEOS_4.webp",link:"#screen-MyvoteEOS-4",id:"screen-MyvoteEOS-4"}]},{name:"Eden Smart Contracts",description:["Actualizaciones y Mantenimiento de la aplicación web de la Comunidad Eden y de los contratos inteligentes."],href:"#eden-smart-contracts",website:[{link:"https://genesis.eden.eoscommunity.org/",name:"Eden Smart Contracts"}],github:[{link:"https://github.com/edenia/Eden"}],logos:[{image:"https://raw.githubusercontent.com/edenia/Eden/master/packages/webapp/public/images/eden-logo.svg",link:"https://genesis.eden.eoscommunity.org/"}],images:[{image:"/img/OSS_screnshots/Eden.webp",link:"#screen-Eden-1",id:"screen-Eden-1"},{image:"/img/OSS_screnshots/Eden_2.webp",link:"#screen-Eden-2",id:"screen-Eden-2"},{image:"/img/OSS_screnshots/Eden_3.webp",link:"#screen-Eden-3",id:"screen-Eden-3"}]},{name:"Eden UI kit",description:["Una plantilla de interfaz de usuario para que los proyectos que se desarrollen en EdenOS."],href:"#eden-ui-kit",website:[{link:"https://eden-ui.edenia.cloud/?path=/story/actionitemdelegatebp--action-item-delegate-bp-item",name:"Eden UI kit"}],github:[{link:"https://github.com/edenia/eden-UI-kit"}],logos:[{image:"https://raw.githubusercontent.com/edenia/Eden/master/packages/webapp/public/images/eden-logo.svg",link:"https://eden-ui.edenia.cloud/?path=/story/actionitemdelegatebp--action-item-delegate-bp-item"}],images:[{image:"/img/OSS_screnshots/Eden-ui-kit1.png",link:"#screen-Eden-ui-kit-1",id:"screen-Eden-ui-kit-1"},{image:"/img/OSS_screnshots/Eden-ui-kit2.png",link:"#screen-Eden-ui-kit2",id:"screen-Eden-ui-kit2"},{image:"/img/OSS_screnshots/Eden-ui-kit3.png",link:"#screen-Eden-ui-kit3",id:"screen-Eden-ui-kit3"}]},{name:"Eden Spend Explorer",description:["Estándar de seguimiento de gastos para comunidades Eden."],href:"#eden-spend-explorer",website:[{link:"https://spending.eden.eoscommunity.org/",name:"Eden Spend Explorer"}],github:[{link:"https://github.com/edenia/eden-spend-explorer"}],logos:[{image:"https://spending.eden.eoscommunity.org/logos/eden-spend-explorer-logo.png",link:"https://spending.eden.eoscommunity.org/"}],images:[{image:"/img/OSS_screnshots/eden-spend-explorer1.png",link:"#eden-spend-explorer1",id:"eden-spend-explorer1"},{image:"/img/OSS_screnshots/eden-spend-explorer2.png",link:"#eden-spend-explorer2",id:"eden-spend-explorer2"},{image:"/img/OSS_screnshots/eden-spend-explorer3.png",link:"#eden-spend-explorer3",id:"eden-spend-explorer3"},{image:"/img/OSS_screnshots/eden-spend-explorer4.png",link:"#eden-spend-explorer4",id:"eden-spend-explorer4"}]},{name:"Eden API",description:["Un servicio API para consultar datos sobre Eden en miembros de EOS."],href:"#eden-api",website:[{link:"https://eden-api.edenia.cloud",name:"Eden API"}],github:[{link:"https://github.com/edenia/eden-api"}],logos:[{image:"https://raw.githubusercontent.com/edenia/Eden/master/packages/webapp/public/images/eden-logo.svg",link:"https://eden-api.edenia.cloud"}],images:[{image:"/img/OSS_screnshots/eden-api1.png",link:"#screen-eden-api1",id:"screen-eden-api1"},{image:"/img/OSS_screnshots/eden-api2.png",link:"#screen-eden-api2",id:"screen-eden-api2"}]},{name:"Eden Smart Proxy",description:["Un portal de votación de BP y proxy para miembros de Eden."],href:"#eden-smart-proxy",website:[{link:"https://proxy.eden.eoscommunity.org/es",name:"Eden Smart Proxy"}],github:[{link:"https://github.com/edenia/eden-smart-proxy"}],logos:[{image:"https://proxy.eden.eoscommunity.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feden-proxy-logo.483646fe.png&w=256&q=75",link:"https://proxy.eden.eoscommunity.org/es"}],images:[{image:"/img/OSS_screnshots/eden-smart-proxy1.png",link:"#screen-eden-smart-proxy1",id:"screen-eden-smart-proxy1"},{image:"/img/OSS_screnshots/eden-smart-proxy2.png",link:"#screen-eden-smart-proxy2",id:"screen-eden-smart-proxy2"},{image:"/img/OSS_screnshots/eden-smart-proxy3.png",link:"#screen-eden-smart-proxy3",id:"screen-eden-smart-proxy3"},{image:"/img/OSS_screnshots/eden-smart-proxy4.png",link:"#screen-eden-smart-proxy4",id:"screen-eden-smart-proxy4"}]},{name:"Eden Cron Job",description:["Script Cron-Job que distribuye fondos para los miembros de eden."],href:"#eden-cron-job",github:[{link:"https://github.com/edenia/eden-distribute"}]},{name:"Eden Msig Script",description:["Script de propuesta multifirma para actualizar los permisos activos del delegado electo de Eden."],href:"#eden-msing-script",github:[{link:"https://github.com/edenia/eden-delegates-msig"}]},{name:"EOS Token Sale Contract",description:["Un contrato de código abierto que cualquier proyecto EOS puede utilizar para vender sus tokens. Estos contratos están destinados a apoyar una plataforma de venta de tokens descentralizada, que permite a los usuarios configurar una venta de tokens, determinar los parámetros de la venta de tokens y desplegar su venta en la Mainnet de EOS."],href:"#eos-token-sale-contract",github:[{link:"https://github.com/eostarter/eostarter.sale-smart-contract"}]},{name:"EOS Token Sale Platform",description:["Una plataforma de venta de tokens descentralizada, que permite a los usuarios configurar una venta de tokens, determinar los parámetros de la venta de tokens y desplegar su venta en la red principal de EOS. La plataforma de venta de tokens es una aplicación descentralizada basada en dos contratos inteligentes de código abierto que cualquier proyecto puede utilizar para vender sus tokens."],href:"#eos-token-sale-platform",website:[{link:"https://tokensale.edenia.cloud",name:"EOS Token Sale Platform"}],github:[{link:"https://github.com/eostarter/token-sale-platform"}],logos:[{image:"https://raw.githubusercontent.com/eostarter/token-sale-platform/master/docs/img/logo-words.png",link:"https://tokensale.edenia.cloud"}],images:[{image:"/img/OSS_screnshots/Token_Sale_Platform.webp",link:"#screen-Token_Sale_Platform-1",id:"screen-Token_Sale_Platform-1"},{image:"/img/OSS_screnshots/Token_Sale_Platform_2.webp",link:"#screen-Token_Sale_Platform-2",id:"screen-Token_Sale_Platform-2"},{image:"/img/OSS_screnshots/Token_Sale_Platform_3.webp",link:"#screen-Token_Sale_Platform-3",id:"screen-Token_Sale_Platform-3"}]},{name:"Constancias de Pago de Impuestos Municipales ",description:["El generador de constancias municipales es una aplicación web que permite a los contribuyentes de los Gobiernos Locales Costarricenses obtener un documento digital en el que podrá ver los pagos de los impuestos municipales de las propiedades a su nombre. Este documento es firmado digitalmente por la institución que emite dicho documento, por lo que es oficial y válido para utilizar en distintas instituciones de Costa Rica."],href:"#constancias-municipales",github:[{link:"https://github.com/edenia/constancias-municipales"}],logos:[{image:"https://raw.githubusercontent.com/edenia/constancias-municipales/main/webapp/public/favicon.ico",link:"https://constancia.muniorotina.go.cr"}],images:[{image:"/img/OSS_screnshots/constancias-municipales1.png",link:"#screen-constancias-municipales1",id:"screen-constancias-municipales1"},{image:"/img/OSS_screnshots/constancias-municipales2.png",link:"#screen-constancias-municipales2",id:"screen-constancias-municipales2"}]},{name:"Eden Members Check",description:["Este proyecto proporciona una forma rápida de comenzar a integrar la lógica para validar si una cuenta EOS es un miembro activo de Eden. Está destinado a ser utilizado como un ejemplo para ayudar a otros proyectos a integrar funciones para los miembros de eden."],github:[{link:"https://github.com/edenia/eden-member-check"}]},{name:"Contrato Inteligente Digital Notary",description:["Este contrato inteligente sirve como herramienta para cualquier usuario que desee registrar la existencia de documentos digitales (textos/imágenes) en un momento determinado.","También permite que cualquier persona que posea el documento valide el registro en la cadena de bloques."],website:[{link:"https://notarize.edenia.cloud/dashboard/notary",name:"Contrato Inteligente Digital Notary"}],github:[{link:"https://github.com/eoscostarica/notarioeoscr"}]},{name:"Red de EOSIO Bootstrap",description:['Esta colección de scripts inicia una red EOSIO local con múltiples configuraciones de nodos. También hay una secuencia de inicio automatizada que utiliza un nodo de "bios" temporal para iniciar la cadena, implementar contratos de sistema y establecer un cronograma con tres nodos productores de bloques activos.',"Este proyecto puede ser útil como entorno de desarrollo para contratos de sistema."],github:[{link:"https://github.com/eoscostarica/eosio-network-bootstrap"}]},{name:"Muestras de Nodeos Configurations",description:["Configuraciones de ejemplo para diferentes tipos de nodos EOSIO."],github:[{link:"https://github.com/eoscostarica/sample-nodeos-configs"}]}];var eosio_networks_data=[{name:"EOS Mainnet",href:"https://mainnet.eosio.online",image:"/img/eos.webp"},{name:"Jungle Testnet",href:"https://jungle.eosio.online",image:"/img/jungle.webp"},{name:"Proton Testnet",href:"https://proton.eosio.online",image:"/img/proton.webp"},{name:"LACChain EOSIO",href:"https://lacchain.eosio.online",image:"/img/lacchain.webp"},{name:"Telos Testnet",href:"https://telos.eosio.online/",image:"/img/telos.webp"}];var layoutProps={toc:toc,projectsData:projectsData,eosio_networks_data:eosio_networks_data};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("h2",{"id":"proyectos-para-la-comunidad"},"Proyectos para la Comunidad"),(0,esm/* mdx */.kt)("p",null,"Los siguientes proyectos est\xE1n dirigidos a la comunidad de desarrolladores."),(0,esm/* mdx */.kt)("h3",{"id":"antelope-tools"},"Antelope Tools"),(0,esm/* mdx */.kt)(Grid/* default */.Z,{container:true,mdxType:"Grid"},(0,esm/* mdx */.kt)(Grid/* default */.Z,{item:true,md:8,xs:12,mdxType:"Grid"},(0,esm/* mdx */.kt)(Grid/* default */.Z,{className:"content",mdxType:"Grid"},(0,esm/* mdx */.kt)("p",null,projectsData[0].description),(0,esm/* mdx */.kt)(ProjectContainer_DisplayLinks,{projectData:projectsData[0],mdxType:"DisplayLinks"})),(0,esm/* mdx */.kt)(Grid/* default */.Z,{className:"table-container",mdxType:"Grid"},(0,esm/* mdx */.kt)("table",null,(0,esm/* mdx */.kt)("tbody",null,(0,esm/* mdx */.kt)("tr",null,eosio_networks_data.map(function(network,i){return (0,esm/* mdx */.kt)("th",{key:i},network.name);})),(0,esm/* mdx */.kt)("tr",null,eosio_networks_data.map(function(network,i){return (0,esm/* mdx */.kt)("td",{key:network.name},(0,esm/* mdx */.kt)("a",{href:network.href},(0,esm/* mdx */.kt)("img",{src:network.image,width:"32px",height:"32px",alt:network.name+" logo"})));})))))),(0,esm/* mdx */.kt)(ProjectContainer_DisplayImages,{projectData:projectsData[0],mdxType:"DisplayImages"})),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"eos-rate"},"EOS Rate"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[1],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"programa-proton-affiliate"},"Programa Proton Affiliate"),(0,esm/* mdx */.kt)(Grid/* default */.Z,{container:true,mdxType:"Grid"},(0,esm/* mdx */.kt)(Grid/* default */.Z,{item:true,md:8,xs:12,mdxType:"Grid"},(0,esm/* mdx */.kt)(Grid/* default */.Z,{className:"content",mdxType:"Grid"},(0,esm/* mdx */.kt)("p",null,"Edenia, tambi\xE9n conocida como"," ",(0,esm/* mdx */.kt)("a",{href:"https://eoscostarica.io/"},"EOS Costa Rica"),", se complace en anunciar nuestra colaboraci\xF3n estrat\xE9gica con el equipo de Proton, una cadena de bloques desarrollada por Metallicus."," ",(0,esm/* mdx */.kt)("a",{href:"https://www.protonchain.com/"},"Proton")," se cre\xF3 para simplificar procesamiento de pagos en cadena, agregando gobernanza, recursos de red asignaci\xF3n y participaci\xF3n de recompensas."),(0,esm/* mdx */.kt)("p",null,"Durante los \xFAltimos meses, nuestro equipo ha estado trabajando en una funci\xF3n del Programa de afiliados (AP) para la"," ",(0,esm/* mdx */.kt)("a",{href:"https://www.protonchain.com/wallet/"},"cartera Proton"),", que se lanz\xF3 en la etapa beta para pa\xEDses seleccionados."),(0,esm/* mdx */.kt)(ProjectContainer_DisplayLinks,{projectData:projectsData[2],mdxType:"DisplayLinks"}))),(0,esm/* mdx */.kt)(ProjectContainer_DisplayImages,{projectData:projectsData[2],mdxType:"DisplayImages"})),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"contratos-inteligentes-libre-dao"},"Contratos Inteligentes Libre Dao"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[3],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"lacchain-eosio-testnet"},"LACChain EOSIO Testnet"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[4],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"evodex"},"Evodex"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[5],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"myvoteeos-proxy-website"},"MyvoteEOS Proxy Website"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[9],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"eden-smart-contracts"},"Eden Smart Contracts"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[10],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"eden-ui-kit"},"Eden UI kit"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[11],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"eden-spend-explorer"},"Eden Spend Explorer"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[12],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"eden-smart-proxy"},"Eden Smart Proxy"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[14],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"eden-api"},"Eden API"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[13],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"eos-token-sale-platform"},"EOS Token Sale Platform"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[18],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"eos-token-sale-contract"},"EOS Token Sale Contract"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[17],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h2",{"id":"herramientas"},"Herramientas"),(0,esm/* mdx */.kt)("h3",{"id":"eden-members-check"},"Eden Members Check"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[20],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"eden-cron-job"},"Eden Cron Job"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[15],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"eden-msig-script"},"Eden Msig Script"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[16],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"contrato-inteligente-digital-notary"},"Contrato Inteligente Digital Notary"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[21],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"entornos-de-desarrollo-local"},"Entornos de Desarrollo Local"),(0,esm/* mdx */.kt)("p",null,"EOS Costa Rica ofrece una amplia variedad de entornos de desarrollo local para la comunidad de desarrolladores EOSIO."),(0,esm/* mdx */.kt)("div",{className:"table-wrapper",markdown:"block",style:{overflow:'scroll',height:'200px'}},(0,esm/* mdx */.kt)("table",null,(0,esm/* mdx */.kt)("thead",{parentName:"table"},(0,esm/* mdx */.kt)("tr",{parentName:"thead"},(0,esm/* mdx */.kt)("th",{parentName:"tr","align":"center"},"Entornos de Desarrollo Local"),(0,esm/* mdx */.kt)("th",{parentName:"tr","align":"center"},"Descripci\xF3n"))),(0,esm/* mdx */.kt)("tbody",{parentName:"table"},(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/eos-local"},"EOS")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Red EOS basada en Docker para el desarrollo local")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/telos-local"},"Telos")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Red Telos basada en Docker para el desarrollo local")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/proton-local"},"Proton")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Red Proton basada en Docker para el desarrollo local")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/wax-local"},"Wax")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"WAX Entorno de desarrollo local Docker")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/eosio-explorer"},"EOSIO Explorer")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Una aplicaci\xF3n que proporciona Web GUI para comunicarse con EOSIO blockchain en un entorno de desarrollo local"))))),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"red-de-eosio-bootstrap"},"Red de EOSIO Bootstrap"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[21],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("h3",{"id":"muestras-de-nodeos-configurations"},"Muestras de Nodeos Configurations"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[22],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("h2",{"id":"boilerplates"},"Boilerplates"),(0,esm/* mdx */.kt)("p",null,"EOS Costa Rica ofrece una amplia variedad de boilerplates para la comunidad de desarrolladores."),(0,esm/* mdx */.kt)("div",{className:"table-wrapper",markdown:"block",style:{overflow:'scroll',height:'200px'}},(0,esm/* mdx */.kt)("table",null,(0,esm/* mdx */.kt)("thead",{parentName:"table"},(0,esm/* mdx */.kt)("tr",{parentName:"thead"},(0,esm/* mdx */.kt)("th",{parentName:"tr","align":"center"},"Boilerplates"),(0,esm/* mdx */.kt)("th",{parentName:"tr","align":"center"},"Descripci\xF3n"))),(0,esm/* mdx */.kt)("tbody",{parentName:"table"},(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/full-stack-boilerplate"},"Full Stack")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Una plantilla Full Stack para lanzar f\xE1cilmente su proyecto en EOSIO.")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/wax-webapp-boilerplate"},"Wax Webapp")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Una aplicaci\xF3n React Web b\xE1sica con autenticadores WAX (wallets).")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/wax-full-stack-boilerplate"},"Wax")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Una plantilla Full Stack para lanzar f\xE1cilmente su proyecto en Wax.")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/proton-full-stack-boilerplate"},"Proton")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Una plantilla Full Stack para lanzar f\xE1cilmente su proyecto en Proton.")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/webapp-boilerplate"},"Webapp")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Una aplicaci\xF3n web de reacci\xF3n b\xE1sica con autenticadores UAL para EOSIO (wallets).")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/ipfs-boilerplate"},"IPFS")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Un repositorio para ayudarlo a comenzar a integrar IPFS en su proyecto.")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/backend-boilerplate"},"Backend")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"NodeJS Backend + Hasura + PGDB con EOSJS y KEOSD wallet.")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://github.com/eoscostarica/eos-dapp-boilerplate"},"EOS dapp")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Modelos de aplicaciones EOSIO."))))),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h2",{"id":"componentes-react-para-eosio"},"Componentes React para EOSIO"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[6],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h2",{"id":"constancias-municipales"},"Constancias Municipales"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[19],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h2",{"id":"eosio-hackathons"},"EOSIO Hackathons"),(0,esm/* mdx */.kt)("h3",{"id":"lifebank"},"LifeBank"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[7],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h3",{"id":"ggoods"},"gGoods"),(0,esm/* mdx */.kt)(ProjectContainer_ProjectContainer,{projectData:projectsData[8],mdxType:"ProjectContainer"}),(0,esm/* mdx */.kt)("hr",null),(0,esm/* mdx */.kt)("h2",{"id":"paquetes-npm"},"Paquetes NPM"),(0,esm/* mdx */.kt)("div",{className:"table-wrapper",markdown:"block",style:{overflow:'scroll',height:'200px'}},(0,esm/* mdx */.kt)("table",null,(0,esm/* mdx */.kt)("thead",{parentName:"table"},(0,esm/* mdx */.kt)("tr",{parentName:"thead"},(0,esm/* mdx */.kt)("th",{parentName:"tr","align":"center"},"Paquetes"),(0,esm/* mdx */.kt)("th",{parentName:"tr","align":"center"},"Descripci\xF3n"))),(0,esm/* mdx */.kt)("tbody",{parentName:"table"},(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://www.npmjs.com/package/@eoscostarica/eoscr-components"},"Componentes")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Una colecci\xF3n de componentes React para EOSIO")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://www.npmjs.com/package/@eoscostarica/eoscr-theme"},"Tema Est\xE1ndar")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"El tema est\xE1ndar de EOS Costa Rica nos permitir\xE1 un desarrollo m\xE1s r\xE1pido de sus aplicaciones web y al mismo tiempo est\xE1 disponible para cualquier persona que quiera usarlo")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://www.npmjs.com/package/@eoscostarica/eosjs-camel-api"},"M\xF3dulo API")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Este proyecto envuelve la eosio/eosjs-api oficial para proporcionar una salida camelcase")),(0,esm/* mdx */.kt)("tr",{parentName:"tbody"},(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},(0,esm/* mdx */.kt)("a",{parentName:"td","href":"https://www.npmjs.com/package/fastify-eos"},"Fastify EOS")),(0,esm/* mdx */.kt)("td",{parentName:"tr","align":"center"},"Un complemento que decora Fastify con una instancia de EOS.js"))))));};MDXContent.isMDXComponent=true;

/***/ })

}]);
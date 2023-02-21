"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[8276],{

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

/***/ 3160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": function() { return /* binding */ assets; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; },
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);
/* harmony import */ var _home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1749);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4996);
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'nfts-en-eosio',title:'NFTs en el Ecosistema de EOSIO',sidebar_label:'NFTs en el ecosistema de EOSIO',description:'NFTs que se relacionan con el ecosistema de EOSIO',keywords:['nfts','eosio','NFTs','EOSIO','EOS','EOS Costa Rica','Qué es un NFT','Para que sirven los NFT']};var contentTitle=undefined;var metadata={"unversionedId":"aprender-eosio/nfts-en-eosio","id":"aprender-eosio/nfts-en-eosio","title":"NFTs en el Ecosistema de EOSIO","description":"NFTs que se relacionan con el ecosistema de EOSIO","source":"@site/docs/aprender-eosio/nft-en-eosio.mdx","sourceDirName":"aprender-eosio","slug":"/aprender-eosio/nfts-en-eosio","permalink":"/docs/aprender-eosio/nfts-en-eosio","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/nft-en-eosio.mdx","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1676997593,"formattedLastUpdatedAt":"21 feb 2023","frontMatter":{"id":"nfts-en-eosio","title":"NFTs en el Ecosistema de EOSIO","sidebar_label":"NFTs en el ecosistema de EOSIO","description":"NFTs que se relacionan con el ecosistema de EOSIO","keywords":["nfts","eosio","NFTs","EOSIO","EOS","EOS Costa Rica","Qué es un NFT","Para que sirven los NFT"]},"sidebar":"docs","previous":{"title":"Seguridad Blockchain","permalink":"/docs/aprender-eosio/seguridad-blockchain"},"next":{"title":"Migración de EOSIO a Mandel","permalink":"/docs/aprender-eosio/migracion-mandel"}};var assets={};var toc=[{value:'¿Qué son los NFTs?',id:'qué-son-los-nfts',level:2},{value:'NTFs Marketplaces',id:'ntfs-marketplaces',level:2},{value:'¿Cuales Marketplaces de NFT existen en EOSIO y que diferencias hay entre estos?',id:'cuales-marketplaces-de-nft-existen-en-eosio-y-que-diferencias-hay-entre-estos',level:2},{value:'¿Qué es IPFS y cómo se usa para NFT?',id:'qué-es-ipfs-y-cómo-se-usa-para-nft',level:2},{value:'¿Qué ventajas y desventajas poseen los Marketplaces del ecosistema EOSIO sobre los otros?',id:'qué-ventajas-y-desventajas-poseen-los-marketplaces-del-ecosistema-eosio-sobre-los-otros',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los activos digitales han incursionado en la vida cotidiana de cientos de personas. Utilidades como la verificaci\xF3n de productos, la trazabilidad o la autenticaci\xF3n son algunos de los hechos m\xE1s importantes para los que se utilizan los tokens no fungibles."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para recorrer el tema puedes aprender los siguientes aspectos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"qué-son-los-nfts"},"\xBFQu\xE9 son los NFTs?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"NFT es la versi\xF3n abreviada de Token No Fungible , una aplicaci\xF3n de cadena de bloques que representa la propiedad de cualquier activo f\xEDsico o digital, tiene la caracter\xEDstica de ser \xFAnica y poco com\xFAn. M\xFAsica, videos y arte (digitales) Bienes ra\xEDces, joyer\xEDa o automovil\xEDstica son solo algunos ejemplos de tokenizar activos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ntfs-marketplaces"},"NTFs Marketplaces"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un Marketplace de NFTs es un lugar conveniente para que las personas descubran, compren y vendan NFT. Las personas pueden encontrar lo que buscan, ya sea arte, videos, im\xE1genes o m\xE1s.\nActualmente existe una gran variedad de mercados de NFTs que nos ofrecen contenidos de todo tipo. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Podemos resaltar caracter\xEDsticas importantes al elegir un mercado para nuestro NFT.\nNecesitamos considerar qu\xE9 plataforma se adapta mejor al tipo de NFT que tenemos o estamos buscando, cu\xE1nto cobrar\xE1 el mercado por venta, si corresponde, y qu\xE9 cadena de bloques utiliza. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cuales-marketplaces-de-nft-existen-en-eosio-y-que-diferencias-hay-entre-estos"},"\xBFCuales Marketplaces de NFT existen en EOSIO y que diferencias hay entre estos?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En esta tabla se encuentran algunos de los mejores Marketplaces de NFT en EOSIO, donde puede crear y vender NFT, o simplemente comprar y recolectar nuevos proyectos. Ya sea que est\xE9 comprando, vendiendo o simplemente tenga curiosidad sobre NFT."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{className:"table-nft-marketplaces",mdxType:"Grid"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",null,"Marketplace"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",null,"Descripci\xF3n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",null,"Especificaciones"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{href:"https://www.protonmarket.com/"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Logo de proton market",src:"https://www.protonmarket.com/beta-logo.svg"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A trav\xE9s de Proton Market, cualquiera puede crear, acu\xF1ar y vender NFT f\xE1cil y r\xE1pidamente a una fracci\xF3n del costo de otras plataformas NFT.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",null,"Tipo NFT:")," Juegos, m\xFAsica, coleccionables, Personajes virtuales y m\xE1s."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",null,"Blockchain:")," Proton."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{href:"https://areaxnft.com/"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Logo de AreaX NFT",src:"https://areaxnft.com/img/areax%20logo%20light.68b6831b.svg"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"AreaX NFT es un Marketplace basado en el est\xE1ndar de la cadena de bloques de Telos.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",null,"Tipo NFT:")," Arte digital, memes, m\xFAsica, videos and m\xE1s."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",null,"Blockchain:")," Telos."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{href:"https://wax.atomichub.io/"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Logo de atomicHub",className:"atomicHubLogo",src:"https://wax.atomichub.io/images/logos/atomichub.svg"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The NFT marketplace para juegos y coleccionables.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",null,"Tipo NFT:")," Arte digital, carros, colecciones raras, etc."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",null,"Blockchain:")," Wax.")))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"qué-es-ipfs-y-cómo-se-usa-para-nft"},"\xBFQu\xE9 es IPFS y c\xF3mo se usa para NFT?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Primero definamos qu\xE9 es IPFS, en pocas palabras IPFS es un sistema de archivos distribuido que almacena im\xE1genes, videos, documentos y m\xE1s. Cuando hablamos de c\xF3mo se usa IPFS para NFT, se trata de almacenamiento y seguridad."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cuando creamos una NFT, se vincula autom\xE1ticamente a un archivo digital que se almacena en un sistema, por lo tanto, debemos considerar la importancia de c\xF3mo se vinculan los datos a ese sistema."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"IPFS tiene direccionamiento de contenido, esto genera un identificador de contenido (CID) que se vincula directamente al archivo almacenado en la red de IPFS, el CID solo se puede vincular a un archivo espec\xEDfico, esto nos da la seguridad de que nadie puede reemplazar el contenido sin da\xF1ar el enlace."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"qué-ventajas-y-desventajas-poseen-los-marketplaces-del-ecosistema-eosio-sobre-los-otros"},"\xBFQu\xE9 ventajas y desventajas poseen los Marketplaces del ecosistema EOSIO sobre los otros?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{className:"table-nft-marketplaces",mdxType:"Grid"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{className:"icono"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Icono de verificaci\xF3n verde",src:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('img/nft-on-eosio/check-32.webp')})),"Ventajas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{className:"icono"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Icono de menos rojo",src:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('img/nft-on-eosio/delete-32.webp')})),"Desventajas")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Proton, WAX y Telos tienen diferencias distinguibles sobre otras Blockchains. Una de las principales preocupaciones es la tarifa de gas por transacci\xF3n, que es muy baja o nula. El ecosistema tiene esa ventaja.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Estos Market Places no reciben conexiones con las billeteras m\xE1s populares como Metamask, CoinbaseWallet, Wallet Connect u otras."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Crear el NFT es un proceso en el que debe tener cuidado y estar preparado para administrar el proceso. La experiencia de subir tu cripto arte es una de las m\xE1s f\xE1ciles, con no m\xE1s de 5 pasos.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Solamente se puede usar billeteras permitidas por el ecosistema eosio."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En Proton, solo necesita tener la autenticaci\xF3n de la billetera administrada por su perfil.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"No son tan conocidos como los Marketplaces de Ethereum.")))))));};MDXContent.isMDXComponent=true;

/***/ })

}]);
"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[9933],{

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

/***/ 8314:
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
/* harmony import */ var _home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var _home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'contratos-inteligentes',title:'Contratos Inteligentes en EOSIO',sidebar_label:'Contratos Inteligentes EOSIO',description:'Definiciones y explicaciones de contratos inteligentes en EOSIO.',keywords:['contratos inteligentes','contrato inteligente','smart contract','blockchain','eosio','EOS','WASM','Qué es un contrato inteligente','Cómo crear un contrato inteligente']};var contentTitle=undefined;var metadata={"unversionedId":"aprender-eosio/contratos-inteligentes","id":"aprender-eosio/contratos-inteligentes","title":"Contratos Inteligentes en EOSIO","description":"Definiciones y explicaciones de contratos inteligentes en EOSIO.","source":"@site/docs/aprender-eosio/contratos-inteligentes.md","sourceDirName":"aprender-eosio","slug":"/aprender-eosio/contratos-inteligentes","permalink":"/docs/aprender-eosio/contratos-inteligentes","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/contratos-inteligentes.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675486037,"formattedLastUpdatedAt":"4 feb 2023","frontMatter":{"id":"contratos-inteligentes","title":"Contratos Inteligentes en EOSIO","sidebar_label":"Contratos Inteligentes EOSIO","description":"Definiciones y explicaciones de contratos inteligentes en EOSIO.","keywords":["contratos inteligentes","contrato inteligente","smart contract","blockchain","eosio","EOS","WASM","Qué es un contrato inteligente","Cómo crear un contrato inteligente"]},"sidebar":"docs","previous":{"title":"Cadena de Bloques EOS","permalink":"/docs/aprender-eosio/cadena-de-bloques-eos"},"next":{"title":"Contratos Ricardianos","permalink":"/docs/aprender-eosio/contratos-ricardianos"}};var assets={};var toc=[{value:'Framework de Diseño de Contratos Inteligentes',id:'framework-de-diseño-de-contratos-inteligentes',level:2},{value:'Pasos del Proceso',id:'pasos-del-proceso',level:3},{value:'Modelo de Datos',id:'modelo-de-datos',level:3},{value:'Acciones',id:'acciones',level:3},{value:'Pre- y Post- Condiciones',id:'pre--y-post--condiciones',level:3},{value:'Contratos Inteligentes de Código Abierto',id:'contratos-inteligentes-de-código-abierto',level:2},{value:'Esquema de Contrato Inteligente Básico',id:'esquema-de-contrato-inteligente-básico',level:2},{value:'Recursos Adicionales',id:'recursos-adicionales',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un contrato es un acuerdo que rige los resultados de las acciones una vez dado un conjunto de datos de entrada. Un contrato puede ir desde los tipo legal (ejemplo transacciones financieras) hasta algo m\xE1s simple como las reglas de un juego. Las acciones t\xEDpicas pueden ser transacciones de fondos (en el caso de un contrato financiero) o movimientos de juegos (en el caso de un contrato de juego)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un Contrato Inteligente de EOSIO es software registrado en el blockchain y ejecutado en los nodos de EOSIO, esto implementa las sem\xE1nticas de un contrato cuyo registro de solicitudes de acciones est\xE1n siendo guardadas en el blockchain. El Contrato Inteligente define la interfaz (acciones, par\xE1metros, estructuras de datos) y el c\xF3digo que implementa la interfaz. El c\xF3digo es compilado en el formato ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"bytecode can\xF3nico")," el cual puede ser obtenido y ejecutado por los nodos. El blockchain guarda las transacciones (transferencias legales, movimientos de juego) del contrato. Cada Contrato Inteligente debe ser acompa\xF1ado de un Contrato Ricardiano que define la legalidad de los t\xE9rminos y condiciones enlazadas del contrato."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Visite nuestro ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/tutoriales/cpp-moderno"},"Tutorial C++ Moderno")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"framework-de-diseño-de-contratos-inteligentes"},"Framework de Dise\xF1o de Contratos Inteligentes"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Escasez Digital ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/digital-scarcity/equiprental"},"github repo")," tiene un ejemplo dise\xF1ado para proveer un framework paso a paso y ejemplo de c\xF3mo crear un Contrato Inteligente en EOS. Usa un simple caso de alquiler de equipos que lista el equipo para alquilar y los alquiladores que pagan por el alquiler de dicho equipo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"pasos-del-proceso"},"Pasos del Proceso"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Aqu\xED se pueden ver los pasos generales para desarrollar un Contrato Inteligente.\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Diagrama con los pasos para desarrollar un contrato inteligente",src:(__webpack_require__(5492)/* ["default"] */ .Z),title:"Pasos",width:"711",height:"505"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"modelo-de-datos"},"Modelo de Datos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Define la informaci\xF3n que persistir\xE1 en el Contrato Inteligente.\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Modelo lógico de datos",src:(__webpack_require__(6645)/* ["default"] */ .Z),title:"Modelo de Datos",width:"708",height:"353"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"acciones"},"Acciones"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Define las acciones o el estado de cambio que deben existir en el Contrato Inteligente.\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Diagrama de caso de uso",src:(__webpack_require__(7862)/* ["default"] */ .Z),title:"Acciones",width:"603",height:"489"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"pre--y-post--condiciones"},"Pre- y Post- Condiciones"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Define las acciones o el estado de cambios que deben existir en tu Contrato Inteligente.\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Diagrama con las pre y post condiciones",src:(__webpack_require__(7152)/* ["default"] */ .Z),title:"Pre y Post Condiciones",width:"586",height:"320"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"contratos-inteligentes-de-código-abierto"},"Contratos Inteligentes de C\xF3digo Abierto"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Nosotros manteneos una lista de Contratos Inteligentes de EOS de c\xF3digo de abierto en el siguiente repositorio:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/eoscostarica/eos-contracts"},"https://github.com/eoscostarica/eos-contracts")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Tambi\xE9n, revisar la siguiente lista de Contratos Inteligentes de EOS de c\xF3digo abierto mantenida por C\xE9sar Rodr\xEDguez:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/kesar/eos-awesome-contracts"},"https://github.com/kesar/eos-awesome-contracts")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"esquema-de-contrato-inteligente-básico"},"Esquema de Contrato Inteligente B\xE1sico"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/ZE2HxTmxfrI",frameBorder:0,allowFullScreen:true,loading:"lazy"}," ")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Puedes ver m\xE1s en este canal: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.youtube.com/user/grandmoren1/videos"},"https://www.youtube.com/user/grandmoren1/videos")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"recursos-adicionales"},"Recursos Adicionales"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si desea conocer m\xE1s sobre esto puede visite los siguientes enlaces:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://guias.eoscostarica.io/docs/tutoriales/contrato-hola-mundo"},"Tutorial Contrato Inteligente Hola Mundo")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://developers.eos.io/welcome/v2.1/smart-contract-guides/index"},"Gu\xEDas de Contrato Inteligente")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://cc32d9.gitbook.io/eosio-smart-contract-developers-handbook"},"Manual del desarrollador de Contratos Inteligentes EOSIO"))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 7862:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/actions-24fb6c008553074174ac61de2b60a9b5.webp");

/***/ }),

/***/ 6645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/datamodel-7579c35241a3241cb82d2bbaf2320552.webp");

/***/ }),

/***/ 7152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/prepostconditions-d890230d7d9b92e20c98d0e9f210b300.webp");

/***/ }),

/***/ 5492:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/steps-0bd169453e2a26e850f4f9130d593bc3.webp");

/***/ })

}]);
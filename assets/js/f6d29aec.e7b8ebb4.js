"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[3790],{

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

/***/ 3263:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'migracion-mandel',title:'Migración de EOSIO a Mandel',sidebar_label:'Migración de EOSIO a Mandel',description:'Diferencias entre la red actual EOSIO y Mandel.',keywords:['EOSIO','Mandel','Migración','EOSIO a Mandel','Migracion a Mandel','Cuál es la diferencia entre EOSIO Y Mandel','fractally','ƒractally']};var contentTitle=undefined;var metadata={"unversionedId":"aprender-eosio/migracion-mandel","id":"aprender-eosio/migracion-mandel","title":"Migración de EOSIO a Mandel","description":"Diferencias entre la red actual EOSIO y Mandel.","source":"@site/docs/aprender-eosio/migracion-mandel.md","sourceDirName":"aprender-eosio","slug":"/aprender-eosio/migracion-mandel","permalink":"/docs/aprender-eosio/migracion-mandel","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/migracion-mandel.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675486037,"formattedLastUpdatedAt":"4 feb 2023","frontMatter":{"id":"migracion-mandel","title":"Migración de EOSIO a Mandel","sidebar_label":"Migración de EOSIO a Mandel","description":"Diferencias entre la red actual EOSIO y Mandel.","keywords":["EOSIO","Mandel","Migración","EOSIO a Mandel","Migracion a Mandel","Cuál es la diferencia entre EOSIO Y Mandel","fractally","ƒractally"]},"sidebar":"docs","previous":{"title":"NFTs en el ecosistema de EOSIO","permalink":"/docs/aprender-eosio/nfts-en-eosio"},"next":{"title":"ENF Blue Papers","permalink":"/docs/aprender-eosio/fundacion-red-eos"}};var assets={};var toc=[{value:'Descontento con Block One',id:'descontento-con-block-one',level:2},{value:'EOSIO vs Mandel',id:'eosio-vs-mandel',level:2},{value:'Cambios de Mandel',id:'cambios-de-mandel',level:2},{value:'¿Qué está haciendo ƒractally con Mandel?',id:'qué-está-haciendo-ƒractally-con-mandel',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"descontento-con-block-one"},"Descontento con Block One"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En el a\xF1o 2021, la ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscommunity.org/"},"comunidad EOS")," se sent\xEDa decepcionada por el compromiso de ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://block.one/"},"Block One")," con ellos debido a la falta de inversi\xF3n y acci\xF3n por parte de B1 en el apoyo a la blockchain EOS. Por lo que, mediante un consenso mayoritario de los nodos productores de bloques, la comunidad afirma que la empresa ya no act\xFAa en el mejor inter\xE9s de la red y detuvieron los pagos continuos que recib\xEDa la empresa destinados a mantenimiento."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Tras la ruptura con B1 el fundador de EOS Daniel Larimer indica que era necesario reestructurar y efectuar una reformulaci\xF3n de la marca de EOS tanto su nombre como su visi\xF3n y objetivos. Tambi\xE9n, indica que dicha situaci\xF3n comienza una nueva era de EOS al despedir a B1 y dejar de otorgarles tokens, ya que, permite enfrentar a los intereses corporativos que no se alinean con los de la comunidad EOS."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Tambi\xE9n, la ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eosnetwork.com/"},"EOS Network Foundation")," (ENF) surgi\xF3 como una nueva alternativa para dirigir los fondos de la red hacia el desarrollo del protocolo EOSIO y la red principal EOS."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La visi\xF3n de la EOS Network Foundation es construir un futuro descentralizado que no sacrifique ni a la comunidad, cooperaci\xF3n o consenso, facilitando la innovaci\xF3n mediante la uni\xF3n y empoderamiento de desarrolladores alrededor del mundo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"eosio-vs-mandel"},"EOSIO vs Mandel"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La comunidad de EOS no quer\xEDa que se incluya todo el c\xF3digo de versiones m\xE1s recientes del protocolo, por motivo de que algunas de las funciones agregadas no se alineaban con los intereses de la comunidad, entonces, se decide partir de la versi\xF3n de EOSIO 2.0.13 utilizando solo algunas de las funciones nuevas de EOSIO 2.1.0 y EOSIO 2.2.0."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Por esta raz\xF3n, surge como candidato Mandel (abreviaci\xF3n de Mandelbrot) que es una bifurcaci\xF3n del c\xF3digo de EOSIO, realizada por el equipo de ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://fractally.com/"},"\u0192ractally")," (antes Clarion OS), con el prop\xF3sito de tomar algunas de las mejoras m\xE1s valiosas de EOSIO 2.1.0 y algunas unas pocas de EOSIO 2.2.0. Adem\xE1s, de actualizar el protocolo con ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscommunity.github.io/clsdk-docs/book/std/cpay/index.html"},"contratos de paga")," (Contract Pays) y mejoras en la configuraci\xF3n de los par\xE1metros de la blockchain. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Adem\xE1s, cabe resaltar que Mandel es un nombre provisional. Para m\xE1s informaci\xF3n visite ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://medium.com/edenoneos/eos-mandel-to-takeover-eosio-in-2022-2e25bf5451f0"},"Mandel releva a EOSIO"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Las caracter\xEDsticas anteriores son concentradas en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/eosnetworkfoundation/mandel/releases/tag/v3.1.0-rc1"},"Mandel 3.0"),", el cual deriva de EOSIO 2.0.13, aunque algunos productores de bloques actualizaron a EOSIO 2.1.0, entonces se har\xE1 una versi\xF3n Mandel 2.3 que derive de EOSIO 2.1.0 para facilitar la migraci\xF3n a Mandel 3.0 evitando que se tenga que bajar la versi\xF3n de EOSIO."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cambios-de-mandel"},"Cambios de Mandel"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Entre los cambios incluidos en Mandel 3.0 se destacan los siguientes:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"La posibilidad de configurar l\xEDmites en el WASM, debido a que, por motivos de seguridad se limitaban varios par\xE1metros del WASM, pero, gracias al aumento de rendimiento es seguro aumentar los l\xEDmites y en b\xFAsqueda de expansi\xF3n se han hecho configurables."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Incluir contratos de paga, donde se crea una cuenta ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"provider")," con disposici\xF3n a cierta cantidad de recursos de NET y CPU y se publica la llave privada de su autorizaci\xF3n para que cualquiera pueda firmar una transacci\xF3n y si no es cancelada la cuenta ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"provider")," cubrir\xE1 los costos de NET y CPU, esto con el fin de: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Implementar transacciones que se estructuran de forma id\xE9ntica a las transacciones de Bitcoin. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Eliminar los costes de creaci\xF3n de cuentas para aquellos que s\xF3lo quieren usar EOS como moneda. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Incorporar tokens de privacidad sin que su privacidad se vea comprometida por el sistema de recursos. "))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Mejoras en la configuraci\xF3n de los par\xE1metros de la blockchain que facilita la adici\xF3n, eliminaci\xF3n y configuraci\xF3n de futuras caracter\xEDsticas objetivas.",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Esto permite a los contratos realizar acciones condicionales basadas en la presencia de una caracter\xEDstica o el valor de un par\xE1metro configurado. ")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"qué-está-haciendo-ƒractally-con-mandel"},"\xBFQu\xE9 est\xE1 haciendo \u0192ractally con Mandel?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Seg\xFAn lo indicado por \u0192ractally en su p\xE1gina de preguntas frecuentes ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://fractally.com/blog/eos-community-faq"},"comunidad EOS FAQ"),":"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"\u0192ractally est\xE1 desarrollando un conjunto de est\xE1ndares DeFi de pr\xF3xima generaci\xF3n, incluyendo un est\xE1ndar de tokens, un est\xE1ndar NFT, un sistema de nombres premium, un sistema de s\xEDmbolos premium de tokens y un intercambio descentralizado. Estos est\xE1ndares son necesarios para que \u0192ractally realice su visi\xF3n.")));};MDXContent.isMDXComponent=true;

/***/ })

}]);
"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[3874],{

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

/***/ 2744:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'librerias-sdk',title:'Librerías SDK para EOSIO',sidebar_label:'Librerías SDK',description:'Librerías para utilizar con el blockchain de EOSIO',keywords:['librerias','SDK','EOSIO','EOS','blockchain','EOS Costa Rica','librerias blockchain']};var contentTitle=undefined;var metadata={"unversionedId":"herramientas/librerias-sdk","id":"herramientas/librerias-sdk","title":"Librerías SDK para EOSIO","description":"Librerías para utilizar con el blockchain de EOSIO","source":"@site/docs/herramientas/librerias-sdk.md","sourceDirName":"herramientas","slug":"/herramientas/librerias-sdk","permalink":"/docs/herramientas/librerias-sdk","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/herramientas/librerias-sdk.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1676997593,"formattedLastUpdatedAt":"21 feb 2023","frontMatter":{"id":"librerias-sdk","title":"Librerías SDK para EOSIO","sidebar_label":"Librerías SDK","description":"Librerías para utilizar con el blockchain de EOSIO","keywords":["librerias","SDK","EOSIO","EOS","blockchain","EOS Costa Rica","librerias blockchain"]},"sidebar":"docs","previous":{"title":"Explorador de Bloques","permalink":"/docs/herramientas/explorador-de-bloques"},"next":{"title":"Plantilla Readme","permalink":"/docs/herramientas/plantilla-readme"}};var assets={};var toc=[{value:'Librerías SDK para EOSIO',id:'librerías-sdk-para-eosio',level:2},{value:'Javascript SDK',id:'javascript-sdk',level:2},{value:'eosjs',id:'eosjs',level:3},{value:'eosjs-keygen',id:'eosjs-keygen',level:3},{value:'Swift SDK',id:'swift-sdk',level:2},{value:'eosio-swift',id:'eosio-swift',level:3},{value:'eosio-swift-abieos-serialization-provider',id:'eosio-swift-abieos-serialization-provider',level:3},{value:'eosio-swift-ecc',id:'eosio-swift-ecc',level:3},{value:'eosio-swift-reference-ios-authenticator-signature-provider',id:'eosio-swift-reference-ios-authenticator-signature-provider',level:3},{value:'eosio-swift-softkey-signature-provider',id:'eosio-swift-softkey-signature-provider',level:3},{value:'eosio-swift-vault-signature-provider',id:'eosio-swift-vault-signature-provider',level:3},{value:'eosio-swift-vault',id:'eosio-swift-vault',level:3},{value:'Java SDK',id:'java-sdk',level:2},{value:'eosio-java-android-abieos-serialization-provider',id:'eosio-java-android-abieos-serialization-provider',level:3},{value:'eosio-java-android-rpc-provider',id:'eosio-java-android-rpc-provider',level:3},{value:'eosio-java-softkey-signature-provider',id:'eosio-java-softkey-signature-provider',level:3},{value:'eosio-android-keystore-signature-provider',id:'eosio-android-keystore-signature-provider',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"librerías-sdk-para-eosio"},"Librer\xEDas SDK para EOSIO"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"APIs para integrarse con blockchains basadas en EOSIO."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"javascript-sdk"},"Javascript SDK"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"EOSJS es una biblioteca de JavaScript para la integraci\xF3n con blockchains basadas en EOSIO utilizando la API EOSIO RPC. Esta biblioteca se cre\xF3 para proporcionar una interfaz JavaScript para la interacci\xF3n entre las aplicaciones web del usuario final y las cadenas de bloques EOSIO. A medida que se desarrolla un n\xFAmero significativo de aplicaciones en JavaScript, esta biblioteca est\xE1 dise\xF1ada para brindar un mayor soporte al ecosistema en general y establece las mejores pr\xE1cticas de la industria para la interacci\xF3n de aplicaciones web con las cadenas de bloques EOSIO."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosjs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://developers.eos.io/manuals/eosjs/latest/index"},"eosjs")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una biblioteca de Javascript que proporciona una API para integrarse con cadenas de bloques basadas en EOSIO utilizando la API de EOSIO Nodeos RPC."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosjs-keygen"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosjs-keygen"},"eosjs-keygen")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una biblioteca de Javascript para administrar claves en el almacenamiento local."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"swift-sdk"},"Swift SDK"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift"},"eosio-swift")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una API para integrarse con blockchains basadas en EOSIO utilizando la API EOSIO RPC."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-abieos-serialization-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-abieos-serialization-provider"},"eosio-swift-abieos-serialization-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un proveedor de serializaci\xF3n conectable para EOSIO SDK para Swift."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-ecc"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-ecc"},"eosio-swift-ecc")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una biblioteca para trabajar con claves p\xFAblicas y privadas, firmas criptogr\xE1ficas, cifrado / descifrado, etc. como parte de la familia de bibliotecas EOSIO SDK para Swift."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-reference-ios-authenticator-signature-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-reference-ios-authenticator-signature-provider"},"eosio-swift-reference-ios-authenticator-signature-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un proveedor de firmas conectable para EOSIO SDK para Swift."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-softkey-signature-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-softkey-signature-provider"},"eosio-swift-softkey-signature-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un ejemplo de proveedor de firmas conectable para EOSIO SDK para Swift. Permite firmar transacciones utilizando claves K1 en memoria."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-vault-signature-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-vault-signature-provider"},"eosio-swift-vault-signature-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un proveedor de firmas conectable para EOSIO SDK para Swift."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-vault"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-vault"},"eosio-swift-vault")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una biblioteca de utilidades para trabajar con claves p\xFAblicas / privadas y firmar con Keychain y Secure Enclave de Apple."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"java-sdk"},"Java SDK"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-java-android-abieos-serialization-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-java-android-abieos-serialization-provider"},"eosio-java-android-abieos-serialization-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un proveedor de serializaci\xF3n conectable para EOSIO SDK para Java."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-java-android-rpc-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-java-android-rpc-provider"},"eosio-java-android-rpc-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una implementaci\xF3n de proveedor de RPC de Android para usar dentro de EOSIO SDK para Java como complemento."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-java-softkey-signature-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-java-softkey-signature-provider"},"eosio-java-softkey-signature-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un ejemplo de proveedor de firmas conectable para EOSIO SDK para Java."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-android-keystore-signature-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-android-keystore-signature-provider"},"eosio-android-keystore-signature-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un ejemplo de proveedor de firmas conectable para EOSIO SDK para Java escrito en Kotlin."));};MDXContent.isMDXComponent=true;

/***/ })

}]);
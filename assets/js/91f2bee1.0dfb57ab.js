"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[9009],{

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

/***/ 9754:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'funciones-importantes',title:'Funciones Importantes en EOSIO',sidebar_label:'Funciones Importantes',description:'Funciones Importantes en EOSIO',keywords:['funciones importantes','EOSIO','EOS','EOS Costa Rica','Funciones EOSIO']};var contentTitle=undefined;var metadata={"unversionedId":"aprender-eosio/funciones-importantes","id":"aprender-eosio/funciones-importantes","title":"Funciones Importantes en EOSIO","description":"Funciones Importantes en EOSIO","source":"@site/docs/aprender-eosio/funciones-importantes.md","sourceDirName":"aprender-eosio","slug":"/aprender-eosio/funciones-importantes","permalink":"/docs/aprender-eosio/funciones-importantes","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/funciones-importantes.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1676997593,"formattedLastUpdatedAt":"21 feb 2023","frontMatter":{"id":"funciones-importantes","title":"Funciones Importantes en EOSIO","sidebar_label":"Funciones Importantes","description":"Funciones Importantes en EOSIO","keywords":["funciones importantes","EOSIO","EOS","EOS Costa Rica","Funciones EOSIO"]},"sidebar":"docs","previous":{"title":"Cuentas y Permisos","permalink":"/docs/aprender-eosio/cuentas-permisos"},"next":{"title":"Llaves Privadas","permalink":"/docs/aprender-eosio/llaves-privadas"}};var assets={};var toc=[{value:'Cuenta Privilegiada EOSIO',id:'cuenta-privilegiada-eosio',level:2},{value:'Funciones Privilegiadas EOSIO',id:'funciones-privilegiadas-eosio',level:2},{value:'set_resource_limits',id:'set_resource_limits',level:3},{value:'set_prods',id:'set_prods',level:3},{value:'set_params',id:'set_params',level:3},{value:'set_privileged',id:'set_privileged',level:3},{value:'Acciones de Sistema',id:'acciones-de-sistema',level:2},{value:'new_account',id:'new_account',level:3},{value:'set code',id:'set-code',level:3},{value:'set abi',id:'set-abi',level:3},{value:'updateauth',id:'updateauth',level:3},{value:'deleteauth',id:'deleteauth',level:3},{value:'linkauth',id:'linkauth',level:3},{value:'unlinkauth',id:'unlinkauth',level:3},{value:'Contrato Nativo <code>eosio.token</code>',id:'contrato-nativo-eosiotoken',level:2},{value:'create',id:'create',level:3},{value:'issue',id:'issue',level:3},{value:'retire',id:'retire',level:3},{value:'transfer',id:'transfer',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cuenta-privilegiada-eosio"},"Cuenta Privilegiada EOSIO"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Esta cuenta tiene acceso ilimitado a los recursos de CPU, NET y RAM que representan la m\xE1xima autoridad de la red que puede ejecutar funciones privilegiadas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Por lo general, esta autoridad se invoca mediante un contrato de firma m\xFAltiple (o \"firma m\xFAltiple\") que requerir\xE1 el consentimiento de una supermayor\xEDa de los productores de bloques. Esta cuenta privilegiada se llamar\xE1 cuenta ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"eosio"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"funciones-privilegiadas-eosio"},"Funciones Privilegiadas EOSIO"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los contratos inteligentes de EOSIO son simples archivos de WebAssembly. El formato WebAssembly permite definir importaciones, funciones que no se declaran en WASM en s\xED pero en el entorno en el que se ejecuta el c\xF3digo de WebAssembly. EOSIO utiliza estas funciones integradas (intr\xEDnsecas) para intercambiar datos entre el c\xF3digo de contrato de WebAssembly y el nodo EOSIO ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"nodeos"),". Cada vez que la m\xE1quina virtual EOS (EOSVM), que ejecuta el c\xF3digo de WebAssembly, llega a un nivel intr\xEDnseco, el control del programa se transfiere al c\xF3digo del controlador de nodo para resolverlo. Una lista completa de funciones intr\xEDnsecas para EOSIO 2.0.X se puede encontrar en el siguiente enlace: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160"},"Funciones Intr\xEDnsecas EOSIO"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"set_resource_limits"},"set_resource_limits"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Actualiza los limites de recursos asociados a una cuenta."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"account:  La cuenta destino\nram_bytes:  El limite de RAM en bytes\nnet_weight:  El weight para determinar su capacidad de NET\ncpu_weight:  El weight para determinar su capacidad de CPU\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"set_prods"},"set_prods"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Establece una nueva lista de productores(validadores) activos. Una vez que el bloque con la propuesta se vuelve irreversible los nuevos productores se vuelven activos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"schedule: JSON con lista de productores y sus signing keys\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"set_params"},"set_params"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Modifica uno o varios par\xE1metros de la blockchain."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"max_block_net_usage"),": La cantidad maxima de uso de net en un bloque."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"target_block_net_usage_pct"),": El porcentaje de uso m\xE1ximo de net, pasado este limite la red entra en modo congestion."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"max_transaction_net_usage"),": El uso m\xE1ximo de net que la chain va a permitir, mas all\xE1 de los limites de la cuenta."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"base_per_transaction_net_usage"),": El monto base de uso neto facturado por una transacci\xF3n para cubrir imprevistos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"context_free_discount_net_usage_num"),": El numerador para el descuento en el uso neto de datos sin contexto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"context_free_discount_net_usage_den"),": El denominador para el descuento en el uso neto de datos sin contexto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"max_block_cpu_usage"),": El uso m\xE1ximo de la CPU facturable (en microsegundos) para un bloque."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"target_block_cpu_usage_pct"),": El porcentaje objetivo (1% == 100, 100% = 10,000) del uso m\xE1ximo de CPU; exceder esto desencadena el manejo de la congesti\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"max_transaction_cpu_usage"),": El uso m\xE1ximo de CPU facturable (en microsegundos) que la cadena permitir\xE1 independientemente de los l\xEDmites de la cuenta."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"min_transaction_cpu_usage"),": El uso m\xEDnimo de CPU facturable (en microsegundos) que requiere la cadena."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"max_transaction_lifetime"),": El n\xFAmero m\xE1ximo de segundos que la caducidad de una transacci\xF3n de entrada puede adelantarse a la hora del bloque en el que se incluye por primera vez."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"deferred_trx_expiration_window"),": El n\xFAmero de segundos despu\xE9s del tiempo en que una transacci\xF3n diferida puede ejecutarse primero hasta que caduque."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"max_transaction_delay"),": El n\xFAmero m\xE1ximo de segundos que pueden imponerse como requisito de retraso mediante verificaciones de autorizaci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"max_inline_action_size"),": Tama\xF1o m\xE1ximo permitido (en bytes) de una acci\xF3n en l\xEDnea."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"max_inline_action_depth"),": L\xEDmite de profundidad de recursion al enviar acciones en l\xEDnea."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"max_authority_depth"),": L\xEDmite de profundidad de recursion para verificar si una autoridad est\xE1 satisfecha.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"set_privileged"},"set_privileged"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Permite establecer como privilegiada a una cuenta."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"account: La cuenta que se quiere setear como privilegiada.\nis_priv:  0 para falso, mayor a 0 para verdadero.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"acciones-de-sistema"},"Acciones de Sistema"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Estas acciones no requieren ser ejecutadas por una cuenta privilegiada."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"new_account"},"new_account"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Crea una cuenta nueva."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"creator: Nombre de la cuenta que crea la cuenta nueva.\nname: Nombre de la cuenta nueva.\nowner: Owner public key.\nactive: Active public key.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"set-code"},"set code"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Set code establecer o actualizar un contrato inteligente en una cuenta."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"account: La cuenta a la que se desea publicar un contrato.\ncode: El c\xF3digo en forma de BLOB binario.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"set-abi"},"set abi"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Permite establecer o actualizar el abi para el contrato inteligente, se identifica por account_name."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"account: El nombre de la cuenta destino.\nabi:  El abi.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"updateauth"},"updateauth"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Actualiza los permisos de una cuenta."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"account:  La cuenta que se desea modificar.\npemission:  El nombre del nuevo permiso.\nparent: El permiso padre del nuevo permiso.\nauth: El json definiendo la autorizaci\xF3n de permisos.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"deleteauth"},"deleteauth"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"elimina la autorizaci\xF3n de permisos de una cuenta."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"account: La cuenta destino.\npermission: El nombre del permiso que se desea eliminar.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"linkauth"},"linkauth"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Asigna una acci\xF3n especifica de un contrato a un permiso especifico, cinco acciones no pueden ser linkeadas ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"updateauth"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"deleteauth"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"linkauth"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unlikauth"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"canceldelay"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"account: Cuenta destino.\ncode: Cuenta owner de la acci\xF3n que se desea linkear.\ntype: La acci\xF3n que se desea linkear.\nrequirement: El permiso a linkear.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"unlinkauth"},"unlinkauth"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es la reversa de linkauth."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"account: Cuenta destino.\ncode: Cuenta owner de la acci\xF3n que se desea deslinkear.\ntype: La acci\xF3n que se desea deslinkear.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"contrato-nativo-eosiotoken"},"Contrato Nativo ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},"eosio.token")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Estas acciones pueden ser ejecutadas por cualquier cuenta con el fin de emitir un token propio."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"create"},"create"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Le permite a una cuenta issuer crear un token."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"issuer: La cuenta que crea el token.\nmaximum_supply: La cantidad maxima junto al s\xEDmbolo del token.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"issue"},"issue"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Esta acci\xF3n distribuye a una cuenta una cantidad de tokens determinada."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"to: Cuenta a la que se distribuyen los tokens.\nquantity: La cantidad de tokens a distribuir.\nmemo: memo que acompa\xF1a la distribuci\xF3n inicial de tokens.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"retire"},"retire"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El opuesto a crear un token."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"quantity: La cantidad de tokens a retirar.\nmemo : El memo que acompa\xF1a la transacci\xF3n.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"transfer"},"transfer"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Transfiere de una cuenta origen a una cuenta destino una cantidad \"n\" de tokens."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},"from: Cuenta origen desde donde se debitan los tokens.\no: Cuenta destino a la que acreditar los tokens.\nquantity: La cantidad de tokens.\nmemo: Memo que acompa\xF1a la transacci\xF3n.\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);
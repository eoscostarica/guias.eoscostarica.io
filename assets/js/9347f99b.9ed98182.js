"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[7860],{

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

/***/ 2230:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'cuentas-permisos',title:'Cuentas y Permisos de EOSIO',sidebar_label:'Cuentas y Permisos',description:'Cuentas y Permisos para el uso de EOSIO',keywords:['cuentas permisos','Cuentas y Permisos','cuentas','permisos','EOSIO','EOS','EOS Costa Rica','Para qué son los permisos EOSIO']};var contentTitle=undefined;var metadata={"unversionedId":"aprender-eosio/cuentas-permisos","id":"aprender-eosio/cuentas-permisos","title":"Cuentas y Permisos de EOSIO","description":"Cuentas y Permisos para el uso de EOSIO","source":"@site/docs/aprender-eosio/cuentas-permisos.md","sourceDirName":"aprender-eosio","slug":"/aprender-eosio/cuentas-permisos","permalink":"/docs/aprender-eosio/cuentas-permisos","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/cuentas-permisos.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675486037,"formattedLastUpdatedAt":"4 feb 2023","frontMatter":{"id":"cuentas-permisos","title":"Cuentas y Permisos de EOSIO","sidebar_label":"Cuentas y Permisos","description":"Cuentas y Permisos para el uso de EOSIO","keywords":["cuentas permisos","Cuentas y Permisos","cuentas","permisos","EOSIO","EOS","EOS Costa Rica","Para qué son los permisos EOSIO"]},"sidebar":"docs","previous":{"title":"Componentes EOSIO","permalink":"/docs/aprender-eosio/componentes-eosio"},"next":{"title":"Funciones Importantes","permalink":"/docs/aprender-eosio/funciones-importantes"}};var assets={};var toc=[{value:'Cuentas',id:'cuentas',level:2},{value:'Permisos',id:'permisos',level:2},{value:'Autorizaciones',id:'autorizaciones',level:2},{value:'Autenticado (Wallets)',id:'autenticado-wallets',level:2},{value:'Capa de Acceso al Wallet de Tránsito',id:'capa-de-acceso-al-wallet-de-tránsito',level:3},{value:'Biblioteca de Autenticación Universal',id:'biblioteca-de-autenticación-universal',level:2},{value:'Autenticadores Disponibles:',id:'autenticadores-disponibles',level:3},{value:'KEOSD',id:'keosd',level:2},{value:'Permisos de EOSIO',id:'permisos-de-eosio',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cuentas"},"Cuentas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"cuenta")," en EOSIO es un nombre legible para humanos que se almacena en la cadena de bloques. Puede ser propiedad de un individuo o grupo de individuos dependiendo de la configuraci\xF3n de los permisos. Se requiere una cuenta para transferir o enviar cualquier transacci\xF3n v\xE1lida a la cadena de bloques."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"a")," a la ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"z")," en min\xFAscula, n\xFAmeros del ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"1")," al ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"5")," y tener una longitud de 12 caracteres. Por ejemplo : ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"cuentaeosio1"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"M\xE1s infomaci\xF3n sobre ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-create-an-account"}," creaci\xF3n de cuenta EOSIO"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"permisos"},"Permisos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"EOSIO permite crear permisos jer\xE1rquicos personalizados que se derivan del permiso ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"owner"),". Un permiso personalizado es b\xE1sicamente una llave que solo puede realizar las acciones que se le permite realizar."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Por ejemplo"),": Cualquier cuenta puede crear un permiso personalizado con su par de llaves \xFAnicas para interactuar \xFAnicamente con un contrato.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"De esta manera, EOSIO ofrece capacidades de permisos de \xFAltima generaci\xF3n con una gran flexibilidad para configurar un protocolo simple o complejo integrado en el protocolo base."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los permisos de la cuenta tambi\xE9n fortalecen la seguridad en caso de que alguien que no est\xE9 autorizado obtenga una llave privada, lo \xFAnico que puede hacer son las acciones que la clave se ha limitado a ejecutar."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"autorizaciones"},"Autorizaciones"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una cuenta puede definir una asignaci\xF3n entre cualquiera de sus permisos nombrados y un contrato inteligente o acci\xF3n dentro de ese contrato. Esto permite un control m\xE1s preciso sobre las autorizaciones de acci\xF3n, lo que facilita mucho que las cuentas que pertenecen a actores con diferentes roles dentro de una organizaci\xF3n reflejen la estructura organizativa en la cadena de bloques."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En otras palabras, el permiso de cada cuenta se puede vincular a una tabla de autoridad utilizada para determinar si se puede satisfacer una autorizaci\xF3n de acci\xF3n determinada."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para obtener m\xE1s informaci\xF3n sobre estos conceptos, consulte ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/welcome/v2.1/smart-contract-guides/before-you-begin/accounts-and-permissions"},"documentaci\xF3n de cuentas y permisos"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"autenticado-wallets"},"Autenticado (Wallets)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Las billeteras son clientes que almacenan llaves privadas asociadas con los permisos de una o m\xE1s cuentas. Idealmente, una billetera tiene un estado bloqueado (encriptado) y desbloqueado (sin encriptar) que est\xE1 protegido por una contrase\xF1a de alta entrop\xEDa."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"capa-de-acceso-al-wallet-de-tránsito"},"Capa de Acceso al Wallet de Tr\xE1nsito"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Esta biblioteca es una peque\xF1a capa de abstracci\xF3n sobre ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"eosjs")," que tiene como objetivo ayudar a los desarrolladores de EOS dApp (aplicaci\xF3n descentralizada) con la comunicaci\xF3n de billetera (verificaci\xF3n y aceptaci\xF3n de firma) al proporcionar una API simple e intuitiva."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En lugar de centrarse en admitir proveedores de firmas espec\xEDficos uno por uno, los desarrolladores pueden admitir a todos los que han creado un complemento de Transit, lo que permite al usuario utilizar su proveedor de firmas de elecci\xF3n. De esta manera, gana el mejor UX para proveedores de firmas y los desarrolladores pueden centrarse en construir su dApp en lugar de configurar conexiones ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"eosjs")," y de billetera."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Consulte la ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Gu\xEDa de inicio r\xE1pido")," y la gu\xEDa completa en los documentos del paquete ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/eosnewyork/eos-transit"},"eos-transit"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"biblioteca-de-autenticación-universal"},"Biblioteca de Autenticaci\xF3n Universal"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Existe una biblioteca que permite a las aplicaciones usar f\xE1cilmente diferentes proveedores de autenticaci\xF3n. Los desarrolladores de aplicaciones deben admitir muchos proveedores de autenticaci\xF3n (billeteras) para maximizar el alcance del usuario y permitir la elecci\xF3n del usuario."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La librer\xEDa ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/EOSIO/universal-authenticator-library"},"Universal Authenticator Library (UAL)")," logra este objetivo al abstraer la l\xF3gica comercial interna de muchos proveedores de autenticaci\xF3n y exponer una \xFAnica API universal."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"autenticadores-disponibles"},"Autenticadores Disponibles:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://github.com/EOSIO/ual-scatter"},"UAL for Scatter")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://github.com/EOSIO/ual-lynx"},"UAL for Lynx")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://github.com/EOSIO/ual-ledger"},"UAL for Ledger")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://github.com/EOSIO/ual-token-pocket"},"UAL for Token Pocket")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://github.com/meet-one/ual-meetone"},"UAL for MEET.ONE")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://github.com/greymass/ual-anchor"},"UAL for Anchor"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"keosd"},"KEOSD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En la distribuci\xF3n de EOSIO viene incluido un cliente CLI llamado ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eos/latest/cleos/index"},"cleos")," que interact\xFAa con un cliente llamado ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eos/latest/keosd/index"},"keosd")," que proporciona un servicio de billetera seguro y un punto final API para aplicaciones que requieren integraci\xF3n de back-end con un proveedor de firmas digitales."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"permisos-de-eosio"},"Permisos de EOSIO"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los permisos de EOSIO hacen posible fortalecer la seguridad de la cuenta al punto donde la p\xE9rdida o robo de las llaves son nada m\xE1s que peque\xF1as inconveniencias. Este episodio semanal de EOS cubre qu\xE9 son los permisos de EOSIO a un nivel conceptual y la tendencia a redes de cuentas interconectadas fuertes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/kTjF0-Edxw8",frameBorder:0,allowFullScreen:true,loading:"lazy"}," ")));};MDXContent.isMDXComponent=true;

/***/ })

}]);
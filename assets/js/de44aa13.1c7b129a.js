"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[5306],{

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

/***/ 5518:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'contrato-hola-mundo',title:'Creando Contrato para EOSIO',sidebar_label:'Contrato Hola Mundo',description:'Creando contrato hola mundo para la blockchain EOSIO',keywords:['contrato','crear contrato','eosio','blockchain','EOS','Qué es un contrato inteligente','Qué es un contrato inteligente']};var contentTitle=undefined;var metadata={"unversionedId":"tutoriales/contrato-hola-mundo","id":"tutoriales/contrato-hola-mundo","title":"Creando Contrato para EOSIO","description":"Creando contrato hola mundo para la blockchain EOSIO","source":"@site/docs/tutoriales/contrato-hola-mundo.md","sourceDirName":"tutoriales","slug":"/tutoriales/contrato-hola-mundo","permalink":"/docs/tutoriales/contrato-hola-mundo","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/contrato-hola-mundo.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1676997593,"formattedLastUpdatedAt":"21 feb 2023","frontMatter":{"id":"contrato-hola-mundo","title":"Creando Contrato para EOSIO","sidebar_label":"Contrato Hola Mundo","description":"Creando contrato hola mundo para la blockchain EOSIO","keywords":["contrato","crear contrato","eosio","blockchain","EOS","Qué es un contrato inteligente","Qué es un contrato inteligente"]},"sidebar":"docs","previous":{"title":"ENF Blue Papers","permalink":"/docs/aprender-eosio/fundacion-red-eos"},"next":{"title":"C++ Moderno","permalink":"/docs/tutoriales/cpp-moderno"}};var assets={};var toc=[{value:'Obtenga sus Llaves Privadas',id:'obtenga-sus-llaves-privadas',level:2},{value:'Adquirir Recurso RAM',id:'adquirir-recurso-ram',level:2},{value:'Crear un Contrato',id:'crear-un-contrato',level:2},{value:'Publicar el Contrato',id:'publicar-el-contrato',level:2},{value:'Video Tutorial',id:'video-tutorial',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Explicamos con ejemplos c\xF3mo crear una cuenta y un contrato ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Hello World")," para subir a una blockchain basada en EOS.IO. Para este ejemplo, nos basamos en recursos publicados por ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/"},"Block.one para compartir con la comunidad"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"obtenga-sus-llaves-privadas"},"Obtenga sus Llaves Privadas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Mas informaci\xF3n ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas"},"sobre llaves privadas"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"adquirir-recurso-ram"},"Adquirir Recurso RAM"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una vez que se tiene la cuenta, podemos usar el Faucet para recibir tokens ficticios gratis, que en este caso ser\xE1n EOS, necesarios para usar recursos de la red (siempre y cuando se tenga participaci\xF3n en esa red). La l\xF3gica de esto es que, para el contrato, estaremos requiriendo adquirir recursos RAM de block producers, para lo cual necesitaremos estos EOS que se nos acaban de enviar."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Con este comando podemos revisar la cantidad de EOS con los que contamos en esta cuenta (que en este caso son 100 EOS), as\xED como el recurso RAM, que en este momento es de 5.366 KiB."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para adquirir RAM, escribimos el comando ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"buyram")," para nuestra cuenta. Se debe especificar dos veces el nombre de la cuenta, una vez para definir de d\xF3nde salen los EOS y otra vez para indicar hacia d\xF3nde se env\xEDa el RAM. En la misma l\xEDnea, se debe indicar la cantidad de EOS que estaremos aportando. Para el ejemplo estaremos enviando 50 EOS. Al tener la billetera desbloqueada, autom\xE1ticamente adquirimos el RAM por el monto de EOS que indicamos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Luego de ejecutar la compra, se puede verificar que ahora se tienen 86 KiB de RAM y solo 50 EOS de los 100 que originalmente nos fueron asignados."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En el block explorer de Bloks.io, se puede buscar la informaci\xF3n de esa cuenta. Adicionalmente, se pueden revisar las acciones tomadas, incluyendo las transacciones de compra de RAM, los tokens del Faucet y el historial completo de movimientos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"crear-un-contrato"},"Crear un Contrato"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para continuar, vamos a crear un contrato sencillo dentro de un nuevo directorio, el cual llamamos \u201Cholacontrato\u201D. Como en EOS se requieren recursos, estos deber\xE1n estar asociados a los tokens de una cuenta, por lo que se debe poner el mismo nombre del contrato anteriormente creado."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para editar el contrato, puede usarse un editor de texto. Para este ejemplo se utiliz\xF3 Sublime Text."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La primera l\xEDnea incluye una librer\xEDa que a la cual se tiene acceso a trav\xE9s del Contract Development Toolkit (CDT), una herramienta que permite acceder a recursos para crear los contratos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En la l\xEDnea de clase, se deber\xE1 exponer nuestro contrato \u201Cholacontrato\u201D que tiene una acci\xF3n definida, que en este caso llamamos \u201CHola\u201D y su argumento es un usuario tipo nombre. Al guardar el contrato, en el directorio queda un archivo C++."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El archivo C++ se tiene que compilar usando la herramienta CDT (Contract Development Toolkit), que recibe de input el archivo C++ y como output origina un archivo web assembly (wasm) que es un archivo ejecutable por el contrato. Adicional al archivo wasm, tambi\xE9n se genera un archivo abi que sirve para el mapeo de las funciones del contrato. El comando va a recibir el contrato como un input y como output va a generar un archivo wasm que es el archivo que realmente se sube al blockchain."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Como no especificamos una, el sistema nos da un mensaje de que no existe una cl\xE1usula ricardiana. Una cl\xE1usula ricardiana es un contrato en prosa, escrito en ingl\xE9s, que describe la intenci\xF3n del contrato y que debe estar alineada con la intenci\xF3n para la que se cre\xF3. En el sitio de Block.one vienen recursos para las cl\xE1usulas ricardianas. Para efectos del ejemplo no creamos uno."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una vez ejecutado el comando para set contract, el sistema lee la informaci\xF3n en el contrato para luego publicarlo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"publicar-el-contrato"},"Publicar el Contrato"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para publicar nuestro contrato, debemos usar el comando usado en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"cleos")," y el API endpoint usado anteriormente para subir el contrato a la ubicaci\xF3n que queremos con un permiso activo para poder firmar con la billetera creada."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"De vuelta al block explorer (Bloks.io), podemos verificar que la cuenta es due\xF1a de un contrato que expone la acci\xF3n \u201CHola\u201D y que contiene la informaci\xF3n abi en la que se especifican en estructura JSON las acciones dentro del contrato y componentes asociados."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una vez que el contrato est\xE9 listo, podemos ejecutar una acci\xF3n en el contrato. Con cleos existe un comando para especificar el endpoint y as\xED ejecutar la acci\xF3n \u201CHola\u201D. Para este ejemplo, ponemos como input: \u201Ceoscostarica\u201D. El output de la acci\xF3n ser\xE1 el texto \u201CHola eoscostarica\u201D."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Podemos verificar en el explorador de bloques las acciones ejecutadas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es necesario esperar unos segundos para completar la irreversibilidad del bloque, ya que los block producers deben hacer la validaci\xF3n del bloque de datos para esto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Finalmente, esta es una muestra de c\xF3mo se puede interactuar con una blockchain. Existen herramientas de Javascript, librer\xEDa ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/herramientas/librerias-sdk#eosjs"},"EOS JS")," que podr\xEDa implementarse para ejecutar acciones de una manera m\xE1s program\xE1tica para integrar con dApps, poder persistir datos, o incluso ejecutar l\xF3gica de negocios en la blockchain con este mismo patr\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"video-tutorial"},"Video Tutorial"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/nMivNMvS09Y",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:true}));};MDXContent.isMDXComponent=true;

/***/ })

}]);
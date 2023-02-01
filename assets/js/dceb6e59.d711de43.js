"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[2181],{

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

/***/ 1454:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'mecanismo-de-consenso',title:'Algoritmo de Consenso DPoS',sidebar_label:'Algoritmo de Consenso DPoS',description:'Algoritmo de Consenso DPoS para redes blockchain basadas en protocolo EOSIO',keywords:['algoritmos de consenso','blockchain','eosio','Delegated Proof of Stake','DPoS','Mecanismo de Consenso','Qué es un mecanismo de consenso','Para qué es un algoritmo de consenso','Proof of Stake']};var contentTitle=undefined;var metadata={"unversionedId":"aprender-eosio/mecanismo-de-consenso","id":"aprender-eosio/mecanismo-de-consenso","title":"Algoritmo de Consenso DPoS","description":"Algoritmo de Consenso DPoS para redes blockchain basadas en protocolo EOSIO","source":"@site/docs/aprender-eosio/mecanismo-de-consenso.md","sourceDirName":"aprender-eosio","slug":"/aprender-eosio/mecanismo-de-consenso","permalink":"/docs/aprender-eosio/mecanismo-de-consenso","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/mecanismo-de-consenso.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675284816,"formattedLastUpdatedAt":"1 feb 2023","frontMatter":{"id":"mecanismo-de-consenso","title":"Algoritmo de Consenso DPoS","sidebar_label":"Algoritmo de Consenso DPoS","description":"Algoritmo de Consenso DPoS para redes blockchain basadas en protocolo EOSIO","keywords":["algoritmos de consenso","blockchain","eosio","Delegated Proof of Stake","DPoS","Mecanismo de Consenso","Qué es un mecanismo de consenso","Para qué es un algoritmo de consenso","Proof of Stake"]},"sidebar":"docs","previous":{"title":"Protocolo EOSIO y Antelope","permalink":"/docs/aprender-eosio/protocolo-eosio"},"next":{"title":"Uso de Recursos","permalink":"/docs/aprender-eosio/uso-de-recursos"}};var assets={};var toc=[{value:'Delegated Proof of Stake (DPoS)',id:'delegated-proof-of-stake-dpos',level:2},{value:'¿Qué es un productor de bloques?',id:'qué-es-un-productor-de-bloques',level:2},{value:'Explicando el rol de un productor de bloques de EOS',id:'explicando-el-rol-de-un-productor-de-bloques-de-eos',level:3},{value:'Productores de Bloques Activos',id:'productores-de-bloques-activos',level:3},{value:'Cronograma de Producción',id:'cronograma-de-producción',level:3},{value:'Tolerancia a Fallas Bizantinas',id:'tolerancia-a-fallas-bizantinas',level:3},{value:'Tolerancia a Fallas en Nodos',id:'tolerancia-a-fallas-en-nodos',level:3},{value:'Productores de Bloques de Reserva',id:'productores-de-bloques-de-reserva',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la \xFAnica versi\xF3n de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo com\xFAn que sea una aceptado por toda la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un Algoritmo de consenso es un proceso en Ciencias de la Computaci\xF3n usado para lograr acuerdo en un s\xF3lo valor de datos entre procesos o sistemas distribuidos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La tecnolog\xEDa Blockchain depende de Algoritmos de Consenso para lograr un acuerdo entre los nodos. Un blockchain puede ser pensado como una base de datos descentralizada que es manejada por computadoras distribuidas en una red de punto a punto (P2P). Cada punto mantiene una copia del estado de la red para prevenir un punto \xFAnico de fallo (en ingl\xE9s SPOF). Actualizaciones y validaciones son reflejadas en todas las copias simult\xE1neamente."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"delegated-proof-of-stake-dpos"},"Delegated Proof of Stake (DPoS)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/OVKAOwzAwHI",frameBorder:0,allowFullScreen:true,loading:"lazy"}," ")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El software EOSIO utiliza el \xFAnico conocido Algoritmo de Consenso Descentralizado probado capaz de cumplir los requerimientos de rendimiento de las aplicaciones en el blockchain, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Delegated Proof of Stake (DPoS)"),". Bajo este algoritmo, aquellos que mantienen token en el blockchain adoptando el software EOSIO pueden seleccionar los productores de bloques atrav\xE9s de un sistema de aprobaci\xF3n continua. Cualquiera que elija participar en la producci\xF3n de bloques tendr\xE1n la oportunidad de producirlos, siempre que puedan persuadir a los titulares de tokens para que voten por ellos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper"},"DPOS Algoritmo de Consenso"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"EOSIO delegar\xE1 la autoridad para validar y escribir nuevos bloques a un grupo de nodos que llamamos ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#qu%C3%A9-es-un-productor-de-bloques"},"Productores de Bloques"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"qué-es-un-productor-de-bloques"},"\xBFQu\xE9 es un productor de bloques?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los productores de bloques proveen la infraestructura requerida para procesar las transacciones. Algunos productores de bloques operan con sus propios equipos f\xEDsicos, mientras otros proveen servicios utilizando servicios en la nube de terceros."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"explicando-el-rol-de-un-productor-de-bloques-de-eos"},"Explicando el rol de un productor de bloques de EOS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/YLt5uexD9gg",frameBorder:0,allowFullScreen:true,loading:"lazy"}," ")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"productores-de-bloques-activos"},"Productores de Bloques Activos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los nodos autorizados como productores de bloques activos pertenecen a un grupo que comparte la responsabilidad de validar y escribir todas las acciones en la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Son capaces de reconocer las firmas de los nodos escritores y verificar que las transacciones hayan sido transmitidas a la red por nodos autorizados mediante listas blancas en contratos inteligentes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una red EOSIO esta configurada por defecto para utilizar 21 productores activos y una serie productores de reserva para una operaci\xF3n estable."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"EOSIO permite hasta 125 productores de bloque activos, especificado mediante ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"max_producers")," en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106"},"config.hpp"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"cronograma-de-producción"},"Cronograma de Producci\xF3n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En redes EOSIO, los productores de bloques activos se enumeran en un cronograma, llamado ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"schedule"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La lista de cuentas de productores en el schedule se ordena alfab\xE9ticamente y as\xED se define la secuencia en que deben firmar bloques."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cada productor recibe una ventana de 12 bloques para firmar antes de que el siguiente productor inicie su ventana. Los bloques nuevos son producidos por el primer nodo en la lista durante un periodo de 6 segundos (12 bloques) y luego pasa el siguiente nodo a producir los siguientes 12 bloques y as\xED sucesivamente."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si un nodo productor no est\xE1 listo o no est\xE1 disponible, no hay nadie para producir los 12 bloques, por lo que todas las transacciones especulativas se retrasan hasta que el pr\xF3ximo productor comience a firmar."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"tolerancia-a-fallas-bizantinas"},"Tolerancia a Fallas Bizantinas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los bloques no se consideran irreversibles en la cadena hasta que hayan sido validados por 2/3 +1 de los productores activos. De tal manera que si un productor del grupo inserta un bloque invalido los nodos siguientes lo rechazaran y las transacciones y no ser\xE1n incluidas sin que 2/3 +1 hayan validado ese bloque."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Ejemplo:")," Una red de 21 productores activos requiere validaci\xF3n de 15 nodos (2/3 +1), lo cual toma en promedio 90 segundos para obtener irreversibilidad de un bloque nuevo")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"tolerancia-a-fallas-en-nodos"},"Tolerancia a Fallas en Nodos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una vez que se firma un bloque, otros productores lo validan en el cronograma y pasa a un estado irreversible despu\xE9s de que 2/3 + 1 productores lo hayan validado. Entonces, si 1/3 o m\xE1s de todos los productores est\xE1n fuera de l\xEDnea, el \xFAltimo n\xFAmero de bloque irreversible, conocido como ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Last Irreversible Block")," o ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"LIB"),", no aumentar\xEDa y la cadena de bloques se detendr\xE1."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los servidores a veces fallan, y a veces deben ser retirados de operaci\xF3n para actualizaciones de software y mantenimiento del sistema, lo que es importante considerar en redes EOSIO peque\xF1as."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Con solo 5 productores, la red tolerar\xE1 que 1 productor se desconecte. Si m\xE1s de uno est\xE1 fuera de l\xEDnea, el n\xFAmero del ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"LIB")," dejar\xE1 de moverse y la red se detendr\xE1. Con 4 nodos, la interrupci\xF3n de un nodo interrumpir\xE1 la operaci\xF3n. Con 9 productores, dos nodos pueden desconectarse sin romper la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es importante que las llaves privadas de producci\xF3n est\xE9n respaldadas correctamente. Si se pierden llaves de productores de bloques debido a un desastre del sistema, existe la posibilidad de que la red deje de funcionar para siempre."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"productores-de-bloques-de-reserva"},"Productores de Bloques de Reserva"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Las redes EOSIO manejan un grupo de nodos productores de bloques registrados que pueden asumir el rol de productores de bloques con solo ser agregado al schedule de productores activos."));};MDXContent.isMDXComponent=true;

/***/ })

}]);
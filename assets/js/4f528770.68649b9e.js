"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[4150],{

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

/***/ 7457:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'mecanismos-de-consenso-blockchain',title:'Algoritmos de Consenso Blockchain',sidebar_label:'Mecanismos de Consenso',description:'Definición y explicaciones con temas relacionados a los mecanismos de consenso en protocolos Blockchain',keywords:['Algoritmo de Consenso','Mecanismos de Consenso','DPoS','POS','POW','Proof of Work','Delegated Proof of Stake','Proof of Stake','Protocolos Blockchain']};var contentTitle=undefined;var metadata={"unversionedId":"mecanismos-de-consenso-blockchain","id":"mecanismos-de-consenso-blockchain","title":"Algoritmos de Consenso Blockchain","description":"Definición y explicaciones con temas relacionados a los mecanismos de consenso en protocolos Blockchain","source":"@site/docs/mecanismos-de-consenso-blockchain.md","sourceDirName":".","slug":"/mecanismos-de-consenso-blockchain","permalink":"/docs/mecanismos-de-consenso-blockchain","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/mecanismos-de-consenso-blockchain.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675486037,"formattedLastUpdatedAt":"4 feb 2023","frontMatter":{"id":"mecanismos-de-consenso-blockchain","title":"Algoritmos de Consenso Blockchain","sidebar_label":"Mecanismos de Consenso","description":"Definición y explicaciones con temas relacionados a los mecanismos de consenso en protocolos Blockchain","keywords":["Algoritmo de Consenso","Mecanismos de Consenso","DPoS","POS","POW","Proof of Work","Delegated Proof of Stake","Proof of Stake","Protocolos Blockchain"]},"sidebar":"docs","previous":{"title":"IPFS (Interplanetary File System)","permalink":"/docs/interplanetary-file-system"},"next":{"title":"Protocolo EOSIO y Antelope","permalink":"/docs/aprender-eosio/protocolo-eosio"}};var assets={};var toc=[{value:'Proof of Work (PoW)',id:'proof-of-work-pow',level:2},{value:'Proof of Stake (PoS)',id:'proof-of-stake-pos',level:2},{value:'Diferencias entre los Mecanismos',id:'diferencias-entre-los-mecanismos',level:2},{value:'Otros Mecanismos de Consenso',id:'otros-mecanismos-de-consenso',level:2},{value:'Proof of Capacity (PoC)',id:'proof-of-capacity-poc',level:3},{value:'Proof of Activity (PoA)',id:'proof-of-activity-poa',level:3},{value:'Proof of Burn (PoB)',id:'proof-of-burn-pob',level:3},{value:'Proof of History (PoH)',id:'proof-of-history-poh',level:3},{value:'Proof of Elapsed Time (PoET)',id:'proof-of-elapsed-time-poet',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es importante tener conocimiento sobre cuales han sido los mecanismos de consenso utilizados por las distintas redes blockchain para mantener la seguridad e integridad dentro de la red, asi como los beneficios y las redes que aun la conforman."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"proof-of-work-pow"},"Proof of Work (PoW)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/3EUAcxhuoU4",frameBorder:"0",allowFullScreen:true,loading:"lazy"}," ")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es el primer mecanismo de consenso presentado por Satoshi Nakamoto en el whitepaper del Bitcoin en el 2008, en este consenso un grupo de transacciones denominadas \"Mempool\" son verificadas por los \"mineros\", los cuales resuelven un complejo problema matem\xE1tico (mismo que aumenta en complejidad entre m\xE1s se validen bloques) por lo que se requieren equipos de c\xF3mputo en este caso de \"miner\xEDa\" especializados y a su vez grandes cantidades de energ\xEDa."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El primer minero que encuentre la soluci\xF3n al problema y esta sea probada por los dem\xE1s mineros obtiene el derecho de agregar el \"Mempool\" al blockchain y obtener una recompensa de bloque o \"Block reward\" compuesta por criptomonedas generadas por las comisiones de transacci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Debido a los altos requerimientos para poder \"minar\" se han formado grupos de minado o \"Pool mining\" con el de fin de lograr encontrar la soluci\xF3n al problema matem\xE1tico con la utilizaci\xF3n de recursos, con ello tener mejores oportunidades de encontrar la soluci\xF3n primero que los mineros individuales con mayores recursos y la recompensa obtenida es repartida entre los miembros del pool."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En la actualidad las redes que utilizan este mecanismo de consenso son:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Bitcoin."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Ethereum (En un futuro es posible que cambie a PoS)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Monero."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Entre otras.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si se desea obtener m\xE1s informaci\xF3n puede visitar el glosario ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/herramientas/glosario#proof-of-work"},"Proof of Work"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"proof-of-stake-pos"},"Proof of Stake (PoS)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/psKDXvXdr7k",frameBorder:"0",allowFullScreen:true,loading:"lazy"}," ")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este mecanismo de consenso nace con el 2011 con el fin de eliminar aquellas limitaciones presentes en su antecesor proof of work, teniendo en lugar de \"mineros\" que requieren recursos para la verificaci\xF3n de transacciones tales como equipos especializados y grandes cantidades energ\xEDa a los \"validadores\" los cuales son due\xF1os de monedas y ponen como colateral ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/herramientas/glosario/#stake"},"\"Stake\"")," cierta cantidad de monedas, siendo escogido de manera aleatoria los validadores responsables de \"validar\" o \"minar\" en caso de que exista un validador corrupto perder\xE1 el stake y no podr\xE1 ser validador en el futuro."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para la validaci\xF3n de transacciones en EOSIO se requiere una mayor\xEDa de 2/3+1 para el consenso (Este dato puede variar seg\xFAn la red) del total de los validadores aprueben y el bloque de transacciones. Para la elecci\xF3n de los validadores se toma en consideraci\xF3n los siguientes aspectos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Cantidad de tokens (Entre m\xE1s alta sea cantidad mayor la probabilidad de ser elegido)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Edad de las monedas apostadas, una vez utilizadas se reinicia a 0 (Entre m\xE1s tiempo sin ser utilizadas mayor la probabilidad de ser elegido)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Selecci\xF3n aleatoria.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Como podemos ver, es un mecanismo que favorece a los mayores poseedores de monedas y este a su vez espera que act\xFAen de buena fe y castiga severamente a aquellos que no siendo la recompensa mucho menor que el riesgo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En la actualidad las redes que utilizan este mecanismo de consenso son:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Dash."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Ethereum (En un futuro)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"EOS / EOSIO."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Entre otras.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"diferencias-entre-los-mecanismos"},"Diferencias entre los Mecanismos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":"left"},"Aspecto"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":"center"},"Proof of Work (PoW)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":"center"},"Proof of Stake (PoS)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":"center"},"Delegated Proof of Stake (DPoS)"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"left"},"Requisitos de equipo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Equipos especializados"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Equipo con conexi\xF3n a internet"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Equipo con conexi\xF3n a internet")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"left"},"Quien se encarga de validar las transacciones"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Son validadas por el primer minero en encontrar la soluci\xF3n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"La persona escogida por el sistema"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"El delegado escogido")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"left"},"Como se escoge el validador"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Los mineros compiten tratando de resolver el problema matem\xE1tico"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"La persona con mayor cantidad de stake o edad de stake"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Se realizan elecciones dentro de la comunidad y se otorga el stake al delegado escogido")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"left"},"Principales fortalezas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Es un mecanismo muy seguro"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Es m\xE1s amigable con los usuarios e involucra m\xE1s a la comunidad"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Permite una mayor democracia por parte de la comunidad")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"left"},"Principales retos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Es extremadamente costoso"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Favorece a aquellos con mayores recursos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":"center"},"Requiere una comunidad muy involucrada")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si desea aprender m\xE1s sobre Delegated Proof of Stake (DPoS) puede visitar el mecanismo de consenso ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/aprender-eosio/mecanismo-de-consenso#delegated-proof-of-stake-dpos"},"Delegated Proof of Stake"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"otros-mecanismos-de-consenso"},"Otros Mecanismos de Consenso"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Hay otros mecanismos de consenso que no son tan populares en las comunidades de blockchain como las anteriores, las cuales son  las siguientes:  "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"proof-of-capacity-poc"},"Proof of Capacity (PoC)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este mecanismo al igual que el proof of work se realiza el minado, pero como diferencia principal es el uso de discos duros como principal recurso de poder computacional. Solucionando problem\xE1ticas de PoW y PoS debido a la mayor capacidad con los discos duros."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"proof-of-activity-poa"},"Proof of Activity (PoA)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este mecanismo utiliza las mejores caracter\xEDsticas de PoW y PoS siendo un ejemplo que se valida un bloque de transacciones por medio del minado (PoW) se cambia al sistema de elecci\xF3n de validadores (PoS) una vez validado se cambia al sistema de minado."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"proof-of-burn-pob"},"Proof of Burn (PoB)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este mecanismo naci\xF3 como soluci\xF3n al alto gasto energ\xE9tico por parte de PoW, haciendo uso de la idea de la quema de energ\xEDa, al validar un bloque de transacciones se \"queman\" tokens para obtener m\xE1s potencia de minado como aparejo, cuantos m\xE1s tokens se quemen m\xE1s potencia se obtiene."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"proof-of-history-poh"},"Proof of History (PoH)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este mecanismo nace con una propuesta muy antigua, pero diferente a los mecanismos anteriores, ya que registra el tiempo y la hora exacta entre 2 eventos en una funci\xF3n hash, aunque ser\xEDa imposible cambiar el registro en todos los ordenadores de la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"proof-of-elapsed-time-poet"},"Proof of Elapsed Time (PoET)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este mecanismo naci\xF3 como una soluci\xF3n de Intel a la ventaja que obtienen los que tienen m\xE1s recursos a la hora de buscar el sistema de elecci\xF3n del validador de bloques m\xE1s justo, como una loter\xEDa dentro de la red se asignan los validadores."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si quiere saber m\xE1s sobre los diferentes mecanismos de consenso, puede visitar ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.allerin.com/blog/8-blockchain-consensus-mechanisms-you-should-know-about"},"Mecanismos de Consenso Que Deber\xEDa Conocer"),"."));};MDXContent.isMDXComponent=true;

/***/ })

}]);
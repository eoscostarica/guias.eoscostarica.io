"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[9074],{

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

/***/ 5899:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'fundacion-red-eos',title:'Blue Papers Fundación Red EOS (ENF)',sidebar_label:'ENF Blue Papers',description:'Investigaciones realizadas por la Fundación Red EOS',keywords:['Blue Papers EOS','Investigación ENF','EOS Network Foundation','Publicaciones ENF']};var contentTitle=undefined;var metadata={"unversionedId":"aprender-eosio/fundacion-red-eos","id":"aprender-eosio/fundacion-red-eos","title":"Blue Papers Fundación Red EOS (ENF)","description":"Investigaciones realizadas por la Fundación Red EOS","source":"@site/docs/aprender-eosio/fundacion-red-eos.md","sourceDirName":"aprender-eosio","slug":"/aprender-eosio/fundacion-red-eos","permalink":"/docs/aprender-eosio/fundacion-red-eos","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/fundacion-red-eos.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675284816,"formattedLastUpdatedAt":"1 feb 2023","frontMatter":{"id":"fundacion-red-eos","title":"Blue Papers Fundación Red EOS (ENF)","sidebar_label":"ENF Blue Papers","description":"Investigaciones realizadas por la Fundación Red EOS","keywords":["Blue Papers EOS","Investigación ENF","EOS Network Foundation","Publicaciones ENF"]},"sidebar":"docs","previous":{"title":"Migración de EOSIO a Mandel","permalink":"/docs/aprender-eosio/migracion-mandel"},"next":{"title":"Contrato Hola Mundo","permalink":"/docs/tutoriales/contrato-hola-mundo"}};var assets={};var toc=[{value:'API+',id:'api',level:2},{value:'Core+',id:'core',level:2},{value:'Plataforma de Lanzamiento',id:'plataforma-de-lanzamiento',level:3},{value:'Despegue',id:'despegue',level:3},{value:'Propulsar',id:'propulsar',level:3},{value:'Wallet+',id:'wallet',level:2},{value:'Audit+',id:'audit',level:2},{value:'Herramientas de Seguridad-Auditoria y APIs Automáticas',id:'herramientas-de-seguridad-auditoria-y-apis-automáticas',level:3},{value:'Autorización de Mejoras de Contratos',id:'autorización-de-mejoras-de-contratos',level:3},{value:'Librerías para Contratos Inteligentes Seguros',id:'librerías-para-contratos-inteligentes-seguros',level:3},{value:'EVM+',id:'evm',level:2},{value:'Recorver+',id:'recorver',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La fundaci\xF3n de la Red EOS tambi\xE9n conocida por sus siglas en ingles como ENF (EOS Network Foundation) es una fundaci\xF3n sin fines de lucro, han creado una serie de documentos \"Blue Papers\" sobre los principales temas o dudas de la comunidad y de las respectivas acciones a tomar ante dichas situaciones. En esta secci\xF3n veremos de manera concisa y r\xE1pida algunos de ellos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"api"},"API+"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Siendo una cadena de bloques que se requiere leer y escribir por varios usuarios a la vez, se espera mucho de los APIs por parte de los desarrolladores, debido a esto y sumado al hecho que dependiendo de su funcionalidad puede afectar directamente de manera econ\xF3mica a los usuarios, se vuelven un apartado crucial para el funcionamiento/crecimiento de la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Ante esta situaci\xF3n, la comunidad se encontr\xF3 ante los siguientes desaf\xEDos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Necesidad de mucha Investigaci\xF3n y Estandarizaci\xF3n sobre el uso de las APIs."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Desarrollo por parte de la comunidad con perdidas apoy\xE1ndose de las recompensas de la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Falta de feedback por parte de los desarrolladores ante posibles mejoras.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Con el esfuerzo realizado por la comunidad se ha logrado lo siguiente:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Crear una base de herramientas para el desarrollo de apps con su base en la red EOSIO."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Obtener el apoyo de organizaciones externas, las cuales se han interesado en los logros actuales y futuros de la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Obtener el feedback necesario para la creaci\xF3n de nuevas herramientas y mejoras en las ya existentes.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si desea obtener m\xE1s conocimiento sobre este tema y su participaci\xF3n en el ciclo de vida en la red, puede verlo en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://bit.ly/api-plus-english"},"API+ Blue Paper")," con disponibilidad de descargarlo si as\xED lo desea."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"core"},"Core+"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para el desarrollo de aplicaciones que se apoyen en la red EOSIO es necesario entender el funcionamiento del Core y los pasos a seguir para su uso en la actualidad, para esto es esencial tener conocimiento sobre las principales fortalezas y retos hasta la fecha."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para el lanzamiento de aplicaciones apoyadas en EOSIO se recomienda por parte de la comunidad tener en consideraci\xF3n lo siguiente:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"plataforma-de-lanzamiento"},"Plataforma de Lanzamiento"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una buena plataforma de lanzamiento que cubra los requisitos m\xEDnimos para producir un valor a la red y a su vez resulte estable para el apoyo en EOSIO es de suma importancia, para poder lograr es importante involucrarse de manera activa en la comunidad de la red, as\xED como leyendo y brindando feedback de posibles mejoras de la documentaci\xF3n y las herramientas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"despegue"},"Despegue"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para obtener un despegue exitoso se recomienda involucrarse con otras plataformas por medio de asociaciones, eventos y grupos de trabajo. Brindar oportunidades de crecimiento tanto a los usuarios como a desarrolladores para brindar conocimiento de la plataforma y exposici\xF3n de la misma."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"propulsar"},"Propulsar"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para poder propulsar la plataforma se recomienda mejorar la velocidad y escalabilidad, atraer nuevos usuarios, dando m\xE1s exposici\xF3n de la plataforma y oportunidades de crecimiento con otras plataformas de EOSIO. Tambi\xE9n es necesario no dejar de invertir en la plataforma, por lo mismo es necesario establecer un equipo para la investigaci\xF3n y desarrollo de posibles mejoras o tecnolog\xEDas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si desea obtener m\xE1s conocimiento sobre este tema puede verlo en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://bit.ly/eos-core-plus"},"Core+ Blue Paper")," con disponibilidad de descargarlo si as\xED lo desea."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"wallet"},"Wallet+"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El grupo Wallet+ nace como una medida de ENF, ante los varios productos complementarios que benefician a los desarrolladores de aplicaciones y usuarios finales, con el fin de determinar las posibles vulnerabilidades de estos y las mejoras necesarias a implementarse. Para esto se creo el grupo que de manera honesta y hol\xEDstica pueda entender el estado actual de la red, de esta manera poder coordinar a los grupos externos el mejoramiento apoyado del feedback brindado por la comunidad para poder concentrar los esfuerzos en aquello que brinde mejores beneficios a futuro."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En este Paper se encuentra las debilidades encontradas por el grupo sobre las posibles mejoras a implementarse, pero para esto debemos saber cu\xE1les fueron las preguntas contestadas por este grupo y su orden, mismo que se encuentra en la siguiente lista:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Evaluaci\xF3n de estado actual del ecosistema EOS."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Trabajo realizado en otros ecosistemas que pueda ser adoptado."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Listar las iniciativas que pueden mejorar el ecosistema EOS."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Listar las recomendaciones de la fundaci\xF3n para tomar acci\xF3n.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si desea obtener m\xE1s conocimiento sobre este tema puede verlo en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://bit.ly/wallet-plus-english"},"Wallet+ Blue Paper")," con disponibilidad de descargarlo si as\xED lo desea."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"audit"},"Audit+"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El grupo Audit+ nace como una iniciativa de la ENF para el desarrollo de herramientas de testeo que solventen la clara escasez de herramientas para el mejoramiento de la seguridad dentro de la comunidad, la cual se ha quedado atr\xE1s en el crecimiento de esta en comparaci\xF3n de las otras tecnolog\xEDas blockchain."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para esto Audit+ decidi\xF3 centrar sus esfuerzos en lo siguiente:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"herramientas-de-seguridad-auditoria-y-apis-automáticas"},"Herramientas de Seguridad-Auditoria y APIs Autom\xE1ticas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El grupo decidi\xF3 como una de sus principales objetivos el desarrollo de herramientas automatizadas que permitan la verificaci\xF3n de la seguridad por medio de Auditoria no solamente de los contratos inteligentes sino tambi\xE9n de las APIs, esto ya que EOS no pose\xEDa un espacio dedicado a la auditoria de contratos mismo que supon\xEDa una gran vulnerabilidad para desarrolladores y usuarios finales."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"autorización-de-mejoras-de-contratos"},"Autorizaci\xF3n de Mejoras de Contratos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este tema obtiene su importancia ante la incertidumbre presente en la comunidad, sobre todo de las cuentas de EOS ordinarias, las cuales ten\xEDan que confiar 100% en los due\xF1os del contrato, los cuales ten\xEDan total autoridad para cambiar lo estipulado en el contrato o tomar todos los fondos. Siendo de necesario no solamente para la comunidad de usuarios, sino tambi\xE9n para los desarrolladores con el fin de poder mejorar los contratos ya existentes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"librerías-para-contratos-inteligentes-seguros"},"Librer\xEDas para Contratos Inteligentes Seguros"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este tema se obtiene ante un amplio grupo de desarrolladores con poco o escaso conocimiento t\xE9cnicos referentes a la seguridad, as\xED como su implementaci\xF3n en los contratos inteligentes. Por lo mismo, el grupo Audit+ tiene pensado el desarrollo no solamente de las librer\xEDas, incluso el de un roadmap que permita comprender su funcionamiento y aplicaci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si desea obtener m\xE1s conocimiento sobre este tema puede verlo en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://drive.google.com/file/d/1hQsN-_4DN5Lj9iDih0N41r8-ZeEpFRlr/view?usp=sharing"},"Audit+ Blue Paper")," con disponibilidad de descargarlo si as\xED lo desea."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"evm"},"EVM+"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este tema nace como una de las tantas medidas por parte de la comunidad para el crecimiento de la misma, teniendo como objetivo el desarrollo de un puente con Ethereum, como su nombre lo indica EVM+ (Ethereum Virtual Machine) es el grupo a cargo del desarrollo de compatibilidad de ETH con EOS, para que puedan ejecutarse contratos desarrollados en Solidity (ETH) ser lanzados en la red EOSIO permitiendo lanzar sus apps 100 veces m\xE1s r\xE1pido y 1000 veces m\xE1s barato."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Siendo un su principal meta crear una compatibilidad total entre EOS y la plataforma EVM tanto para desarrolladores as\xED como para usuarios finales.\nPara lograr dicho objetivo se han establecido algunos objetivos espec\xEDficos, entre ellos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Implementaci\xF3n nativa en Nodeos para contratos inteligentes.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Contratos ETH pre-compilados")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Compatibilidad RCP completa"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si desea obtener m\xE1s conocimiento sobre este tema puede verlo en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eosnetwork.com/blog/evm-bringing-the-ethereum-virtual-machine-to-eos/"},"EVM+ Blue Paper"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"recorver"},"Recorver+"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El grupo Recorver+ nace como una respuesta ante la posibilidad del ataque de un grupo de hackers y las posibles acciones a tomar para la recuperaci\xF3n de la red, as\xED como medidas a tener en consideraci\xF3n para disminuci\xF3n de da\xF1os hacia desarrolladores y usuarios finales. Es necesario entender que a pesar de la investigaci\xF3n realizada por el grupo, este Paper no contenga todos los escenarios posibles, sumados a este hecho, la existencia de muchas variables ajenas a la red, como bien lo podr\xEDa ser una recesi\xF3n econ\xF3mica global o similares."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si desea obtener m\xE1s conocimiento sobre este tema puede verlo en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eosnetwork.com/wp-content/uploads/2022/06/Recover-Blue-Paper-English.pdf"},"Recover+ Blue Paper")," con disponibilidad de descargarlo si as\xED lo desea."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Siendo estos \"Papers\" los resultados de investigaciones realizadas por distintos grupos, m\xE1s no siendo los \xFAnicos si desea ver todos los Blue Papers y tener conocimiento sobre los distintos temas puede visitar ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eosnetwork.com/blog/category/eos-blue-papers/"},"Fundaci\xF3n EOS Blue Papers"),"."));};MDXContent.isMDXComponent=true;

/***/ })

}]);
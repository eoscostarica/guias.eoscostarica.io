"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[6229],{

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

/***/ 6288:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'cultura-ingenieril',title:'Cultura Ingenieril',sidebar_label:'Cultura Ingenieril',description:'Valores de la cultura ingenieril que se llevan acabo en EOS Costa Rica',keywords:['cultura','cultura ingenieril','EOS','EOS Costa Rica']};var contentTitle=undefined;var metadata={"unversionedId":"cultura-ingenieril","id":"cultura-ingenieril","title":"Cultura Ingenieril","description":"Valores de la cultura ingenieril que se llevan acabo en EOS Costa Rica","source":"@site/docs/cultura-ingenieril.md","sourceDirName":".","slug":"/cultura-ingenieril","permalink":"/docs/cultura-ingenieril","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/cultura-ingenieril.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1676997593,"formattedLastUpdatedAt":"21 feb 2023","frontMatter":{"id":"cultura-ingenieril","title":"Cultura Ingenieril","sidebar_label":"Cultura Ingenieril","description":"Valores de la cultura ingenieril que se llevan acabo en EOS Costa Rica","keywords":["cultura","cultura ingenieril","EOS","EOS Costa Rica"]},"sidebar":"docs","previous":{"title":"Pautas Para Código Abierto","permalink":"/docs/pautas-para-codigo-abierto"},"next":{"title":"Metodologías Ágiles","permalink":"/docs/metodologias-agiles"}};var assets={};var toc=[{value:'En EOS Costa Rica valoramos:',id:'en-eos-costa-rica-valoramos',level:2},{value:'Decentralización',id:'decentralización',level:3},{value:'Transparencia',id:'transparencia',level:3},{value:'Comunicación y Franqueza',id:'comunicación-y-franqueza',level:3},{value:'Diseño Centrado en el Usuario',id:'diseño-centrado-en-el-usuario',level:3},{value:'Enfoque de Entrega de Valor',id:'enfoque-de-entrega-de-valor',level:3},{value:'Libertad para Explorar Ideas',id:'libertad-para-explorar-ideas',level:3},{value:'Salud y Bienestar',id:'salud-y-bienestar',level:3},{value:'Automatización de Tareas Repetitivas',id:'automatización-de-tareas-repetitivas',level:3},{value:'Proyectos de Código Abierto',id:'proyectos-de-código-abierto',level:3},{value:'Agilidad Ligera',id:'agilidad-ligera',level:3},{value:'Participación en las Comunidades de Desarrollo Local',id:'participación-en-las-comunidades-de-desarrollo-local',level:3},{value:'Diversidad, Colaboración y Respeto Mutuo',id:'diversidad-colaboración-y-respeto-mutuo',level:3},{value:'Revisión de Código por Pares (Peer code-reviewing)',id:'revisión-de-código-por-pares-peer-code-reviewing',level:3},{value:'Integración Continua',id:'integración-continua',level:3},{value:'Retrospectivas',id:'retrospectivas',level:3},{value:'Libertad para Trabajar Desde donde Quieras',id:'libertad-para-trabajar-desde-donde-quieras',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Somos una startup de ritmo r\xE1pido con ingenieros muy talentosos quienes aman el c\xF3digo abierto y los principios \xE1giles."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Nuestros valores son reflejados en la manera en que construimos software."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"en-eos-costa-rica-valoramos"},"En EOS Costa Rica valoramos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"decentralización"},"Decentralizaci\xF3n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Nosotros estamos decentralizando los modelos econ\xF3micos de la internet."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"transparencia"},"Transparencia"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Todos nuestros procesos son abiertos y transparentes. Somos un equipo multidisciplinario donde los desarrolladores saben tambi\xE9n exactamente qu\xE9 est\xE1 ocurriendo en los servidores; trabajamos junto al equipo de DevOps - \"si tu lo construyes, tu lo corres\". Tenemos pautas claras de proyectos y discutimos los planes abiertamente en github; los mensajes y llamadas en zoom son frecuentes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"comunicación-y-franqueza"},"Comunicaci\xF3n y Franqueza"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Creemos en la honestidad, transparencia y franqueza como pilares para crear un s\xF3lido ambiente saludable donde cada uno puede desarrollar a su m\xE1ximo potencial. Comunicaci\xF3n continua y llamadas uno a uno frecuentes son parte esencial de nuestro d\xEDa a d\xEDa en el trabajo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"diseño-centrado-en-el-usuario"},"Dise\xF1o Centrado en el Usuario"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Nosotros desarrollamos para humanos. Nuestro proceso empieza por entender las necesidades de las personas y c\xF3mo se alinean con el negocio y las metas de los productos. Un proceso iterativo nos permite validar continuamente para tomar decisiones acerca del desarrollo y el dise\xF1o."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"enfoque-de-entrega-de-valor"},"Enfoque de Entrega de Valor"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Nos enfocamos en entregar valor por encima de todo; es la base de nuestras decisiones. Nos aseguramos que los hacemos entrega valor tanto a nuestros usuarios como a nuestros clientes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"libertad-para-explorar-ideas"},"Libertad para Explorar Ideas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Estamos constantemente mejorando y evolucionando; estamos siempre buscando mejores y m\xE1s efectivas formas; valoramos la exploraci\xF3n, experimentaci\xF3n y las mentes abiertas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"salud-y-bienestar"},"Salud y Bienestar"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Las personas felices y saludables se desenvuelven mejor. Promovemos el ejercicio, el arte, buen descanso y tiempo lejos de la computadora para recargar energ\xEDas y evitar el agotamiento."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Organizamos trabajos en la playa de forma peri\xF3dica con un programa llamado ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eosurf.com/"},"EOSurf"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"automatización-de-tareas-repetitivas"},"Automatizaci\xF3n de Tareas Repetitivas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La automatizaci\xF3n est\xE1 encima en las lista de nuestras prioridades; todo desde de la configuraci\xF3n hasta la optimizaci\xF3n en el c\xF3digo, pruebas, despliegue y entrega."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"proyectos-de-código-abierto"},"Proyectos de C\xF3digo Abierto"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Promovemos la participaci\xF3n en proyectos de c\xF3digo abierto as\xED como tambi\xE9n abriendo nuestros proyectos a c\xF3digo abierto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"agilidad-ligera"},"Agilidad Ligera"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Trabajamos con una ligera metodolog\xEDa para entregar la mayor cantidad de valor tan r\xE1pido como sea posible. Mantenemos lo que mejor se desempe\xF1a y descartamos reglas r\xEDgidas que pueden ser m\xE1s un problema ya que no aportan gran valor. Valoramos las pr\xE1cticas de principios \xE1giles."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"participación-en-las-comunidades-de-desarrollo-local"},"Participaci\xF3n en las Comunidades de Desarrollo Local"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Creemos que involucrarnos y participar en las comuninidades de desarrollo nos permite aprender y crecer. Al mismo tiempo, nuestra participaci\xF3n enriquece la comunidad en general, ya que compartimos nuestro conocimiento con otros."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"diversidad-colaboración-y-respeto-mutuo"},"Diversidad, Colaboraci\xF3n y Respeto Mutuo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un grupo diferentes de personas y mentes diversas producen soluciones m\xE1s creativas ya que cada individuo tiene para s\xED, su forma de pensar, operar y resolver problemas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"revisión-de-código-por-pares-peer-code-reviewing"},"Revisi\xF3n de C\xF3digo por Pares (Peer code-reviewing)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Programaci\xF3n en pares y revisi\xF3n de c\xF3digo por pares son aspectos fundamentales en nuestro proceso de desarrollo; creemos que es una de las mejores formas de aumentar la calidad y esparcir el conocimiento. Seguimos el flujo de Github para desarrollar todas nuestras aplicaciones."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"integración-continua"},"Integraci\xF3n Continua"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La Integraci\xF3n Continua nos permite detectar problemas de forma temprana y reducir costos que nos ayudan a entregar software robusto de forma r\xE1pida."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"retrospectivas"},"Retrospectivas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cuando algo va mal no buscamos culpables, en vez de eso, preferimos hacer una reuni\xF3n de  retrospectiva y aprender de lo que estuvo mal."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"libertad-para-trabajar-desde-donde-quieras"},"Libertad para Trabajar Desde donde Quieras"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Somos un equipo completamente distribuido, en pleno siglo 21, no hay una necesidad real para estar atascado en el tr\xE1fico y perder tiempo de tu vida movi\xE9ndote de un lugar a otro para trabajar en desarrollo de software. Nos reunimos en persona cada cierto tiempo cuando requerimos analizar, dise\xF1ar y coordinar el trabajo."));};MDXContent.isMDXComponent=true;

/***/ })

}]);
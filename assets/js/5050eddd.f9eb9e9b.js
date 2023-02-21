"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[8525],{

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

/***/ 7603:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'devops',title:'¿ Qué es DevOps ?',sidebar_label:'DevOps',description:'DevOps es un conjunto de prácticas que agrupan el desarrollo de software y las operaciones de TI.',keywords:['DevOps','Qué es DevOps','Para qué sirve DevOps','EOS','EOS Costa Rica']};var contentTitle=undefined;var metadata={"unversionedId":"devops","id":"devops","title":"¿ Qué es DevOps ?","description":"DevOps es un conjunto de prácticas que agrupan el desarrollo de software y las operaciones de TI.","source":"@site/docs/devops.md","sourceDirName":".","slug":"/devops","permalink":"/docs/devops","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/devops.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1676997593,"formattedLastUpdatedAt":"21 feb 2023","frontMatter":{"id":"devops","title":"¿ Qué es DevOps ?","sidebar_label":"DevOps","description":"DevOps es un conjunto de prácticas que agrupan el desarrollo de software y las operaciones de TI.","keywords":["DevOps","Qué es DevOps","Para qué sirve DevOps","EOS","EOS Costa Rica"]},"sidebar":"docs","previous":{"title":"Diseño UX / UI","permalink":"/docs/herramientas-para-desarrolladores-ux-ui"},"next":{"title":"IPFS (Interplanetary File System)","permalink":"/docs/interplanetary-file-system"}};var assets={};var toc=[{value:'Definiciones Clave',id:'definiciones-clave',level:2},{value:'¿Por qué implementar DevOps?',id:'por-qué-implementar-devops',level:2},{value:'Áreas de Énfasis',id:'áreas-de-énfasis',level:2},{value:'¿Cuál es el objetivo de DevOps?',id:'cuál-es-el-objetivo-de-devops',level:2},{value:'CI Systems - Ejemplos',id:'ci-systems---ejemplos',level:2},{value:'CD Systems - Ejemplos',id:'cd-systems---ejemplos',level:2},{value:'Infraestructura como Código (IAC)',id:'infraestructura-como-código-iac',level:2},{value:'Introducción a HashiCorp Terraform',id:'introducción-a-hashicorp-terraform',level:3},{value:'Introducción a Kubernetes y Docker',id:'introducción-a-kubernetes-y-docker',level:2},{value:'<strong>Containers 101</strong>',id:'containers-101',level:3},{value:'¿Qué es Docker?',id:'qué-es-docker',level:3},{value:'Kubernetes',id:'kubernetes',level:3},{value:'Kubernetes en 5 Minutos',id:'kubernetes-en-5-minutos',level:3},{value:'Kubernetes vs Docker: No es una Pregunta de Ambos o Uno',id:'kubernetes-vs-docker-no-es-una-pregunta-de-ambos-o-uno',level:3},{value:'Kubernetes en EOS Costa Rica',id:'kubernetes-en-eos-costa-rica',level:2},{value:'Referencias',id:'referencias',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"DevOps es la pr\xE1ctica y la cultura de aplicar los principios de fabricaci\xF3n ajustada al flujo de valor de TI para aumentar la velocidad del software, reducir el desperdicio y mejorar la calidad con \xE9nfasis en aprovechar ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"las personas, los procesos y las herramientas"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Se centra en unificar el desarrollo y las operaciones de TI a trav\xE9s de los principios de flujo, retroalimentaci\xF3n y experimentaci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/OOGFxVzW35w",frameBorder:"0",allowFullScreen:true,loading:"lazy"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"definiciones-clave"},"Definiciones Clave"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Integraci\xF3n Continua (CI)"),": Aborda la creaci\xF3n de software a partir de las contribuciones de desarrolladores individuales de una manera \xE1gil y controlada. (Verificando todo el c\xF3digo en un repositorio centralizado diariamente)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Despliegue Continuo (CD)"),": Despliegue automatizado (o transporte) de c\xF3digo a producci\xF3n sin necesidad de pasos manuales. Este no ser\xE1 el plan con todas las aplicaciones."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Entrega Continua (CD)"),": Automatizaci\xF3n que garantiza la validaci\xF3n de la implementaci\xF3n; sin embargo, a\xFAn se requieren pasos manuales para implementar en producci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Implementaci\xF3n"),": La implementaci\xF3n (o transporte) de c\xF3digo a un entorno de nivel superior, hasta e incluida la producci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Lanzamiento"),": El alcance definido y el objetivo comercial para un conjunto de caracter\xEDsticas que se entregar\xE1n en un cierto plazo.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"por-qué-implementar-devops"},"\xBFPor qu\xE9 implementar DevOps?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En 2012, el \"informe sobre el estado de DevOps\" de Puppet Labs compar\xF3 4.039 organizaciones de TI que usaban DevOps y encontr\xF3:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Implementaciones de c\xF3digo 30 veces m\xE1s frecuentes"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Plazo de ejecuci\xF3n de implementaci\xF3n de c\xF3digo 8.000 veces m\xE1s r\xE1pido"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"2x la tasa de \xE9xito del cambio"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"MTTR 12 veces m\xE1s r\xE1pido (tiempo medio de reparaci\xF3n)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"\"",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"La ventaja competitiva que crea esta capacidad es enorme, lo que permite una comercializaci\xF3n m\xE1s r\xE1pida de las funciones, mayor satisfacci\xF3n del cliente, participaci\xF3n de mercado, productividad de los empleados y felicidad\".")," ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"}," - Proyecto Phoenix "))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"áreas-de-énfasis"},"\xC1reas de \xC9nfasis"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los principios de DevOps son aplicados y asistidos por las siguientes 3 \xE1reas clave que trabajan juntas:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Personas"),": DevOps se basa en personas s\xF3lidas y una cultura s\xF3lida de experimentaci\xF3n, aprendizaje, colaboraci\xF3n y objetivos compartidos entre las operaciones de desarrollo, control de calidad y TI."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Procesos"),": DevOps se basa en Lean Agile y aplica conceptos de fabricaci\xF3n ajustada a las corrientes de valor de TI."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Herramientas"),": DevOps se basa en herramientas y tecnolog\xEDas mejoradas, incluidas herramientas de automatizaci\xF3n, telemetr\xEDa y colaboraci\xF3n.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cuál-es-el-objetivo-de-devops"},"\xBFCu\xE1l es el objetivo de DevOps?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Mejorar la colaboraci\xF3n entre todas las partes interesadas desde la planificaci\xF3n hasta la entrega y la automatizaci\xF3n del proceso de entrega para:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Mejorar la frecuencia de implementaci\xF3n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Lograr un tiempo de comercializaci\xF3n m\xE1s r\xE1pido"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Menor \xEDndice de fallas de nuevos lanzamientos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Acortar el tiempo de espera entre arreglos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Mejorar el tiempo medio de recuperaci\xF3n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ci-systems---ejemplos"},"CI Systems - Ejemplos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/5632966/106228974-2f442480-61b2-11eb-9ceb-6d47ef5acb67.png","alt":"imagen_CI_System"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cd-systems---ejemplos"},"CD Systems - Ejemplos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/5632966/105532713-d0ae1080-5cb0-11eb-8d8b-5d3751b7df37.png","alt":"imagen_CD_System"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"infraestructura-como-código-iac"},"Infraestructura como C\xF3digo (IAC)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El proceso de administrar y aprovisionar centros de datos inform\xE1ticos a trav\xE9s de archivos de definici\xF3n legibles por m\xE1quina, en lugar de configuraci\xF3n de hardware f\xEDsico o herramientas de configuraci\xF3n interactivas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/53X-HAw7BbA",frameBorder:"0",allowFullScreen:true,loading:"lazy"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"introducción-a-hashicorp-terraform"},"Introducci\xF3n a HashiCorp Terraform"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Terraform es un software de infraestructura como c\xF3digo, desarrollado por HashiCorp. Permite a los usuarios definir y configurar la infraestructura de un centro de datos en un lenguaje de alto nivel."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/cpxKbf51ccU",frameBorder:"0",allowFullScreen:true,loading:"lazy"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/h970ZBgKINg",frameBorder:"0",allowFullScreen:true,loading:"lazy"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"introducción-a-kubernetes-y-docker"},"Introducci\xF3n a Kubernetes y Docker"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"containers-101"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h3"},"Containers 101")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/VqLcWftIaQI",frameBorder:"0",allowFullScreen:true,loading:"lazy"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H"},"M\xE1s informaci\xF3n acerca de contenedores")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"qué-es-docker"},"\xBFQu\xE9 es Docker?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Docker es un proyecto de c\xF3digo abierto que automatiza la implementaci\xF3n de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracci\xF3n y automatizaci\xF3n de virtualizaci\xF3n de aplicaciones en m\xFAltiples sistemas operativos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"/docs/tutoriales/docker"},"M\xE1s Informaci\xF3n sobre Docker")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PfTKwblbkpE",frameBorder:"0",allowFullScreen:true,loading:"lazy"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"kubernetes"},"Kubernetes"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Kubernetes es un sistema de c\xF3digo libre para la automatizaci\xF3n del despliegue, ajuste de escala y manejo de aplicaciones en contenedores\u200B que fue originalmente dise\xF1ado por Google y donado a la Cloud Native Computing Foundation. Soporta diferentes entornos para la ejecuci\xF3n de contenedores, incluido Docker."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A continuaci\xF3n, puede encontrar un conjunto de tutoriales muy convenientes para aprender kubernetes desde cero:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para m\xE1s informaci\xF3n visite nuestro tutorial ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"/docs/tutoriales/kubernetes"},"Kubernetes")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"kubernetes-en-5-minutos"},"Kubernetes en 5 Minutos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PH-2FfFD2PU",frameBorder:"0",allowFullScreen:true,loading:"lazy"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"kubernetes-vs-docker-no-es-una-pregunta-de-ambos-o-uno"},"Kubernetes vs Docker: No es una Pregunta de Ambos o Uno"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{wwidth:"100%",height:"315",src:"https://www.youtube.com/embed/2vMEQ5zs1ko",frameBorder:"0",allowFullScreen:true,loading:"lazy"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"kubernetes-en-eos-costa-rica"},"Kubernetes en EOS Costa Rica"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Par probar los anteriores ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"tutoriales")," en un ambiente real, podr\xEDas utilizar nuestra instalaci\xF3n de kubernetes sobre Openstack.\nSi as\xED lo prefieres, tambi\xE9n puedes crear un cluster local en tu propia m\xE1quina: "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/"},"Instalar Minikube")," "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Solicite a los administradores acceso a nuestro panel de instalaci\xF3n Openstack y al Sandbox\nproyect. Entonces puedes seguir los siguientes pasos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Primero que nada, con\xE9ctese al nodo maestro usando la herramienta SSH:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-shell"},"ssh -i key.pem user@master-sandbox\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Obtener informaci\xF3n sobre el cl\xFAster:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-shell"},"kubectl cluster-info\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Mostrar nodos disponibles actualmente en el cl\xFAster:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-shell"},"kubectl get nodes\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"referencias"},"Referencias"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"\u201CLos principios detr\xE1s de DevOps son los mismos que transformaron la fabricaci\xF3n. En lugar de optimizar la forma en que las materias primas se transforman en productos terminados, DevOps muestra c\xF3mo optimizamos el flujo de valor de TI ...\u201D")," - Proyecto Phoenix"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"\u201CImag\xEDnese vivir en un mundo DevOps, donde los propietarios de productos, Desarrollo, Control de Calidad, Operaciones de TI e InfoSec trabajan juntos sin descanso para ayudarse mutuamente y para que la organizaci\xF3n en general gane. Permiten un flujo r\xE1pido del trabajo planificado hacia la producci\xF3n, al tiempo que preservan la estabilidad, confiabilidad, disponibilidad y seguridad de clase mundial\u201D.")," - Proyecto Phoenix"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.notion.so/Periodic-Table-of-DevOps-Tools-4e9b29562a944132b1235cfa7e400d68"},"Tabla peri\xF3dica de herramientas de DevOps")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.notion.so/Automation-e4dee021a4494d9cbdebb3ebc6205f4f"},"Automatizaci\xF3n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://lab.github.com/githubtraining/devops-with-github-actions"},"DevOps con GitHub"))));};MDXContent.isMDXComponent=true;

/***/ })

}]);
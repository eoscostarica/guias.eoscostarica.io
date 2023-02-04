"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[5638],{

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

/***/ 3901:
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
/* harmony import */ var _home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);
/* harmony import */ var _home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4996);
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'metodologias-agiles',title:'Metodologías Ágiles',sidebar_label:'Metodologías Ágiles',description:'Metodologías Ágiles para desarrollar proyectos de software de una forma eficiente y eficaz.',keywords:['Metodologías','Ágiles','Scrum','Kanban','XP','Lean','Agile','EOS','EOS Costa Rica','Qué es Agile','Qué es Scrum','Qué es Kanban','Qué es XP','Qué es Lean']};var contentTitle=undefined;var metadata={"unversionedId":"metodologias-agiles","id":"metodologias-agiles","title":"Metodologías Ágiles","description":"Metodologías Ágiles para desarrollar proyectos de software de una forma eficiente y eficaz.","source":"@site/docs/metodologias-agiles.md","sourceDirName":".","slug":"/metodologias-agiles","permalink":"/docs/metodologias-agiles","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/metodologias-agiles.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675486037,"formattedLastUpdatedAt":"4 feb 2023","frontMatter":{"id":"metodologias-agiles","title":"Metodologías Ágiles","sidebar_label":"Metodologías Ágiles","description":"Metodologías Ágiles para desarrollar proyectos de software de una forma eficiente y eficaz.","keywords":["Metodologías","Ágiles","Scrum","Kanban","XP","Lean","Agile","EOS","EOS Costa Rica","Qué es Agile","Qué es Scrum","Qué es Kanban","Qué es XP","Qué es Lean"]},"sidebar":"docs","previous":{"title":"Cultura Ingenieril","permalink":"/docs/cultura-ingenieril"},"next":{"title":"Metodología de Vuelos","permalink":"/docs/metodologia-vuelos"}};var assets={};var toc=[{value:'¿Qué son las Metodologías Ágiles?',id:'qué-son-las-metodologías-ágiles',level:2},{value:'Agilidad Moderna',id:'agilidad-moderna',level:3},{value:'¿Tipos de Metodologías Ágiles?',id:'tipos-de-metodologías-ágiles',level:2},{value:'Scrum',id:'scrum',level:3},{value:'Kanban',id:'kanban',level:3},{value:'Programación Extrema (XP)',id:'programación-extrema-xp',level:3},{value:'Gestión de Proyectos Ágiles',id:'gestión-de-proyectos-ágiles',level:2},{value:'Historias de Usuarios',id:'historias-de-usuarios',level:3},{value:'¿Cómo escribir una Historia de Usuario?',id:'cómo-escribir-una-historia-de-usuario',level:4},{value:'Ejemplos:',id:'ejemplos',level:4},{value:'Reuniones de Trabajo',id:'reuniones-de-trabajo',level:2},{value:'Sesión de Planning',id:'sesión-de-planning',level:3},{value:'¿Quién está Implicado?',id:'quién-está-implicado',level:4},{value:'Pasos para el Planning',id:'pasos-para-el-planning',level:4},{value:'Sesión de Grooming',id:'sesión-de-grooming',level:3},{value:'¿Quién está Implicado?',id:'quién-está-implicado-1',level:4},{value:'Pasos para el Grooming',id:'pasos-para-el-grooming',level:4},{value:'Sesión de Stand-up',id:'sesión-de-stand-up',level:3},{value:'Beneficios de los Stand-ups Diarios',id:'beneficios-de-los-stand-ups-diarios',level:4},{value:'Sesión de Retrospectiva',id:'sesión-de-retrospectiva',level:3},{value:'¿Con qué frecuencia debes realizar Retrospectivas?',id:'con-qué-frecuencia-debes-realizar-retrospectivas',level:4},{value:'Sesión de Demo',id:'sesión-de-demo',level:3},{value:'Pasos para el Demo',id:'pasos-para-el-demo',level:4}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"qué-son-las-metodologías-ágiles"},"\xBFQu\xE9 son las Metodolog\xEDas \xC1giles?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Estas son metodolog\xEDas de trabajo que permiten la adaptaci\xF3n a las circunstancias de los proyectos y reducen los procesos de documentaci\xF3n, generalmente se utilizan en proyectos que no tienen un alcance definido con certeza, lo que provoca sean muy propensos al cambio, debido a que en estas metodolog\xEDas se hacen entregas en poco tiempo de productos funcionales (2 a 4 semanas) permite que el proceso de cambios y correcci\xF3n de errores sea r\xE1pido y no tenga un costo muy alto para el proyecto en general. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"agilidad-moderna"},"Agilidad Moderna"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Agilidad moderna es mucho m\xE1s amplio que el manifiesto \xE1gil para el desarrollo de software. Es un concepto que tiene en cuenta muchas \xE1reas diferentes, no solo el desarrollo de software, incluso se puede aplicar en organizaciones que no se dedican a ello."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/ARon5Rj88Cw",frameBorder:"0",allowFullScreen:true,loading:"lazy"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para aclarar c\xF3mo lleg\xF3 a ser agilidad moderna, aqu\xED hay un fragmento del sitio web: Durante la \xFAltima d\xE9cada, las empresas innovadoras, los l\xEDderes de pensamiento de la industria del software y los pioneros esbeltos/\xE1giles han descubierto formas m\xE1s simples, resistentes y optimizadas de ser \xE1giles. Estos enfoques modernos comparten un enfoque en producir resultados excepcionales y desarrollar una cultura sobresaliente. Hoy en d\xEDa, tiene mucho m\xE1s sentido pasar por alto la agilidad anticuada en favor de enfoques modernos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los m\xE9todos \xE1giles modernos se definen mediante cuatro principios rectores:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{textAlign:"center"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Imagen Modern Agile",src:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('img/AgilidadModerna.webp'),loading:"lazy"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"tipos-de-metodologías-ágiles"},"\xBFTipos de Metodolog\xEDas \xC1giles?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Algunas de las metodolog\xEDas \xE1giles m\xE1s conocidas y utilizadas en la industria son: "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"scrum"},"Scrum"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es una metodolog\xEDa \xE1gil que se basa en la comunicaci\xF3n y revisi\xF3n constante de las tareas que se realizan (sprints), por cada sprint se realizan los procesos de planificaci\xF3n, aseguramiento de la calidad, desarrollo, inspecci\xF3n de calidad y retroalimentaci\xF3n, esto reduce el costo en la correcci\xF3n de errores debido a que un sprint se da por concluido hasta que el cliente acepta todos los ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"criterios de aceptaci\xF3n"),". Los valores base de esta metodolog\xEDa son la innovaci\xF3n, flexibilidad, competitividad y productividad."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/P25JP0u6UKw",frameBorder:"0",allowFullScreen:true,loading:"lazy"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"kanban"},"Kanban"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Consiste en la elaboraci\xF3n de un cuadro o diagrama en el que se reflejan tres columnas de tareas; pendientes, en proceso y terminadas. Este cuadro debe estar al alcance de todos los miembros del equipo, evitando as\xED la repetici\xF3n de tareas o la posibilidad de que se olvide alguna de ellas. Por tanto, ayuda a mejorar la productividad y eficiencia del equipo de trabajo. Dentro de sus objetivos esta mejorar la planificaci\xF3n del trabajo, mejorar el rendimiento, definir plazos de entrega continuos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/I-H-WXAX_oM",frameBorder:"0",allowFullScreen:true,loading:"lazy"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"programación-extrema-xp"},"Programaci\xF3n Extrema (XP)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es una metodolog\xEDa basada en un conjunto de reglas y buenas pr\xE1cticas para el desarrollo de software en ambientes muy cambiantes con requerimientos imprecisos, por ende, est\xE1 enfocada en la retroalimentaci\xF3n continua entre el equipo de desarrollo y el cliente. XP tiene como base la simplicidad y como objetivo la satisfacci\xF3n del cliente."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/h34e1ph0aPk",frameBorder:"0",allowFullScreen:true,loading:"lazy"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"gestión-de-proyectos-ágiles"},"Gesti\xF3n de Proyectos \xC1giles"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"historias-de-usuarios"},"Historias de Usuarios"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una historia de usuario es un m\xE9todo ligero para capturar r\xE1pidamente el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"qui\xE9n"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"qu\xE9")," y ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"por qu\xE9")," de los requisitos de un producto. En t\xE9rminos simples, las historias de usuario son ideas de requisitos que expresan lo que necesitan los usuarios. Las historias de los usuarios son breves y cada elemento suele contener menos de 10 o 15 palabras cada uno.",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br",{parentName:"p"}),"\n","El prop\xF3sito de una historia de usuario es articular c\xF3mo una pieza de trabajo devolver\xE1 un valor particular al cliente. Tenga en cuenta que los ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"clientes")," no tienen que ser usuarios finales externos en el sentido tradicional, tambi\xE9n pueden ser clientes internos o colegas dentro de su organizaci\xF3n que dependen de su equipo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/Zi9E1aUO_1U",frameBorder:"0",allowFullScreen:true,loading:"lazy"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"cómo-escribir-una-historia-de-usuario"},"\xBFC\xF3mo escribir una Historia de Usuario?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Definici\xF3n de Terminado:")," La historia generalmente se \u201Ctermina\u201D cuando el usuario puede completar la tarea descrita."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Resuma las subtareas o tareas:")," Decida qu\xE9 pasos espec\xEDficos deben completarse y qui\xE9n es responsable de cada uno de ellos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Definir usuarios:")," \xBFPara qui\xE9n?, Si hay varios usuarios finales, considere crear varias historias."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Pasos ordenados:")," Escriba una historia para cada paso en un proceso m\xE1s amplio."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Escuche los comentarios:")," Hable con sus usuarios y capture el problema o la necesidad en sus palabras."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Tiempo:")," Dado que las historias deben completarse en un sprint, las historias que pueden tardar semanas o meses en completarse deben dividirse en historias m\xE1s peque\xF1as.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"ejemplos"},"Ejemplos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Como ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Gerente"),", quiero ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"poder comprender el progreso de mis colegas"),", para ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"poder informar mejor nuestros \xE9xitos y fracasos"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Como ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Cliente"),", quiero la ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"funci\xF3n de carrito de compras")," para que ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"pueda comprar art\xEDculos f\xE1cilmente en l\xEDnea"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Como ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Gerente"),", quiero ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"generar un informe")," para que ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"pueda entender qu\xE9 departamentos necesitan m\xE1s recursos"),"."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"reuniones-de-trabajo"},"Reuniones de Trabajo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sesión-de-planning"},"Sesi\xF3n de Planning"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El planning del sprint es una sesi\xF3n de trabajo con un intervalo de tiempo que dura aproximadamente 1 hora por cada semana de un sprint.\nEs un evento en el marco de Scrum donde el equipo determina los elementos del backlog en los que trabajar\xE1n durante ese sprint y analiza su plan inicial para completar esos elementos de la lista de productos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este acuerdo define la acumulaci\xF3n de sprints y se basa en la velocidad o capacidad del equipo y la duraci\xF3n del sprint."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/PsGsxhqI9dE",frameBorder:"0",allowFullScreen:true,loading:"lazy"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"quién-está-implicado"},"\xBFQui\xE9n est\xE1 Implicado?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Product Owner:")," Identifica los elementos del backlog y sus prioridades relativas, adem\xE1s de proponer un objetivo de sprint.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Miembros del equipo:")," Determina cu\xE1ntos de los elementos del backlog se pronostican que se podr\xE1n completar y determinar c\xF3mo entregar\xE1n esos elementos del backlog.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Scrum Master:")," Por lo general, facilita la planificaci\xF3n del sprint para garantizar que la discusi\xF3n sea efectiva y que haya acuerdo con el objetivo del sprint y que los elementos apropiados se incluyan en el backlog del sprint."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"pasos-para-el-planning"},"Pasos para el Planning"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Discuta cualquier informaci\xF3n nueva que pueda afectar el plan."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Confirme los problemas y preocupaciones actualmente conocidos y reg\xEDstrelos seg\xFAn corresponda."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Revise el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Done")," y realice las actualizaciones apropiadas seg\xFAn la tecnolog\xEDa, las habilidades o los cambios de los miembros del equipo desde el \xFAltimo sprint."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Presente los elementos del backlog propuestos para el Sprint."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Determinar las necesidades, apuntarse al trabajo y estimar el trabajo que posee."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Product Owner responde preguntas aclaratorias y elabora criterios de aceptaci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Confirme los nuevos problemas e inquietudes planteados durante la reuni\xF3n y reg\xEDstrelo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Confirme cualquier suposici\xF3n o dependencia descubierta durante la planificaci\xF3n y reg\xEDstrelo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Scrum Master pide un consenso grupal sobre el plan."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"El equipo y el propietario del producto se\xF1alan si este es el mejor plan que pueden hacer teniendo en cuenta lo que saben en este momento."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Vuelva al trabajo.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sesión-de-grooming"},"Sesi\xF3n de Grooming"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La preparaci\xF3n del backlog, tambi\xE9n conocida como refinamiento del backlog o tiempo de la historia, es un evento recurrente para los equipos \xE1giles de desarrollo de productos. El prop\xF3sito principal de una sesi\xF3n de preparaci\xF3n del backlog es garantizar que los siguientes sprints de historias de usuarios en el backlog, est\xE9n preparados para la planificaci\xF3n del sprint. Las sesiones regulares de preparaci\xF3n de trabajos pendientes, tambi\xE9n ayudan a garantizar que se prioricen las historias adecuadas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/RjJ3cTc1v-s",frameBorder:"0",allowFullScreen:true,loading:"lazy"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"quién-está-implicado-1"},"\xBFQui\xE9n est\xE1 Implicado?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Product Owner:")," Tiene la tarea de facilitar las sesiones de refinamiento del backlog. Sin embargo, eso no significa que sean los \xFAnicos responsables de realizar las sesiones de preparaci\xF3n pendientes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Miembros del equipo:")," Estos eventos est\xE1n destinados a ser colaborativos. Eso significa que todo el equipo multifuncional debe estar representado en las sesiones de refinamiento."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Representantes de QA:")," Se necesita la experiencia combinada de las diversas funciones de su equipo para desarrollar de manera efectiva sus historias de usuario.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"pasos-para-el-grooming"},"Pasos para el Grooming"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Elimine historias de usuarios que ya no parecen relevantes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Cree nuevas historias de usuarios en respuesta a necesidades reci\xE9n descubiertas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Reeval\xFAe la prioridad relativa de las historias."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Asigne estimaciones a las historias que a\xFAn no han recibido una,\ncorregir estimaciones a la luz de la informaci\xF3n reci\xE9n descubierta."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Divide historias de usuarios que son de alta prioridad."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Vuelva al trabajo.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sesión-de-stand-up"},"Sesi\xF3n de Stand-up"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una reuni\xF3n diaria de pie es una oportunidad para que el equipo discuta el progreso de un proyecto a un alto nivel. Estas reuniones duran aproximadamente 15 minutos y permiten a cada colaborador informar sobre sus logros desde la \xFAltima reuni\xF3n de Stand-up."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Fiel a su nombre, todos los participantes en stand-ups suelen permanecer de pie para que las reuniones sean breves y centradas en el tema. Sin embargo, tambi\xE9n es posible realizar stand-ups virtuales."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En la gesti\xF3n de proyectos \xE1gil, las reuniones diarias de pie son esenciales, estas reuniones permiten que los miembros del proyecto compartan informaci\xF3n cr\xEDtica, discutan abiertamente los problemas y se responsabilicen a s\xED mismos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/16IoziutCZs",frameBorder:"0",allowFullScreen:true,loading:"lazy"}," "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"beneficios-de-los-stand-ups-diarios"},"Beneficios de los Stand-ups Diarios"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Las reuniones diarias permiten a los miembros del equipo trabajar en colaboraci\xF3n para alcanzar los objetivos del proyecto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Las reuniones diarias de pie son importantes para mantener a los equipos enfocados en la tarea mientras brindan actualizaciones r\xE1pidas a nivel de proyecto para el resto del equipo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"La metodolog\xEDa Agile tiene que ver con la versatilidad y la flexibilidad, es importante hacer ajustes y mejoras en sus reuniones para satisfacer las necesidades de su equipo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"El stand-up diario debe informar y destacar los problemas para que pueda mantener el proyecto en marcha y adelantarse a los problemas antes de que surjan.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sesión-de-retrospectiva"},"Sesi\xF3n de Retrospectiva"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es una reuni\xF3n que se lleva a cabo despu\xE9s del env\xEDo de un producto para discutir lo que sucedi\xF3 durante el desarrollo del producto y el proceso de lanzamiento, con el objetivo de mejorar las cosas en el futuro en funci\xF3n de esos aprendizajes y conversaciones.\nUna retrospectiva \xE1gil obliga a todo el equipo a hacer una pausa y reflexionar sobre lo que ocurri\xF3 y discutir qu\xE9 funcion\xF3 y qu\xE9 no durante un proyecto en particular."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/7wd61RrJAfo",frameBorder:"0",allowFullScreen:true,loading:"lazy"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"con-qué-frecuencia-debes-realizar-retrospectivas"},"\xBFCon qu\xE9 frecuencia debes realizar Retrospectivas?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Las retrospectivas se pueden realizar con m\xE1s frecuencia, incluso para lanzamientos menores, cada sprint o incluso en reuniones diarias o semanales."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sesión-de-demo"},"Sesi\xF3n de Demo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La demostraci\xF3n de sprint es invaluable para mantener a las partes interesadas al tanto del progreso del desarrollo de productos. Les permite retroalimentar y discutir con el Product Owner y el equipo Scrum cualquier posible modificaci\xF3n al Product Backlog que ayudar\xEDa a maximizar el valor.\nLa demostraci\xF3n de Sprint no deber\xEDa ocupar demasiado tiempo a un equipo Scrum. Asegurarse de que la reuni\xF3n de revisi\xF3n del sprint sea un asunto informal en el que las preguntas, los comentarios y la discusi\xF3n sean bienvenidos, permite que el tiempo de preparaci\xF3n se mantenga al m\xEDnimo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/S-jjJf_cy7Q",frameBorder:"0",allowFullScreen:true,loading:"lazy"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"pasos-para-el-demo"},"Pasos para el Demo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Cuente una historia:")," Este es uno de los factores m\xE1s importantes para una gran demostraci\xF3n, y tambi\xE9n el que m\xE1s se pasa por alto. Dada la naturaleza estructurada de las historias, es f\xE1cil caer en la trampa de simplemente enumerar el trabajo que ha realizado, esto no es necesariamente malo, pero es poco probable que entusiasme a las partes interesadas no t\xE9cnicas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Deje que los desarrolladores participen:")," Siempre que sea posible, es fant\xE1stico permitir que los desarrolladores presenten su propio trabajo, lo que ayuda a generar confianza, moral y un sentido de pertenencia. Un buen compromiso puede ser tener un orador organizador con un desarrollador \"invitado\" diferente que muestre su trabajo cada semana."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Establezca expectativas:")," Establecer expectativas y proporcionar contexto es fundamental para una demostraci\xF3n exitosa."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Elementos de acci\xF3n:")," Enumere todas las historias completadas en su agenda, elimine las historias que no deber\xEDan ser demostradas, organice las historias restantes de manera aproximada en escenarios o temas, decida si los desarrolladores ayudar\xE1n a dar partes de la demostraci\xF3n y siempre establezca expectativas y proporcione contexto a lo largo de la demostraci\xF3n.")));};MDXContent.isMDXComponent=true;

/***/ })

}]);
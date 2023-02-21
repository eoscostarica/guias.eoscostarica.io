"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[3047],{

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

/***/ 500:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'plantilla-readme',title:'Plantilla readme',sidebar_label:'Plantilla Readme',description:'Plantilla general para crear un readme',keywords:['Plantilla Readme','Readme','markdown','EOS','EOS Costa Rica']};var contentTitle=undefined;var metadata={"unversionedId":"herramientas/plantilla-readme","id":"herramientas/plantilla-readme","title":"Plantilla readme","description":"Plantilla general para crear un readme","source":"@site/docs/herramientas/plantilla-readme.md","sourceDirName":"herramientas","slug":"/herramientas/plantilla-readme","permalink":"/docs/herramientas/plantilla-readme","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/herramientas/plantilla-readme.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1676997593,"formattedLastUpdatedAt":"21 feb 2023","frontMatter":{"id":"plantilla-readme","title":"Plantilla readme","sidebar_label":"Plantilla Readme","description":"Plantilla general para crear un readme","keywords":["Plantilla Readme","Readme","markdown","EOS","EOS Costa Rica"]},"sidebar":"docs","previous":{"title":"Librerías SDK","permalink":"/docs/herramientas/librerias-sdk"},"next":{"title":"Ejemplos de Contratos Inteligentes","permalink":"/docs/herramientas/ejemplos-contratos-inteligentes-eosio"}};var assets={};var toc=[{value:'Para Copiar esta Plantilla Readme puede ver el Código Fuente Markdown',id:'para-copiar-esta-plantilla-readme-puede-ver-el-código-fuente-markdown',level:3},{value:'Introducción con GIF o Imágenes',id:'introducción-con-gif-o-imágenes',level:2},{value:'Sobre el Proyecto',id:'sobre-el-proyecto',level:2},{value:'Tabla de Contenidos',id:'tabla-de-contenidos',level:2},{value:'Propósito del Proyecto',id:'propósito-del-proyecto',level:2},{value:'Tecnologías',id:'tecnologías',level:2},{value:'Entorno de Desarrollo',id:'entorno-de-desarrollo',level:2},{value:'Inicio Rápido',id:'inicio-rápido',level:3},{value:'Empezando',id:'empezando',level:3},{value:'<strong>Pre-Requisitos</strong>',id:'pre-requisitos',level:4},{value:'<strong>Instalación</strong>',id:'instalación',level:4},{value:'Estructura de Archivo',id:'estructura-de-archivo',level:2},{value:'Contribuyendo',id:'contribuyendo',level:2},{value:'Sobre EOS Costa Rica',id:'sobre-eos-costa-rica',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"README es un archivo que trae una peque\xF1a descripci\xF3n sobre todo el proyecto, que contiene una introducci\xF3n y explicaci\xF3n de este. El tipo de informaci\xF3n que se puede describir aqu\xED es informaci\xF3n solicitada para comprender el proyecto y su estructura o prop\xF3sito. A continuaci\xF3n, brindamos una plantilla para crear un archivo README para un nuevo proyecto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"para-copiar-esta-plantilla-readme-puede-ver-el-código-fuente-markdown"},"Para Copiar esta Plantilla Readme puede ver el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"/docs/herramientas/plantilla-readme-codigo-fuente"},"C\xF3digo Fuente Markdown")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"introducción-con-gif-o-imágenes"},"Introducci\xF3n con GIF o Im\xE1genes"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es simple y puede parecer muy f\xE1cil y s\xED, lo es, pero el impacto que puede producir un GIF o una imagen es demasiado grande. El espectador adquiere la informaci\xF3n necesaria para interesarse por el proyecto. Por ejemplo:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Captura de pantalla de Life bank",src:(__webpack_require__(1423)/* ["default"] */ .Z),width:"1446",height:"871"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"sobre-el-proyecto"},"Sobre el Proyecto"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Dar una descripci\xF3n general del proyecto brinda una visi\xF3n general sobre el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"}," proyecto como producto "),", por ejemplo:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"\"Lifebank es un dapp basado en EOSIO que ayuda a las comunidades locales a crear un c\xEDrculo virtuoso de intercambio de valor entre tres partes: donantes de vida elegibles, centros de donaci\xF3n comunitarios y empresas locales participantes (patrocinadores).")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"Lifebank es una iniciativa de EOS Costa Rica, una empresa que desarrolla soluciones basadas en blockchain para resolver problemas del mundo real. Lifebank es nuestra entrada al desaf\xEDo Coding para el cambio organizado por la empresa l\xEDder de blockchain, Block.one \".")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"tabla-de-contenidos"},"Tabla de Contenidos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Con una buena visi\xF3n de la estructura de la informaci\xF3n se puede hacer que el lector acceda a la informaci\xF3n espec\xEDfica necesaria, por lo que luego dar una buena visi\xF3n de la informaci\xF3n con una Tabla de Contenidos facilitar\xE1 este proceso. Por ejemplo:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Tabla de Contenidos")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Introducci\xF3n con GIF o im\xE1genes"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Sobre el proyecto"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Tabla de contenidos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Prop\xF3sito del proyecto"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Tecnolog\xEDas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Entorno de desarrollo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Estructura de archivo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Contribuyendo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Sobre EOS Costa Rica")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"propósito-del-proyecto"},"Prop\xF3sito del Proyecto"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Describe la raz\xF3n por la que se hizo esto, por ejemplo:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"\"Identificamos dos problemas principales: una escasez de donaciones de sangre y una desaceleraci\xF3n econ\xF3mica local. En medio del brote de COVID-19, los bancos de sangre necesitan donantes con urgencia. Las personas que son donantes potenciales calificados deben quedarse en casa y aislarse. A medida que las donaciones caen en picado y la demanda para los aumentos de sangre y plasma, los bancos de sangre est\xE1n experimentando una escasez global pronunciada.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"Adem\xE1s, la pandemia est\xE1 afectando las econom\xEDas locales debido a un bloqueo generalizado. Las peque\xF1as empresas que dependen de la comunidad local deben pensar en formas de incentivar a los clientes a comprar tan pronto como se levanten las restricciones \".")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"tecnologías"},"Tecnolog\xEDas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El prop\xF3sito es que el usuario conozca las principales tecnolog\xEDas que se necesitaban para desarrollar el proyecto, para que el usuario pudiera entender el proyecto con un nuevo tipo de vista, por ejemplo, la informaci\xF3n que se podr\xEDa dar aqu\xED es:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"React.js - React 18\u2728, React Router 5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Rematch/core - Rematch a Redux Framework"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Material-ui/core - React components for faster and easier web development universal-authenticator-library - A library for allowing apps to easily use different auth providers"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Lint - ESlint"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Styles - Material-UI Theme (customizable)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"entorno-de-desarrollo"},"Entorno de Desarrollo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Especifique d\xF3nde se desarroll\xF3 el proyecto, en caso de que alguien m\xE1s quiera hacer una contribuci\xF3n al progreso del proyecto, por ejemplo:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://evodex.io/exchange"},"evodex.io")," se ejecuta en EOS MainNet y se crea a partir de la rama maestra, nuestra rama de producci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://jungle.evodex.io/"},"jungle.evodex.io")," se ejecuta en Jungle 3 TestNet y se crea a partir de la rama de desarrollo utilizada para el desarrollo, la integraci\xF3n y la prueba de nuevas funciones."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"inicio-rápido"},"Inicio R\xE1pido"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Clona este repositorio usando ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"git clone https://github.com/YOUR_PROJECT_NAME.git")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Moverse al directorio apropiado: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"cd <YOUR_PROJECT_NAME>")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Corre ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"yarn")," para instalar dependencias. En este punto puedes correr ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"yarn start")," para ver la aplicaci\xF3n de ejemplo en http://localhost:3000")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"empezando"},"Empezando"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"D\xE9 las instrucciones necesarias para ejecutar el proyecto localmente, por ejemplo:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"pre-requisitos"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h4"},"Pre-Requisitos")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"yarn")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"instalación"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h4"},"Instalaci\xF3n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Clonar el repositorio"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"git clone https://github.com/your_username_/Project-Name.git"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Instalar paquetes de yarn"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"yarn install")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\xF3 solo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"yarn"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Corre el proyecto"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"yarn start")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"estructura-de-archivo"},"Estructura de Archivo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Esto podr\xEDa ayudar al lector a comprender la organizaci\xF3n dentro del proyecto, por ejemplo:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text","metastring":"title=\"modificar\"","title":"\"modificar\""},"/\n\u251C\u2500\u2500 public\n\u2502   \u251C\u2500\u2500 index.html\n\u2502   \u2514\u2500\u2500 manifest.json\n\u251C\u2500\u2500  src\n\u2502   \u251C\u2500\u2500 api\n\u2502   \u251C\u2500\u2500 components\n\u2502   \u251C\u2500\u2500 config\n\u2502   \u251C\u2500\u2500 containers\n\u2502   \u251C\u2500\u2500 models\n\u2502   \u251C\u2500\u2500 routes\n\u2502   \u251C\u2500\u2500 theme\n\u2502   \u251C\u2500\u2500 utils\n\u2502   \u251C\u2500\u2500 App.js\n\u2502   \u251C\u2500\u2500 index.js\n\u2502   \u2514\u2500\u2500 store.js\n\u251C\u2500\u2500 .dockerignore\n\u251C\u2500\u2500 .gitignore\n\u251C\u2500\u2500 .env.example\n\u251C\u2500\u2500 .eslintrc\n\u251C\u2500\u2500 .prettierrc\n\u251C\u2500\u2500 Dockerfile\n\u251C\u2500\u2500 LICENSE\n\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 docker-compose.yml\n\u251C\u2500\u2500 nginx.conf\n\u2514\u2500\u2500 package.json\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"contribuyendo"},"Contribuyendo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si desea hacer una contribuci\xF3n, siga los siguientes pasos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Crear Fork del proyecto"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Crea el Feature Branch (",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"git checkout -b feature/AmazingFeature"),")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Commit a los cambios (",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"git commit -m '<type>(<scope>): <subject>'"),")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Push a la rama de trabajo (",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"git push origin feature/AmazingFeature"),")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Abra un Pull Request")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Por favor lea EOS Costa Rica ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/pautas-para-codigo-abierto/"},"Pautas de contribuci\xF3n de c\xF3digo abierto")," para obtener m\xE1s informaci\xF3n sobre las convenciones de programaci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si encuentra un error, informe los errores grandes y peque\xF1os ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"abriendo un issue")," ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"<enlace a la secci\xF3n del proyecto de emisi\xF3n>")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"sobre-eos-costa-rica"},"Sobre EOS Costa Rica"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{display:"block",textAlign:"center"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{style:{width:"40%"},src:"https://raw.githubusercontent.com/eoscostarica/.github/master/.github/workflows/images/eos-costa-rica-logo.png"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"EOS Costa Rica es un productor independiente, autofinanciado y de bare-metal de Genesis que proporciona una infraestructura estable y segura para las cadenas de bloques EOSIO. Apoyamos el software de c\xF3digo abierto para nuestra comunidad al mismo tiempo que ofrecemos desarrollo de blockchain empresarial y desarrollo de contratos inteligentes personalizados para nuestros clientes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/"},"eoscostarica.io")));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 1423:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/life-bank-a65512e1e78f619f6496c027ec966b47.webp");

/***/ })

}]);
"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[4213],{

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

/***/ 7679:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'plantilla-readme-codigo-fuente',title:'Código fuente de la plantilla README',description:'Código fuente de la plantilla README',keywords:['código fuente','plantilla','README','Ejemplos de README']};var contentTitle=undefined;var metadata={"unversionedId":"herramientas/plantilla-readme-codigo-fuente","id":"herramientas/plantilla-readme-codigo-fuente","title":"Código fuente de la plantilla README","description":"Código fuente de la plantilla README","source":"@site/docs/herramientas/plantilla-readme-codigo-fuente.md","sourceDirName":"herramientas","slug":"/herramientas/plantilla-readme-codigo-fuente","permalink":"/docs/herramientas/plantilla-readme-codigo-fuente","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/herramientas/plantilla-readme-codigo-fuente.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675486037,"formattedLastUpdatedAt":"4 feb 2023","frontMatter":{"id":"plantilla-readme-codigo-fuente","title":"Código fuente de la plantilla README","description":"Código fuente de la plantilla README","keywords":["código fuente","plantilla","README","Ejemplos de README"]}};var assets={};var toc=[];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"## Introducci\xF3n con GIF o Im\xE1genes\n\nEs simple y puede parecer muy f\xE1cil y s\xED, lo es, pero el impacto que puede producir un GIF o una imagen es demasiado grande. El espectador adquiere la informaci\xF3n necesaria para interesarse por el proyecto. Por ejemplo:\n\n![Captura de pantalla de Life bank](/img/life-bank.webp)\n\n## Sobre el Proyecto\n\nDar una descripci\xF3n general del proyecto brinda una visi\xF3n general sobre el ** proyecto como producto **, por ejemplo:\n\n*\"Lifebank es un dapp basado en EOSIO que ayuda a las comunidades locales a crear un c\xEDrculo virtuoso de intercambio de valor entre tres partes: donantes de vida elegibles, centros de donaci\xF3n comunitarios y empresas locales participantes (patrocinadores).*\n\n*Lifebank es una iniciativa de EOS Costa Rica, una empresa que desarrolla soluciones basadas en blockchain para resolver problemas del mundo real. Lifebank es nuestra entrada al desaf\xEDo Coding para el cambio organizado por la empresa l\xEDder de blockchain, Block.one \".*\n\n## Tabla de Contenidos\nCon una buena visi\xF3n de la estructura de la informaci\xF3n se puede hacer que el lector acceda a la informaci\xF3n espec\xEDfica necesaria, por lo que luego dar una buena visi\xF3n de la informaci\xF3n con una Tabla de Contenidos facilitar\xE1 este proceso. Por ejemplo:\n\n**Tabla de Contenidos**\n1. Introducci\xF3n con GIF o im\xE1genes\n2. Sobre el proyecto\n3. Tabla de contenidos\n4. Prop\xF3sito del proyecto\n5. Tecnolog\xEDas\n6. Entorno de desarrollo\n7. Estructura de archivo\n8. Contribuyendo\n9. Sobre EOS Costa Rica\n\n## Prop\xF3sito del Proyecto\n\nDescribe la raz\xF3n por la que se hizo esto, por ejemplo:\n\n*\"Identificamos dos problemas principales: una escasez de donaciones de sangre y una desaceleraci\xF3n econ\xF3mica local. En medio del brote de COVID-19, los bancos de sangre necesitan donantes con urgencia. Las personas que son donantes potenciales calificados deben quedarse en casa y aislarse. A medida que las donaciones caen en picado y la demanda para los aumentos de sangre y plasma, los bancos de sangre est\xE1n experimentando una escasez global pronunciada.*\n\n*Adem\xE1s, la pandemia est\xE1 afectando las econom\xEDas locales debido a un bloqueo generalizado. Las peque\xF1as empresas que dependen de la comunidad local deben pensar en formas de incentivar a los clientes a comprar tan pronto como se levanten las restricciones \".*\n\n## Tecnolog\xEDas\nEl prop\xF3sito es que el usuario conozca las principales tecnolog\xEDas que se necesitaban para desarrollar el proyecto, para que el usuario pudiera entender el proyecto con un nuevo tipo de vista, por ejemplo, la informaci\xF3n que se podr\xEDa dar aqu\xED es:\n\n\n- React.js - React 18\u2728, React Router 5\n- Rematch/core - Rematch a Redux Framework\n- Material-ui/core - React components for faster and easier web development universal-authenticator-library - A library for allowing apps to easily use different auth providers\n- Lint - ESlint\n- Styles - Material-UI Theme (customizable)\n\n\n## Entorno de Desarrollo\n\nEspecifique d\xF3nde se desarroll\xF3 el proyecto, en caso de que alguien m\xE1s quiera hacer una contribuci\xF3n al progreso del proyecto, por ejemplo:\n\n[evodex.io](https://evodex.io/exchange) se ejecuta en EOS MainNet y se crea a partir de la rama maestra, nuestra rama de producci\xF3n.\n\n[jungle.evodex.io](https://jungle.evodex.io/) se ejecuta en Jungle 3 TestNet y se crea a partir de la rama de desarrollo utilizada para el desarrollo, la integraci\xF3n y la prueba de nuevas funciones.\n\n### Inicio R\xE1pido\n\n- Clona este repositorio usando `git clone https://github.com/YOUR_PROJECT_NAME.git`\n- Moverse al directorio apropiado: `cd <YOUR_PROJECT_NAME>`\n- Corre `yarn` para instalar dependencias. En este punto puedes correr `yarn start` para ver la aplicaci\xF3n de ejemplo en http://localhost:3000\n\n### Empezando\nD\xE9 las instrucciones necesarias para ejecutar el proyecto localmente, por ejemplo:\n\n#### **Pre-Requisitos**\n\n`\nyarn\n`\n\n#### **Instalaci\xF3n**\n\n1. Clonar el repositorio\n\n    `\n    git clone https://github.com/your_username_/Project-Name.git\n    `\n2. Instalar paquetes de yarn\n\n    `\n    yarn install\n    `\n\n    \xF3 solo\n\n    `\n    yarn\n    `\n3. Corre el proyecto\n    \n    `\n    yarn start\n    `\n\n## Estructura de Archivo\nEsto podr\xEDa ayudar al lector a comprender la organizaci\xF3n dentro del proyecto, por ejemplo:\n\n```text title=\"modificar\"\n/\n\u251C\u2500\u2500 public\n\u2502   \u251C\u2500\u2500 index.html\n\u2502   \u2514\u2500\u2500 manifest.json\n\u251C\u2500\u2500  src\n\u2502   \u251C\u2500\u2500 api\n\u2502   \u251C\u2500\u2500 components\n\u2502   \u251C\u2500\u2500 config\n\u2502   \u251C\u2500\u2500 containers\n\u2502   \u251C\u2500\u2500 models\n\u2502   \u251C\u2500\u2500 routes\n\u2502   \u251C\u2500\u2500 theme\n\u2502   \u251C\u2500\u2500 utils\n\u2502   \u251C\u2500\u2500 App.js\n\u2502   \u251C\u2500\u2500 index.js\n\u2502   \u2514\u2500\u2500 store.js\n\u251C\u2500\u2500 .dockerignore\n\u251C\u2500\u2500 .gitignore\n\u251C\u2500\u2500 .env.example\n\u251C\u2500\u2500 .eslintrc\n\u251C\u2500\u2500 .prettierrc\n\u251C\u2500\u2500 Dockerfile\n\u251C\u2500\u2500 LICENSE\n\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 docker-compose.yml\n\u251C\u2500\u2500 nginx.conf\n\u2514\u2500\u2500 package.json\n    \n    ## Contribuyendo\n\n    Si desea hacer una contribuci\xF3n, siga los siguientes pasos:\n\n    1. Crear Fork del proyecto\n    2. Crea el Feature Branch (`git checkout -b feature/AmazingFeature`)\n    3. Commit a los cambios (`git commit -m '<type>(<scope>): <subject>'`)\n    4. Push a la rama de trabajo (`git push origin feature/AmazingFeature`)\n    5. Abra un Pull Request\n\n    Por favor lea EOS Costa Rica [Pautas de contribuci\xF3n de c\xF3digo abierto](https://guias.eoscostarica.io/docs/pautas-para-codigo-abierto/) para obtener m\xE1s informaci\xF3n sobre las convenciones de programaci\xF3n.\n\n    Si encuentra un error, informe los errores grandes y peque\xF1os **abriendo un issue** `<enlace a la secci\xF3n del proyecto de emisi\xF3n>`\n\n    ## Colaboradores\n\n    Liste las personas que trabajan en el proyecto.\n\n    ## Sobre EOS Costa Rica\n\n    <div style={{ display: \"block\", textAlign: \"center\" }}>\n        <img style={{ width: \"40%\" }} src=\"https://raw.githubusercontent.com/eoscostarica/.github/master/.github/workflows/images/eos-costa-rica-logo.png\" />\n    </div>\n\n    EOS Costa Rica es un productor independiente, autofinanciado y de bare-metal de Genesis que proporciona una infraestructura estable y segura para las cadenas de bloques EOSIO. Apoyamos el software de c\xF3digo abierto para nuestra comunidad al mismo tiempo que ofrecemos desarrollo de blockchain empresarial y desarrollo de contratos inteligentes personalizados para nuestros clientes.\n\n    [eoscostarica.io](https://eoscostarica.io/)\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);
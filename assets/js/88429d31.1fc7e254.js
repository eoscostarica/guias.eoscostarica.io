"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[1475],{

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

/***/ 1900:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'docker',title:'Docker',sidebar_label:'Docker',description:'Conceptos, definición y funcionalidades de Docker',keywords:['Docker','Docker','Aprender Docker','Qué es Docker','Para qué sirve Docker','Cómo funciona Docker','Cómo usar docker']};var contentTitle=undefined;var metadata={"unversionedId":"tutoriales/docker","id":"tutoriales/docker","title":"Docker","description":"Conceptos, definición y funcionalidades de Docker","source":"@site/docs/tutoriales/docker.md","sourceDirName":"tutoriales","slug":"/tutoriales/docker","permalink":"/docs/tutoriales/docker","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/docker.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675486037,"formattedLastUpdatedAt":"4 feb 2023","frontMatter":{"id":"docker","title":"Docker","sidebar_label":"Docker","description":"Conceptos, definición y funcionalidades de Docker","keywords":["Docker","Docker","Aprender Docker","Qué es Docker","Para qué sirve Docker","Cómo funciona Docker","Cómo usar docker"]},"sidebar":"docs","previous":{"title":"C++ Moderno","permalink":"/docs/tutoriales/cpp-moderno"},"next":{"title":"GraphQL","permalink":"/docs/tutoriales/graphql"}};var assets={};var toc=[{value:'Docker Engine',id:'docker-engine',level:2},{value:'Docker Compose',id:'docker-compose',level:2},{value:'Cómo Iniciar',id:'cómo-iniciar',level:3},{value:'Estructura del proyecto',id:'estructura-del-proyecto',level:3},{value:'Desglose del código',id:'desglose-del-código',level:3},{value:'Dockerfile',id:'dockerfile',level:4},{value:'.dockerignore',id:'dockerignore',level:4},{value:'.gitignore',id:'gitignore',level:4},{value:'src/index.js',id:'srcindexjs',level:4},{value:'package.json',id:'packagejson',level:4},{value:'Comandos',id:'comandos',level:3},{value:'Construir Imagen',id:'construir-imagen',level:4},{value:'Correr contenedor',id:'correr-contenedor',level:4},{value:'Docker Compose Example',id:'docker-compose-example',level:3},{value:'docker-compose.yml',id:'docker-composeyml',level:4},{value:'Ejecutar Multiples Contenedores',id:'ejecutar-multiples-contenedores',level:3},{value:'Comando',id:'comando',level:4}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Docker es una herramienta que permite crear, probar y desplegar aplicaciones r\xE1pidamente. La idea detr\xE1s de Docker es crear \"contenedores\" que sean ligeros y port\xE1tiles para que las aplicaciones puedan ejecutarse en cualquier m\xE1quina con Docker instalado, independientemente del sistema operativo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Por ejemplo, cada nodo de la red blockchain o servicio/aplicaci\xF3n desarrollada se compilar\xE1 en una imagen Docker que contiene todas sus dependencias y se despliega en uno de los varios proveedores de infraestructura con Docker disponible."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{textAlign:"center"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Docker vs. Traditional VMs",src:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('/img/documentation-images/Docker-containerized-and-vm-transparent-bg.webp')})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Adem\xE1s de Docker, utilizamos una herramienta de \"orquestaci\xF3n\" de contenedores llamada Kubernetes (K8s)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Kubernetes te ayuda a gestionar los contenedores en los que se alojan tus aplicaciones de forma f\xE1cil, r\xE1pida y escalable. Adem\xE1s, tambi\xE9n dispone de monitorizaci\xF3n y balanceo de carga. Sobre los servidores virtuales. Para m\xE1s informaci\xF3n visite ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/devops#introducci%C3%B3n-a-kubernetes-y-docker"},"Kubernetes y Docker"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"docker-engine"},"Docker Engine"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Docker Engine es una tecnolog\xEDa de contenedores de c\xF3digo abierto para construir y \"containerizar\" sus aplicaciones. Docker Engine act\xFAa como una aplicaci\xF3n cliente-servidor con:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Un servidor con un proceso daemon de larga duraci\xF3n ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://docs.docker.com/engine/reference/commandline/dockerd"},"dockerd"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"APIs que especifican interfaces que los programas pueden utilizar para hablar con el daemon Docker y darle instrucciones."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Una interfaz de l\xEDnea de comandos (CLI) ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://docs.docker.com/engine/reference/commandline/cli/"},"docker"),".")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La CLI utiliza ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://docs.docker.com/engine/api/"},"Docker APIs")," para controlar o interactuar con el daemon Docker a trav\xE9s de scripts o comandos directos de la CLI. Muchas otras aplicaciones de Docker utilizan la API y la CLI subyacentes. El demonio crea y gestiona objetos Docker, como im\xE1genes, contenedores, redes y vol\xFAmenes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para m\xE1s detalles, v\xE9ase ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://docs.docker.com/get-started/overview/#docker-architecture"},"Arquitectura Docker"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para tener una configuraci\xF3n inicial de Docker, necesitamos establecer tres cosas principales:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Dockerfile"),": Define los pasos necesarios para crear la imagen y ejecutarla. Cada instrucci\xF3n en un Dockerfile crea una capa en la imagen."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Imagen"),": Una imagen es una plantilla de s\xF3lo lectura con instrucciones para crear un contenedor Docker."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"Contenedor"),": Un contenedor es una instancia ejecutable de una imagen. Puedes crear, iniciar, detener, mover o eliminar un contenedor utilizando la API de Docker o la CLI.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"docker-compose"},"Docker Compose"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Compose es una herramienta para definir y ejecutar aplicaciones Docker multi-contenedor. Con Compose, usted utiliza un archivo YAML para configurar los servicios de su aplicaci\xF3n. Luego, con un solo comando, creas e inicias todos los servicios desde tu configuraci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El uso de Compose es b\xE1sicamente un proceso de tres pasos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Define el entorno de tu aplicaci\xF3n con un Dockerfile para que pueda ser reproducido en cualquier lugar."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Define los servicios que componen tu app en docker-compose.yml para que puedan ejecutarse juntos en un entorno aislado."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Ejecuta docker-compose y Compose inicia y ejecuta toda tu app.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un docker-compose.yml tiene el siguiente aspecto:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yml"},"version: \"3.9\"  # optional since v1.27.0\nservices:\n  web:\n    build: .\n    ports:\n      - \"5000:5000\"\n    volumes:\n      - .:/code\n      - logvolume01:/var/log\n    links:\n      - redis\n  redis:\n    image: redis\nvolumes:\n  logvolume01: {}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"cómo-iniciar"},"C\xF3mo Iniciar"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para iniciar nuestro primer proyecto Docker, vamos a crear la configuraci\xF3n necesaria para que arranque y diga ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Hola mundo, somos EOS Costa Rica \uD83E\uDD8B"),". En primer lugar, necesitamos la configuraci\xF3n principal, as\xED que sigue los siguientes pasos para obtenerla."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"estructura-del-proyecto"},"Estructura del proyecto"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"/\n\u251C\u2500\u2500  node_modules\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 index.js\n\u251C\u2500\u2500 .dockerignore\n\u251C\u2500\u2500 .gitignore\n\u251C\u2500\u2500 Dockerfile\n\u251C\u2500\u2500 package.json\n\u2514\u2500\u2500 yarn.lock\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"desglose-del-código"},"Desglose del c\xF3digo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"dockerfile"},"Dockerfile"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-Dockerfile"},"FROM node:12\nWORKDIR /app\nCOPY package*.json ./\nRUN yarn\nCOPY . .\nENV PORT=8080\nEXPOSE 8080\nCMD [ \"yarn\", \"start\" ]\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"dockerignore"},".dockerignore"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"node_modules")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"gitignore"},".gitignore"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"node_modules")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"srcindexjs"},"src/index.js"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"const app = require('express')();\n \napp.get('/', (req, res ) => \n    res.json({ message: 'Hello world, we are EOS Costa Rica \uD83E\uDD8B' }) \n);\n \nconst port = process.env.PORT || 8080;\n \napp.listen(port, () => console.log(`app listening on http://localhost:${port}`) );\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"packagejson"},"package.json"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json"},"{\n  \"name\": \"docker-demo\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Hello world, we are EOS Costa Rica \uD83E\uDD8B\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"start\": \"node src/index.js\"\n  },\n  \"keywords\": [],\n  \"author\": \"EOS Costa Rica\",\n  \"license\": \"MIT\",\n  \"dependencies\": {\n    \"express\": \"^4.17.1\"\n  }\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"comandos"},"Comandos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"construir-imagen"},"Construir Imagen"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"docker build -t eoscostarica/helloworld:1.0 .")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"correr-contenedor"},"Correr contenedor"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"docker run -p 5000:8080 <image-id>")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"docker-compose-example"},"Docker Compose Example"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"docker-composeyml"},"docker-compose.yml"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yml"},"version: '3'\nservices:\n  web:\n    build: .\n    ports:\n      - \"8080:8080\"\n  db:\n    image: \"mysql\"\n    environment: \n      MYSQL_ROOT_PASSWORD: password\n    volumes:\n      - db-data:/foo\nvolumes:\n  db-data:\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"ejecutar-multiples-contenedores"},"Ejecutar Multiples Contenedores"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"comando"},"Comando"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"docker-compose up")));};MDXContent.isMDXComponent=true;

/***/ })

}]);
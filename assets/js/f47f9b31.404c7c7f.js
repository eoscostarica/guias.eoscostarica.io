"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[2562],{

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

/***/ 4658:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'preguntas-frecuentes',title:'Preguntas Frecuentes de Desarrolladores',sidebar_label:'Preguntas Frecuentes',description:'Preguntas frecuentes de desarrolladores blockchain EOSIO',keywords:['FAQ','Preguntas Frecuentes','Blockchain','Dessarrolladores','EOS','EOSIO']};var contentTitle=undefined;var metadata={"unversionedId":"herramientas/preguntas-frecuentes","id":"herramientas/preguntas-frecuentes","title":"Preguntas Frecuentes de Desarrolladores","description":"Preguntas frecuentes de desarrolladores blockchain EOSIO","source":"@site/docs/herramientas/preguntas-frecuentes.md","sourceDirName":"herramientas","slug":"/herramientas/preguntas-frecuentes","permalink":"/docs/herramientas/preguntas-frecuentes","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/herramientas/preguntas-frecuentes.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1676997593,"formattedLastUpdatedAt":"21 feb 2023","frontMatter":{"id":"preguntas-frecuentes","title":"Preguntas Frecuentes de Desarrolladores","sidebar_label":"Preguntas Frecuentes","description":"Preguntas frecuentes de desarrolladores blockchain EOSIO","keywords":["FAQ","Preguntas Frecuentes","Blockchain","Dessarrolladores","EOS","EOSIO"]},"sidebar":"docs","previous":{"title":"Ejemplos de Contratos Inteligentes","permalink":"/docs/herramientas/ejemplos-contratos-inteligentes-eosio"},"next":{"title":"Charlas y Presentaciones","permalink":"/docs/comunidad/charlas-y-presentaciones"}};var assets={};var toc=[{value:'¿Qué es SSH (Secure Shell)?',id:'qué-es-ssh-secure-shell',level:2},{value:'¿Cuál es la diferencia entre una cuenta regular y una cuenta Blockchain?',id:'cuál-es-la-diferencia-entre-una-cuenta-regular-y-una-cuenta-blockchain',level:2},{value:'¿Qué es EOSIO?',id:'qué-es-eosio',level:2},{value:'¿Cuál es la diferencia entre una clave pública y una privada?',id:'cuál-es-la-diferencia-entre-una-clave-pública-y-una-privada',level:2},{value:'¿Cuáles son las mejores prácticas para programar en JavaScript?',id:'cuáles-son-las-mejores-prácticas-para-programar-en-javascript',level:2},{value:'¿Por qué Blockchain?',id:'por-qué-blockchain',level:2},{value:'¿Cómo funciona un Contrato Inteligente?',id:'cómo-funciona-un-contrato-inteligente',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En EOS Costa Rica nos interesan las dudas de nuestros ingenieros."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El buen desarrollo es clave para el \xE9xito de cada uno de nuestros productos, por eso buscamos brindar las mejores respuestas a cada una de sus preguntas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A continuaci\xF3n, se muestra una lista de las preguntas m\xE1s frecuentes durante el proceso de desarrollo documentado por nuestros trabajadores."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"qué-es-ssh-secure-shell"},"\xBFQu\xE9 es SSH (Secure Shell)?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"SSH")," tambi\xE9n se conoce como Secure Shell o Secure Socket Shell, es un protocolo que puede utilizar para conectarse y autenticarse en servidores y servicios remotos. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh"},"M\xE1s sobre SSH en GitHub"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cuál-es-la-diferencia-entre-una-cuenta-regular-y-una-cuenta-blockchain"},"\xBFCu\xE1l es la diferencia entre una cuenta regular y una cuenta Blockchain?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"Cuenta regular"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"Cuenta Blockchain"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"-La contrase\xF1a se almacena en los servidores de la empresa ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br",null)," -Propenso a ser pirateado ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br",null)," -Sin transparencia"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"-Debe mantenerse en secreto ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br",null)," -Criptograf\xEDa asim\xE9trica ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br",null)," -Clave p\xFAblica y clave privada ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br",null)," -Diferentes pares de claves tienen diferentes permisos asociados")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"qué-es-eosio"},"\xBFQu\xE9 es EOSIO?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es una plataforma blockchain. Construido para casos de uso p\xFAblicos y privados. Se puede personalizar para adaptarse a una amplia gama de necesidades comerciales en todas las industrias con una gran seguridad basada en roles."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cuál-es-la-diferencia-entre-una-clave-pública-y-una-privada"},"\xBFCu\xE1l es la diferencia entre una clave p\xFAblica y una privada?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Ellas son parte del ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Cifrado asim\xE9trico"),". Imagine una cerradura donde se usa la clave p\xFAblica para cerrar la cerradura (encriptar el mensaje) y la clave privada se usa para abrir la cerradura (descifrar el mensaje).\nMencionado en el art\xEDculo de Whitfield Diffie y Martin Hellman 1976 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Nuevas direcciones en criptograf\xEDa"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"La definici\xF3n de clave p\xFAblica y privada se pueden encontrar en la secci\xF3n de Herramientas, Glosario.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.preveil.com/blog/public-and-private-key/"},"M\xE1s informaci\xF3n sobre c\xF3mo funciona")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cuáles-son-las-mejores-prácticas-para-programar-en-javascript"},"\xBFCu\xE1les son las mejores pr\xE1cticas para programar en JavaScript?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Seguir ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"}," un est\xE1ndar facilita la comprensi\xF3n del c\xF3digo "),", m\xE1s de un ingeniero trabaja en un proyecto de software y ser capaz de comprender el c\xF3digo es vital para el flujo de desarrollo del producto final. Algunas de las recomendaciones m\xE1s destacadas de este est\xE1ndar son las siguientes:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Usar comillas simples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"console.log('hello there')    // \u2713 ok\nconsole.log(\"hello there\")    // \u2717 evitar\nconsole.log(`hello there`)    // \u2717 evitar\n$(\"<div class='box'>\")        // \u2713 ok\nconsole.log(`hello ${name}`)  // \u2713 ok\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Agrega un espacio despu\xE9s de una palabra clave"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"if (condition) { ... }   // \u2713 ok\nif(condition) { ... }    // \u2717 evitar\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Agregue un espacio antes de la declaraci\xF3n de los par\xE9ntesis de la funci\xF3n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"function name (arg) { ... }   // \u2713 ok\nfunction name(arg) { ... }    // \u2717 evitar\nrun(function () { ... })      // \u2713 ok\nrun(function() { ... })       // \u2717 evitar\n")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para obtener m\xE1s informaci\xF3n sobre las pautas a seguir, consulte ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://standardjs.com/rules.html"},"JavaScript Standard Style"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"por-qué-blockchain"},"\xBFPor qu\xE9 Blockchain?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un Blockchain es un registro de datos que funciona como un gran libro de cuentas compartido entre varios usuarios o \"nodos\" en el que las transacciones se registran de forma confiable y segura. En este libro mayor, se registran \"bloques\", que son colecciones de datos. Estos bloques est\xE1n conectados entre s\xED de forma cronol\xF3gica creando una especie de cadena.\nPara obtener m\xE1s detalles, consulte ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.medium.com/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3"},"\xBFC\xF3mo funciona una cadena de bloques?")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cómo-funciona-un-contrato-inteligente"},"\xBFC\xF3mo funciona un Contrato Inteligente?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un contrato es simplemente un acuerdo de formalizaci\xF3n entre dos o m\xE1s partes. Debe definir el alcance, la forma de actuar y las consecuencias de actuar de forma diferente. Sin embargo, los contratos tradicionales pueden presentar un problema: est\xE1n sujetos a interpretaci\xF3n.\nPara obtener m\xE1s detalles sobre un contrato inteligente, puede ver ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.medium.com/qu%C3%A9-es-un-smart-contract-793d2042c65d"},"\xBFQu\xE9 es un contrato inteligente?")));};MDXContent.isMDXComponent=true;

/***/ })

}]);
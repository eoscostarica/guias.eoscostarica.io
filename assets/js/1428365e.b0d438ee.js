"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[1386],{

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

/***/ 9674:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'uso-de-recursos',title:'Uso de Recursos EOSIO',sidebar_label:'Uso de Recursos',description:'Uso de recursos del blockchain de EOSIO',keywords:['uso de recursos','recursos EOSIO','eosio','eos','EOS','EOS Costa Rica']};var contentTitle=undefined;var metadata={"unversionedId":"aprender-eosio/uso-de-recursos","id":"aprender-eosio/uso-de-recursos","title":"Uso de Recursos EOSIO","description":"Uso de recursos del blockchain de EOSIO","source":"@site/docs/aprender-eosio/uso-de-recursos.md","sourceDirName":"aprender-eosio","slug":"/aprender-eosio/uso-de-recursos","permalink":"/docs/aprender-eosio/uso-de-recursos","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/uso-de-recursos.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1676997593,"formattedLastUpdatedAt":"21 feb 2023","frontMatter":{"id":"uso-de-recursos","title":"Uso de Recursos EOSIO","sidebar_label":"Uso de Recursos","description":"Uso de recursos del blockchain de EOSIO","keywords":["uso de recursos","recursos EOSIO","eosio","eos","EOS","EOS Costa Rica"]},"sidebar":"docs","previous":{"title":"Algoritmo de Consenso DPoS","permalink":"/docs/aprender-eosio/mecanismo-de-consenso"},"next":{"title":"Componentes EOSIO","permalink":"/docs/aprender-eosio/componentes-eosio"}};var assets={};var toc=[{value:'Tipos de Recursos',id:'tipos-de-recursos',level:2},{value:'RAM',id:'ram',level:3},{value:'CPU',id:'cpu',level:3},{value:'Network (NET)',id:'network-net',level:3},{value:'Límites de Recursos de la Cuenta',id:'límites-de-recursos-de-la-cuenta',level:2},{value:'Contabilidad de Recursos',id:'contabilidad-de-recursos',level:2},{value:'CPU y NET como Recursos Elásticos',id:'cpu-y-net-como-recursos-elásticos',level:2},{value:'Asignación de Recursos de EOS',id:'asignación-de-recursos-de-eos',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"tipos-de-recursos"},"Tipos de Recursos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Las cuentas podr\xE1n utilizar los siguientes recursos en la red:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"ram"},"RAM"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En una red EOSIO, la RAM es el espacio de almacenamiento de memoria donde la cadena de bloques almacena datos, se mide en kilobytes (KiB). Si su contrato necesita almacenar datos en una tabla de blockchain, como en una base de datos, puede almacenarlos en la RAM de blockchain."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"RAM es un recurso muy importante y es limitado. Se utiliza al ejecutar muchas acciones que est\xE1n disponibles en la cadena de bloques, al crear una nueva cuenta, por ejemplo, la informaci\xF3n de esa cuenta se almacena en la memoria de la cadena de bloques. Adem\xE1s, cuando una cuenta acepta un nuevo tipo de token, se debe crear un nuevo registro en alg\xFAn lugar de la memoria de blockchain que contenga el saldo del nuevo token aceptado, y esa memoria, el espacio de almacenamiento en blockchain, debe ser comprada por el cuenta que transfiere el token o por la cuenta que acepta el nuevo tipo de token."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"RAM es referido como ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"memory")," en el siguiente resultado del comando ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"cleos get account"),":"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-C++"},"memory:\nquota: 86.68 KiB\nused: 11.62 KiB\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Puede encontrar m\xE1s detalles sobre RAM como recurso del sistema en la gu\xEDa ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram"},"RAM Contratos EOSIO"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"cpu"},"CPU"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La CPU est\xE1 procesando la potencia, la cantidad de CPU que tiene una cuenta se mide en microsegundos (\u03BCs), se conoce como ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"CPU bandwith"),", el comando ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"cleos get account")," emite la cantidad de tiempo de procesamiento que una cuenta tiene a su disposici\xF3n al presionar acciones a un contrato."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Puede encontrar m\xE1s detalles sobre la CPU como recurso del sistema en la gu\xEDa ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu"},"CPU Contratos EOSIO"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"network-net"},"Network (NET)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Como CPU y RAM, NET tambi\xE9n es un recurso muy importante en las cadenas de bloques basadas en EOSIO. NET es el ancho de banda de la red medido en bytes de transacciones y se conoce como ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"net bandwidth"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Puede encontrar m\xE1s detalles sobre NET como recurso del sistema en la gu\xEDa ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net"},"NET Contratos EOSIO"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"límites-de-recursos-de-la-cuenta"},"L\xEDmites de Recursos de la Cuenta"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cada cuenta en una cadena de bloques basada en EOSIO tiene l\xEDmites de recursos para CPU / NET y RAM asociados. Estos l\xEDmites especifican cu\xE1nto de cada recurso puede usar la cuenta y se pueden cambiar din\xE1micamente llamando a la API privilegiada ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"set_resource_limits"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La diferencia entre los l\xEDmites de recursos de CPU / NET y RAM es que la RAM, dado que es un recurso limitado, una vez utilizada, la \xFAnica forma de recuperarla es liberar el espacio de almacenamiento utilizado. Por otro lado, CPU y NET se repondr\xE1n por completo cuando la cuenta no est\xE9 utilizando la red durante un per\xEDodo de tiempo. Por defecto, este per\xEDodo se establece en 24 horas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"contabilidad-de-recursos"},"Contabilidad de Recursos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cuando un usuario (cuenta) desea interactuar con un contrato inteligente (otra cuenta), se crea una transacci\xF3n con una acci\xF3n que especifica la funci\xF3n inteligente para llamar junto con la cuenta (nivel de permiso) que autoriza la acci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Luego, despu\xE9s de firmar con las claves que autorizan el nivel de permiso especificado en la acci\xF3n, la transacci\xF3n se transmite a la red hasta que alcanza el productor de bloques actual en la programaci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El productor de bloques ejecutar\xE1 todas las acciones dentro de la transacci\xF3n y facturar\xE1 el tiempo utilizado para ejecutarlas (CPU) a la primera cuenta que autoriza la primera acci\xF3n. Adem\xE1s, facturar\xE1 a la primera cuenta de autorizaci\xF3n por el tama\xF1o de la transacci\xF3n (NET)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si las acciones realizadas por el contrato inteligente implican alg\xFAn tipo de almacenamiento de datos, el contrato inteligente puede elegir usar los recursos de RAM de cualquiera de las cuentas de autorizaci\xF3n de transacciones o usar los recursos de RAM de la cuenta del contrato inteligente."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cpu-y-net-como-recursos-elásticos"},"CPU y NET como Recursos El\xE1sticos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"resource limit manager")," de una cadena de bloques basada en EOSIO es la parte del protocolo que realiza un seguimiento de la cantidad de recursos de red disponibles en cualquier momento y cu\xE1ntos recursos est\xE1 usando cada cuenta."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En particular, trata la CPU y NET como recursos el\xE1sticos que permiten a los usuarios consumir m\xE1s recursos de los que tienen derecho mientras este recurso est\xE1 por debajo del uso deseado (no congestionado)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un recurso el\xE1stico tiene las siguientes propiedades."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"El uso deseado."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"El uso m\xE1ximo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"El n\xFAmero de per\xEDodos de agregaci\xF3n que contribuyen al uso promedio."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"El multiplicador por el cual el espacio virtual puede sobrevender el uso cuando no est\xE1 congestionado."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"La tasa a la cual un recurso congestionado contrae su l\xEDmite."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"La velocidad a la que un recurso no congestionado expande sus l\xEDmites.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Veamos la configuraci\xF3n predeterminada para el recurso de CPU como ejemplo:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-c++"},"const static uint32_t default_max_block_cpu_usage = 200'000; /// max block cpu usage in microseconds\nconst static uint32_t default_target_block_cpu_usage_pct = 10 * percent_1;\nconst static uint32_t block_cpu_usage_average_window_ms  = 60*1000l; \n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-c++"},"elastic_limit_parameters cpu_limit_parameters = {\n    EOS_PERCENT(config::default_max_block_cpu_usage, config::default_target_block_cpu_usage_pct), //10% of 200ms\n    config::default_max_block_cpu_usage,                                                          //200ms\n    config::block_cpu_usage_average_window_ms / config::block_interval_ms,                        //60s (120 blocks)\n    1000,                                                                                         //x1000 multiplier\n    {99, 100},                                                                                    //contract ratio 0.99 \n    {1000, 999}                                                                                   //expand ratio 1.001\n};\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Al hacer de la CPU un recurso el\xE1stico, se crear\xE1 una CPU virtual que oscilar\xE1 entre el valor m\xE1s bajo posible, que es el uso m\xE1ximo especificado, y el valor m\xE1s alto posible, que es el valor m\xE1s bajo posible multiplicador."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-c++"},"virtual cpu = [[maximum usage, maximum usage * multiplier]]\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El l\xEDmite de la CPU virtual se contraer\xE1 (expandir\xE1) mediante la ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"relaci\xF3n de contrato (expandir)")," cuando la utilizaci\xF3n promedio est\xE9 por encima (debajo) del uso deseado, lo que significa que ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"lo m\xE1ximo que una cuenta puede consumir durante los per\xEDodos de inactividad es 1000x (multiplicador) ancho de banda se garantiza bajo congesti\xF3n"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La utilizaci\xF3n promedio de la CPU se calcula utilizando un EMA (Promedio m\xF3vil exponencial) que otorga un mayor peso e importancia al uso m\xE1s reciente."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"def update_elastic_limit(current_limit, average_usage, elastic_resource_limit):\n    result = current_limit\n    if average_usage > elastic_resource_limit.target:\n        result = result * elastic_resource_limit.contract_rate\n    else:\n        result = result * elastic_resource_limit.expand_rate\n\n    return min(max(result, elastic_resource_limit.max), elastic_resource_limit.max * elastic_resource_limit.max_multiplier)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"asignación-de-recursos-de-eos"},"Asignaci\xF3n de Recursos de EOS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/N6CTRdx6NVE",frameBorder:"0",allowFullScreen:true,loading:"lazy"}," ")));};MDXContent.isMDXComponent=true;

/***/ })

}]);
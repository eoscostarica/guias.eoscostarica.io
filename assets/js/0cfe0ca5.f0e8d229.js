"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[7306],{

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

/***/ 1043:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'interplanetary-file-system',title:'IPFS (Interplanetary File System)',sidebar_label:'IPFS (Interplanetary File System)',description:'IPFS es un protocolo de comunicación de datos que permite almacenar y recuperar archivos en una red de nodos.',keywords:['IPFS','Interplanetary File System','File System','EOS','EOS Costa Rica','Qué es IPFS','Para qué sirve IPFS']};var contentTitle=undefined;var metadata={"unversionedId":"interplanetary-file-system","id":"interplanetary-file-system","title":"IPFS (Interplanetary File System)","description":"IPFS es un protocolo de comunicación de datos que permite almacenar y recuperar archivos en una red de nodos.","source":"@site/docs/interplanetary-file-system.md","sourceDirName":".","slug":"/interplanetary-file-system","permalink":"/docs/interplanetary-file-system","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/interplanetary-file-system.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1676997593,"formattedLastUpdatedAt":"21 feb 2023","frontMatter":{"id":"interplanetary-file-system","title":"IPFS (Interplanetary File System)","sidebar_label":"IPFS (Interplanetary File System)","description":"IPFS es un protocolo de comunicación de datos que permite almacenar y recuperar archivos en una red de nodos.","keywords":["IPFS","Interplanetary File System","File System","EOS","EOS Costa Rica","Qué es IPFS","Para qué sirve IPFS"]},"sidebar":"docs","previous":{"title":"DevOps","permalink":"/docs/devops"},"next":{"title":"Mecanismos de Consenso","permalink":"/docs/mecanismos-de-consenso-blockchain"}};var assets={};var toc=[{value:'Historia de IPFS',id:'historia-de-ipfs',level:2},{value:'¿Cómo funciona IPFS?',id:'cómo-funciona-ipfs',level:2},{value:'Ventajas y desventajas de IPFS',id:'ventajas-y-desventajas-de-ipfs',level:2},{value:'Casos de uso de IPFS',id:'casos-de-uso-de-ipfs',level:2},{value:'Que se espera en el futuro para IPFS',id:'que-se-espera-en-el-futuro-para-ipfs',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://ipfs.io/"},"IPFS")," (Interplanetary File System) es un protocolo de red descentralizado que se basa en una red distribuida, esto para crear una relaci\xF3n directa con el m\xE9todo p2p (",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://es.wikipedia.org/wiki/Peer-to-peer"},"peer to peer"),"), el fin de dicho protocolo es almacenar archivos u informaci\xF3n de una manera r\xE1pida y segura. De esta manera, IPFS cambia la forma tradicional de almacenamiento de la informaci\xF3n pasando de centralizada a descentralizada, trayendo consigo muchos beneficios como el acceso a la informaci\xF3n sin depender de un \xFAnico punto de almacenamiento para su respectivo acceso, aumento de almacenamiento, control de uso de tus propios datos y entre muchos otros beneficios."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figure",{className:"video_container"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/5Uj6uR3fp-U",frameBorder:"0",allowFullScreen:true,loading:"lazy"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"historia-de-ipfs"},"Historia de IPFS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"IPFS nace con la necesidad de solventar muchos problemas que se ven d\xEDa con d\xEDa en el almacenamiento de los datos en internet. Un claro ejemplo es el almacenamiento centralizado, el acaparamiento de datos en un s\xF3lo lugar hace que su uso sea m\xE1s lento dependiendo la cantidad de personas, tambi\xE9n si el servidor deja de funcionar no hay manera de utilizar la informaci\xF3n hasta que este vuelva a estar en marcha. Tambi\xE9n es muy com\xFAn el uso de informaci\xF3n para venderla a terceros como es el caso de algunas redes sociales donde venden informaci\xF3n de gustos y preferencias sin el consentimiento de los usuarios. Este sistema nace con el fin de dar soluci\xF3n a muchos problemas presentes en el protocolo actual."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El inicio de IPFS se da en el a\xF1o 2014, donde Juan Benet programador de software crea una empresa llamada Protocol Labs. En el a\xF1o 2015 Benet anuncia una nueva tecnolog\xEDa la que ya es conocida mundialmente como IPFS. Como se mencion\xF3 anteriormente, la idea central era construir una red p2p, de esta manera los usuarios de la misma podr\xEDan tanto almacenar como repartir la informaci\xF3n a los dem\xE1s usuarios, de esta manera el protocolo trabaja de forma descentralizada. Para el respectivo almacenamiento la red utiliza la Tabla de Hash Distribuida (",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://es.wikipedia.org/wiki/Tabla_de_hash_distribuida"},"DHT"),") al igual que el protocolo ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://es.wikipedia.org/wiki/BitTorrent"},"BitTorrent"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cómo-funciona-ipfs"},"\xBFC\xF3mo funciona IPFS?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El sistema est\xE1 creado para realizar la b\xFAsqueda de los datos por el contenido que se est\xE1 solicitando y no por ubicaci\xF3n que es como se conoce com\xFAnmente. Es importante resaltar que IPFS utiliza la DHT, dicha funci\xF3n es utilizada para crear un hash del contenido que se desea agregar a la red, dicho hash es \xFAnico y nunca se va a repetir, adem\xE1s redirige las b\xFAsquedas a los nodos donde se encuentra la informaci\xF3n solicitada. IPFS utiliza el hash SHA-256, mismo que utiliza ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.newscientist.com/definition/bitcoin/"},"Bitcoin"),", esto debido a los beneficios que este ofrece como seguridad, f\xE1cil de usar y no necesita muchos recursos para generar el hash."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El protocolo actual realiza los siguientes pasos para realizar una b\xFAsqueda:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Primero toma la direcci\xF3n web para luego consultar al DNS la IP de la ubicaci\xF3n del servidor."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Ya con la IP en mano se hace la consulta de informaci\xF3n del servidor y se inicia la respectiva descarga."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Luego de la descarga nos muestra la informaci\xF3n de dicho servidor.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"De esta manera es como funciona el protocolo tradicional, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"b\xFAsquedas de contenido por ubicaci\xF3n"),", en la cual es necesario tener conocimiento de la direcci\xF3n a la cual se quiere realizar la consulta de los datos. En el caso de IPFS es distinto, como se mencion\xF3 anteriormente, el protocolo hace esta b\xFAsqueda por contenido. Este sistema utiliza los siguientes pasos para realizar una b\xFAsqueda:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"No es necesario saber la direcci\xF3n, \xFAnicamente se busca en el sistema lo\tque se necesita."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"El sistema env\xEDa a la red de nodos la b\xFAsqueda que se est\xE1 realizando. Esta informaci\xF3n est\xE1 protegida por cifrado, hash y firma digital, esto con el fin de proteger la informaci\xF3n y dar acceso \xFAnicamente a qui\xE9n se le de autorizaci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Luego del env\xEDo de la b\xFAsqueda los nodos responden con informaci\xF3n de las versiones disponibles de lo solicitado."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Al elegir uno de los resultados obtenidos se puede ver tanto su contenido como su historial de la informaci\xF3n.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Esa es la manera como trabaja el sistema IPFS, por eso motivo se le conoce como ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"b\xFAsqueda por contenido")," ya que simplemente indicamos lo que necesitamos y la red de nodos nos responde con opci\xF3n de consultar los datos que se vayan a requerir."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ventajas-y-desventajas-de-ipfs"},"Ventajas y desventajas de IPFS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Algunas ventajas de usar IPFS son:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Almacenamiento descentralizado por lo que no depende de un s\xF3lo lugar para el acceso adem\xE1s de que es accesible en cualquier momento."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Es escalable, por lo que se le pueden agregar futuras mejoras y funcionalidades."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"R\xE1pido almacenamiento y consulta de datos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Mayor capacidad de almacenamiento."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"No hay censura de contenido, al estar descentralizado es imposible que se pueda censurar alg\xFAn contenido.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Algunas desventajas de usar IPFS son:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Es una nueva tecnolog\xEDa que al implementarla traer\xE1 consigo algunas complicaciones al querer ejecutarla por completo en internet."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"A\xFAn se encuentra en proceso de mejora y desarrollo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Al ser una nueva tecnolog\xEDa y paradigma, puede ser dif\xEDcil de usar para algunas personas.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"casos-de-uso-de-ipfs"},"Casos de uso de IPFS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Actualmente existen varios casos de usos de sistemas en los cuales las empresas han decidido innovar utilizando esta nueva tecnolog\xEDa. Esto es debido a la gran cantidad de beneficios que ofrece este sistema, algunas empresas que dan uso de esta tecnolog\xEDa son:    ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://audius.co/"},"Audius"),", una plataforma que utiliza la tecnolog\xEDa de IPFS para almacenar sus datos de forma descentralizada donde el artista puede ver quienes escuchan su m\xFAsica por lo que tienen total control en las misma, otra empresa muy reconocida y que est\xE1 empezando en el uso de esta tecnolog\xEDa para el manejo de sus archivos es ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.netflix.com/"},"Netflix"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este protocolo IPFS tambi\xE9n ha sido implementado en varias redes relacionadas con el blockchain. Esto debido a su capacidad de almacenamiento y gran cantidad de beneficios que puede traer a estas redes. Algunas de las redes que utilizan este protocolo de almacenamiento son: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://filecoin.io/"},"Filecon"),", es una red de almacenamiento decentralizada primera red blockchain en implementar el protocolo IPFS en su red, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.storj.io/"},"Storj"),", es otra red blockchain de almacenamiento decentralizado que tambi\xE9n utiliza el protocolo. Otro gran caso de uso es con  los NFT (",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/aprender-eosio/nfts-en-eosio"},"Non Fungible Tokens"),"), esta tecnolog\xEDa actualmente se encuentra en tendencia y es utilizada para activos digitales encriptados la cual utiliza IPFS para el almacenamiento de sus datos. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Estas son s\xF3lamente algunos de los muchos sistemas que se encuentran utilizando este nuevo protocolo que apenas est\xE1 iniciando su impacto en el internet."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"que-se-espera-en-el-futuro-para-ipfs"},"Que se espera en el futuro para IPFS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Claramente la tecnolog\xEDa es cambiante y cada vez con m\xE1s mejoras, nuevas tendencias vienen a sustituir las actuales tecnolog\xEDas, esto con el fin de solventar errores y problemas que tienen los actuales sistemas. Esta tecnolog\xEDa parece ser una gran candidata para la sustituci\xF3n del actual protocolo por lo que en un futuro no muy lejano IPFS va a ser el principal protocolo de la internet debido a su escalabilidad y grandes beneficios que trae para la web."));};MDXContent.isMDXComponent=true;

/***/ })

}]);
"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[4991],{

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

/***/ 4489:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'instalacion-de-nodos',title:'Instalación de Nodos',sidebar_label:'Instalación de Nodos',description:'Instalación de Nodos para EOSIO',keywords:['Instalación de Nodos','EOSIO','Cómo se crea un nodo','Cómo se instala un nodo','Instalar nodos']};var contentTitle='Configuración de un Nodo Productor';var metadata={"unversionedId":"tutoriales/instalacion-de-nodos","id":"tutoriales/instalacion-de-nodos","title":"Instalación de Nodos","description":"Instalación de Nodos para EOSIO","source":"@site/docs/tutoriales/instalacion-de-nodos.md","sourceDirName":"tutoriales","slug":"/tutoriales/instalacion-de-nodos","permalink":"/docs/tutoriales/instalacion-de-nodos","draft":false,"editUrl":"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/instalacion-de-nodos.md","tags":[],"version":"current","lastUpdatedBy":"Angelo Castro Gamboa","lastUpdatedAt":1675284816,"formattedLastUpdatedAt":"1 feb 2023","frontMatter":{"id":"instalacion-de-nodos","title":"Instalación de Nodos","sidebar_label":"Instalación de Nodos","description":"Instalación de Nodos para EOSIO","keywords":["Instalación de Nodos","EOSIO","Cómo se crea un nodo","Cómo se instala un nodo","Instalar nodos"]},"sidebar":"docs","previous":{"title":"Guia Markdown","permalink":"/docs/tutoriales/guia-markdown"},"next":{"title":"Instalación Red Privada EOSIO","permalink":"/docs/tutoriales/instalacion-de-red-privada"}};var assets={};var toc=[{value:'Instale EOSIO desde Binarios Precompilados',id:'instale-eosio-desde-binarios-precompilados',level:2},{value:'Configuración del Nodo',id:'configuración-del-nodo',level:2},{value:'<code>config.ini</code>',id:'configini',level:3},{value:'<code>genesis.json</code>',id:'genesisjson',level:3},{value:'<code>start.sh</code>',id:'startsh',level:3},{value:'Crear la cuenta <code>testproducer</code>',id:'crear-la-cuenta-testproducer',level:3},{value:'Registrar <code>testproducer</code> como un Nodo Productor',id:'registrar-testproducer-como-un-nodo-productor',level:3},{value:'Desinstalar <code>eosio</code>',id:'desinstalar-eosio',level:3},{value:'Iniciar un Nodo Usando un Snapshot',id:'iniciar-un-nodo-usando-un-snapshot',level:2},{value:'Nodos de Redes de Prueba',id:'nodos-de-redes-de-prueba',level:2},{value:'Configurar un Nodo en Jungle Testnet',id:'configurar-un-nodo-en-jungle-testnet',level:3},{value:'Configurar un Nodo en Kylin Testnet',id:'configurar-un-nodo-en-kylin-testnet',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_guias_eoscostarica_io_guias_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"configuración-de-un-nodo-productor"},"Configuraci\xF3n de un Nodo Productor"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En EOSIO, un nodo productor y otros tipos de nodos se definen y diferencian habilitando los ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eos/latest/nodeos/plugins/index"},"Plugins de Nodeos")," espec\xEDficos. Por ejemplo, para definir un nodo no productor, es necesario exceptuar ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"producer_plugin"),". Esta posibilidad de personalizaci\xF3n permite exponer uno o varios servicios de forma p\xFAblica o privada habilitando uno o varios de esos plugins."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si estas tratando de configurar un \"Full Node\", puede que te resulte \xFAtil la gu\xEDa ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscommunity.org/t/where-is-the-best-guide-on-setting-up-a-full-eos-node/621"},"Configuraci\xF3n de un Nodo EOS Completo"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Procedamos a configurar un Nodo Productor utilizando la tecnolog\xEDa EOSIO. Tambi\xE9n puede encontrar m\xE1s informaci\xF3n \xFAtil sobre este tema en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eos/v2.0/nodeos/usage/node-setups/producing-node"},"Configuraci\xF3n del Nodo de Producci\xF3n"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"instale-eosio-desde-binarios-precompilados"},"Instale EOSIO desde Binarios Precompilados"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Descarga la \xFAltima versi\xF3n de EOSIO para tu sistema operativo desde: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/EOSIO/eos/releases/tag/v2.0.6"},"Github"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Por ejemplo, para ubuntu 18.04 necesitas descargar ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"eosio_2.0.6-1-ubuntu-18.04_amd64.deb"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Puedes usar apt para instalarlo:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ wget https://github.com/EOSIO/eos/releases/download/v2.1.0-rc2/eosio_2.1.0-rc2-ubuntu-18.04_amd64.deb\n$ sudo dpkg -i ./eosio_2.1.0-rc2-ubuntu-18.04_amd64.deb\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El comando anterior descarga todas las dependencias e instala EOSIO en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"/usr/opt/eosio"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"configuración-del-nodo"},"Configuraci\xF3n del Nodo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una vez instalados los binarios pre-compilados siguiendo los comandos anteriores, vamos a crear un directorio llamado ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"testproducer")," y los archivos ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"config.ini"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"genesis.json")," y ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"start.sh")," en el:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ mkdir testproducer\n\n$ touch ~/testproducer/config.ini\n$ touch ~/testproducer/genesis.json\n$ touch ~/testproducer/start.sh\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Ahora, escribamos algo de c\xF3digo en esos archivos:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"configini"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h3"},"config.ini")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ini"},"agent-name = testproducer\n\n# PLUGINS\n# Necesario para procesar y agregar datos de la cadena en un nodo EOSIO.\nplugin = eosio::chain_plugin\n# Expone la funcionalidad a la interfaz RPC API\nplugin = eosio::chain_api_plugin\n# Necesario para habilitar cualquier funcionalidad de la API RPC proporcionada por una instancia de nodeos o keosd.\nplugin = eosio::http_plugin\n# Carga la funcionalidad necesaria para que un nodo produzca bloques.\nplugin = eosio::producer_plugin\n# Expone una serie de endpoints para el producer_plugin a la interfaz RPC API.\nplugin = eosio::producer_api_plugin\n\n# CHAIN \nchain-state-db-size-mb = 16384\nreversible-blocks-db-size-mb = 512\ncontracts-console = true\nabi-serializer-max-time-ms = 2000\nwasm-runtime = wabt\nenable-stale-production = false\npause-on-startup = false\nmax-irreversible-block-age = -1\ntxn-reference-block-lag = 0\n\n# BLOCK PRODUCER\nproducer-name = testproducer\n\n# PEERING NETWORK\np2p-server-address =  TESTPRODUCER_IP:9876     # CAMBIAR ESTO SEGUN IP DEL NODO\np2p-listen-endpoint = 0.0.0.0:9876\np2p-max-nodes-per-host = 150\nmax-clients = 150\nconnection-cleanup-period = 30\nsync-fetch-span = 2000\nallowed-connection = any\n\np2p-peer-address = SEED_NODE_IP:SEED_NODE_PORT\np2p-peer-address = PEER1_NODE_IP:PEER1_NODE_PORT\np2p-peer-address = PEER2_NODE_IP:PEER2_NODE_PORT\np2p-peer-address = API_NODE_IP:API_NODE_PORT\n# Puedes continuar a\xF1adiendo nods peer aqu\xED\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"Ten en cuenta que arriba hay elementos que deben ser reemplazados con sus valores correspondientes.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"genesisjson"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h3"},"genesis.json")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json"},"{\n  \"initial_timestamp\": \"2018-12-05T08:55:11.000\",\n  \"initial_key\": \"EOS_PUB_DEV_KEY\",\n  \"initial_configuration\": {\n    \"max_block_net_usage\": 1048576,\n    \"target_block_net_usage_pct\": 1000,\n    \"max_transaction_net_usage\": 524288,\n    \"base_per_transaction_net_usage\": 12,\n    \"net_usage_leeway\": 500,\n    \"context_free_discount_net_usage_num\": 20,\n    \"context_free_discount_net_usage_den\": 100,\n    \"max_block_cpu_usage\": 100000,\n    \"target_block_cpu_usage_pct\": 500,\n    \"max_transaction_cpu_usage\": 50000,\n    \"min_transaction_cpu_usage\": 100,\n    \"max_transaction_lifetime\": 3600,\n    \"deferred_trx_expiration_window\": 600,\n    \"max_transaction_delay\": 3888000,\n    \"max_inline_action_size\": 4096,\n    \"max_inline_action_depth\": 4,\n    \"max_authority_depth\": 6\n  },\n  \"initial_chain_id\": \"0000000000000000000000000000000000000000000000000000000000000000\"\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"Sustituye ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"EOS_PUB_DEV_KEY")," por su valor correspondiente. Para ver c\xF3mo generar un par de claves, consulta nuestra gu\xEDa ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas"},"Llaves Privadas")," sobre este tema.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"startsh"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h3"},"start.sh")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"#!/usr/bin/env bash\nDATA_DIR=\"blockchain\"\nCONFIG_DIR=\"./blockchain/config\"\nEOS_PUB_KEY=EOS_PUB_KEY  #REEMPLAZA ESTO CON SU VALOR CORRESPONDIENTE\nEOS_PRIV_KEY=EOS_PRIV_KEY #REEMPLAZA ESTO CON SU VALOR CORRESPONDIENTE\necho \"Starting Producer Node...\";\nset -e;\nulimit -n 65535\nulimit -s 64000\nmkdir -p $CONFIG_DIR\ncp ./config.ini $CONFIG_DIR/config.ini\npid=0;\nnodeos=$\"nodeos \\\n --config-dir $CONFIG_DIR \\\n --data-dir $DATA_DIR \\\n --blocks-dir $DATA_DIR/blocks \\\n --signature-provider $EOS_PUB_KEY=KEY:$EOS_PRIV_KEY\" ;\nterm_handler() {\n if [ $pid -ne 0 ]; then\n   kill -SIGTERM \"$pid\";\n   wait \"$pid\";\n fi\n exit 0;\n}\nstart_nodeos() {\n $nodeos &\n sleep 10;\n if [ -z \"$(pidof nodeos)\" ]; then\n   $nodeos --hard-replay-blockchain &\n fi\n}\nstart_fresh_nodeos() {\n echo 'Starting new chain from genesis JSON'\n $nodeos --delete-all-blocks --genesis-json genesis.json &\n}\ntrap 'echo \"Shutdown of EOSIO service...\";kill ${!}; term_handler' 2 15;\nif [ ! -d $DATA_DIR/blocks ]; then\n start_fresh_nodeos &\nelif [ -d $DATA_DIR/blocks ]; then\n start_nodeos &\nfi\npid=\"$(pidof nodeos)\"\nwhile true\ndo\n tail -f /dev/null & wait ${!}\ndone\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"Tal vez necesites asignar permisos de ejecuci\xF3n a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"start.sh"),", para ello ejecuta ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"$ chmod 755 start.sh"),".")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Ejecute el script ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"strong"},"start.sh"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ ./start.sh\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para una informaci\xF3n m\xE1s detallada sobre el comando anterior, por favor visite ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eos/v2.0/cleos/command-reference/system/system-regproducer"},"System Regproducer"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"crear-la-cuenta-testproducer"},"Crear la cuenta ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h3"},"testproducer")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En una red blockchain basada en EOSIO, la creaci\xF3n de cuentas conlleva el consumo de ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram"},"RAM"),", por lo que es necesario pagar por las nuevas cuentas. En el siguiente comando sustituye ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"CREATOR")," por una cuenta existente y con recursos suficientes para ejecutar la operaci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ cleos -u http://URL_NODO_DESTINO create account CREATOR testproducer EOS_PUB_KEY\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Dependiendo de la red para la que est\xE9s configurando el nodo, puedes crear una cuenta con los siguientes enlaces:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"http://monitor3.jungletestnet.io/#account"},"Creaci\xF3n de cuentas en Jungle Testnet")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://kylin.eosx.io/tools/account/create"},"Creaci\xF3n de cuentas en Kylin Testnet")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.eosx.io/tools/account/create"},"Creaci\xF3n de cuentas en la red EOS"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"registrar-testproducer-como-un-nodo-productor"},"Registrar ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h3"},"testproducer")," como un Nodo Productor"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ cleos -u http://URL_NODO_DESTINO system regproducer testproducer EOS_PUB_KEY \"www.testproducer.testlink\" 0\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para una informaci\xF3n m\xE1s detallada sobre el comando anterior, por favor visite ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eos/v2.0/cleos/command-reference/system/system-regproducer"},"System Regproducer"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Ahora, el nodo est\xE1 configurado. Si configuraste este nodo para operar en una Red Privada, necesitas asegurarte de que tu nodo est\xE1 incluido en la de productores. Consulta nuestra gu\xEDa ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guias.eoscostarica.io/docs/tutoriales/instalacion-de-red-privada"},"Instalaci\xF3n de Red Privada")," para ver m\xE1s informaci\xF3n sobre esto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Por otro lado, si quieres producir bloques en una red de prueba, los poseedores de tokens tienen que votar por ti para estar entre los 21 principales productores de bloques."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"desinstalar-eosio"},"Desinstalar ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h3"},"eosio")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para desinstalar los binarios construidos/instalados de EOSIO y sus dependencias, ejecuta:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"sudo dpkg -r eosio\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"iniciar-un-nodo-usando-un-snapshot"},"Iniciar un Nodo Usando un Snapshot"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En algunas situaciones, es conveniente iniciar un nodo utilizando un ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"snapshot"),", si se desea crear un estado de la red v\xE1lido desde el que iniciar. Se recomienda borrar todos los datos existentes en el directorio: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"~./local/share/eosio/nodeos/data/*"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Supongamos que vamos a utilizar un ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"snapshot")," de Jungle Testnet. Procede a ejecutar el siguiente comando:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ wget https://backup.cryptolions.io/Jungle/snapshots/latest-snapshot.bin -P ~./local/share/eosio/nodeos/data/snapshots/\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Ahora que el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"snapshot")," se ha descargado, puedes utilizar el mismo script ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#startsh"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"start.sh"))," para iniciar el nodo, s\xF3lo tienes que eliminar la bandera ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"--genesis-json")," en el script, por lo que la funci\xF3n ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"start_fresh_nodes")," en el archivo se ver\xE1 as\xED:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"start_fresh_nodeos() {\n echo 'Starting new chain from genesis JSON'\n $nodeos --delete-all-blocks &\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para obtener m\xE1s informaci\xF3n, visite ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eos/v2.1/nodeos/replays/how-to-replay-from-a-snapshot"},"C\xF3mo reproducir una instant\xE1nea"),". Adem\xE1s, visite ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/search?query=snapshot"},"EOS Snapshot")," para ver todas las entradas de documentos disponibles para \"Snapshot\" en el portal ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/"},"developer.eos.io"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"nodos-de-redes-de-prueba"},"Nodos de Redes de Prueba"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"configurar-un-nodo-en-jungle-testnet"},"Configurar un Nodo en Jungle Testnet"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si quieres configurar un nodo en Jungle Testnet, puedes ir a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/EOS-Jungle-Testnet/Node-Manual-Installation"},"EOS Jungle Testnet - Node Manual Installation")," en Github. Tambi\xE9n puedes usar ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://monitor.jungletestnet.io/#register"},"Testnet Auto-Installer script"),". Estas herramientas fueron creadas por ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://cryptolions.io/home"},"cryptolions.io")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"configurar-un-nodo-en-kylin-testnet"},"Configurar un Nodo en Kylin Testnet"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Para configurar un nodo en el Kylin Testnet, por favor ve al repositorio ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/cryptokylin/CryptoKylin-Testnet"},"CryptoKylin-Testnet")," y sigue las instrucciones all\xED."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"referencias"},"Referencias"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://developers.eos.io/search?query=snapshot"},"Informaci\xF3n sobre Snapshots"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"http://monitor.jungletestnet.io/#register"},"Cryptolions Testnet Auto-Installer script"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://github.com/cryptokylin/CryptoKylin-Testnet"},"CryptoKylin-Testnet Github repo"))));};MDXContent.isMDXComponent=true;

/***/ })

}]);
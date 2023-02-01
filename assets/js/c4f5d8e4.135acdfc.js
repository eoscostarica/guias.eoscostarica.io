"use strict";
(self["webpackChunkguias_eoscostarica_io"] = self["webpackChunkguias_eoscostarica_io"] || []).push([[4195],{

/***/ 9925:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 70 modules
var Layout = __webpack_require__(1740);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(2949);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 14 modules
var Box = __webpack_require__(253);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/useTheme/useTheme.js + 1 modules
var useTheme = __webpack_require__(1601);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__(3869);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js



function useMediaQuery(queryInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var theme = (0,useTheme/* default */.Z)();
  var props = (0,getThemeProps/* default */.Z)({
    theme: theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });

  if (false) {}

  var query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, ''); // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  var supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  var _props$options = (0,esm_extends/* default */.Z)({}, props, options),
      _props$options$defaul = _props$options.defaultMatches,
      defaultMatches = _props$options$defaul === void 0 ? false : _props$options$defaul,
      _props$options$matchM = _props$options.matchMedia,
      matchMedia = _props$options$matchM === void 0 ? supportMatchMedia ? window.matchMedia : null : _props$options$matchM,
      _props$options$noSsr = _props$options.noSsr,
      noSsr = _props$options$noSsr === void 0 ? false : _props$options$noSsr,
      _props$options$ssrMat = _props$options.ssrMatchMedia,
      ssrMatchMedia = _props$options$ssrMat === void 0 ? null : _props$options$ssrMat;

  var _React$useState = react.useState(function () {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  }),
      match = _React$useState[0],
      setMatch = _React$useState[1];

  react.useEffect(function () {
    var active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    var queryList = matchMedia(query);

    var updateMatch = function updateMatch() {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return function () {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (false) {}

  return match;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
;// CONCATENATED MODULE: ./src/pages/index.js
var Carousel=/*#__PURE__*/function(){function Carousel(){this.slideIndex=0;this.animation=null;}var _proto=Carousel.prototype;_proto.start=function start(){var _this=this;this.animation=setInterval(function(){var i;var slides=document.getElementsByClassName("mySlides");var dots=document.getElementsByClassName("dot");for(i=0;i<slides.length;i++){slides[i].style.display="none";}_this.slideIndex++;if(_this.slideIndex>slides.length){_this.slideIndex=1;}for(i=0;i<dots.length;i++){dots[i].style.backgroundColor="";}slides[_this.slideIndex-1].style.display="block";dots[_this.slideIndex-1].style.backgroundColor="#2d9cdb";},6000);};_proto.stop=function stop(){clearInterval(this.animation);};return Carousel;}();var imagesList=[{background:"/img/cards-icons/Hero-1.webp"},{background:"/img/cards-icons/Hero-2.webp"},{background:"/img/cards-icons/Hero-3.webp"}];var HeroSection=function HeroSection(){(0,react.useEffect)(function(){document.getElementsByClassName("mySlides")[0].style.display="block";var carousel=new Carousel();carousel.start();return function(){return carousel.stop();};},[]);return/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"carouselContainer"},imagesList.map(function(_ref,index){var background=_ref.background;return/*#__PURE__*/react.createElement(Box/* default */.Z,{key:background,className:"mySlides fade"},/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"numberImagetext"},index+1," / 3"),/*#__PURE__*/react.createElement("img",{alt:background,src:(0,useBaseUrl/* default */.Z)(background),width:"100%",className:"imgHero"}));}),/*#__PURE__*/react.createElement("h1",{className:"textImgTitle"},"EOS Costa Rica"),/*#__PURE__*/react.createElement("h2",{className:"textSubTitleImg"},"Gu\xEDas Generales"),/*#__PURE__*/react.createElement("h3",{className:"textImg"},"Le damos la bienvenida a nuestro portal de web3. Comience su viaje para aprender sobre la tecnolog\xEDa blockchain y todo lo que la hace posible."),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"buttonHeroContainer"},/*#__PURE__*/react.createElement("a",{className:"buttonHero",style:{textDecoration:"none"},href:"/docs/cultura-ingenieril"},"COMENZAR")),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"dotContainer"},/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"dot"}),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"dot"}),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"dot"})));};var startResourceList=[{title:"Guías Generales",body:"Guías para los desarrolladores sobre como programar en código abierto.",href:"/docs/pautas-para-codigo-abierto",img:"/img/cards-icons/guidelines.svg"},{title:"Aprenda EOSIO y Antelope",body:"Conjunto de información necesaria para aprender sobre el protocolo EOSIO y Antelope.",href:"/docs/aprender-eosio/protocolo-eosio",img:"/img/cards-icons/icons-eosio.svg"},{title:"Tutoriales",body:"Información de apoyo necesaria para realizar la instalación y la ejecución de procesos.",href:"/docs/tutoriales/contrato-hola-mundo",img:"/img/cards-icons/tutorials.svg"},{title:"Herramientas",body:"Conjunto de herramientas útiles durante el proceso de aprendizaje.",href:"/docs/herramientas/glosario",img:"/img/cards-icons/tools.svg"},{title:"Comunidad",body:"Enlaces a sitios de interés de la comunidad de EOS.",href:"/docs/comunidad/canales-de-telegram",img:"/img/cards-icons/community.svg"},{title:"Proyectos de Código Abierto",body:"Listado de proyectos de código abierto que realizamos.",href:"/docs/proyectos-de-codigo-abierto",img:"/img/cards-icons/icons-opensource.svg"}];var StartResourceSection=function StartResourceSection(){var smDown=useMediaQuery("(max-width:400px)");var _useColorMode=(0,contexts_colorMode/* useColorMode */.I)(),colorMode=_useColorMode.colorMode;var _useState=(0,react.useState)(""),color=_useState[0],setColor=_useState[1];(0,react.useEffect)(function(){if(!colorMode)return;setColor(colorMode);},[colorMode]);return/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"container"},/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"startTitleContainer"},/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"box-title-startResource"}),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"section-title-startResource"},"Empiece con estos recursos")),/*#__PURE__*/react.createElement(Grid/* default */.Z,{container:true,direction:"row",justifyContent:"center",alignItems:"center",spacing:smDown?1:3},startResourceList.map(function(_ref2){var title=_ref2.title,body=_ref2.body,href=_ref2.href,img=_ref2.img;return/*#__PURE__*/react.createElement(Grid/* default */.Z,{key:title,item:true,xs:12,sm:6,lg:4,container:true,display:"flex",justifyContent:"center"},/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"cardDimentions"},/*#__PURE__*/react.createElement("div",{className:"cardImgContainer "+(color==="dark"?"cardImgContainerDark":"cardImgContainerLight")},/*#__PURE__*/react.createElement("img",{src:(0,useBaseUrl/* default */.Z)(img),alt:title,loading:"lazy",className:"imgHero "+(color==="dark"&&"cardImgColor")})),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"cardHeaderTransition "+(color==="dark"?"cardHeaderDark-mode":"cardHeaderLight-mode")},/*#__PURE__*/react.createElement("span",null,"SECCI\xD3N")),/*#__PURE__*/react.createElement("h1",{className:"cardTitle"}," ",title," "),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"cardBody "+(color==="dark"?"darkTextColor":"ligthTextColor")},body),/*#__PURE__*/react.createElement("a",{className:"cardLinkFooter "+(color==="dark"?"darkTextColor":"ligthTextColor"),style:{textDecoration:"none"},id:"box-link-id-customCard",href:href},"LEER M\xC1S")));})));};var articlesList=[{title:"¿Qué es un smart contract?",body:"Explicamos como funciona la descentralización en sus registros, mediante contratos inteligentes.",href:"https://eoscostarica.medium.com/qu%C3%A9-es-un-smart-contract-793d2042c65d",img:"/img/cards-icons/blog1.webp"},{title:"¿Qué es EOSIO?",body:"Explicamos en qué consiste el protocolo blockchain EOSIO.",href:"https://eoscostarica.medium.com/que-es-eosio-178e21ac2ebb",img:"/img/cards-icons/blog3.webp"},{title:"¿Cómo funciona una blockchain?",body:"Explicamos, con ejemplos, qué es y cómo funciona una blockchain..",href:"https://eoscostarica.medium.com/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3",img:"/img/cards-icons/blog2.webp"}];var ArticleSection=function ArticleSection(){var smDown=useMediaQuery("(max-width:400px)");var _useColorMode2=(0,contexts_colorMode/* useColorMode */.I)(),colorMode=_useColorMode2.colorMode;var _useState2=(0,react.useState)(""),color=_useState2[0],setColor=_useState2[1];(0,react.useEffect)(function(){if(!colorMode)return;setColor(colorMode);},[colorMode]);return/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"container",id:"article-id"},/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"startTitleContainer"},/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"box-title-startResource"}),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"section-title-startResource"},"Art\xEDculos de blogs")),/*#__PURE__*/react.createElement(Grid/* default */.Z,{container:true,direction:"row",justifyContent:"center",alignItems:"center",spacing:smDown?1:3},articlesList.map(function(_ref3){var title=_ref3.title,body=_ref3.body,href=_ref3.href,img=_ref3.img;return/*#__PURE__*/react.createElement(Grid/* default */.Z,{key:title,item:true,xs:12,sm:6,lg:4,container:true,display:"flex",justifyContent:"center"},/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"cardArticleDimentions "+(color==="dark"?"darkTextColor":"ligthTextColor")},/*#__PURE__*/react.createElement(Box/* default */.Z,{component:"img",src:(0,useBaseUrl/* default */.Z)(img),alt:title,width:"100%",className:"cardArticleImg"}),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"cardArticleHeader"}," ART\xCDCULO "),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"cardArticleTitleContainer"},/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"cardArticleBlueBoxTitle"}),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"cardArticleTitle "}," ",title," ")),/*#__PURE__*/react.createElement(Box/* default */.Z,{className:"cardArticleBody "+(color==="dark"?"darkTextColor":"ligthTextColor")},body),/*#__PURE__*/react.createElement("a",{className:"cardLinkFooter "+(color==="dark"?"darkTextColor":"ligthTextColor"),style:{textDecoration:"none"},id:"box-link-id-customCard",href:href},"LEER M\xC1S")));})));};var HomePage=function HomePage(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),siteConfig=_useDocusaurusContext.siteConfig;return/*#__PURE__*/react.createElement(Layout/* default */.Z,{permalink:"/",title:siteConfig.title,description:siteConfig.tagline},/*#__PURE__*/react.createElement(HeroSection,null),/*#__PURE__*/react.createElement(StartResourceSection,null),/*#__PURE__*/react.createElement(ArticleSection,null));};/* harmony default export */ var pages = (HomePage);

/***/ })

}]);

import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/2016/03/11/blog-post',
  component: ComponentCreator('/blog/2016/03/11/blog-post'),
  exact: true,
  
},
{
  path: '/blog/2017/04/10/blog-post-two',
  component: ComponentCreator('/blog/2017/04/10/blog-post-two'),
  exact: true,
  
},
{
  path: '/blog/2017/09/25/testing-rss',
  component: ComponentCreator('/blog/2017/09/25/testing-rss'),
  exact: true,
  
},
{
  path: '/blog/2017/09/26/adding-rss',
  component: ComponentCreator('/blog/2017/09/26/adding-rss'),
  exact: true,
  
},
{
  path: '/blog/2017/10/24/new-version-1.0.0',
  component: ComponentCreator('/blog/2017/10/24/new-version-1.0.0'),
  exact: true,
  
},
{
  path: '/search',
  component: ComponentCreator('/search'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  
  routes: [
{
  path: '/docs/aprender-eosio/cadena-de-bloques-eos',
  component: ComponentCreator('/docs/aprender-eosio/cadena-de-bloques-eos'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/cadenas-hermanas-de-eos',
  component: ComponentCreator('/docs/aprender-eosio/cadenas-hermanas-de-eos'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/como-iniciar',
  component: ComponentCreator('/docs/aprender-eosio/como-iniciar'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/contrato-hola-mundo',
  component: ComponentCreator('/docs/aprender-eosio/contrato-hola-mundo'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/contratos-inteligentes',
  component: ComponentCreator('/docs/aprender-eosio/contratos-inteligentes'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/cpp-moderno',
  component: ComponentCreator('/docs/aprender-eosio/cpp-moderno'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/cuentas-permisos',
  component: ComponentCreator('/docs/aprender-eosio/cuentas-permisos'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/desarrollo-de-dapps',
  component: ComponentCreator('/docs/aprender-eosio/desarrollo-de-dapps'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/devops',
  component: ComponentCreator('/docs/aprender-eosio/devops'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/funciones-importantes',
  component: ComponentCreator('/docs/aprender-eosio/funciones-importantes'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/instalacion-de-nodos',
  component: ComponentCreator('/docs/aprender-eosio/instalacion-de-nodos'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/llaves-privadas',
  component: ComponentCreator('/docs/aprender-eosio/llaves-privadas'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/mecanismo-de-consenso',
  component: ComponentCreator('/docs/aprender-eosio/mecanismo-de-consenso'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/productor-de-bloques',
  component: ComponentCreator('/docs/aprender-eosio/productor-de-bloques'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/protocolo-eosio',
  component: ComponentCreator('/docs/aprender-eosio/protocolo-eosio'),
  exact: true,
  
},
{
  path: '/docs/aprender-eosio/uso-de-recursos',
  component: ComponentCreator('/docs/aprender-eosio/uso-de-recursos'),
  exact: true,
  
},
{
  path: '/docs/comunidad/canales-de-telegram',
  component: ComponentCreator('/docs/comunidad/canales-de-telegram'),
  exact: true,
  
},
{
  path: '/docs/comunidad/podcasts-eos',
  component: ComponentCreator('/docs/comunidad/podcasts-eos'),
  exact: true,
  
},
{
  path: '/docs/comunidad/redes-eosio',
  component: ComponentCreator('/docs/comunidad/redes-eosio'),
  exact: true,
  
},
{
  path: '/docs/cultura-ingenieril',
  component: ComponentCreator('/docs/cultura-ingenieril'),
  exact: true,
  
},
{
  path: '/docs/herramientas-para-desarrolladores',
  component: ComponentCreator('/docs/herramientas-para-desarrolladores'),
  exact: true,
  
},
{
  path: '/docs/herramientas/explorador-de-bloques',
  component: ComponentCreator('/docs/herramientas/explorador-de-bloques'),
  exact: true,
  
},
{
  path: '/docs/herramientas/glosario',
  component: ComponentCreator('/docs/herramientas/glosario'),
  exact: true,
  
},
{
  path: '/docs/herramientas/librerias-sdk',
  component: ComponentCreator('/docs/herramientas/librerias-sdk'),
  exact: true,
  
},
{
  path: '/docs/herramientas/linea-de-comando',
  component: ComponentCreator('/docs/herramientas/linea-de-comando'),
  exact: true,
  
},
{
  path: '/docs/material-ui',
  component: ComponentCreator('/docs/material-ui'),
  exact: true,
  
},
{
  path: '/docs/pautas-para-codigo-abierto',
  component: ComponentCreator('/docs/pautas-para-codigo-abierto'),
  exact: true,
  
},
{
  path: '/docs/plantilla-para-aplicacion-web',
  component: ComponentCreator('/docs/plantilla-para-aplicacion-web'),
  exact: true,
  
},
{
  path: '/docs/plantilla-para-backend',
  component: ComponentCreator('/docs/plantilla-para-backend'),
  exact: true,
  
},
{
  path: '/docs/proyectos-de-codigo-abierto',
  component: ComponentCreator('/docs/proyectos-de-codigo-abierto'),
  exact: true,
  
},
{
  path: '/docs/recursos-visuales',
  component: ComponentCreator('/docs/recursos-visuales'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

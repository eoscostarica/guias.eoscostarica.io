/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.



const siteConfig = {
  title: 'Desarrolladores EOS Costa Rica', // Title for your website.
  tagline: 'Documentación para desarrolladores de EOS Costa Rica',
  url: 'https://guias.eoscostarica.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  //cname: "guias.eoscostarica.io",


  // Used for publishing and more
  projectName: 'guias.eoscostarica.io',
  organizationName: 'eoscostarica',
  favicon: 'img/favicon/favicon.ico',
  //scripts: ['https://buttons.github.io/buttons.js','../../scripts/languageSelector.js'],


  themeConfig: {
    navbar: {
      logo: {
        alt: 'EOS Costa Rica Logo',
        src: 'https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent.png',
        srcDark: 'https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png'
      },
      links: [
        /*{
          href: 'https://guias.eoscostarica.io/',
          label: 'Inicio',
          position: 'left',
        },*/
        {to: 'docs/pautas-para-codigo-abierto', label: 'Pautas para Desarrolladores', position: 'left'},
        {to: 'docs/aprender-eosio/protocolo-eosio', label: 'Aprender EOSIO', position: 'left'},
        {
          href: 'https://guide.eoscostarica.io/',
          label: 'English',
          position: 'right',
        },
        {to: 'search'},
      ],
    },
    footer: {

      logo: {
        alt: 'EOS Costa Rica Logo',
        src: 'https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent.png',
        srcDark: 'https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png',
        href: 'https://guias.eoscostarica.io/',
      },
      links: [
        {
          title: 'EOS Costa Rica',
          items: [
            {
              label: 'Cultura Ingenieril',
              to: '/docs/cultura-ingenieril',
            },
            {
              label: 'Proyectos de Código Abierto',
              to: '/docs/proyectos-de-codigo-abierto',
            },
            {
              label: 'Pautas para Código Abierto',
              to: '/docs/pautas-para-codigo-abierto',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Meetup',
              href: 'https://www.meetup.com/es/EOS-Costa-Rica/',
            },
            {
              label: 'Canal de Telegram',
              href: 'https://t.me/eoscr',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/eoscostarica/',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'LinnkedIn',
              href: 'https://www.linkedin.com/company/eoscostarica/',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@eoscostarica',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/eoscostarica',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EOS Costa Rica`, // You can also put own HTML here.
    },
    //Algolia integration
    algolia: {
      apiKey: 'bc2a776159634dff6c77c849d8b80dc1',
      indexName: 'eoscostarica_guias',
      placeholder: 'Search',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    googleAnalytics: {
      trackingID: "UA-173987-66",
    },
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: './docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
  

};

module.exports = siteConfig;

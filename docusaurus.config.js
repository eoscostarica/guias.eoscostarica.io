/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Guías para desarrolladores blockchain EOSIO",
  tagline: "Guías y documentación para desarrolladores de EOS Costa Rica",
  url: "https://guias.eoscostarica.io",
  baseUrl: "/", // Base URL for your project */
  //cname: "guias.eoscostarica.io",

  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
  // Used for publishing and more
  projectName: "guias.eoscostarica.io",
  organizationName: "eoscostarica",
  favicon: "img/favicon/favicon.ico",
  //scripts: ['https://buttons.github.io/buttons.js','../../scripts/languageSelector.js'],
  themeConfig: {
    image: "img/metaImg.jpg",
    navbar: {
      title: " ",
      logo: {
        alt: "EOS Costa Rica Logo",
        src: "/img/byw-horizontal-transparent.png",
        srcDark: "/img/byw-horizontal-transparent-white.png",
      },
      items: [
        {
          to: "docs/pautas-para-codigo-abierto",
          label: "Pautas para Desarrolladores",
          position: "left",
        },
        {
          to: "docs/aprender-eosio/protocolo-eosio",
          label: "Blockchain EOSIO",
          position: "left",
        },
        {
          to: "docs/tutoriales/guia-markdown",
          label: "Tutoriales",
          position: "left",
        },
        {
          to: "docs/herramientas/glosario",
          label: "Herramientas",
          position: "left",
        },
        {
          to: "docs/comunidad/redes-eosio",
          label: "Comunidad",
          position: "left",
        },
        { to: "https://eoscostarica.io/", label: "Website", position: "left" },
        {
          href: "https://guide.eoscostarica.io/",
          label: "English",
          position: "right",
        },
        { to: "search" },
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    footer: {
      logo: {
        alt: "EOS Costa Rica Logo",
        src: "/img/byw-horizontal-transparent.png",
        href: "https://guias.eoscostarica.io/",
      },
      links: [
        {
          title: "EOS Costa Rica",
          items: [
            {
              label: "Cultura Ingenieril",
              to: "/docs/cultura-ingenieril",
            },
            {
              label: "Proyectos de Código Abierto",
              to: "/docs/proyectos-de-codigo-abierto",
            },
            {
              label: "Pautas para Código Abierto",
              to: "/docs/pautas-para-codigo-abierto",
            },
          ],
        },
        {
          title: "Comunidad",
          items: [
            {
              label: "Meetup",
              href: "https://www.meetup.com/es/EOS-Costa-Rica/",
            },
            {
              label: "Canal de Telegram",
              href: "https://t.me/eoscr",
            },
            {
              label: "GitHub",
              href: "https://github.com/eoscostarica/",
            },
          ],
        },
        {
          title: "Más",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/eoscostarica/",
            },
            {
              label: "Medium",
              href: "https://medium.com/@eoscostarica",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/eoscostarica",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EOS Costa Rica`, // You can also put own HTML here.
    },
    //Algolia integration
    algolia: {
      appId: "BH4D9OD16A",
      apiKey: "bc2a776159634dff6c77c849d8b80dc1",
      indexName: "eoscostarica_guias",
      placeholder: "Search",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // Docs folder path relative to website dir.
          path: "./docs",
          editUrl:
            "https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/",
          // Equivalent to `docsUrl`.
          routeBasePath: "docs",
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        googleAnalytics: {
          trackingID: "UA-173987-66",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: [],
          filename: "sitemap.xml",
        },
      },
    ],
  ],
  scripts: [],
};

module.exports = siteConfig;

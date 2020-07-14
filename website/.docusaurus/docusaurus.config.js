export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "EOS Costa Rica Logo",
        "src": "https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent.png",
        "srcDark": "https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png"
      },
      "links": [
        {
          "to": "docs/pautas-para-codigo-abierto",
          "label": "Pautas para Desarrolladores",
          "position": "left"
        },
        {
          "to": "docs/aprender-eosio/protocolo-eosio",
          "label": "Aprender EOSIO",
          "position": "left"
        },
        {
          "href": "https://guide.eoscostarica.io/",
          "label": "English",
          "position": "right"
        },
        {
          "to": "search"
        }
      ]
    },
    "footer": {
      "logo": {
        "alt": "EOS Costa Rica Logo",
        "src": "https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent.png",
        "srcDark": "https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png",
        "href": "https://guias.eoscostarica.io/"
      },
      "links": [
        {
          "title": "EOS Costa Rica",
          "items": [
            {
              "label": "Cultura Ingenieril",
              "to": "/docs/cultura-ingenieril"
            },
            {
              "label": "Proyectos de Código Abierto",
              "to": "/docs/proyectos-de-codigo-abierto"
            },
            {
              "label": "Pautas para Código Abierto",
              "to": "/docs/pautas-para-codigo-abierto"
            }
          ]
        },
        {
          "title": "Comunidad",
          "items": [
            {
              "label": "Meetup",
              "href": "https://www.meetup.com/es/EOS-Costa-Rica/"
            },
            {
              "label": "Canal de Telegram",
              "href": "https://t.me/eoscr"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/eoscostarica/"
            }
          ]
        },
        {
          "title": "Más",
          "items": [
            {
              "label": "LinnkedIn",
              "href": "https://www.linkedin.com/company/eoscostarica/"
            },
            {
              "label": "Medium",
              "href": "https://medium.com/@eoscostarica"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/eoscostarica"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 EOS Costa Rica"
    },
    "algolia": {
      "apiKey": "bc2a776159634dff6c77c849d8b80dc1",
      "indexName": "eoscostarica_guias",
      "placeholder": "Search",
      "algoliaOptions": {}
    },
    "googleAnalytics": {
      "trackingID": "UA-173987-66"
    }
  },
  "title": "Desarrolladores EOS Costa Rica",
  "tagline": "Documentación para desarrolladores de EOS Costa Rica",
  "url": "https://guias.eoscostarica.io",
  "baseUrl": "/",
  "projectName": "guias.eoscostarica.io",
  "organizationName": "eoscostarica",
  "favicon": "img/favicon/favicon.ico",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "./docs",
          "sidebarPath": "C:\\Users\\Jean\\Documents\\EOS\\Forks\\guias.eoscostarica.io\\website\\sidebars.js",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true
        },
        "theme": {
          "customCss": "C:\\Users\\Jean\\Documents\\EOS\\Forks\\guias.eoscostarica.io\\website\\src\\css\\custom.css"
        }
      }
    ]
  ]
};
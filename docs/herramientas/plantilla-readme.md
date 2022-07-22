---
id: plantilla-readme
title: Plantilla readme
sidebar_label: Plantilla Readme
description: Plantilla general para crear un readme
keywords: [Plantilla Readme, Readme, markdown, EOS, EOS Costa Rica]
---

README es un archivo que trae una pequeña descripción sobre todo el proyecto, que contiene una introducción y explicación de este. El tipo de información que se puede describir aquí es información solicitada para comprender el proyecto y su estructura o propósito. A continuación, brindamos una plantilla para crear un archivo README para un nuevo proyecto.

### Para Copiar esta Plantilla Readme puede ver el [Código Fuente Markdown](./plantilla-readme-codigo-fuente.md)

***

## Introducción con GIF o Imágenes

Es simple y puede parecer muy fácil y sí, lo es, pero el impacto que puede producir un GIF o una imagen es demasiado grande. El espectador adquiere la información necesaria para interesarse por el proyecto. Por ejemplo:

![Captura de pantalla de Life bank](/img/life-bank.webp)

## Sobre el Proyecto

Dar una descripción general del proyecto brinda una visión general sobre el ** proyecto como producto **, por ejemplo:

*"Lifebank es un dapp basado en EOSIO que ayuda a las comunidades locales a crear un círculo virtuoso de intercambio de valor entre tres partes: donantes de vida elegibles, centros de donación comunitarios y empresas locales participantes (patrocinadores).*

*Lifebank es una iniciativa de EOS Costa Rica, una empresa que desarrolla soluciones basadas en blockchain para resolver problemas del mundo real. Lifebank es nuestra entrada al desafío Coding para el cambio organizado por la empresa líder de blockchain, Block.one ".*

## Tabla de Contenidos
Con una buena visión de la estructura de la información se puede hacer que el lector acceda a la información específica necesaria, por lo que luego dar una buena visión de la información con una Tabla de Contenidos facilitará este proceso. Por ejemplo:

**Tabla de Contenidos**
1. Introducción con GIF o imágenes
2. Sobre el proyecto
3. Tabla de contenidos
4. Propósito del proyecto
5. Tecnologías
6. Entorno de desarrollo
7. Estructura de archivo
8. Contribuyendo
9. Sobre EOS Costa Rica

## Propósito del Proyecto

Describe la razón por la que se hizo esto, por ejemplo:

*"Identificamos dos problemas principales: una escasez de donaciones de sangre y una desaceleración económica local. En medio del brote de COVID-19, los bancos de sangre necesitan donantes con urgencia. Las personas que son donantes potenciales calificados deben quedarse en casa y aislarse. A medida que las donaciones caen en picado y la demanda para los aumentos de sangre y plasma, los bancos de sangre están experimentando una escasez global pronunciada.*

*Además, la pandemia está afectando las economías locales debido a un bloqueo generalizado. Las pequeñas empresas que dependen de la comunidad local deben pensar en formas de incentivar a los clientes a comprar tan pronto como se levanten las restricciones ".*

## Tecnologías
El propósito es que el usuario conozca las principales tecnologías que se necesitaban para desarrollar el proyecto, para que el usuario pudiera entender el proyecto con un nuevo tipo de vista, por ejemplo, la información que se podría dar aquí es:


- React.js - React 18✨, React Router 5
- Rematch/core - Rematch a Redux Framework
- Material-ui/core - React components for faster and easier web development universal-authenticator-library - A library for allowing apps to easily use different auth providers
- Lint - ESlint
- Styles - Material-UI Theme (customizable)


## Entorno de Desarrollo

Especifique dónde se desarrolló el proyecto, en caso de que alguien más quiera hacer una contribución al progreso del proyecto, por ejemplo:

[evodex.io](https://evodex.io/exchange) se ejecuta en EOS MainNet y se crea a partir de la rama maestra, nuestra rama de producción.

[jungle.evodex.io](https://jungle.evodex.io/) se ejecuta en Jungle 3 TestNet y se crea a partir de la rama de desarrollo utilizada para el desarrollo, la integración y la prueba de nuevas funciones.

### Inicio Rápido

- Clona este repositorio usando `git clone https://github.com/YOUR_PROJECT_NAME.git`
- Moverse al directorio apropiado: `cd <YOUR_PROJECT_NAME>`
- Corre `yarn` para instalar dependencias. En este punto puedes correr `yarn start` para ver la aplicación de ejemplo en http://localhost:3000

### Empezando
Dé las instrucciones necesarias para ejecutar el proyecto localmente, por ejemplo:

#### **Pre-Requisitos**

`
yarn
`

#### **Instalación**

1. Clonar el repositorio

    `
    git clone https://github.com/your_username_/Project-Name.git
    `
2. Instalar paquetes de yarn

    `
    yarn install
    `

    ó solo

    `
    yarn
    `
3. Corre el proyecto
    
    `
    yarn start
    `

## Estructura de Archivo
Esto podría ayudar al lector a comprender la organización dentro del proyecto, por ejemplo:

```text title="modificar"
/
├── public
│   ├── index.html
│   └── manifest.json
├──  src
│   ├── api
│   ├── components
│   ├── config
│   ├── containers
│   ├── models
│   ├── routes
│   ├── theme
│   ├── utils
│   ├── App.js
│   ├── index.js
│   └── store.js
├── .dockerignore
├── .gitignore
├── .env.example
├── .eslintrc
├── .prettierrc
├── Dockerfile
├── LICENSE
├── README.md
├── docker-compose.yml
├── nginx.conf
└── package.json
```

## Contribuyendo

Si desea hacer una contribución, siga los siguientes pasos:

1. Crear Fork del proyecto
1. Crea el Feature Branch (`git checkout -b feature/AmazingFeature`)
1. Commit a los cambios (`git commit -m '<type>(<scope>): <subject>'`)
1. Push a la rama de trabajo (`git push origin feature/AmazingFeature`)
1. Abra un Pull Request

Por favor lea EOS Costa Rica [Pautas de contribución de código abierto](https://guias.eoscostarica.io/docs/pautas-para-codigo-abierto/) para obtener más información sobre las convenciones de programación.

Si encuentra un error, informe los errores grandes y pequeños **abriendo un issue** `<enlace a la sección del proyecto de emisión>`


## Sobre EOS Costa Rica

<div style={{ display: "block", textAlign: "center" }}>
    <img style={{ width: "40%" }} src="https://raw.githubusercontent.com/eoscostarica/.github/master/.github/workflows/images/eos-costa-rica-logo.png" />
</div>

EOS Costa Rica es un productor independiente, autofinanciado y de bare-metal de Genesis que proporciona una infraestructura estable y segura para las cadenas de bloques EOSIO. Apoyamos el software de código abierto para nuestra comunidad al mismo tiempo que ofrecemos desarrollo de blockchain empresarial y desarrollo de contratos inteligentes personalizados para nuestros clientes.

[eoscostarica.io](https://eoscostarica.io/)

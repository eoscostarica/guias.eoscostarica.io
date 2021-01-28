---
id: plantilla-readme
title: Plantilla readme
sidebar_label: Plantilla Readme
---

README es un archivo que trae una pequeña descripción sobre todo el proyecto, que contiene una introducción y explicación de este. El tipo de información que se puede describir aquí es información solicitada para comprender el proyecto y su estructura o propósito. A continuación, brindamos una plantilla para crear un archivo README para un nuevo proyecto.


### Para copiar esta plantilla readme como código fuente markdown [haga clic aquí](plantilla-readme-codigo-fuente)

***

## Introducción con GIF o imágenes

Es simple y puede parecer muy fácil y sí, lo es, pero el impacto que puede producir un GIF o una imagen es demasiado grande. El espectador adquiere la información necesaria para interesarse por el proyecto. Por ejemplo:

![Life bank](https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/life-bank.png)

## Sobre el proyecto

Dar una descripción general del proyecto brinda una visión general sobre el ** proyecto como producto **, por ejemplo:

*"Lifebank es un dapp basado en EOSIO que ayuda a las comunidades locales a crear un círculo virtuoso de intercambio de valor entre tres partes: donantes de vida elegibles, centros de donación comunitarios y empresas locales participantes (patrocinadores).*

*Lifebank es una iniciativa de EOS Costa Rica, una empresa que desarrolla soluciones basadas en blockchain para resolver problemas del mundo real. Lifebank es nuestra entrada al desafío Coding para el cambio organizado por la empresa líder de blockchain, Block.one ".*

## Tabla de contenidos
Con una buena visión de la estructura de la información se puede hacer que el lector acceda a la información específica necesaria, por lo que luego dar una buena visión de la información con una Tabla de Contenidos facilitará este proceso. Por ejemplo:

**Tabla de contenidos**
1. Introducción con GIF o imágenes
2. Sobre el proyecto
3. Tabla de contenidos
4. Propósito del proyecto
5. Versión
6. Tecnologías
7. Entorno de desarrollo
8. Estructura de archivo
9. Licencia
10. Contribuyendo
11. Colaboradores
12. Sobre EOS Costa Rica

## Propósito del proyecto

Describe la razón por la que se hizo esto, por ejemplo:

*"Identificamos dos problemas principales: una escasez de donaciones de sangre y una desaceleración económica local. En medio del brote de COVID-19, los bancos de sangre necesitan donantes con urgencia. Las personas que son donantes potenciales calificados deben quedarse en casa y aislarse. A medida que las donaciones caen en picado y la demanda para los aumentos de sangre y plasma, los bancos de sangre están experimentando una escasez global pronunciada.*

*Además, la pandemia está afectando las economías locales debido a un bloqueo generalizado. Las pequeñas empresas que dependen de la comunidad local deben pensar en formas de incentivar a los clientes a comprar tan pronto como se levanten las restricciones ".*

## Versión
Saber qué versión del proyecto es, podría ayudar a otros a depurar problemas, darle diferentes soluciones o enfoques, por este motivo, es necesario especificar la última versión del proyecto, por ejemplo:

:::note modificar
Evodex está listo para que nuestro primer grupo de probadores beta pruebe el intercambio descentralizado de próxima generación para EOS

Actualmente, evodex todavía se encuentra en versión beta preliminar *v0.1.0-beta.xx*

Lanzamos la versión del software de producción usando etiquetas github siguiendo a Semver.

También usamos los mensajes de confirmación de git para generar el registro de cambios del proyecto.

Con la version de comando yarn puede actualizar la versión de su paquete a través de la línea de comando.
:::

## Tecnologías
El propósito es que el usuario conozca las principales tecnologías que se necesitaban para desarrollar el proyecto, para que el usuario pudiera entender el proyecto con un nuevo tipo de vista, por ejemplo, la información que se podría dar aquí es:


- React.js - React 16✨, React Router 5
- Rematch/core - Rematch a Redux Framework
- Material-ui/core - React components for faster and easier web development universal-authenticator-library - A library for allowing apps to easily use different auth providers
- Lint - ESlint
- Styles - Material-UI Theme (customizable)


## Entorno de desarrollo

Especifique dónde se desarrolló el proyecto, en caso de que alguien más quiera hacer una contribución al progreso del proyecto, por ejemplo:

[evodex.io](https://evodex.io/exchange) se ejecuta en EOS MainNet y se crea a partir de la rama maestra, nuestra rama de producción.

[jungle.evodex.io](https://jungle.evodex.io/) se ejecuta en Jungle 3 TestNet y se crea a partir de la rama de desarrollo utilizada para el desarrollo, la integración y la prueba de nuevas funciones.

### Inicio rápido

- Clona este repositorio usando `git clone https://github.com/YOUR_PROJECT_NAME.git`
- Moverse al directorio apropiado: `cd <YOUR_PROJECT_NAME>`
- Corre `yarn` para instalar dependencias. En este punto puedes correr `yarn start` para ver la aplicación de ejemplo en http://localhost:3000

### Empezando
Dé las instrucciones necesarias para ejecutar el proyecto localmente, por ejemplo:

#### **Prerrequisitos**

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

## Licencia

MIT © EOS Costa Rica

## Contribuyendo

Si desea hacer una contribución, siga los siguientes pasos:

1. Crear Fork del proyecto
2. Crea el Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit a los cambios (`git commit -m '<type>(<scope>): <subject>'`)
4. Push a la rama de trabajo (`git push origin feature/AmazingFeature`)
5. Abra un Pull Request

Por favor lea EOS Costa Rica [Pautas de contribución de código abierto](https://guias.eoscostarica.io/docs/pautas-para-codigo-abierto/) para obtener más información sobre las convenciones de programación.

Si encuentra un error, informe los errores grandes y pequeños **abriendo un issue** `<enlace a la sección del proyecto de emisión>`

## Colaboradores

Liste las personas que trabajan en el proyecto.

## Sobre EOS Costa Rica

<div style={{ display: "block", textAlign: "center" }}>
    <img style={{ width: "50%" }} src="https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png" />
</div>

EOS Costa Rica es un productor independiente, autofinanciado y de bare-metal de Genesis que proporciona una infraestructura estable y segura para las cadenas de bloques EOSIO. Apoyamos el software de código abierto para nuestra comunidad al mismo tiempo que ofrecemos desarrollo de blockchain empresarial y desarrollo de contratos inteligentes personalizados para nuestros clientes.

[eoscostarica.io](https://eoscostarica.io/)
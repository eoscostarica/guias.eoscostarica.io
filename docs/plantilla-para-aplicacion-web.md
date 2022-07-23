---
id: plantilla-para-aplicacion-web
title: Plantilla para Aplicación Web
sidebar_label: Plantilla para Aplicación Web
---

## Plantilla para Aplicación Web de React

Plantilla para aplicaciones eb de React incorporando UAL para autenticadores EOSIO (wallets)

## Tecnologías

- React.js - React 16✨, React Router 5
- Revancha / núcleo - Rematch a Redux Framework
- Material-ui / core - Componentes de React para un desarrollo web más rápido y sencillo
- biblioteca-autenticador-universal: una biblioteca para permitir que las aplicaciones utilicen fácilmente diferentes proveedores de autenticación (opcional)
- Pelusa - ESlint
- Estilos - Tema Material-UI (personalizable)

## Instalación

Se requieren conocimientos básicos sobre Docker, Docker Compose y NodeJS.

### Requisitos previos

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/es/)
- [yarn](https://yarnpkg.com/)

### Paso a paso

Copie el `.env.example` y luego actualice las variables de entorno de acuerdo con sus necesidades

```
cp .env.example .env
```

_Si desea utilizar la integración de inicio de sesión UAL en el modelo estándar, asegúrese de que la variable env `REACT_APP_USE_UAL` esté configurada como verdadera ._

## Ejecución

1. Clone este repositorio usando `git clone --depth = 1 https://github.com/eoscostarica/webapp-boilerplate.git <YOUR_PROJECT_NAME>`
2. Vaya al directorio apropiado: `cd <YOUR_PROJECT_NAME>`.
3. Ejecute `yarn` para instalar las dependencias.
    _En este punto puede ejecutar `yarn start` para ver la aplicación de ejemplo en` http: // localhost: 3000`._

- **GitHub** : https://github.com/eoscostarica/webapp-boilerplate

## Componentes de React de EOSCR
Una colección de componentes de React para EOSIO.

### Repositorio de GitHub
https://github.com/eoscostarica/eoscr-components

### Previsualización de StoryBook
https://components.edenia.cloud

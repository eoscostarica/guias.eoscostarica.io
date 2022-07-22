---
id: boilerplate
title: ¿ Qué es un Boilerplate ?
sidebar_label: Boilerplates
description: Boilerplates son plantillas de software que se pueden utilizar para crear un proyecto de software para iniciar desde una base.
keywords: [boilerplate, boilerplates, Qué es un Boilerplate, Para qué sirve un Boilerplate, EOS, EOS Costa Rica]
---
## ¿Qué es un Boilerplate?

Un boilerplate es un marco o plantilla para el desarrollo de un proyecto. Es una estructura de proyecto ya definida de antemano que sirve para agilizar la organización y el desarrollo del software. Acelera la integración de soluciones y formatos que sirven para conducir el desarrollo de un nuevo proyecto a la producción.

En EOS Costa Rica hemos creado tres repositorios boilerplate: **Front-End Boilerplate**, **Back-End Boilerplate** y **Full-Stack Boilerplate**.

## EOS Boilerplates 

- [Full Stack Boilerplate](https://github.com/eoscostarica/full-stack-boilerplate)
- [Front End](https://github.com/eoscostarica/backend-boilerplate)
- [Back End](https://github.com/eoscostarica/backend-boilerplate)

## WAX Boilerplates 

- [WAX WebApp](https://github.com/edenia/wax-webapp-boilerplate)
- [Wax Full Stack Boilerplate](https://github.com/edenia/wax-full-stack-boilerplate)

## Proton Boilerplate 

- [Proton Full Stack Boilerplate](https://github.com/edenia/proton-full-stack-boilerplate)

## General Boilerplates 

- [WebApp Boilerplate](https://github.com/eoscostarica/webapp-boilerplate)
- [Hapi Boilerplate](https://github.com/eoscostarica/hapi-boilerplate)
- [Hasura Boilerplate](https://github.com/eoscostarica/hasura-boilerplate)

## Front-End Boilerplate

[**EOS Costa Rica Front-End Boilerplate**](https://github.com/eoscostarica/webapp-boilerplate)

"Front-end" se refiere a la interfaz de usuario y en el contexto de una aplicación web es la aplicación que se ejecuta en el navegador web de los usuarios.

Utilizamos [React JS](https://guias.eoscostarica.io/docs/tutoriales/tutorial-react), una biblioteca de JavaScript para la construcción de interfaces de usuario de alto rendimiento y basada en componentes que facilita el desarrollo de interfaces de usuario complejas con código predecible y fácil de depurar.

### Front-End Tech Stack

- [React](https://reactjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/v3.0-beta/)
- [Material UI](https://material-ui.com/)
- [i18 next](https://react.i18next.com/)

### Colecciones de Componentes React

Hemos desarrollado una colección de componentes en React para EOSIO. Puede ver los componentes que hemos construido en nuestro [EOS Costa Rica React Components Storybook](https://guias.eoscostarica.io/docs/tutoriales/tutorial-react#componentes-en-eos-costa-rica)
Para más información sobre los componentes puede visitar [Repositorio de Componentes](https://github.com/eoscostarica/eoscr-components)

## Back-End Boilerplate

[**EOS Costa Rica Back-End Boilerplate**](https://github.com/eoscostarica/backend-boilerplate)

"Back-end" se refiere a la aplicación del servidor, se puede describir es la capa de acceso a los datos de una aplicación que contiene la lógica de negocio para la gestión de datos dentro de la aplicación.

### Back-End Tech Stack

- [Hasura](https://hasura.io/)
- [Hapi](https://hapi.dev/)
- [IPFS](https://ipfs.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [EOSIO](https://eos.io/)

### Infraestructura

- [Docker](https://www.docker.com/)
- [K8s](https://kubernetes.io/)

### GraphQL / Hasura

El motor Hasura GraphQL genera automáticamente su esquema GraphQL y resolutores basados ​​en sus tablas/vistas en Postgres. No es necesario que escriba un esquema GraphQL o solucionadores.

La consola de Hasura le brinda herramientas de interfaz de usuario que aceleran su proceso de modelado de datos o el trabajo con su base de datos existente. La consola también genera automáticamente migraciones o archivos de metadatos que puede editar directamente y verificar en su control de versiones.

El motor Hasura GraphQL le permite hacer cualquier cosa que normalmente haría con Postgres al proporcionar GraphQL sobre construcciones nativas de Postgres.

Obtenga más información en [Hasura](https://guias.eoscostarica.io/docs/herramientas-para-desarrolladores#hasura)

### HTTP API (HAPI)

hapi.js (comúnmente conocido como hapi) son las siglas de HTTP API. Es un marco rico para crear aplicaciones y servicios. Fue diseñado originalmente para el rápido desarrollo de servicios de API RESTful usando JavaScript, pero desde entonces ha crecido hasta convertirse en un marco de aplicación web completo con características listas para usar plantillas, validación de entrada, autenticación, almacenamiento en caché y, más recientemente, soporte. para aplicaciones en tiempo real con soporte web socket.

Obtenga más información en [hapi](https://guias.eoscostarica.io/docs/herramientas-para-desarrolladores#hapi)

### EOSIO

EOSIO es un blockchain de tercera generación que permitirá alcanzar el objetivo de proporcionar un registro immutable, permanente, trazable y verificable de toda la actividad en los depósitos de contenedores. Estos datos serán públicos y podrán ser consumidos por cualquier tercero externo.

Obtenga más información en [Componentes EOSIO](https://guias.eoscostarica.io/docs/aprender-eosio/componentes-eosio)

### PostgresDB

*"PostgreSQL es un potente sistema de base de datos relacional de objetos de código abierto con más de 30 años de desarrollo activo que le ha ganado una sólida reputación por su fiabilidad, solidez y rendimiento".*

PostgreSQL viene con muchas características destinadas a ayudar a los desarrolladores a crear aplicaciones, a los administradores a proteger la integridad de los datos y a crear entornos tolerantes a fallas, y a administrar sus datos sin importar cuán grande o pequeño sea el conjunto de datos.
Obtenga más información en [PostgresDB](https://guias.eoscostarica.io/docs/herramientas-para-desarrolladores#postgresdb)

## Full-Stack Boilerplate

[**EOS Costa Rica Full-Stack Boilerplate**](https://github.com/eoscostarica/full-stack-boilerplate)

El Full-Stack Boilerplate contiene tanto el software del cliente como el del servidor. Hemos creado un esqueleto altamente escalable con las mejores prácticas, fullstack monorepo que contiene nuestras boilerplates de front-end y back-end.

### Diagrama Full-Stack

![full-stack-boilerplate](https://user-images.githubusercontent.com/5632966/106770009-2cf32780-6603-11eb-98dd-c1a6a9aa8451.png)
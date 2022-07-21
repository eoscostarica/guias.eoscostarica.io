---
id: boilerplate-para-backend
title: Boilerplate para Backend
sidebar_label: Boilerplate Para Backend
---

Un boilerplate altamente escalable con las mejores prácticas, hecha para un inicio rápido de proyectos backend. Este boilerplate presenta todas las últimas herramientas y buenas prácticas en la industria. Puedes encontrar el repositorio [Boilerplate EOS CR](https://github.com/eoscostarica/backend-boilerplate).

## Tecnologías

### **[hasura](https://hasura.io)**

El motor de GraphQL de Hasura es un servicio de código abierto que conecta su base de datos y micro-servicios y autogenera un backend GraphQL con ACL listo para producción.

### **[hapi](https://hapi.dev/)**

Un servicio backend para lógica de negocios personalizadas, integrado con Hasura, usando [actions](https://hasura.io/docs/1.0/graphql/manual/actions/index.html#actions)

### **[docker-compose](https://docs.docker.com/compose/)**

Compose es una herramienta para definir y correr aplicaciones de docker con múltiples contenedores.

## Instalación

*Se requieren conocimientos básicos sobre Docker, Docker Compose y NodeJS.*

### Prerrequisitos

1. [git](https://git-scm.com/)
1. [nodejs](https://nodejs.org)
1. [hasura](https://hasura.io/docs/1.0/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli)

### Paso a paso

1. Clona el repo usando `git clone --depth=1 https://github.com/eoscostarica/backend-boilerplate.git`
1. Accede al directorio del proyecto: `cd backend-boilerplate`
1. Copia el archivo `.env.example` y luego actualiza las variables de acuerdo a tus necesidades

## Ejecución

> Es necesario contar con una terminal que pueda ejecutar el archivo `makefile` que se encuentra en la raíz del proyecto. Para encontrar más información de make, puedes ir al manual [GNU Make](https://www.gnu.org/software/make/manual/make.html).

Sabiendo lo anterior, se procede a ejecutar el comando `make run`. Después de esto, estarán disponibles los puertos:
- hapi en el puerto http://localhost:9090
- hasura en el puerto http://localhost:9695

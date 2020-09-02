---
id: plantilla-para-backend
title: Plantilla para Backend
sidebar_label: Plantilla para Backend
---

Una plantilla altamente escalable con las mejores prácticas, hecha para un inicio rápido de proyectos backend. Esta plantilla presenta todas las últimas herramientas y buenas prácticas en la industria. Puedes encontrar el repositorio [aquí](https://github.com/eoscostarica/backend-boilerplate).

## Tecnologías involucradas
### **[hasura](https://hasura.io)**
- El motor de GraphQL de Hasura es un servicio de código abierto que conecta su base de datos y microservicios y autogenera un backend GraphQL con ACL listo para producción.

### **[hapi](https://hapi.dev/)**
- Un servicio backend para lógica de negocios personalizadas, integrado con Hasura, usando [actions](https://hasura.io/docs/1.0/graphql/manual/actions/index.html#actions).

### **[docker-compose](https://docs.docker.com/compose/)**
- Compose es una herramienta para definir y correr aplicaciones de docker con múltiples contenedores.

## Estructura del proyecto
```bash
eoscrbackendboilerplate/
├── hasura
│ ├── migrations
│ └── config.ymal
├── hapi
│ ├── src
│ | ├── config
│ | ├── api
│ | ├── routes
│ | └── config.ymal
│ ├── .dockerignore
│ ├── .eslintrc
│ ├── .prettierrc
│ ├── Dockerfile
│ ├── yarn-lock.json
│ └── package.json
├── .env.example
├── .gitignore
├── docker-compose.yaml
├── .LICENSE
├── .prettierrc
├── Dockerfile
├── LICENSE
└── README.md
```

## Instalación
*Se requieren conocimientos básicos sobre Docker, Docker Compose y NodeJS.*

### Requerimientos previos de instalación
1. [git](https://git-scm.com/)
1. [nodejs](nodejs.org)
1. [hasura](https://hasura.io/docs/2.0/graphql/manual/hasura-cli/install-hasura-cli.html#install-hasura-cli)

### Paso a paso
1. Clona el repo usando `git clone --depth=1 https://github.com/eoscostarica/backend-boilerplate.git`
1. Accede al directorio del proyecto: `cd backend-boilerplate`
1. Copia el archivo `.env.example` y luego actualiza las variables de acuerdo a tus necesidades

```
# global
STAGE=dev
APP_NAME=eoscr-backend-boilerplate

# wallet
WALLET_DATA=./wallet_data

# postgres
POSTGRES_USER=eoscr
POSTGRES_PASSWORD=password
POSTGRES_DB=localdb
POSTGRES_DATA=./db_data

# hasura
HASURA_GRAPHQL_ENABLE_CONSOLE=true
HASURA_GRAPHQL_DATABASE_URL=postgres://eoscr:password@postgres:5432/localdb
HASURA_GRAPHQL_ADMIN_SECRET=myadminsecretkey
HASURA_GRAPHQL_UNAUTHORIZED_ROLE=guest

# hapi
HAPI_EOS_API_ENDPOINT=https://jungle2.eosio.cr
HAPI_EOS_API_CHAIN_ID=e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473
HAPI_EOS_BASE_ACCOUNT=baseaccount
HAPI_EOS_BASE_ACCOUNT_PASSWORD=PW...
HAPI_EOS_WALLET_URL=http://wallet:8888
HAPI_HASURA_URL=http://hasura:8080/v1/graphql
HAPI_HASURA_ADMIN_SECRET=myadminsecretkey
HAPI_SERVER_PORT=9090
HAPI_SERVER_ADDRESS=hapi
```
> Contenido del archivo `.env.example`

## Ejecución
> Es necesario contar con una terminal que pueda ejecutar el archivo `makefile` que se encuentra en la raíz del proyecto. Para encontrar más información de make, puedes ir [aquí](https://www.gnu.org/software/make/manual/make.html).

Sabiendo lo anterior, se procede a ejecutar el comando `make run`. Después de esto, estarán disponibles los puertos:
- hapi en el puerto http://localhost:9090
- hasura en el puerto http://localhost:9695

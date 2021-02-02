---
id: boilerplate
title: Boilerplate
sidebar_label: Boilerplate
---


## ¿Qué es un Boilerplate?

Se le puede asociar a un framework o plantilla para el desarrollo de un proyecto. Es una estructura de soporte que ya esta definido por anteoridad que sirve para agilizar la organización y desarrollo de software. Integra soluciones y formatos que sirven para impulsar el desarrollo de un nuevo proyecto a producción.

Se divira el boilerplate en dos secciones, poder dividir el proyecto en FrontEnd sus tecnologías utilizadas y el BackEnd.

## Antes de Empezar

Esto lo necesitamos para empezar:

- [git](https://guias.eoscostarica.io/docs/tutoriales/guia-github#git-bash)
- [node.js](https://guias.eoscostarica.io/docs/tutoriales/tutorial-react#herramientas)
- [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Hasura CLI](https://hasura.io/docs/1.0/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli)

## Front End

Frontend es el acceso directo de los usuarios a las funcionalidades del programa es sumamente importante para el flujo correcto y sencillo de casos de uso que pueda tener el software.

[**GitHub Frontend Boilerplate**](https://github.com/eoscostarica/webapp-boilerplate)

### Instalación

**Pasos**:

1. Clonar el repo:

```shell
$ git clone --depth=1 https://github.com/eoscostarica/webapp-boilerplate.git <YOUR_PROJECT_NAME>
```

2. Moverse al directorio:

```shell
$ cd <YOUR_PROJECT_NAME>
```

3. Correr proyecto:

```shell
$ yarn start
```

### Componentes de React de EOSCR

Una colección de componentes de React para EOSIO. Para más información sobre los componentes puede visitar [Componentes en EOS Costa Rica](https://guias.eoscostarica.io/docs/tutoriales/tutorial-react#componentes-en-eos-costa-rica)

>[GitHub](https://github.com/eoscostarica/eoscr-components)

## BackEnd

Backend es la capa de acceso a los datos de un programa o cualquier dispositivo que tenga un acceso directo con los usuarios. Este contiene la lógica del manejo de los datos dentro del programa, se le asocia a una caja negra en donde tenemos entrada y salidas, son los únicos datos que podemos observar como usuarios.

[**GitHub Backend Boilerplate**](https://github.com/eoscostarica/backend-boilerplate).

### Instalación Backend

**Pasos**:

1. Clonar el repo:

```shell
$ git clone --depth=1 https://github.com/eoscostarica/backend-boilerplate.git <YOUR_PROJECT_NAME>
```

2. Moverse al directorio:

```shell
$ cd <YOUR_PROJECT_NAME>
```

3. Actualizar variables:

```shell
$ .env.example
```

4. Es necesario contar con una terminal que pueda ejecutar el archivo `makefile` que se encuentra en la raíz del proyecto. Correr proyecto:

```shell
$ make run
```

>hapi: `http://localhost:9090`  
hasura: `http://localhost:9695`

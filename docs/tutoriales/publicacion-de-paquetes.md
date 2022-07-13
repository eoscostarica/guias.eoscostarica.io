---
id: publicacion-de-paquetes
title: Publicar Paquetes en NPM
sidebar_label: Publicación de Paquetes
description: Publicar paquetes para que otros desarrolladores puedan utilizarlos con npm
keywords: [npm, publicar paquetes, npm publish, Cómo publicar un paquete, Cómo publicar un paquete en npm, Cómo crer una librería de npm]
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Publicación de Paquetes
La modularización en el contexto del software es importante para la separación de código y archivos que tengan relevancia entre sí, así como también facilitar el consumo de módulos que son comunes entre 2 o más proyectos. Aunque existen distintos tipos de paquetes y formas de publicarlos, este tutorial se basa en la publicación de paquetes de NPM.

## Generación del Personal Access Token
Para poder publicar paquetes, es necesario generar un *Personal Access Token* o **Token de Acceso Personal**. Este token puede ser generado al seguir los siguientes pasos:

1. Diríjase a la opción de **Ajustes** o *Settings*
    <p style={{ align: "center" }}>
      <img alt="Muestra gráficamente donde están los ajustes" src={ useBaseUrl( '/img/publicacion-de-paquetes/GoToSettings.webp' )} width="100%" />
     </p>
1. Una vez se se encuentra en el panel de configuraciones, presione el botón *Developer Settings* o **Configuraciones de Desarrollador**
    <p style={{ align: "center" }}>
      <img alt="Muestra gráficamente donde están las configuraciones de desarrollador" src={ useBaseUrl( '/img/publicacion-de-paquetes/DeveloperSettings.webp' )} width="100%" />
    </p>
1. Ahora, presione la opción **Tokens de Acceso Personal** o *Personal Access Tokens*
    <p style={{ align: "center" }}>
      <img alt="Muestra gráficamente donde está la opción de Tokens de Acceso Personal" src={ useBaseUrl( '/img/publicacion-de-paquetes/PersonalAccessToken.webp' )} width="100%" />
    </p>
1. Una vez presionada la anterior opción, presione el botón **Generar nuevo token** o *Generate new token*
    <p style={{ align: "center" }}>
      <img alt="Muestra gráficamente donde está la opción para generar un token" src={ useBaseUrl( '/img/publicacion-de-paquetes/GenerateNewToken.webp' )} width="100%" />
    </p>
1. Ahora seleccioone el *scope* o **ámbito** adecuado para el token, como se muestra en la siguiente imagen
    <p style={{ align: "center" }}>
      <img alt="Muestra gráficamente donde está el ámbito" src={ useBaseUrl( '/img/publicacion-de-paquetes/TokenScope.webp' )} width="100%" />
    </p>
1. Finalmente, presione el botón mostrado en la siguiente imagen (ubicado al final de la página) para obtener el token
    <p style={{ align: "center" }}>
      <img alt="Muestra gráficamente donde está el botón" src={ useBaseUrl( '/img/publicacion-de-paquetes/GenerateTokenButton.webp' )} width="100%" />
    </p>
**El token se muestra una vez este es generado; proceda a copiarlo en un lugar seguro, ya que no se vuelve a mostrar.**

## Registro de Paquetes de Github
*Github Package Registry* es un registro de paquetes que entre sus ventajas ofrece:
- Manejo de las mismas credenciales que se utilizan en Github.
- Posibilidad de integración con *Github Actions* y *Webhooks*.
- Paquetes privados que se mantienen dentro del mismo ámbito o *scope* de la organización.

## Autenticación Utilizando `npm login`
Para autenticarse en el *Github Registry* es necesario utilizar el comando `npm login` de la siguiente manera:
```bash
$ npm login --scope=@OWNER --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
> Recuerda reemplazar USERNAME con el usuario de Github respectivo (el que creó el *Personal Access Token*), TOKEN con el *Personal Access Token* generado y el PUBLIC-EMAIL-ADDRESS con la dirección de correo electrónico que corresponde al usuario.

Si desea autenticarse añadiendo su *Personal Access Token* al archivo `~/.npmrc`, puede dirigirse a la [documentación de github](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages) para mayor extensión en este asunto.

## Publicar un Paquete
En el archivo `package.json` es necesario agregar un elemento más llamado `publishConfig`, que hace referencia al registro donde se desea publicar el paquete.
1. Edite el archivo `package.json` e incluya la entrada `publishConfig`
    ```json
    "publishConfig": {
      "registry":"https://npm.pkg.github.com"
    }
    ```
1. Verifique si la entrada `repository` en el archivo `package.json` corresponde a la URL de repositorio. Por ejemplo si la URL del repositorio es `github.com/my-org/test`, entonces la entrada `repository` debe ser `git://github.com/my-org/test.git`

1. Ahora ejecute el siguiente comando en la terminal para publicar el paquete
    ```bash
    $ npm publish
    ```
## Desplegar una Nueva Versión del Paquete
A la hora publicar una nueva versión, es necesario cambiar la entrada `version` en el archivo `package.json`. Para esto se está siguiendo el estándar [Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning) de npm.

## Instalar el Paquete Publicado
Para instalar el paquete, es necesario ejecutar el siguiente código:
```bash
yarn add @scope/package-name
```
> Ten en cuenta que `@scope` se refiere al propietario (nombre de usuario o nombre de org) bajo el cual está publicado el paquete.
> Si deseas instalar una versión específica del paquete, es necesario ejecutar el comando: `yarn add @scope/package-name@versionhere`

## Referencias
- [Configuring npm for use with GitHub Packages](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages)
- [Crear y publicar nuestro primer paquete en Github Package Registry](https://mugan86.medium.com/crear-y-publicar-nuestro-primer-paquete-en-github-package-registry-9f229bd365bc)
- [Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning)
---
id: componentes-eosio
title: Componentes EOSIO
sidebar_label: Componentes EOSIO
---

## Nodeos

[Nodeos](https://developers.eos.io/manuals/eos/latest/nodeos/index) es el daemon de servicio central que se ejecuta en cada nodo de EOSIO, puede ser configurado con plugins para ejecutar un nodo. Además, se conecta y sincroniza datos con otros nodos de la red a través de P2P. Puede ser configurado para procesar:

* Contratos inteligentes.
* Validar transacciones.
* Producir bloques que contengan transacciones válidas.
* Confirmar bloques para registrarlos en el blockchain.

>[Más Información](https://guias.eoscostarica.io/docs/herramientas/opciones-configuracion-nodeos)

## Cleos

[Cleos](https://developers.eos.io/manuals/eos/latest/cleos/index) es una herramienta de línea de comandos que interactúa con Nodeos con una utilidad de billetera (Keosd) responsable de la gestión de claves y la firma de transacciones. Los desarrolladores también pueden utilizar cleos para desplegar y probar los contratos inteligentes de EOSIO.

### Como utilizar Cleos

Para usar **cleos**, necesita el dominio o dirección IP (y número de puerto) de una instancia de **nodeos** en ejecución. La instancia de nodeos debe configurarse para cargar `eosio :: chain_api_plugin` cuando se inicia. Esto permite que nodeos responda a las solicitudes de RPC que provienen de cleos.

> [Keosd](https://developers.eos.io/manuals/eos/latest/keosd/index): es un daemon de servicio de administrador de claves para almacenar claves privadas y firmar mensajes digitales.

### Comandos Cleos

```shell
$ cleos --help
$ cleos create --help
$ cleos create account --help
```

### Ejemplo Cleos

```shell
$ cleos wallet create -n mywallet --to-console
```

> [Más Información](https://guias.eoscostarica.io/docs/herramientas/linea-de-comando)

## EOSIO.CDT

[EOSIO.CDT](https://developers.eos.io/manuals/eosio.cdt/latest/index) o **Contract Development Toolkit** es un
kit de herramientas para WebAssembly(WASM) para facilitar el desarrollo de contratos inteligentes. Compilador de C++ a WASM y [**Aplication Binary Interface**](https://developers.eos.io/welcome/v2.0/getting-started/smart-contract-development/understanding-ABI-files)(ABI) conjunto generador de bibliotecas C/C++ para el desarrollo de contratos inteligentes.

## Obtenga sus llaves privadas

Más información sobre [llaves privadas](https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas).

## Empecemos

![imagen](https://es.latamlink.io/img/diagramas/cleos.png)

### Instalación en Windows

Como una forma de ayudarlo a comenzar en el mundo EOSIO, aquí hay una guía sobre cómo instalar el Kit de herramientas de desarrollo de contratos EOSIO. Si está utilizando un sistema operativo diferente en lugar de **Windows**, visite [este sitio](https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin) 
para ver los requisitos previos y pasar a [Instalar binarios](#instalar-binarios).
Esta guía de instalación estará dirigida a **usuarios de Windows**, desafortunadamente, EOSIO no proporciona puertos e instrucciones de PowerShell para este sistema operativo. Como desarrollador tienes dos opciones *una* utilizar una Máquina Virtual o, como en este caso un Terminal Linux en Windows. Siga estos pasos:

-Vaya a su Panel de Control
-Vaya a Programas -> Programas y características
-A continuación, haz clic en **Activar o desactivar características de Windows**
-Busque la opción y haga clic en **Subsistema de Windows para Linux** y pulse *Aceptar*
-Ahora debe reiniciar su sistema operativo Windows
-Por último, vaya a su *Microsoft Store* y busque el sistema operativo Linux que desee, le recomendamos que instale Ubuntu 18.04 LTS

### Usar Terminal de Linux

Le pedirá el nombre de usuario y la contraseña de UNIX, puede configurarlo como desee.
Este es un ejemplo de navegación con un disco "C"

```shell
$ cd /mnt/c/
```

Aquí está en su disco C donde puede ejecutar `$ ls -al` para ver sus archivos. El "nombre_de_usuario" es el usuario que tiene en su computadora.

```shell
$ cd Users/"nombre_de_usuario"
```

Una vez que esté en su carpeta deseada, puede seguir los siguientes pasos.

## Instalar Binarios

Esta guía utilizará las líneas de instalación de comandos de **Ubuntu 18.04**. Para otros sistemas operativos y más información, vaya a [EOSIO Before You Begin](https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin).

* **Paso 1: Instalar Binarios**

```shell
$ wget https://github.com/EOSIO/eos/releases/download/v2.0.0/eosio_2.0.0-1-ubuntu-18.04_amd64.deb
```

```shell
$ sudo apt install ./eosio_2.0.0-1-ubuntu-18.04_amd64.deb
```

* **Paso 2: Configurar un directorio de desarrollo**

```shell
$ mkdir "su_nombre_de_directorio_de_desarrollo"
$ cd "su_nombre_de_directorio_de_desarrollo"
```

* **Paso 3: Ingrese en su directorio local**

Obtenga su ruta de directorio con `$ pwd`, clone la versión de EOSIO de [GitHub](https://github.com/EOSIO/eos/blob/master/README.md) en esa ruta de directorio.

```shell
$ git clone --recursive https://github.com/eosio/eosio.cdt --branch v1.6.3 --single-branch
```

La clonación del repositorio puede tardar hasta 30 minutos. Después de eso, use `$ cd eosio.cdt`

* **Paso 4: Construir el EOSIO.CDT**

```shell
$ ./build.sh
```

La instalación de eosio.cdt hará que el binario compilado sea global, por lo que puede ser accesible desde cualquier lugar. Para este tutorial, se recomienda encarecidamente que no omita el paso de instalación de eosio.cdt.

```shell
$ sudo ./install.sh
```

>Para obtener más información sobre cómo instalar el contrato DEV. Kit de herramientas, vaya a [esta página](https://developers.eos.io/welcome/latest/getting-started/development-environment/install-the-CDT)

Ahora está listo para crear una billetera de desarrollo con la ayuda de Cleos. [Más información](https://developers.eos.io/welcome/latest/getting-started/development-environment/create-development-wallet)

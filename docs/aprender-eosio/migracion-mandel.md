---
id: migracion-mandel
title: Migración de EOSIO a Mandel
sidebar_label: Migración de EOSIO a Mandel
description: Diferencias entre la red actual EOSIO y Mandel.
keywords: [ EOSIO, Mandel, Migración, EOSIO a Mandel, Migracion a Mandel, Cuál es la diferencia entre EOSIO Y Mandel, fractally, ƒractally ]
---

## Descontento con Block One

En el año 2021, la [comunidad EOS](https://eoscommunity.org/) se sentía decepcionada por el compromiso de [Block One](https://block.one/) con ellos debido a la falta de inversión y acción por parte de B1 en el apoyo a la blockchain EOS. Por lo que, mediante un consenso mayoritario de los nodos productores de bloques, la comunidad afirma que la empresa ya no actúa en el mejor interés de la red y detuvieron los pagos continuos que recibía la empresa destinados a mantenimiento.

Tras la ruptura con B1 el fundador de EOS Daniel Larimer indica que era necesario reestructurar y efectuar una reformulación de la marca de EOS tanto su nombre como su visión y objetivos. También, indica que dicha situación comienza una nueva era de EOS al despedir a B1 y dejar de otorgarles tokens, ya que, permite enfrentar a los intereses corporativos que no se alinean con los de la comunidad EOS.

También, la [EOS Network Foundation](https://eosnetwork.com/) (ENF) surgió como una nueva alternativa para dirigir los fondos de la red hacia el desarrollo del protocolo EOSIO y la red principal EOS.

La visión de la EOS Network Foundation es construir un futuro descentralizado que no sacrifique ni a la comunidad, cooperación o consenso, facilitando la innovación mediante la unión y empoderamiento de desarrolladores alrededor del mundo.

## EOSIO vs Mandel

La comunidad de EOS no quería que se incluya todo el código de versiones más recientes del protocolo, por motivo de que algunas de las funciones agregadas no se alineaban con los intereses de la comunidad, entonces, se decide partir de la versión de EOSIO 2.0.13 utilizando solo algunas de las funciones nuevas de EOSIO 2.1.0 y EOSIO 2.2.0.

Por esta razón, surge como candidato Mandel (abreviación de Mandelbrot) que es una bifurcación del código de EOSIO, realizada por el equipo de [ƒractally](https://fractally.com/) (antes Clarion OS), con el propósito de tomar algunas de las mejoras más valiosas de EOSIO 2.1.0 y algunas unas pocas de EOSIO 2.2.0. Además, de actualizar el protocolo con [contratos de paga](https://eoscommunity.github.io/clsdk-docs/book/std/cpay/index.html) (Contract Pays) y mejoras en la configuración de los parámetros de la blockchain. 

Además, cabe resaltar que Mandel es un nombre provisional. Para más información visite [Mandel releva a EOSIO](https://medium.com/edenoneos/eos-mandel-to-takeover-eosio-in-2022-2e25bf5451f0).

Las características anteriores son concentradas en [Mandel 3.0](https://github.com/eosnetworkfoundation/mandel/releases/tag/v3.1.0-rc1), el cual deriva de EOSIO 2.0.13, aunque algunos productores de bloques actualizaron a EOSIO 2.1.0, entonces se hará una versión Mandel 2.3 que derive de EOSIO 2.1.0 para facilitar la migración a Mandel 3.0 evitando que se tenga que bajar la versión de EOSIO.

## Cambios de Mandel

Entre los cambios incluidos en Mandel 3.0 se destacan los siguientes:

- La posibilidad de configurar límites en el WASM, debido a que, por motivos de seguridad se limitaban varios parámetros del WASM, pero, gracias al aumento de rendimiento es seguro aumentar los límites y en búsqueda de expansión se han hecho configurables.
- Incluir contratos de paga, donde se crea una cuenta `provider` con disposición a cierta cantidad de recursos de NET y CPU y se publica la llave privada de su autorización para que cualquiera pueda firmar una transacción y si no es cancelada la cuenta `provider` cubrirá los costos de NET y CPU, esto con el fin de: 
    - Implementar transacciones que se estructuran de forma idéntica a las transacciones de Bitcoin. 
    - Eliminar los costes de creación de cuentas para aquellos que sólo quieren usar EOS como moneda. 
    - Incorporar tokens de privacidad sin que su privacidad se vea comprometida por el sistema de recursos. 
- Mejoras en la configuración de los parámetros de la blockchain que facilita la adición, eliminación y configuración de futuras características objetivas.
    - Esto permite a los contratos realizar acciones condicionales basadas en la presencia de una característica o el valor de un parámetro configurado. 

## ¿Qué está haciendo ƒractally con Mandel?

Según lo indicado por ƒractally en su página de preguntas frecuentes [comunidad EOS FAQ](https://fractally.com/blog/eos-community-faq):

> ƒractally está desarrollando un conjunto de estándares DeFi de próxima generación, incluyendo un estándar de tokens, un estándar NFT, un sistema de nombres premium, un sistema de símbolos premium de tokens y un intercambio descentralizado. Estos estándares son necesarios para que ƒractally realice su visión.

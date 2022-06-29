---
id: migracion-mandel
title: Migración de EOSIO a Mandel
sidebar_label: Migración de EOSIO a Mandel
---

## Descontento con Block One

En el año 2021, la comunidad de EOS se sentía decepcionada por el compromiso de [Block One](https://block.one/) con la blockchain de EOS, según la [EOS Network Foundation](https://eosnetwork.com/) (ENF) por la falta de propuestas de casos de uso y el poco soporte a la red blockchain al no cumplir con sus promesas. Por lo que, mediante un consenso mayoritario, la comunidad afirma que la empresa ya no actúa en el mejor interés de la red y detuvieron los pagos continuos que recibía la empresa destinados a mantenimiento.

Tras la ruptura con B1 el fundador de EOS Daniel Larimer indica que era necesario reestructurar y efectuar una reformulación de la marca de EOS tanto su nombre como su visión y objetivos. También, indica que dicha situación comienza una nueva era de EOS al despedir a B1 y dejar de otorgarles tokens, ya que, permite enfrentar a los intereses corporativos que no se alinean con los de la comunidad EOS.

La visión de la EOS Network Foundation es construir un futuro descentralizado que no sacrifique ni a la comunidad, cooperación o consenso, facilitando la innovación mediante la unión y empoderamiento de desarrolladores alrededor del mundo.

## EOSIO vs Mandel

Debido al descontento y que se apartará B1 es que la comunidad de EOS no quiere que se incluya todo el código de versiones más recientes del protocolo, como EOSIO 2.1 y EOSIO 2.2, por lo que, la red blockchain EOS no ha sido actualizada desde EOSIO 2.0. 

Por esta razón, surge como candidato Mandel (abreviación de Mandelbrot) que es una bifurcación del código de EOSIO, realizada por el equipo de [ƒractally](https://fractally.com/) (antes Clarion OS), con el propósito de tomar algunas de las mejoras más valiosas de EOSIO 2.1 y algunas unas pocas de EOSIO 2.2. Además, de agregar dos nuevos hard forks: [contratos de paga](https://eoscommunity.github.io/clsdk-docs/book/std/cpay/index.html) (Contract Pays) y mejoras en la configuración de los parámetros de la blockchain. 

Además, cabe resaltar que Mandel es un nombre provisional. Para más información visite [Mandel releva a EOSIO](https://medium.com/edenoneos/eos-mandel-to-takeover-eosio-in-2022-2e25bf5451f0).

Lo anterior, concentrado en [Mandel 3.0](https://github.com/eosnetworkfoundation/mandel/releases/tag/v3.1.0-rc1), aunque, debido a que algunos productores de bloques actualizaron a EOSIO 2.1, se hará una versión Mandel 2.3 que derive de EOSIO 2.1 para facilitar la migración a Mandel 3.0.

## Cambios de Mandel

Entre los cambios incluídos en Mandel 3.0 se destacan los siguientes:

- La posibilidad de configurar límites en el WASM, debido a que, por motivos de seguridad se limitaban varios parámetros del WASM, pero, gracias al aumento de rendimiento es seguro aumentar los límites y en búsqueda de expansión se han hecho configurables.
- Incluir contratos de paga, donde se crea una cuenta `provider` con disposición a cierta cantidad de recursos de NET y CPU y se publica la llave privada de su autorización para que cualquiera pueda firmar una transacción y si no es cancelada la cuenta `provider` cubrirá los costos de NET y CPU, esto con el fin de: 
    - Implementar transacciones que se estructuran de forma idéntica a las transacciones de Bitcoin. 
    - Eliminar los costes de creación de cuentas para aquellos que sólo quieren usar EOS como moneda. 
    - Incorporar tokens de privacidad sin que su privacidad se vea comprometida por el sistema de recursos. 
- Mejoras en la configuración de los parámetros de la blockchain que facilita la adición, eliminación y configuración de futuras características objetivas.
    - Esto permite a los contratos realizar acciones condicionales basadas en la presencia de una característica o el valor de un parámetro configurado. 

## ¿Qué está haciendo ƒractally con Mandel?

Según lo indicado por ƒractally en su página de preguntas frecuentes [EOS community FAQ](https://fractally.com/blog/eos-community-faq):

> ƒractally está desarrollando un conjunto de estándares DeFi de próxima generación, incluyendo un estándar de tokens, un estándar NFT, un sistema de nombres premium, un sistema de símbolos premium de tokens y un intercambio descentralizado. Estos estándares son necesarios para que ƒractally realice su visión.

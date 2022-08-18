---
id: protocolo-eosio
title: Protocolo Blockchain EOSIO y Antelope
sidebar_label: Protocolo EOSIO y Antelope
description: Qué es EOSIO y Antelope como funciona el protocolo blockchain y como usarlo.
keywords: [eosio, antelope, eos, blockchain, protocolo, Qué es un protocolo blockchain, Para qué sirve EOSIO]
---

## ¿Qué es EOSIO? 

EOSIO es software de código abierto que permite lanzar redes blockchain altamente configurables sobre las cuales desarrolladores y emprendedores pueden correr aplicaciones blockchain de alto rendimiento. [EOSIO](https://eos.io/) fue creado en el 2018 por la empresa [Block One](https://block.one/) (B1). 

EOSIO permite a desarrolladores crear y ejecutar aplicaciones descentralizadas, esto se realiza mediante la emulación de la funcionalidad de una computadora contando con recursos como ancho de banda de red, ancho de banda de CPU y RAM. Del mismo modo, EOSIO proporciona un amplio conjunto de herramientas y protocolos que garantizan la seguridad, la custodia y los permisos para las redes de blockchain. 

## ¿Qué es Antelope?

Antelope es un protocolo blockchain administrado por la comunidad basado en una bifurcación de EOSIO lanzado en agosto de 2022 con un lanzamiento público del [repositorio Antelope en Github](https://github.com/antelopeIO) junto con un nuevo [sitio web del proyecto](http://www.antelope.io/).

Antelope está dirigido por una coalición de miembros de la comunidad en diferentes redes de cadenas de bloques, incluidas [EOS](https://eosnetwork.com/), [Telos](https://telos.net/), [Wax](https://wax.io/), y [UX](https://uxnetwork.io/). Los miembros de la coalición comparten la responsabilidad de mantener el código fuente de Antelope, así como de desarrollar continuamente el protocolo central que ejecuta cada una de estas redes públicas blockchain.

## Diferencias entre EOSIO / Antelope y EOS

Es importante saber la diferencia entre EOSIO / Antelope y EOS para no confundir los dos conceptos, como se mencionó anteriormente, EOSIO y Antelope son el software que permite implementar cadenas de bloques personalizadas, en contraste, EOS, también conocido como "mainnet", corresponde a la primera red pública lanzada en EOSIO.
`EOS` , además de ser una de las blockchains desplegadas sobre EOSIO también es el símbolo del token que se utiliza como "token del sistema" de la mainnet y que sirve para controlar aspectos importantes de la red, como la votación de los productores de bloques y la gestión de recursos.

Las características de EOS fueron altamente personalizadas por la comunidad mediante los **contratos de sistema**, así que, EOS es un ejemplo de cómo utilizar EOSIO, pero, no su definición, es por esta razón que EOS no pertenece ni es controlada por B1 sino por su comunidad. 

Además, existen otras redes blockchain basadas en EOSIO como las son LACChain, Proton, Telos, WAX, entre otras.  Puede ver la siguiente [lista de redes EOSIO](https://guias.eoscostarica.io/docs/comunidad/redes-eosio). También existen múltiples redes privadas que actualmente utilizan EOSIO.

## Protocolo EOSIO / Antelope

Algunas de las características innovadoras de EOSIO y Antelope incluyen:
- **Transacciones gratuitas** con límites de consumo
- **Baja latencia** en confirmación de bloques nuevos (0.5 segundos)
- **Tolerante a fallas bizantinas BFT**
- **Nombres de cuentas legibles por humanos** (`cuentaeosio1`)
- **Permisos ACL** basados en roles jerárquicos
- Contratos actualizables **escritos en C++** facilitan el uso a programadores
- Soporte para llaves protegidas por **hardware biométrico** (`Apple Secure Enclave`)
- Diseñado para la **comunicación Inter-Blockchain**
- Diseñado para la validación del cliente de encabezado escaso
- Transacciones periódicas programadas
- Seguridad con retraso de tiempo
- Diseñado para la ejecución paralela de la lógica de validación sin contexto

Otra característica importante de una red blockchain basada en el protocolo EOSIO y Antelope es que tiene una arquitectura flexible, debido a que el protocolo permite un ecosistema multicadena altamente intercompatible y personalizable al no fijar las reglas en el protocolo, sino que gran parte de las reglas de operación se definen a través de los **contratos del sistema**. 

Esta flexibilidad se debe a que los **contratos de sistema** constituyen un módulo separado del protocolo base. De esta forma, las funciones centrales de los nodos y el mecanismo de producción de bloques se mantienen separados de los **contratos de sistema**.

## Contratos del Sistema

Los contratos de sistema permiten a las redes EOSIO y Antelope:

- Configurar fácilmente la gobernanza de la red mediante contratos inteligentes.
- Tener reglas transparentes de operación del sistema.
- Sincronizar los cambios en las reglas de operación de forma instantánea en toda la red, lo que reduce la administración y los costos de las actualizaciones de gobernanza.
- Mantener la compatibilidad total con otras cadenas de bloques EOSIO y Antelope.


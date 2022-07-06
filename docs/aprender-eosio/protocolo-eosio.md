---
id: protocolo-eosio
title: ¿Qué es EOSIO?
sidebar_label: Protocolo EOSIO
description: ¿Qué es EOSIO?, explicacion de como funciona el protocolo EOSIO
keywords: [eosio, eosio.io, eos, eosio, eosio.io, EOS, EOS Costa Rica, ¿Qué es un protocolo?,
¿Para qué sirve EOSIO?]
---

## ¿Qué es EOSIO? 

EOSIO es software de código abierto que permite lanzar redes blockchain altamente configurables sobre las cuales desarrolladores y emprendedores pueden correr aplicaciones blockchain de alto rendimiento. [EOSIO](https://eos.io/) fue creado en el 2018 por la empresa [Block One](https://block.one/) (B1). 

EOSIO permite a desarrolladores crear y ejecutar aplicaciones descentralizadas, esto se realiza mediante la emulación de la funcionalidad de una computadora contando con recursos como ancho de banda de red, ancho de banda de CPU y RAM. Del mismo modo, EOSIO proporciona un amplio conjunto de herramientas y protocolos que garantizan la seguridad, la custodia y los permisos para las redes de blockchain. 

## Diferencia entre EOSIO y EOS

Es importante conocer la diferencia entre EOSIO y EOS para no confundir ambos conceptos, como ya se mencionó es el software para el desarrollo de blockchains personalizables, en cambio EOS, también referida como `mainnet`, corresponde a la primera red pública lanzada sobre EOSIO en su primera versión. 

EOS, además de ser una de las blockchains desplegadas sobre EOSIO también `EOS` es el símbolo del token que se utiliza como "token del sistema" de la mainnet y que sirve para controlar aspectos importantes de la red, como la votación de los productores de bloques y la gestión de recursos.

Las características de EOS fueron altamente personalizadas por la comunidad mediante los **contratos de sistema**, así que, EOS es un ejemplo de cómo utilizar EOSIO, pero, no su definición, es por esta razón que EOS no pertenece ni es controlada por B1 sino por su comunidad. 

Además, existen otras redes blockchain basadas en EOSIO como las son LACChain, Proton, Telos, WAX, entre otras.  Puede ver la siguiente [lista de redes EOSIO](https://guias.eoscostarica.io/docs/comunidad/redes-eosio). También existen múltiples redes privadas que actualmente utilizan EOSIO.

## Protocolo EOSIO 

Algunas de las características innovadoras de EOSIO incluyen:
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

Otra característica importante de una red blockchain basada en el protocolo EOSIO es que tiene una arquitectura flexible, debido a que, EOSIO permite un ecosistema multicadena altamente intercompatible y personalizable al no fijar las reglas en el protocolo, sino que gran parte de las reglas de operación se definen a través de los **contratos del sistema**. 

Esta flexibilidad se debe a que los **contratos de sistema** constituyen un módulo separado del protocolo base de EOSIO. De esta forma, las funciones centrales de los nodos y el mecanismo de producción de bloques se mantienen separados de los **contratos de sistema**.

## Contratos del Sistema

Los contratos de sistema permiten a las redes EOSIO:

- Configurar fácilmente la gobernanza de la red mediante contratos inteligentes.
- Tener reglas transparentes de operación del sistema.
- Sincronizar los cambios en las reglas de operación de forma instantánea en toda la red, lo que reduce la administración y los costos de las actualizaciones de gobernanza.
- Mantener la compatibilidad total con otras cadenas de bloques EOSIO.


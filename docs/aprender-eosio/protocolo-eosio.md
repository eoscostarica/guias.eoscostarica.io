---
id: protocolo-eosio
title: Protocolo EOSIO
sidebar_label: Protocolo EOSIO
---

EOSIO es software de código abierto que permite lanzar redes blockhain altamente configurables sobre las cuales desarrolladores y emprendedores pueden correr aplicaciones blockchain de alto rendimiento. [EOSIO](https://eos.io/) fue creado en el 2018 y es mantenido por la empresa [Block One](https://block.one/). La primera red pública lanzada sobre EOSIO se llama EOS, también referida como "mainnet". EOS es una de múltiples redes blockchain públicas actualmente utilizado EOSIO. Puede ver la siguiente [lista de redes EOSIO](https://guias.eoscostarica.io/docs/comunidad/redes-eosio). También existen múltiples redes privadas que actualmente utilizan EOSIO.

Algunas de las características innovadoras de EOSIO incluyen:
- **Trasacciones gratuitas** con limites de consumo
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

Otra característica importante de una red blockchain basada en el protocolo EOSIO tiene una arquitectura flexible, en la cual gran parte de las reglas de operación se definen a través de los **contratos del sistema**.

Esta flexibilidad se debe a que los contratos de sistema constituyen un módulo separado del protocolo base de EOSIO. De esta forma, las funciones centrales de los nodos y el mecanismo de producción de bloques se mantiene separado de los **contratos de sistema**.

## Contratos del sistema

Los contratos de sistema permiten a las redes EOSIO:

- Configurar fácilmente la gobernanza de la red mediante contratos inteligentes
- Tener reglas transparentes de operación del sistema
- Sincronizar los cambios en las reglas de operación de forma instantánea en toda la red, lo que reduce la administración y los costos de las actualizaciones de gobernanza
- Mantener la compatibilidad total con otras cadenas de bloques EOSIO


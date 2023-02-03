---
id: patron-demux
title: Patrón arquitectónico Demux
sidebar_label: Patrón Demux
description: Descripción del patrón demux
keywords: [demux, patrón arquitectónico backend, patrón demux, patrón de arquitectura demux, EOSIO, EOS Costa Rica]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Patrón Demux

[Demux](https://medium.com/eosio/introducing-demux-deterministic-databases-off-chain-verified-by-the-eosio-blockchain-bd860c49b017) es un patrón arquitectónico para infraestructura backend basado en el patrón de [Arquitectura Flux](https://facebook.github.io/flux/docs/in-depth-overview.html) y [Redux](https://github.com/reduxjs/redux/). 

Es utilizado para que aplicaciones construidas en la cadena de bloques de EOSIO puedan abastecer de eventos a la cadena de bloques, actualizar de forma determinista bases de datos consultables y desencadenar efectos secundarios tanto en la cadena de bloques como en servicios externos.

Del mismo modo, el patrón en cuestión nació considerando lo siguiente:

- Separar la preocupación de cómo existe el estado en la cadena de bloques y cómo es consultado por el frontend del cliente.
- El frontend del cliente no es el único responsable de determinar el estado derivado, reducido y/o acumulado.
- Posibilidad de que los eventos de la cadena de bloques desencadenen nuevas transacciones, así como otros efectos secundarios fuera de la cadena de bloques.
- La cadena de bloques como la única fuente de verdad para todo el estado de la aplicación.

De manera general, demux permite aprovechar los beneficios tanto de las cadenas de bloques como de las bases de datos tradicionales, por un lado, se mantienen las propiedades de inmutabilidad, trazabilidad y confianza ofrecidas por las cadenas de bloques y por el otro, la facilidad, rapidez y flexibilidad para consultar bases de datos. Esto porque como realizar consultas complejas en una cadena de bloques posee un alto costo, se aprovecha que gracias a diversas optimizaciones que efectúan las bases de datos la cantidad de recursos necesarios es mucho menor.

## Capa de persistencia separada

El almacenamiento de datos en el estado indexado de las cadenas de bloques puede ser útil por tres razones: 

- El consenso descentralizado de los resultados de los cálculos.
- El uso del estado dentro de otros cálculos de la cadena de bloques. 
- La recuperación del estado para su uso en las interfaces de los clientes.

Sin embargo, cuando se construyen frontends más complicados comienzan a aparecer problemas al realizar la consulta directa a la cadena de bloques, es debido a esto, que demux aborda los problemas de escalado descargando las consultas a una capa de persistencia, definida a la medida según las necesidades, por lo que, se preprocesan e indexan en una base de datos tradicional.

De este modo, se evita agregar más nodos endpoints cuando se necesita escalar la carga de las consultas y también, omite que se deba realizar un excesivo número de consultas a la cadena de bloques y procesar los datos, lo cual es sumamente costoso. Lo anterior es útil para cuando se tienen aplicaciones complejas que requieran recuperar los datos de una cadena de bloque. 

Además, a medida que se producen los eventos de la cadena de bloques, la base de datos elegida se actualiza mediante funciones de actualización (`Updaters`), que procesan de forma determinista una lista de objetos de acciones (`Actions`). Entonces, de esta manera la base de datos se mantiene actualizada con respecto a la cadena de bloques y el frontend de la DAPP consulta la base de datos a través de una `API` adecuada.

## Única fuente de la verdad

- Si se elimina o se pierde la base de datos puede ser recuperada reproduciendo las acciones de la cadena de bloques.
- Si la aplicación es de código abierto y la cadena de bloques es pública, el estado de la aplicación puede ser auditado.
- No se requiere mantener múltiples formas de actualizar el estado.

## Efectos Secundarios

Dado que se tiene un sistema para actuar sobre eventos específicos de la cadena de bloques de forma determinista, se puede utilizar este sistema para gestionar también eventos no deterministas.

Para esto se tienen las funciones de efecto (`Effects`) que trabajan de manera similar a las funciones de actualización, con la diferencia que las de efecto se ejecutan de forma asincrónica, no se ejecutan durante las repeticiones, y modificar la base de datos está fuera del alcance de estas funciones. 

Algunos ejemplos de efectos secundarios son: 

- Firmar y emitir una transacción.
- Enviar un correo electrónico.
- Iniciar un pago Fiat tradicional.

## Flujo de los datos

Así como [Flux](https://facebook.github.io/flux/docs/in-depth-overview.html#structure-and-data-flow) y [Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-terms-and-concepts), el flujo de los datos en demux es unidireccional. Comenzando desde el frontend de la DAPP, este puede escribir en la cadena de datos mediante transacciones (`Transactions`), que serán leídas por un observador (`Action Watcher`) para notificar que deben ser manejadas lo que puede provocar efectos secundarios, después de esto mediante las funciones de actualización el evento será registrado en la base de datos que será consultada mediante un `API` por la DAPP. 

### Diagrama del flujo de datos de demux

<div style={{  textAlign: "center" }}>
    <img alt="Diagrama del flujo de datos de demux" title="Diagrama del patrón Demux" 
    src={ useBaseUrl( '/img/diagramas/demux-pattern.webp' )} loading="lazy"/> 
</div>

### Secuencia del flujo de datos de demux

1. El cliente envía una transacción a la cadena de bloques.
1. El `Action Watcher` invoca al `Action Reader` para verificar los nuevos bloques.
1. El `Action Reader` ve las transacciones del nuevo bloque, analiza las acciones.
1. El `Action Watcher` envía las acciones al `Action Handler`.
1. El `Action Handler` procesa las acciones mediante `Updaters` y `Effects`.
1. `Actions` ejecuta los correspondientes `Updaters`, actualizando el estado de la base de datos.
1. `Actions` ejecuta los correspondientes `Effects`, activando eventos externos.
1. El cliente consulta el `API` para actualizar los datos.

## Implementación en EOS Costa Rica

Utilizamos nuestra propia solución inspirada en el patrón arquitectónico demux, en la que se usa el State History Plugin de nodeos como `Action Watcher`.

### Proyectos de código abierto

Algunos de nuestros proyectos de código abierto implementados con la solución basada en el patrón demux:

- [EOS Rate](https://github.com/eoscostarica/eos-rate)
- [Antelope Tools](https://github.com/edenia/antelope-tools)
- [MyvoteEOS](https://github.com/eoscostarica/MyvoteEOS-proxy)
- [EOSIO Spend Explorer](https://github.com/eoscostarica/eosio-spend-explorer)

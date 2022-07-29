---
id: mecanismo-de-consenso
title: Algoritmo de Consenso DPoS
sidebar_label: Algoritmo de Consenso DPoS
description: Algoritmo de Consenso DPoS para redes blockchain basadas en protocolo EOSIO 
keywords: [algoritmos de consenso, blockchain, eosio, Delegated Proof of Stake, DPoS, Mecanismo de Consenso, Qué es un mecanismo de consenso, Para qué es un algoritmo de consenso, Proof of Stake ]
---

El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la única versión de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo común que sea una aceptado por toda la red.

Un Algoritmo de consenso es un proceso en Ciencias de la Computación usado para lograr acuerdo en un sólo valor de datos entre procesos o sistemas distribuidos.

La tecnología Blockchain depende de Algoritmos de Consenso para lograr un acuerdo entre los nodos. Un blockchain puede ser pensado como una base de datos descentralizada que es manejada por computadoras distribuidas en una red de punto a punto (P2P). Cada punto mantiene una copia del estado de la red para prevenir un punto único de fallo (en inglés SPOF). Actualizaciones y validaciones son reflejadas en todas las copias simultáneamente.

## Delegated Proof of Stake (DPoS)

<figure className="video_container">
  <iframe 
    width="100%" 
    height="315" 
    src="https://www.youtube.com/embed/OVKAOwzAwHI"     
    frameBorder={0}
    allowFullScreen
    loading="lazy"> </iframe>
</figure>

El software EOSIO utiliza el único conocido Algoritmo de Consenso Descentralizado probado capaz de cumplir los requerimientos de rendimiento de las aplicaciones en el blockchain, **Delegated Proof of Stake (DPoS)**. Bajo este algoritmo, aquellos que mantienen token en el blockchain adoptando el software EOSIO pueden seleccionar los productores de bloques através de un sistema de aprobación continua. Cualquiera que elija participar en la producción de bloques tendrán la oportunidad de producirlos, siempre que puedan persuadir a los titulares de tokens para que voten por ellos.

 - [DPOS Algoritmo de Consenso](https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper)

EOSIO delegará la autoridad para validar y escribir nuevos bloques a un grupo de nodos que llamamos [Productores de Bloques](#qué-es-un-productor-de-bloques).

## ¿Qué es un productor de bloques?

Los productores de bloques proveen la infraestructura requerida para procesar las transacciones. Algunos productores de bloques operan con sus propios equipos físicos, mientras otros proveen servicios utilizando servicios en la nube de terceros.

### Explicando el rol de un productor de bloques de EOS

<figure className="video_container">
  <iframe 
    width="100%" 
    height="315" src="https://www.youtube.com/embed/YLt5uexD9gg"     
    frameBorder={0}
    allowFullScreen
    loading="lazy"> </iframe>
</figure>

### Productores de Bloques Activos

Los nodos autorizados como productores de bloques activos pertenecen a un grupo que comparte la responsabilidad de validar y escribir todas las acciones en la red.

Son capaces de reconocer las firmas de los nodos escritores y verificar que las transacciones hayan sido transmitidas a la red por nodos autorizados mediante listas blancas en contratos inteligentes.

Una red EOSIO esta configurada por defecto para utilizar 21 productores activos y una serie productores de reserva para una operación estable.


> EOSIO permite hasta 125 productores de bloque activos, especificado mediante `max_producers` en [config.hpp](https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106)

### Cronograma de Producción

En redes EOSIO, los productores de bloques activos se enumeran en un cronograma, llamado **schedule**.

La lista de cuentas de productores en el schedule se ordena alfabéticamente y así se define la secuencia en que deben firmar bloques.

Cada productor recibe una ventana de 12 bloques para firmar antes de que el siguiente productor inicie su ventana. Los bloques nuevos son producidos por el primer nodo en la lista durante un periodo de 6 segundos (12 bloques) y luego pasa el siguiente nodo a producir los siguientes 12 bloques y así sucesivamente.

Si un nodo productor no está listo o no está disponible, no hay nadie para producir los 12 bloques, por lo que todas las transacciones especulativas se retrasan hasta que el próximo productor comience a firmar.

### Tolerancia a Fallas Bizantinas

Los bloques no se consideran irreversibles en la cadena hasta que hayan sido validados por 2/3 +1 de los productores activos. De tal manera que si un productor del grupo inserta un bloque invalido los nodos siguientes lo rechazaran y las transacciones y no serán incluidas sin que 2/3 +1 hayan validado ese bloque.

> **Ejemplo:** Una red de 21 productores activos requiere validación de 15 nodos (2/3 +1), lo cual toma en promedio 90 segundos para obtener irreversibilidad de un bloque nuevo

### Tolerancia a Fallas en Nodos

Una vez que se firma un bloque, otros productores lo validan en el cronograma y pasa a un estado irreversible después de que 2/3 + 1 productores lo hayan validado. Entonces, si 1/3 o más de todos los productores están fuera de línea, el último número de bloque irreversible, conocido como **Last Irreversible Block** o **LIB**, no aumentaría y la cadena de bloques se detendrá.

Los servidores a veces fallan, y a veces deben ser retirados de operación para actualizaciones de software y mantenimiento del sistema, lo que es importante considerar en redes EOSIO pequeñas.

Con solo 5 productores, la red tolerará que 1 productor se desconecte. Si más de uno está fuera de línea, el número del **LIB** dejará de moverse y la red se detendrá. Con 4 nodos, la interrupción de un nodo interrumpirá la operación. Con 9 productores, dos nodos pueden desconectarse sin romper la red.

Es importante que las llaves privadas de producción estén respaldadas correctamente. Si se pierden llaves de productores de bloques debido a un desastre del sistema, existe la posibilidad de que la red deje de funcionar para siempre.

### Productores de Bloques de Reserva

Las redes EOSIO manejan un grupo de nodos productores de bloques registrados que pueden asumir el rol de productores de bloques con solo ser agregado al schedule de productores activos.

---
id: mecanismo-de-consenso
title: Mecanismo de Consenso
sidebar_label: Mecanismo de Consenso
---

El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la única versión de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo común que sea una aceptado por toda la red.

Un Algoritmo de consenso es un proceso en Ciencias de la Computación usado para lograr acuerdo en un sólo valor de datos entre procesos o sistemas distribuidos.

La tecnología Blockchain depende de Algoritmos de Consenso para lograr un acuerdo entre los nodos. Un blokchain puede ser pensado como una base de datos descentralizada que es manejada por computadoras distribuidas en una red de punto a punto (P2P). Cada punto mantiene una copia del estado de la red para prevenir un punto único de fallo (en inglés SPOF). Actualizacioes y validaciones son reflejadas en todas las copias simultáneamente.

Dentro de los mecanismos de consenso encontramos los siguientes (Por orden cronológico):
## Proof of Work (PoW)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/3EUAcxhuoU4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Es el primer mecanismo de consenso presentado por Satoshi Nakamoto en el whitepaper del Bitcoin en el 2008, en este consenso un grupo de transacciones denominadas "Mempool" son verificadas por los "mineros", los cuales resuelven un complejo problema matemático (mismo que aumenta en complejidad entre más se validen bloques) por lo que se requieren equipos de cómputo en este caso de "minería" especializados y a su vez grandes cantidades de energía.

El primer minero que encuentre la solución al problema y esta sea probada por los demás mineros obtiene el derecho de agregar el "Mempool" al blockchain y obtener una recompensa de bloque o "Block reward" compuesta por criptomonedas generadas por las comisiones de transacción.

Debido a los altos requerimientos para poder "minar" se han formado grupos de minado o "Pool mining" con el de fin de lograr encontrar la solución al problema matemático con la utilización de recursos, con ello tener mejores oportunidades de encontrar la solución primero que los mineros individuales con mayores recursos y la recompensa obtenida es repartida entre los miembros del pool.

Si se desea obtener más información puede visitar el siguiente [enlace](https://guias.eoscostarica.io/docs/herramientas/glosario#proof-of-work).

## Proof of Stake (PoS)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/psKDXvXdr7k" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Este mecanismo de consenso nace con el 2011 con el fin de eliminar aquellas limitaciones presentes en su antecesor proof of work, teniendo en lugar de "mineros" que requieren recursos para la verificación de transacciones tales como equipos especializados y grandes cantidades energía a los "validadores" los cuales son dueños de monedas y ponen como colateral ["Stake"](https://guias.eoscostarica.io/docs/herramientas/glosario/#stake) cierta cantidad de monedas, siendo escogido de manera aleatoria los validadores responsables de "validar" o "minar" en caso de que exista un validador corrupto perderá el stake y no podrá ser validador en el futuro.

Para la validación de transacciones se requieren que 2/3 del total de los validadores aprueben y el bloque de transacciones. Para la elección de los validadores se toma en consideración los siguientes aspectos:

- Cantidad de moneda (Entre más alta sea cantidad mayor la probabilidad de ser elegido).
- Edad de las monedas apostadas, una vez utilizadas se reinicia a 0 (Entre más tiempo sin ser utilizadas mayor la probabilidad de ser elegido).
- Selección aleatoria.

Como podemos ver, es un mecanismo que favorece a los mayores poseedores de monedas y este a su vez espera que actúen de buena fe y castiga severamente a aquellos que no siendo la recompensa mucho menor que el riesgo.

## Delegated Proof of Stake (DPoS)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/OVKAOwzAwHI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

El software EOSIO utiliza el único conocido Algoritmo de Consenso Descentralizado probado capaz de cumplir los requerimientos de rendimiento de las aplicaciones en el blockchain, **Delegated Proof of Stake (DPoS)**. Bajo este algoritmo, aquellos que mantienen token en el blockchain adoptando el software EOSIO pueden seleccionar los productores de bloques através de un sistema de aprobación continua. Cualquiera que elija participar en la producción de bloques tendrán la oportunidad de producirlos, siempre que puedan persuadir a los titulares de tokens para que voten por ellos.

 - [DPOS Algoritmo de Consenso](https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper)

EOSIO delegará la autoridad para validar y escribir nuevos bloques a un grupo de nodos que llamamos [Productores de Bloques](#qué-es-un-productor-de-bloques).

## Diferencias entre los Mecanismos

|Aspecto | Proof of Work (PoW) | Proof of Stake (PoS) | Delegate Proof of Stake (DPoS) |
|  :----  |  :----:  |   :----:  |   :----:  |  
| Requisitos de equipo | Equipos especializados | Equipo con conexion a internet | Equipo con conexion a internet |  
| Quien se encarga de validar las transacciones | Son validadas por el primer minero en encontrar la solucion | La persona escogida por el sistema | El delegado escogido |
| Como se escoge el validador | Los mineros compiten tratando de resolver el problema matematico | La persona con mayor cantidad de stake o edad de stake | Se realizan elecciones dentro de la comunidad y se otorga el stake al delegado escogido |
| Principales fortalezas | Es un mecanismo muy seguro | Es mas amigable con los usuarios e involucra mas a la comunidad | Permite una mayor democracia por parte de la comunidad |
| Principales retos | Es extremadamente costoso | Favorece a aquellos con mayores recursos | Requiere una comunidad muy involucrada |

## ¿Qué es un productor de bloques?

Los productores de bloques proveen la infraestructura requerida para procesar las transacciones. Algunos productores de bloques operan con sus propios equipos físicos, mientras otros proveen servicios utilizando servicios en la nube de terceros.

### Explicando el rol de un productor de bloques de EOS

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/YLt5uexD9gg" frameborder="0" allowfullscreen="true"> </iframe>
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

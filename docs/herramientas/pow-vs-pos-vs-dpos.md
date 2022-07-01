---
id: pow-vs-pos-vs-dpos
title: PoW vs PoS vs DPoS
sidebar_label: PoW vs PoS vs DPoS
---

Es necesario cuales han sido los mecanismos de consenso utilizados por las distintas redes blockchain para mantener la seguridad e integridad dentro de la red, asi como los beneficios y las redes que aun la conforman.

## Proof of Work (PoW)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/3EUAcxhuoU4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Es el primer mecanismo de consenso presentado por Satoshi Nakamoto en el whitepaper del Bitcoin en el 2008, en este consenso un grupo de transacciones denominadas "Mempool" son verificadas por los "mineros", los cuales resuelven un complejo problema matemático (mismo que aumenta en complejidad entre más se validen bloques) por lo que se requieren equipos de cómputo en este caso de "minería" especializados y a su vez grandes cantidades de energía.

El primer minero que encuentre la solución al problema y esta sea probada por los demás mineros obtiene el derecho de agregar el "Mempool" al blockchain y obtener una recompensa de bloque o "Block reward" compuesta por criptomonedas generadas por las comisiones de transacción.

Debido a los altos requerimientos para poder "minar" se han formado grupos de minado o "Pool mining" con el de fin de lograr encontrar la solución al problema matemático con la utilización de recursos, con ello tener mejores oportunidades de encontrar la solución primero que los mineros individuales con mayores recursos y la recompensa obtenida es repartida entre los miembros del pool.

En la actualidad las redes que utilizan este mecanismo de consenso son:

- Bitcoin.
- Ethereum (En un futuro es posible que cambie a PoS).
- Monero.
- Entre otras.

Si se desea obtener más información puede visitar el siguiente [enlace](https://guias.eoscostarica.io/docs/herramientas/glosario#proof-of-work).

## Proof of Stake (PoS)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/psKDXvXdr7k" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Este mecanismo de consenso nace con el 2011 con el fin de eliminar aquellas limitaciones presentes en su antecesor proof of work, teniendo en lugar de "mineros" que requieren recursos para la verificación de transacciones tales como equipos especializados y grandes cantidades energía a los "validadores" los cuales son dueños de monedas y ponen como colateral ["Stake"](https://guias.eoscostarica.io/docs/herramientas/glosario/#stake) cierta cantidad de monedas, siendo escogido de manera aleatoria los validadores responsables de "validar" o "minar" en caso de que exista un validador corrupto perderá el stake y no podrá ser validador en el futuro.

Para la validación de transacciones se requieren que 2/3 (Este dato puede variar según la red) del total de los validadores aprueben y el bloque de transacciones. Para la elección de los validadores se toma en consideración los siguientes aspectos:

- Cantidad de moneda (Entre más alta sea cantidad mayor la probabilidad de ser elegido).
- Edad de las monedas apostadas, una vez utilizadas se reinicia a 0 (Entre más tiempo sin ser utilizadas mayor la probabilidad de ser elegido).
- Selección aleatoria.

Como podemos ver, es un mecanismo que favorece a los mayores poseedores de monedas y este a su vez espera que actúen de buena fe y castiga severamente a aquellos que no siendo la recompensa mucho menor que el riesgo.

En la actualidad las redes que utilizan este mecanismo de consenso son:

- Dash.
- Ethereum (En un futuro).
- EOS / EOSIO.
- Entre otras.

## Diferencias entre los Mecanismos

|Aspecto | Proof of Work (PoW) | Proof of Stake (PoS) | Delegate Proof of Stake (DPoS) |
|  :----  |  :----:  |   :----:  |   :----:  |  
| Requisitos de equipo | Equipos especializados | Equipo con conexión a internet | Equipo con conexión a internet |  
| Quien se encarga de validar las transacciones | Son validadas por el primer minero en encontrar la solución | La persona escogida por el sistema | El delegado escogido |
| Como se escoge el validador | Los mineros compiten tratando de resolver el problema matemático | La persona con mayor cantidad de stake o edad de stake | Se realizan elecciones dentro de la comunidad y se otorga el stake al delegado escogido |
| Principales fortalezas | Es un mecanismo muy seguro | Es más amigable con los usuarios e involucra más a la comunidad | Permite una mayor democracia por parte de la comunidad |
| Principales retos | Es extremadamente costoso | Favorece a aquellos con mayores recursos | Requiere una comunidad muy involucrada |

Si desea aprender más sobre Delegate Proof of Stake (DPoS) puede visitar el siguiente [enlace](https://guias.eoscostarica.io/docs/aprender-eosio/mecanismo-de-consenso#delegated-proof-of-stake-dpos).
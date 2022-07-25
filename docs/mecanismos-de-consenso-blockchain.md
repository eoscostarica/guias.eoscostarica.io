---
id: mecanismos-de-consenso-blockchain
title: Algoritmos de Consenso Blockchain
sidebar_label: Mecanismos de Consenso
description: Definición y explicaciones con temas relacionados a los mecanismos de consenso en protocolos Blockchain
keywords: [Algoritmo de Consenso, Mecanismos de Consenso, DPoS, POS, POW, Proof of Work, Delegated Proof of Stake, Proof of Stake, Protocolos Blockchain]
---

Es importante tener conocimiento sobre cuales han sido los mecanismos de consenso utilizados por las distintas redes blockchain para mantener la seguridad e integridad dentro de la red, asi como los beneficios y las redes que aun la conforman.

## Proof of Work (PoW)

<figure className="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/3EUAcxhuoU4"  frameBorder="0" allowFullScreen loading="lazy"> </iframe>
</figure>

Es el primer mecanismo de consenso presentado por Satoshi Nakamoto en el whitepaper del Bitcoin en el 2008, en este consenso un grupo de transacciones denominadas "Mempool" son verificadas por los "mineros", los cuales resuelven un complejo problema matemático (mismo que aumenta en complejidad entre más se validen bloques) por lo que se requieren equipos de cómputo en este caso de "minería" especializados y a su vez grandes cantidades de energía.

El primer minero que encuentre la solución al problema y esta sea probada por los demás mineros obtiene el derecho de agregar el "Mempool" al blockchain y obtener una recompensa de bloque o "Block reward" compuesta por criptomonedas generadas por las comisiones de transacción.

Debido a los altos requerimientos para poder "minar" se han formado grupos de minado o "Pool mining" con el de fin de lograr encontrar la solución al problema matemático con la utilización de recursos, con ello tener mejores oportunidades de encontrar la solución primero que los mineros individuales con mayores recursos y la recompensa obtenida es repartida entre los miembros del pool.

En la actualidad las redes que utilizan este mecanismo de consenso son:

- Bitcoin.
- Ethereum (En un futuro es posible que cambie a PoS).
- Monero.
- Entre otras.

Si se desea obtener más información puede visitar el glosario [Proof of Work](https://guias.eoscostarica.io/docs/herramientas/glosario#proof-of-work).

## Proof of Stake (PoS)

<figure className="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/psKDXvXdr7k"  frameBorder="0" allowFullScreen loading="lazy"> </iframe>
</figure>

Este mecanismo de consenso nace con el 2011 con el fin de eliminar aquellas limitaciones presentes en su antecesor proof of work, teniendo en lugar de "mineros" que requieren recursos para la verificación de transacciones tales como equipos especializados y grandes cantidades energía a los "validadores" los cuales son dueños de monedas y ponen como colateral ["Stake"](https://guias.eoscostarica.io/docs/herramientas/glosario/#stake) cierta cantidad de monedas, siendo escogido de manera aleatoria los validadores responsables de "validar" o "minar" en caso de que exista un validador corrupto perderá el stake y no podrá ser validador en el futuro.

Para la validación de transacciones en EOSIO se requiere una mayoría de 2/3+1 para el consenso (Este dato puede variar según la red) del total de los validadores aprueben y el bloque de transacciones. Para la elección de los validadores se toma en consideración los siguientes aspectos:

- Cantidad de tokens (Entre más alta sea cantidad mayor la probabilidad de ser elegido).
- Edad de las monedas apostadas, una vez utilizadas se reinicia a 0 (Entre más tiempo sin ser utilizadas mayor la probabilidad de ser elegido).
- Selección aleatoria.

Como podemos ver, es un mecanismo que favorece a los mayores poseedores de monedas y este a su vez espera que actúen de buena fe y castiga severamente a aquellos que no siendo la recompensa mucho menor que el riesgo.

En la actualidad las redes que utilizan este mecanismo de consenso son:

- Dash.
- Ethereum (En un futuro).
- EOS / EOSIO.
- Entre otras.

## Diferencias entre los Mecanismos

|Aspecto | Proof of Work (PoW) | Proof of Stake (PoS) | Delegated Proof of Stake (DPoS) |
|  :----  |  :----:  |   :----:  |   :----:  |  
| Requisitos de equipo | Equipos especializados | Equipo con conexión a internet | Equipo con conexión a internet |  
| Quien se encarga de validar las transacciones | Son validadas por el primer minero en encontrar la solución | La persona escogida por el sistema | El delegado escogido |
| Como se escoge el validador | Los mineros compiten tratando de resolver el problema matemático | La persona con mayor cantidad de stake o edad de stake | Se realizan elecciones dentro de la comunidad y se otorga el stake al delegado escogido |
| Principales fortalezas | Es un mecanismo muy seguro | Es más amigable con los usuarios e involucra más a la comunidad | Permite una mayor democracia por parte de la comunidad |
| Principales retos | Es extremadamente costoso | Favorece a aquellos con mayores recursos | Requiere una comunidad muy involucrada |

Si desea aprender más sobre Delegated Proof of Stake (DPoS) puede visitar el mecanismo de consenso [Delegated Proof of Stake](https://guias.eoscostarica.io/docs/aprender-eosio/mecanismo-de-consenso#delegated-proof-of-stake-dpos).

## Otros Mecanismos de Consenso

Hay otros mecanismos de consenso que no son tan populares en las comunidades de blockchain como las anteriores, las cuales son  las siguientes:  

### Proof of Capacity (PoC)

Este mecanismo al igual que el proof of work se realiza el minado, pero como diferencia principal es el uso de discos duros como principal recurso de poder computacional. Solucionando problemáticas de PoW y PoS debido a la mayor capacidad con los discos duros.

### Proof of Activity (PoA)

Este mecanismo utiliza las mejores características de PoW y PoS siendo un ejemplo que se valida un bloque de transacciones por medio del minado (PoW) se cambia al sistema de elección de validadores (PoS) una vez validado se cambia al sistema de minado.

### Proof of Burn (PoB)

Este mecanismo nació como solución al alto gasto energético por parte de PoW, haciendo uso de la idea de la quema de energía, al validar un bloque de transacciones se "queman" tokens para obtener más potencia de minado como aparejo, cuantos más tokens se quemen más potencia se obtiene.

### Proof of History (PoH)

Este mecanismo nace con una propuesta muy antigua, pero diferente a los mecanismos anteriores, ya que registra el tiempo y la hora exacta entre 2 eventos en una función hash, aunque sería imposible cambiar el registro en todos los ordenadores de la red.

### Proof of Elapsed Time (PoET)

Este mecanismo nació como una solución de Intel a la ventaja que obtienen los que tienen más recursos a la hora de buscar el sistema de elección del validador de bloques más justo, como una lotería dentro de la red se asignan los validadores.

Si quiere saber más sobre los diferentes mecanismos de consenso, puede visitar [Mecanismos de Consenso Que Debería Conocer](https://www.allerin.com/blog/8-blockchain-consensus-mechanisms-you-should-know-about).

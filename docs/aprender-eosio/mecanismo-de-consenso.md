---
id: mecanismo-de-consenso
title: Mecanismo de Consenso
sidebar_label: Mecanismo de Consenso
---

El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la única versión de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo común que sea una aceptado por toda la red.


## Productores de Bloques Activos

Los nodos autorizados como productores de bloques activos pertenecen a un grupo que comparte la responsabilidad de validar y escribir todas las acciones en la red.

Son capaces de reconocer las firmas de los nodos escritores y verificar que las transacciones hayan sido transmitidas a la red por nodos autorizados mediante listas blancas en contratos inteligentes.

Una red EOSIO esta configurada por defecto para utilizar 21 productores activos y una serie productores de reserva para una operación estable.


>EOSIO permite hasta 125 productores de bloque activos, especificado mediante max_producers en [config.hpp](https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106)

### Cronograma de producción

En redes EOSIO, los productores de bloques activos se enumeran en un cronograma, llamado `schedule`

La lista de cuentas de productores en el `schedule` se ordena alfabéticamente y así se define la secuencia en que deben firmar bloques.

Cada productor recibe una ventana de 12 bloques para firmar antes de que el siguiente productor inicie su ventana. Los bloques nuevos son producidos por el primer nodo en la lista durante un periodo de 6 segundos (12 bloques) y luego pasa el siguiente nodo a producir los siguientes 12 bloques y así sucesivamente.

Si un nodo productor no está listo o no está disponible, no hay nadie para producir los 12 bloques, por lo que todas las transacciones especulativas se retrasan hasta que el próximo productor comience a firmar.

### Tolerancia a fallas bizantinas

Los bloques no se consideran irreversibles en la cadena hasta que hayan sido validados por 2/3 +1 de los productores activos. De tal manera que si un productor del grupo inserta un bloque invalido los nodos siguientes lo rechazaran y las transacciones y no serán incluidas sin que 2/3 +1 hayan validado ese bloque.

>**Ejemplo:** Una red de 21 productores activos requiere validación de 15 nodos (2/3 +1), lo cual toma en promedio 90 segundos para obtener irreversibilidad de un bloque nuevo.

### Tolerancia a fallas en nodos

Una vez que se firma un bloque, otros productores lo validan en el cronograma y pasa a un estado irreversible después de que 2/3 + 1 productores lo hayan validado. Entonces, si 1/3 o más de todos los productores están fuera de línea, el último número de bloque irreversible, conocido como "Last Irreversible Block" o LIB, no aumentaría y la cadena de bloques se detendrá.

Los servidores a veces fallan, y a veces deben ser retirados de operación para actualizaciones de software y mantenimiento del sistema, lo que es importante considerar en redes EOSIO pequeñas.

Con solo 5 productores, la red tolerará que 1 productor se desconecte. Si más de uno está fuera de línea, el número del **último bloque irreversible (LIB)** dejará de moverse y la red se detendrá. Con 4 nodos, la interrupción de un nodo interrumpirá la operación. Con 9 productores, dos nodos pueden desconectarse sin romper la red.

Es importante que las llaves privadas de producción estén respaldadas correctamente. Si se pierden llaves de productores de bloques debido a un desastre del sistema, existe la posibilidad de que la red deje de funcionar para siempre.

## Productores de Bloques de Reserva

Las redes EOSIO manejan un grupo de nodos productores de bloques registrados que pueden asumir el rol de productores de bloques con solo ser agregado al `schedule` de productores activos.

### Rotación de nodos activos

La rotación periódica de nodos productores de bloques activos favorece la descentralización Existe una herramieta que permite seleccionar los productores de bloques que se desea incluir o excluir en el `schedule`.

>**Por ejemplo:** Se puede definir una política de rotación de nodos activos semanalmente.

Mas adelante se habilitrá la rotación periódica y automática basada en contratos inteligentes. De tal forma que sea imposible predecir quienes sean los productores de bloques activos seleccionados. (entropía externa)

### Sustitución de un Productor de Bloques activo

En caso de que algún nodo del grupo principal dejará de responder. Se podrá reemplazar manualmente los productores de bloques que presenten problemas de rendimiento o seguridad.

## Contratos de sistema EOSIO a la medida

Un contrato inteligente es un código que se puede ejecutar en una cadena de bloques y mantener el estado de ejecución del contrato como parte del historial inmutable de esa instancia de la cadena de bloques. Por lo tanto, los desarrolladores pueden confiar en esa cadena de bloques como un entorno de computación confiable en el que las entradas, la ejecución y los resultados de un contrato inteligente son independientes y libres de influencia externa.


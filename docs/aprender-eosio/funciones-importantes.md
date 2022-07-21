---
id: funciones-importantes
title: Funciones Importantes en EOSIO
sidebar_label: Funciones Importantes
description: Funciones Importantes en EOSIO
keywords: [funciones importantes, EOSIO, EOS, EOS Costa Rica, Funciones EOSIO]
---

## Cuenta Privilegiada EOSIO

Esta cuenta tiene acceso ilimitado a los recursos de CPU, NET y RAM que representan la máxima autoridad de la red que puede ejecutar funciones privilegiadas.

Por lo general, esta autoridad se invoca mediante un contrato de firma múltiple (o "firma múltiple") que requerirá el consentimiento de una supermayoría de los productores de bloques. Esta cuenta privilegiada se llamará cuenta `eosio`.

## Funciones Privilegiadas EOSIO

Los contratos inteligentes de EOSIO son simples archivos de WebAssembly. El formato WebAssembly permite definir importaciones, funciones que no se declaran en WASM en sí pero en el entorno en el que se ejecuta el código de WebAssembly. EOSIO utiliza estas funciones integradas (intrínsecas) para intercambiar datos entre el código de contrato de WebAssembly y el nodo EOSIO `nodeos`. Cada vez que la máquina virtual EOS (EOSVM), que ejecuta el código de WebAssembly, llega a un nivel intrínseco, el control del programa se transfiere al código del controlador de nodo para resolverlo. Una lista completa de funciones intrínsecas para EOSIO 2.0.X se puede encontrar en el siguiente enlace: [Funciones Intrínsecas EOSIO](https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160).

### set_resource_limits

Actualiza los limites de recursos asociados a una cuenta.

``` yaml
account:  La cuenta destino
ram_bytes:  El limite de RAM en bytes
net_weight:  El weight para determinar su capacidad de NET
cpu_weight:  El weight para determinar su capacidad de CPU
```

### set_prods

Establece una nueva lista de productores(validadores) activos. Una vez que el bloque con la propuesta se vuelve irreversible los nuevos productores se vuelven activos.

``` yaml
schedule: JSON con lista de productores y sus signing keys
```

### set_params

Modifica uno o varios parámetros de la blockchain.

- `max_block_net_usage`: La cantidad maxima de uso de net en un bloque.
- `target_block_net_usage_pct`: El porcentaje de uso máximo de net, pasado este limite la red entra en modo congestion.
- `max_transaction_net_usage`: El uso máximo de net que la chain va a permitir, mas allá de los limites de la cuenta.
- `base_per_transaction_net_usage`: El monto base de uso neto facturado por una transacción para cubrir imprevistos.
- `context_free_discount_net_usage_num`: El numerador para el descuento en el uso neto de datos sin contexto.
- `context_free_discount_net_usage_den`: El denominador para el descuento en el uso neto de datos sin contexto.
- `max_block_cpu_usage`: El uso máximo de la CPU facturable (en microsegundos) para un bloque.
- `target_block_cpu_usage_pct`: El porcentaje objetivo (1% == 100, 100% = 10,000) del uso máximo de CPU; exceder esto desencadena el manejo de la congestión.
- `max_transaction_cpu_usage`: El uso máximo de CPU facturable (en microsegundos) que la cadena permitirá independientemente de los límites de la cuenta.
- `min_transaction_cpu_usage`: El uso mínimo de CPU facturable (en microsegundos) que requiere la cadena.
- `max_transaction_lifetime`: El número máximo de segundos que la caducidad de una transacción de entrada puede adelantarse a la hora del bloque en el que se incluye por primera vez.
- `deferred_trx_expiration_window`: El número de segundos después del tiempo en que una transacción diferida puede ejecutarse primero hasta que caduque.
- `max_transaction_delay`: El número máximo de segundos que pueden imponerse como requisito de retraso mediante verificaciones de autorización.
- `max_inline_action_size`: Tamaño máximo permitido (en bytes) de una acción en línea.
- `max_inline_action_depth`: Límite de profundidad de recursion al enviar acciones en línea.
- `max_authority_depth`: Límite de profundidad de recursion para verificar si una autoridad está satisfecha.

### set_privileged

Permite establecer como privilegiada a una cuenta.

```yaml
account: La cuenta que se quiere setear como privilegiada.
is_priv:  0 para falso, mayor a 0 para verdadero.
```

## Acciones de Sistema

Estas acciones no requieren ser ejecutadas por una cuenta privilegiada.

### new_account

Crea una cuenta nueva.

```yaml
creator: Nombre de la cuenta que crea la cuenta nueva.
name: Nombre de la cuenta nueva.
owner: Owner public key.
active: Active public key.
```

### set code

Set code establecer o actualizar un contrato inteligente en una cuenta.

```yaml
account: La cuenta a la que se desea publicar un contrato.
code: El código en forma de BLOB binario.
```

### set abi

Permite establecer o actualizar el abi para el contrato inteligente, se identifica por account_name.

```yaml
account: El nombre de la cuenta destino.
abi:  El abi.
```

### updateauth

Actualiza los permisos de una cuenta.

```yaml
account:  La cuenta que se desea modificar.
pemission:  El nombre del nuevo permiso.
parent: El permiso padre del nuevo permiso.
auth: El json definiendo la autorización de permisos.
```

### deleteauth

elimina la autorización de permisos de una cuenta.

```yaml
account: La cuenta destino.
permission: El nombre del permiso que se desea eliminar.
```

### linkauth

Asigna una acción especifica de un contrato a un permiso especifico, cinco acciones no pueden ser linkeadas `updateauth`, `deleteauth`, `linkauth`, `unlikauth`, `canceldelay`.

```yaml
account: Cuenta destino.
code: Cuenta owner de la acción que se desea linkear.
type: La acción que se desea linkear.
requirement: El permiso a linkear.
```

### unlinkauth

Es la reversa de linkauth.

```yaml
account: Cuenta destino.
code: Cuenta owner de la acción que se desea deslinkear.
type: La acción que se desea deslinkear.
```

## Contrato Nativo `eosio.token`

Estas acciones pueden ser ejecutadas por cualquier cuenta con el fin de emitir un token propio.

### create

Le permite a una cuenta issuer crear un token.

```yaml
issuer: La cuenta que crea el token.
maximum_supply: La cantidad maxima junto al símbolo del token.
```

### issue

Esta acción distribuye a una cuenta una cantidad de tokens determinada.

```yaml
to: Cuenta a la que se distribuyen los tokens.
quantity: La cantidad de tokens a distribuir.
memo: memo que acompaña la distribución inicial de tokens.
```

### retire

El opuesto a crear un token.

```yaml
quantity: La cantidad de tokens a retirar.
memo : El memo que acompaña la transacción.
```

### transfer

Transfiere de una cuenta origen a una cuenta destino una cantidad "n" de tokens.

```yaml
from: Cuenta origen desde donde se debitan los tokens.
o: Cuenta destino a la que acreditar los tokens.
quantity: La cantidad de tokens.
memo: Memo que acompaña la transacción.
```

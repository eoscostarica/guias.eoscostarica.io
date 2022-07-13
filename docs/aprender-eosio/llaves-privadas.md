---
id: llaves-privadas
title: Manejo de Llaves Privadas
sidebar_label: Llaves Privadas
description: Manejo de Llaves Privadas en blockchain
keywords: [llaves privadas, blockchain, eosio, EOS, EOS Costa Rica, manejo de llaves privadas, Qué es una llave privada, Para qué es una llave privada]
---

## Crear Cuenta en el Blockchain Público

En la mayoría de las billeteras puede generar nuevas llaves para EOSIO, en esta guía crearemos claves en el terminal. Ejecutemos el comando `cleos` para generar las claves criptográficas necesarias para crear una cuenta. Para crear una cuenta en Jungle Testnet.

## Generar y Gestionar las Llaves

Para generar llaves, requisito para crear una cuenta en una blockchain, vamos a correr el comando `cleos create key` en la terminal. Este comando nos va a generar llaves privadas y públicas — podemos crear la cantidad de llaves que queramos. Las cuentas cleos, por defecto, vienen en pares: una `active key` y una `owner key` (para recuperar cuenta en caso de perder la active key).

Una vez generadas las llaves, nos dirigimos al sandbox, Jungle Testnet, para crear la cuenta. El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la A a la Z en minúscula, números del 1 al 5 y tener una longitud de 12 caracteres. Para el ejemplo, llamaremos la cuenta: `holacontrato`.

Luego, introducimos las llaves públicas de `owner` y `active` para ejecutar el contrato. Estas pueden ser cualquiera de las que se generaron con el comando `cleos create key` anteriormente. Se recomienda no compartir las llaves privadas.

## Administrar la Billetera con Cleos

Una vez creada la cuenta, debemos generar la billetera e identificarla con el nombre de la cuenta, que en este ejemplo es `holacontrato`, mediante el comando `cleos wallet create -n holacontrato --to-console`.

En este momento, las llaves están guardadas únicamente en la consola, por lo que es necesario crear la billetera que contendrá las llaves. De esta manera, se podrá acceder a estas llaves con una única contraseña. Hay que importar las llaves en la billetera una a la vez, siguiendo el comando: `cleos wallet import` y añadiendo el nombre de la cuenta.

## Autenticadores Externos (Wallets)

La última actualización importante para EOSJS incluyó soporte incorporado para proveedores de firmas intercambiables; eliminando la carga de manejar la gestión segura de claves de su alcance y mejorando la inter-operabilidad. Lo que es más importante, esta es una mejora importante de seguridad que limita la exposición de las claves de un usuario en muchas aplicaciones a un único proveedor de firmas confiable que mitiga los riesgos potenciales que pueden surgir de un código malicioso o un error del usuario al usar aplicaciones blockchain.
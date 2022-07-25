---
id: cuentas-permisos
title: Cuentas y Permisos de EOSIO
sidebar_label: Cuentas y Permisos
description: Cuentas y Permisos para el uso de EOSIO
keywords: [cuentas permisos, Cuentas y Permisos, cuentas, permisos, EOSIO, EOS, EOS Costa Rica, Para qué son los permisos EOSIO]
---

## Cuentas

Una **cuenta** en EOSIO es un nombre legible para humanos que se almacena en la cadena de bloques. Puede ser propiedad de un individuo o grupo de individuos dependiendo de la configuración de los permisos. Se requiere una cuenta para transferir o enviar cualquier transacción válida a la cadena de bloques.

El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la `a` a la `z` en minúscula, números del `1` al `5` y tener una longitud de 12 caracteres. Por ejemplo : `cuentaeosio1`.

Más infomación sobre [ creación de cuenta EOSIO](https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-create-an-account).

## Permisos

EOSIO permite crear permisos jerárquicos personalizados que se derivan del permiso `owner`. Un permiso personalizado es básicamente una llave que solo puede realizar las acciones que se le permite realizar.

> **Por ejemplo**: Cualquier cuenta puede crear un permiso personalizado con su par de llaves únicas para interactuar únicamente con un contrato.

De esta manera, EOSIO ofrece capacidades de permisos de última generación con una gran flexibilidad para configurar un protocolo simple o complejo integrado en el protocolo base.

Los permisos de la cuenta también fortalecen la seguridad en caso de que alguien que no esté autorizado obtenga una llave privada, lo único que puede hacer son las acciones que la clave se ha limitado a ejecutar.

## Autorizaciones

Una cuenta puede definir una asignación entre cualquiera de sus permisos nombrados y un contrato inteligente o acción dentro de ese contrato. Esto permite un control más preciso sobre las autorizaciones de acción, lo que facilita mucho que las cuentas que pertenecen a actores con diferentes roles dentro de una organización reflejen la estructura organizativa en la cadena de bloques.

En otras palabras, el permiso de cada cuenta se puede vincular a una tabla de autoridad utilizada para determinar si se puede satisfacer una autorización de acción determinada.

Para obtener más información sobre estos conceptos, consulte [documentación de cuentas y permisos](https://developers.eos.io/welcome/v2.1/smart-contract-guides/before-you-begin/accounts-and-permissions).


## Autenticado (Wallets)

Las billeteras son clientes que almacenan llaves privadas asociadas con los permisos de una o más cuentas. Idealmente, una billetera tiene un estado bloqueado (encriptado) y desbloqueado (sin encriptar) que está protegido por una contraseña de alta entropía.

### Capa de Acceso al Wallet de Tránsito
Esta biblioteca es una pequeña capa de abstracción sobre `eosjs` que tiene como objetivo ayudar a los desarrolladores de EOS dApp (aplicación descentralizada) con la comunicación de billetera (verificación y aceptación de firma) al proporcionar una API simple e intuitiva.

En lugar de centrarse en admitir proveedores de firmas específicos uno por uno, los desarrolladores pueden admitir a todos los que han creado un complemento de Transit, lo que permite al usuario utilizar su proveedor de firmas de elección. De esta manera, gana el mejor UX para proveedores de firmas y los desarrolladores pueden centrarse en construir su dApp en lugar de configurar conexiones `eosjs` y de billetera.

Consulte la **Guía de inicio rápido** y la guía completa en los documentos del paquete [eos-transit](https://github.com/eosnewyork/eos-transit).

## Biblioteca de Autenticación Universal

Existe una biblioteca que permite a las aplicaciones usar fácilmente diferentes proveedores de autenticación. Los desarrolladores de aplicaciones deben admitir muchos proveedores de autenticación (billeteras) para maximizar el alcance del usuario y permitir la elección del usuario.

La librería [Universal Authenticator Library (UAL)](https://github.com/EOSIO/universal-authenticator-library) logra este objetivo al abstraer la lógica comercial interna de muchos proveedores de autenticación y exponer una única API universal.

### Autenticadores Disponibles:

- [UAL for Scatter](https://github.com/EOSIO/ual-scatter)
- [UAL for Lynx](https://github.com/EOSIO/ual-lynx)
- [UAL for Ledger](https://github.com/EOSIO/ual-ledger)
- [UAL for Token Pocket](https://github.com/EOSIO/ual-token-pocket)
- [UAL for MEET.ONE](https://github.com/meet-one/ual-meetone)
- [UAL for Anchor](https://github.com/greymass/ual-anchor)

## KEOSD

En la distribución de EOSIO viene incluido un cliente CLI llamado [cleos](https://developers.eos.io/manuals/eos/latest/cleos/index) que interactúa con un cliente llamado [keosd](https://developers.eos.io/manuals/eos/latest/keosd/index) que proporciona un servicio de billetera seguro y un punto final API para aplicaciones que requieren integración de back-end con un proveedor de firmas digitales.

## Permisos de EOSIO

Los permisos de EOSIO hacen posible fortalecer la seguridad de la cuenta al punto donde la pérdida o robo de las llaves son nada más que pequeñas inconveniencias. Este episodio semanal de EOS cubre qué son los permisos de EOSIO a un nivel conceptual y la tendencia a redes de cuentas interconectadas fuertes.

<figure className="video_container">
  <iframe 
    width="100%" 
    height="315" 
    src="https://www.youtube.com/embed/kTjF0-Edxw8"     
    frameBorder={0}
    allowFullScreen
    loading="lazy"> </iframe>
</figure>
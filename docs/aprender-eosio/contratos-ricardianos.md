---
id: contratos-ricardianos
title: ¿ Qué son los Contratos Ricardianos ?
sidebar_label: Contratos Ricardianos
description: Definiciones y explicaciones de contratos ricardianos.
keywords: [Contrato ricardiano, contratos blockchain, eos, eosio, Cómo crear un contrato Ricardiano, HTML de Contrato Ricardiano, Contrato Ricardiano React]
---

## ¿Qué son los contratos ricardianos?
Son documentos digitales que definen los términos y condiciones entre los involucrados en el contrato, estos están firmados y verificados criptográficamente y pueden ser leídos tanto por humanos como por sistemas informáticos.

### Características de estos Contratos
- Lectura humana y de software.
- Se puede imprimir.
- Todas las formas de documentos (físicos, virtuales, encriptados) son equivalentes.
- Están firmados por todas las partes.
- Se pueden identificar de forma segura gracias a las características de cada contrato.

### Contratos Ricardianos en EOSIO
Las cadenas de bloques operan bajo contratos inteligentes, sin embargo, se está trabajando para incluir los contratos ricardianos en las transacciones de estas redes. Uno de los objetivos principales es convertir la complejidad del código observado dentro de la tecnología Blockchain en un lenguaje más simple para que cualquiera pueda entenderlo.

EOS Costa Rica ha desarrollado un componente de React que renderiza contratos ricardianos para contratos inteligentes en redes EOSIO. Puede ver el componente de React en el siguiente enlace [Contratos Ricardianos](https://components.edenia.cloud/?path=/story/example-ricardian-contract--example). En ese enlace, vaya a la sección `Knobs` para modificar` httpEndpoint` y `contractName`. Una vez hecho esto, consulte el Contrato Ricardiano para un Contrato Inteligente. Por ejemplo, configure:
```
httpEndpoint: https://jungle.edenia.cloud
contractName: eosio
```
El componente cargará automáticamente el contenido del Contrato Ricardiano. El repositorio de código abierto para este componente se encuentra aquí: https://github.com/eoscostarica/eoscr-components.

## ¿Cómo añadir un Contrato Ricardiano?
El proceso es parecido a la compilación de un Smart Contract, de hecho, se realiza durante el mismo paso. eosio-cpp brinda algunas opciones de configuración extra al compilar y una de ellas es `-R`, que permite configurar un recurso extra que para este caso es el contrato ricardiano donde se debe proporcionar la ruta ricardiana, el compilador será el responsable de agregar los contratos y las cláusulas al archivo .abi.

## ¿Cómo crear un Contrato Ricardiano?
Usualmente hay un folder llamado `ricardian` dentro del folder del smart contract el cual contiene dos archivos principales que componen el Contracto Ricardiano `<contract name>.contracts.md` y `<contract name>.clauses.md`.
    
### Contracts
Su propósito es declarar y definir las acciones del Smart Contract. Según [EOSIO ricardian-spec](https://github.com/EOSIO/ricardian-spec) se deben respetar los siguientes metadatos:

- spec_version
- title
- summary
- icon

Por ejemplo:
```
<h1 class="contract">Create Post</h1>
spec_version: 0.0.0
title: Create Post
summary: Create a blog post "{{title}}" by {{author}} tagged as "{{tag}}"
icon: https://app.com/create-post.png#00506E08A55BCF269FE67F202BBC08CFF55F9E3C7CD4459ECB90205BF3C3B562
```

### Clauses
Su propósito es declarar y definir las cláusulas y reglas del Smart Contract. Es más sencillo de crear, por ejemplo:

```
<h1 class="clause">UserAgreement</h1>

User agreement for the chain can go here.
```
Más ejemplos en [EOSIO eosio.system](https://raw.githubusercontent.com/EOSIO/eosio.contracts/master/contracts/eosio.system/ricardian/eosio.system.clauses.md).

## Proceso de Compilación
Para compilar un Smart Contract con su respectivo Contrato Ricardiano, se debe ejecutar el siguiente comando añadiendo la bandera `-R`:

```
eosio-cpp -abigen -R ./ricardian -contract contracttest -o contracttest.wasm src/contracttest.cpp
```

Visite [Cómo trabajan los Contratos Inteligentes de EOS](https://es.cointelegraph.com/eos-101/how-eos-smart-contracts-work) para ver más contenido sobre este tema.

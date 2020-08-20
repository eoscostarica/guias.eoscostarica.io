---
id: contratos-inteligentes
title: Contratos Inteligentes
sidebar_label: Contratos Inteligentes
---

Un contrato es un acuerdo que rige los resultados de las acciones una vez dado un conjunto de datos de entrada o lo que se le denomina "inputs". Un contrato puede ir desde los tipo legal (ejemplo transacciones financieras) hasta algo más simple como las reglas de un juego. Las acciones típicas pueden ser transacciones de fondos (en el caso de un contrato financiero) o movimientos de juegos (en el caso de un contrato de juego).

Un Contrato Inteligente de EOSIO es software registrado en el blockchain y ejecutado en los nodos de EOSIO, esto implementa las semánticas de un contracto cuyo registro de solicitudes de acciones están siendo guardadas en el blockchain. El Contrato Inteligente define la interfaz (acciones, parámetros, estructuras de datos) y el código que implementa la interfaz. El código es compilado en el formato **bytecode canónico** el cual puede ser obtenido y ejecutado por los nodos. El blockchain guarda las transacciones (tranferencias legales, moviemientos de juego) del contrato. Cada Contrato Inteligente debe ser acompañado de un Contrato Ricardiano que define la legalidad de los términos y condiciones enlazadas del contrato.

Lee más aquí : https://guias.eoscostarica.io/docs/aprender-eosio/cpp-moderno

## Framework de diseño de Contratos Inteligentes

Escazes Digital [github repo](https://github.com/digital-scarcity/equiprental) tiene un ejemplo diseñado para proveer un framework paso a paso y ejemplo de cómmo crear un Contrato Inteligente en EOS. Usa un simple caso de alquiler de equipos que lista el equipo para alquilar y los alquiladores que pagan por el alquier de dicho equipo.

### Pasos del proceso

Aquí se pueden ver los pasos generales para desarrollar un Contrato Inteligente.
![alt text](/img/contracts/steps.png "Steps")

### Modelo de datos

Define la información que persistirá en el Contrato Inteligente.
![alt text](/img/contracts/datamodel.png "Data Model")

### Acciones

Define las acciones o el estado de cambio que deben existir en el Contrato Inteligente.
![alt text](/img/contracts/actions.png "Actions")

### Pre y Post-Condiciones

Define las acciones o el estado de cambios que deben existir en tu Contrato Inteligente.
![alt text](/img/contracts/prepostconditions.png "Pre- and Post-Conditions")

## Contratos Inteligentes de Código Abierto

Nosotros manteneos una lista de Contratos Inteligentes de EOS de código de abierto en el siguiente repositorio:

https://github.com/eoscostarica/eos-contracts

También, échale un vistazo a esta lista de Contratos Inteligenes de EOS de código abierto mantenida por César Rodríguez:

https://github.com/kesar/eos-awesome-contracts


## Esquema de contrato inteligente basico 

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/EbWDHrm2ETY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Puedes ver más en este canal: https://www.youtube.com/user/grandmoren1/videos
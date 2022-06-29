---
id: interplanetary-file-system
title: IPFS (Interplanetary File System)
sidebar_label: IPFS (Interplanetary File System)
---

El IPFS (Interplanetary File System) es un protocolo de red descentralizado que se basa en una red distribuida, esto para crear una relación directa con el método p2p [peer to peer](https://es.wikipedia.org/wiki/Peer-to-peer), el fin de dicho protocolo es almacenar archivos u información de una manera rápida y segura. De esta manera, el IPFS cambia la forma tradicional de almacenamiento de la información pasando de centralizada a descentralizada, trayendo consigo muchos beneficios como el acceso a la información sin depender de un único punto de almacenamiento para su respectivo acceso, aumento de almacenamiento, control de uso de tus propios datos y entre muchos otros beneficios.

<figure 
  class="video_container">
  <iframe
   width="100%" height="315" src="https://www.youtube.com/embed/5Uj6uR3fp-U" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

## Nacimiento de IPFS

IPFS nace con la necesidad de solventar muchos problemas que se ven día con día en el almacenamiento de los datos en internet. Un claro ejemplo es el almacenamiento centralizado, el acaparamiento de datos en un sólo lugar hace que su uso sea más lento dependiendo la cantidad de personas, también si el servidor deja de funcionar no hay forma de utilizar la información hasta que este vuelva a ponerse en marcha. También es muy común el uso de información para venderla a terceros como es el caso de facebook donde venden información de gustos y preferencias sin el consentimiento de los usuarios. Este sistema nace con el fin de dar solución a muchos problemas presentes en el protocolo actual.

El inicio del IPFS se da en el año 2014, donde Juan Benet programador de software crea una empresa llamada Protocol Labs. En el año 2015 Benet anuncia una nueva tecnología la que ya es conocida mundialmente como IPFS. Como se mencionó anteriormente, la idea central era construir una red p2p, de esta manera los usuarios de la misma podrían tanto almacenar como repartir la información a los demás usuarios, de esta manera el protocolo trabaja de forma descentralizada. Para el respectivo almacenamiento la red utiliza tabla de hash distribuida [DHT](https://es.wikipedia.org/wiki/Tabla_de_hash_distribuida) al igual que el protocolo [BitTorrent](https://es.wikipedia.org/wiki/BitTorrent).

## ¿Cómo funciona IPFS?
El sistema está creado para realizar la búsqueda de los datos por el contenido que se está solicitando y no por ubicación que es como se conoce comúnmente. El protocolo actual realiza los siguientes pasos para realizar una búsqueda:

- Primero toma la dirección web para luego consultar al DNS la IP de la ubicación del servidor.
- Ya con la IP en mano se hace la consulta de información del servidor y se inicia la respectiva descarga.
- Luego de la descarga nos muestra la información de dicho servidor.

De esta manera es como funciona el protocolo tradicional, **búsquedas de contenido por ubicación**, en la cual es necesario tener conocimiento de la dirección a la cual se quiere realizar la consulta de los datos. En el caso de IPFS es distinto, como se mencionó anteriormente, el protocolo hace esta búsqueda por contenido. Este sistema utiliza los siguientes pasos para realizar una búsqueda:

- No es necesario saber la dirección, únicamente se busca en el sistema lo	que se necesita.
- El sistema envía a la red de nodos la búsqueda que se está realizando. Esta información está protegida por cifrado, hash y firma digital, esto con el fin de proteger la información y dar acceso únicamente a quién se le de autorización.
- Luego del envío de la búsqueda los nodos responden con información de las versiones disponibles de lo solicitado.
- Al elegir uno de los resultados obtenidos se puede ver tanto su contenido como su historial de la información.

Esa es la manera como trabaja el sistema IPFS, por eso motivo se le conoce como **búsqueda por contenido** ya que simplemente indicamos lo que necesitamos y la red de nodos nos responde con opción de consultar los datos que se vayan a requerir.

## Ventajas y desventajas de IPFS

Algunas de las ventajas son las siguientes:

- Almacenamiento descentralizado por lo que no depende de un sólo lugar para el acceso además de que es accesible en cualquier momento.
- Es escalable, por lo que se le pueden agregar futuras mejoras y funcionalidades.
- Rápido almacenamiento y consulta de datos.
- Mayor capacidad de almacenamiento.
- No hay censura de contenido, al estar descentralizado es imposible que se pueda censurar algún contenido.

Algunas de sus desventajas:
- Es una nueva tecnología que al implementarla traerá consigo algunas complicaciones al querer ejecutarla por completo en internet.
- Aún se encuentra en proceso de mejora y desarrollo.
- Al ser nueva es difícil de utilizar para algunas personas.

## Casos de uso de IPFS

Actualmente existen varios casos de usos de sistemas en los cuales las empresas han decidido innovar utilizando esta nueva tecnología. Esto es debido a la gran cantidad de beneficios que ofrece esta tecnología, algunas empresas que dan uso de este sistema son:    Audius, una plataforma que utiliza la tecnología de IPFS para almacenar sus datos de forma descentralizada donde el artista puede ver quienes escuchan su música por lo que tienen total control en las misma, otra empresa muy reconocida y que está empezando en el uso de esta tecnología para el manejo de sus archivos es Netflix. Estas son sólamente algunas de las varias empresas que se encuentran utilizando este nuevo sistema que apenas está iniciando su impacto en internet.

## Que se espera en el futuro para IPFS
Claramente la tecnología es cambiante y cada vez con más mejoras, nuevas tendencias vienen a sustituir las actuales tecnologías, esto con el fin de solventar errores y problemas que tienen los actuales sistemas. Esta tecnología parece ser una gran candidata para la sustitución del actual protocolo por lo que en un futuro no muy lejano el IPFS va a ser el principal protocolo de la internet debido a su escalabilidad y grandes beneficios que trae para la web.
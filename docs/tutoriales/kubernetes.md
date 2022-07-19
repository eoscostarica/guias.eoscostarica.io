---
id: kubernetes
title: Kubernetes
sidebar_label: Kubernetes
description: definiciones de Kubernetes	
keywords: [ Qué es kubernetes, Cómo funciona Kubernetes, Ventajas de Kubernetes ]
---

Kubernetes es una plataforma de código abierto, que fue creada por Google, utilizada para la gestión, el despliegue, la escalabilidad y el monitoreo de contenedores Docker. 

## Características de Kubernetes:

- Distribución inteligente de contenedores.
- Administración de las cargas de trabajos (provee balanceo de carga).
- Fácil gestión de servicios y aplicaciones.
- Alta disponibilidad.
- Gran flexibilidad y permite trabajo modular.
- Monitoreo de contenedores.

## Arquitectura de Kubernetes

Hay dos roles principales, “master” y “node”. El master se encarga de manejar y orquestar los diferentes micro-servicios entre los 4 nodos disponibles del cluster.

## Esquema de Arquitectura de Kubernetes

![Diagrama de la Arquitectura de Kubernetes](https://user-images.githubusercontent.com/5632966/107062957-724c5c00-679f-11eb-88f0-fb4b884785ab.png)

## Conceptos Clave en k8s

**Cluster:** Es un grupo de dispositivos que pueden ser físicos o virtuales y que se encuentran unidos muchas veces por una red y, por lo cual, se comportan como una.

**Nodo Kubernetes:** Es una máquina que se está ejecutando en Kubernetes, en la cual se pueden programar “pods”.

**Pod:** Es un grupo de uno o más containers que comparten el almacenamiento y las configuraciones necesarias para ser ejecutados.

**Replication Controller:** Es quien maneja los fallos antes comentados y recrea, en caso de ser necesario, los pods. Además, también se asegura de que el número de réplicas del pod se esté ejecutando.

**Service:** Es una abstracción que define un conjunto lógico de pods, así como las reglas y la lógica para acceder a ellos.

**Infraestructura como Código IaC**
Se creará un repositorio con código para el diseño y despliegue de la infraestructura del proyecto Este representará el estado deseado en los servidores, así como imágenes pre-compiladas de cada servicio que se desea desplegar.

Para más información visite nuestra guía de [Kubernetes](/docs/devops#kubernetes)

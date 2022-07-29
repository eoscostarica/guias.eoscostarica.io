---
id: devops
title: ¿ Qué es DevOps ?
sidebar_label: DevOps
description: DevOps es un conjunto de prácticas que agrupan el desarrollo de software y las operaciones de TI.
keywords: [DevOps, Qué es DevOps, Para qué sirve DevOps, EOS, EOS Costa Rica]
---

DevOps es la práctica y la cultura de aplicar los principios de fabricación ajustada al flujo de valor de TI para aumentar la velocidad del software, reducir el desperdicio y mejorar la calidad con énfasis en aprovechar *las personas, los procesos y las herramientas*.

Se centra en unificar el desarrollo y las operaciones de TI a través de los principios de flujo, retroalimentación y experimentación.

<figure 
  className="video_container">
  <iframe
   width="100%" height="315" src="https://www.youtube.com/embed/OOGFxVzW35w" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

## Definiciones Clave

- **Integración Continua (CI)**: Aborda la creación de software a partir de las contribuciones de desarrolladores individuales de una manera ágil y controlada. (Verificando todo el código en un repositorio centralizado diariamente)
- **Despliegue Continuo (CD)**: Despliegue automatizado (o transporte) de código a producción sin necesidad de pasos manuales. Este no será el plan con todas las aplicaciones.
- **Entrega Continua (CD)**: Automatización que garantiza la validación de la implementación; sin embargo, aún se requieren pasos manuales para implementar en producción.
- **Implementación**: La implementación (o transporte) de código a un entorno de nivel superior, hasta e incluida la producción.
- **Lanzamiento**: El alcance definido y el objetivo comercial para un conjunto de características que se entregarán en un cierto plazo.

## ¿Por qué implementar DevOps?

En 2012, el "informe sobre el estado de DevOps" de Puppet Labs comparó 4.039 organizaciones de TI que usaban DevOps y encontró:

- Implementaciones de código 30 veces más frecuentes
- Plazo de ejecución de implementación de código 8.000 veces más rápido
- 2x la tasa de éxito del cambio
- MTTR 12 veces más rápido (tiempo medio de reparación)

***

> "*La ventaja competitiva que crea esta capacidad es enorme, lo que permite una comercialización más rápida de las funciones, mayor satisfacción del cliente, participación de mercado, productividad de los empleados y felicidad".* ** - Proyecto Phoenix **

***

## Áreas de Énfasis

Los principios de DevOps son aplicados y asistidos por las siguientes 3 áreas clave que trabajan juntas:

- **Personas**: DevOps se basa en personas sólidas y una cultura sólida de experimentación, aprendizaje, colaboración y objetivos compartidos entre las operaciones de desarrollo, control de calidad y TI.
- **Procesos**: DevOps se basa en Lean Agile y aplica conceptos de fabricación ajustada a las corrientes de valor de TI.
- **Herramientas**: DevOps se basa en herramientas y tecnologías mejoradas, incluidas herramientas de automatización, telemetría y colaboración.

## ¿Cuál es el objetivo de DevOps?

Mejorar la colaboración entre todas las partes interesadas desde la planificación hasta la entrega y la automatización del proceso de entrega para:

- Mejorar la frecuencia de implementación
- Lograr un tiempo de comercialización más rápido
- Menor índice de fallas de nuevos lanzamientos
- Acortar el tiempo de espera entre arreglos
- Mejorar el tiempo medio de recuperación

## CI Systems - Ejemplos

![imagen_CI_System](https://user-images.githubusercontent.com/5632966/106228974-2f442480-61b2-11eb-9ceb-6d47ef5acb67.png)

## CD Systems - Ejemplos

![imagen_CD_System](https://user-images.githubusercontent.com/5632966/105532713-d0ae1080-5cb0-11eb-8d8b-5d3751b7df37.png)

* * *

## Infraestructura como Código (IAC)

El proceso de administrar y aprovisionar centros de datos informáticos a través de archivos de definición legibles por máquina, en lugar de configuración de hardware físico o herramientas de configuración interactivas.

<figure 
  className="video_container">
  <iframe
   width="100%" height="315" src="https://www.youtube.com/embed/53X-HAw7BbA"  frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

### Introducción a HashiCorp Terraform

Terraform es un software de infraestructura como código, desarrollado por HashiCorp. Permite a los usuarios definir y configurar la infraestructura de un centro de datos en un lenguaje de alto nivel.

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/cpxKbf51ccU"  frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/h970ZBgKINg"  frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

## Introducción a Kubernetes y Docker

### **Containers 101**

<figure
 className="video_container">
  <iframe
   width="100%" height="315" src="https://www.youtube.com/embed/VqLcWftIaQI"  frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

[Más información acerca de contenedores](https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H)

* * *

### ¿Qué es Docker?

Docker es un proyecto de código abierto que automatiza la implementación de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos.

[Más Información sobre Docker](/docs/tutoriales/docker)

<figure 
className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/PfTKwblbkpE"  frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

### Kubernetes

Kubernetes es un sistema de código libre para la automatización del despliegue, ajuste de escala y manejo de aplicaciones en contenedores​ que fue originalmente diseñado por Google y donado a la Cloud Native Computing Foundation. Soporta diferentes entornos para la ejecución de contenedores, incluido Docker.

A continuación, puede encontrar un conjunto de tutoriales muy convenientes para aprender kubernetes desde cero:

Para más información visite nuestro tutorial [Kubernetes](/docs/tutoriales/kubernetes)

### Kubernetes en 5 Minutos

<figure
   className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/PH-2FfFD2PU"  frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

### Kubernetes vs Docker: No es una Pregunta de Ambos o Uno

<figure 
  className="video_container">
  <iframe
   wwidth="100%" height="315" src="https://www.youtube.com/embed/2vMEQ5zs1ko"  frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

## Kubernetes en EOS Costa Rica

Par probar los anteriores [tutoriales](https://kubernetes.io/docs/tutorials/kubernetes-basics/) en un ambiente real, podrías utilizar nuestra instalación de kubernetes sobre Openstack. 
Si así lo prefieres, también puedes crear un cluster local en tu propia máquina: 

[Instalar Minikube](https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/) 

Solicite a los administradores acceso a nuestro panel de instalación Openstack y al Sandbox
proyect. Entonces puedes seguir los siguientes pasos:

- Primero que nada, conéctese al nodo maestro usando la herramienta SSH:

```shell
ssh -i key.pem user@master-sandbox
```

- Obtener información sobre el clúster:

```shell
kubectl cluster-info
```

- Mostrar nodos disponibles actualmente en el clúster:

```shell
kubectl get nodes
```

## Referencias

*“Los principios detrás de DevOps son los mismos que transformaron la fabricación. En lugar de optimizar la forma en que las materias primas se transforman en productos terminados, DevOps muestra cómo optimizamos el flujo de valor de TI ...”* - Proyecto Phoenix

*“Imagínese vivir en un mundo DevOps, donde los propietarios de productos, Desarrollo, Control de Calidad, Operaciones de TI e InfoSec trabajan juntos sin descanso para ayudarse mutuamente y para que la organización en general gane. Permiten un flujo rápido del trabajo planificado hacia la producción, al tiempo que preservan la estabilidad, confiabilidad, disponibilidad y seguridad de clase mundial”.* - Proyecto Phoenix

* [Tabla periódica de herramientas de DevOps](https://www.notion.so/Periodic-Table-of-DevOps-Tools-4e9b29562a944132b1235cfa7e400d68)
* [Automatización](https://www.notion.so/Automation-e4dee021a4494d9cbdebb3ebc6205f4f)
* [DevOps con GitHub](https://lab.github.com/githubtraining/devops-with-github-actions)
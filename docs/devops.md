---
id: devops
title: DevOps
sidebar_label: DevOps
---

DevOps es la práctica y la cultura de aplicar los principios de fabricación ajustada al flujo de valor de TI para aumentar la velocidad del software, reducir el desperdicio y mejorar la calidad con énfasis en aprovechar *las personas, los procesos y las herramientas*.

Se centra en unificar el desarrollo y las operaciones de TI a través de los principios de flujo, retroalimentación y experimentación.

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/OOGFxVzW35w" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

## Definiciones Claves

- **Integración Continua (CI)**: aborda la creación de software a partir de las contribuciones de desarrolladores individuales de una manera controlada y ágil. (Verificando todo el código en un repositorio centralizado diariamente)
- **Despliegue Continuo (CD)**: Despliegue automatizado (o transporte) de código a producción sin necesidad de pasos manuales. Este no será el plan con todas las aplicaciones.
- **Entrega Continua (CD)**: Automatización que garantiza la validación de la implementación; sin embargo, aún se requiere un paso manual para implementar en producción.
- **Implementación**: La implementación (o transporte) de código a un entorno de nivel superior, hasta e incluida la producción.
- **Lanzamiento**: el alcance definido y el objetivo comercial para un conjunto de características que se entregarán en un cierto plazo.

## ¿Por qué DevOps?

En 2012, el "informe sobre el estado de DevOps" de Puppet Labs comparó 4.039 organizaciones de TI que usaban DevOps y encontró:

- Implementaciones de código 30 veces más frecuentes
- Plazo de ejecución de implementación de código 8.000 veces más rápido
- 2x la tasa de éxito del cambio
- MTTR 12 veces más rápido (tiempo medio de reparación)

### Consequencias

"*La ventaja competitiva que crea esta capacidad es enorme, lo que permite una comercialización más rápida de las funciones, mayor satisfacción del cliente, participación de mercado, productividad de los empleados y felicidad".*

**- Proyecto Phoenix**

![](https://user-images.githubusercontent.com/5632966/105532539-95abdd00-5cb0-11eb-81ff-b854c4ec1784.png)

## Áreas de énfasis

Los principios de DevOps son aplicados y asistidos por las siguientes 3 áreas clave que trabajan juntas:

- **Personas** - DevOps se basa en personas sólidas y una cultura sólida de experimentación, aprendizaje, colaboración y objetivos compartidos entre las operaciones de desarrollo, control de calidad y TI.
- **Procesos** - DevOps se basa en Lean Agile y aplica conceptos de fabricación ajustada a las corrientes de valor de TI.
- **Herramientas** - DevOps se basa en herramientas y tecnologías mejoradas, incluidas herramientas de automatización, telemetría y colaboración.

## ¿Cuál es el objetivo de DevOps?

Mejorar la colaboración entre todas las partes interesadas desde la planificación hasta la entrega y la automatización del proceso de entrega para:

- Mejorar la frecuencia de implementación
- Lograr un tiempo de comercialización más rápido
- Menor índice de fallas de nuevos lanzamientos
- Acortar el tiempo de espera entre arreglos
- Mejorar el tiempo medio de recuperación.

## CI Systems - Ejemplos

![](https://user-images.githubusercontent.com/5632966/105532576-a0ff0880-5cb0-11eb-99fb-5176d5b823e4.png)

## CD Systems - Ejemplos

![](https://user-images.githubusercontent.com/5632966/105532713-d0ae1080-5cb0-11eb-8d8b-5d3751b7df37.png)


* * *


## Infraestructura como código (IAC)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/53X-HAw7BbA" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

### Introducción a Terraform 

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/cpxKbf51ccU" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

### Introducción a HashiCorp Terraform 

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/h970ZBgKINg" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

## Introducción a Docker y Kubernetes

### Containers 101

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/VqLcWftIaQI" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

[Más informacion sobre containers](https://www.youtube.com/channel/UCdkGV51Nu0unDNT58bHt9bg/search?query=containers)

* * *

### ¿Qué es Docker?

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/PfTKwblbkpE" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

### Kubernetes en 5 minutos

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/PH-2FfFD2PU" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

### Kubernetes vs.Docker: no es una cuestión de uno o el otro

<figure class="video_container">
  <iframe wwidth="100%" height="315" src="https://www.youtube.com/embed/2vMEQ5zs1ko" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

## Kubernetes en EOS Costa Rica

A continuación, puede encontrar un conjunto de tutoriales muy convenientes para aprender kubernetes desde cero:

[Aprenda los conceptos básicos de Kubernetes](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

Para poder probar estos tutoriales en un entorno real, puede probar nuestra instalación de Kubernetes
en Openstack. Si lo prefiere, también puede crear una configuración local en su propia máquina:

[Instalar Minikube](https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/)

Solicite a los administradores acceso a nuestro panel de instalación Openstack y al Sandbox
proyect. Entonces puedes seguir los siguientes pasos:

- Primero que nada conéctese al nodo maestro usando la herramienta SSH:

```shell
ssh -i key.pem user@master-sandbox
```

- Obtener información sobre el clúster:

```shell
kubectl cluster-info
```
- Muestrar nodos disponibles actualmente en el clúster:

```shell
kubectl get nodes
```

# Referencias

*“Los principios detrás de DevOps son los mismos que transformaron la fabricación. En lugar de optimizar la forma en que las materias primas se transforman en productos terminados, DevOps muestra cómo optimizamos el flujo de valor de TI ... ”* - Proyecto Phoenix

*“Imagínese vivir en un mundo DevOps, donde los propietarios de productos, Desarrollo, Control de calidad, Operaciones de TI e InfoSec trabajan juntos sin descanso para ayudarse mutuamente y para que la organización en general gane. Permiten un flujo rápido del trabajo planificado hacia la producción, al tiempo que preservan la estabilidad, confiabilidad, disponibilidad y seguridad de clase mundial ".* - Proyecto Phoenix

* [Tabla periódica de herramientas de DevOps](https://www.notion.so/Periodic-Table-of-DevOps-Tools-4e9b29562a944132b1235cfa7e400d68)
* [Automatización](https://www.notion.so/Automation-e4dee021a4494d9cbdebb3ebc6205f4f)
* [DevOps con GitHub](https://lab.github.com/githubtraining/devops-with-github-actions)
---
id: devops
title: DevOps
sidebar_label: DevOps
---

En EOS Costa Rica nosotros seguimos los principios de DevOps para construir y desplegar software.

La automatización está en el top de nuestras prioridades, todo desde organización de directorios hasta optimización de código, pruebas, despliegue y entrega.

Comunicación continua y frecuentes llamadas de uno en uno así como programación en parejas son partes esenciales de nuestro trabajo día a día.

* * *

# Introducción a la infraestructura como Código (en inglés IAC)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/53X-HAw7BbA" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

* * *

## Infrastructura como código en EOS Costa Rica

* Documentación de Openstack

https://github.com/edenia/openstack-docs

* Documentación de Kubernetes 

https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md


## Kubernetes en EOS Costa Rica

A continuación puedes encontrar un conjunto de sencillos tutoriales para aprender kubernetes desde cero:

https://kubernetes.io/es/docs/tutorials/kubernetes-basics/

Par probar los anteriores tutoriales en un ambiente real, podrías utilizar nuestra instalación de kubernetes sobre Openstack. 
Si así lo prefieres, también puedes crear un cluster local en tu propia máquina: 

https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/. 

Pídele a alguno de nuestros administradores accesso al dashboard de nuestra instalación de Openstack y el projecto Sandbox. 
Luego puedes seguir los siguientes pasos:

- Antes que nada conectate al nodo maestro usando tu herramienta de SSH:

```
ssh -i key.pem user@master-sandbox
```

- Obtén información acerca del cluster:

```
kubectl cluster-info
```

- Mostrar los nodos disponibles en el cluster:

```
kubectl get nodes
```

# ¿Qué es un contenedor?

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/EnJ7qX9fkcU" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

* * *

# Contenedores 101

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/VqLcWftIaQI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Mira la completa introducción a la lista de reproducción de los contenedores aquí:
https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H

* * *

# ¿Qué es Docker?

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/PfTKwblbkpE" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

* * *

# Kubernetes en 5 minutos

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/PH-2FfFD2PU" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

* * *

# Kubernetes vs. Docker: No es una pregunta de ambos o uno

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/2vMEQ5zs1ko" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

* * *

# Introducción a **Terraform** (Infraestructura como Código)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/cpxKbf51ccU" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

* * *

# Introducción a **HashiCorp Terraform** con Armon Dadgar

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/h970ZBgKINg" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

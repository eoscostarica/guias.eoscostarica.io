---
id: docker
title: Docker
sidebar_label: Docker
---

## Docker Engine

Docker Engine es una tecnología de contenedorización de código abierto para crear y contener sus aplicaciones. Docker Engine actúa como una aplicación cliente-servidor con:

- Un servidor con un proceso de daemon dockerd de larga ejecución.
- API que especifican interfaces que los programas pueden usar para comunicarse e instruir al daemon Docker.
- Una ventana acoplable de cliente de interfaz de línea de comandos (CLI).

La CLI utiliza las API de Docker para controlar o interactuar con el daemon de Docker mediante secuencias de comandos o comandos directos de la CLI. Muchas otras aplicaciones de Docker utilizan la API y la CLI subyacentes. El daemon crea y administra objetos de Docker, como imágenes, contenedores, redes y volúmenes.

Para obtener más detalles, consulte [Arquitectura de Docker](https://docs.docker.com/get-started/overview/#docker-architecture).

[**Tutorial de Docker con Node.js**](https://fireship.io/lessons/docker-basics-tutorial-nodejs/)

### Archivo de Docker

Ejemplo de un archivo de Docker, es el *ADN* de la Docker Image.

```Dockerfile
FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]
```

Se hace el *build* de la imagen de esta forma:

```shell
docker build -t fireship/demoapp:1.0 .
```

### Contenedor de Docker

Los contenedores son la solución al problema habitual, por ejemplo, de moverse entre entornos de desarrollo como puede ser una máquina local o en un entorno real de producción. Podemos probar de forma segura una aplicación sin preocuparnos de que nuestro código se comporte de forma distinta.

[**Documentación**](https://docs.docker.com/engine/reference/commandline/container/)

**Correr contenedor**  
Esto asigna el puerto local 5000 al puerto de la ventana acoplable 8080. Debería poder ver la aplicación en su sistema local en https://localhost:5000. Puede elegir el puerto que desee.

```shell
docker run -p 5000:8080 <image-id>
```

## Docker Compose

Compose es una herramienta para definir y ejecutar aplicaciones Docker de varios contenedores. Con Compose, se usa un archivo YAML para configurar los servicios de su aplicación. Luego, con un solo comando, crea e inicia todos los servicios desde su configuración.

Usar Compose es básicamente un proceso de tres pasos:

- Defina el entorno de su aplicación con un Dockerfile para que pueda reproducirse en cualquier lugar.
- Defina los servicios que componen su aplicación en docker-compose.yml para que puedan ejecutarse juntos en un entorno aislado.
- Ejecute toda su aplicación.

```shell
docker-compose up
```

Un docker-compose.yml se ve así:

```yml
version: "3.9"  # optional since v1.27.0
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
      - logvolume01:/var/log
    links:
      - redis
  redis:
    image: redis
volumes:
  logvolume01: {}
```

## Docker Desktop

Docker Desktop es una aplicación fácil de instalar para su entorno Mac o Windows que le permite crear y compartir aplicaciones y microservicios en contenedores. Docker Desktop incluye Docker Engine, Docker CLI client, Docker Compose, Notary, Kubernetes y Credential Helper.
Docker Desktop funciona con su elección de herramientas de desarrollo e idiomas y le brinda acceso a una amplia biblioteca de imágenes y plantillas certificadas en Docker Hub. Esto permite a los equipos de desarrollo ampliar su entorno para autoconstruir rápidamente, integrarse continuamente y colaborar utilizando un repositorio seguro.
Algunas de las características clave de Docker Desktop incluyen:

- Capacidad para contener y compartir cualquier aplicación en cualquier plataforma en la nube, en múltiples lenguajes y marcos.
- Fácil instalación y configuración de un completo entorno de desarrollo Docker.
- Incluye la última versión de Kubernetes.
- Actualizaciones automáticas para mantenerte actualizado y seguro.
- En Windows, la capacidad de alternar entre entornos Linux y Windows Server para crear aplicaciones.
- Rendimiento rápido y confiable con virtualización nativa de Windows Hyper-V.
- Capacidad para trabajar de forma nativa en Linux a través de WSL 2 en máquinas Windows.
- Montaje de volumen para código y datos, incluidas notificaciones de cambio de archivo y fácil acceso a contenedores en ejecución en la red localhost.
- Desarrollo y depuración en contenedor con IDE compatibles.

### Instalar

Instalar Docker Desktop desde la [página principal](https://docs.docker.com/docker-for-windows/install/) de Docker. Una vez instalado debe de abrir Docker Desktop, tal vez le pida reiniciar su computadora. Una vez en el Dashboard de Docker asegurese que copiar el comando que aparece. Debe ser igual o parecido a este comando.

```shell
docker run -d -p 80:80 docker/getting-started
```

## Docker Hub

[Instalar Docker Hub](https://hub.docker.com/)

Docker Hub es un servicio proporcionado por Docker para buscar y compartir imágenes de contenedores con su equipo. Es el repositorio de imágenes de contenedores más grande del mundo con una variedad de fuentes de contenido que incluyen desarrolladores de comunidades de contenedores, proyectos de código abierto y proveedores de software independientes (ISV) que crean y distribuyen su código en contenedores.

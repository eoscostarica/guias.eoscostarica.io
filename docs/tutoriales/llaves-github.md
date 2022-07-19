---
id: llaves-github
title: Llaves de GitHub
sidebar_label: Llaves de GitHub
description: "Llaves SSH para acceder a los repositorios de GitHub"
keywords: [github, ssh, ssh-key, ssh-keygen, generar ssh key github, git key, extensión de la llave privada en git, ssh key github, Qué es SSH, Qué son las llaves SSH]
---

## ¿Por qué necesitamos Llaves de GitHub?

Definamos primero a GitHub como un sistema de control de versiones distribuidas en línea basado en un navegador para aquellos desarrolladores de software que utilizan el sistema de control de revisiones Git. Git utiliza la autenticación de clave pública SSH y no una autenticación por contraseña.  Cada usuario del sistema tiene que generar una clave.

El `SSH` es también conocido como Secure Shell o Secure Socket Shell. [Más sobre SSH en GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh). Las claves SSH se utilizan para autenticar conexiones seguras que se generan a través de un algoritmo criptográfico de clave pública, siendo los más comunes RSA o DSA. Se trata de una fórmula unidireccional que garantiza que la clave pública puede derivarse de la clave privada, pero que la clave privada no puede derivarse de la clave pública.

## ¿Cómo generar una nueva clave SSH en Windows?

Esta guía es para usuarios de Windows, más información para Linux y Mac visite [Generando una nueva llave SSH](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Los entornos Windows no tienen un shell Unix estándar por defecto. Será necesario instalar programas de shell externos para tener una experiencia completa de keygen. La opción más directa es utilizar Git Bash.

- Abra Git Bash

- Pega el texto de abajo, sustituyendo `"your_email@example.com"` por tu dirección de correo electrónico de GitHub

```shell
$ ssh-keygen -t ed25519 -C "your_email@example.com"
```
---
**NOTA:** 
Si está utilizando un sistema heredado que no soporta el algoritmo `ed25519`, utilice:

```shell
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
---

- Le pedirá un archivo para guardar la clave, sólo tiene que pulsar enter. Esto acepta la ubicación del archivo por defecto. 

- En el indicador (shell), escriba una frase de contraseña segura. Por razones de seguridad debe ser lo más compleja posible.

¡Ahora tienes una nueva clave SSH!

## ¿Cómo añadir su clave SSH al ssh-agent?

- Asegúrate de que el ssh-agent se está ejecutando, para más información visite [Trabajando con Llaves SSH](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/working-with-ssh-key-passphrases), o inicielo manualmente:

```shell
#iniciar el agente ssh en segundo plano
$ eval $(ssh-agent -s)
> Agent pid 59566
```
---

**NOTA:** 
Si sigue este flujo de generación de claves ssh, no es necesario iniciar el agente ssh.

---

- Añade tu clave privada SSH al ssh-agent. Si creó su clave con un nombre diferente, o si está añadiendo una clave existente que tiene un nombre diferente, sustituya `id_ed25519` en el comando por el nombre de su archivo de clave privada.

```shell
$ ssh-add ~/.ssh/id_ed25519
```

- Ahora necesitas añadir tu clave pública a tu cuenta de **GitHub**, para ello [sigue estos pasos](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

Ya está listo.

[Más información sobre cómo funciona](https://www.preveil.com/blog/public-and-private-key/).

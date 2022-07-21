---
id: guia-github
title: Guía GitHub
sidebar_label: Guía GitHub
description: Definición y uso de controlador de versiones en GitHub
keywords: [GitHub, Git, versiones, controlador, controladores, controlador de versiones, Qué es GitHub, Cómo usar Github]
---
import useBaseUrl from '@docusaurus/useBaseUrl';

[GitHub](https://docs.github.com/es/) es un sistema de gestión de proyectos en la nube que permite a los desarrolladores almacenar y tener un control de versiones de código. Esta plataforma te permite trabajar en colaboración con otras personas alrededor del mundo, realizar seguimientos de trabajos y administrar proyectos. [Conoce más de GitHub](https://www.xataka.com/basics/que-github-que-que-le-ofrece-a-desarrolladores).

Para EOS Costa Rica, es de suma importancia que nuestros colaboradores se familiaricen con esta herramienta, por lo que les ofrecemos a continuación una guía base para empezar en el mundo de GitHub.

* * *

## **Herramientas**

### [GitHub CLI](https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-cli)

[CLI](https://cli.github.com) de GitHub es una herramienta de línea de comandos para utilizar la funciones de GitHub en su propia computadora.

<img alt="Imagen GitHub CLI" src={ useBaseUrl( 'img/LogosGitHub/GitHub-CLI.webp' )} />

### [GitHub Desktop](https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-desktop)

[GitHub Desktop](https://docs.github.com/es/free-pro-team@latest/desktop/installing-and-configuring-github-desktop/installing-github-desktop) es la aplicación de escritorio que permite interactuar al usuario con las funcionalidades de Github por medio de la interfaz gráfica, remplazando las líneas de código por un dispositivo visual.

<img alt="Imagen GitHub Desktop" src={ useBaseUrl( 'img/LogosGitHub/GitHub-Desktop.webp' )} />

### [GitHub para móviles](https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-for-mobile)

GitHub para [dispositivos móviles](https://play.google.com/store/apps/details?id=com.github.android&hl=es_419&gl=US) está disponible para Android e iOS, te ofrece una forma de realizar un trabajo de alto impacto en GitHub de forma rápida y desde cualquier lugar. Además se vuelve una manera segura y estable de acceder a los datos de GitHub a través de una aplicación cliente confiable de primera parte.

<img alt="Imagen GitHub Móvil" src={ useBaseUrl( 'img/LogosGitHub/GitHub-Movil.webp' )} />


### [Git Bash](https://desarrolloweb.com/articulos/entiende-instala-configura-git.html#:~:text=Git%20Bash%20es%20la%20línea,para%20usar%20Git%20en%20Windows.)

[Git Bash](https://gitforwindows.org) es una aplicación de Git para Windows, donde permite trabajar por medio de líneas de comando el manejo de proyectos que se encuentran en GitHub.

<img alt="Imagen Git Bash" src={ useBaseUrl( 'img/LogosGitHub/GitHub-Bash.webp' )} />

### [Hub](https://hub.github.com)

[Hub](https://github.com/github/hub) es una extensión de línea de comandos de git, que te ayuda a realizar las tareas diarias de GitHub sin tener que salir de la terminal.


### [Git-extras](https://www.mankier.com/1/git-extras)
[Git-extras](https://github.com/tj/git-extras) repo aloja más de 60 scripts que se suman a la funcionalidad básica de Git. Más información sobre [Comandos](https://github.com/tj/git-extras/blob/master/Commands.md).

* * * 
## **Comandos** 

### Iniciar Repositorio

Crear un directorio nuevo.
```
 git init
```

Clonar un repositorio existente.
```
git clone <url>
```

Para más información visite [Git como empezar](https://dominicode.com/git-como-empezar/#:~:text=Para%20iniciar%20tu%20primer%20proyecto,ejecuta%20el%20comando%20git%20init%20.&text=Deberías%20tener%20un%20mensaje%20de,la%20carpeta%20no%20verás%20nada.).

### Ramas

Lista las ramas existentes.
```
git branch 
```

Crear nueva rama.
```
git branch <nombre de la nueva rama> 
```

Crear nueva rama y cambiarse a ella.
```
git branch -m <nombre de la nueva rama>
git checkout -b <nombre de la nueva rama>
```

Cambiar de rama.
```
git checkout <nombre de la rama> 
```

Borrar una rama.
```
git branch -d <nombre de la rama> 
```
Para más información visite [Gestión de Ramas](https://git-scm.com/book/es/v2/Ramificaciones-en-Git-Gestión-de-Ramas).

### Subir Cambios

Actualizar tu repositorio local.
```
git pull
```

Añadir un archivo al repositorio.
```
git add <nombre archivo>
```

Añadir todos los archivos al repositorio.
```
git add .
```

Añadir todos los archivos omitiendo los nuevos.
```
git add --all
```

Añadir todos los archivos dentro de un directorio.
```
git add <url> 
```

Realizar el commit de los cambios.
```
git commit -m <"titulo del commit"> 
```

Subir cambios al repositorio.
```
git push origin <nombre de la rama> 
```

Fusionar otra rama a la actual.
```
git merge <nombre de la rama> 
```
Para más información visite [Git - Guía Sencilla](https://rogerdudler.github.io/git-guide/index.es.html).

### Fork

Descargar remote de un fork
```
git remote add upstream <url>
```

Hacer merge con master
```
git fetch upstream
git merge upstream/master 
```
Para más información visite [Fork de Repositorios](https://aprendegit.com/fork-de-repositorios-para-que-sirve/).

### Otros Comandos

Revisar logs de los commits.
```
git log
```

Mostrar cambios realizados a un archivo.
```
git diff 
```

Sacar archivo de un commit.
```
git reset HEAD <archivo> 
```

Agregar repositorio remoto.
```
git remote set-url origin <url> 
```

Mostrar lista de repositorios.
```
git renite -v 
```

Mostrar estado actual del repositorio.
```
git status 
```
 
Verificar cambios en el repositorio online con el local.
 ```
git fetch 
```

Borrar archivo del repositorio.
```
git rm <archivo> 
```
Para más información visite [Configuración de Git](https://gist.github.com/dasdo/9ff71c5c0efa037441b6).
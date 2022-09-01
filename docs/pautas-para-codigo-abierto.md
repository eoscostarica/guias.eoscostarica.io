---
id: pautas-para-codigo-abierto
title: Pautas para Código Abierto
sidebar_label: Pautas Para Código Abierto
description: Pautas para el manejo de proyectos de código abierto en EOS Costa Rica.
keywords: [pautas para codigo abierto, código abierto, proyectos, EOS, EOS Costa Rica, Proyectos de código abierto]
---

## Proceso de Desarrollo

Utilizamos un estilo de tablero Kanban para priorizar nuestro trabajo. Por ejemplo, puedes mirar [EOS rate project board](https://github.com/eoscostarica/eos-rate/projects/1).

Hemos añadido una columna adicional al diseño automatizado por defecto para mantener una columna `To Do` priorizada.

Cuando nuevos issues son creados, necesitas usar explícitamente la opción de proyecto en el issue de GitHub para incluirlo en el tablero; una vez que lo haces, el issue quedará automáticamente agregado a la columna de issues nuevos.

Periódicamente movemos los nuevos issues a la columna `To Do` y manualmente le damos la prioridad apropiada.

Cuando comienzas a trabajar en una tarea, deberías moverla manualmente a la columna `In Progress`.

Usamos el flujo de GitHub https://guides.github.com/introduction/flow/ para solicitar cambios en el código. Desarrollamos en la rama `master` y `release` usando etiquetas y versionamiento.

<img src="/img/github-flow.webp" width="958" height="241" className="center" alt="Flujo de Trabajo Open Source en GitHub" />

Los nuevos y reabiertos `pull request` son automáticamente añadidos al tablero en la columna `En Progreso`.

Cuando un pull request cerrado es movido a la columna `Done` automáticamente. Si el pull request se cierra y no tiene problemas, se indica correctamente con las palabras clave de GitHub que se cierra el pull request y se mueve automáticamente a la columna `Done`. 

## Convención para los Nombres de las Ramas

Nombre cada rama para sus pull requests utilizando la siguiente convención:

```
<tipo>/<descripción-tarea>-<número-de-issue>
```

* Usar siempre letras minúsculas.
* Escoger un [tipo](#tipo).
* Descripciones significativas y cortas.
* Usar guiones como separadores.
* Usar el imperativo, tiempo presente: "cambio" no "cambiado" ni "cambios".
* Usar el número de ``issue`` para referenciarlo en la rama.

-**Ejemplo:**

```
feat/nueva-carateristica-123
^--^ ^-----------------^ ^-^
|    |                   |
|    |                   +-> Numero del issue en GitHub.
|    |
|    +-> Descripción corta de la tarea
|
+-> Tipo: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test, content, o devtools
```

## Pautas para los Pull Request

* Por favor revisa para asegurarte que no hay ningún `pull request` existente tratando de localizar o vincular el `issue` mencionado.
* Busca los `issues` relacionados en el `registro de issues`.
* Los cambios no triviales deberían ser discutidos primero en un issue.
* Desarrolla en una rama específica para características (código no estable), nunca en la master: `git checkout -b tipo/tarea-issue`.
* Haz amplias y claras descripciones de los `pull requests`.
* Realiza `pull requests` atómicos y con un ámbito bien definido. 1 PR por característica o bug.
* Vincula el `issue` con la descripción `pull request` para referencia entre el código y los issues.

Soportamos únicamente **squash merge** de los `pull requests` como una buena práctica para asegurar que el registro de la rama `master` es mantenido limpio y relevante, sin requerir que el pull request sea modificado. Esta estrategia requiere que todos los pull request sea hechos de forma `atómica`, en otras palabras, que resuelvan una única cosa. Un pull request por característica, bug o actualización de documentación.

## Pautas para Mensajes en los Commits

Tenemos reglas muy precisas acerca de cómo los mensajes de los commits de `git` deben ser formateados, siguiendo convenciones y estándares de Github. Esto permite **mensajes más legibles** que son fáciles de seguir cuando se está buscando entre la **historia del proyecto**. Pero también, usamos los mensajes de commit de `git` para generar el **registro de cambios del proyecto**.

Seguimos las convenciones de mensajes de commit como se muestra a continuación:

### Formato de Mensaje del Commit

Cada mensaje de commit consiste en un **encabezado**, un **cuerpo** y un **pié**. El encabezado tiene un especial formato que incluye un **tipo**, un **ámbito** y un **aspecto o tema**:
```
<tipo>(<ámbito>): <aspecto>
<BLANK LINE>
<cuerpo>
<BLANK LINE>
<pie>
```
El ```encabezado``` es obligatorio y el ```<ámbito>``` del encabezado es opcional.

**Ejemplo:**

```
feat(ámbito): aspecto
^--^^------^  ^-----^
|   |         |
|   |         +-> Resumen en tiempo presente.
|   |     
|   +-> El ámbito usualmente se refiere al servicio que se modifico (webapp, hapi, hasura, etc.)
|
+-> Type: build, ci, docs, feat, fix, perf, refactor, style, test, content, or devtools.
```

El mensaje del commit no puede ser mayor a 100 caracteres. Esto permite que el mensaje sea fácil de leer en GitHub así como también en varias `herramientas de git`.

El pie debe contener [una referencia de cierre de un issue](https://help.github.com/articles/closing-issues-via-commit-messages/), si hay alguna.

**El commit debe verse como los siguientes ejemplos:**

```
docs(changelog): update changelog to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

Más ejemplos [Angular - Formato del mensaje de commit](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)

### Revertir

Si el commit revierte un commit previo, debe empezar con `revert: `, seguido por el encabezado del commit revertido. En el cuerpo, debería decir: `This reverts commit <hash>`, donde el hash es el SHA del commit que está siendo revertido.

### Tipo

* **build**: Cambios que afectan el sistema de operación o dependencias externas (ejemplo scopes: gulp, broccoli, npm).
* **chore**: Lo que un usuario no vería (cambios en el proceso de construcción, la configuración, etc).
* **ci**: Cambios a los scripts y archivos de configuración de CI (ejemplo scopes: Travis, Circle, BrowserStack, SauceLabs).
* **docs**: Cambios sólo en la documentación.
* **feat**: Una nueva característica para el usuario.
* **fix**: Un arreglo de un bug para el usuario.
* **perf**: Cambio en el código que mejora el rendimiento.
* **refactor**: Cambio en el código que no arregla un bug ni añade una característica.
* **revert**: Revierte un commit previo.
* **style**: Cambios que no afectar en significado del código (espacios en blanco, formato, puntos y comas olvidados, etc).
* **test**: Añadir pruebas faltantes o corregir las existentes.
* **content**: Añadir o remover contenido.
* **devtools**: Herramientas para desarrolladores.

### Ámbito
El ámbito es el nombre del componente o servicio que afecta, ejemplo:

* **common**
* **smart-contracts**
* **webapp**
* **storage**
* **graphql**
* **frontend**
* **demux**
* **docker**

### Aspecto
El aspecto contiene una breve descripción del cambio:

* usa el imperativo, tiempo presente: "cambio" no "cambiado" ni "cambios"
* no pongas la primera letra en mayúscula
* no añadas (.) al final

### Cuerpo

Justo como en el **aspecto**, usa el imperativo, tiempo presente: "cambio" no "cambiado" ni "cambios".
El cuerpo debe incluir la motivación para el cambio y contrastar esto con el comportamiento anterior.

### Pie

El pié debe contender cualquier información acerca de los **cambios importantes con repercusiones (breaking changes)** y es también el lugar para referenciar los `issues` que el commit cierra.

Los **Breaking Changes** deben empezar con la palabra`BREAKING CHANGE:` con un espacio o dos nuevas líneas. El resto del mensaje de commit es luego usado para esto.


## Reportar bugs

Antes de subir tu `issue` por favor revisa que has completado los siguientes pasos:

* Asegúrate de estar en la última versión.
* Usa la funcionalidad de búsqueda para asegurarte de que el bug no ha sido reportado aún.

Los reportes de bug deben contener la siguiente información:

* Summary: Una breve descripción.
* Steps to reproduce: ¿Cómo encontraste el bug? Instrucciones para reproducirlo.
* Expected behavior: ¿Cómo esperas que se comporte?
* Actual behavior: ¿Cómo se comporta actualmente?
* References: Vínculos a cualquier tag o recursos de información.
* Si es posible, añadie información visual del bug. Una captura de pantalla o un gif.

## Lanzamientos

Lanzamos el software para producción usando las etiquetas de GitHub [Semver](http://semver.org), excepto que la versión tiene nombres semánticos, por ejemplo "Breaking.Feature.Fix" en lugar de "Major.Minor.Patch".

#### Breaking.Feature.Fix

No decidimos cuál será la versión. Los cambios en el API deciden. Los números en la versión son para computadoras, no para personas. Los nombres en los lanzamientos son para las personas.

##### Breaking

Cualquier "breaking change", no importa cuán pequeño, incrementa el número de la versión. Incrementar la versión no tiene relación con emitir un lanzamiento.

##### Característica (Feature)

Cuando una nueva característica es añadida, esto puede ser tan pequeña como propiedad pública, o tan larga como módulo siendo expuesto.

##### Fix

Cuando una característica documentada no se comporta como está documentada, o cuando un problema de seguridad es descubierto y arreglado sin alterar el comportamiento documentado.

### Generación de Registro de Cambios

En cada nuevo lanzamiento, generamos un archivo de registro de cambios usando el estándar [git-changelog](https://github.com/rafinskipg/git-changelog). Hay una tarea de npm para esto.

## Herramientas de Git Avanzadas

Hay también herramientas como [Hub](https://hub.github.com/) y [git-extras](https://github.com/tj/git-extras) que facilitan la interacción con GitHub. Puedes aprovechar estas herramientas para contribuir a este repositorio.

## Estándares de Código

Usamos [standardjs code style](https://standardjs.com).

## Integración Continua y Entrega

Esto es un trabajo en progreso, probablemente usaremos Netlify y TravisCI.

## Pre-commit Hooks

Usamos los pre-commit hooks para asegurarnos que los estándares de código y las convenciones de mensajes son cumplidas.

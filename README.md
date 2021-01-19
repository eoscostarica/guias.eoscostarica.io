# guias.eoscostarica.io
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Sitio de documentación para desarrolladores de EOS Costa Rica.

En este sitio se encuentran los recursos recabados en el día a día de los colaboradores de EOS Costa Rica. Siéntete libre de colaborar, comentar y sugerir cambios/ideas para mejorar el sitio.

## Contribuciones 

Usamos un tablero estilo Kanban. Ahí es donde priorizamos el trabajo. [Tablero de trabajo](https://github.com/orgs/eoscostarica/projects/2).

[Pautas de contribución](https://guias.eoscostarica.io/docs/pautas-para-codigo-abierto)

Informe los errores grandes y pequeños [creando un issue](https://github.com/eoscostarica/guias.eoscostarica.io/issues).

## Guía rápida

### Estructura de archivos

```sh
guias.eoscostarica.io
├── .github
│ ├── workflows
│ | ├── nodejs.yml
│ | └── services
│ └── pull_request_template.md
├── docs
├── src
│ ├── css
│ | ├── custom.css
│ | └── homepage.css
│ └── pages
│ 	├── styles.module.css
│   └── index.js
├── static
│ ├── img
│ ├── scripts
│ └── CNAME
├── .all-contributorsrc
├── .gitignore
├── docusaurus.config.js
├── package.json
├── yarn.lock
└── README.md
```
### Resumen de la estructura del proyecto

- `/docs/` - Contiene los archivos de Markdown para los documentos. Personaliza el orden de la barra lateral de documentos en  `sidebars.js`. Se pueden encontrar más detalles en la [guía de documentos](https://v2.docusaurus.io/docs/markdown-features).
- `/src/` - Archivos que no son de documentación como páginas o componentes personalizados de React. No tiene que colocar estrictamente sus archivos que no son de documentación aquí, pero colocarlos en un directorio centralizado facilita la especificación en caso de que necesite hacer algún tipo de procesamiento.
- `/src/pages` - Cualquier archivo dentro de este directorio se convertirá en una página de sitio web. Se pueden encontrar más detalles en la [guía de páginas](https://v2.docusaurus.io/docs/creating-pages).
- `/static/` - Directorio estático. Cualquier contenido dentro de aquí se copiará en la raíz del directorio de compilación final `build`.
- `/docusaurus.config.js` - El archivo de configuración para el sitio. Este es el equivalente de siteConfig.js en Docusaurus 1.
- `/package.json` - Un sitio web de Docusaurus es una aplicación de React. Puede instalar y usar cualquier paquete npm que desee en ellos.
- `/sidebar.js` - Utilizado por la documentación para especificar el orden de los documentos en la navegación lateral.


### Antes de empezar
Es necesario contar con: 
* git
* node.js


### Instrucciones para ejecutar el portal de forma local en Windows 10


1. Clone el repositorio

```bash
$ git clone https://github.com/eoscostarica/guias.eoscostarica.io.git
```

2. Ubíquese al directorio apropiado

```bash
$ cd guias.eoscostarica.io
```

3. Instale las dependencias:
```bash
$ yarn install 
```

4. Compile el proyecto:
```bash		
$ yarn build 
```

5. Ejecute el servidor local:
```bash		
$ yarn serve 
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/JustinCast"><img src="https://avatars1.githubusercontent.com/u/17890146?v=4?s=100" width="100px;" alt=""/><br /><sub><b>JustinCast</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=JustinCast" title="Code">💻</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=JustinCast" title="Documentation">📖</a> <a href="#infra-JustinCast" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JustinCast" title="Maintenance">🚧</a> <a href="#projectManagement-JustinCast" title="Project Management">📆</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3AJustinCast" title="Reviewed Pull Requests">👀</a> <a href="#translation-JustinCast" title="Translation">🌍</a></td>
    <td align="center"><a href="https://eoscostarica.io"><img src="https://avatars0.githubusercontent.com/u/5632966?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Xavier Fernandez</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=xavier506" title="Code">💻</a> <a href="#content-xavier506" title="Content">🖋</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=xavier506" title="Documentation">📖</a> <a href="#ideas-xavier506" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3Axavier506" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Edgar097"><img src="https://avatars3.githubusercontent.com/u/76976401?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Edgar Parra</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=Edgar097" title="Code">💻</a> <a href="#content-Edgar097" title="Content">🖋</a> <a href="#ideas-Edgar097" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3AEdgar097" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/leister-francisco-alvarez-campos-65b7801bb/"><img src="https://avatars3.githubusercontent.com/u/28828796?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leister Francisco Alvarez Campos</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=leisterfrancisco" title="Code">💻</a> <a href="#content-leisterfrancisco" title="Content">🖋</a> <a href="#ideas-leisterfrancisco" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3Aleisterfrancisco" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/stephaniedelgadobrenes/"><img src="https://avatars1.githubusercontent.com/u/31549144?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steph</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=steph222" title="Code">💻</a> <a href="#content-steph222" title="Content">🖋</a> <a href="#ideas-steph222" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3Asteph222" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/AngeloCG97"><img src="https://avatars3.githubusercontent.com/u/51149817?v=4?s=100" width="100px;" alt=""/><br /><sub><b>AngeloCG97</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=AngeloCG97" title="Code">💻</a> <a href="#content-AngeloCG97" title="Content">🖋</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=AngeloCG97" title="Documentation">📖</a> <a href="#ideas-AngeloCG97" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3AAngeloCG97" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/JeanVegaD"><img src="https://avatars0.githubusercontent.com/u/19317138?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jean Vega</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=JeanVegaD" title="Code">💻</a> <a href="#content-JeanVegaD" title="Content">🖋</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=JeanVegaD" title="Documentation">📖</a> <a href="#ideas-JeanVegaD" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3AJeanVegaD" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

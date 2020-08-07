# Guías para desarrolladores
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Sitio de documentación para desarrolladores de EOS Costa Rica.

En este sitio se encuentran los recursos recabados en el día a día de los colaboradores de EOS Costa Rica. Siéntete libre de colaborar, comentar y sugerir cambios/ideas para mejorar el sitio.

## Contribuciones 

Usamos un tablero estilo Kanban. Ahí es donde priorizamos el trabajo. [Tablero de trabajo](https://github.com/eoscostarica/guide.eoscostarica.io/projects/1).

[Pautas de contribución](https://guias.eoscostarica.io/docs/pautas-para-codigo-abierto)

Informe los errores grandes y pequeños [abriendo un issue](https://github.com/eoscostarica/guias.eoscostarica.io/issues).

## Guía rapida

### Estructura de archivos

```bash
guias.eoscostarica.io/
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
│ ├── pages
│ | └── index.js
├── static
│ ├── img
│ ├── scripts
│ └── CNAME
├── .all-contributorsrc
├── .gitignore
├── docusaurus.config.JS
├── package.json
├── package.json
├── yarn.lock
└── README.md
```

### Antes de empezar
Es necesario contar con: 
* git
* node.js


### Instrucciones para ejecutar el portal de forma local en Windows 10


1. Clone el respositorio

```bash
$ git clone https://github.com/eoscostarica/guias.eoscostarica.io.git
```

3. Ubiquese al directorio apropiado

```bash
$ cd  guias.eoscostarica.io
```

5. Instale las depencias:
```bash
$ yarn install 
```

6. Ejecute el proyecto:
```bash		
$ yarn start 
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/JustinCast"><img src="https://avatars1.githubusercontent.com/u/17890146?v=4" width="100px;" alt=""/><br /><sub><b>JustinCast</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=JustinCast" title="Code">💻</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=JustinCast" title="Documentation">📖</a> <a href="#infra-JustinCast" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JustinCast" title="Maintenance">🚧</a> <a href="#projectManagement-JustinCast" title="Project Management">📆</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3AJustinCast" title="Reviewed Pull Requests">👀</a> <a href="#translation-JustinCast" title="Translation">🌍</a></td>
    <td align="center"><a href="https://eoscostarica.io"><img src="https://avatars0.githubusercontent.com/u/5632966?v=4" width="100px;" alt=""/><br /><sub><b>Xavier Fernandez</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=xavier506" title="Code">💻</a> <a href="#content-xavier506" title="Content">🖋</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=xavier506" title="Documentation">📖</a> <a href="#ideas-xavier506" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3Axavier506" title="Reviewed Pull Requests">👀</a></td>
	  <td align="center"><a href="https://github.com/AngeloCG97"><img src="https://avatars1.githubusercontent.com/u/51149817?s=460&u=5aa62e8b759001f7b981583f0639f46772d0ed15&v=4" width="100px;" alt=""/><br /><sub><b>Angelo Castro G</b></sub></a><br /><a href="https://github.com/AngeloCG97/desarrolladores.eoscostarica.io/commits?author=AngeloCG97" title="Code">💻</a> <a href="#content-AngeloCG97" title="Content">🖋</a> <a href="https://github.com/AngeloCG97/desarrolladores.eoscostarica.io/commits?author=AngeloCG97" title="Documentation">📖</a> <a href="https://github.com/AngeloCG97/desarrolladores.eoscostarica.io/commits?author=AngeloCG97" title="Maintenance">🚧</a> <a href="https://github.com/AngeloCG97/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3Axavier506" title="Reviewed Pull Requests">👀</a></td>
	 <td align="center"><a href="https://github.com/JeanVegaD"><img src="https://avatars2.githubusercontent.com/u/19317138?s=460&u=c27cb3d5c2cfb732aa0eb13fb2831d1ef20a6627&v=4" width="100px;" alt=""/><br /><sub><b>Jean Vega D</b></sub></a><br /><a href="https://github.com/AngeloCG97/desarrolladores.eoscostarica.io/commits?author=JeanVegaD" title="Code">💻</a> <a href="#content-JeanVegaD" title="Content">🖋</a> <a href="https://github.com/JeanVegaD/desarrolladores.eoscostarica.io/commits?author=JeanVegaD" title="Documentation">📖</a> <a href="https://github.com/JeanVegaD/desarrolladores.eoscostarica.io/commits?author=JeanVegaD" title="Maintenance">🚧</a> <a href="https://github.com/JeanVegaD/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3Axavier506" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

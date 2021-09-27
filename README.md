# Guías EOS Costa Rica
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Sitio de documentación para desarrolladores de EOS Costa Rica.

![Guide front page](static/img/guide-page.png)

## Acerca del Proyecto

En este sitio se encuentran los recursos recolectados en el día a día de los colaboradores de EOS Costa Rica. Siéntete libre de colaborar, comentar y sugerir cambios/ideas para mejorar el sitio.

## Tabla de Contenido

1. Acerca del Proyecto
2. Tabla de Contenido
3. Objetivo del Proyecto
4. Tech Stack
5. Entorno de Desarrollo
6. Estructura de Archivo
7. Licencia
8. Contribuciones
9. Colaboradores
10. Acerca de EOS Costa Rica

## Objetivo del Proyecto

Este proyecto está destinado a servir como una herramienta para ayudar en la incorporación de nuevos desarrolladores. Creado inicialmente por un grupo de estudiantes universitarios para facilitar una guía a otros miembros del equipo y contribuir en proyectos de código abierto. Su objetivo principal es brindar orientación a los nuevos miembros del equipo y acelerar el proceso de familiarización con los procesos y la cultura en EOS Costa Rica.


## Tech Stack
- React.js - React 16✨, React Router 5.
- Material-ui/core - Componentes de React para un desarrollo web más rápido y fácil, biblioteca-autenticador-universal - Una biblioteca para permitir que las aplicaciones utilicen fácilmente diferentes proveedores de autenticación.
- Core - Componentes de React para un desarrollo web más rápido y sencillo.
- Lint- ESlint.
- Estilos - Tema Material-UI (personalizable).
- Docusaurus - Herramienta de código abierto para construir, implementar y mantener la documentación web.

### Empezando

Dé las instrucciones necesarias para ejecutar el proyecto localmente, por ejemplo:

#### **Requisitos Previos**

- `yarn`
- `git`
- `node.js`

#### **Instalación**

1. Clona el repositorio

  `
  git clone https://github.com/eoscostarica/guias.eoscostarica.io.git
  `

2. Mover el directorio apropiado

  `
  cd guide.eoscostarica.io.git
  `

3. Instale los paquetes de yarn

  `
  yarn
  `

4. Ejecute el proyecto

  `
  yarn start
  `

### Estructura de Archivos

```sh
guias.eoscostarica.io/
├── .github ...................... Sistema de gestión de versiones
│ ├── workflows .................. Flujo de trabajo 
│ | └── nodejs.yml 
│ └── ISSUE_TEMPLATE.md .......... Plantillas para solicitudes o reportar problemas
│   ├── bug_report.md 
│   └── feature_request.md
├── docs ......................... Archivos Markdown
├── src .......................... Componentes personalizados de React  
│ ├── css ........................ Hojas de estilo
│ | ├── custom.css
│ | └── homepage.css
│ └── pages ...................... Componentes que forman la estructura principal de la página web
│ 	├── styles.module.css
│   ├── index.js
│   └── Footer
├── static ....................... Directorio estático
│ ├── img
│ └── CNAME
├── .all-contributorsrc .......... Información de los Contribuidores 
├── .gitignore ................... Determina que archivos o directorios no deben subirse a Git 
├── docusaurus.config.js ......... Configuración de Docusaurus
├── package.json ................. Historial de los paquetes instalados y optimización de dependencias
├── sidebar.js ................... Especifica el orden de los documentos en la navegación lateral 
├── yarn.lock .................... Historial de versiones de las dependencias
└── README.md .................... Documentación de guias.eoscostarica.io
```

## Licencia

MIT © [EOS Costa Rica](https://eoscostarica.io)

## Contribuciones 

Usamos un tablero estilo Kanban. Ahí es donde priorizamos el trabajo. [Tablero de trabajo](https://github.com/orgs/eoscostarica/projects/2).


Si desea hacer una contribución, siga los siguientes pasos:

1. Fork del Proyecto
2. Cree su Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Agregue sus cambios al Commit (`git add <Nombre del archivo>`)
4. Confirme sus cambios (`git commit -m '<type>(<scope>): <subject>'`)
5. Push del Branch (`git push origin feature/AmazingFeature`)
6. Abra un Pull Request

Lea las [Pautas de contribución](https://guias.eoscostarica.io/docs/pautas-para-codigo-abierto) de EOS Costa Rica, para obtener más información sobre las convenciones de programación.

Si encuentra un error, informe los errores grandes y pequeños [**abriendo un issue**](https://github.com/eoscostarica/guias.eoscostarica.io/issues/new/choose) `<link a la sección del issue del proyecto>`

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


## Acerca de EOS Costa Rica

<p align="center">
	<a href="https://eoscostarica.io/">
		<img src="https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png"
		width="400px" >
	</a>
</p>

EOS Costa Rica es un productor de bloques independiente, autofinanciado y de bare-metal de Genesis que proporciona una infraestructura estable y segura para EOSIO blockchains. Apoyamos el software de código abierto para nuestra comunidad al mismo tiempo que ofrecemos desarrollo de blockchain empresarial y desarrollo de contratos inteligentes personalizados para nuestros clientes.

[eoscostarica.io](https://eoscostarica.io/)
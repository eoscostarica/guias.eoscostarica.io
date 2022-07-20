# Guías para Desarrolladores de EOS Costa Rica
![](https://img.shields.io/github/license/eoscostarica/guias.eoscostarica.io) ![](https://img.shields.io/badge/code%20style-standard-brightgreen.svg) ![](https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg) ![](https://img.shields.io/twitter/follow/eoscostarica.svg?style=social&logo=twitter) ![](https://img.shields.io/github/forks/eoscostarica/guias.eoscostarica.io?style=social)

Sitio de documentación para desarrolladores de EOS Costa Rica.

![Guide front page](static/img/guide-page.png)

## Acerca del Proyecto

En este sitio se encuentran los recursos recolectados en el día a día de los colaboradores de EOS Costa Rica. Siéntete libre de colaborar, comentar y sugerir cambios/ideas para mejorar el sitio.

## Tabla de Contenido

1. Acerca del Proyecto
1. Tabla de Contenido
1. Objetivo del Proyecto
1. Tech Stack
1. Entorno de Desarrollo
1. Estructura de Archivo
1. Contribuciones
1. Acerca de EOS Costa Rica

## Objetivo del Proyecto

Este proyecto está destinado a servir como una herramienta para ayudar en la incorporación de nuevos desarrolladores. Creado inicialmente por un grupo de estudiantes universitarios para facilitar una guía a otros miembros del equipo y contribuir en proyectos de código abierto. Su objetivo principal es brindar orientación a los nuevos miembros del equipo y acelerar el proceso de familiarización con los procesos y la cultura en EOS Costa Rica.


## Tech Stack
- React.js - React 18✨, React Router 5.
- Material-ui/core - Componentes de React para un desarrollo web más rápido y fácil, biblioteca-autenticador-universal - Una biblioteca para permitir que las aplicaciones utilicen fácilmente diferentes proveedores de autenticación.
- Core - Componentes de React para un desarrollo web más rápido y sencillo.
- Lint- ESlint.
- Estilos - Tema Material-UI (personalizable).
- Docusaurus - Herramienta de código abierto para construir, implementar y mantener la documentación web.

### Empezando

#### **Requisitos Previos**

- [yarn](https://classic.yarnpkg.com/en/)
- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/es/)

#### **Instalación**

1. Clonar el repositorio

  `
  git clone https://github.com/eoscostarica/guias.eoscostarica.io.git
  `

2. Mover al directorio apropiado

  `
  cd guide.eoscostarica.io.git
  `

3. Instalar los paquetes de yarn

  `
  yarn
  `

4. Ejecutar el proyecto

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

Si encuentra un error, informe los errores grandes y pequeños [**abriendo un issue**](https://github.com/eoscostarica/guias.eoscostarica.io/issues/new/choose)

## Acerca de EOS Costa Rica

<div align="center">
	<a href="https://eoscostarica.io/">
		<img src="https://raw.githubusercontent.com/eoscostarica/.github/master/.github/workflows/images/eos-costa-rica-logo.png"
		width="300px" >
	</a>
</div>

EOS Costa Rica es un productor de bloques independiente, autofinanciado y de bare-metal de Genesis que proporciona una infraestructura estable y segura para EOSIO blockchains. Apoyamos el software de código abierto para nuestra comunidad al mismo tiempo que ofrecemos desarrollo de blockchain empresarial y desarrollo de contratos inteligentes personalizados para nuestros clientes.

[eoscostarica.io](https://eoscostarica.io/)
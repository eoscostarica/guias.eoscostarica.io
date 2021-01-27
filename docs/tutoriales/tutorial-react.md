---
id: tutorial-react
title: React Js
sidebar_label: React Js
---


React es una librería de JavaScript que servirá para construir interfaces web y aplicaciones móviles con una extensión llamada [React Native](https://reactnative.dev/). React trabaja con unidades de código que se trabajan de forma independiente. React también utiliza una herramienta llamada JSX que permite una interacción muy sencilla con JavaScript, es decir se podrá utilizar con HTML también de forma sencilla.
>[Más Información](https://es.reactjs.org/)

## Herramientas 

Para React se sugieren las siguientes herramientas:

* Navegador Web (Google Chorme, Moxilla Firefox)
* [Node Js](https://nodejs.org/es/)
* Administradores de Paquetes ([Brew](https://brew.sh/index_es), [Chocolatey](https://chocolatey.org/) )
* Terminal, se puede utilizar con la terminal nativa pero te recomendamos [iTerm2](https://iterm2.com/) , [Hyper](https://hyper.is/) , [cmder](https://cmder.net/)
* Editor de código, se sugiere que se utilice [Visual Studio Code](https://code.visualstudio.com/)

## Extensiones

Estas extensiones son una recomendación para mejorar tu experiencia en el desarrollo con React.

* Instalar [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es), esta se encuentra en la chrome web store (Navegador Web)
* Debugger for Chrome (Visual Studio Code)
* React Extension Pack (Visual Studio Code)
* Auto Close Tag (Visual Studio Code)
* Prettier - Code Formatter (Visual Studio Code)


* * *
## Verificar Instalaciones

Verificar Node js, con estos comandos se puede verificar la versión y además si están instalados.

```shell
$ node -v
#v14.15.2
$ npm -v
#6.14.9
```

## Iniciar la primera aplicación con React

Vamos a crear una primera aplicación con React en donde se van a ver reflejados algunas de las funcionalidades de React, en este caso debes cambiar "nombre_de_tu_aplicación" por el nombre que desees, para hacer más sencilla la lectura de ahora en adelante se utilizara my-app.

```shell
$ npx create-react-app "nombre_de_tu_aplicación"
```
Ahora debes entrar a tu directorio de my-app y arrancar tu aplicación.

```shell
$ cd my-app
$ yarn start
```
Para ver tu código debes utilizar, duplicando tu terminal, lo siguiente: 

```shell
$ code .
```

## Primeros Pasos

Una vez abierto el código en tu editor, en este caso recomendablemente Visual Studio Code, puedes navegar hasta encontrar dentro de la carpeta *src* el archivo `App.js` con un contenido similar a este:
```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
Puedes cambiar el contenido por el siguiente y hacer los cambios que desees como primeros pasos para tu aventura en React. Además, puedes ver los cambios en tu navegador, para esto debes mantener tu terminal con el servidor abierto.

```javascript
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
  return (
    <div className="App">
      <p>Hola Mundo</p>
    </div>
  );
}
}
export default App;
```

### Recomendaciones

Es importante para el desarrollo de un buen proyecto la organización de los diferentes componentes del trabajo, por esto es recomendado generar carpetas que tengan contenido similar, algunos ejemplos son:

* Carpeta de *components*, en donde se guardan los componentes que necesiten.
* Carpeta de *styles*, en donde se guardan los estilos del proyecto por ejemplo los archivos `.css`.
* Carpeta de *assets*, en donde se guardan los recursos estáticos de la aplicación como por ejemplo las imagenes.

>Recordar cambiar las referencias una vez ordenado tu proyecto y no hacer cambios, a menos que sea realmente necesario, en el index.js

## Componentes

Los componentes se definen como una unidad única de código que tendrá una responsabilidad asignada de manera específica que se podrá encapsular determinados comportamientos en los componentes.

Este es un ejemplo de un componente. Crea un nuevo archivo dentro de tu carpeta de `componentes` con el nombre de `header.js` y de esta manera poder utilizarlo posteriormente.

```javascript
import React ,{Component} from "react";


class Header extends Component{
    render(){
        return(
            <div>
                <h1>Ejemplo </h1>
            </div>
        );
    }
}

export default Header;
```
Este componente se puede utilizar de la siguiente manera dentro del `App.js`:

```javascript
import { Component } from 'react';

import './styles/App.css';
import Header from "./components/header" //Se debe agregar el import del componente

class App extends Component{
  render(){
  return (
    <div className="App">
      <Header />  /*Se agrega el componente*/
    </div>
  );
}
}
export default App;
```
## Tipos de Componentes

<iframe width="100%" height="350" src="https://www.youtube.com/embed/Nh2He5m_Eps" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>


## Conceptos Principales

A continuación te damos una lista de elementos que se toman de la documentación oficial de React para aplicar en tu proyecto.

* [JSX](https://es.reactjs.org/docs/introducing-jsx.html)
* [Renderizando Elementos](https://es.reactjs.org/docs/rendering-elements.html)
* [Components y Propiedades](https://es.reactjs.org/docs/components-and-props.html)
* [Estado y Ciclo de Vida](https://es.reactjs.org/docs/state-and-lifecycle.html)
* [Manejando Eventos](https://es.reactjs.org/docs/handling-events.html)
* [Renderizado Condicional](https://es.reactjs.org/docs/conditional-rendering.html)
* [Listas y Keys](https://es.reactjs.org/docs/lists-and-keys.html)
* [Formularios](https://es.reactjs.org/docs/forms.html)
* [Levantando el Estado](https://es.reactjs.org/docs/lifting-state-up.html)
* [Composición vs. Herencia](https://es.reactjs.org/docs/composition-vs-inheritance.html)

## Lo nuevo en React

### Hooks

Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.

Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes funcionales. Los hooks no funcionan dentro de las clases estos te permiten usar React sin clases. (No recomendamos reescribir tus componentes existentes de la noche a la mañana, pero puedes comenzar a usar Hooks en los nuevos si quieres).

Se tiene

* [Hook de Estado](https://es.reactjs.org/docs/hooks-state.html)
* [Hook de Effecto](https://es.reactjs.org/docs/hooks-effect.html)

Este es un ejemplo de utilización, se puede reemplazar el código de tu `App.js` para probarlo. En este ejemplo muestran las dimensiones de la pantalla aun cuando se re-dimensiona.

```javascript
import React , {useState,useEffect} from "react";
import "./styles/App.css"


const App = () => {
  const [width,setWidth] = useState(window.innerWidth);
  const [height, setHeight]= useState(window.innerHeight);

  const updateDimensions = () =>{
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(()=>{
    window.addEventListener('resize', updateDimensions);

    return()=>{
      window.removeEventListener('resize',updateDimensions);
    }
  }
  )
  return(
    <div className="App">
      Width = {width}
      <br/>
      Height = {height}
    </div>
  );
}
export default App;
```
[**Reglas Recomendadas**](https://es.reactjs.org/docs/hooks-rules.html)

>[Más Información](https://es.reactjs.org/docs/hooks-intro.html)

## React más Limpio con Hooks
<iframe width="100%" height="350" src="https://www.youtube.com/embed/dpw9EHDh2bM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>

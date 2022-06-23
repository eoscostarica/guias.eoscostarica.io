---
id: guia-markdown
title: Guía Markdown
sidebar_label: Guia Markdown
---

## ¿Qué es Markdown?

Markdown es un lenguaje de marcado ligero que se puede usar para agregar elementos de formato a documentos de texto sin formato.

Markdown, creado por John Gruber en 2004, es ahora uno de los lenguajes de marcado más populares del mundo. [Más sobre Markdown](https://www.markdownguide.org/getting-started/).

* * *

## ¿Por qué utilizar Markdown?

Tal vez te preguntes por qué las personas utilizan Markdown en lugar de algun editor WYSIWYG, es mucho más fácil presionar botones en una interfaz para formatear tu texto. [Más sobre WYSIWYG](https://www.simplethread.com/everything-you-ever-wanted-to-know-about-wysiwyg-editors/)

Resulta que existen varias razones por las cuales elegir Markdown. 

- Es sumamente amplio. Se puede utilizar para crear sitios web, documentos, notas, libros, presentaciones, mensajes de correo electrónico y documentación técnica.

- Es portable. Los archivos que contienen texto con formato Markdown se pueden abrir utilizando prácticamente cualquier aplicación. Si no te gusta la aplicación Markdown que utilizas actualmente, puedes importar tus archivos Markdown a otra aplicación Markdown.

- Completamente independiente de la plataforma. Puedes escribir texto con formato Markdown en cualquier dispositivo que ejecute cualquier sistema operativo.

- Está listo para el futuro. Aún si la aplicación que actualmente estás utilzando deja de funcionar en algún momento en el futuro, podrás leer tu texto con formato Markdown utilizando una aplicación de edición de texto. Esto es sumamente importante cuando consideramos libros, tesis universitarias y otros documentos importantes que deben conservarse indefinidamente.


* * *

## ¿Cómo funciona Markdown?

Cuando escribimos en Markdown, el texto se guarda en un archivo de texto sin formato que tiene una extensión `.md` o `.markdown`. ¿Cómo se transforma entonces su archivo con formato Markdown a HTML?

La respuesta simple es que requiere de una aplicación Markdown capaz de procesar el archivo. Existem muchas aplicaciones disponibles, desde pequeños scripts hasta aplicaciones de escritorio que se parecen a Microsoft Word. Aunque tengan sus diferencias visuales, todas las aplicaciones realizan lo mismo.

Estas aplicaciones de Markdown utilizan un procesador Markdown también conocido como *analizador* o *implementación* el cual toma el texto con formato Markdown y lo envia a formato HTML. Es despúes de este proceso que su documento puede verse en un navegador web o combinarse con una hoja de estilo e imprimirse. 

**Ejemplo**

![](https://mdg.imgix.net/assets/images/markdown-flowchart.png?auto=format&fit=clip&q=40&w=1080)

* * *


## Sintaxis

Acontinuación observaremos ejemplos de sintaxis básica y estructural, para profundizar así en este lenguaje de marcado.



## Básica


| Componente | Sintaxis|
| ----------- | ----------- |
| [Encabezado](https://www.markdownguide.org/basic-syntax/#headings) |  # H1   <br /> ## H2 <br />  ### H3 |
| [Tipografía Negrita](https://www.markdownguide.org/basic-syntax/#bold) |  `**Texto**` or `__texto__` |
| [Tipografía Itálica](https://www.markdownguide.org/basic-syntax/#italic) |   `*texto*` or  `_texto_`|
| [Citas en Bloque](https://www.markdownguide.org/basic-syntax/#blockquotes-1)    | > Citas en bloque  |
| [Lista Numérica](#ordered-list) | 1. Primer Item <br /> 2. Segundo Item <br /> 3. Tercer Item  |
| [Lista no Ordenada](#unordered-list) | - Primer Item <br /> - Segundo Item <br /> - Tercer Item |
| [Linea Horizontal](#horizontal-rule) | --- |
| [Enlaces](https://www.markdownguide.org/basic-syntax/#links) | `[título](https://www.example.com)` |  
| [Imagen](https://www.markdownguide.org/basic-syntax/#images-1) | `![texto](image.jpg)` |
|[Salto de Línea](#salto-de-línea) | texto + doble espacio |
| [Comentarios](#comentarios) | `<!---Comentario--->` |



> Puede obtener hasta 6 tamaños de títulos diferentes según el número de `#`

* * *

## Estructural

### **Lista no Ordenada**  

``` markdown title="Sintaxis"
    - Primer Item
        - Sub Item
    - Segundo Item
    - Tercer Item  
```
**Ejemplo:**
- Primer Item
    - Sub Item
- Segundo Item
- Tercer Item

[Más información](https://www.markdownguide.org/basic-syntax/#unordered-lists).

### **Lista Ordenada**

``` markdown title="Sintaxis"
    1. Primer Item
        1. Sub Item
    2. Segundo Item
    3. Tercer Item
```

**Ejemplo:**
1. Primer Item
    1. Sub Item
2. Segundo Item
3. Tercer Item

[Más información](https://www.markdownguide.org/basic-syntax/#ordered-lists).

### **Tabla**

``` markdown title="Sintaxis"
|Título Izquierda  | Título centro | Título Derecha |  
| :----  |  :----:  |  ----:  |  
| Izquierda| Centro | Derecha |  
| Izquierda | Centro | Derecha |  
```

**Ejemplo:**  

|Título Izquierda  | Título  | Título Derecha  |
| :----  |  :----:  |  ----:  |
| Izquierda | Centro | Derecha |
| Izquierda | Centro | Derecha |

[Más información](https://www.markdownguide.org/extended-syntax/#tables).

### **Check List** 

``` markdown title="Sintaxis"
- [x] Primer opción
- [ ] Segunda opción
- [ ] Tercera opción
```
**Ejemplo:**
- [x] Primer opción
- [ ] Segunda opción
- [ ] Tercera opción


[Más información](https://www.markdownguide.org/extended-syntax/#task-lists).


### **Salto de Línea**

```markdown title="Sintaxis"
Texto  <!---Espacio Espacio--->
Otro texto
```

**Ejemplo:**

Texto  
Otro texto

### **Comentarios**

``` markdown title="Sintaxis"
[comentario]: <> (Este es un comentario, no se incluirá)

[//]: <> (Esto también es un comentario)

[//]: # (Este puede ser el comentario más independiente de la plataforma) `
```

* * *

## Otras Sintaxis 

### **Enlaces**

``` markdown title="Sintaxis"
[EOS Costa Rica](https://es.eoscostarica.io)
```
**Ejemplo:**  
[EOS Costa Rica](https://es.eoscostarica.io)

* * * 

### **Imágenes**

``` markdown title="Sintaxis"
![](https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png)
```
**Ejemplo:**  

![](https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png)

* * * 

### **Videos**

``` markdown title="Sintaxis"
<iframe width="100%" height="350" src="https://www.youtube.com/embed/tss1d0sow0o" frameborder="0" allow="true" allowfullscreen></iframe> 
```
**Ejemplo:**

<iframe width="100%" height="350" src="https://www.youtube.com/embed/f49LJV1i-_w" frameborder="0" allow="true" allowfullscreen></iframe> 

* * *

### **Citas en Bloque**

``` markdown title="Sintaxis"
> Texto principal
>> Texto
>>
> * Item
> * Item
> Texto
> Texto final
```
**Ejemplo:**

> Texto principal
>> Texto
>>
> * Item
> * Item
> Texto 
> Texto final

* * * 

### **Líneas Horizontales**

``` markdown title="Sintaxis"
---
***
- - - -
```
**Ejemplo:**

---
***
- - - -

***

* * * 

### **Código**

#### *Markdown*

```markdown title="Syntax"
    # Esto es código markdown
```

#### *Javascript*

```javascript title="Syntax"
  var s = 'JavaScript sintaxis resaltada';
  alert(s);
```

#### *Phyton*

```python title="Syntax"
  s = "Python sintaxis resaltada"
  print(s)
```

#### *Function*

```javascript title="Syntax"
  function highlightMe() {
  console.log('Esta línea puede ser resaltada!');
}
```


Para más información acerca de la sintaxis de Markdown, visitar
[esta página](https://www.markdownguide.org/cheat-sheet/)

* * *

## Flavors de Markdown

El aspecto más confuso del uso de Markdown es que prácticamente todas las aplicaciones implementan una versión ligeramente distinta. Estas versiones se conocen normalmente como Flavors.

Para comprender el significado de Flavors en Markdown, podemos en ellos como dialectos del idioma. Las personas de Mexico hablan español al igual que las personas de Costa Rica, pero existen diferencias sustanciales entre los dialectos utilizados en ambos paises. Lo mismo sucede con los que utilizan diferentes aplicaciones de Markdown. 

Por lo tanto, es nuestro trabajo dominar cualquier versión de Markdown que hayamos implementado en nuestra aplicación.

[Más información sobre markdown](https://www.markdownguide.org/basic-syntax/#horizontal-rules).



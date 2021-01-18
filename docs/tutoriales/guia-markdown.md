---
id: guia-markdown
title: Guía Markdown
sidebar_label: Guia Markdown
---

## MarkDown
Markdown es un lenguaje de marcado, pensado para la elaboración de textos que permitan formaterarse de una forma más sencilla, esto como otra alternativa al HTML.  

Para mayor información puede dar click en el siguiente link [¿Qué es Markdown?](https://www.genbeta.com/guia-de-inicio/que-es-markdown-para-que-sirve-y-como-usarlo)

* * *

## Sintaxis Básica

| Componente | Sintaxis|
| ----------- | ----------- |
| [Encabezado](https://www.markdownguide.org/basic-syntax/#headings) |  # H1   <br /> ## H2 <br />  ### H3  |
| [Tipografía Negrita](https://www.markdownguide.org/basic-syntax/#bold) |  `**Texto**` or `__texto__` |
| [Tipografía Itálica](https://www.markdownguide.org/basic-syntax/#italic) |   `*texto*` or  `_texto_`|
| [Citas en Bloque](https://www.markdownguide.org/basic-syntax/#blockquotes-1)    | > Citas en bloque  |
| [Lista Numérica](#ordered-list) | 1. Primer Item <br /> 2. Segundo Item <br /> 3. Tercer Item  |
| [Lista no Ordenada](#unordered-list) | - Primer Item <br /> - Segundo Item <br /> - Tercer Item |
| [Linea Horizontal](#horizontal-rule) | --- |
| [Enlaces](https://www.markdownguide.org/basic-syntax/#links) | `[título](https://www.example.com)` |  
| [Imagen](https://www.markdownguide.org/basic-syntax/#images-1) | `![texto](image.jpg)` |
|[Salto de línea](#line-break) | texto + doble espacio |
| [Comentarios](#comments) | `<!---Comentario--->` |



> Puede obtener hasta 6 tamaños de títulos diferentes según el número de "#"

* * *

## Sintaxis de Estructura



### **Lista no ordenada**  

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

>[Más información](https://www.markdownguide.org/basic-syntax/#unordered-lists)

### **Lista numérica**

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

>[Más información](https://www.markdownguide.org/basic-syntax/#ordered-lists)

### **Tablas**

 
``` markdown title="Sintaxis"
    |Título Izquierda  | Título  | Título Derecha |  
    | :----  |  :----:  |  ----:  |  
    | Izquierda| Centro | Derecha |  
    | Izquierda | Centro | Derecha |  
```
**Ejemplo:**  

|Título Izquierda  | Título  | Título Derecha  |
| :----  |  :----:  |  ----:  |
| Izquierda | Centro | Derecha |
| Izquierda | Centro | Derecha |

>[Más información](https://www.markdownguide.org/extended-syntax/#tables)

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


> [Más información](https://www.markdownguide.org/extended-syntax/#task-lists)


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
[Eos Costa Rica](https://es.eoscostarica.io)
```
**Ejemplo:**  
[Eos Costa Rica](https://es.eoscostarica.io)
### **Imágenes**

``` markdown title="Sintaxis"
![](https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png)
```
**Ejemplo:**  

![](https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png)


### **Citas en bloque**

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


### **Líneas horizontales**

``` markdown title="Sintaxis"
---
***
- - - -
```
**Ejemplo:**

---

***

- - - -

> [Más información](https://www.markdownguide.org/basic-syntax/#horizontal-rules)

***
Para más información acerca de la sintaxis de Markdown, visitar
[esta página](https://www.markdownguide.org/cheat-sheet/)
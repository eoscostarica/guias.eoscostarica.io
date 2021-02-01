---
id: guia-markdown
title: Guía Markdown
sidebar_label: Guia Markdown
---

## ¿Qué es Markdown?

Markdown es un lenguaje de marcado ligero que puede usar para agregar elementos de formato a documentos de texto sin formato.

Markdown, creado por John Gruber en 2004, es ahora uno de los lenguajes de marcado más populares del mundo. [Más sobre Markdown](https://www.markdownguide.org/getting-started/).

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
|[Salto de Línea](#line-break) | texto + doble espacio |
| [Comentarios](#comments) | `<!---Comentario--->` |



> Puede obtener hasta 6 tamaños de títulos diferentes según el número de `#`

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

[Más información](https://www.markdownguide.org/basic-syntax/#unordered-lists).

### **Lista ordenada**

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

[Más información](https://www.markdownguide.org/basic-syntax/#horizontal-rules).

***

Para más información acerca de la sintaxis de Markdown, visitar
[esta página](https://www.markdownguide.org/cheat-sheet/)
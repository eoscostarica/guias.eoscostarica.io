---
id: graphql
title: GraphQL
sidebar_label: GraphQL
description: Definición, uso y funcionalidades de GraphQL
keywords: [GraphQL, Aprender GraphQL, Qué es GraphQL, Cómo funciona GraphQL, Queries y Mutations, GraphQL en EOSIO, GraphQL en Ethereum, GraphQL en Cardano]
---

[GraphQL](https://graphql.org/) es un lenguaje de consulta para su API y un tiempo de ejecución del lado del servidor para ejecutar consultas mediante el uso de un sistema de tipos que defina para sus datos. GraphQL no está vinculado a ninguna base de datos o motor de almacenamiento específico y, en cambio, está respaldado por su código y datos existentes.

## Consultas y Mutaciones

### Campos

En su forma más simple, GraphQL se trata de solicitar campos específicos en objetos.


```graphql title="Input"
{
  lifebank {
	name
  }
}
```
```graphql title="Output"
{
  "data": {
	"lifebank": {
  		"name": "National Blood Bank"
	}
  }
}
```

Esto es esencial para GraphQL, porque siempre obtiene lo que espera y el servidor sabe exactamente qué campos solicita el cliente.

### Argumentos

Cada campo y objeto anidado puede obtener su propio conjunto de argumentos, lo que convierte a GraphQL en un reemplazo completo para realizar múltiples búsquedas de API. Incluso puede pasar argumentos a campos escalares para implementar transformaciones de datos una vez en el servidor, en lugar de en cada cliente por separado.

```graphql title="Input"
{
  lifebank(email: "blood@gmail.com") {
	telephone
    location	
  }
}
```

```graphql title="Output"
{
  "data": {
	"lifebank": {
  	    "name": "National Blood Bank"
  	    "location": "Costa Rica",
	}
  }
}
```

GraphQL viene con un conjunto predeterminado de tipos, pero un servidor GraphQL también puede declarar sus propios tipos personalizados, siempre que se puedan serializar en su formato de transporte.

### Alias

Los alias le permiten cambiar el nombre del resultado de un campo a lo que desee.

```graphql title="Input"
{
  mainLifebank: lifebank(email: "blood@gmail.com") {
	name
  }
  secondaryLifebank: lifebank(email: "secondaryblood@gmail.com") {
	name
  }
}
```

```graphql title="Output"
{
  "data": {
	"mainLifebank": {
  		"name": "National Blood Bank"
	},
	"secondaryLifebank": {
  		"name": "National Rescue Blood Bank"
	}
  }
}
```

### Fragmentos

GraphQL incluye unidades reutilizables llamadas fragmentos. Los fragmentos le permiten construir conjuntos de campos y luego incluirlos en consultas cuando lo necesite.

```graphql title="Input"
{
  leftComparison: lifebank(email: "blood@gmail.com") {
	...comparisonFields
  }
  rightComparison: lifebank(email: "secondaryblood@gmail.com") {
	...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  location 
  telephone
}
```

```graphql title="Output"
{
  "data": {
	"leftComparison": {
    	"name": "National Blood Bank",
  	    "location": "Costa Rica",
	    "urgencyLevel": "high" 
	},
	"rightComparison": {
  		"name": "National Rescue Blood Bank",
  	    "location": "Costa Rica",
	    "urgencyLevel": "medium" 
	}
  }
}
```

El concepto de fragmentos se utiliza con frecuencia para dividir los requisitos de datos de aplicaciones complicados en partes más pequeñas.


### Nombre de la Operación

El nombre de la operación es un nombre significativo y explícito para su operación. Solo se requiere en documentos de operaciones múltiples, pero se recomienda su uso porque es muy útil para la depuración y el registro del lado del servidor.

```graphql title="Input"
query LifebankNameAndPhotos {
  lifebank{
	name
	photos {
  		url
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"lifebank": {
  	    "name": "National Blood Bank",
  	    "photos": [
    	    {
      		    "url": "photo1.png"
    	    },
    	    {
      		    "url": "photo2.png"
    	    },
    	    {
      		    "url": "photo3.png"
    	    }
        ]
	}
  }
}
```

Cuando algo sale mal, es más fácil identificar una consulta en su código base por su nombre en lugar de intentar descifrar el contenido.

### Variables

GraphQL tiene una forma de primera clase de factorizar valores dinámicos fuera de la consulta y pasarlos como un diccionario separado. Estos valores se denominan variables.

Cuando comenzamos a trabajar con variables, debemos hacer tres cosas:

- Reemplaza el valor estático en la consulta con `$variableName`.
- Declare `$variableName` como una de las variables aceptadas por la consulta.
- Pase variableName: valor en el diccionario de variables independiente, específico del transporte (generalmente JSON).

```graphql title="Variables"
{
  "email": "blood@gmail.com"
}
```

```graphql title="Input"
query LifebankNameAndPhotos($email: Lifebank) {
  lifebank(email: $email) {
	name
	photos {
  		url
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"lifebank": {
  	    "name": "National Blood Bank",
  	    "photos": [
    	    {
      		    "url": "photo1.png"
    	    },
    	    {
      	    	"url": "photo2.png"
    	    },
    	    {
      	    	"url": "photo3.png"
        	}
        ]
	}
  }
}
```

### Directivas

Se puede adjuntar una directiva a la inclusión de un campo o fragmento, y puede afectar la ejecución de la consulta de la forma que desee el servidor. La especificación principal de GraphQL incluye exactamente dos directivas, que deben ser compatibles con cualquier implementación de servidor GraphQL que cumpla con las especificaciones:

- `@include`(if: Boolean) Solo incluya este campo en el resultado si el argumento es verdadero.
- `@skip`(if: Boolean) Omita este campo si el argumento es verdadero.

```graphql title="Variables"
{
    "email": "blood@gmail.com",
	"withPhotos": false
}
```

```graphql title="Input"
query Lifebank($email: Lifebank, $withPhotos: Boolean!) {
  lifebank(name: $email) {
	name
	photos @include(if: $withPhotos) {
  		url
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"lifebank": {
  	"name": "National Blood Bank" 
   }
}
```

### Mutaciones

Se podría implementar cualquier consulta para provocar una escritura de datos. Sin embargo, es útil establecer una convención de que cualquier operación que provoque escrituras debe enviarse explícitamente a través de una mutación.

```graphql title="Variables"
{
  "email": "blood@gmail.com",
  "urgencyLevel": "high"
}
```

```graphql title="Input"
mutation ChangeUrgencyLevel($ep: Episode!, $review: ReviewInput!) {
  updateUrgencyLevel(email: $email, urgencyLevel: $urgencyLevel) {
	urgencyLevel
  }
}
```

```graphql title="Output"
{
  "data": {
	"updateUrgencyLevel": {
  	"urgencyLevel": "high",
	}
  }
}
```

Al igual que en las consultas, si el campo de mutación devuelve un tipo de objeto, puede solicitar campos anidados. Esto puede resultar útil para obtener el nuevo estado de un objeto después de una actualización.


### Fragmentos en Línea

Si está consultando un campo que devuelve una interfaz o un tipo de unión, necesitará usar fragmentos en línea para acceder a los datos del tipo concreto subyacente.

```graphql title="Variables"
{
  "ep": "JEDI"
}
```

```graphql title="Input"
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
	name
	... on Droid {
  	primaryFunction
	}
	... on Human {
  	height
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"hero": {
  	"name": "R2-D2",
  	"primaryFunction": "Astromech"
	}
  }
}
```

## Esquema y Tipos

### Type System

Cada servicio GraphQL define un conjunto de tipos que describen completamente el conjunto de datos posibles que puede consultar en ese servicio. Luego, cuando llegan las consultas, se validan y ejecutan contra ese esquema.

```graphql title="Input"
{
  lifebank {
	name
	email
  }
}
```

```graphql title="Output"
{
  "data": {
	"lifebank ": {
  	"name": "National Blood Bank",
  	"email": "blood@gmail.com"
	}
  }
}
```

### Tipo de Idioma

Los servicios GraphQL se pueden escribir en cualquier idioma. El "lenguaje de esquema GraphQL" - es similar al lenguaje de consulta y nos permite hablar sobre los esquemas GraphQL de una manera independiente del lenguaje.

### Campos y Tipos de Objetos

Los componentes más básicos de un esquema GraphQL son los tipos de objetos. En el lenguaje de esquema GraphQL, podríamos representarlo así:

```graphql title="Input"
type Character {
 name: String!
 appearsIn: [Episode!]!
}
```

- `Character` es un tipo de objeto GraphQL, lo que significa que es un tipo con algunos campos. La mayoría de los tipos de su esquema serán tipos de objetos.

- `name` y `appearsIn` son campos del tipo Character. Eso significa que el name y appearsIn son los únicos campos que pueden aparecer en cualquier parte de una consulta GraphQL que opera en el tipo ‘Character’.

- `String` es uno de los tipos escalares integrados - estos son tipos que se resuelven en un solo objeto escalar y no pueden tener sub-selecciones en la consulta.

- `[Episode!]!` representa una matriz de objetos Episodio. Dado que tampoco admite valores NULL, siempre puede esperar una matriz (con cero o más elementos) cuando consulta el campo ‘appearsIn’. 

### Argumentos

Cada campo de un tipo de objeto GraphQL puede tener cero o más argumentos. Todos los argumentos en GraphQL se pasan por nombre específicamente, pueden ser obligatorios u opcionales. Cuando un argumento es opcional, podemos definir un valor predeterminado; si no se pasa el argumento de la unidad, se establecerá en METER de manera predeterminada.

```graphql title="Input"
type Starship {
 id: ID!
 name: String!
 length(unit: LengthUnit = METER): Float
}
```

### Los Tipos de Consulta y Mutación

Cada servicio GraphQL tiene un tipo de consulta y puede tener o no un tipo de mutación. Estos tipos son los mismos que un tipo de objeto normal, pero son especiales porque definen el punto de entrada de cada consulta GraphQL.

```graphql title="Schema"
schema {
 query: Query
 mutation: Mutation
}
```

```graphql title="Input"
query {
  hero {
	name
  }
  droid(id: "2000") {
	name
  }
}
```

```graphql title="Output"
{
  "data": {
	"hero": {
  		"name": "R2-D2"
	},
	"droid": {
  		"name": "C-3PO"
	}
  }
}
```

Las mutaciones funcionan de manera similar: usted define campos en el tipo de mutación, y esos están disponibles como los campos de mutación raíz que puede llamar en su consulta.

### Tipos Escalares

Los tipos escalares representan las hojas de la consulta. Sabemos esto porque esos campos no tienen subcampos, son las hojas de la consulta.

```graphql title="Input"
{
  hero {
	name
	appearsIn
  }
}
```

```graphql title="Output"
{
  "data": {
	"hero": {
  	   "name": "R2-D2",
  	   "appearsIn": [
    	   "NEWHOPE",
    	   "EMPIRE",
    	   "JEDI"
  	    ]
	}
  }
}
```

GraphQL viene con un conjunto de tipos escalares predeterminados listos para usar:

- `Int`: Un entero de 32 bits con signo.
- `Float`: Un valor de coma flotante de precisión doble con signo.
- `String`: Una secuencia de caracteres UTF-8.
- `Boolean`: Verdadero o falso.
- `ID`: El tipo escalar de ID representa un identificador único El tipo de ID se serializa de la misma forma que una cadena.

### Tipos de Enumeración

También llamados Enums, los tipos de enumeración son un tipo especial de escalar que está restringido a un conjunto particular de valores permitidos. Esto permite:

- Valide que cualquier argumento de este tipo sea uno de los valores permitidos.
- Comunicar a través del sistema de tipos que un campo siempre será uno de un conjunto finito de valores.

```graphql title="Enum"
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```

### Listas y Non-Null

El modificador de tipo Non-Null se utiliza al definir argumentos para un campo, lo que hará que el servidor GraphQL devuelva un error de validación si se pasa un valor nulo como ese argumento, ya sea en la cadena GraphQL o en las variables.

Las listas funcionan de manera similar, podemos usar un modificador de tipo para marcar un tipo como una Lista, lo que indica que este campo devolverá una matriz de ese tipo.

Los modificadores Non-Null y Lista se pueden combinar. 

```graphql title="Type"
type Character {
  name: String!
  appearsIn: [Episode]!
}
```

```graphql title="Variables"
{
  "id": null
}
```

```graphql title="Input"
query DroidById($id: ID!) {
  droid(id: $id) {
	name
  }
}
```

```graphql title="Output"
{
  "errors": [
    {
  	   "message": "Variable \"$id\" of non-null type \"ID!\" must not be null.",
  	   "locations": [
    	{
      	  "line": 1,
      	  "column": 17
    	}
  	]
	}
  ]
}
```

### Interfaces

Una interfaz es un tipo abstracto que incluye un determinado conjunto de campos que un tipo debe incluir para implementar la interfaz.

```graphql title="Interface"
interface Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
}
```

```graphql title="Example 1"
type Human implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
  totalCredits: Int
}
```

```graphql title="Example 2"
type Droid implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  primaryFunction: String
}
```

Las interfaces son útiles cuando desea devolver un objeto o un conjunto de objetos.

### Tipos de Unión

Los tipos de unión son muy similares a las interfaces, pero no pueden especificar ningún campo común entre los tipos.

```graphql title="Union"
union SearchResult = Human | Droid | Starship
```

```graphql title="Input"
{
  search(text: "an") {
	__typename
	... on Human {
  	    name
  	    height
	}

	... on Droid {
  	    name
  	    primaryFunction
	}

	... on Starship {
  	    name
        length
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"search": [
  	{
    	"__typename": "Human",
    	"name": "Han Solo",
    	"height": 1.8
  	},
  	{
    	"__typename": "Human",
    	"name": "Leia Organa",
    	"height": 1.5
  	},
  	{
    	"__typename": "Starship",
    	"name": "TIE Advanced x1",
    	"length": 9.2
  	}
	]
  }
}
```

### Tipos de Entrada

En el lenguaje de esquema GraphQL, los tipos de entrada tienen exactamente el mismo aspecto que los tipos de objetos normales, pero con la entrada de palabras clave en lugar de type.

```graphql title="Input Type"
input ReviewInput {
 stars: Int!
 commentary: String
}
```

```graphql title="Variables"
{
  "ep": "JEDI",
  "review": {
	"stars": 5,
	"commentary": "This is a great movie!"
  }
}
```

```graphql title="Input"
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
	stars
	commentary
  }
}
```
```graphql title="Output"
{
  "data": {
	"createReview": {
  	"stars": 5,
  	"commentary": "This is a great movie!"
	}
  }
}
```

Los campos de un tipo de objeto de entrada pueden hacer referencia a tipos de objetos de entrada, pero no puede mezclar tipos de entrada y salida en su esquema. Los tipos de objetos de entrada tampoco pueden tener argumentos en sus campos.

## Ejecución

Después de ser validada, un servidor GraphQL ejecuta una consulta GraphQL que devuelve un resultado que refleja la forma de la consulta solicitada, normalmente como JSON.

```graphql title="Type System"
type Query {
    human(id: ID!): Human
}

type Human {
    name: String
    appearsIn: [Episode]
    starships: [Starship]
}

enum Episode {
    NEWHOPE
    EMPIRE
    JEDI
}

type Starship {
    name: String
}
```

```graphql title="Input"
{
  human(id: 1002) {
	name
	appearsIn
	starships {
    	name
	}
  }
}
```

```graphql title="Output"
{
  "data": {
	"human": {
  	    "name": "Han Solo",
  	    "appearsIn": [
    	    "NEWHOPE",
    	    "EMPIRE",
    	    "JEDI"
  	    ],
  	    "starships": [
    	{
      	    "name": "Millenium Falcon"
    	},
    	{
        	"name": "Imperial shuttle"
    	}
  	    ]
	}
  }
}
```

Cada campo de cada tipo está respaldado por una función llamada resolver que es proporcionada por el desarrollador del servidor GraphQL. Cuando se ejecuta un campo, se llama al resolutor correspondiente para producir el siguiente valor.

## Ayuda de Idioma

### Top 5

1. [JavaScript](https://www.javascript.com)
2. [Go](https://golang.org)
3. [PHP](https://www.php.net)
4. [Python](https://www.python.org)
5. [Java](https://www.java.com/en/)

### JavaScript

#### Servidor

- **GraphQL.js:** La implementación de referencia de la especificación GraphQL, diseñada para ejecutar GraphQL en un entorno Node.js.
- **Apollo Server:** Un conjunto de paquetes de servidor GraphQL de Apollo que funcionan con varios marcos HTTP de Node.js (Express, Connect, Hapi, Koa, etc).

#### Cliente

- **Apollo Client:** Un potente cliente JavaScript GraphQL, diseñado para funcionar bien con React, React Native, Angular 2 o simplemente JavaScript.
- **GraphQL Request:** Un cliente GraphQL de JavaScript simple y flexible que funciona en todos los entornos de JavaScript (el navegador, Node.js y React Native), básicamente un contenedor ligero alrededor de fetch.

#### Herramientas

- **GraphiQL:** Un IDE de GraphQL interactivo en el navegador.
- **GraphQL CLI:** Una herramienta de línea de comandos para flujos de trabajo de desarrollo GraphQL comunes.


#### Servicios

- [**Apollo:**](https://guias.eoscostarica.io/docs/herramientas-para-desarrolladores#apollo) Un servicio en la nube para monitorear el rendimiento y el uso de su backend GraphQL.
- [**Hasura:**](https://guias.eoscostarica.io/docs/herramientas-para-desarrolladores#hasura) Hasura se conecta a sus bases de datos y microservicios y le brinda instantáneamente una API GraphQL lista para producción.
- [**Postman:**](https://guias.eoscostarica.io/docs/herramientas-para-desarrolladores#postman) Un cliente HTTP que admite la edición de consultas GraphQL.

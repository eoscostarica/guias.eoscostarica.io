---
id: herramientas-para-desarrolladores
title: Herramientas para Desarrollo de Software
sidebar_label: Herramientas para desarrollo
description: Herramientas utilizadas para el desarrollo de software por EOS Costa Rica.
keywords: [Herramientas para desarrollo de software, desarrollo, software, EOS, EOS Costa Rica, apps para programar]
---


## Apollo

### ¿Qué es Apollo?

Apollo es un conjunto de herramientas para crear un servidor GraphQL y consumir una API GraphQL. Apollo es un equipo y una comunidad que se basa en GraphQL, proporciona diferentes herramientas que lo ayudan a construir sus proyectos.

### ¿Por qué usamos Apollo?

1. **Documentación**. Mientras Apollo continúa evolucionando, el equipo y la comunidad detrás de el, mantienen la documentación actualizada y tienen mucha información sobre cómo crear aplicaciones.
2. **Bibliotecas**. Apollo ofrece muchas bibliotecas para implementar una pila de tecnología GraphQL eficaz para aplicaciones JavaScript, y sus bibliotecas son de código abierto para ser más manejables.
3. **Características**. Apollo viene con características integradas para eliminar toda la complejidad de las aplicaciones y manejar la intersección entre las aplicaciones cliente y servidor.

### Instalación de Apollo

[Instalación de Apollo CLI ](https://www.apollographql.com/docs/devtools/cli/)

[Apollo GitHub](https://github.com/apollographql)

* * *

## Axios

### ¿Qué es Axios?

Axios es una biblioteca de JavaScript muy popular que se puede usar para realizar solicitudes HTTP, funciona tanto en las plataformas Browser como en Node.js. Es compatible con todos los navegadores modernos, incluido el soporte para IE8 y superior.

### ¿Por qué usamos Axios?

1. Soporta navegadores más antiguos.
2. Tiene una forma de cancelar solicitudes.
3. Tiene una forma de establecer un tiempo de espera de respuesta.
4. Tiene protección CSRF incorporada.
5. Admite el progreso de la carga.
6. Realiza una transformación automática de datos JSON.
7. Funciona en Node.js

### Instalación de Axios

[Instalación de Axios](https://styde.net/solicitudes-http-con-axios/)

[Axios GitHub](https://github.com/axios/axios)

* * *

## EOSIO

### ¿Qué es EOSIO?

EOSIO es un software de código abierto que permite el lanzamiento de redes de blockchain altamente configurables en las que los desarrolladores y empresarios pueden ejecutar aplicaciones de blockchain de alto rendimiento. Para obtener más información sobre EOSIO, visite [aprender EOS](https://guias.eoscostarica.io/docs/aprender-eosio/protocolo-eosio).

### ¿Por qué usamos EOSIO?

Aquí hay algunas razones por las que usamos EOSIO:

1. **Es escalable**. Para las empresas que necesitan realizar transacciones con miles de clientes simultáneamente, por ejemplo, esta velocidad de transacción es insuficiente. EOSIO, por otro lado, ha sido evaluado para procesar más de 4.000 transacciones por segundo en su blockchain pública, lo que significa que es 200 veces más rápido que su competidor más cercano y eso es solo la red pública.

2. **Es rápido**. Al usar aplicaciones EOSIO, los consumidores y las empresas ni siquiera necesitan saber que están usando una "aplicación blockchain"; todo lo que saben es que cualquier dato que hayan ingresado para cualquier transacción es más seguro pero no más lento que su aplicación normal que no es blockchain.

3. **Es prácticamente gratis**. A diferencia de otros protocolos de blockchain, EOSIO ofrece un modelo de costos más favorable para consumidores y desarrolladores, ya que elimina la necesidad de tarifas de transacción.

4. **Es verde**. Una de las quejas más comunes que escuchas sobre la tecnología blockchain es lo cara y nociva para el medio ambiente que es. De hecho, muchas plataformas blockchain requieren una cantidad sustancial de electricidad para ejecutar las computadoras necesarias para administrar la base de datos distribuida.

>Para más información visite [Razones por las que usar EOSIO](https://block.one/news/four-reasons-why-developers-and-enterprises-are-looking-at-the-eosio-blockchain-protocol/#:~:text=Unlike%20other%20blockchain%20protocols%2C%20EOSIO,apps%20are%20free%20to%20use.)

### Instalación de EOSIO 

Tenemos una guía para que te inicies en el mundo EOSIO, visita [Componentes EOSIO](https://guias.eoscostarica.io/docs/aprender-eosio/componentes-eosio).

* * *

## jq

### ¿Qué es jq?

En un procesador JSON de línea de comandos ligero y flexible. jq es como [sed](https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/) para datos JSON que puede usar para dividir, filtrar, mapear y transformar datos estructurados con la misma facilidad que sed, awk, grep y friends te permiten jugar con texto.

### ¿Por qué usamos jq?

<figure
className="video_container">
    <iframe width="100%"
    height="315" src="https://www.youtube.com/embed/EvpwhGeiH0U" frameBorder="0" allowFullScreen loading="lazy">
    </iframe>
</figure>

>[Tutorial](https://stedolan.github.io/jq/tutorial/)

### Instalación de jq 

Instale jq desde la [página de jq ](https://stedolan.github.io/jq/).

#### **Siga este video si está usando el sistema operativo Windows**

<figure
className="video_container">
    <iframe width="100%"
    height="315" src="https://www.youtube.com/embed/rrjIVepRqPI"  frameBorder="0" allowFullScreen loading="lazy">
    </iframe>
</figure>

[PlayGround JQPlay](https://jqplay.org/) si quieres un lugar para probar jq. El jq [GitHub](https://github.com/stedolan/jq) para obtener más información.

* * *

## React JS

### ¿Qué es React JS?

React es una biblioteca de JavaScript de código abierto para crear interfaces de usuario. Lo mantiene Facebook y una comunidad de desarrolladores y empresas individuales. React se puede utilizar como base en el desarrollo de aplicaciones móviles o de una sola página.

#### **PropTypes**

JavaScript no es un lenguaje fuertemente tipado, esto podría crear algunos problemas para los desarrolladores. PropTypes es una biblioteca que ayuda cuando necesitas resolver un problema relacionado con esto. Comprobando los tipos de objetos de utilería pasados ​​con un conjunto de especificaciones de antemano. [Documentación de PropTypes](https://es.reactjs.org/docs/typechecking-with-proptypes.html)

### ¿Por qué usamos React JS?

1. **Curva de aprendizaje rápido**. React es una biblioteca muy simple y liviana que solo se ocupa de la capa de vista.
2. **Componentes reutilizables**. React proporciona una estructura basada en componentes. Los componentes son tus piezas de lego. Comienzas con componentes pequeños como botón, casilla de verificación, menú desplegable, etc. y luego creas componentes de envoltura compuestos por esos componentes más pequeños.
3. **Procesamiento rápido con Virtual DOM**. La actualización de DOM suele ser el cuello de botella cuando se trata del rendimiento web. React está tratando de resolver este problema usando algo llamado DOM virtual; un DOM guardado en la memoria.
4. **Excelentes herramientas para desarrolladores**. El conjunto de herramientas para desarrolladores es otro factor importante a la hora de elegir una plataforma de desarrollo. Hay dos excelentes herramientas que debe conocer: React Developer Tools y Redux Developer Tools. Ambos se pueden instalar como extensiones de Chrome.

>Para más información visite [Razones porque deberías usar React](https://stories.jotform.com/7-reasons-why-you-should-use-react-ad420c634247)

### Instalación de React JS 

Para obtener instrucciones de instalación, consulte nuestro Tutorial de React JS.

[React GitHub](https://github.com/facebook/react)

* * *

## HAPI

### ¿Qué es HAPI?

Hapi es un marco Node.js de código abierto. Hapi es un marco para crear aplicaciones y servicios. Permite a los desarrolladores concentrarse en escribir la lógica de la aplicación reutilizable en lugar de perder tiempo creando infraestructura.

### ¿Por qué usamos HAPI?

1. **Respaldado por cuerpos principales**. Esto significa que el apoyo de la comunidad será sólido y estará a su disposición en futuras versiones. Es fácil encontrar gente apasionada de Hapi, y hay buenos tutoriales por ahí. A partir de esta fecha de publicación, npm y Walmart usan Hapi.
2. **Facilitar el trabajo**. Puede facilitar el trabajo de equipos distribuidos que trabajan en varias partes de los servicios de backend sin tener un conocimiento completo del resto de la superficie de la API (la arquitectura de complementos de Hapi es el epítome de esta calidad).
3. **Deje que el marco haga lo que se supone que debe hacer un marco: configurar cosas**. Después de eso, el marco debería ser invisible y permitir a los desarrolladores concentrar su energía creativa real en desarrollar la lógica empresarial.

### Instalación de HAPI

[Tutorial e instalación de HAPI](https://hapi.dev/tutorials/?lang=en_US)

[HAPI GitHub](https://github.com/hapijs/hapi)

<figure
className="video_container">
    <iframe width="100%"
    height="315" src="https://www.youtube.com/embed/2lprC0yYeFw"  frameBorder="0" allowFullScreen loading="lazy">
    </iframe>
</figure>

* * *

## Hasura

### ¿Qué es Hasura?

El motor GraphQL de Hasura es un servidor GraphQL ultra rápido que le brinda API GraphQL instantáneas en tiempo real a través de Postgres, con activadores de webhook en eventos de base de datos y esquemas remotos para lógica empresarial.

### ¿Por qué usamos Hasura?

1. Ayuda a encapsular los detalles de la **estructura** de sus tablas detrás de una interfaz consistente. También te permite estructurar tus datos de forma intuitiva.
2. Proporciona más **legibilidad** ya que una consulta con nombre puede establecer el contexto mucho más rápido que una consulta SQL sin formato. Puede utilizar una vista en lugar de ensuciar la base del código de su cliente con consultas complejas.
3. Las vistas tienen permisos separados, por lo tanto, se pueden usar para **restringir el acceso** a las tablas, de modo que los usuarios solo puedan ver filas y columnas específicas.

### Instalación de Hasura

[Intalación de Hasura CLI](https://hasura.io/docs/1.0/graphql/core/hasura-cli/install-hasura-cli.html).

[Hasura GitHub](https://github.com/hasura)

* * *

## HTTPie

### ¿Qué es HTTPie?

Cliente HTTP de línea de comandos moderno: alternativa curl fácil de usar con interfaz de usuario intuitiva, compatibilidad con JSON, resaltado de sintaxis, descargas tipo wget, extensiones, etc.

### ¿Por qué usamos HTTPie?

1. **Sintaxis de comandos HTTP simple**, expresiva e intuitiva.
2. Salida terminal bien formateada y coloreada.
3. **Soporte JSON listo para usar**.
4. **Formularios** y **cargas de archivos**.
5. **Soporte**, para encabezado HTTP personalizado y admite datos de solicitud arbitrarios.
6. Los principales sistemas operativos son compatibles con **Linux**, **macOS** y **Windows**.
7. Complementos para admitir funciones adicionales.

### Instalación de HTTPie 

[Instalación de HTTPie](https://www.theninjacto.xyz/Instalacion-y-Configuracion-HTTPie-alternativa-cURL/).

[HTTPie GitHub](https://github.com/httpie/httpie)

<iframe
width="100%" height="315" src="https://www.youtube.com/embed/SUWCS0FCb9s"  frameBorder="0" allowFullScreen loading="lazy"> </iframe>

* * *

## PostgresDB

### ¿Qué es PostgresDB?

PostgreSQL es un potente sistema de base de datos relacional de objetos de código abierto que utiliza y amplía el lenguaje SQL combinado con muchas características que almacenan y escalan de forma segura las cargas de trabajo de datos más complicadas.

### ¿Por qué usamos PostgresDB?

1. **Compatible** con varias plataformas que utilizan los principales idiomas y middleware
2. Ofrece un **mecanismo de bloqueo** más sofisticado.
3. **Soporte** para control de concurrencia de múltiples versiones.
4. **Funcionalidad de programación del lado del servidor**.
5. Cumple con el **estándar ANSI SQL**.
6. Soporte completo para arquitectura de red **cliente-servidor**.

### Instalación de PostgresDB

[Instalación de PostgresDB](https://geotalleres.readthedocs.io/es/latest/postgis-instalacion/instalacion.html)

[PostgresDB GitHub](https://github.com/postgres/postgres)

* * *

## Postman

### ¿Qué es Postman?

Permite a los desarrolladores probar llamadas a API. Los usuarios de Postman ingresan datos, los datos se envían a una dirección de servidor web especial. Por lo general, se devuelve información que Postman presenta al usuario.

### ¿Por qué usamos Postman?

1. **Fácil de usar:** Tener una interfaz fácil de usar permite enviar una solicitud simple con solo ingresarla, completar los encabezados necesarios, seleccionar el método HTTP y presionar el botón "enviar".
2. **Automatización:** Las pruebas automatizadas se pueden configurar fácilmente utilizando la herramienta de prueba Postman API. Puede automatizar sus casos de prueba en Postman en JavaScript con características impresionantes como conjuntos de pruebas de escritura, solicitud de compilación que consta de parámetros dinámicos, pasar datos entre la solicitud, etc. De esta manera, las pruebas y las solicitudes se pueden agregar en una sola prueba automatizada secuencia.
3. **Rentable:** Aparte de los muchos beneficios que nos brinda esta herramienta, esta herramienta también es muy rentable. Puede utilizar Postman en su plan gratuito, que consta de funciones limitadas pero muy útiles.

### Instalación de Postman

[Instalación de Postman](https://developers.sw.com.mx/knowledge-base/guia-se-instalacion-y-funcionamiento-de-postman/)

[Postman GitHub](https://github.com/postmanlabs)

<iframe
width="100%" height="315" src="https://www.youtube.com/embed/qsejysrhJiU"  frameBorder="0" allowFullScreen loading="lazy"> </iframe>

* * *

## Vault

### ¿Qué es Vault?

HashiCorp Vault es una herramienta de código abierto que permite almacenar de forma segura datos confidenciales y secretos en entornos dinámicos de la nube. HashiCorp Vault está diseñado para ayudar a las organizaciones en administrar el acceso a secretos y transmitirlos de forma segura dentro de una organización. Los secretos se definen como cualquier forma de credenciales confidenciales que deben controlarse y monitorearse estrictamente, pueden usarse para desbloquear información confidencial.

### ¿Por qué usamos Vault?

1. Vault **reduce** la necesidad de credenciales estáticas y codificadas.
2. Utiliza **identidades confiables** para centralizar contraseñas y controlar el acceso.
3. **Cifra datos confidenciales** tanto en tránsito como en reposo utilizando claves de cifrado protegidas y administradas de forma centralizada, todo a través de una única API y flujo de trabajo.

### Instalación de Vault

[Instalación de Vault](http://es.javierblog.com/instalacion-de-hashicorp-vault-para-produccion-part-1/)

[Vault GitHub](https://github.com/hashicorp/vault)

<iframe
width="100%" height="315" src="https://www.youtube.com/embed/xyx9K_j_HXg"  frameBorder="0" allowFullScreen loading="lazy"> </iframe>

* * *

## IPFS

<p align="left">
	<a href="https://ipfs.io/">
		<img alt="Logo de IPFS" src="https://miro.medium.com/max/1400/1*RpQmoRu1D-rvWL1dfpDHgQ.png" width="30%" loading="lazy"/>
	</a>
</p>

> Un protocolo de hipermedios peer-to-peer diseñado para preservar y hacer crecer el conocimiento de la humanidad al hacer que la web sea actualizable, resistente y más abierta.

- **Sitio Web**: [IPFS](https://ipfs.io/)

## Almacenamiento Descentralizado - IPFS

<figure className="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/5Uj6uR3fp-U"  frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

<figure className="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/HUVmypx9HGI"  frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>
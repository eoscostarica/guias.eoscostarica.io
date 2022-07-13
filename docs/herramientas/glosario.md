---
id: glosario
title: Glosario
sidebar_label: Glosario
description: Glosario de terminos relevantes para el desarrollo de aplicaciones de EOS
keywords: [glosario, terminos, relevantes, EOS, EOS Costa Rica]
---

Lista de términos necesarios para comprender un poco mas los contenidos presentes en esta guía. 

## **A**


### ACL (Lista de control de acceso)

Es un filtros de tráfico de una lista de redes y acciones correlacionadas usados para mejorar la Seguridad. Bloquea o permite que los usuarios accedan los recursos específicos.

* * *

### Actions (EOSIO)

Funcionalidad expuesta por un contrato inteligente que se ejerce al pasar los parámetros correctos a través de una transacción aprobada a una red `EOSIO `.

* * *

### Actions (Hasura)

Las `acciones` son una forma de extender el esquema de Hasura con lógica empresarial personalizada mediante consultas y mutaciones personalizadas.

Se pueden agregar acciones a Hasura para manejar varios casos de uso, como la validación de datos, el enriquecimiento de datos de fuentes externas y cualquier otra lógica empresarial compleja.


* * *

### Active Permission

Dentro de los permisos de una cuenta, este es por defecto el permiso secundario principal del propietario. El permiso activo puede realizar todas las acciones de una cuenta que no sea reestructurar la estructura del permiso. Es uno de los dos permisos predeterminados que vienen con una cuenta nueva, propietaria y activa.

* * *

### Airdrop

Es un método general para colocar tokens en cuentas EOS. Es una distribución de una ficha o moneda de criptomoneda , generalmente gratis, a numerosas direcciones de billetera.

* * *

### Airgrab

El modelo  `Airgrab` está diseñado para ser una forma más eficiente de capital para implementar tokens para desarrolladores de dApp. Si utiliza el token Airgrab, significa que usará su propia RAM personal y no los desarrolladores de dApp como lo hace en un Airdrop, por lo que es más barato para el desarrollador de dApp.


* * *

### API (Interfaz de Programación de Aplicaciones) 

Conjunto de funciones y procedimientos que permiten la creación de aplicaciones que acceden a las características o datos de un sistema operativo, aplicación u otro servicio especifico.


* * *

## **B**

### Backend

Backend es la capa de acceso a datos de un software, que no es directamente accesible por los usuarios,contiene la lógica de la aplicación que maneja dichos datos. El Backend accede al servidor, que es una aplicación especializada que entiende la forma como el navegador solicita información.

* * *

### Billeteras

Las billeteras son clientes que almacenan llaves privadas asociadas con los permisos de una o más cuentas. Idealmente, una billetera tiene un estado bloqueado (encriptado) y desbloqueado (sin encriptar) que está protegido por una contraseña de alta entropía.

* * *

### Blacklist (Lista negra)

Una lista negra es una medida que un nodo de la cadena de bloques puede poner en práctica para impedir que bloquee cualquier transacción que haya sido autorizada por una lista definida de cuentas bloqueados o cualquier transacción que interactúe con una lista definida de contratos. Cada nodo puede definir su propia lista negra, que no se puede ver públicamente. 

* * *

### Blockhain 

Es una lista creciente de registros, llamados bloques, que están vinculados mediante criptografía. Cada bloque contiene un hash criptográfico del bloque anterior, una marca de tiempo y datos de transacción (generalmente representados como un árbol Merkle).

* * *

### Block Explorer (Explorador de Bloques)

Un explorador de bloques es un programa o sitio web accesible a través de un navegador que permite a un usuario buscar y navegar por los bloques de una cadena de bloques, sus contenidos y sus detalles relevantes.

* * *

### Block Height (Altura del Bloque)

Se define como el número de bloques en la cadena entre un bloque dado y el primer bloque en la cadena de bloques. Por ejemplo una altura de bloque de 500 se refiere al bloque número 500 de esa cadena. 

* * *

### Block One

 `Block.one` es la compañía que creó el software EOSIO. Es un productor de software de código abierto altamente escalable y de alto rendimiento, está a la vanguardia del desarrollo de la próxima generación de Internet.

* * *

### Block Producer (Productor de Bloques)

Los productores de bloques son una de las innovaciones principales de Block.one, son las entidades descentralizadas que rigen la cadena de bloques EOSIO. En lugar de ser administrado por un pequeño número de grupos mineros, EOSIO tendrá un grupo en constante cambio de 21 productores de bloques.

* * *

### Bloque 

Los bloques son archivos donde los datos pertenecientes a la cadena de bloques se registran de forma permanente. Almacenan algunas o todas las transacciones más recientes que aún no han ingresado a ningún bloque anterior. Un bloque es un almacén permanente de registros que una vez escritos no pueden ser alterados o eliminados.

* * *

### BOSCore

Es la primera cadena de bloques DPoS equipada con IBC. Su objetivo es refactorizar escenarios comerciales con tecnología descentralizada y construir un ecosistema de blockchain creíble que admita miles de millones de usuarios.

* * * 

### Bytecode Canónico

Es utilizado para la comunicación entre diferentes formatos de datos. Una forma de integración de aplicaciones empresariales, pretende reducir los costos y estandarizar las definiciones acordadas de datos asociados con la integración de los sistemas de negocio.

* * *

## **C**

### CDT (Herramientas de Desarrollo de Contratos)

Es un kit de herramientas de desarrollo de contratos inteligentes completo con un conjunto de herramientas y utilidades necesarias para el desarrollo de EOSIO Smart Contracts. Proporciona soporte para el Gnu & C++ 11 style creando una forma más confiable de declarar su estructura de contrato inteligente y las estructuras de datos asociadas.

* * *

### Chain ID

Una ID de cadena es una configuración de blockchain que afecta la formación de una dirección. El enlace en formato binario de transacción entre la dirección y la ID de la cadena hace que sea imposible mover transacciones entre diferentes redes de blockchain.

* * *

### Cleos 

Es la herramientas de lineas de comandos que se conecta con el API expuesto por `nodeos` y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes.

* * *

### Contratos Inteligentes

Es software registrado en el blockchain y ejecutado en los nodos de EOSIO, esto implementa las semánticas de un contrato cuyo registro de solicitudes de acciones están siendo guardadas en el blockchain. El Contrato Inteligente define la interfaz (acciones, parámetros, estructuras de datos) y el código que implementa la interfaz.

* * *

### CPU

La CPU está procesando la potencia, la cantidad de CPU que tiene una cuenta se mide en microsegundos (μs), se conoce como CPU bandwith, el comando `cleos get account` emite la cantidad de tiempo de procesamiento que una cuenta tiene a su disposición al presionar acciones a un contrato.

* * *

### Cuentas

Una cuenta en `EOSIO` es un nombre legible para humanos que se almacena en la cadena de bloques. Puede ser propiedad de un individuo o grupo de individuos dependiendo de la configuración de los permisos. Se requiere una cuenta para transferir o enviar cualquier transacción válida a la cadena de bloques.

* * *

## **D**

### DApps
    
Son aplicaciones o programas digitales se ejecutan en una red de computadoras blockchain o P2P en lugar de una sola computadora, estas están fuera del alcance y control de una sola autoridad.

* * *

### DevOps

Es un conjunto de prácticas que combina el desarrollo de software y las operaciones de TI. Su objetivo es acortar el ciclo de vida del desarrollo de sistemas y proporcionar una entrega continua con alta calidad de software.

* * *

### dfuse

Es una plataforma para capacitar a desarrolladores en dapp con capacidades para crear aplicaciones modernas de blockchain con interfaces rápidas y fluidas que brindan experiencias de usuario excepcionales.

* * * 

### Docker

Es un conjunto de productos de plataforma como servicio que utiliza la virtualización a nivel del sistema operativo para entregar software en paquetes llamados contenedores. Los contenedores están aislados unos de otros y agrupan su propio software, bibliotecas y archivos de configuración; pueden comunicarse entre sí a través de canales bien definidos. Todos los contenedores son ejecutados por un solo núcleo del sistema operativo, por lo tanto, usan menos recursos que las máquinas virtuales.

* * *

### DPoS

Es un algoritmo de consenso desarrollado para asegurar una cadena de bloques, esto al garantizar la representación de las transacciones dentro de ella. DPoS está diseñado como una implementación de democracia basada en la tecnología, utilizando procesos de votación y elecciones para proteger blockchain de la centralización y el uso malicioso.

* * *

## **E**

### EOS

`EOS` es un sistema descentralizado basado en blockchain que permite el desarrollo, alojamiento y ejecución de aplicaciones descentralizadas a escala comercial ( dApps ) en su plataforma. EOS admite todas las funciones básicas necesarias para permitir que las empresas y las personas creen aplicaciones basadas en blockchain de una manera similar a las aplicaciones basadas en la web, como proporcionar acceso seguro y autenticación, permisos, alojamiento de datos, administración de uso y comunicación entre las dApps e internet.

* * *

### EOSHub

Es una plataforma móvil que ofrece los beneficios de EOS a las personas.
Es una forma fácil y segura de ayudar a los usuarios a acceder a varias funciones de EOS como tokens, votación, gestión de recursos y comercio de RAM.

* * * 

### EOS Rate

`EOS Rate` es un dApp de código abierto que permite a los titulares de tokens EOS calificar a los productores de bloques (BP) en solo unos pocos clics. Los usuarios pueden acceder a un sistema de calificación y portal de votación, lo que facilita a los titulares de tokens tomar una decisión informada.

* * *

### EOS Studio

`EOS Studio` es un IDE gráfico unificado para acelerar el desarrollo de las dApps Integrado con varias herramientas necesarias para EOSIO.

* * * 

### EOSCR

EOS Costa Rica es una startup derivada de la empresa pionera Sistemas Edenia Internacional SA, constituida en 1987 y que opera como proveedor de infraestructura blockchain desde 2013. En EOS Costa Rica gestionamos la infraestructura para las redes EOSIO  y desarrollamos dApps que enfatizan la soberanía individual y promueven la adopción empresarial. También proporcionamos una plataforma abierta para que los desarrolladores innoven, así como programas de capacitación para aumentar las oportunidades en el espacio blockchain.

* * *

### Eosfinex

`Eosfinex` es un intercambio descentralizado de alto rendimiento construido en EOS.io. tecnología. `Eosfinex` combina la escalabilidad y la velocidad de EOS con la experiencia líder de la industria de Bitfinex para ofrecer un intercambio `en cadena` construido en torno a una plataforma rápida, transparente y sin confianza para el comercio de activos digitales.

* * *

### EOSIO

`EOSIO` es una cadena de bloques diseñada para facilitar la operación de un nuevo tipo de programa llamado aplicación descentralizada (`dapp`).
Su tecnología intenta resolver problemas históricos al usar blockchains para ejecutar dapps, ya que las aplicaciones populares incluso han obstruido la capacidad en blockchains más grandes y más desarrollados, lo que resulta en problemas de rendimiento para todos los usuarios.

* * *

### EOSJS

Es una biblioteca creada para controlar fácilmente la cadena de bloques EOS con Javascript. Se puede decir que fue hecho para usar fácilmente la API `HTTP de EOS (nodeos)`. (web3.js en Ethereum, neon-js en Neo).

* * *

### EOSQ

Es un explorador de bloques de alta precisión que proporciona acceso a datos precisos, detallados y procesables sobre cuentas, acciones y productores de bloques.

* * *

### EOSX

Es un explorador de bloques, billetera y monitor de red, todo en uno. Está diseñado para ser fácil, rápido y limpio.

* * *

## **F**

### Fiat

El dinero fiduciario (`fiat`) es una moneda emitida por el gobierno que no está respaldada por un producto físico, como el oro o la plata, sino por el gobierno que la emitió.

* * *

## **G**

### Genesis JSON

`genesis.json` es el archivo que define el `Genesis block`, el cual es el bloque inicial de la cadena de bloques. Este es como la "configuración" de su blockchain. Por ejemplo, la configuración de la cadena y el nivel de dificultad para extraer bloques.

* * * 

### GitHub

Es un plataforma que proporciona alojamiento para el control de versiones de desarrollo de software, ademas, permite manejar control de versiones distribuidas y la funcionalidad de gestión de código fuente, así como de sus propias características. Proporciona control de acceso y varias funciones de colaboración, como seguimiento de errores , solicitudes de funciones, gestión de tareas y wikis para cada proyecto.

* * *

### GraphQL

Es un lenguaje de consulta para API, utiliza un tiempo de ejecución para completar esas consultas con sus datos existentes. GraphQL proporciona una descripción completa y comprensible de los datos en su API, brinda a los clientes el poder de pedir exactamente lo que necesitan y nada más, facilita la evolución de las API con el tiempo y permite poderosas herramientas para desarrolladores.

* * *

## **H**

### Hackathon

Un `hackathon` es evento (competencia) en el que se reunen programadores informáticos, diseñadores gráficos, diseñadores de interfaces, gerentes de proyectos y tratan de trabajar en proyectos relacionados con tecnologia y problemas especificos.

* * *

### Hapi

Es un servicio backend para lógica de negocios personalizadas, integrado con Hasura, usando actions.

* * *

### Hardware Biométrico

Estos son dispositivos tecnológicos que permiten percibir datos biométricos de los seres humanos u otros objetos, un ejemplo de ello es el reconocimiento fácil con el que cuentan algunas cámaras de seguridad y dispositivos móviles, también el desbloqueo de artefactos por medio de huellas dactilares, por mencionar algunos.

* * *

### Hash

Es el proceso de transformar una cadena en un valor o clave de longitud fija. Una cadena de datos siempre producirá el mismo hash, por lo que se usa como un medio para verificar el contenido de la cadena contra el contenido esperado.

* * *

### Hasura 

Es un servidor GraphQL ultra rápido que le ofrece API GraphQL en tiempo real sobre Postgres, con disparadores de webhook en eventos de bases de datos y esquemas remotos para la lógica empresarial.

También ayuda a construir aplicaciones GraphQL respaldadas por Postgres o moverse gradualmente a GraphQL para aplicaciones existentes que usan Postgres.

* * *

### Head Block

El `Head Block` es el último bloque escrito en la cadena de bloques, almacenado en bloques reversibles.

* * * 

### Httpie

Es un cliente HTTP de línea de comandos fácil de usar para la era API. Viene con soporte JSON, resaltado de sintaxis, sesiones persistentes, descargas tipo wget, complementos y más.

* * *

## **I**

### IAC (Infraestructura como Código)

Es el proceso de gestión de centros de datos informáticos a través de archivos de definición legibles por máquina, en lugar de configuración de hardware físico o herramientas de configuración interactivas.

* * *

### IBC (Comunicación Inter-Blockchain)

Es una herramienta por la cual múltiples blockchains pueden comunicarse entre sí. Esta puede usarse para enviar tokens de una cadena a otra, o para expandir la capacidad de una red al aumentar el número de cadenas que se ejecutan en paralelo.

* * *

### ICO (Oferta Inicial de Manedas)

Método popular para distribuir el suministro inicial de monedas (tokens)  vendiéndolos a cambio de moneda fiduciaria u otras criptomonedas.

* * *

### Inline Action

Son acciones que se crean dentro de un contrato inteligente. Una sola acción autorizada por un usuario puede crear muchas acciones posteriores que se ejecutarán dentro de una sola transacción o pueden también crear transacciones distintas.

* * *

### Immutable

Término utilizado para referirse a algo que no se puede cambiar.

* * *

### IPFS (Almacenamiento Descentralizado)

Es un mecanismo de almacenamiento distribuido para colocar archivos en línea para almacenamiento descentralizado.

* * *

### Issue

Los `issues` son una excelente manera de realizar un seguimiento de las tareas, mejoras y errores para sus proyectos a través de la plataforma de GitHub.

* * *

## **J**

### jq

Es una liviana y flexible línea de comandos para procesar archivos JSON.

* * *

### Jungle Testnet

`Jungle TestNet` sirve como `sand box` para muchos equipos de desarrollo y productores de bloques EOS, el cual cuenta con un monitor de net.

* * *

## **K**

### Kanban 

Un tablero `Kanban` es una herramienta que nos permite visualizar un flujo de trabajo de un equipo, creando columnas con las etapas más importante del desarrollo del proyecto. En él se asignan tareas a los miembros del equipo, permitiendo una mejor organización del tiempo y los recursos.

* * *

### KEOSD

Funciona como billetera para manejar las llaves para EOSIO. Es el componente que almacena de forma segura las claves EOSIO en billeteras.

`keosd = clave + eos`

* * * 

### Kubernetes

`Kubernetes` es una plataforma portátil, extensible y de código abierto para gestionar cargas de trabajo y servicios en contenedores, que facilita tanto la configuración declarativa como la automatización. Tiene un ecosistema grande y de rápido crecimiento. Los servicios, el soporte y las herramientas de Kubernetes están ampliamente disponibles.

* * *

## **L**

### LACCHAIN

`LACChain` es una iniciativa de BID Labs (parte del Banco Interamericano de Desarrollo) cuyo propósito es acompañar y acelerar el desarrollo del ecosistema de blockchain en Latinoamérica. LACChain busca establecer consorcios nacionales en la región, desarrollar y promover estándares de interoperablidad en redes, y desarrollar y dar mantenimiento a infraestructuras interoperables de blockchain.

* * *

### LatamLink 

`LatamLink` es una alianza regional voluntaria liderada por empresas tecnológicas latinoamericanas. Desarrollamos un testnet basado en EOSIO para la red LACChain con el fin de resaltar los beneficios de esta tecnología. LatamLink utiliza una versión pública permisionada de la tecnología EOSIO para que desarrolladores y organizaciones puedan probar sus aplicaciones descentralizadas e infraestructura.

* * *

### Latencia 

Periodo de tiempo que transcurre entre la comunicación de un paquete atraves de la red.

* * *

### Launch

Término utilizado para referirse a el comienzo de una cadena de bloques.

* * * 

### LIB (Último Bloque Irreversible)

Un bloque se considera irreversible (es decir, inmutable) en una cadena de bloques basada en EOSIO cuando 2/3 de los productores de bloques elegidos actualmente lo han reconocido.

* * *

### Llaves Privadas

Una llave privada es una clave secreta utilizada para firmar transacciones. En EOSIO, la autoridad de una clave privada está determinada por su asignación a un nombre de cuenta EOSIO.

* * *

## **M**

### Mainnet

El `Mainnet` es la principal cadena de bloques EOSIO bajo el `ChainID: aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906`.  Como el software EOSIO es de código abierto y está disponible de forma gratuita, puede haber muchas instancias de él.

* * * 

### Merkle Tree

Un `Merkle Tree` es un árbol en el que cada nodo de hoja se etiqueta con el hash de un bloque de datos, y cada nodo que no es de hoja se etiqueta con el hash criptográfico de las etiquetas de sus nodos secundarios. 

Los árboles de hash permiten la verificación eficiente y segura del contenido de grandes estructuras de datos.

* * *

### Micro Fork

Un `microfork` ocurre cuando un productor de bloques comienza a producir bloques con la misma altura de bloque que un bloque que se produjo recientemente. 

* * *

### Multi-Sig

`Multisig` es un corto plazo para múltiples firmas. Se utiliza para describir el caso en el que se requiere el permiso de más de una cuenta para ejecutar una transacción. 

* * *

## **N**

### Network

La NET es un recurso muy importante en las cadenas de bloques basadas en EOSIO. Es el ancho de banda de red (medida en bytes) necesario para almacenar transacciones en una cadena de bloques. 

* * * 

### Nodeos

Es el `daemon` central del nodo EOSIO que se puede configurar con complementos para ejecutar un nodo. Los usos de ejemplo son la producción en bloque, los puntos finales de API dedicados y el desarrollo local. 

`nodeos = nodo + eos`

* * * 

### Nodos

Un nodo es la base fundamental de la tecnología blockchain, conforman la infraestructura de una cadena de bloques. Todos los nodos en una cadena de bloques están conectados entre sí e intercambian constantemente los últimos datos de la cadena de bloques para que todos los nodos se mantengan actualizados.

* * * 

### NPM

[NPM](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/) `Node Package Manager` es un repositorio en línea para la publicación de proyectos de código abierto, ademas permite la instalación de paquetes, administración de versiones y administración de dependencias. 

* * * 

## **O**

### Oracle

Es un agente que encuentra y verifica las ocurrencias del mundo real y envía esta información a una cadena de bloques para que la usen los contratos inteligentes.

* * *

### Owner Permission

En la estructura de permisos de una cuenta, el propietario se encuentra en el nivel superior de permisos. El propietario puede reestructurar todos los permisos de nivel inferior. Es uno de los dos permisos predeterminados que vienen con una cuenta nueva, `propietaria` y `activa`.

* * *

## **P**

### Permisos

Es un mecanismo de seguridad que determina si un mensaje está debidamente autorizado o no mediante la evaluación de su firma.

* * * 

### Podcasts EOS

Conjunto de sitios relacionados con EOS en el cual constantemente se esta agregando nuevo contenido a los canales. Este contenido puede ser en formato de video, audio o blogs. 

* * * 

### Pull Request

Los `pull request` permiten informar a otros usuarios sobre los cambios que ha realizado en una rama de un repositorio en GitHub. 

Una vez que se abre un `pull request`, se puede analizar y revisar los posibles cambios con los colaboradores y agregar `commits` de seguimiento antes de que sus cambios se fusionen en la rama base.

* * * 

### Proof of Work

Los nodos mineros compiten para encontrar un nonce agregado al encabezado de un bloque que hace que el bloque tenga alguna propiedad deseada (típicamente un cierto número de ceros en los bits más significativos del hash criptográfico del encabezado del bloque). Al hacer que sea computacionalmente costoso encontrar tales nonces que hacen que los bloques sean válidos, se hace difícil para los atacantes crear una bifurcación alternativa de la cadena de bloques que el resto de la red aceptaría como la mejor cadena. 

* * *

### Proxy

Es el acto de asignar su voto hacia otra cuenta. Si un usuario no desea, o no tiene el tiempo disponible, de  investigar qué productores de bloques deberían recibir su voto (pero aún así desea participar en la votación), puede delegar su poder de voto en otra cuenta. 

* * *

## **Q**

* * *

## **R**

### RAM

La RAM es un tipo de memoria utilizada para almacenar información de la cuenta, como claves, saldos y estado del contrato en una cadena de bloques basada en EOSIO.

* * * 

### Recursos

Las cuentas de EOSIO cuenta con tres tipos de recursos que deben mantener: `RAM`, `CPU` Y `Net`.

* * *

### REX

`REX` (Resource Exchange) es un mercado de alquiler de recursos de CPU y red en el que los titulares del token central de una cadena de bloques pueden comprar y vender sectores del grupo REX en forma de tokens REX. Los usuarios de Blockchain pueden alquilar recursos de CPU y red del grupo REX.

* * *

### Ricardian Contract

En el contexto de blockchain basado en EOSIO, `Ricardian Contract` es un documento digital que acompaña a un contrato inteligente y define los términos y condiciones de una interacción entre el `contrato inteligente` y sus usuarios, escrito en texto legible para humanos, que luego se firma y verifica criptográficamente. Es fácilmente legible tanto para humanos como para programas, y ayuda a proporcionar claridad a cualquier situación que pueda surgir en las interacciones entre el `contrato inteligente` y sus usuarios.

* * *

## **S**

### Snapshot

En cualquier momento dado, se puede tomar una instantánea (`Snapshot`) del estado total de la cadena. Por ejemplo, esto podría ser usado por un token que quiera lanzar a todos los titulares de tokens actuales en función de sus tenencias actuales.

* * *

### SPOF (Punto Único de Falla)

Es una parte de un sistema que si falla detendrá el funcionamiento de todo el sistema. Estos no son deseables en ningún sistema con un objetivo de alta disponibilidad o confiabilidad.

* * * 

### Squash Merge

El Squash es una opción de `merge` que permite condensar el historial de  Git de un `branch` cuando se completa un `pull request`. Este proceso toma todas los `commits` de un `branch` especifico y los agrega en un solo commit dentro de la rama predeterminada. 

* * * 

### Stablecoin

Una un `token` cuyo valor está destinado a permanecer estable. Esto se puede hacer vinculando a otra moneda o token, o algorítmicamente. Muchas monedas estables se vinculan al dólar estadounidense, lo que significa que una ficha siempre debe canjearse por un dólar estadounidense.

* * *

### Stake

El `Staking` es el acto de bloquear tokens para recursos en una red EOSIO. Esto incluye, pero no se limita a, tiempo de CPU, RAM y gobierno en cadena.

* * * 

### Standby BP

Son un conjunto de aproximadamente 100 nodos completos que han expresado el deseo de ser seleccionados como productores de bloques, y son capaces de hacerlo a pedido. Cada vez que la cadena necesita reemplazar un BP existente por uno nuevo, el nuevo se extrae del grupo de reserva.

* * *

### StoryBook

[StoryBook](https://storybook.js.org/) es una herramienta de código abierto para desarrollar componentes de UI de forma aislada para React, Vue y Angular.

* * * 

### System Account

Todo lo que forma parte de EOSIO que no es parte del núcleo se denomina sistema, Ejemplo: cuentas del sistema, cuentas privilegiadas, contratos del sistema. 

Desde un punto de vista arquitectónico, los componentes del sistema se ubican sobre los componentes principales / nativos.

* * *

## **T**

### TaPoS - Transaction as Proof of Stake

`TaPoS` se utiliza para garantizar que un usuario obtenga el estado reciente de la parte superior de la cadena de bloques para demostrar que conoce el estado de la cadena al firmar una transacción. 

* * * 
	
### Telos

[Telos](https://www.telos.net/) es una plataforma blockchain sin permisos de alto rendimiento para aplicaciones descentralizadas con almacenamiento avanzado de datos y funciones de gobernanza de la cadena.

* * * 

### Terraform 

[Terraform](https://www.terraform.io/) es una herramienta para construir, cambiar y versionar infraestructura de forma segura y eficiente. Terraform puede administrar proveedores de servicios existentes y populares, así como soluciones internas personalizadas.

* * * 

### TestNet

Una `red` de prueba o `testnet` es una instancia de la plataforma EOSIO destinada a fines de prueba. En general, el token nativo no tiene valor y se entrega a los desarrolladores para que puedan probarlo.

* * * 

### Tokens

Es la unidad de medida de una criptomoneda.

* * * 

### Transacciones 

Es una combinación de una o más acciones. Por lo general, el resultado de la ejecución de un contrato inteligente.

* * * 

### TPS (Transacciones por Segundo)

Una métrica mediante la cual se mide el rendimiento de una cadena de bloques.

* * * 

## **U**

### UAL (Universal Authenticator Library)

Desarrollada por EOSIO Labs, la [biblioteca de autenticación universal (UAL)](https://github.com/EOSIO/universal-authenticator-library) permite a los desarrolladores de aplicaciones integrarse con una variedad de autenticadores (billeteras, exploradores de aplicaciones, administradores de claves, etc.) mediante la codificación de una única API universal.

* * * 

### UX Design

Es el proceso de diseño que utilizan los equipos de desarrollo para crear productos que brindan experiencias gratas para los usuarios.

* * *

## **V**

### Vote

La votación es una parte fundamental del sistema EOSIO. La aplicación de votación más utilizada es elegir qué productores de bloques que realmente produzcan bloques para la red. La votación también se utilizará para ayudar a recopilar las decisiones comunales a través de las cuales cambiaremos el curso de la red.

* * *

### Vote Decay

Para evitar a los usuarios de emitir un voto por Block Producers y luego no actualizar su `voto` periódicamente, se introdujo una disminución en la fuerza relativa de los votos antiguos. Para mantener la fuerza máxima de voto, un usuario debe votar al menos una vez por semana.

* * *

## **W**

### Wasm

Las cadenas de bloques basadas en EOSIO ejecutan aplicaciones y códigos generados por el usuario utilizando WebAssembly.

WASM es un estándar web emergente con soporte generalizado de Google, Microsoft, Apple y otros. En este momento, la cadena de herramientas más madura para crear aplicaciones que compilan WASM es clang / llvm con su compilador C / C ++. 

* * *

### Wallet

Las `Wallets` son clientes que almacenan llaves privadas asociadas con los permisos de una o más cuentas. Idealmente, una billetera tiene un estado bloqueado (encriptado) y desbloqueado (sin encriptar) que está protegido por una contraseña de alta entropía.

* * *

### Whale 

Hace referencias a un titular de fichas que tiene una apuesta muy grande.

* * *

### Whitelist

Una lista blanca es una medida subjetiva que un nodo de blockchain puede poner en práctica para permitir que las transacciones se coloquen en un bloque solo si se enumeran en su cuenta o lista blanca de contrato. Cada nodo puede especificar su propia lista blanca, que no se puede ver públicamente.

* * *

### WPS (Sistemas de Propuestas de Trabajadores)

Es un sistema a través del cual los fondos comunales se utilizarían para apoyar mejoras en la cadena de bloques, proyectos comunitarios y cualquier cosa que la comunidad considerara merecedora de fondos públicos. Está configurado para ser financiado a través de una parte de la inflación.

* * *

## **X**

* * *

## **Y**

### Yarn

[Yarn](https://yarnpkg.com/) es un administrador de paquetes para proyectos web compatible con la estructura del administrador de paquetes npm (package.json y node_modules).

* * * 

## **Z**

### Zeplin

[Zeplin](https://zeplin.io/) es una herramienta colaborativa para diseñadores y desarrolladores de Front-End que permite un flujo de trabajo en el cual puedan crear diseños, facilitando la comunicación y una mejor organización del tiempo.

* * *


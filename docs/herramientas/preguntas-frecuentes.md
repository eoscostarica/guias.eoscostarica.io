---
id: preguntas-frecuentes
title: Preguntas Frecuentes de Desarrolladores
sidebar_label: Preguntas Frecuentes
description: Preguntas frecuentes de desarrolladores blockchain EOSIO
keywords: [FAQ, Preguntas Frecuentes, Blockchain, Dessarrolladores, EOS, EOSIO]
---


En EOS Costa Rica nos interesan las dudas de nuestros ingenieros.

El buen desarrollo es clave para el éxito de cada uno de nuestros productos, por eso buscamos brindar las mejores respuestas a cada una de sus preguntas.

A continuación, se muestra una lista de las preguntas más frecuentes durante el proceso de desarrollo documentado por nuestros trabajadores.


## ¿Qué es SSH (Secure Shell)?

El `SSH` también se conoce como Secure Shell o Secure Socket Shell, es un protocolo que puede utilizar para conectarse y autenticarse en servidores y servicios remotos. [Más sobre SSH en GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh).


## ¿Cuál es la diferencia entre una cuenta regular y una cuenta Blockchain?

| Cuenta regular | Cuenta Blockchain |  
|------|------|
|-La contraseña se almacena en los servidores de la empresa <br/> -Propenso a ser pirateado <br/> -Sin transparencia   | -Debe mantenerse en secreto <br/> -Criptografía asimétrica <br/> -Clave pública y clave privada <br/> -Diferentes pares de claves tienen diferentes permisos asociados   |


## ¿Qué es EOSIO?

Es una plataforma blockchain. Construido para casos de uso públicos y privados. Se puede personalizar para adaptarse a una amplia gama de necesidades comerciales en todas las industrias con una gran seguridad basada en roles.


## ¿Cuál es la diferencia entre una clave pública y una privada?


Ellas son parte del `Cifrado asimétrico`. Imagine una cerradura donde se usa la clave pública para cerrar la cerradura (encriptar el mensaje) y la clave privada se usa para abrir la cerradura (descifrar el mensaje). 
Mencionado en el artículo de Whitfield Diffie y Martin Hellman 1976 `Nuevas direcciones en criptografía`.

>La definición de clave pública y privada se pueden encontrar en la sección de Herramientas, Glosario.

[Más información sobre cómo funciona](https://www.preveil.com/blog/public-and-private-key/)


## ¿Cuáles son las mejores prácticas para programar en JavaScript?


Seguir ** un estándar facilita la comprensión del código **, más de un ingeniero trabaja en un proyecto de software y ser capaz de comprender el código es vital para el flujo de desarrollo del producto final. Algunas de las recomendaciones más destacadas de este estándar son las siguientes:
- Usar comillas simples

    ```js
    console.log('hello there')    // ✓ ok
    console.log("hello there")    // ✗ evitar
    console.log(`hello there`)    // ✗ evitar
    $("<div class='box'>")        // ✓ ok
    console.log(`hello ${name}`)  // ✓ ok
    ```

- Agrega un espacio después de una palabra clave

    ```js
    if (condition) { ... }   // ✓ ok
    if(condition) { ... }    // ✗ evitar
    ```

- Agregue un espacio antes de la declaración de los paréntesis de la función

    ```js
    function name (arg) { ... }   // ✓ ok
    function name(arg) { ... }    // ✗ evitar
    run(function () { ... })      // ✓ ok
    run(function() { ... })       // ✗ evitar
    ```

Para obtener más información sobre las pautas a seguir, consulte [JavaScript Standard Style](https://standardjs.com/rules.html).

## ¿Por qué Blockchain?

Un Blockchain es un registro de datos que funciona como un gran libro de cuentas compartido entre varios usuarios o "nodos" en el que las transacciones se registran de forma confiable y segura. En este libro mayor, se registran "bloques", que son colecciones de datos. Estos bloques están conectados entre sí de forma cronológica creando una especie de cadena.
Para obtener más detalles, consulte [¿Cómo funciona una cadena de bloques?](https://eoscostarica.medium.com/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3)

## ¿Cómo funciona un Contrato Inteligente?

Un contrato es simplemente un acuerdo de formalización entre dos o más partes. Debe definir el alcance, la forma de actuar y las consecuencias de actuar de forma diferente. Sin embargo, los contratos tradicionales pueden presentar un problema: están sujetos a interpretación.
Para obtener más detalles sobre un contrato inteligente, puede ver [¿Qué es un contrato inteligente?](https://eoscostarica.medium.com/qu%C3%A9-es-un-smart-contract-793d2042c65d)

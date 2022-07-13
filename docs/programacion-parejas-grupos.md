---
id: programacion-parejas-grupos
title: Programación en Parejas o Grupos (Pair Programming)
sidebar_label: Programación en Parejas o Grupos
description: Una forma de trabajar en parejas o grupos llamada pair programming para asegurar que los trabajos se realicen bien de forma colaborativa.
keywords: [programación en parejas, grupos, pair programming, desarrollo pair programming, software, EOS, EOS Costa Rica, Qué es pair programming, Cómo aplicar pair programming]
---
import useBaseUrl from '@docusaurus/useBaseUrl';


El desarrollo de un software nuevo no es un proceso sencillo, dependiendo del tamaño del programa, se deberá tener en cuenta una gran cantidad de posibles coyunturas, funciones y cuestiones problemáticas.  
De ahí que en estos últimos años se hayan ido desarrollando otros métodos de trabajo más modernos que permiten programar con mayor eficiencia y generar un código libre de errores.


## Pair Programming

### ¿Qué es Pair Programming?
El pair programming específica que siempre haya dos personas trabajando al mismo tiempo en el código y que, en la medida de lo posible, se sienten juntas. Una se encarga de escribir el código y la otra de supervisarlo en tiempo real. Al mismo tiempo, están constantemente intercambiando impresiones: debaten problemas, encuentran soluciones y desarrollan ideas creativas. 

<div style={{  textAlign: "center" }}>
<img alt="Imagen Pair Programing"  src={ useBaseUrl( 'img/metodosProgramacion/PairProgramming.webp' )} /> </div>

### ¿Cómo se hace?
**Tamaño del equipo:** 2 personas.

### Roles:

- **Conductor:** Se encarga de escribir el código. 
- **Navegador:** Se encarga de supervisar ese código. 

Una de las reglas del pair programming establece que estos dos roles se intercambien con regularidad, de esta manera se evita una posible brecha jerárquica.

### Tipos de Pair Programming:

- **Navegador:** El navegador asume más de los roles tácticos del conductor. En la navegación, el controlador sigue controlando el teclado y escribiendo, pero el navegador dicta instrucciones sintácticas, como qué nombre llamar a una variable o qué método específico llamar. El estilo de navegador del asiento trasero funciona mejor con un principiante como conductor y experto como el navegante, permitiendo que el principiante aprenda haciendo.
- **Ping Pong Pairing:**  Permite a los roles cambiar con frecuencia y obliga a los ingenieros a prestar atención a los aspectos de codificación y pruebas del desarrollo, ganando familiaridad con el proceso.
- **Pomodoro:** Una sesión de emparejamiento típica al estilo Pomodoro dura 25 minutos seguida de un descanso de 5 minutos. El controlador y el navegador cambian de posición. Después de cuatro sesiones de 25 minutos, ambos programadores toman un descanso más largo de 20 minutos. Los descansos forzados y el cambio de posición regular ayudan a garantizar que ambos programadores estén siempre productivos, enfocados y actualizados cuando comienza una sesión.

### Beneficios

- Puede mejorar la productividad general a través del proceso de colaboración.
- Código de mayor calidad como resultado de la revisión en tiempo real.
- Mejores soluciones diseñadas a través de la colaboración compartida.
- Entrega más rápida porque las soluciones a problemas desafiantes se encuentran más rápidamente.
- Mayor enfoque en el código y la tarea de programación sin distracciones.
- Desbloqueo a los desarrolladores atascados.
- Feedback rápido.
- Menos distracciones en los equipos de desarrollo.
- Prácticas recomendadas compartidas.

## Mob Programming

### ¿Qué es Mob Programming?

Un grupo de personas con mucha inteligencia, con grandes retos trabajando en equipo para resolver los retos de manera creativa, con excelencia operacional y trabajando enfocado en entrega de valor constante.
<div style={{  textAlign: "center" }}>
<img alt="Imagen Mob Programing" width="70%" src={ useBaseUrl( 'img/metodosProgramacion/MobProgramming.webp' )} /> </div>

### ¿Cómo se hace?

**Tamaño del equipo:** 3-6 personas.

### Roles:

- **Conductor:** Recibe input del equipo y ejecuta la implementación de las ideas.
- **Navegadores:** Son los que le dan dirección al conductor, también es la voz del equipo.

### Bias for Action:

- Evitar quedarse en conversaciones abstractas por mucho tiempo.
- No discuta un problema por más de 10 minutos (Recomendado).
- Si hay más de una solución a un problema experimente con dos o 3 (Use
paretto).
- Use ejemplos para mantener la conversación caminando.
- Las ideas de los navegadores solo se implementan por el conductor.
- El nivel de habilidad del conductor es clave para que los navegadores desarrollen más las instrucciones.
- Feedback inmediato.
- Aprender o contribuir.
- Agilidad en comunicación.
- Retrospectiva.
- Empatía y respeto.

### Artefactos:

- Backlog de problemas específicos definidos por el product owner o el tech lead.
- Alineación en programación de katas (Código nuevo, corrección de errores, desarrollo impulsado por pruebas, refactorización).
- Test automation.
- Repo - DevOps.

### Tipos de Mob Programming:

- **Expert-Expert:** Mayor productividad y resultados de alta calidad, mínima disrupción de los acercamientos y exploración a retar soluciones existentes.
- **Expert-Novice:** Mayor oportunidad de exploración de soluciones y oportunidades de mentorship para personas nuevas en el equipo. El novato es más propenso a retar soluciones existentes y aporta disrupción, y el experto al enseñar se puede replantear paradigmas existentes. El riesgo de que los expertos no puedan desarrollar paciencia para enseñar puede traer conflicto y afectar la
cultura de la organización.
- **Novice-Novice:** Normalmente no es recomendado para soluciones complejas pero bueno para innovación siempre y cuando se pueda desarrollar con un mentor que pueda generar un role model.
- **With audience:** El equipo está trabajando con una audiencia de partes interesadas o usuarios.

### El Valor del Mobbing:

- Soluciones se entregan más rápido, con mayor calidad por medio del incremento del enfoque.
- Mitiga las tareas tediosas, tiene visibilidad 360 y mejora la automatización.
- Apalanca el entrenamiento entre miembros del equipo.
- Entrega resultados más rápido reduciendo el tiempo del work in progress y eliminando tiempos de handoff entre equipos y mitiga los problemas de comunicación.
- Puede incrementar el tiempo de entrega de una tarea por la cantidad de personas pensando alrededor de una tarea individual, pero bajan aproximadamente 15% de defectos o margen de error, se mitiga refactoring, retrabajo y soporte de la tarea o el entregable.
- Satisfacción se incrementa un 96% entre programadores.
- Entrenamiento ágil.
- Team building y comunicación.
- Más opciones de soluciones para varios problemas a la vez.

### Beneficios para Otras Organizaciones y Servicios

- Reclutamiento.
- Diseño (Servicio, UX, Producción).
- Deuda tecnológica y refactorización.

>Información brindada por:
>**Julian Alvarado**
>- Twitter [@jascorecr](https://twitter.com/jascorecr)  
>- Linkedin: [alvarado.lj.1](https://www.linkedin.com/in/alvaradolj1/)
>- Telegram: https://t.me/joinchat/JWCCqxZZe7tk7ITpztxTsw  
>- Youtube: [Kata Collective](https://www.youtube.com/channel/UC8elsb71RJlP9mG6aQgTc_A)
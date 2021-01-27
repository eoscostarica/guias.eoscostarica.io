---
id: pair-mob-programming
title: Desarrollo de Software en Parejas o Grupos
sidebar_label: Desarrollo de Software en Parejas o Grupos
---
import useBaseUrl from '@docusaurus/useBaseUrl';


El desarrollo de un software nuevo no es un proceso sencillo, dependiendo del tamaño del programa, se deberá tener en cuenta una gran cantidad de posibles coyunturas, funciones y cuestiones problemáticas.  
De ahí que en estos últimos años se hayan ido desarrollando otros métodos de trabajo más modernos que permiten programar con mayor eficiencia y generar un código libre de errores.


## Pair Programming

### ¿Qué es Pair programming?
El pair programming específica que siempre haya dos personas trabajando al mismo tiempo en el código y que, en la medida de lo posible, se sienten juntas. Una se encarga de escribir el código y la otra de supervisarlo en tiempo real. Al mismo tiempo, están constantemente intercambiando impresiones: debaten problemas, encuentran soluciones y desarrollan ideas creativas. 

<div style={{  textAlign: "center" }}>
<img alt="Imagen Pair Programing"  src={ useBaseUrl( 'img/metodosProgramacion/PairProgramming.png' )} /> </div>

### ¿Cómo se hace?
**Tamaño del team:** 2 personas.

#### Roles:
- **Piloto:** Se encarga de escribir el código. 
- **Copiloto:** Se encarga de supervisar ese código. 

Una de las reglas del pair programming establece que estos dos roles se intercambien con regularidad, de esta manera se evita una posible brecha jerárquica.

### Tipos de pair programming:
- **Backset Navigator:** El navegador asume más de los roles tácticos del conductor. En la navegación por asiento trasero, el controlador sigue controlando el teclado y escribiendo, pero el navegador dicta instrucciones sintácticas, como qué nombre llamar a una variable o qué método específico llamar. El estilo de navegador del asiento trasero funciona mejor con un principiante como conductor y experto como el navegante, permitiendo que el principiante aprenda haciendo.
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

### ¿Qué es Mob programming?
Un grupo de personas con mucha inteligencia, con grandes retos trabajando en equipo para resolver los retos de manera creativa, con excelencia operacional y trabajando enfocado en entrega de valor constante.
<div style={{  textAlign: "center" }}>
<img alt="Imagen Mob Programing" width="70%" src={ useBaseUrl( 'img/metodosProgramacion/MobProgramming.png' )} /> </div>

### ¿Cómo se hace?
**Tamaño del team:** 3-6 personas.

### Roles:
- **Conductor:** Recibe input del equipo y ejecuta la implementación de las ideas.
- **Navegadores:** Son los que le dan dirección al conductor, también es la voz del equipo.

### Bias for action:
- Evitar quedarse en conversaciones abstractas por mucho tiempo.
- No discuta un problema por más de 10 minutos (Recomendado).
- Si hay mas de una solución a un problema experimente con dos o 3 (Use
paretto).
- Use ejemplos para mantener la conversación caminando.
- Las ideas de los navegadores solo se implementan por el conductor.
- El skill level del conductor es clave para que los navegadores desarrollen mas las instrucciones.
- Feedback inmediato.
- Aprender o contribuir.
- Agilidad en comunicación.
- Retrospectiva.
- Empatia y respeto.

### Artefactos:

- Backlog de problemas específicos definidos por el product owner o el Tech lead.
- Alignment en programming katas (Código nuevo, bug fixing, test driven development, refactoring).
- Test automation.
- Repo - DevOps.

### Tipos de mob programming:
- **Expert-Expert:** Mayor productividad y resultados de alta calidad, mínima disrupción de los acercamientos y exploración a retar soluciones existentes.
- **Expert-Novice:** Mayor oportunidad de exploración de soluciones y oportunidades de mentorship para personas nuevas en el equipo. El novato es mas propenso a retar soluciones existentes y aporta disrupción, y el experto al enseñar se puede replantear paradigmas existentes. El riesgo de que los expertos no puedan desarrollar paciencia para enseñar puede traer conflicto y afectar la
cultura de la organización.
- **Novice-Novice:** Normalmente no es recomendado para soluciones complejas pero bueno para innovación siempre y cuando se pueda desarrollar con un mentor que pueda generar un role model.
- **With audience:** El equipo está trabajando con una audiencia de partes interesadas o usuarios.

### El valor del mobbing:
- Soluciones se entregan mas rápido, con mayor calidad por medio del incremento del enfoque.
- Mitiga las tareas tediosas, tiene visibilidad 360 y mejora la automatización.
- Apalanca el entrenamiento entre miembros del equipo.
- Entrega resultados mas rápido reduciendo el tiempo del work in progress y eliminando tiempos de handoff entre equipos y mitiga los problemas de comunicación.
- Puede incrementar el tiempo de entrega de una tarea por la cantidad de personas pensando alrededor de una tarea individual, pero bajan aprox 15% de defectos o margen de error, se mitiga refactoring y retrabajo y soporte de la tarea o el entregable.
- Satisfaccion se incrementa un 96% entre programadores.
- Entrenamiento ágil.
- Team building and communication.
- Mas opciones de soluciones para varios problemas a la vez.

### Beneficios para otras organizaciones y servicios.
- Recruiting.
- Diseño(Service, UX, Production).
- Tech debt and refactoring.

>Información brindada por:
>**Julian Alvarado**
>- Twitter @jascorecr  
>- Linkedin: [alvarado.lj.1](https://www.linkedin.com/in/alvaradolj1/)
>- Telegram: https://t.me/joinchatJWCCqxZZe7tk7ITpztxTsw  
>- Youtube: [Kata Collective](https://www.youtube.com/channel/UC8elsb71RJlP9mG6aQgTc_A)
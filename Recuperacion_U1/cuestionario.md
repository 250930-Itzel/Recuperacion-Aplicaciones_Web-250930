# Cuestionario teórico — Recuperación Unidad I

**Estudiante:** Itzel Joseline Sánchez Hernández  
**Carrera:** TSU en Desarrollo de Software Multiplataforma  
**Grupo:** 4C  
**Docente:** M.T.I. Marco A. Ramírez Hernández  
**Asignatura:** Aplicaciones Web

## 1. ¿Cuál es la diferencia entre HTML, CSS y JavaScript dentro de tu portafolio? Explica una tarea específica realizada con cada tecnología.

HTML define la estructura y el contenido de la página, por ejemplo, los títulos, las secciones y las tarjetas del portafolio. CSS controla la presentación visual, como los colores, tamaños, espacios y la adaptación a distintos dispositivos. JavaScript agrega interactividad; por ejemplo, permite que un botón muestre u oculte los detalles de una competencia. En conjunto, HTML organiza, CSS da estilo y JavaScript hace que la página responda a las acciones del usuario.

## 2. ¿Qué ventajas ofrece una estructura semántica con etiquetas como <header>, <nav>, <main>, <section> y <footer> frente al uso indiscriminado de <div>?

Las etiquetas semánticas describen la función de cada parte de la página. `header` identifica la cabecera, `nav` la navegación, `main` el contenido principal, `section` una sección temática y `footer` el pie. Esto hace que el código sea más claro y fácil de mantener, ayuda a las tecnologías de asistencia a interpretar la página y facilita que otros desarrolladores comprendan su organización. Un `div` solo agrupa contenido sin indicar por sí mismo qué función cumple.

## 3. ¿En qué se distinguen los atributos id y class de HTML? Muestra un ejemplo de selector CSS adecuado para cada uno.

El atributo `id` identifica un elemento específico dentro de la página y debe ser único. El atributo `class` permite asignar una misma categoría a varios elementos. En CSS, el selector de id se escribe con `#` y el de clase con un punto. Ejemplo HTML: `<h1 id="titulo">Mi portafolio</h1>` y `<article class="tarjeta">...</article>`. Sus selectores serían `#titulo { color: navy; }` y `.tarjeta { padding: 1rem; }`.

## 4. Explica cómo se aplican Flexbox o CSS Grid para organizar tarjetas responsivas. ¿Qué ajuste harías para pantallas pequeñas?

Flexbox organiza elementos en una dimensión, ya sea en fila o columna, mientras que CSS Grid permite organizar elementos en filas y columnas. Para tarjetas de un portafolio puedo usar Grid con columnas que se ajusten al espacio disponible. Por ejemplo: `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));`. En pantallas pequeñas comprobaría que las tarjetas no sean demasiado estrechas, reduciría los espacios si fuera necesario y usaría una sola columna cuando el ancho no permita mostrar varias cómodamente.

## 5. ¿Cómo funciona el efecto parallax en un fondo y qué consideraciones debes aplicar para garantizar legibilidad y buen comportamiento en dispositivos móviles?

El efecto parallax crea una sensación de profundidad porque el fondo se desplaza a una velocidad distinta de la del contenido al hacer scroll. Puede lograrse con CSS, por ejemplo, usando una imagen de fondo y `background-attachment: fixed` en equipos compatibles. El texto debe mantener buen contraste, por lo que se puede colocar una capa oscura o semitransparente sobre la imagen. En móviles, donde el efecto fijo puede funcionar de manera irregular, conviene desactivarlo y usar un fondo normal para conservar el rendimiento y la legibilidad.

## 6. ¿Qué es el DOM y cómo puede JavaScript seleccionar un elemento y responder a un evento click? Presenta un ejemplo sencillo.

El DOM (Document Object Model o Modelo de Objetos del Documento) representa el documento HTML como una estructura de objetos que JavaScript puede consultar y modificar. Se puede seleccionar un elemento con `document.getElementById()` y escuchar un clic con `addEventListener()`. Ejemplo:

~~~javascript
const boton = document.getElementById('boton');
boton.addEventListener('click', () => {
  alert('Hola');
});
~~~

Cuando la persona pulsa el botón, se muestra el mensaje.

## 7. ¿Qué diferencias hay entre ocultar un elemento con CSS y modificar su contenido o estado mediante JavaScript? Da un caso relacionado con el carrusel o modal.

CSS controla principalmente la apariencia y la visibilidad visual de un elemento. Por ejemplo, `.oculto { display: none; }` lo retira de la presentación de la página. JavaScript puede cambiar clases, contenido o estados como respuesta a una acción. En un modal, JavaScript puede agregar o quitar la clase `oculto` cuando se pulsa “Abrir” o “Cerrar”. Así, CSS define cómo se ve el modal y JavaScript controla cuándo aparece y qué contenido muestra.

## 8. ¿Por qué son importantes las rutas relativas y una estructura ordenada de carpetas para imágenes, audios, videos, CSS y JavaScript al publicar con GitHub Pages?

Las rutas relativas indican dónde se encuentra un recurso con respecto al archivo que lo utiliza, por ejemplo, `css/styles.css` o `img/perfil.jpg`. Una estructura ordenada facilita localizar y actualizar los archivos. En GitHub Pages, las rutas incorrectas pueden provocar que no carguen las imágenes, los estilos, los scripts o los archivos multimedia. Por eso hay que revisar los nombres y las mayúsculas/minúsculas, mantener las carpetas dentro del repositorio y probar los enlaces desde la versión publicada.

## 9. Explica la función de git add, git commit, git push y git merge. ¿Por qué conviene trabajar en una rama de práctica antes de integrar los cambios a main?

`git add` selecciona los cambios que se incluirán en el próximo registro. `git commit` guarda esos cambios en el historial local con un mensaje descriptivo. `git push` envía los commits al repositorio remoto. `git merge` integra los cambios de una rama en otra. Trabajar primero en una rama como `Recuperacion_U1` permite desarrollar y probar sin alterar directamente `main`. Cuando los cambios funcionan, se pueden integrar mediante merge.

## 10. ¿Cuál es el procedimiento general para publicar o actualizar un sitio mediante GitHub Pages y cómo comprobarías que sus enlaces, recursos multimedia e interacciones funcionan correctamente?

Primero guardaría y confirmaría los cambios con Git, y los enviaría al repositorio remoto con `git push`. Después, en GitHub, abriría Settings y la sección Pages, seleccionaría la rama y la carpeta que contienen el sitio según la estructura del repositorio y guardaría la configuración. Cuando GitHub Pages publique la página, abriría la URL indicada. Revisaría todas las secciones y enlaces, comprobaría que las imágenes y archivos CSS/JavaScript carguen, probaría botones e interacciones y verificaría el diseño tanto en escritorio como en móvil. Si algo falla, revisaría las rutas, los nombres de archivo y los errores del navegador.

---

**Nota:** esta versión Markdown es editable. La actividad también solicita entregar el cuestionario en PDF dentro de la carpeta `Recuperacion_U1`; sube el PDF generado a esa ubicación antes de entregar.

# App Student

## Descripción

Este proyecto tiene dos partes: interfaz (cliente) y API (servidor).

Si eres estudiante reconocerás la necesidad de llevar control de los cursos y/o materias que estás tomando, así como de las tareas importantes a realizar. 

Nuestro proyecto intenta proveer algunas herramientas que puedan facilitarte el proceso de aprendizaje. 

### Estado del proyecto: En desarrollo

## Cómo empezar

1. Hacer un clone del repo
2. Ejecutamos *npm install* para descargar las dependencias
3. Creamos un fichero .env con una variable de entorno con el puerto que utilizaremos (que no se subirá a github porque esta en el .gitignore)
4. Para arrancar la app ejecutamos *npm run dev*: Esto ejecuta las reglas de eslint configuradas (paquete standard) y arranca la app (previamente debe estar corriendo el servidor)

Necesitaremos un fichero .env con los campos VITE_API_APP_ESTUDIANTES

## Resumen del proyecto

Para comenzar necesitas ingresar con tu cuenta, sino la tienes haz click en ‘Crear cuenta’ y te redirigirá al formulario de registro.

Al ingresar te encontrarás en un dashboard con acceso rápido a todas las herramientas (cursos, tareas, buscador, etc).

En la sección de cursos podrás registrar los cursos y/o materias que estés realizando o te gustaría tomar. Podrás clasificarlos de acuerdo al estado que lleves de los mismos (Pendiente, En progreso o Terminado).

La sección de tareas es muy similar a la de cursos (registras la tarea y la clasificas de acuerdo a su estado).

En la parte inferior derecha del sitio, encontrarás un botón que al hacer click mostrará accesos a algunas utilidades cómo calculadora, un temporizador pomodoro para llevar cuenta de tu tiempo de estudio y un calendario que te ayude a organizarte mejor con tus tareas.

En la parte superior verás un buscador, que al confirmar una búsqueda te mostrará una lista de resultados de Wikipedia que coincidan. Al hacer click en el título de algún resultado se abrirá una nueva pestaña en dicha página del artículo.

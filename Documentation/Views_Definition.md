# **Definición de la Navegación entre las Vistas 🌐**

La navegación entre las distintas vistas de la aplicación "CodeRush" se divide en vistas **públicas** y **privadas**, donde las vistas privadas requieren que el usuario inicie sesión. A continuación, se describen las rutas para acceder a cada vista:

---

## **Vistas Públicas 🔓**

Las vistas públicas son accesibles sin necesidad de autenticación. Cualquier usuario, ya sea registrado o no, puede acceder a estas vistas:

1. **Inicio (/) 🏠**
   - Ruta: `/`
   - Descripción: Página principal del juego donde se pueden acceder a otras secciones como el inicio de sesión, el leaderboard y los tests públicos.

2. **Registro (/signup) ✍️**
   - Ruta: `/signup`
   - Descripción: Página donde los nuevos usuarios pueden crear una cuenta proporcionando su nombre, correo y contraseña.

3. **Inicio de sesión (/login) 🔑**
   - Ruta: `/login`
   - Descripción: Página de inicio de sesión donde los usuarios registrados pueden ingresar su correo y contraseña para acceder a sus cuentas.

4. **Leaderboard (/highscores) 🏆**
   - Ruta: `/highscores`
   - Descripción: Página que muestra los mejores puntajes de los jugadores, permitiendo ver quiénes son los más rápidos y precisos.

5. **Tests Públicos (/tests) 📝**
   - Ruta: `/tests`
   - Descripción: Página donde los usuarios pueden ver los tests disponibles públicamente para jugar, sin necesidad de autenticarse.

---

## **Vistas Privadas 🔒**

Las vistas privadas requieren que el usuario esté autenticado. Solo los usuarios que han iniciado sesión pueden acceder a estas secciones:

1. **Pantalla de Juego (/game) 🎮**
   - Ruta: `/game`
   - Descripción: La pantalla donde se lleva a cabo la competencia entre dos jugadores, mostrando preguntas y permitiendo a los jugadores responder para ganar puntos.

2. **Panel de Administración (/admin) 🔧**
   - Ruta: `/admin`
   - Descripción: Vista solo accesible para los administradores, donde pueden gestionar los tests, preguntas y usuarios. Los administradores pueden crear nuevos tests y gestionar la visibilidad de los existentes.

3. **Perfil de Usuario (/profile) 👤**
   - Ruta: `/profile`
   - Descripción: Página del perfil del usuario, donde pueden ver estadísticas sobre su rendimiento en los juegos (como puntajes, victorias, etc.) y modificar su información personal si lo desean.

---

## **Resumen de la Navegación**

- Las **vistas públicas** permiten la navegación sin restricciones y son esenciales para usuarios nuevos o no autenticados.
- Las **vistas privadas** están protegidas por autenticación y ofrecen funciones avanzadas, como jugar, administrar contenido o ver estadísticas personales.

---

**¡Ahora puedes navegar fácilmente entre las secciones de "CodeRush" y disfrutar de la experiencia competitiva de programación!** 🚀

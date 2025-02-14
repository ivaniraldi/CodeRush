# **Dependencias de "CodeRush"** 🎮

A continuación, se detalla el uso de las dependencias principales tanto del **Frontend** como del **Backend** de la aplicación "CodeRush". Cada una de estas herramientas y librerías juega un papel esencial para lograr el flujo eficiente del juego, la autenticación, y la interacción en tiempo real.

---

## **Frontend:**

### 1. **React** ⚛️
   - **¿Para qué se usa?**: React es la biblioteca principal para construir la interfaz de usuario (UI) de la aplicación. Permite crear componentes reutilizables, manejar el estado de la UI de manera eficiente y actualizar la interfaz en tiempo real cuando los datos cambian.
   - **Uso específico**: Se utiliza para renderizar y actualizar las pantallas de la aplicación, como la pantalla de inicio, registro, juego y resultados.

### 2. **React Router Dom** 🚦
   - **¿Para qué se usa?**: React Router Dom es una librería de enrutamiento que permite la navegación entre diferentes páginas (o vistas) de la aplicación sin recargar la página.
   - **Uso específico**: Es usada para gestionar las rutas de la aplicación, permitiendo que los usuarios naveguen entre pantallas como el inicio de sesión, selección de test y pantalla de juego.

### 3. **Axios** 🌐
   - **¿Para qué se usa?**: Axios es una librería de cliente HTTP para realizar solicitudes de datos a la API backend.
   - **Uso específico**: Se usa para hacer peticiones **GET**, **POST**, **PUT**, y **DELETE** al servidor, como enviar los datos de inicio de sesión, registrar respuestas de los jugadores o actualizar estadísticas.

### 4. **Socket.io-client** 🔌
   - **¿Para qué se usa?**: Socket.io-client es la versión del cliente de **Socket.io**, que permite la comunicación en tiempo real entre el cliente (frontend) y el servidor (backend).
   - **Uso específico**: Se usa para permitir que los jugadores interactúen en tiempo real, como ver las respuestas de otros jugadores o actualizar los puntajes al instante durante una partida.

### 5. **Context API** 🗣️
   - **¿Para qué se usa?**: Context API de React permite compartir datos entre componentes sin necesidad de pasar props manualmente a través de cada nivel de la jerarquía de componentes.
   - **Uso específico**: Es usada para gestionar el estado global de la aplicación, como el usuario autenticado y el estado del juego (jugador activo, puntajes, etc.).

### 6. **Tailwind CSS** 🌟
   - **¿Para qué se usa?**: Tailwind CSS es un framework de CSS que permite crear diseños responsivos y estilizados rápidamente mediante clases utilitarias.
   - **Uso específico**: Se usa para diseñar y estilizar las interfaces del juego, proporcionando un aspecto moderno y limpio a las pantallas.

### 7. **React-Query** 📊
   - **¿Para qué se usa?**: React-Query es una librería que gestiona la sincronización de datos, el almacenamiento en caché y la obtención de datos de manera eficiente.
   - **Uso específico**: Se usa para obtener datos como los tests disponibles, los puntajes más altos, o las estadísticas del jugador sin necesidad de recargar la página.

### 8. **React-icons** 🎨
   - **¿Para qué se usa?**: React-icons es una librería que proporciona íconos fácilmente personalizables en aplicaciones React.
   - **Uso específico**: Se usa para añadir íconos de interfaz de usuario en los botones y elementos gráficos, mejorando la experiencia visual y de navegación.

---

## **Backend:**

### 1. **JWT (JSON Web Tokens)** 🔐
   - **¿Para qué se usa?**: JWT se usa para la autenticación segura del usuario. Permite la creación de un token de acceso que se envía al cliente después de que el usuario inicia sesión correctamente.
   - **Uso específico**: Se usa para generar y validar tokens que aseguran que el usuario tenga acceso a rutas privadas de la API (como iniciar un juego o ver resultados).

### 2. **Bcrypt.js** 🔑
   - **¿Para qué se usa?**: Bcrypt.js es una librería para encriptar contraseñas de forma segura.
   - **Uso específico**: Se utiliza para encriptar las contraseñas de los usuarios antes de almacenarlas en la base de datos, y para compararlas con las contraseñas ingresadas durante el inicio de sesión.

### 3. **Multer** 🗃️
   - **¿Para qué se usa?**: Multer es un middleware para manejar la carga de archivos en el servidor.
   - **Uso específico**: Si se permite que los usuarios suban imágenes o archivos durante el juego (por ejemplo, para mostrar imágenes de código en los tests), Multer es el encargado de gestionarlo.

### 4. **Socket.io (Server)** 🔥
   - **¿Para qué se usa?**: Socket.io en el servidor permite la comunicación en tiempo real con el cliente.
   - **Uso específico**: Se usa para mantener la comunicación activa durante el juego, enviando actualizaciones en tiempo real a los jugadores (como el puntaje actualizado, nuevas preguntas o respuestas).

### 5. **Express** 🚀
   - **¿Para qué se usa?**: Express es un framework de Node.js que facilita la creación de APIs robustas y escalables.
   - **Uso específico**: Se utiliza para gestionar las rutas del servidor, manejar solicitudes HTTP, y facilitar la integración con la base de datos, autenticación y lógica de negocio.

### 6. **PostgreSQL (pg)** 🛢️
   - **¿Para qué se usa?**: PostgreSQL es una base de datos relacional utilizada para almacenar todos los datos importantes de la aplicación.
   - **Uso específico**: Se utiliza para almacenar información como los usuarios, los puntajes, los tests, las preguntas y las respuestas, y para gestionar las relaciones entre ellos.

### 7. **pg-format** 🖋️
   - **¿Para qué se usa?**: `pg-format` es una librería que ayuda a generar consultas SQL de forma segura y eficiente, utilizando parámetros dinámicos.
   - **Uso específico**: Se usa para generar consultas SQL parametrizadas de manera eficiente, evitando inyecciones SQL y facilitando la creación de consultas complejas.

### 8. **dotenv** 🌐
   - **¿Para qué se usa?**: dotenv permite manejar variables de entorno de forma segura.
   - **Uso específico**: Se usa para cargar configuraciones sensibles como credenciales de la base de datos, JWT_SECRET, y otras variables de entorno.

### 9. **nodemon** 🚀
   - **¿Para qué se usa?**: nodemon reinicia automáticamente el servidor cuando hay cambios en el código.
   - **Uso específico**: Se usa en desarrollo para evitar reiniciar manualmente el servidor tras cada cambio.

### 10. **jest & supertest** 🔮
   - **¿Para qué se usan?**: Jest es un framework de pruebas y Supertest permite realizar pruebas HTTP.
   - **Uso específico**: Se usan juntos para probar rutas de la API asegurando que la funcionalidad del backend es correcta.

### 11. **CORS** 🔮  
   - **¿Para qué se usa?**: CORS (Cross-Origin Resource Sharing) es una política de seguridad que permite o restringe solicitudes de recursos entre dominios diferentes.  
   - **Uso específico**: Se utiliza para permitir que tu aplicación frontend (por ejemplo, React) haga peticiones HTTP a un servidor backend en un dominio distinto. Sin CORS, los navegadores bloquean estas peticiones para proteger al usuario de posibles vulnerabilidades de seguridad.  


---

## **Resumen**

Cada una de estas dependencias cumple un papel fundamental en la creación de la aplicación "CodeRush", ayudando a gestionar todo, desde la interfaz de usuario hasta la lógica de negocio en el servidor y la interacción con la base de datos. Usando estas herramientas, podemos ofrecer una experiencia fluida, interactiva y segura para los usuarios del juego.

---

**¡Disfruta de CodeRush y sigue aprendiendo mientras compites!** 🏆

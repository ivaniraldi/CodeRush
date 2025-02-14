# 🚀 CodeRush

## **Flujo Completo de la Aplicación: "CodeRush"**

Este documento describe la interacción entre las distintas capas de la aplicación **CodeRush**: **Cliente (Frontend)**, **API (Backend)** y **Base de Datos (DB)**. CodeRush es un juego competitivo de preguntas y respuestas sobre programación web, diseñado para enfrentar a dos jugadores en tiempo real. Incluye autenticación, seguimiento de puntajes y estadísticas detalladas.

---

## 🖥️ **1. Flujo de Usuario: Frontend (Cliente)**

El **frontend**, desarrollado con **React**, ofrece la interfaz gráfica para que los usuarios interactúen con la aplicación. Se comunica con la API para obtener y enviar datos.

### **📌 Pantallas Principales**

### 1️⃣ **Pantalla de Inicio (Home)**
- 🔹 Presenta la interfaz principal.
- 🔹 Opciones de inicio de sesión, registro y acceso a tests disponibles.

### 2️⃣ **Pantalla de Registro/Login**
- 🔹 Si el usuario no está autenticado, puede registrarse o iniciar sesión.
- 🔑 **Inicio de sesión**: Ingresar correo y contraseña. La API valida las credenciales.
- 🆕 **Registro**: Captura de datos (nombre, correo, contraseña) y almacenamiento en la base de datos.

### 3️⃣ **Pantalla de Selección de Test**
- 🔹 Lista de tests disponibles (públicos o privados si es administrador).
- 📌 Selección de un test para iniciar el juego.

### 4️⃣ **Pantalla de Juego (Competencia)**
- 🎮 Dos jugadores compiten en tiempo real.
- ❓ Se presentan 5 preguntas aleatorias.
- ⏳ Se calcula el puntaje basado en rapidez y precisión.
- 📊 Actualización en tiempo real de respuestas y puntuaciones.

### 5️⃣ **Pantalla de Resultados**
- 📜 Muestra el puntaje final y el ganador.
- 📌 Almacena los resultados en la base de datos.
- 🏆 Acceso a la tabla de mejores puntajes.

### 6️⃣ **Pantalla de Perfil**
- 📊 Estadísticas del usuario:
  - Juegos jugados.
  - Victorias y derrotas.
  - Puntaje total.
  - Tiempo promedio de respuesta.

---

## ⚙️ **2. Flujo de la API (Backend)**

El **backend**, desarrollado con **Node.js** y **Express**, maneja la lógica de negocio, autenticación y comunicación en tiempo real mediante **Socket.io**.

### **🔐 1. Autenticación y Gestión de Usuarios**
- **Registro**: La API almacena los datos del usuario con contraseña encriptada (**bcrypt.js**).
- **Inicio de sesión**: Validación de credenciales y generación de **JWT** para autenticación segura.
- **Autorización**: JWT protege las rutas privadas de la API.

### **📝 2. Creación de Tests y Preguntas**
- **Creación de Tests**: Los administradores pueden definir tests con nombre, categoría y visibilidad.
- **Creación de Preguntas**: Se asignan preguntas con respuestas correctas e incorrectas a cada test.

### **🎯 3. Gestión de Respuestas y Puntajes**
- **Registro de respuestas**: Se almacena la respuesta del jugador y el tiempo de respuesta.
- **Cálculo del puntaje**: Se otorgan puntos por rapidez y precisión.

### **🎮 4. Gestión de Juegos**
- **Inicio de juego**: Se asignan preguntas aleatorias y se establece una sesión en la base de datos.
- **Finalización**: Registro de resultados y almacenamiento de puntajes.

### **📊 5. Estadísticas del Perfil**
- **Actualización de estadísticas**: Se actualizan datos como respuestas correctas, promedio de respuesta, victorias y derrotas.

---

## 🗄️ **3. Flujo de la Base de Datos (DB)**

La base de datos, implementada en **PostgreSQL**, almacena usuarios, tests, preguntas, respuestas, puntajes y estadísticas.

### **📂 Estructura y Relaciones**

#### 🧑‍💻 **Users**
- 📌 Información del usuario (nombre, correo, contraseña, puntaje total).
- 🔗 Relación: **1:N** con **Highscores**, **1:1** con **Profile_Stats**.

#### 📚 **Tests**
- 📌 Nombre, categoría y visibilidad.
- 🔗 Relación: **1:N** con **Questions**.

#### ❓ **Questions**
- 📌 Texto de la pregunta y opciones de respuesta.
- 🔗 Relación: **1:N** con **Answers**, **1:N** con **Tests**.

#### ✅ **Answers**
- 📌 Respuestas elegidas por los jugadores.
- 🔗 Relación: **N:1** con **Users**, **N:1** con **Questions**.

#### 🏆 **Highscores**
- 📌 Puntajes de cada partida.
- 🔗 Relación: **N:1** con **Users**.

#### 🎮 **Games**
- 📌 Registro de partidas.
- 🔗 Relación: **N:1** con **Users**, **N:1** con **Highscores**.

#### 📊 **Profile_Stats**
- 📌 Estadísticas generales del usuario.
- 🔗 Relación: **1:1** con **Users**.

### **🔗 Relaciones Complejas**
- Un **usuario** puede responder múltiples **preguntas**.
- Un **test** contiene varias **preguntas**.
- Un **juego** involucra a dos jugadores con un **puntaje** registrado en **Highscores**.
- Un **jugador** tiene estadísticas almacenadas en **Profile_Stats**, actualizadas tras cada juego.

---

## 📌 **Resumen del Flujo de la Aplicación**

1. **Frontend** (React) → Interactúa con **Backend** (Node.js + Express) mediante API REST y WebSockets.
   - 🔹 Solicitudes de autenticación, juego, respuestas y resultados.

2. **Backend** → Valida autenticación, maneja lógica de negocio y gestiona datos en la base de datos.
   - 🔹 Inserción de datos, actualización de puntajes y estadísticas.

3. **Base de Datos** (PostgreSQL) → Almacena usuarios, juegos, preguntas, respuestas, puntajes y estadísticas.

🎯 **Este flujo garantiza una experiencia de usuario fluida, autenticación segura (JWT), cálculos de puntajes en tiempo real y seguimiento detallado de estadísticas.**


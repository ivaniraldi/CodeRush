# ![CodeRush Logo](./Documentation/imgs/logo.png)

# 🏆 **CodeRush** - Juego de Programación Competitiva

¡Bienvenido a **CodeRush**! 🚀 Un juego de preguntas y respuestas sobre programación web diseñado para enfrentar a dos jugadores en una competencia en tiempo real. CodeRush combina rapidez, precisión y conocimientos técnicos para ofrecer una experiencia única.

---

## 📖 **Descripción General**

**CodeRush** permite a los jugadores competir en partidas donde deben responder preguntas sobre programación web. La aplicación cuenta con un sistema de autenticación, seguimiento de puntuaciones y estadísticas detalladas para cada usuario.

### 🌟 **Características Clave**
- 🔒 **Autenticación Segura** (JWT)
- ⚡ **Competencias en Tiempo Real** con **Socket.io**
- 📊 **Sistema de Puntuación Avanzado**
- 🎯 **Preguntas Aleatorias y Dinámicas**
- 📈 **Estadísticas del Jugador**
- 🔍 **Tests Públicos y Privados**
- 🎨 **Interfaz Moderna y Responsiva**

---

## 📂 **Estructura de la Documentación**

La documentación está organizada en varios archivos dentro de la carpeta `./Documentation`. Aquí puedes encontrar toda la información sobre el desarrollo, arquitectura y funcionamiento de CodeRush.

### 📌 **Documentos Principales**

📁 **Base de Datos**  
📄 [`Database.md`](./Documentation/Database.md) - Explicación detallada de las tablas y relaciones en la base de datos.

📁 **Consultas SQL**  
📄 [`DB_Queries.md`](./Documentation/DB_Queries.md) - Conjunto de consultas SQL para interactuar con la base de datos.

📁 **Dependencias**  
📄 [`Dependencies.md`](./Documentation/Dependencies.md) - Listado y explicación de las dependencias clave utilizadas en el frontend y backend.

📁 **Flujo de Desarrollo**  
📄 [`Dev_Flow.md`](./Documentation/Dev_Flow.md) - Explicación del flujo de interacción entre el frontend, backend y base de datos.

📁 **Interfaz Gráfica**  
📄 [`Graphic_Interface.md`](./Documentation/Graphic_Interface.md) - Descripción de las pantallas principales y su funcionalidad.

📁 **Definición de Vistas**  
📄 [`Views.Definition.md`](./Documentation/Views.Definition.md) - Explicación de la navegación y organización de vistas públicas y privadas.

📁 **Contrato de API**  
📄 [`API_Contract.md`](./Documentation/API_Contract.md) - Definición detallada de los endpoints de la API y sus parámetros.

---

## 🛠️ **Tecnologías Utilizadas**

### 📌 **Frontend** (Cliente)  
🔹 React.js  
🔹 Tailwind CSS  
🔹 Axios  

### 📌 **Backend** (API)  
🔹 Node.js + Express.js  
🔹 PostgreSQL  
🔹 Socket.io (Comunicación en tiempo real)  
🔹 bcrypt.js (Encriptación de contraseñas)  
🔹 JSON Web Token (JWT) para autenticación segura  

### 📌 **Base de Datos**  
🔹 PostgreSQL (Gestión de datos y relaciones)

---

## 🚀 **Cómo Empezar**

Para ejecutar CodeRush en tu entorno local, sigue estos pasos:

### 1️⃣ **Clonar el Repositorio**
```bash
 git clone https://github.com/tu-usuario/CodeRush.git
 cd CodeRush
```

### 2️⃣ **Instalar Dependencias**
📁 **Frontend**
```bash
 cd client
 npm install
```
📁 **Backend**
```bash
 cd server
 npm install
```

### 3️⃣ **Configurar la Base de Datos**
1. Asegúrate de tener **PostgreSQL** instalado y en ejecución.  
2. Crea una base de datos llamada **`coderush`** en PostgreSQL:
   ```sql
   CREATE DATABASE coderush;
   ```
3. Crea un archivo `.env` en la carpeta `./API` y copia las creadenciales de ejemplo que estan en el archivo `.env.example`.
4. Configura las credenciales de acceso a la base de datos en el archivo `.env` dentro de la carpeta `./API`:
   ```
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_PORT=5432 # Puedes omitirlo si usas el puerto predeterminado, en caso contrario, especifica el número de puerto.
   ```
   Los otros valores en el archivo `.env` no deben modificarse, de caso contrario, la aplicación puede no funcionar correctamente.
   Puedes guiarte con el archivo de ejemplo `API/.env.example`.

### 4️⃣ **Ejecutar la Aplicación**
📁 **Backend**
```bash
 cd server
 npm run dev
```
📁 **Frontend**
```bash
 cd client
 npm start
```

La aplicación estará disponible en `http://localhost:3000/` 🚀

---

## 📬 **Contribuciones**

¡Las contribuciones son bienvenidas! Si deseas mejorar CodeRush, abre un **issue** o envía un **pull request** en GitHub.

---

## 📄 **Licencia**
Este proyecto está bajo la licencia MIT. Puedes ver más detalles en [`LICENSE`](./LICENSE).
Puedes ver la traducción al español de este proyecto en [`LICENSE_ES`](./Documentation/License.md).

---

✨ **¡Gracias por ser parte de CodeRush! Que gane el mejor programador. 🚀🔥**

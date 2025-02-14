# 💜 **Contrato de API - CodeRush**

## 🏆 **Introducción**

Este documento describe las rutas de la API de **CodeRush**, incluyendo métodos, parámetros de entrada y salida, posibles respuestas y códigos de estado HTTP.

---

## 🔑 **Autenticación**

### 🔹 Registro de usuario

**POST** `/api/auth/register`

#### 🔹 Parámetros de entrada (JSON)

```json
{
  "name": "Ivan Iraldi",
  "email": "ivan@example.com",
  "password": "123456"
}
```

#### 🔹 Respuestas

✅ **201 Created** - Usuario registrado con éxito.

```json
{
  "message": "Usuario registrado exitosamente",
  "data": {
    "userId": 1
  }
}
```

❌ **400 Bad Request** - Datos inválidos o incompletos.

```json
{
  "message": "Error en la solicitud",
  "error": "El correo ya está en uso"
}
```

### 🔹 Inicio de sesión

**POST** `/api/auth/login`

#### 🔹 Parámetros de entrada (JSON)

```json
{
  "email": "ivan@example.com",
  "password": "123456"
}
```

#### 🔹 Respuestas

✅ **200 OK** - Inicio de sesión exitoso.

```json
{
  "message": "Inicio de sesión exitoso",
  "data": {
    "token": "jwt_token"
  }
}
```

❌ **401 Unauthorized** - Credenciales incorrectas.

```json
{
  "message": "Error en la autenticación",
  "error": "Correo o contraseña incorrectos"
}
```

---

## 👥 **Usuarios**

### 🔹 Obtener todos los usuarios

**GET** `/api/users`

#### 🔹 Respuestas

✅ **200 OK** - Lista de usuarios.

```json
{
  "message": "Usuarios obtenidos exitosamente",
  "data": [
    {
      "id": 1,
      "name": "Ivan Iraldi",
      "email": "ivan@example.com",
      "total_points": 1500
    }
  ]
}
```

### 🔹 Eliminar usuario

**DELETE** `/api/users/:id` ✅ **200 OK** - Usuario eliminado.

```json
{
  "message": "Usuario eliminado exitosamente"
}
```

✅ **404 Not Found** - Usuario no encontrado.

```json
{
  "message": "Error",
  "error": "Usuario no encontrado"
}
```

---

## 📝 **Tests**

### 🔹 Crear un test

**POST** `/api/tests`

#### 🔹 Parámetros de entrada (JSON)

```json
{
  "name": "Test de React",
  "category": "Frontend",
  "visibility": "public"
}
```

✅ **201 Created** - Test creado.

```json
{
  "message": "Test creado exitosamente",
  "data": {
    "testId": 5
  }
}
```

### 🔹 Obtener tests de una categoría específica

**GET** `/api/tests/category/:category` ✅ **200 OK** - Lista de tests.

```json
{
  "message": "Tests obtenidos exitosamente",
  "data": [
    { "id": 2, "name": "Test de CSS", "category": "Frontend", "visibility": "public" }
  ]
}
```

### 🔹 Obtener un test específico

**GET** `/api/tests/:id` ✅ **200 OK** - Detalles del test.

```json
{
  "message": "Test obtenido exitosamente",
  "data": {
    "id": 2, "name": "Test de CSS", "category": "Frontend", "visibility": "public"
  }
}
```

### 🔹 Eliminar un test

**DELETE** `/api/tests/:id` ✅ **200 OK** - Test eliminado.

```json
{
  "message": "Test eliminado exitosamente"
}
```

✅ **404 Not Found** - Test no encontrado.

```json
{
  "message": "Error",
  "error": "Test no encontrado"
}
```

### 🔹 Modificar un test

**PUT** `/api/tests/:id` ✅ **200 OK** - Test actualizado.

```json
{
  "message": "Test actualizado exitosamente"
}
```

---

## ❓ **Preguntas**

### 🔹 Crear una pregunta

**POST** `/api/questions` ✅ **201 Created** - Pregunta creada.

```json
{
  "message": "Pregunta creada exitosamente",
  "data": {
    "questionId": 10
  }
}
```

### 🔹 Eliminar una pregunta

**DELETE** `/api/questions/:id` ✅ **200 OK** - Pregunta eliminada.

```json
{
  "message": "Pregunta eliminada exitosamente"
}
```

### 🔹 Modificar una pregunta

**PUT** `/api/questions/:id` ✅ **200 OK** - Pregunta actualizada.

```json
{
  "message": "Pregunta actualizada exitosamente"
}
```

---

## 🏆 **Puntuaciones**

### 🔹 Registrar Highscore

**POST** `/api/highscores` ✅ **201 Created** - Highscore registrado.

```json
{
  "message": "Highscore registrado exitosamente"
}
```

### 🔹 Eliminar un Highscore

**DELETE** `/api/highscores/:id` ✅ **200 OK** - Highscore eliminado.

```json
{
  "message": "Highscore eliminado exitosamente"
}
```

---

## 🎮 **Juegos**

### 🔹 Obtener todos los juegos

**GET** `/api/games` ✅ **200 OK** - Lista de juegos.

```json
{
  "message": "Juegos obtenidos exitosamente",
  "data": []
}
```

### 🔹 Modificar estado de un juego

**PUT** `/api/games/:id` ✅ **200 OK** - Estado del juego actualizado.

```json
{
  "message": "Estado del juego actualizado exitosamente"
}
```

---

## 📊 **Estadísticas de usuario**

### 🔹 Obtener estadísticas de un usuario

**GET** `/api/stats/:userId` ✅ **200 OK** - Estadísticas del usuario.

```json
{
  "message": "Estadísticas obtenidas exitosamente"
}
```

---

✨ **Este contrato define el funcionamiento completo de la API de CodeRush. ¡Listo para implementar! 🚀**


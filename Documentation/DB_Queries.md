
# **Consultas SQL para CodeRush 🔍**

A continuación, se presenta un conjunto de consultas SQL para interactuar con la base de datos de **CodeRush**. Estas consultas cubren diferentes operaciones de lectura y escritura en las tablas clave del flujo de la aplicación.

---

## **1. Registro de Usuario 📝**

Cuando un nuevo usuario se registra, se inserta su información en la tabla `Users`.

#### Consulta para registrar un nuevo usuario:
```sql
INSERT INTO Users (name, email, password)
VALUES ('Juan Pérez', 'juanperez@example.com', 'hashed_password');
```

#### Consulta para verificar si el correo electrónico ya está registrado:
```sql
SELECT * FROM Users WHERE email = 'juanperez@example.com';
```

---

## **2. Inicio de Sesión de Usuario 🔑**

Cuando un usuario inicia sesión, se valida su correo y contraseña, y se obtiene su información básica.

#### Consulta para obtener los datos del usuario durante el inicio de sesión:
```sql
SELECT * FROM Users WHERE email = 'juanperez@example.com' AND password = 'hashed_password';
```

---

## **3. Creación de un Test (Administrador) 👨‍💻**

El administrador puede crear un nuevo test y definir su visibilidad.

#### Consulta para crear un nuevo test:
```sql
INSERT INTO Tests (name, category, visibility)
VALUES ('JavaScript Basics', 'JavaScript', 'public');
```

#### Consulta para obtener los tests disponibles (públicos o privados):
```sql
SELECT * FROM Tests WHERE visibility = 'public';
```

---

## **4. Creación de Preguntas para el Test 🧠**

El administrador agrega preguntas a un test específico. Cada pregunta tiene múltiples respuestas.

#### Consulta para agregar una nueva pregunta con sus respuestas:
```sql
INSERT INTO Questions (test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3)
VALUES (1, '¿Cuál es el operador para la igualdad en JavaScript?', NULL, '==', '=', '===', '!==');
```

#### Consulta para obtener las preguntas de un test específico:
```sql
SELECT * FROM Questions WHERE test_id = 1;
```

---

## **5. Respuestas de los Jugadores 🎮**

Cuando un jugador responde a una pregunta, su respuesta se guarda en la tabla `Answers`, junto con el tiempo de respuesta.

#### Consulta para insertar una respuesta del jugador:
```sql
INSERT INTO Answers (user_id, question_id, answer, response_time)
VALUES (1, 1, '==', 500);
```

#### Consulta para obtener todas las respuestas de un jugador:
```sql
SELECT * FROM Answers WHERE user_id = 1;
```

---

## **6. Cálculo del Puntaje y Registro en Highscores 🏆**

Después de que el jugador termine el test, calculamos el puntaje (en función de las respuestas correctas y su tiempo) y lo almacenamos en la tabla `Highscores`.

#### Consulta para insertar el puntaje del jugador:
```sql
INSERT INTO Highscores (user_id, score, date)
VALUES (1, 100, CURRENT_TIMESTAMP);
```

#### Consulta para obtener los puntajes más altos:
```sql
SELECT u.name, h.score, h.date
FROM Highscores h
JOIN Users u ON h.user_id = u.id
ORDER BY h.score DESC
LIMIT 10;
```

---

## **7. Inicio de una Nueva Partida (Juego entre 2 jugadores) 🕹️**

Cuando dos jugadores se enfrentan en una partida, se crea una nueva entrada en la tabla `Games`.

#### Consulta para crear una nueva partida entre dos jugadores:
```sql
INSERT INTO Games (player_1_id, player_2_id, game_status)
VALUES (1, 2, 'pending');
```

#### Consulta para obtener las partidas en progreso:
```sql
SELECT * FROM Games WHERE game_status = 'in_progress';
```

---

## **8. Actualizar el Estado del Juego 🔄**

A medida que el juego avanza, el estado se actualiza. Por ejemplo, cuando la partida termina, se actualiza el estado a `finished`.

#### Consulta para actualizar el estado de una partida:
```sql
UPDATE Games
SET game_status = 'finished', end_time = CURRENT_TIMESTAMP
WHERE id = 1;
```

---

## **9. Estadísticas del Perfil del Jugador 📊**

A medida que el jugador juega, sus estadísticas de perfil (como el promedio de tiempo de respuesta, respuestas correctas, etc.) se actualizan.

#### Consulta para insertar o actualizar estadísticas del perfil del jugador:
```sql
INSERT INTO Profile_Stats (user_id, average_time, correct_answers, total_played_games, total_wins, total_losses)
VALUES (1, 10, 50, 20, 15, 5)
ON CONFLICT (user_id) DO UPDATE
SET average_time = 10,
    correct_answers = 50,
    total_played_games = 20,
    total_wins = 15,
    total_losses = 5;
```

#### Consulta para obtener las estadísticas de un jugador:
```sql
SELECT * FROM Profile_Stats WHERE user_id = 1;
```

---

## **Consultas Avanzadas para Relacionar Múltiples Tablas 🔗**

#### Obtener todas las respuestas de un jugador junto con las preguntas:
```sql
SELECT q.question_text, a.answer, a.response_time
FROM Answers a
JOIN Questions q ON a.question_id = q.id
WHERE a.user_id = 1;
```

#### Obtener todas las partidas de un jugador con el puntaje más alto de cada juego:
```sql
SELECT g.id, g.game_status, h.score
FROM Games g
JOIN Highscores h ON g.id = h.game_id
WHERE g.player_1_id = 1 OR g.player_2_id = 1
ORDER BY h.score DESC;
```

#### Obtener las preguntas más respondidas por los usuarios (basado en la cantidad de respuestas):
```sql
SELECT q.question_text, COUNT(a.id) AS num_responses
FROM Questions q
JOIN Answers a ON q.id = a.question_id
GROUP BY q.id
ORDER BY num_responses DESC;
```

---

### **Resumen 📋:**
Estas consultas cubren la interacción básica del usuario con el sistema, desde el registro, la creación de tests, la respuesta a preguntas, hasta el cálculo de puntajes y el seguimiento de estadísticas de perfil. Las consultas permiten realizar un flujo continuo de inserción y consulta de datos, manteniendo las relaciones entre las tablas adecuadamente. 🚀

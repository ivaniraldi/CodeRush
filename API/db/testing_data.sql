-- Inserción de Usuarios
INSERT INTO Users (name, email, password, total_points) 
VALUES 
    ('Alice', 'alice@example.com', 'hashedpassword1', 1200),
    ('Bob', 'bob@example.com', 'hashedpassword2', 1500);

-- Inserción de Tests
INSERT INTO Tests (name, category, visibility) 
VALUES 
    ('JavaScript Basics', 'JavaScript', 'public'),
    ('CSS Fundamentals', 'CSS', 'private');

-- Inserción de Preguntas para el Test de JavaScript
INSERT INTO Questions (test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3)
VALUES 
    (1, 'What is the output of 2 + 2 in JavaScript?', NULL, '4', '5', '3', '6'),
    (1, 'Which of the following is not a JavaScript data type?', NULL, 'Float', 'String', 'Number', 'Boolean');

-- Inserción de Preguntas para el Test de CSS
INSERT INTO Questions (test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3)
VALUES 
    (2, 'What property is used to change the background color in CSS?', NULL, 'background-color', 'color', 'background', 'font-color'),
    (2, 'Which CSS property controls the font size?', NULL, 'font-size', 'text-size', 'font-style', 'text-style');

-- Inserción de Respuestas para Alice
INSERT INTO Answers (user_id, question_id, answer, response_time)
VALUES 
    (1, 1, '4', 300),
    (1, 2, 'Float', 250),
    (1, 3, 'background-color', 200),
    (1, 4, 'font-size', 220);

-- Inserción de Respuestas para Bob
INSERT INTO Answers (user_id, question_id, answer, response_time)
VALUES 
    (2, 1, '4', 280),
    (2, 2, 'Float', 230),
    (2, 3, 'background-color', 210),
    (2, 4, 'font-size', 215);

-- Inserción de Highscores para Alice y Bob
INSERT INTO Highscores (user_id, score) 
VALUES 
    (1, 2000), 
    (2, 2200);

-- Inserción de Juegos (relacionando a Alice y Bob en una partida)
INSERT INTO Games (player_1_id, player_2_id, game_status, start_time)
VALUES 
    (1, 2, 'pending', NOW());

-- Inserción de Estadísticas de Perfil para Alice y Bob
INSERT INTO Profile_Stats (user_id, average_time, correct_answers, total_played_games, total_wins, total_losses) 
VALUES 
    (23, 5, 4, 2, 1, 1), 
    (23, 4, 4, 2, 2, 0);

-- Inserción de una partida finalizada entre Alice y Bob
UPDATE Games 
SET game_status = 'finished', end_time = NOW() 
WHERE id = 1;


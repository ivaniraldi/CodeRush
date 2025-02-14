-- Creación de la tabla Users
CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    total_points INTEGER DEFAULT 0
);

-- Creación de la tabla Tests
CREATE TYPE visibility_enum AS ENUM ('public', 'private');

CREATE TABLE IF NOT EXISTS Tests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    visibility visibility_enum NOT NULL
);

-- Creación de la tabla Questions
CREATE TABLE IF NOT EXISTS Questions (
    id SERIAL PRIMARY KEY,
    test_id INTEGER REFERENCES Tests(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    image_url TEXT,
    correct_answer TEXT NOT NULL,
    wrong_answer_1 TEXT NOT NULL,
    wrong_answer_2 TEXT NOT NULL,
    wrong_answer_3 TEXT NOT NULL
);

-- Creación de la tabla Answers
CREATE TABLE IF NOT EXISTS Answers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    question_id INTEGER REFERENCES Questions(id) ON DELETE CASCADE,
    answer TEXT NOT NULL,
    response_time INTEGER NOT NULL
);

-- Creación de la tabla Highscores
CREATE TABLE IF NOT EXISTS Highscores (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    score INTEGER NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creación de la tabla Games
CREATE TYPE game_status_enum AS ENUM ('pending', 'in_progress', 'finished');

CREATE TABLE IF NOT EXISTS Games (
    id SERIAL PRIMARY KEY,
    player_1_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    player_2_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    game_status game_status_enum NOT NULL,
    start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP
);

-- Creación de la tabla Profile_Stats
CREATE TABLE IF NOT EXISTS Profile_Stats (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    average_time INTEGER NOT NULL,
    correct_answers INTEGER NOT NULL,
    total_played_games INTEGER NOT NULL,
    total_wins INTEGER NOT NULL,
    total_losses INTEGER NOT NULL
);

-- Relaciones
-- Users -> Games (1:M)
-- Tests -> Questions (1:M)
-- Users -> Answers (1:M)
-- Questions -> Answers (1:M)
-- Users -> Highscores (1:M)
-- Users -> Profile_Stats (1:1)

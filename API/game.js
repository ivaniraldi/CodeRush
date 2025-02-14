const io = require('socket.io')();
const { saveAnswerToDb, checkAnswer, updatePlayerStats, determineWinner, saveGameResults, updateProfileStats } = require('./gameHelpers'); // Asegúrate de crear estas funciones helpers

let games = {}; // Almacenar los juegos en curso

// Función para manejar la conexión de sockets
io.on('connection', (socket) => {
    console.log('Un jugador se ha conectado');

    // Evento para iniciar un juego entre dos jugadores
    socket.on('startGame', (gameId, player1Id, player2Id) => {
        // Crear el juego
        games[gameId] = {
            player1Id,
            player2Id,
            currentPlayer: player1Id,
            gameStatus: 'in_progress',
            questionsAnswered: 0
        };

        // Unir a los jugadores a la sala del juego
        socket.join(gameId);

        // Emitir que el juego ha comenzado
        io.to(gameId).emit('gameStarted', { player1Id, player2Id });
    });

    // Evento cuando un jugador responde una pregunta
    socket.on('answerQuestion', (gameId, userId, answer, questionId, responseTime) => {
        const game = games[gameId];

        // Guardar la respuesta en la base de datos
        saveAnswerToDb(userId, questionId, answer, responseTime);

        // Verificar si la respuesta es correcta
        const isCorrect = checkAnswer(questionId, answer);

        // Emitir la respuesta correcta o incorrecta
        io.to(gameId).emit('answerReceived', { userId, isCorrect });

        // Actualizar estadísticas del jugador (como el tiempo de respuesta y respuestas correctas)
        updatePlayerStats(userId, responseTime, isCorrect);

        // Cambiar al siguiente jugador
        game.currentPlayer = (game.currentPlayer === game.player1Id) ? game.player2Id : game.player1Id;

        // Emitir el siguiente turno al jugador
        io.to(gameId).emit('nextTurn', { currentPlayer: game.currentPlayer });
    });

    // Evento cuando el juego termina
    socket.on('endGame', (gameId) => {
        const game = games[gameId];
        const winnerId = determineWinner(gameId);

        // Emitir resultado final
        io.to(gameId).emit('gameEnded', { winnerId });

        // Guardar el resultado final en los highscores
        saveGameResults(gameId, winnerId);

        // Actualizar estadísticas del perfil
        updateProfileStats(winnerId);

        // Finalizar la partida y limpiar la sala
        delete games[gameId];
    });
});

// Exportar el servidor Socket.io para ser utilizado en el archivo principal
module.exports = io;

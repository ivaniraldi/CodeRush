const express = require("express");
const router = express.Router();

// Importar módulos de rutas
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const testRoutes = require("./testRoutes");
const questionRoutes = require("./questionRoutes");
const highscoreRoutes = require("./highscoreRoutes");
const gameRoutes = require("./gameRoutes");
const statsRoutes = require("./statsRoutes");
const answerRoutes = require("./answerRoutes.js");

// Definir rutas principales
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/tests", testRoutes);
router.use("/questions", questionRoutes);
//router.use("/answers", answerRoutes);
//router.use("/highscores", highscoreRoutes);
//router.use("/games", gameRoutes);
//router.use("/stats", statsRoutes);

module.exports = router;

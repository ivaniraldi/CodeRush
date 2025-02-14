const express = require("express");
const router = express.Router();
const { getAllUsers, deleteUser, updateUser, getUserById } = require("../controllers/userControllers");
const { verifyToken, isAdmin } = require("../middlewares/authMiddleware");

// Obtener todos los usuarios (solo admin)
router.get("/", verifyToken, isAdmin, getAllUsers);

// Eliminar un usuario (solo admin)
router.delete("/:id", verifyToken, isAdmin, deleteUser);

//Modificar un usuario (solo admin)
router.put("/:id", verifyToken, isAdmin, updateUser);

// Obtener un usuario por ID
router.get("/:id", verifyToken, getUserById);


module.exports = router;

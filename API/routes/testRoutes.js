const express = require("express");
const router = express.Router();
const { 
  createTest, 
  getTestsByCategory, 
  getTestById, 
  deleteTest, 
  getAllTests,
  updateTest 
} = require("../controllers/testControllers");
const { verifyToken, isAdmin } = require("../middlewares/authMiddleware");

router.get("/", getAllTests);

// Crear un test (requiere autenticación)
router.post("/", verifyToken, createTest);

// Obtener tests por categoría
router.get("/category/:category", getTestsByCategory);

// Obtener un test específico
router.get("/:id", getTestById);

// Eliminar un test (solo admin)
router.delete("/:id", verifyToken, isAdmin, deleteTest);

// Modificar un test (solo admin)
router.put("/:id", verifyToken, isAdmin, updateTest);

module.exports = router;

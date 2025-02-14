const express = require('express');
const router = express.Router();

// Controladores (puedes ajustarlos según tu lógica y base de datos)
const { createQuestionController, deleteQuestionController, updateQuestionController } = require('../controllers/questionControllers');

// Ruta para crear una pregunta
router.post('/', async (req, res) => {
  try {
    const { test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3 } = req.body;

    // Llamada a la función de controlador para crear la pregunta
    const newQuestion = await createQuestionController(
      test_id, 
      question_text, 
      image_url, 
      correct_answer, 
      wrong_answer_1, 
      wrong_answer_2, 
      wrong_answer_3
    );

    res.status(201).json({
      message: "Pregunta creada exitosamente",
      data: newQuestion
    });
  } catch (err) {
    res.status(500).json({ message: "Error al crear la pregunta", error: err.message });
  }
});

// Ruta para eliminar una pregunta
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Llamada a la función de controlador para eliminar la pregunta
    const deletedQuestion = await deleteQuestionController(id);

    res.status(200).json({
      message: "Pregunta eliminada exitosamente",
      data: deletedQuestion
    });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar la pregunta", error: err.message });
  }
});

// Ruta para modificar una pregunta
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3 } = req.body;

    // Llamada a la función de controlador para actualizar la pregunta
    const updatedQuestion = await updateQuestionController(
      id,
      test_id, 
      question_text, 
      image_url, 
      correct_answer, 
      wrong_answer_1, 
      wrong_answer_2, 
      wrong_answer_3
    );

    res.status(200).json({
      message: "Pregunta actualizada exitosamente",
      data: updatedQuestion
    });
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar la pregunta", error: err.message });
  }
});

module.exports = router;

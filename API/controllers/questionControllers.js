const { createQuestion, deleteQuestion, updateQuestion } = require('../models/questionModel');

// Controlador para crear una pregunta
const createQuestionController = async ( test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3 ) => {
  try {
    const newQuestion = await createQuestion({
      test_id, 
      question_text, 
      image_url, 
      correct_answer, 
      wrong_answer_1, 
      wrong_answer_2, 
      wrong_answer_3
    });
    return newQuestion;
  } catch (err) {
    console.log(err);
  }
};

// Controlador para eliminar una pregunta
const deleteQuestionController = async (id) => {
  try {
    const deletedQuestion = await deleteQuestion(id);
    return deletedQuestion
  } catch (err) {
    console.log(err);
  }
};

// Controlador para actualizar una pregunta
const updateQuestionController = async (id, test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3 ) => {
  try {
    const updatedQuestion = await updateQuestion(id, {
      test_id, 
      question_text, 
      image_url, 
      correct_answer, 
      wrong_answer_1, 
      wrong_answer_2, 
      wrong_answer_3
    });

    return updatedQuestion;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createQuestionController,
  deleteQuestionController,
  updateQuestionController
};

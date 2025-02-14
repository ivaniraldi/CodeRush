const pool = require('../db/db.js'); // Asegúrate de tener tu conexión de base de datos configurada

// Función para crear una nueva pregunta
const createQuestion = async ({ test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3 }) => {
  const query = `
    INSERT INTO Questions (test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;
  
  const values = [test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3];
  
  try {
    const { rows } = await pool.query(query, values);
    return rows[0]; // Retorna la nueva pregunta creada
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función para eliminar una pregunta
const deleteQuestion = async (id) => {
  const query = `
    DELETE FROM Questions WHERE id = $1 RETURNING *;
  `;
  
  const values = [id];
  
  try {
    const { rows } = await pool.query(query, values);
    if (rows.length === 0) {
      throw new Error('Pregunta no encontrada');
    }
    return rows[0]; // Retorna la pregunta eliminada
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función para actualizar una pregunta
const updateQuestion = async (id, { test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3 }) => {
  const query = `
    UPDATE Questions
    SET test_id = $1, question_text = $2, image_url = $3, correct_answer = $4, wrong_answer_1 = $5, wrong_answer_2 = $6, wrong_answer_3 = $7
    WHERE id = $8
    RETURNING *;
  `;
  
  const values = [test_id, question_text, image_url, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, id];
  
  try {
    const { rows } = await pool.query(query, values);
    if (rows.length === 0) {
      throw new Error('Pregunta no encontrada');
    }
    return rows[0]; // Retorna la pregunta actualizada
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createQuestion,
  deleteQuestion,
  updateQuestion
};

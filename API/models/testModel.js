const pool = require("../db/db");
const format = require("pg-format");

// Obtener todos los tests
const getAllTests = async () => {
    const query = `
    SELECT tests.*, COUNT(questions.id) AS number_of_questions
    FROM tests
    LEFT JOIN questions ON tests.id = questions.test_id
    GROUP BY tests.id;
  `;
  
  const { rows } = await pool.query(query);
  return rows;
};

// Crear un test
const createTest = async (name, category, visibility) => {
  const query = `
    INSERT INTO tests (name, category, visibility)
    VALUES ($1, $2, $3)
    RETURNING id;
  `;
  const { rows } = await pool.query(query, [name, category, visibility]);
  return rows[0].id;
};

const getTestsByCategory = async (category) => {
    const query = `
      SELECT 
        tests.id,
        tests.name,
        tests.category,
        tests.visibility,
        COUNT(questions.id) AS number_of_questions
      FROM tests
      LEFT JOIN questions ON tests.id = questions.test_id
      WHERE tests.category = $1
      GROUP BY tests.id;
    `;
    
    const { rows } = await pool.query(query, [category]);
    return rows;
  };
  
// Obtener un test específico con sus preguntas
const getTestById = async (id) => {
  const testQuery = `SELECT * FROM tests WHERE id = $1;`;
  const questionsQuery = `SELECT * FROM questions WHERE test_id = $1;`;

  const testResult = await pool.query(testQuery, [id]);
  if (testResult.rows.length === 0) return null;

  const questionsResult = await pool.query(questionsQuery, [id]);

  return {
    test: testResult.rows[0],
    questions: questionsResult.rows,
  };
};

// Eliminar un test
const deleteTest = async (id) => {
  const query = `DELETE FROM tests WHERE id = $1 RETURNING id;`;
  const { rows } = await pool.query(query, [id]);
  return rows.length > 0;
};

// Modificar un test
const updateTest = async (id, { name, category, visibility }) => {
  const query = format(
    `UPDATE tests SET name = %L, category = %L, visibility = %L WHERE id = %L RETURNING *;`,
    name,
    category,
    visibility,
    id
  );

  const { rows } = await pool.query(query);
  return rows.length > 0 ? rows[0] : null;
};

module.exports = { createTest, getTestsByCategory, getTestById, deleteTest, updateTest, getAllTests };

const pool = require("../db/db");
const format = require("pg-format");

// Obtener todos los usuarios
const getAllUsers = async () => {
  const query = "SELECT id, name, email, total_points FROM users";
  const { rows } = await pool.query(query);
  return rows;
};

// Obtener un usuario por ID
const getUserById = async (id) => {
  const query = "SELECT id, name, email, total_points FROM users WHERE id = $1";
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// Eliminar un usuario por ID
const deleteUser = async (id) => {
  const query = "DELETE FROM users WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// Modificar un usuario (actualizar datos)
const updateUser = async (id, updates) => {
  const fields = Object.keys(updates).map((key, index) => format("%I = $%s", key, index + 2)).join(", ");
  const values = Object.values(updates);
  const query = format("UPDATE users SET %s WHERE id = $1 RETURNING *", fields);
  const { rows } = await pool.query(query, [id, ...values]);
  return rows[0];
};

module.exports = { getAllUsers, getUserById, deleteUser, updateUser };

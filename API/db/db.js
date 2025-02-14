const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: "coderush",
  password: process.env.DB_PASS,
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;
const express = require("express");
const cors = require("cors");
const pool = require("./db/db");
const jwt = require("jsonwebtoken");
const socketIo = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(cors());

// Rutas
app.use("/api", require("./routes/index"));

// Página principal
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Socket.io
io.on("connection", (socket) => {
  console.log("🟢 Un usuario se ha conectado");
  socket.on("disconnect", () => {
    console.log("🔴 Un usuario se ha desconectado");
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!" + err.message);
});

// Iniciar servidor
server.listen(3000, async () => {
  console.log("💻 Servidor de API y WebSocket iniciado en http://localhost:3000");
  try {
    const timeNow = await pool.query("SELECT NOW()");
    const formattedTime = timeNow.rows[0].now.toString().slice(4, timeNow.length);
    console.log("🟢 La base de datos se ha conectado correctamente en la fecha:", formattedTime);
  } catch (error) {
    console.error("🔴 Error al conectar a la base de datos:", error.message);
  }
});

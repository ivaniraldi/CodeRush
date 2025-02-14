const jwt = require("jsonwebtoken");
const adminWhitelist = require("../admin_whitelist/admin_wl");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

// Middleware para generar el token con rol de admin si el usuario está en la whitelist
const generateToken = (user) => {
  const role = adminWhitelist.includes(user.email) ? "admin" : "user";
  return jwt.sign({ id: user.id, email: user.email, role }, secretKey, { expiresIn: "7d" });
};

// Middleware para verificar el token
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Acceso no autorizado" });

  jwt.verify(token.split(" ")[1], secretKey, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token inválido" });
    req.user = decoded;
    next();
  });
};

// Middleware para verificar si el usuario es admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Acceso restringido a administradores" });
  }
  next();
};

module.exports = { generateToken, verifyToken, isAdmin };
const authModel = require("../models/authModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { adminWhitelist } = require("../admin_whitelist/admin_wl");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const existingUser = await authModel.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "El correo ya está en uso" });
        }
        const newUser = await authModel.createUser(name, email, password);

        const role = adminWhitelist.includes(email) ? "admin" : "user";
        const token = jwt.sign({ id: newUser.id, email, role }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(201).json({
            message: "Usuario registrado exitosamente",
            token,
            user: {
                id: newUser.id,
                name,
                email,
                total_points: 0,
                role
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const user = await authModel.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: "Correo no encontrado" });
        }

        // Compara la contraseña ingresada con la almacenada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        const role = adminWhitelist.includes(email) ? "admin" : "user";
        const token = jwt.sign({ id: user.id, email, role }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(200).json({
            message: "Inicio de sesión exitoso",
            data: {
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    total_points: user.total_points,
                    role
                }
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
};

module.exports = { register, login };
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const DOMINIOS_ADMIN = ["test.com.uy", "anima.edu.uy"];

const register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const dominio = email.split("@")[1].toLowerCase();
    const rol = DOMINIOS_ADMIN.includes(dominio) ? "admin" : "usuario";
    const user = await User.create({
      nombre,
      email,
      password: hashedPassword,
      rol,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al registrar usuario", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    const passwordValida = await bcrypt.compare(password, user.password);
    if (!passwordValida)
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });

    const dominio = email.split("@")[1].toLowerCase();
    const rolCorrecto = DOMINIOS_ADMIN.includes(dominio) ? "admin" : "usuario";

    if (user.rol !== rolCorrecto) {
      await user.update({ rol: rolCorrecto });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, rol: rolCorrecto },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al iniciar sesión", error });
  }
};

module.exports = { register, login };

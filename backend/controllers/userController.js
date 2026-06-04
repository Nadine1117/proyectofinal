const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const user = await User.create({
      nombre,
      email,
      password,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al registrar usuario",
      error,
    });
  }
};

module.exports = {
  register,
};

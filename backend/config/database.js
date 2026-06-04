const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("proyectofinal", "root", "Root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

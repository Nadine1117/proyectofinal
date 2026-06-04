const express = require("express");
const sequelize = require("./config/database");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a MySQL exitosa");

    app.listen(3000, () => {
      console.log("Servidor corriendo en puerto 3000");
    });
  })
  .catch((error) => {
    console.error("Error al conectar con MySQL:", error);
  });

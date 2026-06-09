const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const User = require("./models/User");
const Product = require("./models/Product");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});
sequelize
  .sync()
  .then(() => {
    console.log("Base de datos sincronizada");
    app.listen(3000, () => {
      console.log("Servidor corriendo en puerto 3000");
    });
  })
  .catch((error) => {
    console.error("Error al conectar con MySQL:", error);
  });

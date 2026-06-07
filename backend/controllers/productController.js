const Product = require("../models/Product");
const getAll = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};
const getOne = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ mensaje: "Producto no encontrado" });
  res.json(product);
};
const create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear producto", error });
  }
};
const update = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ mensaje: "Producto no encontrado" });
    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar producto", error });
  }
};
const remove = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ mensaje: "Producto no encontrado" });
    await product.destroy();
    res.json({ mensaje: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar producto", error });
  }
};
module.exports = { getAll, getOne, create, update, remove };

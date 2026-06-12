import { useEffect, useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ titulo: "", descripcion: "", precio: "", stock: "", categoria: "" });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products", {
        headers: { Authorization: token },
      });
      const data = await response.json();
      if (data.mensaje === "Token inválido") logout();
      else setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editId ? `http://localhost:3000/api/products/${editId}` : "http://localhost:3000/api/products";
    const method = editId ? "PUT" : "POST";
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify(form),
    });
    setForm({ titulo: "", descripcion: "", precio: "", stock: "", categoria: "" });
    setEditId(null);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({ titulo: product.titulo, descripcion: product.descripcion, precio: product.precio, stock: product.stock, categoria: product.categoria });
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
      headers: { Authorization: token },
    });
    fetchProducts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de Administración</h1>
      <button onClick={logout}>Cerrar sesión</button>

      <h2>{editId ? "Editar Producto" : "Agregar Producto"}</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Título" value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} required /><br/>
        <input placeholder="Descripción" value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} /><br/>
        <input placeholder="Precio" type="number" value={form.precio} onChange={(e) => setForm({ ...form, precio: e.target.value })} required /><br/>
        <input placeholder="Stock" type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} required /><br/>
        <input placeholder="Categoría" value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} /><br/>
        <button type="submit">{editId ? "Guardar cambios" : "Agregar"}</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setForm({ titulo: "", descripcion: "", precio: "", stock: "", categoria: "" }); }}>Cancelar</button>}
      </form>

      <h2>Productos</h2>
      {products.length === 0 ? <p>No hay productos</p> : products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{product.titulo}</h3>
          <p>{product.descripcion}</p>
          <p>Precio: ${product.precio} | Stock: {product.stock} | Categoría: {product.categoria}</p>
          <button onClick={() => handleEdit(product)}>Editar</button>
          <button onClick={() => handleDelete(product.id)} style={{ marginLeft: "10px", color: "red" }}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;

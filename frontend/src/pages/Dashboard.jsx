import { useEffect, useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    stock: "",
    categoria: "",
  });
  const [editId, setEditId] = useState(null);
  const token = localStorage.getItem("token");
  const payload = token ? JSON.parse(atob(token.split(".")[1])) : null;
  const isAdmin = payload?.rol === "admin";

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

  useEffect(() => {
    fetchProducts();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editId
      ? `http://localhost:3000/api/products/${editId}`
      : "http://localhost:3000/api/products";
    const method = editId ? "PUT" : "POST";
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify(form),
    });
    setForm({
      titulo: "",
      descripcion: "",
      precio: "",
      stock: "",
      categoria: "",
    });
    setEditId(null);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({
      titulo: product.titulo,
      descripcion: product.descripcion,
      precio: product.precio,
      stock: product.stock,
      categoria: product.categoria,
    });
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
      headers: { Authorization: token },
    });
    fetchProducts();
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5efe6" }}>
      <div
        style={{
          backgroundColor: "#1f3c5a",
          color: "white",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{ fontSize: "24px", fontWeight: "bold", color: "#6ec1a5" }}
        >
          {isAdmin ? "Panel de Administración" : "Mi cuenta"}
        </span>
        <button
          onClick={logout}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid white",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Cerrar sesión
        </button>
      </div>

      <div
        style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}
      >
        {isAdmin && (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "30px",
              marginBottom: "30px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#1f3c5a", marginBottom: "20px" }}>
              {editId ? "Editar Producto" : "Agregar Producto"}
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                style={inputStyle}
                placeholder="Titulo"
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                required
              />
              <input
                style={inputStyle}
                placeholder="Descripcion"
                value={form.descripcion}
                onChange={(e) =>
                  setForm({ ...form, descripcion: e.target.value })
                }
              />
              <input
                style={inputStyle}
                placeholder="Precio"
                type="number"
                value={form.precio}
                onChange={(e) => setForm({ ...form, precio: e.target.value })}
                required
              />
              <input
                style={inputStyle}
                placeholder="Stock"
                type="number"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
                required
              />
              <input
                style={inputStyle}
                placeholder="Categoria"
                value={form.categoria}
                onChange={(e) =>
                  setForm({ ...form, categoria: e.target.value })
                }
              />
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#6ec1a5",
                    color: "white",
                    border: "none",
                    padding: "10px 24px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  {editId ? "Guardar" : "Agregar"}
                </button>
                {editId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditId(null);
                      setForm({
                        titulo: "",
                        descripcion: "",
                        precio: "",
                        stock: "",
                        categoria: "",
                      });
                    }}
                    style={{
                      backgroundColor: "#ccc",
                      color: "#333",
                      border: "none",
                      padding: "10px 24px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Cancelar
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        <h2 style={{ color: "#1f3c5a", marginBottom: "20px" }}>Productos</h2>
        {products.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "15px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ color: "#1f3c5a", marginBottom: "8px" }}>
                {product.titulo}
              </h3>
              <p style={{ color: "#555", marginBottom: "8px" }}>
                {product.descripcion}
              </p>
              <p
                style={{
                  color: "#888",
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              >
                ${product.precio} | Stock: {product.stock} | {product.categoria}
              </p>
              {isAdmin && (
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => handleEdit(product)}
                    style={{
                      backgroundColor: "#23395d",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;

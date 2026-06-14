import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    stock: "",
    categoria: "",
    imagen: "",
  });
  const [editId, setEditId] = useState(null);
  const token = localStorage.getItem("token");
  const payload = token ? JSON.parse(atob(token.split(".")[1])) : null;
  const isAdmin = payload?.rol === "admin";
  const { cart, addToCart } = useCart();

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
      imagen: "",
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
      imagen: product.imagen || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  const filteredProducts = products.filter(
    (p) =>
      p.titulo.toLowerCase().includes(search.toLowerCase()) ||
      (p.categoria || "").toLowerCase().includes(search.toLowerCase()),
  );

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
          📚{" "}
          {isAdmin ? "Panel de Administración" : "Catálogo de libros y cursos"}
        </span>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {!isAdmin && (
            <button
              onClick={() => (window.location.href = "/carrito")}
              style={{
                backgroundColor: "#6ec1a5",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🛒 Carrito ({cart.length})
            </button>
          )}
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
      </div>

      <div
        style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px" }}
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
              <input
                style={inputStyle}
                placeholder="URL de imagen (portada)"
                value={form.imagen}
                onChange={(e) => setForm({ ...form, imagen: e.target.value })}
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
                        imagen: "",
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

        <div style={{ marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Buscar por título o categoría..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 20px",
              border: "1px solid #ccc",
              borderRadius: "30px",
              fontSize: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          />
        </div>

        <h2 style={{ color: "#1f3c5a", marginBottom: "20px" }}>
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "resultado" : "resultados"}
        </h2>

        {filteredProducts.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#1f3c5a",
                    borderRadius: "8px",
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    overflow: "hidden",
                  }}
                >
                  {product.imagen ? (
                    <img
                      src={product.imagen}
                      alt={product.titulo}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: "48px" }}>📖</span>
                  )}
                </div>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#6ec1a5",
                    color: "white",
                    fontSize: "12px",
                    padding: "3px 10px",
                    borderRadius: "12px",
                    marginBottom: "8px",
                    alignSelf: "flex-start",
                  }}
                >
                  {product.categoria || "General"}
                </span>
                <h3
                  style={{
                    color: "#1f3c5a",
                    marginBottom: "6px",
                    fontSize: "18px",
                  }}
                >
                  {product.titulo}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    marginBottom: "10px",
                    flexGrow: 1,
                  }}
                >
                  {product.descripcion}
                </p>
                <p
                  style={{
                    color: "#1f3c5a",
                    fontWeight: "bold",
                    fontSize: "18px",
                    marginBottom: "12px",
                  }}
                >
                  {product.precio === 0 ? "Gratis" : `$${product.precio}`}
                </p>
                {!isAdmin && (
                  <button
                    onClick={() => addToCart(product)}
                    disabled={cart.find((item) => item.id === product.id)}
                    style={{
                      backgroundColor: cart.find(
                        (item) => item.id === product.id,
                      )
                        ? "#ccc"
                        : "#6ec1a5",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "8px",
                      cursor: cart.find((item) => item.id === product.id)
                        ? "default"
                        : "pointer",
                      marginBottom: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {cart.find((item) => item.id === product.id)
                      ? "En el carrito"
                      : "Agregar al carrito"}
                  </button>
                )}
                {isAdmin && (
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      onClick={() => handleEdit(product)}
                      style={{
                        flex: 1,
                        backgroundColor: "#23395d",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      style={{
                        flex: 1,
                        backgroundColor: "#e74c3c",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

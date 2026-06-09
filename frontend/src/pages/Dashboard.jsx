import { useEffect, useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:3000/api/products", {
          headers: {
            Authorization: token,
          },
        });

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={logout}>Cerrar sesión</button>

      <h2>Productos</h2>

      {products.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.titulo}</h3>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;

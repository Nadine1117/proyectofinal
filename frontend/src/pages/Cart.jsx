import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

function Cart() {
  const { cart, removeFromCart, clearCart, getMembershipPrice } = useCart();
  const membership = getMembershipPrice();

  const handleCheckout = () => {
    alert("¡Gracias por tu compra! Tu membresía fue activada.");
    clearCart();
    window.location.href = "/libros";
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5efe6" }}>
      <Navbar />

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
          🛒 Mi carrito
        </span>
        <button
          onClick={() => (window.location.href = "/libros")}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid white",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Volver al catálogo
        </button>
      </div>

      <div
        style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px" }}
      >
        {cart.length === 0 ? (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "40px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ color: "#666", fontSize: "16px" }}>
              Tu carrito está vacío.
            </p>
          </div>
        ) : (
          <>
            <h2 style={{ color: "#1f3c5a", marginBottom: "20px" }}>
              Libros agregados
            </h2>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <div>
                  <h3
                    style={{
                      color: "#1f3c5a",
                      fontSize: "16px",
                      marginBottom: "4px",
                    }}
                  >
                    {item.titulo}
                  </h3>
                  <p style={{ color: "#888", fontSize: "13px" }}>
                    {item.categoria || "General"}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Quitar
                </button>
              </div>
            ))}
          </>
        )}

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            marginTop: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#1f3c5a", marginBottom: "16px" }}>
            Membresía Educamarket
          </h2>
          <p style={{ color: "#555", marginBottom: "10px" }}>
            Acceso ilimitado a libros y cursos.
          </p>
          <p
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1f3c5a",
              marginBottom: "20px",
            }}
          >
            {membership === 0
              ? "Gratis (institución educativa pública)"
              : `$${membership.toFixed(2)} USD`}
          </p>
          <button
            onClick={handleCheckout}
            style={{
              width: "100%",
              backgroundColor: "#6ec1a5",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {membership === 0
              ? "Confirmar acceso gratuito"
              : "Pagar y confirmar membresía"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

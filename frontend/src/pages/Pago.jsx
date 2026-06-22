import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

function Pago() {
  const { cart, clearCart, getMembershipPrice } = useCart();
  const membership = getMembershipPrice();

  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [vencimiento, setVencimiento] = useState("");
  const [cvv, setCvv] = useState("");
  const [procesando, setProcesando] = useState(false);
  const [aprobado, setAprobado] = useState(false);

  useEffect(() => {
    if (!aprobado && cart.length === 0) {
      window.location.href = "/carrito";
    }
  }, [aprobado, cart.length]);

  useEffect(() => {
    if (membership === 0 && !procesando && !aprobado && cart.length > 0) {
      setProcesando(true);
      setTimeout(() => {
        setProcesando(false);
        setAprobado(true);
        clearCart();
        setTimeout(() => {
          window.location.href = "/libros";
        }, 2000);
      }, 1800);
    }
  }, [membership, cart.length]);

  const formatNumero = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatVencimiento = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) {
      return digits.slice(0, 2) + "/" + digits.slice(2);
    }
    return digits;
  };

  const numeroValido = numero.replace(/\s/g, "").length === 16;
  const vencimientoValido = /^\d{2}\/\d{2}$/.test(vencimiento);
  const cvvValido = cvv.length === 3;
  const formularioValido =
    nombre.trim().length > 0 && numeroValido && vencimientoValido && cvvValido;

  const handlePago = (e) => {
    e.preventDefault();
    if (!formularioValido) return;

    setProcesando(true);
    setTimeout(() => {
      setProcesando(false);
      setAprobado(true);
      clearCart();
      setTimeout(() => {
        window.location.href = "/libros";
      }, 2000);
    }, 2000);
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
          💳 Pago
        </span>
        <button
          onClick={() => (window.location.href = "/carrito")}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid white",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Volver al carrito
        </button>
      </div>

      <div
        style={{ maxWidth: "500px", margin: "40px auto", padding: "0 20px" }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "32px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {aprobado ? (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "40px", marginBottom: "10px" }}>✅</p>
              <h2 style={{ color: "#1f3c5a", marginBottom: "10px" }}>
                {membership === 0
                  ? "Acceso gratuito activado"
                  : "Pago aprobado"}
              </h2>
              <p style={{ color: "#666" }}>
                Tu membresía fue activada. Redirigiendo...
              </p>
            </div>
          ) : membership === 0 ? (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "40px", marginBottom: "10px" }}>🎓</p>
              <h2 style={{ color: "#1f3c5a", marginBottom: "10px" }}>
                Activando tu acceso gratuito
              </h2>
              <p style={{ color: "#666" }}>
                Verificando tu correo institucional...
              </p>
            </div>
          ) : (
            <>
              <h2 style={{ color: "#1f3c5a", marginBottom: "8px" }}>
                Confirmar membresía
              </h2>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#1f3c5a",
                  marginBottom: "24px",
                }}
              >
                ${membership.toFixed(2)} USD
              </p>

              <form onSubmit={handlePago}>
                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#555",
                      marginBottom: "6px",
                      fontSize: "14px",
                    }}
                  >
                    Nombre del titular
                  </label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre como figura en la tarjeta"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      fontSize: "15px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#555",
                      marginBottom: "6px",
                      fontSize: "14px",
                    }}
                  >
                    Número de tarjeta
                  </label>
                  <input
                    type="text"
                    value={numero}
                    onChange={(e) => setNumero(formatNumero(e.target.value))}
                    placeholder="0000 0000 0000 0000"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      fontSize: "15px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div
                  style={{ display: "flex", gap: "16px", marginBottom: "24px" }}
                >
                  <div style={{ flex: 1 }}>
                    <label
                      style={{
                        display: "block",
                        color: "#555",
                        marginBottom: "6px",
                        fontSize: "14px",
                      }}
                    >
                      Vencimiento
                    </label>
                    <input
                      type="text"
                      value={vencimiento}
                      onChange={(e) =>
                        setVencimiento(formatVencimiento(e.target.value))
                      }
                      placeholder="MM/AA"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "15px",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label
                      style={{
                        display: "block",
                        color: "#555",
                        marginBottom: "6px",
                        fontSize: "14px",
                      }}
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) =>
                        setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
                      }
                      placeholder="123"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "15px",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!formularioValido || procesando}
                  style={{
                    width: "100%",
                    backgroundColor: formularioValido ? "#6ec1a5" : "#bbb",
                    color: "white",
                    border: "none",
                    padding: "14px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: formularioValido ? "pointer" : "not-allowed",
                  }}
                >
                  {procesando
                    ? "Procesando pago..."
                    : `Pagar $${membership.toFixed(2)} USD`}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pago;

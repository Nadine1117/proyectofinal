import { useState } from "react";
import logo from "../assets/logo-educamarket.png";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!data.token) {
        setError("Email o contraseña incorrectos");
        return;
      }
      const payload = JSON.parse(atob(data.token.split(".")[1]));
      if (payload.rol !== "admin") {
        setError("No tenés permisos de administrador");
        return;
      }
      localStorage.setItem("token", data.token);
      window.location.href = "/libros";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F7FAFC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "40px",
          width: "400px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <img
            src={logo}
            alt="Educamarket"
            style={{ height: "80px", marginBottom: "10px" }}
          />
          <p style={{ color: "#667085", marginTop: "8px" }}>
            Panel de administración
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                color: "#163D6B",
                fontWeight: "bold",
                marginBottom: "6px",
              }}
            >
              Email institucional
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                color: "#163D6B",
                fontWeight: "bold",
                marginBottom: "6px",
              }}
            >
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>
          {error && (
            <p style={{ color: "#e74c3c", marginBottom: "16px" }}>{error}</p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#163D6B",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Ingresar como admin
          </button>
        </form>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            padding: "16px",
            backgroundColor: "#F7FAFC",
            borderRadius: "8px",
          }}
        >
          <p
            style={{ color: "#667085", fontSize: "13px", marginBottom: "8px" }}
          >
            ¿Primera vez? Registrate con tu correo institucional
          </p>
          <p
            style={{ color: "#667085", fontSize: "12px", marginBottom: "8px" }}
          >
            Dominios habilitados: <strong>@anima.edu.uy</strong> ·{" "}
            <strong>@test.com.uy</strong>
          </p>
          <span
            onClick={() => (window.location.href = "/register")}
            style={{
              color: "#27BFD2",
              fontSize: "14px",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Crear cuenta de administrador
          </span>
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: "16px",
            color: "#667085",
            fontSize: "13px",
          }}
        >
          ¿No sos admin?{" "}
          <span
            onClick={() => (window.location.href = "/login")}
            style={{ color: "#27BFD2", cursor: "pointer", fontWeight: "bold" }}
          >
            Acceso general
          </span>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;

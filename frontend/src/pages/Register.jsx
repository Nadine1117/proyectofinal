import { useState } from "react";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password }),
      });
      const data = await response.json();
      if (data.id) {
        alert("Registro exitoso, ahora podés iniciar sesión");
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5efe6", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "40px", width: "400px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div style={{ fontSize: "48px" }}>📚</div>
          <h1 style={{ color: "#1f3c5a", fontSize: "28px", marginTop: "10px" }}>Educamarket</h1>
          <p style={{ color: "#888", marginTop: "8px" }}>Creá tu cuenta</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#1f3c5a", fontWeight: "bold", marginBottom: "6px" }}>Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px" }} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#1f3c5a", fontWeight: "bold", marginBottom: "6px" }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px" }} />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", color: "#1f3c5a", fontWeight: "bold", marginBottom: "6px" }}>Contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px" }} />
          </div>
          <button type="submit" style={{ width: "100%", backgroundColor: "#6ec1a5", color: "white", border: "none", padding: "14px", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>Registrarse</button>
          <p style={{ textAlign: "center", marginTop: "16px", color: "#888", fontSize: "14px" }}>
            Ya tenés cuenta? <span onClick={() => window.location.href = "/login"} style={{ color: "#6ec1a5", cursor: "pointer", fontWeight: "bold" }}>Iniciá sesión</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

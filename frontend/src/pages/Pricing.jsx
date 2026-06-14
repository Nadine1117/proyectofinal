function Pricing() {
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    flex: 1,
    minWidth: "260px",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5efe6" }}>
      <div style={{ backgroundColor: "#1f3c5a", color: "white", padding: "18px 40px" }}>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#6ec1a5" }}>📚 Educamarket</span>
      </div>
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "0 20px 60px" }}>
        <h1 style={{ color: "#1f3c5a", textAlign: "center", marginBottom: "40px" }}>💰 Precios</h1>

        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "40px" }}>
          <div style={cardStyle}>
            <h2 style={{ color: "#1f3c5a", marginBottom: "8px" }}>Membresía Gratuita</h2>
            <p style={{ color: "#666", marginBottom: "16px" }}>Para estudiantes de instituciones públicas reconocidas.</p>
            <ul style={{ listStyle: "none", padding: 0, color: "#555", lineHeight: "1.8" }}>
              <li>✔ Acceso completo</li>
              <li>✔ Libros digitales</li>
              <li>✔ Cursos disponibles</li>
              <li>✔ Recursos educativos</li>
            </ul>
            <p style={{ fontSize: "26px", fontWeight: "bold", color: "#6ec1a5", marginTop: "16px" }}>USD 0</p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ color: "#1f3c5a", marginBottom: "8px" }}>Membresía Estándar</h2>
            <p style={{ color: "#666", marginBottom: "16px" }}>Para usuarios con correos privados o personales.</p>
            <ul style={{ listStyle: "none", padding: 0, color: "#555", lineHeight: "1.8" }}>
              <li>✔ Acceso completo</li>
              <li>✔ Todos los recursos</li>
              <li>✔ Actualizaciones continuas</li>
            </ul>
            <p style={{ fontSize: "26px", fontWeight: "bold", color: "#1f3c5a", marginTop: "16px" }}>USD 99,99</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <div style={cardStyle}>
            <h3 style={{ color: "#1f3c5a", marginBottom: "10px" }}>Correos públicos aceptados</h3>
            <ul style={{ listStyle: "none", padding: 0, color: "#555", lineHeight: "1.8" }}>
              <li>@udelar.com.uy</li>
              <li>@utu.com.uy</li>
              <li>@secundaria.com.uy</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: "#1f3c5a", marginBottom: "10px" }}>Correos que abonan membresía</h3>
            <ul style={{ listStyle: "none", padding: 0, color: "#555", lineHeight: "1.8" }}>
              <li>@ort.com.uy</li>
              <li>@ude.com.uy</li>
              <li>@um.com.uy</li>
              <li>@gmail.com</li>
              <li>@hotmail.com</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => (window.location.href = "/")}
            style={{ backgroundColor: "#6ec1a5", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

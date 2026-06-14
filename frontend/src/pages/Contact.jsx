function Contact() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5efe6" }}>
      <div style={{ backgroundColor: "#1f3c5a", color: "white", padding: "18px 40px" }}>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#6ec1a5" }}>📚 Educamarket</span>
      </div>
      <div style={{ maxWidth: "800px", margin: "60px auto", padding: "0 20px", textAlign: "center" }}>
        <h1 style={{ color: "#1f3c5a" }}>Contacto</h1>
        <p style={{ color: "#666", marginTop: "10px" }}>Información de contacto próximamente.</p>
        <button
          onClick={() => (window.location.href = "/")}
          style={{ marginTop: "20px", backgroundColor: "#6ec1a5", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default Contact;

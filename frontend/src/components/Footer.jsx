function Footer() {
  return (
    <footer style={{ backgroundColor: "#1f3c5a", color: "white", padding: "30px 40px", textAlign: "center", marginTop: "40px" }}>
      <p style={{ marginBottom: "10px", fontWeight: "bold", color: "#6ec1a5" }}>📚 Educamarket</p>
      <p style={{ fontSize: "14px", marginBottom: "10px" }}>
        Educación accesible para todos.
      </p>
      <a href="/terminos" style={{ color: "#6ec1a5", fontSize: "14px", textDecoration: "underline" }}>
        Términos y condiciones
      </a>
      <p style={{ fontSize: "12px", color: "#aaa", marginTop: "15px" }}>
        © 2026 Educamarket. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;

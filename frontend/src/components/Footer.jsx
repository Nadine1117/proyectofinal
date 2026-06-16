const bookCursor =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Ctext y='20' font-size='20'%3E%F0%9F%93%96%3C/text%3E%3C/svg%3E\") 12 12, pointer";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1f3c5a",
        color: "white",
        padding: "30px 40px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <p style={{ marginBottom: "10px", fontWeight: "bold", color: "#6ec1a5" }}>
        📚 Educamarket
      </p>
      <p style={{ fontSize: "14px", marginBottom: "10px" }}>
        Educación accesible para todos.
      </p>
      <a
        href="/terminos"
        style={{
          color: "#6ec1a5",
          fontSize: "14px",
          textDecoration: "underline",
          cursor: bookCursor,
        }}
      >
        Términos y condiciones
      </a>
      <p style={{ fontSize: "12px", color: "#aaa", marginTop: "15px" }}>
        © 2026 Educamarket. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;

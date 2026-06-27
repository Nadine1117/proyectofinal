const bookCursor =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Ctext y='20' font-size='20'%3E%F0%9F%93%96%3C/text%3E%3C/svg%3E\") 12 12, pointer";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#163D6B",
        color: "white",
        padding: "50px 40px 20px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        <div>
          <img
            src="/src/assets/logo-educamarket.png"
            alt="Educamarket"
            style={{ height: "60px", marginBottom: "10px" }}
          />
          <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.7" }}>
            Plataforma educativa para acercar el conocimiento a todas las
            personas, con acceso gratuito para instituciones públicas.
          </p>
        </div>

        <div>
          <p
            style={{
              fontWeight: "bold",
              color: "#7AD8A4",
              fontSize: "15px",
              marginBottom: "12px",
            }}
          >
            Navegación
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href="/"
              style={{
                color: "#aaa",
                fontSize: "14px",
                textDecoration: "none",
                cursor: bookCursor,
              }}
            >
              Inicio
            </a>
            <a
              href="/explorar"
              style={{
                color: "#aaa",
                fontSize: "14px",
                textDecoration: "none",
                cursor: bookCursor,
              }}
            >
              Explorar
            </a>
            <a
              href="/precios"
              style={{
                color: "#aaa",
                fontSize: "14px",
                textDecoration: "none",
                cursor: bookCursor,
              }}
            >
              Precios
            </a>
            <a
              href="/sobre-nosotros"
              style={{
                color: "#aaa",
                fontSize: "14px",
                textDecoration: "none",
                cursor: bookCursor,
              }}
            >
              Sobre Nosotros
            </a>
            <a
              href="/preguntas-frecuentes"
              style={{
                color: "#aaa",
                fontSize: "14px",
                textDecoration: "none",
                cursor: bookCursor,
              }}
            >
              Preguntas Frecuentes
            </a>
          </div>
        </div>

        <div>
          <p
            style={{
              fontWeight: "bold",
              color: "#7AD8A4",
              fontSize: "15px",
              marginBottom: "12px",
            }}
          >
            Legal
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href="/terminos"
              style={{
                color: "#aaa",
                fontSize: "14px",
                textDecoration: "none",
                cursor: bookCursor,
              }}
            >
              Términos y condiciones
            </a>
            <a
              href="/admin/login"
              style={{
                color: "#7AD8A4",
                fontSize: "14px",
                textDecoration: "none",
                cursor: bookCursor,
              }}
            >
              Acceso administradores
            </a>
          </div>
        </div>

        <div>
          <p
            style={{
              fontWeight: "bold",
              color: "#7AD8A4",
              fontSize: "15px",
              marginBottom: "12px",
            }}
          >
            Contacto
          </p>
          <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "8px" }}>
            📧 contacto@educamarket.com
          </p>
          <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "16px" }}>
            🌍 Uruguay
          </p>
          <p
            style={{
              fontWeight: "bold",
              color: "#7AD8A4",
              fontSize: "15px",
              marginBottom: "10px",
            }}
          >
            Redes sociales
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="#"
              style={{
                color: "#27BFD2",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              📘
            </a>
            <a
              href="#"
              style={{
                color: "#27BFD2",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              📸
            </a>
            <a
              href="#"
              style={{
                color: "#27BFD2",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              🐦
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #1D4C87",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "12px", color: "#667085" }}>
          © 2026 Educamarket. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

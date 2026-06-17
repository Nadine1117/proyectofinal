import banner from "../assets/banner.jpg";
import InfoCarousel from "./InfoCarousel";

function Hero() {
  return (
    <>
      <div
        style={{ width: "100%", backgroundColor: "#123B73", padding: "20px 0" }}
      >
        <img
          src={banner}
          alt="Educamarket banner"
          style={{
            display: "block",
            maxWidth: "1200px",
            width: "100%",
            height: "auto",
            margin: "0 auto",
            borderRadius: "12px",
          }}
        />
      </div>

      <section className="hero-info">
        <h1>
          ¿Qué encontrarás en Educamarket?
          <br />
          Miles de recursos para tu formación educativa.
        </h1>
        <p>
          En Educamarket conectamos personas con libros, cursos y recursos
          educativos. Si tenés correo académico de una institución pública,
          accedés completamente gratis.
        </p>
        <div
          className="hero-buttons"
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <button
            className="primary-btn"
            onClick={() => (window.location.href = "/libros")}
          >
            Explorar Libros
          </button>
          <button
            className="secondary-btn"
            onClick={() => (window.location.href = "/libros")}
          >
            Ver Cursos
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {[
            {
              emoji: "📖",
              titulo: "Miles de recursos",
              desc: "Libros, cursos y materiales educativos",
            },
            {
              emoji: "🎓",
              titulo: "Gratis para educación pública",
              desc: "Solo necesitás tu correo académico",
            },
            {
              emoji: "🌍",
              titulo: "Desde cualquier lugar",
              desc: "Accedé cuando y donde quieras",
            },
            {
              emoji: "💡",
              titulo: "Contenido actualizado",
              desc: "Siempre lo más relevante",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                backgroundColor: "#f5efe6",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                {item.emoji}
              </div>
              <h3
                style={{
                  color: "#1f3c5a",
                  fontSize: "14px",
                  marginBottom: "6px",
                }}
              >
                {item.titulo}
              </h3>
              <p style={{ color: "#666", fontSize: "13px" }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <InfoCarousel />
      </section>
    </>
  );
}

export default Hero;

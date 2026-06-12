import banner from "../assets/banner.jpg";

function Hero() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${banner})` }}
      ></section>

      <section className="hero-info">
        <h1>
          La educación transforma vidas.
          <br />
          Hagamos que llegue a todos.
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
          <button className="primary-btn">Explorar Libros</button>
          <button className="secondary-btn">Ver Cursos</button>
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
      </section>
    </>
  );
}

export default Hero;

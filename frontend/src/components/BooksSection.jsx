function BooksSection() {
  return (
    <section
      id="libros"
      style={{ padding: "60px 40px", backgroundColor: "#f5efe6" }}
    >
      <h2 style={{ color: "#23395d", marginBottom: "30px", fontSize: "28px" }}>
        📚 Libros recomendados
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {[
          {
            titulo: "Ética para Amador",
            autor: "Fernando Savater",
            desc: "Una guía de ética para jóvenes y adultos.",
          },
          {
            titulo: "El Mundo de Sofía",
            autor: "Jostein Gaarder",
            desc: "Un viaje por la historia de la filosofía.",
          },
          {
            titulo: "Educación y Democracia",
            autor: "John Dewey",
            desc: "La educación como base de la sociedad.",
          },
        ].map((libro, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>📖</div>
            <h3 style={{ color: "#1f3c5a", marginBottom: "6px" }}>
              {libro.titulo}
            </h3>
            <p
              style={{
                color: "#6ec1a5",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {libro.autor}
            </p>
            <p style={{ color: "#666", fontSize: "14px" }}>{libro.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BooksSection;

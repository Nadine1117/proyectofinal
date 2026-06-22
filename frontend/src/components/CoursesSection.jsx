function CoursesSection() {
  return (
    <section
      id="cursos"
      style={{ padding: "60px 40px", backgroundColor: "white" }}
    >
      <h2 style={{ color: "#23395d", marginBottom: "30px", fontSize: "28px" }}>
        🎓 Cursos disponibles
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
            titulo: "Introducción a la Filosofía",
            desc: "Aprendé pensamiento crítico.",
            emoji: "🧠",
          },
          {
            titulo: "Programación Web",
            desc: "HTML, CSS y JavaScript.",
            emoji: "💻",
          },
          {
            titulo: "Educación Financiera",
            desc: "Administrá mejor tus recursos.",
            emoji: "💰",
          },
        ].map((curso, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#f5efe6",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>
              {curso.emoji}
            </div>
            <h3 style={{ color: "#1f3c5a", marginBottom: "8px" }}>
              {curso.titulo}
            </h3>
            <p style={{ color: "#666", fontSize: "14px" }}>{curso.desc}</p>
            <button
              onClick={() => (window.location.href = "/cursos")}
              style={{
                marginTop: "16px",
                backgroundColor: "#6ec1a5",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Ver curso
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;

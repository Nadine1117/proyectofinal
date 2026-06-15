function About() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5efe6" }}>
      <div style={{ backgroundColor: "#1f3c5a", color: "white", padding: "18px 40px" }}>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#6ec1a5" }}>📚 Educamarket</span>
      </div>
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px 60px" }}>
        <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "40px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <h1 style={{ color: "#1f3c5a", marginBottom: "20px" }}>Sobre Nosotros</h1>

          <h2 style={{ color: "#1f3c5a", marginTop: "24px", marginBottom: "8px" }}>¿Qué es Educamarket?</h2>
          <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "12px" }}>
            Educamarket es una plataforma diseñada para acercar el conocimiento a más personas mediante el acceso a libros, cursos y recursos educativos en un solo lugar.
          </p>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Nuestro objetivo es facilitar el aprendizaje y brindar oportunidades de crecimiento académico y profesional a estudiantes, docentes y cualquier persona interesada en seguir formándose.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "24px", marginBottom: "8px" }}>Nuestra Misión</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Hacer que el acceso al conocimiento sea más simple, accesible y justo para todos.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "24px", marginBottom: "8px" }}>Nuestra Visión</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Crear una comunidad donde aprender sea una oportunidad al alcance de cualquier persona.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "24px", marginBottom: "8px" }}>¿Por qué Educamarket?</h2>
          <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "12px" }}>
            Creemos que la educación es una de las herramientas más poderosas para transformar vidas. Por eso impulsamos un modelo que beneficia especialmente a quienes forman parte de instituciones educativas públicas, permitiéndoles acceder a la plataforma de forma gratuita.
          </p>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Al mismo tiempo, las membresías de otros usuarios nos ayudan a mantener, mejorar y ampliar continuamente los contenidos disponibles.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "24px", marginBottom: "8px" }}>Nuestros Valores</h2>
          <ul style={{ color: "#555", lineHeight: "1.8", paddingLeft: "24px", listStyle: "none" }}>
            <li>📚 Educación</li>
            <li>🌎 Inclusión</li>
            <li>💡 Innovación</li>
            <li>🤝 Comunidad</li>
            <li>🔍 Transparencia</li>
          </ul>

          <button
            onClick={() => (window.location.href = "/")}
            style={{ marginTop: "30px", backgroundColor: "#6ec1a5", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;

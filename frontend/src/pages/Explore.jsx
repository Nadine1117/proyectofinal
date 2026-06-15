function Explore() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5efe6" }}>
      <div style={{ backgroundColor: "#1f3c5a", color: "white", padding: "18px 40px" }}>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#6ec1a5" }}>📚 Educamarket</span>
      </div>
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px 60px" }}>
        <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "40px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <h1 style={{ color: "#1f3c5a", marginBottom: "20px" }}>Explorar</h1>

          <img
            src="https://www.gub.uy/presidencia/sites/presidencia/files/imagenes/noticias/cb754eb23cfb3600adbfde94fef1dfd6.jpg"
            alt="Estudiantes aprendiendo"
            style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover", maxHeight: "350px" }}
          />

          <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "16px" }}>
            La educación es una de las herramientas más poderosas para transformar vidas, pero el acceso al conocimiento no siempre está al alcance de todos. En Educamarket creemos que las oportunidades de aprendizaje no deberían depender del contexto económico ni de las barreras que muchas veces limitan el desarrollo personal y profesional.
          </p>

          <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "16px" }}>
            Por eso creamos una plataforma que busca acercar recursos educativos de calidad a estudiantes, docentes y personas con ganas de seguir creciendo. Nuestro objetivo es contribuir a reducir la brecha de acceso a la educación y construir una comunidad donde aprender sea más accesible para todos.
          </p>

          <p style={{ color: "#1f3c5a", fontWeight: "bold", lineHeight: "1.6", marginBottom: "16px" }}>
            🚀 Miles de estudiantes y profesionales de Latinoamérica ya forman parte de esta iniciativa para acercar el conocimiento a más personas y generar nuevas oportunidades de crecimiento.
          </p>

          <p style={{ color: "#1f3c5a", fontWeight: "bold", lineHeight: "1.6", marginBottom: "24px" }}>
            🔒 Iniciá sesión para descubrir todo el contenido disponible.
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => (window.location.href = "/login")}
              style={{ backgroundColor: "#6ec1a5", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              style={{ backgroundColor: "#1f3c5a", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;

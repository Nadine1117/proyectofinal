import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Explore() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7FAFC" }}>
      <Navbar />
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px 60px" }}>
        <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "40px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <h1 style={{ color: "#163D6B", marginBottom: "20px" }}>Explorar</h1>

          <img
            src="https://www.gub.uy/presidencia/sites/presidencia/files/imagenes/noticias/cb754eb23cfb3600adbfde94fef1dfd6.jpg"
            alt="Estudiantes aprendiendo"
            style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover", maxHeight: "350px" }}
          />

          <p style={{ color: "#667085", lineHeight: "1.6", marginBottom: "16px" }}>
            La educación es una de las herramientas más poderosas para transformar vidas, pero el acceso al conocimiento no siempre está al alcance de todos. En Educamarket creemos que las oportunidades de aprendizaje no deberían depender del contexto económico ni de las barreras que muchas veces limitan el desarrollo personal y profesional.
          </p>

          <p style={{ color: "#667085", lineHeight: "1.6", marginBottom: "16px" }}>
            Por eso creamos una plataforma que busca acercar recursos educativos de calidad a estudiantes, docentes y personas con ganas de seguir creciendo. Nuestro objetivo es contribuir a reducir la brecha de acceso a la educación y construir una comunidad donde aprender sea más accesible para todos.
          </p>

          <p style={{ color: "#163D6B", fontWeight: "bold", lineHeight: "1.6", marginBottom: "16px" }}>
            Miles de estudiantes y profesionales de Latinoamérica ya forman parte de esta iniciativa.
          </p>

          <p style={{ color: "#163D6B", fontWeight: "bold", lineHeight: "1.6", marginBottom: "24px" }}>
            Descubrí todo el contenido disponible en nuestra biblioteca.
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => (window.location.href = "/libros")}
              style={{ backgroundColor: "#58C786", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
            >
              Ver libros
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              style={{ backgroundColor: "#163D6B", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;

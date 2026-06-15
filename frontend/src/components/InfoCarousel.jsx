import { useEffect, useState } from "react";

function InfoCarousel() {
  const slides = [
    {
      icono: "📚",
      titulo: "Más de 200 libros educativos",
      texto: "Accedé a materiales de filosofía, historia, programación y más.",
    },
    {
      icono: "🎓",
      titulo: "Cursos para todos",
      texto: "Aprendé nuevas habilidades desde cualquier lugar.",
    },
    {
      icono: "💻",
      titulo: "Recursos digitales",
      texto: "Contenido actualizado para estudiantes y docentes.",
    },
    {
      icono: "🌎",
      titulo: "Acceso desde cualquier lugar",
      texto: "Disponible las 24 horas desde cualquier dispositivo.",
    },
  ];

  const [actual, setActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-card">
        <div className="carousel-icon">{slides[actual].icono}</div>

        <h2>{slides[actual].titulo}</h2>

        <p>{slides[actual].texto}</p>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === actual ? "dot active" : "dot"}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoCarousel;

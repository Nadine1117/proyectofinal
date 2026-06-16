import { useEffect, useState } from "react";
import libros from "../assets/libros.jpg";
import estudiantes from "../assets/estudiantes.jpg";
import biblioteca from "../assets/biblioteca.jpg";
import mundo from "../assets/mundo.jpg";
function InfoCarousel() {
  const slides = [
    {
      imagen: libros,
      titulo: "Más de 200 libros educativos",
      texto: "Accedé a materiales de filosofía, historia, programación y más.",
    },
    {
      imagen: estudiantes,
      titulo: "Cursos para todos",
      texto: "Aprendé nuevas habilidades desde cualquier lugar.",
    },
    {
      imagen: biblioteca,
      titulo: "Recursos digitales",
      texto: "Contenido actualizado para estudiantes y docentes.",
    },
    {
      imagen: mundo,
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
        <img
          src={slides[actual].imagen}
          alt={slides[actual].titulo}
          className="carousel-image"
        />

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

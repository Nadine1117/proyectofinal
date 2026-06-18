import { useState } from "react";
import "./Cursos.css";

const cursos = [
  {
    id: 1,
    titulo: "Introducción a React",
    categoria: "Programación",
    imagen: "https://picsum.photos/300/200?1",
    descripcion:
      "Aprendé los fundamentos de React, componentes, props, estados y eventos.",
  },
  {
    id: 2,
    titulo: "Diseño UX/UI",
    categoria: "Diseño",
    imagen: "https://picsum.photos/300/200?2",
    descripcion:
      "Principios de experiencia de usuario y diseño de interfaces modernas.",
  },
  {
    id: 3,
    titulo: "Marketing Digital",
    categoria: "Marketing",
    imagen: "https://picsum.photos/300/200?3",
    descripcion:
      "Redes sociales, publicidad online y estrategias de crecimiento.",
  },
  {
    id: 4,
    titulo: "Excel Avanzado",
    categoria: "Ofimática",
    imagen: "https://picsum.photos/300/200?4",
    descripcion: "Tablas dinámicas, funciones avanzadas y análisis de datos.",
  },
];

function Cursos() {
  const [busqueda, setBusqueda] = useState("");
  const [info, setInfo] = useState(null);

  const cursosFiltrados = cursos.filter((curso) =>
    curso.titulo.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div className="cursos-container">
      <h1>🎓 Cursos Disponibles</h1>

      <input
        type="text"
        placeholder="Buscar cursos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="buscador"
      />

      <div className="grid-cursos">
        {cursosFiltrados.map((curso) => (
          <div key={curso.id} className="curso-card">
            <img src={curso.imagen} alt={curso.titulo} />

            <h3>{curso.titulo}</h3>

            <p>{curso.categoria}</p>

            <button onClick={() => setInfo(curso)} className="ver-mas-btn">
              Ver más
            </button>
          </div>
        ))}
      </div>

      {info && (
        <div className="modal-overlay">
          <div className="modal">
            <img src={info.imagen} alt={info.titulo} />

            <h2>{info.titulo}</h2>

            <p>{info.descripcion}</p>

            <button onClick={() => setInfo(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cursos;

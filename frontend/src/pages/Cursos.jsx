import { useState } from "react";
import "./Cursos.css";
import Navbar from "../components/Navbar";

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

  {
    id: 5,
    titulo: "Matemática Básica",
    descripcion: "Aprendé operaciones, fracciones y porcentajes.",
    imagen:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600",
  },
  {
    id: 6,
    titulo: "Programación en JavaScript",
    descripcion: "Desde cero hasta crear aplicaciones web.",
    imagen:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
  },
  {
    id: 7,
    titulo: "Inglés para Principiantes",
    descripcion: "Gramática y conversación básica.",
    imagen:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600",
  },
  {
    id: 8,
    titulo: "Historia Universal",
    descripcion: "Los acontecimientos más importantes del mundo.",
    imagen:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
  },
  {
    id: 9,
    titulo: "Biología General",
    descripcion: "Introducción a los seres vivos y ecosistemas.",
    imagen:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600",
  },
  {
    id: 10,
    titulo: "Química Básica",
    descripcion: "Elementos, compuestos y reacciones químicas.",
    imagen:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600",
  },
  {
    id: 11,
    titulo: "Física Aplicada",
    descripcion: "Movimiento, energía y leyes físicas.",
    imagen:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600",
  },
  {
    id: 12,
    titulo: "Diseño Gráfico",
    descripcion: "Principios de diseño y herramientas digitales.",
    imagen:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
  },
  {
    id: 13,
    titulo: "Marketing Digital",
    descripcion: "Redes sociales y estrategias online.",
    imagen:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
  },
  {
    id: 14,
    titulo: "Excel Avanzado",
    descripcion: "Funciones, tablas dinámicas y reportes.",
    imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
  },
  {
    id: 15,
    titulo: "Técnicas de Estudio",
    descripcion: "Mejorá tu rendimiento académico.",
    imagen:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
  },
  {
    id: 16,
    titulo: "Lectura Comprensiva",
    descripcion: "Desarrollá habilidades de análisis de textos.",
    imagen:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600",
  },
  {
    id: 17,
    titulo: "Redacción Académica",
    descripcion: "Aprendé a escribir trabajos y ensayos.",
    imagen:
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600",
  },
  {
    id: 18,
    titulo: "Preparación para Exámenes",
    descripcion: "Métodos para estudiar de forma eficiente.",
    imagen:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
  },
  {
    id: 19,
    titulo: "Introducción a la Inteligencia Artificial",
    descripcion: "Conceptos básicos de IA y aprendizaje automático.",
    imagen:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
  },
  {
    id: 20,
    titulo: "Literatura Universal",
    descripcion: "Explorá las obras más importantes de la historia.",
    imagen:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
  },
  {
    id: 21,
    titulo: "Geografía Mundial",
    descripcion: "Conocé países, continentes y culturas.",
    imagen:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600",
  },
  {
    id: 22,
    titulo: "Economía Básica",
    descripcion: "Introducción a los conceptos económicos.",
    imagen: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600",
  },
  {
    id: 23,
    titulo: "Contabilidad",
    descripcion: "Aprendé los fundamentos contables.",
    imagen: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600",
  },
  {
    id: 24,
    titulo: "Estadística",
    descripcion: "Interpretación y análisis de datos.",
    imagen:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
  },
  {
    id: 25,
    titulo: "Oratoria",
    descripcion: "Mejorá tu comunicación en público.",
    imagen:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
  },
  {
    id: 26,
    titulo: "Psicología General",
    descripcion: "Introducción al comportamiento humano.",
    imagen:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600",
  },
  {
    id: 27,
    titulo: "Filosofía",
    descripcion: "Conocé las corrientes filosóficas más importantes.",
    imagen:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600",
  },
  {
    id: 28,
    titulo: "Métodos de Investigación",
    descripcion: "Aprendé a desarrollar proyectos académicos.",
    imagen:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
  },
  {
    id: 29,
    titulo: "Educación Financiera",
    descripcion: "Administrá mejor tu dinero.",
    imagen:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600",
  },
  {
    id: 30,
    titulo: "Derecho Básico",
    descripcion: "Conceptos fundamentales del ámbito jurídico.",
    imagen:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600",
  },
  {
    id: 31,
    titulo: "Introducción a la Medicina",
    descripcion: "Conocimientos básicos de ciencias de la salud.",
    imagen:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
  },
  {
    id: 32,
    titulo: "Astronomía",
    descripcion: "Descubrí el universo y los cuerpos celestes.",
    imagen:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
  },
  {
    id: 33,
    titulo: "Ciencias Ambientales",
    descripcion: "Estudio del medio ambiente y sostenibilidad.",
    imagen:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
  },
  {
    id: 34,
    titulo: "Robótica",
    descripcion: "Fundamentos de automatización y robots.",
    imagen:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
  },
  {
    id: 35,
    titulo: "Base de Datos",
    descripcion: "Aprendé a almacenar y gestionar información.",
    imagen: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
  },
  {
    id: 36,
    titulo: "Ciberseguridad",
    descripcion: "Protección de sistemas y datos digitales.",
    imagen: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
  },
  {
    id: 37,
    titulo: "Algoritmos",
    descripcion: "Resolución eficiente de problemas computacionales.",
    imagen:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
  },
  {
    id: 38,
    titulo: "Desarrollo Web",
    descripcion: "Creación de sitios web modernos.",
    imagen:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
  },
  {
    id: 39,
    titulo: "Inteligencia Artificial Avanzada",
    descripcion: "Modelos, aprendizaje automático y aplicaciones.",
    imagen:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
  },
];

function Cursos() {
  const [busqueda, setBusqueda] = useState("");
  const [info, setInfo] = useState(null);

  const cursosFiltrados = cursos.filter((curso) =>
    curso.titulo.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <>
      <Navbar />
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
    </>
  );
}

export default Cursos;

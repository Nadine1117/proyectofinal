import { useState, useEffect } from "react";

function CoursesSection() {
  const courses = [
    {
      title: "Programación Web",
      description: "HTML, CSS, JavaScript y React",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    },
    {
      title: "Marketing Digital",
      description: "Redes sociales y publicidad online",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    },
    {
      title: "Educación Financiera",
      description: "Administrá mejor tus recursos",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600",
    },
    {
      title: "Diseño UX/UI",
      description: "Experiencia e interfaz de usuario",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600",
    },
    {
      title: "Inteligencia Artificial",
      description: "Herramientas modernas de IA",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    },
    {
      title: "Python desde Cero",
      description: "Aprendé programación paso a paso",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
    },
    {
      title: "Análisis de Datos",
      description: "Transformá datos en información",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    },
    {
      title: "Ciberseguridad",
      description: "Protegé sistemas y redes",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
    },
    {
      title: "Excel Avanzado",
      description: "Domina hojas de cálculo",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    },
    {
      title: "Inglés para Negocios",
      description: "Comunicación profesional",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
    },
    {
      title: "Gestión de Proyectos",
      description: "Organización y liderazgo",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
    },
    {
      title: "Emprendimiento",
      description: "Creá y potenciá tu negocio",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 6) % courses.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleCourses = Array.from(
    { length: 6 },
    (_, i) => courses[(startIndex + i) % courses.length],
  );

  return (
    <section
      id="cursos"
      style={{
        padding: "60px 30px",
        backgroundColor: "#F5F8FC",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#0B4F8A",
          fontSize: "34px",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        🎓 Cursos disponibles
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#5B6B7A",
          marginBottom: "35px",
        }}
      >
        Elegí tu próximo curso y seguí aprendiendo.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px",
        }}
      >
        {visibleCourses.map((course, i) => (
          <div
            key={i}
            style={{
              background: "#FFFFFF",
              borderRadius: "18px",
              overflow: "hidden",
              border: "12px solid #0B4F8A",
              boxShadow: "0 12px 30px rgba(11,79,138,0.25)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={course.image}
              alt={course.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "14px" }}>
              <h3
                style={{
                  color: "#0B4F8A",
                  fontSize: "16px",
                  marginBottom: "8px",
                }}
              >
                {course.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  fontSize: "13px",
                  marginBottom: "12px",
                }}
              >
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;

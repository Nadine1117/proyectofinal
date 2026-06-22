import { useEffect, useState } from "react";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return count;
}

function StatsSection() {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500",
      number: 2000000,
      suffix: "+",
      text: "Libros disponibles",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
      number: 1200,
      suffix: "+",
      text: "Cursos publicados",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
      number: 50000,
      suffix: "+",
      text: "Estudiantes",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500",
      number: 98,
      suffix: "%",
      text: "Satisfacción",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 30px",
        background: "#f8fafc",
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
        Transformando el aprendizaje digital 💻
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#5B6B7A",
          marginBottom: "35px",
        }}
      >
        Miles de personas ya estan estudiando con Nosotros.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {cards.map((card, index) => (
          <StatCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ image, number, suffix, text }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#fff",
        border: "12px solid #0B4F8A",
        borderRadius: "24px",
        padding: "30px",
        textAlign: "center",
        boxShadow: hover
          ? "0 20px 40px rgba(0,0,0,0.15)"
          : "0 10px 25px rgba(0,0,0,0.08)",
        transform: hover
          ? "translateY(-12px) scale(1.03)"
          : "translateY(0) scale(1)",
        transition: "all .35s ease",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt={text}
        style={{
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "5px solid #0B4F8A",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          fontSize: "42px",
          fontWeight: "800",
          color: "#0B4F8A",
        }}
      >
        <Counter end={number} />
        {suffix}
      </div>

      <div
        style={{
          marginTop: "10px",
          fontSize: "18px",
          color: "#444",
          fontWeight: "500",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default StatsSection;

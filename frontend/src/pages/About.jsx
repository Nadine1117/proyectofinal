import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7FAFC" }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .flip-card {
          perspective: 1000px;
          height: 200px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
          text-align: center;
        }
        .flip-card-front {
          background-color: #163D6B;
          color: white;
        }
        .flip-card-back {
          background-color: #6ec1a5;
          color: white;
          transform: rotateY(180deg);
        }
      `}</style>

      <Navbar />
      <div
        style={{
          maxWidth: "800px",
          margin: "50px auto",
          padding: "0 20px 60px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            animation: "fadeInUp 0.8s ease-out",
          }}
        >
          <h1 style={{ color: "#163D6B", marginBottom: "20px" }}>
            Sobre Nosotros
          </h1>

          <p
            style={{
              color: "#2E3A4D",
              lineHeight: "1.6",
              marginBottom: "12px",
            }}
          >
            Somos Nadine y Paulina, dos jóvenes que conocemos de primera mano
            los desafíos que muchas personas enfrentan para acceder y completar
            su educación.
          </p>
          <p
            style={{
              color: "#2E3A4D",
              lineHeight: "1.6",
              marginBottom: "12px",
            }}
          >
            Luego de vivir nuestra experiencia en Ánima Finest y tener la
            oportunidad de finalizar el bachillerato mediante una modalidad
            online orientada a la tecnología, comprendimos el impacto que puede
            tener una educación flexible, accesible y adaptada a las necesidades
            de cada persona.
          </p>
          <p
            style={{
              color: "#2E3A4D",
              lineHeight: "1.6",
              marginBottom: "12px",
            }}
          >
            Sabemos que no todos cuentan con las mismas oportunidades. Muchas
            veces, factores económicos, laborales o personales dificultan
            continuar estudiando y acceder a recursos educativos de calidad. Por
            eso decidimos crear EducaMarket, una plataforma pensada para acercar
            el conocimiento a más personas y ayudar a reducir la brecha
            educativa.
          </p>
          <p
            style={{
              color: "#2E3A4D",
              lineHeight: "1.6",
              marginBottom: "12px",
            }}
          >
            Nuestra misión es que el acceso a cursos, libros y herramientas de
            aprendizaje no sea un privilegio, sino una oportunidad al alcance de
            todos. Creemos que la educación es una de las herramientas más
            poderosas para transformar vidas, generar nuevas oportunidades y
            construir una sociedad más justa e inclusiva.
          </p>
          <p style={{ color: "#2E3A4D", lineHeight: "1.6" }}>
            Hoy trabajamos para que cada persona, sin importar su contexto,
            pueda aprender, crecer y alcanzar sus metas.
          </p>

          <h2
            style={{
              color: "#163D6B",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            Conocé al equipo
          </h2>
          <p style={{ color: "#888", fontSize: "13px", marginBottom: "16px" }}>
            Pasá el mouse por arriba 👇
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              marginBottom: "12px",
            }}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div style={{ fontSize: "40px", marginBottom: "8px" }}>
                    👩‍💻
                  </div>
                  <h3 style={{ margin: 0 }}>Nadine</h3>
                  <p style={{ fontSize: "13px", opacity: 0.8 }}>Cofundadora</p>
                </div>
                <div className="flip-card-back">
                  <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    "Si la educación me cambió la vida a mí, quiero que pueda
                    cambiársela a otros también."
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div style={{ fontSize: "40px", marginBottom: "8px" }}>
                    👩‍🎓
                  </div>
                  <h3 style={{ margin: 0 }}>Paulina</h3>
                  <p style={{ fontSize: "13px", opacity: 0.8 }}>Cofundadora</p>
                </div>
                <div className="flip-card-back">
                  <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    "Aprender no debería depender de cuánto podés pagar, sino de
                    cuánto querés crecer."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

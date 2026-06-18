import { useState } from "react";
import Navbar from "../components/Navbar";

const preguntas = [
  {
    q: "¿Qué es Educamarket?",
    a: "Educamarket es una plataforma que reúne libros, cursos y recursos educativos para ayudar a estudiantes y personas interesadas en seguir aprendiendo.",
  },
  {
    q: "¿Cómo accedo al contenido?",
    a: "Debés crear una cuenta y completar el proceso de registro. Una vez verificado tu correo electrónico, podrás acceder al contenido disponible según tu membresía.",
  },
  {
    q: "¿Quiénes obtienen la membresía gratuita?",
    a: "Los usuarios que se registren con correos pertenecientes a instituciones públicas reconocidas por Educamarket.",
  },
  {
    q: "¿Debo pasar por el carrito aunque mi membresía sea gratuita?",
    a: "Sí. Todos los usuarios deben completar el proceso a través del carrito. Si tu correo pertenece a una institución pública reconocida, el valor de la membresía será de USD 0,00.",
  },
  {
    q: "¿Cuánto cuesta la membresía estándar?",
    a: "La membresía estándar tiene un costo de USD 99,99 y permite acceder al contenido disponible en la plataforma.",
  },
  {
    q: "¿Puedo utilizar un correo personal?",
    a: "Sí. Los correos personales y los pertenecientes a instituciones privadas pueden registrarse abonando la membresía estándar.",
  },
  {
    q: "¿Qué tipo de contenido encontraré?",
    a: "Libros digitales, cursos, materiales educativos y recursos orientados al aprendizaje y desarrollo personal o profesional.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por tu consulta. Nuestro equipo responderá a la brevedad.");
    setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    border: "1px solid #d0d7de",
    borderRadius: "8px",
    fontSize: "14px",
  };

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7FAFC" }}>
      <Navbar />

      <div
        style={{
          maxWidth: "800px",
          margin: "50px auto",
          padding: "0 20px 60px",
        }}
      >
        <h1
          style={{
            color: "#163D6B",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Preguntas Frecuentes
        </h1>
        <p
          style={{
            color: "#667085",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Todo lo que necesitás saber sobre Educamarket
        </p>

        <div style={{ marginBottom: "40px" }}>
          {preguntas.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                marginBottom: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                overflow: "hidden",
                border:
                  openIndex === i
                    ? "1px solid #27BFD2"
                    : "1px solid transparent",
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: "18px 20px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#163D6B",
                }}
              >
                {item.q}
                <span style={{ color: "#27BFD2", fontSize: "20px" }}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <p
                  style={{
                    padding: "0 20px 18px",
                    color: "#667085",
                    lineHeight: "1.6",
                  }}
                >
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#163D6B", marginBottom: "12px" }}>
            ¿Tenés alguna duda?
          </h2>
          <p
            style={{ color: "#667085", lineHeight: "1.6", marginBottom: "8px" }}
          >
            Si no encontraste la respuesta que buscabas, podés comunicarte con
            nosotros.
          </p>
          <p style={{ color: "#667085", marginBottom: "24px" }}>
            📧{" "}
            <a
              href="mailto:contacto@educamarket.com"
              style={{ color: "#27BFD2" }}
            >
              contacto@educamarket.com
            </a>
          </p>

          <p style={{ color: "#667085", marginBottom: "16px" }}>
            O completá el siguiente formulario:
          </p>
          <form onSubmit={handleSubmit}>
            <input
              style={inputStyle}
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              required
            />
            <input
              style={inputStyle}
              type="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              style={inputStyle}
              placeholder="Asunto"
              value={form.asunto}
              onChange={(e) => setForm({ ...form, asunto: e.target.value })}
              required
            />
            <textarea
              style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
              placeholder="Mensaje"
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              required
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#58C786",
                color: "white",
                border: "none",
                padding: "14px 28px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Enviar consulta
            </button>
          </form>
          <p style={{ color: "#667085", fontSize: "13px", marginTop: "12px" }}>
            Nuestro equipo responderá tu consulta a la brevedad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq;

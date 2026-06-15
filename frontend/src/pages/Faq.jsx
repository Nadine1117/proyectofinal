import { useState } from "react";

function Faq() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por tu consulta. Nuestro equipo responderá a la brevedad.");
    setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5efe6" }}>
      <div style={{ backgroundColor: "#1f3c5a", color: "white", padding: "18px 40px" }}>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#6ec1a5" }}>📚 Educamarket</span>
      </div>
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px 60px" }}>
        <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "40px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <h1 style={{ color: "#1f3c5a", marginBottom: "20px" }}>Preguntas Frecuentes</h1>

          <h2 style={{ color: "#1f3c5a", marginTop: "20px", marginBottom: "6px" }}>¿Qué es Educamarket?</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Educamarket es una plataforma que reúne libros, cursos y recursos educativos para ayudar a estudiantes y personas interesadas en seguir aprendiendo.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "20px", marginBottom: "6px" }}>¿Cómo accedo al contenido?</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Debés crear una cuenta y completar el proceso de registro. Una vez verificado tu correo electrónico, podrás acceder al contenido disponible según tu membresía.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "20px", marginBottom: "6px" }}>¿Quiénes obtienen la membresía gratuita?</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Los usuarios que se registren con correos pertenecientes a instituciones públicas reconocidas por Educamarket.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "20px", marginBottom: "6px" }}>¿Debo pasar por el carrito aunque mi membresía sea gratuita?</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Sí. Todos los usuarios deben completar el proceso a través del carrito. Si tu correo pertenece a una institución pública reconocida, el valor de la membresía será de USD 0,00.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "20px", marginBottom: "6px" }}>¿Cuánto cuesta la membresía estándar?</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            La membresía estándar tiene un costo de USD 99,99 y permite acceder al contenido disponible en la plataforma.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "20px", marginBottom: "6px" }}>¿Puedo utilizar un correo personal?</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Sí. Los correos personales y los pertenecientes a instituciones privadas pueden registrarse abonando la membresía estándar.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "20px", marginBottom: "6px" }}>¿Qué tipo de contenido encontraré?</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Libros digitales, cursos, materiales educativos y recursos orientados al aprendizaje y desarrollo personal o profesional.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "30px", marginBottom: "6px" }}>¿Tenés alguna duda?</h2>
          <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "8px" }}>
            Si no encontraste la respuesta que buscabas, podés comunicarte con nosotros.
          </p>
          <p style={{ color: "#555", marginBottom: "20px" }}>
            📧 <a href="mailto:contacto@educamarket.com" style={{ color: "#6ec1a5" }}>contacto@educamarket.com</a>
          </p>

          <p style={{ color: "#555", marginBottom: "16px" }}>O completá el siguiente formulario:</p>
          <form onSubmit={handleSubmit}>
            <input style={inputStyle} placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
            <input style={inputStyle} type="email" placeholder="Correo electrónico" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <input style={inputStyle} placeholder="Asunto" value={form.asunto} onChange={(e) => setForm({ ...form, asunto: e.target.value })} required />
            <textarea style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }} placeholder="Mensaje" value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} required />
            <button type="submit" style={{ backgroundColor: "#6ec1a5", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>
              Enviar consulta
            </button>
          </form>
          <p style={{ color: "#888", fontSize: "14px", marginTop: "12px" }}>
            Nuestro equipo responderá tu consulta a la brevedad.
          </p>

          <button
            onClick={() => (window.location.href = "/")}
            style={{ marginTop: "20px", backgroundColor: "#1f3c5a", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Terms() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F7FAFC" }}>
      <Navbar />
      <div style={{ maxWidth: "800px", margin: "50px auto", padding: "0 20px 60px" }}>
        <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "40px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <h1 style={{ color: "#163D6B", marginBottom: "8px" }}>Bases y Condiciones</h1>
          <p style={{ color: "#667085", marginBottom: "30px" }}>Educamarket</p>

          <p style={{ color: "#2E3A4D", lineHeight: "1.7", marginBottom: "24px", padding: "16px", backgroundColor: "#F7FAFC", borderRadius: "8px", borderLeft: "4px solid #27BFD2" }}>
            Al registrarse en Educamarket, todos los usuarios deberán completar el proceso de compra mediante el carrito de la plataforma.
          </p>

          <h2 style={{ color: "#163D6B", marginTop: "28px", marginBottom: "10px" }}>🎓 Membresía Gratuita</h2>
          <p style={{ color: "#2E3A4D", lineHeight: "1.7" }}>
            Los usuarios que se registren con un correo electrónico perteneciente a instituciones públicas reconocidas tendrán acceso gratuito a la membresía. Actualmente se consideran válidos los siguientes dominios:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "12px 0" }}>
            {["@udelar.com.uy", "@utu.com.uy", "@secundaria.com.uy", "@test.com"].map((d) => (
              <span key={d} style={{ backgroundColor: "#7AD8A4", color: "#163D6B", padding: "5px 12px", borderRadius: "16px", fontSize: "13px", fontWeight: "bold" }}>{d}</span>
            ))}
          </div>
          <p style={{ color: "#2E3A4D", lineHeight: "1.7" }}>
            Para estos usuarios, el carrito mostrará una membresía con valor de <strong>USD 0,00</strong>.
          </p>

          <h2 style={{ color: "#163D6B", marginTop: "28px", marginBottom: "10px" }}>💳 Membresía Estándar</h2>
          <p style={{ color: "#2E3A4D", lineHeight: "1.7" }}>
            Los usuarios que se registren con correos pertenecientes a instituciones privadas o servicios de correo generales deberán abonar una membresía de <strong>USD 99,99</strong>. Entre ellos:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "12px 0" }}>
            {["@gmail.com", "@hotmail.com", "@ort.com.uy", "@ude.com.uy", "@ucu.com.uy", "@um.com.uy"].map((d) => (
              <span key={d} style={{ backgroundColor: "#1D4C87", color: "white", padding: "5px 12px", borderRadius: "16px", fontSize: "13px", fontWeight: "bold" }}>{d}</span>
            ))}
          </div>

          <h2 style={{ color: "#163D6B", marginTop: "28px", marginBottom: "10px" }}>Otros Correos Electrónicos</h2>
          <p style={{ color: "#2E3A4D", lineHeight: "1.7" }}>
            Cualquier correo electrónico que no pertenezca a una institución pública reconocida por Educamarket será considerado automáticamente dentro de la categoría de membresía estándar y deberá abonar USD 99,99.
          </p>

          <p style={{ color: "#667085", lineHeight: "1.7", marginTop: "24px", fontSize: "14px", fontStyle: "italic" }}>
            Educamarket se reserva el derecho de modificar, agregar o eliminar dominios educativos reconocidos, así como verificar la validez de los correos registrados para evitar usos indebidos del beneficio de membresía gratuita.
          </p>

          <button
            onClick={() => (window.location.href = "/")}
            style={{ marginTop: "30px", backgroundColor: "#58C786", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;

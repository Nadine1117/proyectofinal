function Terms() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5efe6" }}>
      <div style={{ backgroundColor: "#1f3c5a", color: "white", padding: "18px 40px" }}>
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#6ec1a5" }}>📚 Educamarket</span>
      </div>
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px 60px" }}>
        <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "40px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <h1 style={{ color: "#1f3c5a", marginBottom: "20px" }}>Bases y Condiciones de Educamarket</h1>

          <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "20px" }}>
            Al registrarse en Educamarket, todos los usuarios deberán completar el proceso de compra mediante el carrito de la plataforma.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "24px", marginBottom: "8px" }}>Membresía Gratuita</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Los usuarios que se registren con un correo electrónico perteneciente a instituciones públicas reconocidas tendrán acceso gratuito a la membresía. Actualmente se consideran válidos los siguientes dominios:
          </p>
          <ul style={{ color: "#555", lineHeight: "1.8", paddingLeft: "24px" }}>
            <li>@udelar.com.uy</li>
            <li>@utu.com.uy</li>
            <li>@secundaria.com.uy</li>
            <li>@test.com</li>
          </ul>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Para estos usuarios, el carrito mostrará una membresía con valor de USD 0,00.
          </p>

          <h2 style={{ color: "#1f3c5a", marginTop: "24px", marginBottom: "8px" }}>Membresía Estándar</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Los usuarios que se registren con correos pertenecientes a instituciones privadas o servicios de correo generales deberán abonar una membresía de USD 99,99. Entre ellos:
          </p>
          <ul style={{ color: "#555", lineHeight: "1.8", paddingLeft: "24px" }}>
            <li>@gmail.com</li>
            <li>@hotmail.com</li>
            <li>@ort.com.uy</li>
            <li>@ude.com.uy</li>
            <li>@ucu.com.uy</li>
            <li>@um.com.uy</li>
          </ul>

          <h2 style={{ color: "#1f3c5a", marginTop: "24px", marginBottom: "8px" }}>Otros Correos Electrónicos</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Cualquier correo electrónico que no pertenezca a una institución pública reconocida por Educamarket será considerado automáticamente dentro de la categoría de membresía estándar y deberá abonar USD 99,99.
          </p>

          <p style={{ color: "#555", lineHeight: "1.6", marginTop: "20px" }}>
            Educamarket se reserva el derecho de modificar, agregar o eliminar dominios educativos reconocidos, así como verificar la validez de los correos registrados para evitar usos indebidos del beneficio de membresía gratuita.
          </p>

          <button
            onClick={() => (window.location.href = "/")}
            style={{ marginTop: "30px", backgroundColor: "#6ec1a5", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}

export default Terms;

function Navbar() {
  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => (window.location.href = "/")}
        style={{ cursor: "pointer" }}
      >
        📚 Educamarket
      </div>
      <ul className="menu">
        <li
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        >
          Inicio
        </li>
        <li
          onClick={() => (window.location.href = "/explorar")}
          style={{ cursor: "pointer" }}
        >
          Explorar
        </li>
        <li
          onClick={() => (window.location.href = "/precios")}
          style={{ cursor: "pointer" }}
        >
          Precios
        </li>
        <li
          onClick={() => (window.location.href = "/sobre-nosotros")}
          style={{ cursor: "pointer" }}
        >
          Sobre Nosotros
        </li>
        <li
          onClick={() => (window.location.href = "/preguntas-frecuentes")}
          style={{ cursor: "pointer" }}
        >
          Preguntas Frecuentes
        </li>
      </ul>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          className="login-btn"
          onClick={() => (window.location.href = "/register")}
        >
          Registrarse
        </button>
        <button
          className="login-btn"
          onClick={() => (window.location.href = "/login")}
        >
          Iniciar sesión
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

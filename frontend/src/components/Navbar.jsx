function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📚 Educamarket</div>
      <ul className="menu">
        <li>Inicio</li>
        <li>Libros</li>
        <li>Cursos</li>
        <li>Materiales</li>
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

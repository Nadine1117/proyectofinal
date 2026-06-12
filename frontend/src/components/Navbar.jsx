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

      <button
        className="login-btn"
        onClick={() => (window.location.href = "/login")}
      >
        Iniciar sesión
      </button>
    </nav>
  );
}

export default Navbar;

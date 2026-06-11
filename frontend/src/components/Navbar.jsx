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

      <button className="login-btn">Iniciar sesión</button>
    </nav>
  );
}

export default Navbar;

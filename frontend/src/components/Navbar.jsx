const bookCursor =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Ctext y='20' font-size='20'%3E%F0%9F%93%96%3C/text%3E%3C/svg%3E\") 12 12, pointer";

function Navbar() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => (window.location.href = "/")}
        style={{ cursor: bookCursor }}
      >
        📚 Educamarket
      </div>
      <ul className="menu">
        <li
          onClick={() => (window.location.href = "/")}
          style={{ cursor: bookCursor }}
        >
          Inicio
        </li>
        <li
          onClick={() => (window.location.href = "/explorar")}
          style={{ cursor: bookCursor }}
        >
          Explorar
        </li>
        <li
          onClick={() => (window.location.href = "/precios")}
          style={{ cursor: bookCursor }}
        >
          Precios
        </li>
        <li
          onClick={() => (window.location.href = "/sobre-nosotros")}
          style={{ cursor: bookCursor }}
        >
          Sobre Nosotros
        </li>
        <li
          onClick={() => (window.location.href = "/preguntas-frecuentes")}
          style={{ cursor: bookCursor }}
        >
          Preguntas Frecuentes
        </li>
      </ul>
      <div style={{ display: "flex", gap: "10px" }}>
        {token ? (
          <>
            <button
              className="login-btn"
              onClick={() => (window.location.href = "/libros")}
              style={{ cursor: bookCursor }}
            >
              Mi cuenta
            </button>
            <button
              className="login-btn"
              onClick={logout}
              style={{ cursor: bookCursor }}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <button
              className="login-btn"
              onClick={() => (window.location.href = "/register")}
              style={{ cursor: bookCursor }}
            >
              Registrarse
            </button>
            <button
              className="login-btn"
              onClick={() => (window.location.href = "/login")}
              style={{ cursor: bookCursor }}
            >
              Iniciar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

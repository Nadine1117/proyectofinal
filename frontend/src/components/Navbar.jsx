import logo from "../assets/logo-educamarket.png";
import cursorImg from "../assets/cursor.png";

const bookCursor = `url(${cursorImg}) 0 0, pointer`;

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
        style={{ cursor: bookCursor, display: "flex", alignItems: "center" }}
      >
        <img src={logo} alt="Educamarket" style={{ height: "55px" }} />
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

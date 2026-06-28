import logo from "../assets/logo-educamarket.png";
import cursorImg from "../assets/cursor.png";

const bookCursor = `url(${cursorImg}) 0 0, pointer`;

function Navbar() {
  const token = localStorage.getItem("token");
  const payload = token ? JSON.parse(atob(token.split(".")[1])) : null;
  const isAdmin = payload?.rol === "admin";

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
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
            {isAdmin && (
              <button
                className="login-btn"
                onClick={() => (window.location.href = "/admin/productos")}
                style={{ cursor: bookCursor, backgroundColor: "#163D6B" }}
              >
                Panel Admin
              </button>
            )}
            <button
              className="login-btn"
              onClick={() => (window.location.href = "/libros")}
              style={{ cursor: bookCursor }}
            >
              Mi cuenta
            </button>
            <button
              className="login-btn"
              onClick={cerrarSesion}
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

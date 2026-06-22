import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Pago from "./pages/Pago";
import Terms from "./pages/Terms";
import Explore from "./pages/Explore";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Libros from "./pages/Libros";
import "./App.css";
import Cursos from "./pages/Cursos";

function App() {
  const token = localStorage.getItem("token");
  const payload = token ? JSON.parse(atob(token.split(".")[1])) : null;
  const isAdmin = payload?.rol === "admin";

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={token ? <Navigate to="/libros" /> : <Login />}
          />
          <Route
            path="/register"
            element={token ? <Navigate to="/libros" /> : <Register />}
          />
          <Route
            path="/admin/login"
            element={token ? <Navigate to="/libros" /> : <AdminLogin />}
          />
          <Route
            path="/libros"
            element={token ? <Libros /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin/productos"
            element={isAdmin ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/carrito"
            element={token ? <Cart /> : <Navigate to="/login" />}
          />
          <Route
            path="/pago"
            element={token ? <Pago /> : <Navigate to="/login" />}
          />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/explorar" element={<Explore />} />
          <Route path="/precios" element={<Pricing />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

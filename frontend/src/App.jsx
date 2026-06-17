import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Terms from "./pages/Terms";
import Explore from "./pages/Explore";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Faq from "./pages/Faq";
import "./app.css";
import Libros from "./pages/Libros";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/libros"
          element={token ? <Libros /> : <Navigate to="/login" />}
        />
        <Route
          path="/carrito"
          element={token ? <Cart /> : <Navigate to="/login" />}
        />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/precios" element={<Pricing />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/preguntas-frecuentes" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

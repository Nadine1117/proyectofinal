function Dashboard() {
  const token = localStorage.getItem("token");

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    alert("Sesión cerrada");
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Bienvenido a ProyectoFinal</p>

      <p>Estado: {token ? "Usuario autenticado" : "No autenticado"}</p>

      <button onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
  );
}

export default Dashboard;

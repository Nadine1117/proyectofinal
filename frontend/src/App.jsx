import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <Home />

      {!token && <Login />}

      {token && <Dashboard />}
    </>
  );
}

export default App;

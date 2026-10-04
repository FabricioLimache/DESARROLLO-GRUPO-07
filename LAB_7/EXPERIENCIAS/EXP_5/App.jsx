import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Inicio from "./pages/Inicio";
import Tareas from "./pages/Tareas";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>{" "}
        <Link to="/tareas">Tareas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tareas" element={<Tareas />} />

        <Route
          path="*"
          element={<p>Página no encontrada</p>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
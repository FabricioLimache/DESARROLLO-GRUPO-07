codigo
import Encabezado from "./components/Encabezado";
import TareasApp from "./TareasApp";

function App() {
  return (
    <div className="app">
      <Encabezado usuario="Fabricio" />

      <main>
        <TareasApp />
      </main>
    </div>
  );
}

export default App;

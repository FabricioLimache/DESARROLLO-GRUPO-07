//parte 1
import './App.css';

function App() {
  return (
    <div className="contenedor">
      <h1>Plataforma de Gestión de Tecnologías</h1>
      <h2>Equipo: Desarrollo UCSM</h2>
      <p>Aplicación web construida para el aprendizaje de componentes y estado en React.</p>
    </div>
  );
}

export default App;

//parte 2 final
import './App.css';

function App() {
  // Declaración de variables dinámicas evaluadas por el compilador JSX
  const nombreApp = "Sistema de Gestión de Recursos Web";
  const equipo = "Grupo 07 - Limache";
  const semestre = "Semestre 2026-I";
  const descripcion = "Proyecto interactivo modular enfocado en fundamentos de React, Vite y flujo unidireccional de datos.";
  const urlBanner = "https://picsum.photos/500/220";

  return (
    <div className="contenedor-principal">
      <header className="cabecera">
        {/* Renderizado de expresiones JavaScript entre llaves */}
        <h1>{nombreApp}</h1>
        <h3>Presentado por: {equipo}</h3>
        <span className="badge-periodo">{semestre}</span>
      </header>

      <section className="detalle-contenido">
        <h4>Descripción del Módulo</h4>
        <p>{descripcion}</p>
        
        {/* En JSX las etiquetas sin cierre deben cerrarse explícitamente */}
        <img 
          src={urlBanner} 
          alt="Banner representativo del laboratorio" 
          className="imagen-destacada" 
        />
      </section>
    </div>
  );
}

export default App;

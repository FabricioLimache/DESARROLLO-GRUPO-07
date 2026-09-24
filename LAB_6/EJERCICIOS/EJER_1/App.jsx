import { useState } from 'react';
import ElementoCard from './components/ElementoCard';
import './App.css';

function App() {
  // Arreglo de 5 elementos con identificador y atributos 
  const [catalogo, setCatalogo] = useState([
    {
      id: 101,
      nombre: "Alice: Madness Returns",
      descripcion: "Aventura de acción y plataformas con ambientación psicológica gótica.",
      categoria: "Acción / Plataformas",
      plataforma: "PC, PS3, Xbox 360",
      precio: 69.90,
      favorito: true,
      mostrarDetalle: false
    },
    {
      id: 102,
      nombre: "Resident Evil 4 Remake",
      descripcion: "Survival horror y combate en tercera persona en una misión de rescate en Europa.",
      categoria: "Survival Horror",
      plataforma: "PC, PS5, Xbox Series X/S",
      precio: 159.00,
      favorito: false,
      mostrarDetalle: false
    },
    {
      id: 103,
      nombre: "Silent Hill 2 Remake",
      descripcion: "Exploración atmosférica y terror psicológico en un pueblo cubierto de niebla.",
      categoria: "Terror Psicológico",
      plataforma: "PC, PS5",
      precio: 179.00,
      favorito: false,
      mostrarDetalle: false
    },
    {
      id: 104,
      nombre: "Escape the Backrooms",
      descripcion: "Juego cooperativo de terror y exploración basado en la popular leyenda urbana.",
      categoria: "Terror Cooperativo",
      plataforma: "PC",
      precio: 29.50,
      favorito: false,
      mostrarDetalle: false
    },
    {
      id: 105,
      nombre: "Hollow Knight",
      descripcion: "Metroidvania en 2D ambientado en un vasto reino subterráneo en ruinas.",
      categoria: "Metroidvania",
      plataforma: "PC, Nintendo Switch, PS4",
      precio: 49.99,
      favorito: true,
      mostrarDetalle: false
    }
  ]);

  // Manejadores de interactividad con useState
  const alternarFavorito = (id) => {
    setCatalogo(catalogo.map(item => 
      item.id === id ? { ...item, favorito: !item.favorito } : item
    ));
  };

  const alternarDetalle = (id) => {
    setCatalogo(catalogo.map(item => 
      item.id === id ? { ...item, mostrarDetalle: !item.mostrarDetalle } : item
    ));
  };

  const eliminarElemento = (id) => {
    setCatalogo(catalogo.filter(item => item.id !== id));
  };

  const totalFavoritos = catalogo.filter(item => item.favorito).length;

  return (
    <div className="catalogo-contenedor">
      <header className="catalogo-header">
        <h1>Catalogo de videojuegos Felix Limache</h1>
        <p>Catalogo de videojuegos Felix Limache</p>
      </header>

      <section className="catalogo-resumen">
        <div className="stat-caja">
          <span>Títulos en catálogo:</span>
          <strong>{catalogo.length}</strong>
        </div>
        <div className="stat-caja">
          <span>Favoritos seleccionados:</span>
          <strong>{totalFavoritos}</strong>
        </div>
      </section>

      <main className="catalogo-grid-area">
        {catalogo.length === 0 ? (
          <div className="mensaje-sin-datos">
            <p>No quedan elementos disponibles en el catálogo.</p>
          </div>
        ) : (
          <div className="catalogo-grid">
            {catalogo.map((item) => (
              <ElementoCard
                key={item.id}
                id={item.id}
                nombre={item.nombre}
                descripcion={item.descripcion}
                categoria={item.categoria}
                plataforma={item.plataforma}
                precio={item.precio}
                favorito={item.favorito}
                mostrarDetalle={item.mostrarDetalle}
                onAlternarFavorito={alternarFavorito}
                onAlternarDetalle={alternarDetalle}
                onEliminar={eliminarElemento}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

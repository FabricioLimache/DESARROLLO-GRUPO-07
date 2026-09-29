import { useState } from 'react'
import TarjetaMesa from './components/TarjetaMesa'
import './App.css'

function App() {
  const [mesas, setMesas] = useState([
    {
      id: 1,
      nombre: 'Mesa 1 - Principal',
      descripcion: 'Mesa para 4 personas cerca a la ventana',
      estado: 'Disponible'
    },
    {
      id: 2,
      nombre: 'Mesa 2 - Terraza',
      descripcion: 'Mesa para 2 personas en la zona exterior',
      estado: 'Reservada'
    },
    {
      id: 3,
      nombre: 'Mesa 3 - VIP',
      descripcion: 'Mesa para 6 personas en área privada',
      estado: 'Disponible'
    },
    {
      id: 4,
      nombre: 'Mesa 4 - Barra',
      descripcion: 'Mesa alta para 2 personas cerca a la barra',
      estado: 'Reservada'
    },
    {
      id: 5,
      nombre: 'Mesa 5 - Jardín',
      descripcion: 'Mesa para 8 personas en zona familiar',
      estado: 'Disponible'
    }
  ])

  function cambiarEstado(id) {
    setMesas(
      mesas.map((mesa) => {
        if (mesa.id === id) {
          return {
            ...mesa,
            estado: mesa.estado === 'Disponible' ? 'Reservada' : 'Disponible'
          }
        }
        return mesa
      })
    )
  }

  function eliminarMesa(id) {
    setMesas(mesas.filter((mesa) => mesa.id !== id))
  }

  return (
    <div className="contenedor-principal">
      <header className="encabezado">
        <h1>Restaurante RAMOS</h1>
        <h2>Panel Interactivo de Reserva de Mesas</h2>
      </header>
      
      <div className="lista-mesas">
        {mesas.map((mesa) => (
          <TarjetaMesa
            key={mesa.id}
            id={mesa.id}
            nombre={mesa.nombre}
            descripcion={mesa.descripcion}
            estado={mesa.estado}
            cambiarEstado={cambiarEstado}
            eliminarMesa={eliminarMesa}
          />
        ))}
      </div>
    </div>
  )
}

export default App
// Componente para mostrar la tarjeta de cada mesa
function TarjetaMesa({ id, nombre, descripcion, estado, cambiarEstado, eliminarMesa }) {
  return (
    <div className="tarjeta-mesa">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>
        <strong>Estado:</strong> {estado}
      </p>
      <div className="acciones">
        {/* Botones para las acciones de cada elemento */}
        <button onClick={() => cambiarEstado(id)}>
          Cambiar estado
        </button>
        <button onClick={() => eliminarMesa(id)}>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default TarjetaMesa

function ElementoCard({
  id,
  nombre,
  descripcion,
  categoria,
  plataforma,
  precio,
  favorito,
  mostrarDetalle,
  onAlternarFavorito,
  onAlternarDetalle,
  onEliminar
}) {
  return (
    <article className={`catalogo-card ${favorito ? 'es-favorito' : ''}`}>
      <div className="card-header-top">
        <span className="categoria-badge">{categoria}</span>
        <button 
          className={`btn-icono-fav ${favorito ? 'activo' : ''}`}
          onClick={() => onAlternarFavorito(id)}
          title="Marcar como favorito"
        >
          {favorito ? '★ Favorito' : '☆ Marcar favorito'}
        </button>
      </div>

      <div className="card-contenido">
        <h3>{nombre}</h3>
        <p className="descripcion-corta">{descripcion}</p>

        {mostrarDetalle && (
          <div className="info-adicional">
            <p><strong>Plataforma:</strong> {plataforma}</p>
            <p><strong>Precio referencial:</strong> S/ {precio.toFixed(2)}</p>
          </div>
        )}
      </div>

      <div className="card-acciones">
        <button 
          className="btn-accion btn-detalle"
          onClick={() => onAlternarDetalle(id)}
        >
          {mostrarDetalle ? 'Ocultar detalles' : 'Ver detalles'}
        </button>

        <button 
          className="btn-accion btn-borrar"
          onClick={() => onEliminar(id)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default ElementoCard;

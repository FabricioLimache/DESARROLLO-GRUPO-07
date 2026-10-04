import { useParams } from "react-router-dom";

function TareaDetalle() {
  const { id } = useParams();

  return (
    <div>
      <h3>Detalle de la tarea</h3>
      <p>Detalle de la tarea con id: {id}</p>
    </div>
  );
}

export default TareaDetalle;
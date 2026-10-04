import TareaItem from "./TareaItem";

function TareaLista({ tareas, onAlternar }) {
  if (tareas.length === 0) {
    return <p>No hay tareas registradas.</p>;
  }

  return (
    <ul>
      {tareas.map((t) => (
        <TareaItem
          key={t.id}
          tarea={t}
          onAlternar={onAlternar}
        />
      ))}
    </ul>
  );
}

export default TareaLista;

import { useState } from "react";
import TareaLista from "./components/TareaLista";

function TareasApp() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      titulo: "Revisar el marco teórico",
      completada: true,
    },
    {
      id: 2,
      titulo: "Resolver la Experiencia 2",
      completada: false,
    },
    {
      id: 3,
      titulo: "Repasar Hooks",
      completada: false,
    },
  ]);

  const alternarTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id
          ? { ...t, completada: !t.completada }
          : t
      )
    );
  };

  return (
    <TareaLista
      tareas={tareas}
      onAlternar={alternarTarea}
    />
  );
}

export default TareasApp;

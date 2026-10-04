import { Outlet } from "react-router-dom";

function TareasLayout() {
  return (
    <div>
      <h2>Mis tareas</h2>
      <Outlet />
    </div>
  );
}

export default TareasLayout;
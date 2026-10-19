import reflex as rx

# 1. Estado con los manejadores para agregar y eliminar tareas
class EstadoTareas(rx.State):
    tareas: list[str] = [
        "Diseñar interfaz",
        "Crear componentes",
        "Probar aplicación",
        "Documentar informe de laboratorio",
    ]

    @rx.event
    def agregar_tarea(self, form_data: dict):
        texto = form_data.get("nueva_tarea", "").strip()
        if texto:
            self.tareas.append(texto)

    @rx.event
    def eliminar_tarea(self, tarea: str):
        if tarea in self.tareas:
            self.tareas.remove(tarea)

# 2. Componente reutilizable tarjeta_tarea con botón Eliminar
def tarjeta_tarea(tarea: str) -> rx.Component:
    return rx.hstack(
        rx.text(tarea, size="3", weight="medium", color="#1f2937"),
        rx.spacer(),
        rx.button(
            "Eliminar",
            color_scheme="red",
            size="1",
            variant="soft",
            on_click=lambda: EstadoTareas.eliminar_tarea(tarea),
        ),
        padding="10px 14px",
        border="1px solid #e5e7eb",
        background_color="#f9fafb",
        border_radius="8px",
        width="100%",
        align="center",
    )

# 3. Formulario para registrar nuevas tareas
def formulario_tarea() -> rx.Component:
    return rx.form(
        rx.hstack(
            rx.input(
                placeholder="Escribe una nueva tarea...",
                name="nueva_tarea",
                width="100%",
            ),
            rx.button("Agregar tarea", type="submit", color_scheme="blue"),
            spacing="3",
            width="100%",
        ),
        on_submit=EstadoTareas.agregar_tarea,
        reset_on_submit=True,
        width="100%",
        max_width="400px",
    )

# 4. Lista de tareas con visualización condicional (rx.cond)
def lista_tareas() -> rx.Component:
    return rx.vstack(
        rx.heading("Lista de Tareas Pendientes", size="5", color="blue"),
        rx.cond(
            EstadoTareas.tareas.length() > 0,
            rx.vstack(
                rx.foreach(
                    EstadoTareas.tareas,
                    lambda tarea: tarjeta_tarea(tarea),
                ),
                width="100%",
                spacing="3",
            ),
            rx.text(
                "No hay tareas registradas",
                color="gray",
                size="3",
                weight="bold",
            ),
        ),
        align="start",
        spacing="3",
        width="100%",
        max_width="400px",
    )

# 5. Página principal
def index() -> rx.Component:
    return rx.vstack(
        rx.heading("Laboratorio - Reflex (Experiencia 2)", size="8", color="blue"),
        rx.text("Grupo 07 - Componentes Reutilizables y Listas Dinámicas", size="4", weight="bold"),
        rx.divider(),
        formulario_tarea(),
        lista_tareas(),
        align="center",
        spacing="6",
        padding="8",
    )

app = rx.App()
app.add_page(index)
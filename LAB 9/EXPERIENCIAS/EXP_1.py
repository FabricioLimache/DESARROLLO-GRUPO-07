import reflex as rx

class EstadoContador(rx.State):
    conteo: int = 0

    @rx.event
    def incrementar(self):
        self.conteo += 1

    @rx.event
    def disminuir(self):
        self.conteo -= 1

    @rx.event
    def reiniciar(self):
        self.conteo = 0

def contador() -> rx.Component:
    return rx.vstack(
        rx.heading("Contador Reactivo - Grupo 07", size="6"),
        
        # Uso de rx.cond para mostrar un mensaje dinámico según el valor
        rx.cond(
            EstadoContador.conteo > 0,
            rx.text("El contador es positivo", color="green", weight="bold"),
            rx.cond(
                EstadoContador.conteo < 0,
                rx.text("El contador es negativo", color="red", weight="bold"),
                rx.text("El contador está en cero", color="gray", weight="bold"),
            ),
        ),
        
        rx.text(f"Valor actual: {EstadoContador.conteo}", size="6", weight="bold"),
        
        rx.hstack(
            rx.button("Disminuir", on_click=EstadoContador.disminuir, color_scheme="red"),
            rx.button("Reiniciar", on_click=EstadoContador.reiniciar, color_scheme="gray"),
            rx.button("Incrementar", on_click=EstadoContador.incrementar, color_scheme="green"),
            spacing="4",
        ),
        align="center",
        spacing="4",
    )

def index() -> rx.Component:
    return rx.vstack(
        rx.heading("Laboratorio - Reflex", size="8", color="blue"),
        rx.text("Experiencia 1: Contador Interactivo", size="4", weight="bold"),
        rx.divider(),
        contador(),
        align="center",
        spacing="6",
        padding="8",
    )

app = rx.App()
app.add_page(index)
class MensajesRepository {
  mensajes;

  constructor() {
    this.mensajes = [];
  }
  getAllMensajes() {
    return this.mensajes;
  }

  createMensaje(mensaje) {
    return this.mensajes.push(mensaje);
  }
}

export const mensajes = new MensajesRepository();

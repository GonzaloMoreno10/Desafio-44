import Mensaje from '../../services/mensajes';

class MensajesRepository {
  async getAllMensajes() {
    return await Mensaje.find();
  }

  async createMensaje(mensaje) {
    return await mensaje.save();
  }
}

export const mensajes = new MensajesRepository();

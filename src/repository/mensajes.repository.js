import { sqliteDB } from '../services/database';
import Mensaje from '../models/Mensaje';

class MensajesRepository {
    async getAllMensajes() {
      return await Mensaje.find();
    }
  
   
  
    async createMensaje(mensaje) {
      return await mensaje.save();
    }
  
    
  }
  
  export const mensajes = new MensajesRepository();
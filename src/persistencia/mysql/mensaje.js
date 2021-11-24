import { createConnection } from '../../others/mysql';

class MensajesRepository {
  async getAllMensajes() {
    let connection = await createConnection();
    let data = await connection.query('select * from mensajes');
    return data[0];
  }

  async createMensaje(mensaje) {
    console.log(mensaje);
    let objeto = {
      mensaje: mensaje.texto,
      nombre: mensaje.author.nombre,
    };
    console.log(objeto);
    let connection = await createConnection();
    let data = await connection.query(
      `insert into mensajes (texto,nombre,apellido,edad,alias,avatar) values('${mensaje.texto}','${mensaje.author.nombre}','${mensaje.author.apellido}',${mensaje.author.edad},'${mensaje.author.alias}','${mensaje.author.avatar}')`,
    );
    return data[0];
  }
}

export const mensajeRepository = new MensajesRepository();

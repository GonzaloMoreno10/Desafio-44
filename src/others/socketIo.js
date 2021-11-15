import { Server } from 'socket.io';
import Producto from '../modulos/productos/serviciosProductos';
import Mensaje from '../modulos/mensajes/serviciosMensaje';
import { productosRepository } from '../modulos/productos/dalProductos';
import { mensajes as mensajeRepo } from '../modulos/mensajes/dalMensaje';
import { normalize, schema } from 'normalizr';
import { SmsService } from './twilio';

export const initIo = async server => {
  let prods = await productosRepository.getAllproductos();
  // let mensajes = await getMensajes(archMessg);
  const io = new Server(server);
  io.on('connection', async socket => {
    const author = new schema.Entity('author', {}, { idAttribute: 'id' });

    const msg = new schema.Entity(
      'mensajes',
      {
        author: author,
      },
      {
        idAttribute: '_id',
      },
    );

    const msgSchema = new schema.Array(msg);

    socket.on('mensajes', async data => {
      let admin = 0;
      console.log('Me llego un Mensaje y lo voy a guardar');
      let mensaje = new Mensaje();
      mensaje.author.id = data.author.email;
      mensaje.author.nombre = data.author.nombre;
      mensaje.author.apellido = data.author.apellido;
      mensaje.author.edad = data.author.edad;
      mensaje.author.alias = data.author.alias;
      mensaje.author.avatar = data.author.avatar;
      mensaje.texto = data.texto;
      mensaje.fecha = data.fecha;

      if (mensaje) {
        let frase = mensaje.texto.split(' ');
        for (let i in frase) {
          if (frase[i] === '@administrador') {
            admin = 1;
          }
        }
        if (admin == 1) {
          const response = await SmsService.sendMessage(
            '+543548574529',
            `El usuario ${mensaje.author.nombre} ${mensaje.author.apellido} solicito al administrador.
             ${mensaje.texto}`,
          );
          admin = 0;
          console.log(response);
        }
        await mensajeRepo.createMensaje(mensaje);
      }

      let mensajes = (await mensajeRepo.getAllMensajes()).map(data => ({
        _id: data._id,
        author: data.author,
        text: data.texto,
        avatar: data.author.avatar,
        date: data.fecha,
      }));

      let msjNormalize = normalize(mensajes, msgSchema);
      //console.log (util.inspect (msjNormalize, true, 7, true));
      io.emit('mensajes', msjNormalize);
    });
    socket.on('productos', async data => {
      let produc = new Producto();
      produc.title = data.title;
      produc.price = data.price;
      produc.date = data.date;
      produc.code = data.code;
      (produc.stock = data.stock), (produc.description = data.description);
      produc.image = data.image;
      if (produc) {
        let prod = await productosRepository.createProducto(produc);

        if (prod) {
          prods = await productosRepository.getAllproductos();
          io.emit('productos', prods);
        }
      }
    });

    //Emito los mensajes
    socket.on('askProducts', async data => {
      let prods = await productosRepository.getAllproductos();
      socket.emit('productos', prods);
    });

    socket.on('askMensajes', async data => {
      let mensajes = (await mensajeRepo.getAllMensajes()).map(data => ({
        _id: data._id,
        author: data.author,
        text: data.texto,
        avatar: data.author.avatar,
        date: data.fecha,
      }));

      let msjNormalize = normalize(mensajes, msgSchema);
      //console.log (util.inspect (msjNormalize, true, 7, true));
      socket.emit('mensajes', msjNormalize);
    });
  });
};

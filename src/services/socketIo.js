import {Server} from 'socket.io';
import Producto from '../models/Producto.js';
import Mensaje from '../models/Mensaje.js';
import {productosRepository} from '../repository/productos.repository';
import {mensajes as mensajeRepo} from '../repository/mensajes.repository';
import {normalize, schema} from 'normalizr';
let util = require ('util');

export const initIo = async server => {
  let prods = await productosRepository.getAllproductos ();
  // let mensajes = await getMensajes(archMessg);
  const io = new Server (server);
  io.on ('connection', async socket => {
    const author = new schema.Entity ('author',{},  {idAttribute: 'id'});

    const msg = new schema.Entity (
      'mensajes',
      {
        author: author,
      },
      {
        idAttribute: '_id',
      }
    );

    const msgSchema = new schema.Array (msg);

    socket.on ('mensajes', async data => {
      //console.log ('Me llego un Mensaje y lo voy a guardar');
      let mensaje = new Mensaje ();
      mensaje.author.id = data.author.email;
      mensaje.author.nombre = data.author.nombre;
      mensaje.author.apellido = data.author.apellido;
      mensaje.author.edad = data.author.edad;
      mensaje.author.alias = data.author.alias;
      mensaje.author.avatar = data.author.avatar;
      mensaje.texto = data.texto;
      mensaje.fecha = data.fecha;
      if (mensaje) {
        await mensajeRepo.createMensaje (mensaje);
      }
      
      let mensajes = (await mensajeRepo.getAllMensajes ()).map (data => ({
        _id: data._id,
        author: data.author,
        text: data.texto,
        avatar:data.author.avatar,
        date:data.fecha
      }));

      let msjNormalize = normalize (mensajes, msgSchema);
      //console.log (util.inspect (msjNormalize, true, 7, true));
      io.emit ('mensajes', msjNormalize);
    });
    socket.on ('productos', async data => {
      let produc = new Producto ();
      produc.title = data.title;
      produc.price = data.price;
      produc.date = data.date;
      produc.code = data.code;
      (produc.stock = data.stock), (produc.description = data.description);
      produc.image = data.image;
      if (produc) {
        let prod = await productosRepository.createProducto (produc);

        if (prod) {
          prods = await productosRepository.getAllproductos ();
          io.emit ('productos', prods);
        }
      }
    });

    //Emito los mensajes
    socket.on ('askProducts', async data => {
      let prods = await productosRepository.getAllproductos ();
      socket.emit ('productos', prods);
    });

    socket.on ('askMensajes', async data => {
      let mensajes = (await mensajeRepo.getAllMensajes ()).map (data => ({
        _id: data._id,
        author: data.author,
        text: data.texto,
        avatar:data.author.avatar,
        date:data.fecha
      }));

      let msjNormalize = normalize (mensajes, msgSchema);
      //console.log (util.inspect (msjNormalize, true, 7, true));
      socket.emit ('mensajes', msjNormalize);
    });
  });
};

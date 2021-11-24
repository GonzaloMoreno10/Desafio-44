import {
  productosRepository,
  carritoRepository,
  mensajes,
  usersRepository,
} from './';

require('../../others/mongo');
export class MongoRepository {
  getAllProductos = async () => {
    return await productosRepository.getAllproductos();
  };

  getProductosById = async id => {
    return await productosRepository.getProductosById(id);
  };

  createProducto = async producto => {
    return await productosRepository.createProducto(producto);
  };

  updateproducto = async (id, producto) => {
    return await productosRepository.update(id, producto);
  };

  deleteProducto = async id => {
    return await productosRepository.delete(id);
  };

  findAllCarrito = async user => {
    return await carritoRepository.findAll(user);
  };

  getAllMensajes = async () => {
    return await mensajes.getAllMensajes();
  };

  createMensaje = async mensaje => {
    return await mensajes.createMensaje(mensaje);
  };

  getUser = async user => {
    return await usersRepository.getUser(user);
  };

  getUserByName = async name => {
    return await usersRepository.getUserByName(name);
  };

  createUser = async user => {
    return await usersRepository.createUser(user);
  };

  updateUser = async (id, user) => {
    return await usersRepository.updateUser(id, user);
  };
}

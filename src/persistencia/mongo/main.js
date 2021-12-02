import { productoDao, carritoDao, mensajes, userDao } from './';

require('../../others/mongo');
export class MongoRepository {
  getAllProductos = async () => {
    return await productoDao.getAllproductos();
  };

  getProductosById = async id => {
    return await productoDao.getProductosById(id);
  };

  createProducto = async producto => {
    return await productoDao.createProducto(producto);
  };

  updateproducto = async (id, producto) => {
    return await productoDao.update(id, producto);
  };

  deleteProducto = async id => {
    return await productoDao.delete(id);
  };

  findAllCarrito = async user => {
    return await carritoDao.findAll(user);
  };

  getAllMensajes = async () => {
    return await mensajes.getAllMensajes();
  };

  createMensaje = async mensaje => {
    return await mensajes.createMensaje(mensaje);
  };

  getUser = async user => {
    return await userDao.getUser(user);
  };

  getUserByName = async name => {
    return await userDao.getUserByName(name);
  };

  createUser = async user => {
    return await userDao.createUser(user);
  };

  updateUser = async (id, user) => {
    return await userDao.updateUser(id, user);
  };
}

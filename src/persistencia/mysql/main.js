import {
  productoRepository,
  carritoRepository,
  mensajeRepository,
  userRepository,
} from './';

export class MySqlRepository {
  getAllProductos = async () => {
    return await productoRepository.getAllproductos();
  };

  getProductosById = async id => {
    return await productoRepository.getProductosById(id);
  };

  createProducto = async producto => {
    return await productoRepository.createProducto(producto);
  };

  updateproducto = async (id, producto) => {
    return await productoRepository.update(id, producto);
  };

  deleteProducto = async id => {
    return await productoRepository.delete(id);
  };

  findAllCarrito = async user => {
    return await carritoRepository.findAll(user);
  };

  getAllMensajes = async () => {
    return await mensajeRepository.getAllMensajes();
  };

  createMensaje = async mensaje => {
    return await mensajeRepository.createMensaje(mensaje);
  };

  getUser = async user => {
    return await userRepository.getUser(user);
  };

  getUserByName = async name => {
    return await userRepository.getUserByName(name);
  };

  createUser = async user => {
    return await userRepository.createUser(user);
  };

  updateUser = async (id, user) => {
    return await userRepository.updateUser(id, user);
  };
}

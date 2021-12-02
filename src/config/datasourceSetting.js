import { DaoFactory } from '../factories/daoFactory';
import minimist from 'minimist';
import { argsConfig } from './args';

let tipo;
const TIPO_DS = process.env.TIPO_DS;
if (TIPO_DS === 'MEMORY') {
  tipo = 3;
} else {
  tipo = 2;
}

class DaoSelect {
  persistance;
  constructor() {
    this.persistance = DaoFactory.get(tipo);
  }

  getAllProductos = async () => {
    return await this.persistance.getAllProductos();
  };

  getProductosById = async id => {
    return await this.persistance.getProductosById(id);
  };

  createProducto = async producto => {
    return await this.persistance.createProducto(producto);
  };

  updateproducto = async (id, producto) => {
    return await this.persistance.updateproducto(id, producto);
  };

  deleteProducto = async id => {
    return await this.persistance.deleteProducto(id);
  };

  findAllCarrito = async user => {
    return await this.persistance.findAll(user);
  };

  getAllMensajes = async () => {
    return await this.persistance.getAllMensajes();
  };

  createMensaje = async mensaje => {
    return await this.persistance.createMensaje(mensaje);
  };

  getUser = async user => {
    return await this.persistance.getUser(user);
  };

  getUserByName = async name => {
    return await this.persistance.getUserByName(name);
  };

  createUser = async user => {
    return await this.persistance.createUser(user);
  };

  updateUser = async (id, user) => {
    return await this.persistance.updateUser(id, user);
  };
}
export const daoSelect = new DaoSelect();

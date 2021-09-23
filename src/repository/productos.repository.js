import { mySQLDB } from '../services/database';
import Producto from '../models/Producto';
import {products} from '../faker/faker.products'

class ProductoRepository {
  async getAllproductos() {
    return await Producto.find();
  }

  async getProductosById(id) {
    return await Producto.findById(id,{}).lean();
  }

  async createProducto(producto) {
    return await producto.save();
  }

  async update(id, producto) {
    return await Producto.findByIdAndUpdate(id,producto)
  }

  async delete(id) {
    return await Producto.findByIdAndDelete(id);
  }

  async getRandomProductos(cant){
    if(cant){
      return products(cant);
    }
    else{
      return products(10);
    }
  }

}

export const productos = new ProductoRepository();
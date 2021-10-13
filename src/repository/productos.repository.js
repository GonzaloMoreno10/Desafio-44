import { mySQLDB } from '../services/database';
import productos from '../models/Producto';
import {products} from '../faker/faker.products'


class ProductoRepository {
  async getAllproductos() {
    let prod = await productos.find();
    return prod;
  }

  async getProductsPagination(page){
    const opciones = {
      limit:16,
      page:page
    }
    return await productos.paginate({},opciones);
  }

  async getProductosById(id) {
    return await productos.findById(id,{}).lean();
  }

  async createProducto(producto) {
    return await producto.save();
  }

  async update(id, producto) {
    return await productos.findByIdAndUpdate(id,producto)
  }

  async delete(id) {
    return await productos.findByIdAndDelete(id);
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

export const productosRepository = new ProductoRepository();
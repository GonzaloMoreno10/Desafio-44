import { ProductoModel } from '../../services/productos';

class ProductoDao {
  async getAllproductos() {
    let prod = await ProductoModel.find();
    return prod;
  }

  async getProductosById(id) {
    return await ProductoModel.findById(id, {}).lean();
  }

  async createProducto(producto) {
    return await ProductoModel.create(producto);
  }

  async update(id, producto) {
    return await ProductoModel.findByIdAndUpdate(id, producto);
  }

  async delete(id) {
    return await ProductoModel.findByIdAndDelete(id);
  }
}

export const productoDao = new ProductoDao();

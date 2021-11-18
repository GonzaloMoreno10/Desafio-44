import { ProductoModel } from './serviciosProductos';

class ProductoRepository {
  async getAllproductos() {
    let prod = await ProductoModel.find();
    return prod;
  }

  async getProductosById(id) {
    return await ProductoModel.findById(id, {}).lean();
  }

  async createProducto(producto) {
    return await ProductoModel.save();
  }

  async update(id, producto) {
    return await ProductoModel.findByIdAndUpdate(id, producto);
  }

  async delete(id) {
    return await ProductoModel.findByIdAndDelete(id);
  }
}

export const productosRepository = new ProductoRepository();

import productos from './serviciosProductos';

class ProductoRepository {
  async getAllproductos() {
    let prod = await productos.find();
    return prod;
  }

  async getProductosById(id) {
    return await productos.findById(id, {}).lean();
  }

  async createProducto(producto) {
    return await producto.save();
  }

  async update(id, producto) {
    return await productos.findByIdAndUpdate(id, producto);
  }

  async delete(id) {
    return await productos.findByIdAndDelete(id);
  }
}

export const productosRepository = new ProductoRepository();

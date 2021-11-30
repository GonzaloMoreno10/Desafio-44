import { productoDTO } from '../../DTOS/productoDto';
class ProductoDao {
  productos;

  constructor() {
    this.productos = [];
  }
  async getAllproductos() {
    const prodDtos = [];
    for (let i in this.productos) {
      const productos = productoDTO(this.productos[i]);
      prodDtos.push(productos);
    }

    return prodDtos;
  }

  getProductosById(id) {
    for (let i in this.productos) {
      if (this.productos[i].id == id) {
        return this.productos[i];
      }
    }
  }

  createProducto(producto) {
    return this.productos.push(producto);
  }

  update(id, producto) {
    for (let i in this.productos) {
      if (this.productos[i].id == id) {
        this.productos[i] == producto;
        return this.productos[i];
      }
    }
  }

  delete(id) {
    for (let i in this.productos) {
      if (this.productos[i].id == id) {
        this.productos.splice(i, 1);
        this.productos[i];
      }
    }
  }
}

export const productoDao = new ProductoDao();

import axios from 'axios';

class AxiosClient {
  async getProductos(req, res) {
    const urlProducts = 'http://localhost:8080/api/productos/listar';
    const productos = await axios.get(urlProducts);
    return res.send(productos.data);
  }

  async setProducto(req, res) {
    const url = 'http://localhost:8080/api/productos/crear';
    let { title, price, stock, code, description, image } = req.body;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = {
      title: title,
      price: price,
      stock: stock,
      code: code,
      description: description,
      image: image,
    };
    let result = await axios.post(url, body, config);
    return res.send(result.data);
  }

  async delProducto(req, res) {
    let { id } = req.params;
    const url = `http://localhost:8080/api/productos/eliminar/${id}`;

    try {
      const response = await axios.delete(url);
      res.json(response.data);
    } catch (err) {
      return new Error(err);
    }
  }

  async updateProducto(req, res) {
    let { id } = req.params;
    let { title, price, stock, code, description, image } = req.body;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = {
      title: title,
      price: price,
      stock: stock,
      code: code,
      description: description,
      image: image,
    };
    const url = `http://localhost:8080/api/productos/actualizar/${id}`;

    const response = await axios.put(url, body, config);
    return res.json(response.data);
  }
}

export const axiosClient = new AxiosClient();

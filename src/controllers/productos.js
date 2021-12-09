import { daoSelect } from '../config/datasourceSetting';
import { ProductoModel } from '../services/productos';
class ProductosController {
  async getAllproductos() {
    const productos = await daoSelect.getAllProductos();
    return productos;
  }

  async vistaTest(req, res) {
    let products = await daoSelect.getRandomProductos(req.params.cant);
    res.render('products/allProducts', { products });
  }

  async getEditarId(req, res) {
    let id = req.params.id;
    let producto = await daoSelect.getProductosById(id);
    res.render('products/edit', { producto });
  }

  async getSala(req, res) {
    let products = await daoSelect.getAllProductos();
    res.render('products/sala', { products });
  }

  getNew(req, res) {
    res.render('products/newProduct');
  }

  async getDetail(req, res) {
    let { id } = req.params;
    let prod = await daoSelect.getProductosById(id);
    res.render('products/detail', prod);
  }

  async getVista(req, res) {
    let products = await daoSelect.getAllProductos();
    res.render('products/allProducts', { products });
  }

  async getProductosByid(req, res) {
    const { id } = req.params;

    const item = await daoSelect.getProductosById(id);
    if (!item) {
      return res.status(404).json({
        msg: 'Producto no encontrado',
      });
    }
    res.json({
      data: item,
    });
  }

  async createProductos({
    title,
    price,
    date,
    stock,
    code,
    description,
    image,
  }) {
    const producto = new ProductoModel({
      title,
      price,
      date,
      stock,
      code,
      description,
      image,
    });
    /*const { title, price, description, image, stock, code } = req.body;
    if (!title && !code) {
      return res.status(500).json('invalid Body');
    }
    let producto;
    if (tipo == 3) {
      const productos = await daoSelect.getAllProductos();
      console.log(productos);
      const id = productos.length ? productos.length + 1 : 1;
      let date = new Date();
      producto = {
        title,
        price,
        date,
        stock,
        code,
        description,
        image,
        id,
      };
    } else {
      producto = new ProductoModel({
        title,
        price,
        date,
        stock,
        code,
        description,
        image,
      });
    }*/

    const result = await daoSelect.createProducto(producto);

    console.log(result);

    /*req.flash('success_msg', 'Producto creado correctamente');
    res.redirect('/api/productos/vista');*/
    /*return res.status(200).json({
      result: 'Producto creado',
      ruta: `http://localhost:8080/api/productos/listar/${
        result._id ? result._id : result.insertId
      }`,
      id: result._id ? result._id : result.insertId,
    });*/
    return result;
  }

  async updateProductos({ _id, productos }) {
    /*const { title, price, stock, code, description, image } = req.body;

    const { id } = req.params;
    if (!title || !price || !stock || !code || !description || !image) {
      return res.status(500).json({ msg: 'Invalid body' });
    }*/

    console.log(_id);
    const productoOriginal = await daoSelect.getProductosById(_id);

    console.log(productoOriginal);
    //console.log(productoOriginal)
    /*if (!productoOriginal) {
      return res.status(404).json({
        msg: 'Producto no encontrado',
      });
    }*/

    //const prod = { title, price, stock, code, description, image };

    console.log(productos);
    let prodAct = await daoSelect.updateproducto(_id, { productos });

    //const item = await daoSelect.getProductosById(id);
    /*req.flash('success_msg', 'Producto actualizado correctamente');
    return res.redirect('/api/productos/vista');*/

    return prodAct;
  }

  async deleteProductos({ _id }) {
    // const { id } = req.params;

    console.log(_id);
    const exist = await daoSelect.getProductosById({ _id });

    /*if (!exist) {
      return res.json('producto no existente');
    }*/
    const deleteProduct = await daoSelect.deleteProducto({ _id });
    /*req.flash('success_msg', 'Producto Eliminado correctamente');
    res.redirect('/api/productos/vista');*/
    console.log(deleteProduct);
    return deleteProduct;
  }
}

export const productoController = new ProductosController();

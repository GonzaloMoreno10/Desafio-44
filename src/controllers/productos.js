import { daoSelect } from '../config/datasourceSetting';
import { ProductoModel } from '../services/productos';
import minimist from 'minimist';
class ProductosController {
  async getAllproductos(req, res) {
    let { id } = req.params;
    if (id) {
      const producto = await daoSelect.getProductosById(id);
      return res.status(201).json(producto);
    }
    const items = await daoSelect.getAllProductos();
    return res.status(201).json(items);
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

  async createProductos(req, res) {
    const argumentos = minimist(process.argv.slice(2));
    const tipo = argumentos.tipo_ds;
    console.log(tipo);
    const { title, price, description, image, stock, code } = req.body;
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
    }

    const result = await daoSelect.createProducto(producto);

    /*req.flash('success_msg', 'Producto creado correctamente');
    res.redirect('/api/productos/vista');*/
    return res.status(200).json({
      result: 'Producto creado',
      ruta: `http://localhost:8080/api/productos/listar/${
        result._id ? result._id : result.insertId
      }`,
      id: result._id ? result._id : result.insertId,
    });
  }

  async updateProductos(req, res) {
    const { title, price, stock, code, description, image } = req.body;

    const { id } = req.params;
    if (!title || !price || !stock || !code || !description || !image) {
      return res.status(500).json({ msg: 'Invalid body' });
    }

    const productoOriginal = await daoSelect.getProductosById(id);

    console.log(productoOriginal);

    //console.log(productoOriginal)
    if (!productoOriginal) {
      return res.status(404).json({
        msg: 'Producto no encontrado',
      });
    }

    const prod = { title, price, stock, code, description, image };

    await daoSelect.updateproducto(id, prod);

    const item = await daoSelect.getProductosById(id);
    /*req.flash('success_msg', 'Producto actualizado correctamente');
    return res.redirect('/api/productos/vista');*/

    return res.status(200).json('Producto actualizado');
  }

  async deleteProductos(req, res) {
    const { id } = req.params;

    const exist = await daoSelect.getProductosById(id);

    if (!exist) {
      return res.json('producto no existente');
    }
    await daoSelect.deleteProducto(id);

    await daoSelect.deleteProducto(id);
    /*req.flash('success_msg', 'Producto Eliminado correctamente');
    res.redirect('/api/productos/vista');*/
    return res.status(200).json('producto eliminado');
  }
}

export const productoController = new ProductosController();

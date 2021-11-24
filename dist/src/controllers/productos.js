"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productoController = void 0;

var _datasourceSetting = require("../config/datasourceSetting");

var _productos = require("../services/productos");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class ProductosController {
  getAllproductos(req, res) {
    return _asyncToGenerator(function* () {
      var {
        id
      } = req.params;

      if (id) {
        var producto = yield _datasourceSetting.daoSelect.getProductosById(id);
        return res.status(201).json(producto);
      }

      var items = yield _datasourceSetting.daoSelect.getAllProductos();
      return res.status(201).json(items);
    })();
  }

  vistaTest(req, res) {
    return _asyncToGenerator(function* () {
      var products = yield _datasourceSetting.daoSelect.getRandomProductos(req.params.cant);
      res.render('products/allProducts', {
        products
      });
    })();
  }

  getEditarId(req, res) {
    return _asyncToGenerator(function* () {
      var id = req.params.id;
      var producto = yield _datasourceSetting.daoSelect.getProductosById(id);
      res.render('products/edit', {
        producto
      });
    })();
  }

  getSala(req, res) {
    return _asyncToGenerator(function* () {
      var products = yield _datasourceSetting.daoSelect.getAllProductos();
      res.render('products/sala', {
        products
      });
    })();
  }

  getNew(req, res) {
    res.render('products/newProduct');
  }

  getDetail(req, res) {
    return _asyncToGenerator(function* () {
      var {
        id
      } = req.params;
      var prod = yield _datasourceSetting.daoSelect.getProductosById(id);
      res.render('products/detail', prod);
    })();
  }

  getVista(req, res) {
    return _asyncToGenerator(function* () {
      var products = yield _datasourceSetting.daoSelect.getAllProductos();
      res.render('products/allProducts', {
        products
      });
    })();
  }

  getProductosByid(req, res) {
    return _asyncToGenerator(function* () {
      var {
        id
      } = req.params;
      var item = yield _datasourceSetting.daoSelect.getProductosById(id);

      if (!item) {
        return res.status(404).json({
          msg: 'Producto no encontrado'
        });
      }

      res.json({
        data: item
      });
    })();
  }

  createProductos(req, res) {
    return _asyncToGenerator(function* () {
      var {
        title,
        price,
        description,
        image,
        stock,
        code
      } = req.body;

      if (!title && !code) {
        return res.status(500).json('invalid Body');
      }

      var date = new Date();
      var producto = new _productos.ProductoModel({
        title,
        price,
        date,
        stock,
        code,
        description,
        image
      });
      var result = yield _datasourceSetting.daoSelect.createProducto(producto);
      /*req.flash('success_msg', 'Producto creado correctamente');
      res.redirect('/api/productos/vista');*/

      return res.status(200).json({
        result: 'Producto creado',
        ruta: "http://localhost:8080/api/productos/listar/".concat(result._id ? result._id : result.insertId),
        id: result._id ? result._id : result.insertId
      });
    })();
  }

  updateProductos(req, res) {
    return _asyncToGenerator(function* () {
      var {
        title,
        price,
        stock,
        code,
        description,
        image
      } = req.body;
      var {
        id
      } = req.params;

      if (!title || !price || !stock || !code || !description || !image) {
        return res.status(500).json({
          msg: 'Invalid body'
        });
      }

      var productoOriginal = yield _datasourceSetting.daoSelect.getProductosById(id); //console.log(productoOriginal)

      if (!productoOriginal) {
        return res.status(404).json({
          msg: 'Producto no encontrado'
        });
      }

      var prod = {
        title,
        price,
        stock,
        code,
        description,
        image
      };
      yield _datasourceSetting.daoSelect.updateproducto(id, prod);
      var item = yield _datasourceSetting.daoSelect.getProductosById(id);
      /*req.flash('success_msg', 'Producto actualizado correctamente');
      return res.redirect('/api/productos/vista');*/

      return res.status(200).json('Producto actualizado');
    })();
  }

  deleteProductos(req, res) {
    return _asyncToGenerator(function* () {
      var {
        id
      } = req.params;
      var exist = yield _datasourceSetting.daoSelect.getProductosById(id);

      if (!exist) {
        return res.json('producto no existente');
      }

      yield _datasourceSetting.daoSelect.deleteProducto(id);
      yield _datasourceSetting.daoSelect.deleteProducto(id);
      /*req.flash('success_msg', 'Producto Eliminado correctamente');
      res.redirect('/api/productos/vista');*/

      return res.status(200).json('producto eliminado');
    })();
  }

}

var productoController = new ProductosController();
exports.productoController = productoController;
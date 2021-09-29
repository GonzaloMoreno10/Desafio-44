"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productoController = void 0;

var _Producto = _interopRequireDefault(require("../models/Producto"));

var _productos = require("../repository/productos.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class ProductosController {
  getAllproductos(req, res) {
    return _asyncToGenerator(function* () {
      var items = yield _productos.productosRepository.getAllproductos();
      res.json({
        data: items
      });
    })();
  }

  getProductosByid(req, res) {
    return _asyncToGenerator(function* () {
      var {
        id
      } = req.params;
      var item = yield _productos.productosRepository.getProductosById(id);

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
      var date = new Date();
      var producto = new _Producto.default({
        title,
        price,
        date,
        stock,
        code,
        description,
        image
      });
      console.log(producto);
      var id = yield _productos.productosRepository.createProducto(producto);
      var newItem = yield _productos.productosRepository.getAllproductos(id);
      res.redirect('/api/productos/vista');
    })();
  }

  updateProductos(req, res) {
    return _asyncToGenerator(function* () {
      var {
        title,
        price,
        thumbnail
      } = req.body;
      var {
        id
      } = req.params;

      if (!title || !price || !thumbnail) {
        return res.status(400).json({
          msg: 'Invalida body'
        });
      }

      var productoOriginal = yield productos.getProductosById(id); //console.log(productoOriginal)

      if (!productoOriginal) {
        return res.status(404).json({
          msg: 'Producto no encontrado'
        });
      }

      var prod = {
        title,
        price,
        thumbnail
      };
      yield _productos.productosRepository.update(id, prod);
      var item = yield _productos.productosRepository.getProductosById(id);
      res.json({
        msg: 'Producto Actualizado',
        item
      });
    })();
  }

  deleteProductos(req, res) {
    return _asyncToGenerator(function* () {
      var {
        id
      } = req.params;
      console.log(id);
      var producto = yield _productos.productosRepository.delete(id);

      if (!producto) {
        return res.status(404).json({
          msg: 'Producto no encontrado'
        });
      }

      yield _productos.productosRepository.delete(id);
      res.json({
        msg: 'Producto eliminado'
      });
    })();
  }

}

var productoController = new ProductosController();
exports.productoController = productoController;
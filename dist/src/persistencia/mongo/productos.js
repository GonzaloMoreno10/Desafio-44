"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productoDao = void 0;

var _productos = require("../../services/productos");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class ProductoDao {
  getAllproductos() {
    return _asyncToGenerator(function* () {
      var prod = yield _productos.ProductoModel.find();
      return prod;
    })();
  }

  getProductosById(id) {
    return _asyncToGenerator(function* () {
      return yield _productos.ProductoModel.findById(id, {}).lean();
    })();
  }

  createProducto(producto) {
    return _asyncToGenerator(function* () {
      return yield _productos.ProductoModel.create(producto);
    })();
  }

  update(id, producto) {
    return _asyncToGenerator(function* () {
      return yield _productos.ProductoModel.findByIdAndUpdate(id, producto);
    })();
  }

  delete(id) {
    return _asyncToGenerator(function* () {
      return yield _productos.ProductoModel.findByIdAndDelete(id);
    })();
  }

}

var productoDao = new ProductoDao();
exports.productoDao = productoDao;
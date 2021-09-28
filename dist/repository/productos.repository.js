"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productosRepository = void 0;

var _database = require("../services/database");

var _Producto = _interopRequireDefault(require("../models/Producto"));

var _faker = require("../faker/faker.products");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class ProductoRepository {
  getAllproductos() {
    return _asyncToGenerator(function* () {
      return yield _Producto.default.find();
    })();
  }

  getProductosById(id) {
    return _asyncToGenerator(function* () {
      return yield _Producto.default.findById(id, {}).lean();
    })();
  }

  createProducto(producto) {
    return _asyncToGenerator(function* () {
      return yield producto.save();
    })();
  }

  update(id, producto) {
    return _asyncToGenerator(function* () {
      return yield _Producto.default.findByIdAndUpdate(id, producto);
    })();
  }

  delete(id) {
    return _asyncToGenerator(function* () {
      return yield _Producto.default.findByIdAndDelete(id);
    })();
  }

  getRandomProductos(cant) {
    return _asyncToGenerator(function* () {
      if (cant) {
        return (0, _faker.products)(cant);
      } else {
        return (0, _faker.products)(10);
      }
    })();
  }

}

var productosRepository = new ProductoRepository();
exports.productosRepository = productosRepository;
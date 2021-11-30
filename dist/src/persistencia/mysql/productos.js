"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productoRepository = exports.ProductoDao = void 0;

var _mysql = require("../../others/mysql");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ProductoDao {
  constructor() {
    _defineProperty(this, "createConnection", void 0);
  }

  getAllproductos() {
    return _asyncToGenerator(function* () {
      var connection = yield (0, _mysql.createConnection)();
      var data = yield connection.query('select * from productos');
      return data[0];
    })();
  }

  getProductosById(id) {
    return _asyncToGenerator(function* () {
      var connection = yield (0, _mysql.createConnection)();
      var data = yield connection.query('select * from productos where id = ' + id);
      return data[0];
    })();
  }

  createProducto(producto) {
    return _asyncToGenerator(function* () {
      var connection = yield (0, _mysql.createConnection)();
      var data = yield connection.query("insert into productos (title,description,code,image,price,stock,enabled) values('".concat(producto.title, "','").concat(producto.description, "',").concat(producto.code, ",'").concat(producto.image, "',").concat(producto.price, ",").concat(producto.stock, ",1)"));
      console.log(data);
      return data[0];
    })();
  }

  update(id, producto) {
    return _asyncToGenerator(function* () {
      var connection = yield (0, _mysql.createConnection)();
      var data = yield connection.query("update productos set title = ".concat(producto.title, ",description = ").concat(producto.description, ",\n    code = ").concat(producto.code, ",image = ").concat(producto.image, ", price = ").concat(producto.price, ",stock = ").concat(producto.stock, " where id = ").concat(id));
      return data[0];
    })();
  }

  delete(id) {
    return _asyncToGenerator(function* () {
      var connection = yield (0, _mysql.createConnection)();
      var data = yield connection.query("delete from productos where id = ".concat(id));
      return data[0];
    })();
  }

}

exports.ProductoDao = ProductoDao;
var productoRepository = new ProductoDao();
exports.productoRepository = productoRepository;
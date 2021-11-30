"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productoDao = void 0;

var _productoDto = require("../../DTOS/productoDto");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ProductoDao {
  constructor() {
    _defineProperty(this, "productos", void 0);

    this.productos = [];
  }

  getAllproductos() {
    var _this = this;

    return _asyncToGenerator(function* () {
      var prodDtos = [];

      for (var i in _this.productos) {
        var productos = (0, _productoDto.productoDTO)(_this.productos[i]);
        prodDtos.push(productos);
      }

      return prodDtos;
    })();
  }

  getProductosById(id) {
    for (var i in this.productos) {
      if (this.productos[i].id == id) {
        return this.productos[i];
      }
    }
  }

  createProducto(producto) {
    return this.productos.push(producto);
  }

  update(id, producto) {
    for (var i in this.productos) {
      if (this.productos[i].id == id) {
        this.productos[i] == producto;
        return this.productos[i];
      }
    }
  }

  delete(id) {
    for (var i in this.productos) {
      if (this.productos[i].id == id) {
        this.productos.splice(i, 1);
        this.productos[i];
      }
    }
  }

}

var productoDao = new ProductoDao();
exports.productoDao = productoDao;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carritoDao = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CarritoDao {
  constructor() {
    _defineProperty(this, "carrito", void 0);

    this.carrito = [];
  }

  findAll() {
    return carrito;
  }

}

var carritoDao = new CarritoDao();
exports.carritoDao = carritoDao;
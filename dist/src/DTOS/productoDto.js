"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productoDTO = void 0;

var productoDTO = producto => {
  return {
    fyh: new Date().toLocaleDateString(),
    pid: process.pid,
    producto: producto.title,
    precio: producto.price,
    id: producto.id
  };
};

exports.productoDTO = productoDTO;
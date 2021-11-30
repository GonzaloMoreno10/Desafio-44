"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mensajes = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MensajesRepository {
  constructor() {
    _defineProperty(this, "mensajes", void 0);

    this.mensajes = [];
  }

  getAllMensajes() {
    return this.mensajes;
  }

  createMensaje(mensaje) {
    return this.mensajes.push(mensaje);
  }

}

var mensajes = new MensajesRepository();
exports.mensajes = mensajes;
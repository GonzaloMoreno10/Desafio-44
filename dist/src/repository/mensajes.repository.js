"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mensajes = void 0;

var _database = require("../services/database");

var _Mensaje = _interopRequireDefault(require("../models/Mensaje"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class MensajesRepository {
  getAllMensajes() {
    return _asyncToGenerator(function* () {
      return yield _Mensaje.default.find();
    })();
  }

  createMensaje(mensaje) {
    return _asyncToGenerator(function* () {
      return yield mensaje.save();
    })();
  }

}

var mensajes = new MensajesRepository();
exports.mensajes = mensajes;
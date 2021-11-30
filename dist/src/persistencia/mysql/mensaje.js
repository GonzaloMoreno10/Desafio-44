"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mensajeRepository = void 0;

var _mysql = require("../../others/mysql");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class Mensaje {
  getAllMensajes() {
    return _asyncToGenerator(function* () {
      var connection = yield (0, _mysql.createConnection)();
      var data = yield connection.query('select * from mensajes');
      return data[0];
    })();
  }

  createMensaje(mensaje) {
    return _asyncToGenerator(function* () {
      console.log(mensaje);
      var objeto = {
        mensaje: mensaje.texto,
        nombre: mensaje.author.nombre
      };
      console.log(objeto);
      var connection = yield (0, _mysql.createConnection)();
      var data = yield connection.query("insert into mensajes (texto,nombre,apellido,edad,alias,avatar) values('".concat(mensaje.texto, "','").concat(mensaje.author.nombre, "','").concat(mensaje.author.apellido, "',").concat(mensaje.author.edad, ",'").concat(mensaje.author.alias, "','").concat(mensaje.author.avatar, "')"));
      return data[0];
    })();
  }

}

var mensajeRepository = new Mensaje();
exports.mensajeRepository = mensajeRepository;
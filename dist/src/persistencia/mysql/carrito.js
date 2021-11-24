"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carritoRepository = exports.CarritoRepository = void 0;

var _mysql = require("../../others/mysql");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class CarritoRepository {
  findAll(userId) {
    return _asyncToGenerator(function* () {
      var connection = yield (0, _mysql.createConnection)();
      var data = yield connection.query("sselect p.* from carritos c ,carrito_productos cp ,productos p\n      where c.id  = cp.id_carrito \n      and p.id = cp.id_producto \n      and userId =  ".concat(userId));
      return data[0];
    })();
  }

}

exports.CarritoRepository = CarritoRepository;
var carritoRepository = new CarritoRepository();
exports.carritoRepository = carritoRepository;
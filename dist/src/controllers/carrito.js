"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carritoController = void 0;

var _datasourceSetting = require("../config/datasourceSetting");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class CarritoController {
  find(req, res) {
    return _asyncToGenerator(function* () {
      var {
        id
      } = req.params;

      if (id) {
        var data = yield _datasourceSetting.daoSelect.findAllCarrito(id);
        res.status(201).json(data);
      } else {
        var _data = yield _datasourceSetting.daoSelect.findAllCarrito();

        res.status(200).json(_data);
      }
    })();
  }

}

var carritoController = new CarritoController();
exports.carritoController = carritoController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daoSelect = void 0;

var _daoFactory = require("../factories/daoFactory");

var _minimist = _interopRequireDefault(require("minimist"));

var _args = require("./args");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var argumentos = (0, _minimist.default)(process.argv.slice(2), _args.argsConfig);
var tipo = argumentos.tipo_ds;

class DaoSelect {
  constructor() {
    var _this = this;

    _defineProperty(this, "persistance", void 0);

    _defineProperty(this, "getAllProductos", /*#__PURE__*/_asyncToGenerator(function* () {
      return yield _this.persistance.getAllProductos();
    }));

    _defineProperty(this, "getProductosById", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (id) {
        return yield _this.persistance.getProductosById(id);
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createProducto", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* (producto) {
        return yield _this.persistance.createProducto(producto);
      });

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateproducto", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* (id, producto) {
        return yield _this.persistance.updateproducto(id, producto);
      });

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteProducto", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* (id) {
        return yield _this.persistance.deleteProducto(id);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(this, "findAllCarrito", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* (user) {
        return yield _this.persistance.findAll(user);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getAllMensajes", /*#__PURE__*/_asyncToGenerator(function* () {
      return yield _this.persistance.getAllMensajes();
    }));

    _defineProperty(this, "createMensaje", /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* (mensaje) {
        return yield _this.persistance.createMensaje(mensaje);
      });

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getUser", /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* (user) {
        return yield _this.persistance.getUser(user);
      });

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getUserByName", /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* (name) {
        return yield _this.persistance.getUserByName(name);
      });

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createUser", /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* (user) {
        return yield _this.persistance.createUser(user);
      });

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateUser", /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* (id, user) {
        return yield _this.persistance.updateUser(id, user);
      });

      return function (_x11, _x12) {
        return _ref12.apply(this, arguments);
      };
    }());

    this.persistance = _daoFactory.DaoFactory.get(tipo);
  }

}

var daoSelect = new DaoSelect();
exports.daoSelect = daoSelect;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _productos = require("../controllers/productos.controller");

var _productos2 = require("../repository/productos.repository");

var _autenticacion = require("../middlewares/autenticacion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Router = _express.default.Router();

//Inicializaciones
//Rutas
Router.get("/listar", _autenticacion.authSession, _productos.productoController.getAllproductos);
Router.get("/listar/:id", _autenticacion.authSession, _productos.productoController.getProductosByid);
Router.get("/vista", _autenticacion.authSession, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var products = yield _productos2.productosRepository.getAllproductos();
    var user = req.session.user;
    var firstLogin = false;
    if (req.session.contador == 1) firstLogin = true;
    res.render("products/allProducts", {
      products,
      user,
      firstLogin
    });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
Router.get("/new", _autenticacion.authSession, (req, res) => {
  res.render("products/newProduct");
});
Router.get("/vista-test/:cant?", _autenticacion.authSession, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var products = yield _productos2.productosRepository.getRandomProductos(req.params.cant);
    res.render("products/allProducts", {
      products
    });
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
Router.post("/crear", _autenticacion.authSession, _productos.productoController.createProductos);
Router.delete("/eliminar/:id", _autenticacion.authSession, _productos.productoController.deleteProductos);
Router.put("/actualizar/:id", _autenticacion.authSession, _productos.productoController.updateProductos);
Router.get("/sala-products", _autenticacion.authSession, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var products = yield _productos2.productosRepository.getAllproductos();
    res.render('products/sala', {
      products
    });
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = Router;
exports.default = _default;
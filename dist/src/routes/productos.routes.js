"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _productos = require("../controllers/productos.controller");

var _productos2 = require("../repository/productos.repository");

var _autenticacion = require("../middlewares/autenticacion");

var _users = require("../repository/users.repository");

var _methodOverride = _interopRequireDefault(require("method-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Router = _express.default.Router();

//Inicializaciones
//Rutas
Router.use((0, _methodOverride.default)(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
Router.get("/listar", _productos.productoController.getProductPagination);
Router.get("/listar/:id", _autenticacion.auth, _productos.productoController.getProductosByid);
Router.get("/vista", _autenticacion.auth, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var products = yield _productos2.productosRepository.getAllproductos();
    console.log(products);
    var firstLogin = req.user.firstLogin;
    res.render("products/allProducts", {
      products,
      firstLogin
    });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
Router.get("/detail/:id", _autenticacion.auth, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    var prod = yield _productos2.productosRepository.getProductosById(id);
    console.log(prod);
    res.render("products/detail", prod);
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
Router.get("/new", _autenticacion.auth, (req, res) => {
  res.render("products/newProduct");
});
Router.get("/vista-test/:cant?", _autenticacion.auth, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var products = yield _productos2.productosRepository.getRandomProductos(req.params.cant);
    res.render("products/allProducts", {
      products
    });
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
Router.get('/editar/:id', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var id = req.params.id;
    var producto = yield _productos2.productosRepository.getProductosById(id);
    res.render('products/edit', {
      producto
    });
  });

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
Router.post("/crear", _autenticacion.auth, _productos.productoController.createProductos);
Router.delete("/eliminar/:id", _autenticacion.auth, _productos.productoController.deleteProductos);
Router.put("/actualizar/:id", _autenticacion.auth, _productos.productoController.updateProductos);
Router.get("/sala-products", _autenticacion.auth, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var products = yield _productos2.productosRepository.getAllproductos();
    res.render('products/sala', {
      products
    });
  });

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = Router;
exports.default = _default;
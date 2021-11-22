"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _rutasProductos = require("../modulos/productos/rutasProductos");

var _methodOverride = _interopRequireDefault(require("method-override"));

var _rutasUser = require("../modulos/users/rutasUser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
Router.get('/listar/:id?', _rutasProductos.productoController.getAllproductos); //Router.get('/listar/:id', auth, productoController.getProductosByid);

Router.get('/vista', _rutasProductos.productoController.getVista);
Router.get('/detail/:id', _rutasUser.userController.auth, _rutasProductos.productoController.getDetail);
Router.get('/new', _rutasUser.userController.auth, _rutasProductos.productoController.getNew);
Router.get('/vista-test/:cant?', _rutasUser.userController.auth, _rutasProductos.productoController.vistaTest);
Router.get('/editar/:id', _rutasProductos.productoController.getEditarId);
Router.post('/crear', _rutasProductos.productoController.createProductos);
Router.delete('/eliminar/:id', _rutasProductos.productoController.deleteProductos);
Router.put('/actualizar/:id', _rutasProductos.productoController.updateProductos);
Router.get('/sala-products', _rutasProductos.productoController.getSala);
var _default = Router;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productoRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var _methodOverride = _interopRequireDefault(require("method-override"));

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
Router.get('/listar/:id?', _controllers.productoController.getAllproductos); //Router.get('/listar/:id', auth, productoController.getProductosByid);

Router.get('/vista', _controllers.productoController.getVista);
Router.get('/detail/:id', _controllers.userController.auth, _controllers.productoController.getDetail);
Router.get('/new', _controllers.userController.auth, _controllers.productoController.getNew);
Router.get('/vista-test/:cant?', _controllers.userController.auth, _controllers.productoController.vistaTest);
Router.get('/editar/:id', _controllers.productoController.getEditarId);
Router.post('/crear', _controllers.productoController.createProductos);
Router.delete('/eliminar/:id', _controllers.productoController.deleteProductos);
Router.put('/actualizar/:id', _controllers.productoController.updateProductos);
Router.get('/sala-products', _controllers.productoController.getSala);
var productoRouter = Router;
exports.productoRouter = productoRouter;
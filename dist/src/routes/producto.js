"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productoRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var _expressGraphql = require("express-graphql");

var _graphql = require("graphql");

var _venv = require("../config/venv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express.default.Router();

var start = () => {
  var schema = (0, _graphql.buildSchema)("type Query{\n      productos:[productos]\n    }\n    type Mutation{\n      createProducto(\n        title: String,\n        price: Int,\n        date: String,\n        stock: Int,\n        code: Int,\n        description: String,\n        image: String\n      ):productos,\n      updateProducto(\n        _id: String!,\n        title: String!,\n        price: Int!\n      ):productos,\n      deleteProducto(\n        _id: String!\n      ):productos\n    },\n    type productos{\n        _id: String!,\n        title: String,\n        price: Int,\n        date: String,\n        stock: Int,\n        code: Int,\n        description: String,\n        image: String\n    }");
  var root = {
    productos: _controllers.productoController.getAllproductos(),
    createProducto: (title, price, date, stock, code, description, image) => _controllers.productoController.createProductos(title, price, date, stock, code, description, image),
    updateProducto: (_id, productos) => _controllers.productoController.updateProductos(_id, productos),
    deleteProducto: _id => _controllers.productoController.deleteProductos(_id)
  };
  console.log('Me estoy ejecutando');
  return (0, _expressGraphql.graphqlHTTP)({
    schema: schema,
    rootValue: root,
    graphiql: _venv.GRAPHIQL
  });
};

var grapqhHTTPS = start();
Router.use('/', grapqhHTTPS);
/*Router.get('/listar/:id?', productoController.getAllproductos);

//Router.get('/listar/:id', auth, productoController.getProductosByid);

Router.get('/vista', productoController.getVista);

Router.get('/detail/:id', userController.auth, productoController.getDetail);

Router.get('/new', userController.auth, productoController.getNew);

Router.get(
  '/vista-test/:cant?',
  userController.auth,
  productoController.vistaTest,
);

Router.get('/editar/:id', productoController.getEditarId);

Router.post('/crear', productoController.createProductos);

Router.delete('/eliminar/:id', productoController.deleteProductos);

Router.put('/actualizar/:id', productoController.updateProductos);

Router.get('/sala-products', productoController.getSala);*/

var productoRouter = Router;
exports.productoRouter = productoRouter;
import express from 'express';
const Router = express.Router();
import { productoController } from '../modulos/productos/rutasProductos';
import methodOverride from 'method-override';
import { userController } from '../modulos/users/rutasUser';
//Inicializaciones

//Rutas

Router.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }),
);

Router.get('/listar', userController.auth, productoController.getAllproductos);

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

Router.post('/crear', userController.auth, productoController.createProductos);

Router.delete(
  '/eliminar/:id',
  userController.auth,
  productoController.deleteProductos,
);

Router.put(
  '/actualizar/:id',
  userController.auth,
  productoController.updateProductos,
);

Router.get('/sala-products', productoController.getSala);

export default Router;

import express from 'express';
const Router = express.Router();
import { productoController, userController } from '../controllers';
import methodOverride from 'method-override';
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

Router.get('/listar/:id?', productoController.getAllproductos);

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

Router.get('/sala-products', productoController.getSala);

export const productoRouter = Router;

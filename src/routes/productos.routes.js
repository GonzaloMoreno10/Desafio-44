import express from 'express';
const Router = express.Router();
import { productoController } from '../controllers/productos.controller';
import { productosRepository } from '../repository/productos.repository';
import { auth } from '../middlewares/autenticacion';
import methodOverride from 'method-override';
import { EmailService } from '../services/ethereal';
import { ETHEREAL_EMAIL } from '../config/venv';
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

Router.get('/listar', productoController.getProductPagination);

Router.get('/listar/:id', auth, productoController.getProductosByid);

Router.get('/vista', auth, async (req, res) => {
  let products = await productosRepository.getAllproductos();
  let firstLogin = req.user.firstLogin;
  console.log(products);
  res.render('products/allProducts', { products, firstLogin });
});

Router.get('/detail/:id', auth, async (req, res) => {
  let { id } = req.params;
  let prod = await productosRepository.getProductosById(id);
  console.log(prod);
  res.render('products/detail', prod);
});

Router.get('/new', auth, (req, res) => {
  res.render('products/newProduct');
});

Router.get('/vista-test/:cant?', auth, async (req, res) => {
  let products = await productosRepository.getRandomProductos(req.params.cant);
  console.log(products);
  res.render('products/allProducts', { products });
});

Router.get('/editar/:id', async (req, res) => {
  let id = req.params.id;
  let producto = await productosRepository.getProductosById(id);
  res.render('products/edit', { producto });
});

Router.post('/crear', auth, productoController.createProductos);

Router.delete('/eliminar/:id', auth, productoController.deleteProductos);

Router.put('/actualizar/:id', auth, productoController.updateProductos);

Router.get('/sala-products', auth, async (req, res) => {
  let products = await productosRepository.getAllproductos();
  res.render('products/sala', { products });
});

export default Router;

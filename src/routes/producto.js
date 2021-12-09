import express from 'express';
const Router = express.Router();
import { productoController } from '../controllers';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { GRAPHIQL } from '../config/venv';

const start = () => {
  const schema = buildSchema(
    `type Query{
      productos:[productos]
    }
    type Mutation{
      createProducto(
        title: String,
        price: Int,
        date: String,
        stock: Int,
        code: Int,
        description: String,
        image: String
      ):productos,
      updateProducto(
        _id: String!,
        title: String!,
        price: Int!
      ):productos,
      deleteProducto(
        _id: String!
      ):productos
    },
    type productos{
        _id: String!,
        title: String,
        price: Int,
        date: String,
        stock: Int,
        code: Int,
        description: String,
        image: String
    }`,
  );
  const root = {
    productos: productoController.getAllproductos(),
    createProducto: (title, price, date, stock, code, description, image) =>
      productoController.createProductos(
        title,
        price,
        date,
        stock,
        code,
        description,
        image,
      ),
    updateProducto: (_id, productos) =>
      productoController.updateProductos(_id, productos),
    deleteProducto: _id => productoController.deleteProductos(_id),
  };

  console.log('Me estoy ejecutando');
  return graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: GRAPHIQL,
  });
};

const grapqhHTTPS = start();

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

export const productoRouter = Router;

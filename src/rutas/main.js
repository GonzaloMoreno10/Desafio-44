import { Router } from 'express';
import productoRoute from './productos.routes';
import userRoute from './users.routes';
import carritoRoute from './carrito.route';
//import processRoute from './process.route'
import printProcessInfo from '../others/process/processInfo';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import { graphQLMainSchema } from '../modulos/productos/graphqlProducts';
import axiosRoute from './axios';

const router = Router();

router.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQLMainSchema,
    graphiql: true,
  }),
);

router.use('/axios', axiosRoute);

router.use('/productos', productoRoute);

router.use('/users', userRoute);

router.use('/carrito', carritoRoute);

router.get('/processInfo', (req, res) => {
  let data = printProcessInfo();
  res.render('processInfo', { data });
});

export default router;

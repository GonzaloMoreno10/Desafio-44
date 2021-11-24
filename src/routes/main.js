import { Router } from 'express';
import { productoRouter } from './producto';
import { userRouter } from './users';
import { carritoRouter } from './carrito';
import printProcessInfo from '../others/process/processInfo';
import { axiosRouter } from './axios';

const router = Router();

router.use('/axios', axiosRouter);

router.use('/productos', productoRouter);

router.use('/users', userRouter);

router.use('/carrito', carritoRouter);

router.get('/processInfo', (req, res) => {
  let data = printProcessInfo();
  res.render('processInfo', { data });
});

export const mainRouter = router;

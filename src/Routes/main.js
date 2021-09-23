import {Router} from 'express';
import productosController from './productos.routes';

const router = Router();

router.use('/productos',productosController);

export default router;
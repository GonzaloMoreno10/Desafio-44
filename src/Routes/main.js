import {Router} from 'express';
import productoRoute from './productos.routes';
import userRoute from './users.routes'
import{auth,authAdmin} from '../middlewares/autenticacion'
const router = Router();

router.use('/productos',productoRoute);

router.use('/users',userRoute)

export default router;
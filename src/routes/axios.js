import { Router } from 'express';
import { axiosClient } from '../controllers';

const router = Router();

router.get('/axiosProducts', axiosClient.getProductos);

router.post('/axiosProducts', axiosClient.setProducto);

router.delete('/axiosProducts/:id', axiosClient.delProducto);

router.put('/axiosProducts/:id', axiosClient.updateProducto);

export const axiosRouter = router;

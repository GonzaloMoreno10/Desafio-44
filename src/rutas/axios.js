import { Router } from 'express';
import { axiosClient } from '../modulos/axios/routesAxios';

const router = Router();

router.get('/axiosProducts', axiosClient.getProductos);

router.post('/axiosProducts', axiosClient.setProducto);

router.delete('/axiosProducts/:id', axiosClient.delProducto);

router.put('/axiosProducts/:id', axiosClient.updateProducto);

export default router;

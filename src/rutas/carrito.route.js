import { Router } from 'express';
import { carritoController } from '../modulos/carrito/rutasCarrito';
const router = Router();

router.get('/:id?', carritoController.find);

export default router;

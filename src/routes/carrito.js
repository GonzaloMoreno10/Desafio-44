import { Router } from 'express';
import { carritoController } from '../controllers';
const router = Router();

router.get('/:id?', carritoController.find);

export const carritoRouter = router;

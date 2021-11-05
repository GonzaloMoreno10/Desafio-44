import { Router } from "express";
import { carritoController } from "../controllers/carrito.controller";
const router = Router();

router.get('/:id?',carritoController.find);

/*router.post('/',carritoController.create);

router.delete('/',carritoController.delete);*/

export default router;
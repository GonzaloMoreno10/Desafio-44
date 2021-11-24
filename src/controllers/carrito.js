import { daoSelect } from '../config/datasourceSetting';
class CarritoController {
  async find(req, res) {
    let { id } = req.params;
    if (id) {
      let data = await daoSelect.findAllCarrito(id);
      res.status(201).json(data);
    } else {
      let data = await daoSelect.findAllCarrito();
      res.status(200).json(data);
    }
  }
}

export const carritoController = new CarritoController();

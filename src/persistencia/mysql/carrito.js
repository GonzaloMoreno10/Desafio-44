import { createConnection } from '../../others/mysql';

export class CarritoDao {
  async findAll(userId) {
    let connection = await createConnection();
    let data = await connection.query(
      `sselect p.* from carritos c ,carrito_productos cp ,productos p
      where c.id  = cp.id_carrito 
      and p.id = cp.id_producto 
      and userId =  ${userId}`,
    );
    return data[0];
  }
}
export const carritoDao = new CarritoDao();

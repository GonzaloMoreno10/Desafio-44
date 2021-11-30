import { createConnection } from '../../others/mysql';
export class ProductoDao {
  createConnection;

  async getAllproductos() {
    let connection = await createConnection();
    let data = await connection.query('select * from productos');
    return data[0];
  }

  async getProductosById(id) {
    let connection = await createConnection();
    let data = await connection.query(
      'select * from productos where id = ' + id,
    );
    return data[0];
  }

  async createProducto(producto) {
    let connection = await createConnection();
    let data = await connection.query(
      `insert into productos (title,description,code,image,price,stock,enabled) values('${producto.title}','${producto.description}',${producto.code},'${producto.image}',${producto.price},${producto.stock},1)`,
    );
    console.log(data);
    return data[0];
  }

  async update(id, producto) {
    let connection = await createConnection();
    let data =
      await connection.query(`update productos set title = ${producto.title},description = ${producto.description},
    code = ${producto.code},image = ${producto.image}, price = ${producto.price},stock = ${producto.stock} where id = ${id}`);
    return data[0];
  }

  async delete(id) {
    let connection = await createConnection();
    let data = await connection.query(`delete from productos where id = ${id}`);
    return data[0];
  }
}

export const productoRepository = new ProductoDao();

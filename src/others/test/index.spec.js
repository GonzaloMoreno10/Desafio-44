import { Server } from '../../app';
import request from 'supertest';

let productoCreado;
const producto = {
  title: 'Agregado desde AXios',
  price: 100,
  stock: 100,
  code: 150,
  description: 'asdsad',
  image: 'asdasd',
};
describe('GET /api/productos/listar', () => {
  test('Deberia responder con estado 200', async () => {
    const response = await request(Server).get('/api/productos/listar').send();
    expect(response.statusCode).toBe(201);
  });
  test('Deberia responder un arreglo de productos', async () => {
    const response = await request(Server).get('/api/productos/listar').send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('POST /api/productos/crear', () => {
  test('Deberia responder un 200', async () => {
    const response = await request(Server)
      .post('/api/productos/crear')
      .send(producto);
    expect(response.statusCode).toBe(200);
  });
  test('Deberia responder un result producto creado', async () => {
    const response = await request(Server)
      .post('/api/productos/crear')
      .send(producto);
    productoCreado = response.body.id;
    expect(response.body.result).toEqual(
      expect.stringContaining('Producto creado'),
    );
  });
  test('Deberia responder un 500', async () => {
    const response = await request(Server).post('/api/productos/crear').send();
    expect(response.statusCode).toBe(500);
  });
});

describe('UPDATE /api/productos/actualizar', () => {
  test('Deberia responder un 404', async () => {
    const response = await request(Server)
      .put('/api/productos/actualizar')
      .send();
    expect(response.statusCode).toBe(404);
  });
  test('Deberia responder un 500', async () => {
    const response = await request(Server)
      .put(`/api/productos/actualizar/${productoCreado}`)
      .send();
    expect(response.statusCode).toBe(500);
  });
  test('Deberia responder un 200', async () => {
    const response = await request(Server)
      .put(`/api/productos/actualizar/${productoCreado}`)
      .send(producto);
    expect(response.statusCode).toBe(200);
  });
  test('Deberia responder un producto actualizado', async () => {
    const response = await request(Server)
      .put(`/api/productos/actualizar/${productoCreado}`)
      .send(producto);
    expect(response.body).toEqual('Producto actualizado');
  });
});

describe('DEL /api/productos/eliminar', () => {
  test('Deberia responder un 200', async () => {
    const response = await request(Server)
      .delete(`/api/productos/eliminar/${productoCreado}`)
      .send();
    expect(response.statusCode).toBe(200);
  });

  test('Deberia responder un 404', async () => {
    const response = await request(Server)
      .delete(`/api/productos/eliminar/`)
      .send();
    expect(response.statusCode).toBe(404);
  });
});

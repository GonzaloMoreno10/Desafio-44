"use strict";

var _app = require("../../app");

var _supertest = _interopRequireDefault(require("supertest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var productoCreado;
var producto = {
  title: 'Agregado desde AXios',
  price: 100,
  stock: 100,
  code: 150,
  description: 'asdsad',
  image: 'asdasd'
};
describe('GET /api/productos/listar', () => {
  test('Deberia responder con estado 200', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).get('/api/productos/listar').send();
    expect(response.statusCode).toBe(201);
  }));
  test('Deberia responder un arreglo de productos', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).get('/api/productos/listar').send();
    expect(response.body).toBeInstanceOf(Array);
  }));
});
describe('POST /api/productos/crear', () => {
  test('Deberia responder un 200', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).post('/api/productos/crear').send(producto);
    expect(response.statusCode).toBe(200);
  }));
  test('Deberia responder un result producto creado', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).post('/api/productos/crear').send(producto);
    productoCreado = response.body.id;
    expect(response.body.result).toEqual(expect.stringContaining('Producto creado'));
  }));
  test('Deberia responder un 500', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).post('/api/productos/crear').send();
    expect(response.statusCode).toBe(500);
  }));
});
describe('UPDATE /api/productos/actualizar', () => {
  test('Deberia responder un 404', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).put('/api/productos/actualizar').send();
    expect(response.statusCode).toBe(404);
  }));
  test('Deberia responder un 500', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).put("/api/productos/actualizar/".concat(productoCreado)).send();
    expect(response.statusCode).toBe(500);
  }));
  test('Deberia responder un 200', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).put("/api/productos/actualizar/".concat(productoCreado)).send(producto);
    expect(response.statusCode).toBe(200);
  }));
  test('Deberia responder un producto actualizado', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).put("/api/productos/actualizar/".concat(productoCreado)).send(producto);
    expect(response.body).toEqual('Producto actualizado');
  }));
});
describe('DEL /api/productos/eliminar', () => {
  test('Deberia responder un 200', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).delete("/api/productos/eliminar/".concat(productoCreado)).send();
    expect(response.statusCode).toBe(200);
  }));
  test('Deberia responder un 404', /*#__PURE__*/_asyncToGenerator(function* () {
    var response = yield (0, _supertest.default)(_app.Server).delete("/api/productos/eliminar/").send();
    expect(response.statusCode).toBe(404);
  }));
});
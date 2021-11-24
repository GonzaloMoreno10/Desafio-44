"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axiosClient = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class AxiosClient {
  getProductos(req, res) {
    return _asyncToGenerator(function* () {
      var urlProducts = 'http://localhost:8080/api/productos/listar';
      var productos = yield _axios.default.get(urlProducts);
      return res.send(productos.data);
    })();
  }

  setProducto(req, res) {
    return _asyncToGenerator(function* () {
      var url = 'http://localhost:8080/api/productos/crear';
      var {
        title,
        price,
        stock,
        code,
        description,
        image
      } = req.body;
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      var body = {
        title: title,
        price: price,
        stock: stock,
        code: code,
        description: description,
        image: image
      };
      var result = yield _axios.default.post(url, body, config);
      return res.send(result.data);
    })();
  }

  delProducto(req, res) {
    return _asyncToGenerator(function* () {
      var {
        id
      } = req.params;
      var url = "http://localhost:8080/api/productos/eliminar/".concat(id);

      try {
        var response = yield _axios.default.delete(url);
        res.json(response.data);
      } catch (err) {
        return new Error(err);
      }
    })();
  }

  updateProducto(req, res) {
    return _asyncToGenerator(function* () {
      var {
        id
      } = req.params;
      var {
        title,
        price,
        stock,
        code,
        description,
        image
      } = req.body;
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      var body = {
        title: title,
        price: price,
        stock: stock,
        code: code,
        description: description,
        image: image
      };
      var url = "http://localhost:8080/api/productos/actualizar/".concat(id);
      var response = yield _axios.default.put(url, body, config);
      return res.json(response.data);
    })();
  }

}

var axiosClient = new AxiosClient();
exports.axiosClient = axiosClient;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.products = void 0;

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

var products = cant => {
  var productos = [];

  for (var i = 0; i < cant; i++) {
    var prod = {
      title: _faker.default.commerce.productName(),
      price: _faker.default.commerce.price(),
      thumbnail: _faker.default.image.image()
    }; //console.log(prod);

    productos.push(prod);
  }

  return productos;
};

exports.products = products;
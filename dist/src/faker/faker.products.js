"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productosFake = void 0;

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

var productosFake = cant => {
  var products = [];
  console.log(cant);

  for (var i = 0; i < cant; i++) {
    var prod = {
      _id: i + 1,
      title: _faker.default.commerce.productName(),
      price: _faker.default.commerce.price(),
      description: _faker.default.commerce.productName(),
      image: _faker.default.image.avatar()
    };
    products.push(prod);
  }

  return products;
};

exports.productosFake = productosFake;
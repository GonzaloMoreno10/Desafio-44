"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _productos = _interopRequireDefault(require("./productos.routes"));

var _users = _interopRequireDefault(require("./users.routes"));

var _carrito = _interopRequireDefault(require("./carrito.route"));

var _processInfo = _interopRequireDefault(require("../others/process/processInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import processRoute from './process.route'
var router = (0, _express.Router)();
router.use('/productos', _productos.default);
router.use('/users', _users.default);
router.use('/carrito', _carrito.default);
router.get('/processInfo', (req, res) => {
  var data = (0, _processInfo.default)();
  res.render('processInfo', {
    data
  });
});
var _default = router;
exports.default = _default;
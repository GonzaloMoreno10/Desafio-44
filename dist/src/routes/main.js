"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainRouter = void 0;

var _express = require("express");

var _producto = require("./producto");

var _users = require("./users");

var _carrito = require("./carrito");

var _processInfo = _interopRequireDefault(require("../others/process/processInfo"));

var _axios = require("./axios");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/axios', _axios.axiosRouter);
router.use('/productos', _producto.productoRouter);
router.use('/users', _users.userRouter);
router.use('/carrito', _carrito.carritoRouter);
router.get('/processInfo', (req, res) => {
  var data = (0, _processInfo.default)();
  res.render('processInfo', {
    data
  });
});
var mainRouter = router;
exports.mainRouter = mainRouter;
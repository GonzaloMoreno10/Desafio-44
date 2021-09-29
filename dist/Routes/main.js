"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _productos = _interopRequireDefault(require("./productos.routes"));

var _users = _interopRequireDefault(require("./users.routes"));

var _autenticacion = require("../middlewares/autenticacion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/productos', _productos.default);
router.use('/users', _users.default);
var _default = router;
exports.default = _default;
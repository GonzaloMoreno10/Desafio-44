"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _productos = _interopRequireDefault(require("./productos.routes"));

var _users = _interopRequireDefault(require("./users.routes"));

var _processInfo = _interopRequireDefault(require("../process/processInfo"));

var _child_process = require("child_process");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import processRoute from './process.route'
var scriptPath = _path.default.resolve(__dirname, '../process/calculoRandoms.js');

console.log(scriptPath);
var router = (0, _express.Router)();
router.use('/productos', _productos.default);
router.use('/users', _users.default);
router.get('/processInfo', (req, res) => {
  var data = (0, _processInfo.default)();
  res.render("processInfo", {
    data
  });
});
router.get('/randoms', (req, res) => {
  var {
    cantidad
  } = req.query;
  var computo = (0, _child_process.fork)(scriptPath);
  computo.send({
    mensaje: 'start',
    cantidad: cantidad
  });
  computo.on('message', calc => {
    res.json(calc);
  });
});
var _default = router;
exports.default = _default;
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

var router = (0, _express.Router)();
router.use('/productos', _productos.default);
router.use('/users', _users.default);
router.get('/processInfo', (req, res) => {
  var data = (0, _processInfo.default)();
  console.log(data);
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
router.get('/cluster', (req, res) => {
  res.json({
    pid: process.pid,
    msg: 'HOLA'
  });
});
router.get('/slow', function (req, res) {
  var generarRandoms = cantidad => {
    var array = [];

    for (var i = 0; i < cantidad; i++) {
      array.push(Math.floor(Math.random() * (1000 - 1)) + 1);
    }

    return array;
  };

  var calcular = function calcular() {
    var cantidad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000000;
    var x = generarRandoms(cantidad);
    var indices = new Array(x.length);
    var resultados = [];
    indices.fill(0);

    for (var i = 0; i < indices.length; i++) {
      for (var j = 0; j < x.length; j++) {
        if (i == x[j]) {
          indices[i] = indices[i] + 1;
        }
      }

      resultados.push({
        cantidad: indices[i],
        numero: x[i]
      });
    }
  };

  calcular();
  res.json(resultados);
});
router.get('/muerte', (req, res) => {
  res.json({
    msg: 'OK'
  });
  console.log("PID => ".concat(process.pid, " will die"));
  process.exit(0);
});
var _default = router;
exports.default = _default;
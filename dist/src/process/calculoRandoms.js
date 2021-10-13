"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = printProcessInfo;
exports.calcular = void 0;

function printProcessInfo() {
  var obj = {
    cwd: process.cwd(),
    pid: process.pid,
    version: process.version,
    title: process.title,
    platform: process.platform,
    memory: JSON.stringify(process.memoryUsage())
  };
  return obj;
}

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

  return resultados;
};

exports.calcular = calcular;
process.on('message', msg => {
  if (msg.mensaje == 'start') {
    console.log('Start calculo');
    var res = calcular(msg.cantidad);

    if (process && process.send) {
      process.send(res);
    }
  }
});
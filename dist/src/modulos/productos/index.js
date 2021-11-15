"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dalProductos = require("./dalProductos");

Object.keys(_dalProductos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dalProductos[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dalProductos[key];
    }
  });
});

var _rutasProductos = require("./rutasProductos");

Object.keys(_rutasProductos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _rutasProductos[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rutasProductos[key];
    }
  });
});

var _serviciosProductos = require("./serviciosProductos");

Object.keys(_serviciosProductos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _serviciosProductos[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _serviciosProductos[key];
    }
  });
});
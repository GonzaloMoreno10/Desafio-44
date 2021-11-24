"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _carrito = require("./carrito");

Object.keys(_carrito).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _carrito[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _carrito[key];
    }
  });
});

var _main = require("./main");

Object.keys(_main).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _main[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _main[key];
    }
  });
});

var _mensaje = require("./mensaje");

Object.keys(_mensaje).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mensaje[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mensaje[key];
    }
  });
});

var _productos = require("./productos");

Object.keys(_productos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _productos[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _productos[key];
    }
  });
});

var _users = require("./users");

Object.keys(_users).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _users[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _users[key];
    }
  });
});
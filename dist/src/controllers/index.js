"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require("./axios");

Object.keys(_axios).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _axios[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _axios[key];
    }
  });
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

var _mensajes = require("./mensajes");

Object.keys(_mensajes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mensajes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mensajes[key];
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
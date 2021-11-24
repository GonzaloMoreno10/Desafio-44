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

var _producto = require("./producto");

Object.keys(_producto).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _producto[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _producto[key];
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
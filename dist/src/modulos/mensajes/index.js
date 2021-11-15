"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviciosMensaje = require("./serviciosMensaje");

Object.keys(_serviciosMensaje).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _serviciosMensaje[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _serviciosMensaje[key];
    }
  });
});

var _rutasMensaje = require("./rutasMensaje");

Object.keys(_rutasMensaje).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _rutasMensaje[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rutasMensaje[key];
    }
  });
});

var _dalMensaje = require("./dalMensaje");

Object.keys(_dalMensaje).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dalMensaje[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dalMensaje[key];
    }
  });
});
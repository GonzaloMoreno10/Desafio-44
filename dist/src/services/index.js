"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _database = require("./database");

Object.keys(_database).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _database[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _database[key];
    }
  });
});

var _mongo = require("./mongo");

Object.keys(_mongo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mongo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mongo[key];
    }
  });
});

var _session = require("./session");

Object.keys(_session).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _session[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _session[key];
    }
  });
});

var _socketIo = require("./socketIo");

Object.keys(_socketIo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _socketIo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _socketIo[key];
    }
  });
});
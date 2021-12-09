"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.argsConfig = void 0;
var argsConfig = {
  alias: {
    td: 'tipo_ds',
    p: 'port',
    e: 'environment'
  },
  default: {
    PORT: 3000,
    tipo_ds: 1,
    environment: 'dev'
  }
};
exports.argsConfig = argsConfig;
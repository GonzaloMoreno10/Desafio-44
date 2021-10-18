"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = printProcessInfo;

var numCpus = require('os').cpus().length;

function printProcessInfo() {
  var obj = {
    cwd: process.cwd(),
    pid: process.pid,
    version: process.version,
    title: process.title,
    platform: process.platform,
    procesadores: numCpus,
    memory: JSON.stringify(process.memoryUsage())
  };
  return obj;
}
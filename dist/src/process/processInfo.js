"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = printProcessInfo;

var _ = require("..");

var numCpus = require('os').cpus().length;

console.log(_.PORT);

function printProcessInfo() {
  var obj = {
    cwd: process.cwd(),
    pid: process.pid,
    version: process.version,
    title: process.title,
    platform: process.platform,
    procesadores: numCpus,
    puerto: _.PORT,
    memory: JSON.stringify(process.memoryUsage())
  };
  return obj;
}
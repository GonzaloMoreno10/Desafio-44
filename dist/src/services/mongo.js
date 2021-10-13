"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.con = void 0;

var mongoose = require('mongoose');

var con = mongoose.connect('mongodb://localhost/ecommerce2').then(db => {
  console.log("db is conected");
}).catch(err => {
  console.error(err);
});
exports.con = con;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.con = void 0;

var mongoose = require('mongoose');

var con = mongoose.connect("mongodb+srv://admin:admin@cluster0.6d6g8.mongodb.net/desafios?retryWrites=true&w=majority").then(db => {}).catch(err => {
  console.error(err);
});
exports.con = con;
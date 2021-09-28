"use strict";

var mongoose = require('mongoose');

var {
  Schema
} = mongoose;
var ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  },
  stock: {
    type: Number
  },
  code: {
    type: Number
  },
  description: {
    type: String
  },
  image: {
    type: String
  }
});
module.exports = mongoose.model('productos', ProductSchema);
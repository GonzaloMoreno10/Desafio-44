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
  thumbnail: {
    type: String,
    default: Date.now
  }
});
module.exports = mongoose.model('productos', ProductSchema);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductTC = exports.ProductoModel = void 0;

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

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
var ProductoModel = mongoose.model('productos', ProductSchema);
exports.ProductoModel = ProductoModel;
var ProductTC = (0, _graphqlComposeMongoose.composeWithMongoose)(ProductoModel);
exports.ProductTC = ProductTC;
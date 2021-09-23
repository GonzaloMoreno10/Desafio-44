"use strict";

var mongoose = require('mongoose');

var {
  Schema
} = mongoose;
var mensajesSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  texto: {
    type: String,
    default: Date.now
  }
});
module.exports = mongoose.model('mensajes', mensajesSchema);
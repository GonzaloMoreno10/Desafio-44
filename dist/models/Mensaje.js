"use strict";

var mongoose = require('mongoose');

var {
  Schema
} = mongoose;
var mensajesSchema = new Schema({
  author: {
    id: String,
    nombre: String,
    apellido: String,
    edad: Number,
    alias: String,
    avatar: String
  },
  texto: String,
  fecha: Date
});
module.exports = mongoose.model('mensajes', mensajesSchema);
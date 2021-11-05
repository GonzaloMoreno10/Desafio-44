"use strict";

var mongoose = require('mongoose');

var {
  Schema
} = mongoose;
var carritoSchema = new Schema({
  author: {
    id: String,
    user_id: String,
    productos: [Object]
  }
});
module.exports = mongoose.model('mensajes', mensajesSchema);
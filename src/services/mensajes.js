const mongoose = require('mongoose');
const { Schema } = mongoose;

const mensajesSchema = new Schema({
  author: {
    id: String,
    nombre: String,
    apellido: String,
    edad: Number,
    alias: String,
    avatar: String,
  },
  texto: String,
  fecha: Date,
});

module.exports = mongoose.model('mensajes', mensajesSchema);

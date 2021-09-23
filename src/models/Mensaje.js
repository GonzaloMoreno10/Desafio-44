const mongoose = require('mongoose');
const {Schema} = mongoose;

const mensajesSchema = new Schema({
    email:{type:String,required:true},
    fecha:{type:Date,required:true},
    texto:{type:String,default:Date.now},
})

module.exports = mongoose.model('mensajes',mensajesSchema);

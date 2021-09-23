const mongoose = require('mongoose');
const {Schema} = mongoose;

const  ProductSchema = new Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    thumbnail:{type:String,default:Date.now},
})

module.exports = mongoose.model('productos',ProductSchema);




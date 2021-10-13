import mongoosePaginate from 'mongoose-paginate-v2'
const mongoose = require('mongoose');
const {Schema} = mongoose;

const  ProductSchema = new Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    date:{type:String,default:Date.now},
    stock:{type:Number},
    code:{type:Number},
    description:{type:String},
    image:{type:String}
})

ProductSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('productos',ProductSchema);




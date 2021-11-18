const mongoose = require('mongoose');
import { composeWithMongoose } from 'graphql-compose-mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: String, default: Date.now },
  stock: { type: Number },
  code: { type: Number },
  description: { type: String },
  image: { type: String },
});

export const ProductoModel = mongoose.model('productos', ProductSchema);
export const ProductTC = composeWithMongoose(ProductoModel);

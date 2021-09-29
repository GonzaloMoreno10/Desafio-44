"use strict";

var mongoose = require('mongoose');

var {
  Schema
} = mongoose;
var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  //password:{type:String,required:true},
  lastLogin: {
    type: Date
  }
});
module.exports = mongoose.model('users', UserSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const {Schema} = mongoose;

const  UserSchema = new Schema({
    user:{type:String,required:true},
    password:{type:String,required:true},
    lastLogin:{type:Date},
    email:{type:String},
    firstLogin:{type:Boolean}
})

UserSchema.methods.encryptPassword =  async (password)=>{
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password,salt);
    return hash;
};

UserSchema.methods.matchPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    console.log(compare)
    return compare;
  };

module.exports = mongoose.model('users',UserSchema);




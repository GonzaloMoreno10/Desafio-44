let mongoose = require('mongoose')
export const con = mongoose.connect('mongodb://localhost/ecommerce')
.then(db=>{
    console.log("db is conected")
})
.catch(err=>{
    console.error(err)
});
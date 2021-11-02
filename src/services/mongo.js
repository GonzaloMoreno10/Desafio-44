let mongoose = require('mongoose')
export const con = mongoose.connect(`mongodb+srv://admin:admin@cluster0.6d6g8.mongodb.net/ecommerce?retryWrites=true&w=majority`)
.then(db=>{
    //console.log("db is conected")
})
.catch(err=>{
    console.error(err)
});

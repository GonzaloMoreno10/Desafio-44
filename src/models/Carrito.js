const mongoose = require('mongoose');
const {Schema} = mongoose;

const carritoSchema = new Schema({
    author:{id: String,
            user_id: String,
            productos:[Object]
        },
})

module.exports = mongoose.model('mensajes',mensajesSchema);

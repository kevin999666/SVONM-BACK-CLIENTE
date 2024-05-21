const mongoose = require('mongoose');

const ContactoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    telefono:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    mensaje:{
        type: String,
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Contacto', ContactoSchema);
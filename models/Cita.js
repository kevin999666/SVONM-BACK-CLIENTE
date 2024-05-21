const mongoose = require('mongoose');

const CitaSchema = mongoose.Schema({
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
    fecha:{
        type: String,
        required:true
    },
    tiempo:{
        type: String,
        required:true
    },
    comentario:{
        type: String,
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Cita', CitaSchema);
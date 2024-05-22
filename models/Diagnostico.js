const mongoose = require('mongoose');

const DiagnosticoSchema = mongoose.Schema({
    fila:{
        type: String,
        required:true
    },
    malestar:{
        type: String,
        required:true
    },
    procedimiento:{
        type: String,
        required:true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Diagnostico', DiagnosticoSchema);
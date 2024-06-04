const mongoose = require('mongoose');

const ProbadorSchema = mongoose.Schema({
    imagen:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Probador', ProbadorSchema);
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

//Creamos el servidor
const app = express();

//Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json())

app.use('/api/citas', require('./routes/cita'));
app.use('/api/contactos', require('./routes/contacto'));
app.use('/api/catalogos', require('./routes/catalogo'));
app.use('/api/diagnosticos', require('./routes/diagnostico'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})
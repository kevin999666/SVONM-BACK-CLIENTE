//Ruta de la cita
const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController')

//api/citas
router.post('/', citaController.crearCita);

module.exports = router;
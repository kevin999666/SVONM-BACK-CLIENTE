//Ruta del contacto
const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController')

//api/contacto
router.post('/', contactoController.crearContacto);

module.exports = router;
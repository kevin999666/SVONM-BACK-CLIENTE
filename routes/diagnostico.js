//Ruta del diagnostico
const express = require('express');
const router = express.Router();
const diagnosticoController = require('../controllers/diagnosticoController')

//api/diagnosticos
router.post('/', diagnosticoController.crearDiagnostico);

module.exports = router;
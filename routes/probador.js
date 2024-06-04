const express = require('express');
const router = express.Router();
const probadorController = require('../controllers/probadorController');



//api/diagnosticos
router.post('/', probadorController.crearProbador);

module.exports = router;
//Ruta del catalogo
const express = require('express');
const router = express.Router();
const catalogoController = require('../controllers/catalogoController')

//api/catalogos
router.post('/', catalogoController.crearCatalogo);
router.get('/', catalogoController.obtenerCatalogos);
router.get('/:id', catalogoController.obtenerCatalogo);

module.exports = router;
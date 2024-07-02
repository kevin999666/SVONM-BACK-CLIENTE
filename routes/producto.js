//Ruta del producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')

//api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:id', productoController.obtenerProducto);

module.exports = router;
const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    codigo: {
      type: String,
      required: true,
      unique: true,
    },
    tipoProducto: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    imagen: {
      type: String,
    },
    marca: {
      type: String,
      required: true
    },
    proveedor: {
      type: String,
      required: true
    },
    fechaCreacion: {
      type: Date,
      default: Date.now(),
    }
  });

module.exports = mongoose.model('Producto', ProductoSchema);
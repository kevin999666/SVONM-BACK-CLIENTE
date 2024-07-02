const Producto = require("../models/Producto");


exports.crearProducto = async (req, res) => {
    try {
        let producto;

        //Creamos el producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {

    try {

        const productos = await Producto.find().populate('marca').populate();
        res.json(productos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'No existe el producto'})
        }

        
        res.json(producto)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
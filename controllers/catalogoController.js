const Catalogo = require("../models/Catalogo");


exports.crearCatalogo = async (req, res) => {
    try {
        let catalogo;

        //Creamos el catalogo
        catalogo = new Catalogo(req.body);

        await catalogo.save();
        res.send(catalogo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCatalogos = async (req, res) => {

    try {

        const catalogos = await Catalogo.find();
        res.json(catalogos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCatalogo = async (req, res) => {

    try {
        let catalogo = await Catalogo.findById(req.params.id);

        if(!catalogo){
            res.status(404).json({msg: 'No existe el producto'})
        }

        
        res.json(catalogo)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
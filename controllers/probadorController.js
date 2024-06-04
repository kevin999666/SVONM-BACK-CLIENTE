const Probador = require("../models/Probador");

exports.crearProbador = async (req, res) => {
    try {
        let probador;

        //Creamos el diagnostico
        probador = new Probador(req.body);

        await probador.save();
        res.send(probador);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
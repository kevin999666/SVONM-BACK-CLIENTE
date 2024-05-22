const Diagnostico = require("../models/Diagnostico");


exports.crearDiagnostico = async (req, res) => {
    try {
        let diagnostico;

        //Creamos el diagnostico
        diagnostico = new Diagnostico(req.body);

        await diagnostico.save();
        res.send(diagnostico);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
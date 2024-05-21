const Cita = require("../models/Cita");


exports.crearCita = async (req, res) => {
    try {
        let cita;

        //Creamos una cita
        cita = new Cita(req.body);

        await cita.save();
        res.send(cita);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
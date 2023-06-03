const { Etabli } = require('../models');

const etabliController = {

    listEtabli: async function (_, res) {
        const etablis = await Etabli.findAll();
        // Je recupere toutes les observations
        res.json(etablis);
        //et je renvoi le Json
    },

};

module.exports = etabliController;
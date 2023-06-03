const { Obs } = require('../models');

const obsController = {

    listObs: async function (_, res) {
        const obs = await Obs.findAll();
        // Je recupere toutes les observations
        res.json(obs);
        //et je renvoi le Json
    },

};

module.exports = obsController;

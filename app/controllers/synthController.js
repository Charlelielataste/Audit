const { Synth } = require('../models');

const synthController = {

    listSynth: async function (_, res) {
        const synths = await Synth.findAll();
        // Je recupere toutes les observations
        res.json(synths);
        //et je renvoi le Json
    },

    postBDD: async function (req, res) {
        const { name, score_docu, score_ship, score_stock, score_legume, score_cold, score_hot,
        score_spe, score_distri, score_hygperso, score_hyglocaux, score_trace, score_global, month, year } = req.body;
      
        if (! name || ! score_docu || ! score_ship || ! score_stock || ! score_legume || ! score_legume || ! score_cold || ! score_hot || 
            ! score_spe || ! score_distri || ! score_hygperso || ! score_hyglocaux || ! score_trace || ! score_global || ! month || ! year) { // On autorise pas les content vide ou string vide
          
                return res.status(400).json({ error: "Une erreur s'est produite, un champs ne doit pas être rempli." });
        }
      
        const synth = Synth.build({
          name : name,
          score_docu : score_docu,
          score_ship: score_ship,
          score_stock: score_stock,
          score_legume: score_legume,
          score_cold: score_cold,
          score_hot: score_hot,
          score_spe: score_spe,
          score_distri: score_distri,
          score_hygperso: score_hyglocaux,
          score_hyglocaux: score_hyglocaux,
          score_trace: score_trace,
          score_global: score_global,
          month: month,
          year: year,
        });
        await synth.save();
      
        res.status(201).json(synth);
      }

};

module.exports = synthController;
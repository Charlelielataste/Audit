const { Question } = require('../models');

const questionController = {

    listQuestion: async function (_, res) {
        const questions = await Question.findAll();
        // Je recupere toutes les observations
        res.json(questions);
        //et je renvoi le Json
    },

    listDocu: async function (_, res) {
        const question = await Question.findAll({where : {section : "audit-documentaire"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },

    listLivraison: async function (_, res) {
        const question = await Question.findAll({where : {section : "livraison-reception"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },

    listStockage: async function (_, res) {
        const question = await Question.findAll({where : {section : "stockage-primaire"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },

    listLegumerie: async function (_, res) {
        const question = await Question.findAll({where : {section : "legumerie-deboitage"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },

    listPrepaF: async function (_, res) {
        const question = await Question.findAll({where : {section : "preparations-froides"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },

    listPrepaC: async function (_, res) {
        const question = await Question.findAll({where : {section : "preparations-chaudes"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },

    listPrepaSpe: async function (_, res) {
        const question = await Question.findAll({where : {section : "preparations-specifique"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },

    listDistribution: async function (_, res) {
        const question = await Question.findAll({where : {section : "distribution"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },

    listHygieneP: async function (_, res) {
        const question = await Question.findAll({where : {section : "hygiene-personnel"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },

    listHygieneL: async function (_, res) {
        const question = await Question.findAll({where : {section : "hygiene-locaux"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },

    listTraceT: async function (_, res) {
        const question = await Question.findAll({where : {section : "trace-test"}});
        // Je recupere toutes les observations
        res.json(question);
        //et je renvoi le Json
    },
    
    
    getOneQuestion: async function (req, res) {
        const questionId = parseInt(req.params.id); // On récupère l'ID passé dans la requête
      
        if( isNaN(questionId) ) { // On peut même éviter un appel à la base en vérifiant les user inputs
          res.status(404).json({ error: "Not found. Please verify the provided id." });
          return;
        }
        const question = await Question.findByPk(questionId); // On fetch la question

        if (! question) { // si elle existe pas => 404
        res.status(404).json({ error: "Not found. Please verify the provided id." });
        return; // On arrête la fonction (on pourra se permettre de l'écrire sur la même ligne que le res.json mais il faut comprendre que c'est pour simplement ARRETER la fonction)
        }
        
        res.json(question); // si elle existe => on la retourne
    }

};

module.exports = questionController;
const express = require('express');
const router = express.Router();
const obsController = require('./controllers/obsController');
const etabliController = require('./controllers/etabliController');
const synthController = require('./controllers/synthController');
const questionController = require('./controllers/questionController');
const mainController = require('./controllers/mainController')

// const auth = require('./middlewares/auth');
// const isAdmin = require('./middlewares/isAdmin');

router.get("/",mainController.accueil);

// Affichage page formulaire de login
router.get('/graphique', mainController.graph);
// router.post('/login', sessionController.login);

// Route observation
router.get('/obs', obsController.listObs);

// Route etablissements
router.get('/etablissement', etabliController.listEtabli);

// Route Synthese
router.get('/synthese', synthController.listSynth);
router.post('/synthese', synthController.postBDD)

// Route Trouver une question 
router.get("/question", questionController.listQuestion);
router.get("/question/:id", questionController.getOneQuestion);

//Route pour les differentes questions par section

router.get('/docu', questionController.listDocu);
router.get('/livraison', questionController.listLivraison);
router.get('/stockage', questionController.listStockage);
router.get('/legumerie', questionController.listLegumerie);
router.get('/prepafroides', questionController.listPrepaF);
router.get('/prepachaudes', questionController.listPrepaC);
router.get('/prepaspe', questionController.listPrepaSpe);
router.get('/distribution', questionController.listDistribution);
router.get('/hygieneperso', questionController.listHygieneP);
router.get('/hygienelocaux', questionController.listHygieneL);
router.get('/tracetest', questionController.listTraceT);


module.exports = router;

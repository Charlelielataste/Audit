const mainController = {

    accueil: function (_, res) {
        res.render("index");
        
    },

    graph: (_, res) => {
        res.render('graphique');
    },

};

module.exports = mainController;
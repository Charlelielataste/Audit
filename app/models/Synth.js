const sequelize = require('../database');
const { Model, Sequelize } = require('sequelize');

class Synth extends Model {}
Synth.init({ 
    name:{ 
        type: Sequelize.STRING
    },
    score_docu: {
        type: Sequelize.NUMERIC
    },
    score_ship: {
        type: Sequelize.NUMERIC
    },
    score_stock:{ 
        type: Sequelize.NUMERIC
    },
    score_legume: {
        type: Sequelize.NUMERIC
    },
    score_cold: {
        type: Sequelize.NUMERIC
    },
    score_hot:{ 
        type: Sequelize.NUMERIC
    },
    score_spe: {
        type: Sequelize.NUMERIC
    },
    score_distri: {
        type: Sequelize.NUMERIC
    },
    score_hygperso: {
        type: Sequelize.NUMERIC
    },
    score_hyglocaux: {
        type: Sequelize.NUMERIC
    },
    score_trace:{ 
        type: Sequelize.NUMERIC
    },
    score_global: {
        type: Sequelize.NUMERIC
    },
    month: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.INTEGER
    }
 }, {
    sequelize,
    timestamps: false,
    tableName: "synthese"
});

module.exports = Synth;
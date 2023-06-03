const sequelize = require('../database');
const { Model, Sequelize } = require('sequelize');

class Etabli extends Model {}
Etabli.init({ 
    name:{ 
        type: Sequelize.STRING
    },
 }, {
    sequelize,
    timestamps: false,
    tableName: "etablissement"
});

module.exports = Etabli;
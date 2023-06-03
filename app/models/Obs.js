const sequelize = require('../database');
const { Model, Sequelize } = require('sequelize');

class Obs extends Model {}
Obs.init({ 
    name:{ 
        type: Sequelize.STRING
    },
    score: {
        type: Sequelize.INTEGER
    },
    noaudit: {
        type: Sequelize.TEXT
    }
 }, {
    sequelize,
    timestamps: false,
    tableName: "observation"
});

module.exports = Obs;


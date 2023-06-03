const sequelize = require('../database');
const { Model, Sequelize } = require('sequelize');

class Question extends Model {}
Question.init({ 
    section:{ 
        type: Sequelize.TEXT
    },
    question:{ 
        type: Sequelize.TEXT
    },
    comment: {
        type: Sequelize.TEXT
    },
    pnni: {
        type: Sequelize.INTEGER
    }
 }, {
    sequelize,
    timestamps: false,
    tableName: "question"
});

module.exports = Question;
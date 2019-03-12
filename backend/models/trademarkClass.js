const db = require('../config/database');
const Sequelize = require('sequelize');

const trademarkClass = db.define('trademarkClass', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    RegisteredTrademark: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Class_id: {
        type: Sequelize.INTEGER
    }
})

trademarkClass.sync({ force: false });

module.exports = trademarkClass;
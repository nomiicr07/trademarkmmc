// const mongoose = require('mongoose');

// const trademarkSchema = new mongoose.Schema({
//     no: {
//         type: Number,
//         required: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true
//     }
// });

const Sequelize = require('sequelize');
const db = require('../config/database');

const Trademark = db.define('trademarkCategory', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Trademark: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Description: {
        type: Sequelize.STRING,
    }
});

Trademark.sync({ force: false });

//const Trademark = mongoose.model('Trademark', trademarkSchema);

module.exports = Trademark;
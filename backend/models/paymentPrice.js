const db = require('../config/database');
const Sequelize = require('sequelize');

const PaymentPrice = db.define('paymentprice', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

PaymentPrice.sync({ force: false });
module.exports = PaymentPrice;
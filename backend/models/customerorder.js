const Sequelize = require('sequelize');
const db = require('../config/database');

const Customer_Order = db.define('customer_order', {
    Order_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Customer_id: {
        type: Sequelize.INTEGER,
    },
    Order_status: {
        type: Sequelize.STRING,
    },
    Price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Other_details: {
        type: Sequelize.STRING,
    }
});

Customer_Order.sync({ force: false });

module.exports = Customer_Order;
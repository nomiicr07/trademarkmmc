const Sequelize = require('sequelize');
const db = require('../config/database');
const Lawyer = require('../models/lawyer');
const Trademark = require('../models/trademark');
const Customer = require('../models/user');
const Company = require('../models/company');
const trademarkclass = require('../models/trademarkClass')


const RegisteredTrademark = db.define('registeredtrademark', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Customer_id: {
        type: Sequelize.INTEGER,
        
    },
    Lawyer_id: {
        type: Sequelize.INTEGER,
    },
    Company_id: {
        type: Sequelize.INTEGER
    },
    Classes_id :{
        type: Sequelize.INTEGER,
    },
    Date: {
        type: Sequelize.DATE
    },
    Trademark_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Trademark_File: {
        type: Sequelize.STRING,
    },
    Order_id: {
        type: Sequelize.INTEGER
    },
    Status: {
        type: Sequelize.STRING
    },
    Trademark_No: {
        type: Sequelize.STRING
    }
})
RegisteredTrademark.belongsTo(Lawyer, { foreignKey: 'Lawyer_id' });
RegisteredTrademark.belongsTo(Customer, { foreignKey: 'Customer_id' });
RegisteredTrademark.belongsTo(Company, { foreignKey: 'Company_id' });
RegisteredTrademark.belongsTo(trademarkclass,{foreignKey:'Classes_id'})

RegisteredTrademark.sync({ force: false });
module.exports = RegisteredTrademark;
const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./user');

const Company = db.define('company', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Company_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    User_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Company_Type: {
        type: Sequelize.STRING
    },
    Address: {
        type: Sequelize.STRING
    },
    Telephone: {
        type: Sequelize.STRING
    }
});

Company.sync({ force: false });
Company.belongsTo(User, { foreignKey: 'User_id' });
module.exports = Company;
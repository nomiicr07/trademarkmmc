const Sequelize = require('sequelize');
const db = require('../config/database');

const Lawyer = db.define('lawyer', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Designation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CompanyName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CompanyAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Lawyer.sync({ force: false });

module.exports = Lawyer;
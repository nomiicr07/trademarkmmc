const db = require('../config/database');
const Sequelize = require('sequelize');

const User = db.define('users', {
    Id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false        
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Telephone: {
        type: Sequelize.STRING,
    },
    Role: {
        type: Sequelize.STRING,
    },
    Valid: {
        type: Sequelize.STRING
    }
});

User.sync({ force: false })
module.exports = User;

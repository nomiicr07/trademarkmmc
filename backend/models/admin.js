const db = require('../config/database');
const Sequelize = require('sequelize');

const Admin = db.define('admin', {
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
        unique: true
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Role: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Admin.sync({ force: true });
module.exports = Admin;
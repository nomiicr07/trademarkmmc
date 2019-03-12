const mongoose = require('mongoose');
const Sequelize = require('sequelize');


const classSchema = new mongoose.Schema({
          
    no: {
        type: Number,
        required: true,
        
    
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});
const tradeClasses = mongoose.Schema('Classe', classSchema);

module.exports = tradeClasses;
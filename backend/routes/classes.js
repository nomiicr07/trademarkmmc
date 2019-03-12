const express = require('express');
const trademarkClass = require('../models/trademarkClass');
const router = express.Router();

router.get('/', async (req, res) => {
    const clasess = await trademarkClass.find({});
    res.send(clasess);
});

router.post('/addTrademarkClass', async (req, res) => {
    const classes = await trademarkClass.create({
        
    })
})


module.exports = router;
const paymentPrice = require('../models/paymentPrice');
const router = require('express').Router();
const jwt = require('jsonwebtoken');


router.get('/addpaymenttype', async (req,res) => {
    try {
        let price = await paymentPrice.findAll({ raw: true });
        res.send(price);
    }
    catch (err) {
        console.log('error ', err);
        res.status(500).send({'message': 'error'});
    }
})

module.exports = router;
const Trademark = require('../models/trademark');
const express = require('express');
const stripe = require('stripe');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let trademarks = await Trademark.findAll({ raw: true });
        res.send(trademarks);
    }
    catch (err) {
        console.log('error ', err);
        res.status(500).send({'message': 'error'});
    }
    
})

router.post('/charge', async(req, res) => {
    const amount = 25.00;
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    .then(customer => stripe.charges.create({
        amount,
        description: 'Web Development',
        currency: 'pkr',
        customer: customer.id
    }))
    .then(charge => res.send({'message': 'success'}) )
})

module.exports = router;
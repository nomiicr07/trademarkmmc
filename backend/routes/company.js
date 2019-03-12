const Company = require('../models/company');
const auth = require('../auth/authenticate');
const db = require('../config/database');
const router = require('express').Router();


router.post('/addCompany', async (req, res) => {
    const company = await Company.create({
        Company_Name: req.body.companyName,
        User_id: req.body.user_id
    });

    res.send({ 'message': 'success' })
})


module.exports = router;
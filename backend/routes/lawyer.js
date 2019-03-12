const Lawyer = require('../models/lawyer');
const User = require('../models/user');
const auth = require('../auth/authenticate');
const router = require('express').Router();
const Joi = require('Joi');

router.post('/addLawyer', auth, async (req, res) => {
    try {
        let user = await User.findAll({ limit: 1, raw: true, where: { 
            Email: req.user.Email, 
            Password: req.user.Password 
        }});
        if(!user || user.length < 1) {
            return res.status(401).send({ 'message': 'Invalid Username or Password' });
        }
        const schema = {
            name: Joi.string().required(),
            designation: Joi.string().required(),
            companyName: Joi.string().required(),
            companyAddress: Joi.string().required(),
            email: Joi.string().required().email(),
            password: Joi.string().required()
        }
        const { error } = Joi.validate(req.body, schema);
        if(error) return res.status(400).send(error.details[0].message);
        const lawyer = await Lawyer.create({
            Name: req.body.name,
            Designation: req.body.designation,
            CompanyName: req.body.companyName,
            CompanyAddress: req.body.companyAddress,
            Email: req.body.email,
            Password: req.body.password
        })
        res.send({ message: 'success', data: lawyer });
    } 
    catch(err) {
        res.send({'message': err});
    }
});

router.post('/signin', async (req, res) => {
    try {
        const schema = {
            email: Joi.string().required().email(),
            password: Joi.string().required()
        }
        const { error } = Joi.validate(req.body, schema);
        if(error) return res.send({ 'status': 'failed', 'message': error.details[0].message });
        let lawyer = await Lawyer.findAll({ 
            limit: 1, 
            raw: true, 
            where: {
                Email: req.body.email,
                Password: req.body.password
            }
        });
        if(!lawyer) return res.send({'message': 'failed', err: 'Invalid Email or password'});
        lawyer =  lawyer.pop();
        console.log('sequelize find data is ', lawyer.Password);
        const isPassword = await bcrypt.compare(req.body.password, lawyer.Password);
        if(!isPassword) return res.send({'message': 'failed', 'err': 'Invalid Email or Password'});
        const token = jwt.sign({ user }, 'jwtPrivateKey');
        res.send({
            'message': 'success',
            'token': token
        });
    } catch(err) {
        res.send({ 'message': 'failed', 'error': err })
    }
})

router.post('/signup', async (req, res) => {
    try {

    } catch(err) {
        res.send({ 'message': 'failed', 'error': err })
    }
})

module.exports = router;
const express = require('express');
const User = require('../models/user');
const router = express.Router();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res) => {
    const schema = {
        email: Joi.string().required().email(),
        password: Joi.required()
    }
    const { error } = Joi.validate(req.body, schema);
    if(error) return res.send({'message': 'failed', 'err': error.details[0].message});
    try {
        let user = await User.findAll( {  raw: true, limit:1, where: { Email: req.body.email } });
        if(!user) return res.send({'message': 'failed', err: 'Invalid Email or password'});
        user =  user.pop();
        console.log('sequelize find data is ', user.Password);
        const isPassword = await bcrypt.compare(req.body.password, user.Password);
        if(!isPassword) return res.send({'message': 'failed', 'err': 'Invalid Email or Password'});
        const token = jwt.sign({ user }, 'jwtPrivateKey');
        res.send({
            'message': 'success',
            'token': token
        });
    }
    catch(err) {
         res.status(404).send({'message': 'failed', 'err': err});
    }
   
});

router.post( '/signUp',  async (req, res) => {
   const schema = {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.required(),
        telephone: Joi.required(),
    }
    const { error } = Joi.validate(req.body, schema);
    if(error) return res.send({ message:'failed', err: error.details[0].message });
    const passwordHash = await bcrypt.hash(req.body.password, 10);
   
    try {
        const user = await User.create({
            Name: req.body.name,
            Email: req.body.email,
            Password: passwordHash,
            CompanyName: 'mmc',
            Telephone: req.body.telephone,
          
           
        })
        const token = await jwt.sign({ user }, 'jwtPrivateKey')
        res.send({ message: 'success', token: token });
    }
    catch(err) {
        res.send({ message: 'failed', err: err })
    }
})
router.get('/all', async (req,res)=>{
    try{
        let Alluser = await User.findAll({raw : true});
        res.send(Alluser);
    } catch(err) {
        console.log(err);
        res.status(500).send({'message':err})

    }
 
});


module.exports = router;
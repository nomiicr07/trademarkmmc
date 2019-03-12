const router = require('express').Router();
const Admin = require('../models/admin');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

router.post('/signIn', async (req, res) => {
    const schema = {
        email: Joi.string().required().email(),
        password: Joi.string().required()
    }
    try {
        const { error } = Joi.validate(req.body, schema);
        if(error) return res.send({ 'status': 'failed', 'err': error.details[0].message })
        let admin = await Admin.findAll({ limit: 1, raw: true, where: { Email: req.body.email } });
        if(!admin || admin.length < 1) return res.send({ 'message': 'Invalid Email or Password' })
        admin = admin.pop();
        const isPassword = await bcrypt.compare(req.body.password, admin.Password);
        if(!isPassword) return res.send({'status': 'failed','message': 'Invalid Email or Password'})
        const token = jwt.sign({ admin }, 'jwtPrivateKey');
        res.send({
            'status': 'success',
            'token': token
        })
    }
    catch(err) {
        return res.send({ 'status': 'failed', 'err': err })
    }
  
})

router.post('/signUp', async (req, res) => {
    const schema = {
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        role: Joi.string()
    }
    try {
        const { error } = Joi.validate(req.body, schema);
        if(error) return res.send({ 'status': 'failed', 'err': error.details[0].message })
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        const admin = await Admin.create({
            Name: req.body.name,
            Email: req.body.email,
            Password: passwordHash,
            Role: req.body.role
        })
        const token = jwt.sign({ admin }, 'jwtPrivateKey');
        res.send({'status': 'success', token: token});
    }
    catch(err) {
        return res.send({ 'status': 'failed', 'err': err  })
    }
})

router.post('/createUser/:email', async (req, res) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              //user: account.user, // generated ethereal user
              //pass: account.pass // generated ethereal password
            }
          });
        
          // setup email data with unicode symbols
          let mailOptions = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
          };
        
          // send mail with defined transport object
    }
    catch(err) {
        res.send({ 'status': 'failed', 'error': err } )
    }
})

module.exports = router;
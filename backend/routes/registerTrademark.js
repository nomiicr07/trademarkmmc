const RegsiteredTrademark = require('../models/registeredTrademark');
const Lawyer = require('../models/lawyer');
const Customer_Order = require('../models/customerorder');
const Company = require('../models/company');
const auth = require('../auth/authenticate');
const db = require('../config/database');
const router = require('express').Router();
const User = require('../models/user');
const paymentPrice = require('../models/paymentPrice');
const Joi = require('Joi');
const jwt = require('jsonwebtoken');
const formidable = require('formidable');
const util = require('util');
const fs = require('fs');
const Trademark = require('../models/trademark');
const TrademarkClass = require('../models/trademarkClass');
const TrademarkCategories = require('../models/trademark');
const fsRename = util.promisify(fs.rename);
const trademarkclase = require('../models/trademarkClass')

router.post('/register', auth, async (req, res) => {
    try {
        const response = await db.transaction( async () => {
            const order = await Customer_Order.create({
                Price: req.body.price,
                Order_status: 'unpaid'
            });
            const registeredTrademark =  await RegsiteredTrademark.create({
                Trademark_Name: req.body.trademark_name,
                Order_id: order.Order_id,
                Trademark_id: req.body.class_id
                
            })
        //    for(let i = 0; i < req.body.class_id.length; i++) {
        //     await trademarkClass.create({
        //         RegisteredTrademark: registeredTrademark.Id,
        //         Class_id: req.body.class_id[i]
        //     })
        //    } 
        });
        res.send(response);
    }
    catch(err) {
        return res.send(err);
    }
     
})

router.post('/assignLawyer', auth, async(req, res) => {
  try {
    const user = await User.findAll({ 
        limit: 1, 
        raw: true, 
        where: { 
            Email: req.user.Email,
            Password: req.user.Password
        } 
    })
    if(!user || user.length < 1) return res.status(401).send('Unauthorized User');
    await RegsiteredTrademark.update(
        { Lawyer_id: req.body.lawyer_id }, 
        { where: 
            { Id: req.body.registerTrademarkId } 
        })
    res.send({'status': 'success'})
  }
  catch(err) {
    return res.status(500).send({'message': err});
  }
})

router.post('/uploadLogo',auth,  (req, res) => {
     const form = formidable.IncomingForm();
     form.parse(req);
    try {
        form.on('fileBegin', function (name, file){
            file.path = __dirname + '/../public/user/' + file.name;
        });
    
        form.on('file', function (name, file){
            console.log('Uploaded ' + file.name);
        });
    }
    catch(err) {
        return res.send({'status': err});
    }
    res.send({'message': 'files is working'});
})

router.get('/getTm1/:id', async (req, res) => {
    const trademark = await RegsiteredTrademark.findOne(
        {
            limit: 1, 
            where: { Id: req.params.id },
            include: [Lawyer, Trademark, { model: User, attributes: ['Name', 'Email', 'CompanyName'] }]
        }
    );
    res.send({ 'data': trademark });
});

router.get('/getTrademark', async (req, res) => {
    const trademark =  await RegsiteredTrademark.findAll(
        { include: [ Company, Lawyer, trademarkclass  ] }
        );
    res.send({ 'status': 'success', 'data': trademark })
});

router.post('/addTrademark', async (req, res) => {
    try {
      console.log('body is ', req.body);
      const response = await db.transaction( async () => {
        const register = await RegsiteredTrademark.create({
            Trademark_Name: req.body.trademarkName,
            Status: 'Pending'
        });
        for(let i = 0; i < req.body.classid.length; i++) {
            const classTrademark = await TrademarkClass.create({
                RegisteredTrademark: register.Id,
                Class_id: req.body.classid[i]
            });
        }
        res.send({ 'status': 'success' })
      }) 
    } catch(err) {
        res.send({ 'status': 'Failed', 'message': err })
    }
})

router.get('/', async (req, res)=>{
    try {
        let reg = await TrademarkClass.findAll({ raw : true })
        res.send(reg)
    } catch(err) {
        res.send(err);
    }
})

module.exports = router;
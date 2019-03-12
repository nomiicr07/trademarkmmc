const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const User = require('./user')
const sendgridtranspoet = require('nodemailer-sendgrid-transport');

router.post('/email', async (req,res)=>{
    // try {
    //     let tranporter = nodemailer.createTransport({
    //         service : "gmail",
    //         auth : {
    //             user : "nomii0900@gmail.com",
    //             pass : ".2353631"
    //         }
    //     });
    //     let helper = {
    //         from : '"Noman" <nomii0900@gmail.com>',
    //         to :"ahmeduddinusama@gmail.com",
    //         subject : "lksdfjladskjfkljflk adslkfdsklflkj http://localhost:4200/step1",
    //         text: "http://localhost:4200/step1"
    //     };
    //     const info = await tranporter.sendMail(helper);
    //     console.log(info);
    //     res.send('Working');
    // }
    // catch (err) {
    //     res.send({'message': err});
    // }

    try{
    const transport = nodemailer.createTransport(sendgridtranspoet({
        auth : {
            api_key:'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'

        }
    }))
    let option = {
             from : 'nomii0900@gmail.com',
             to : req.body.email,
             subject : " http://localhost:4200/step1",
             text: "http://localhost:4200/step1",
             
    }
    const info = await transport.sendMail(option);
       console.log(info);
       console.log(option)
        res.send('Working');}catch(err) { console.log(err)}
})


module.exports = router;


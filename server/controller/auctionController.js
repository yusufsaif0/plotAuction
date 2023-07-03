const Auctionlist = require('../model/Auctionlist')
const user = require('../model/User')
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer')
const sendgridTransport = require("nodemailer-sendgrid-transport")

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
      // api_key:"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"
       // api_key:"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"
       api_key:"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"
    }
    
    }))
exports.AuctionlistFun = async function AuctionlistFun(req, res) {
   
    try {
        console.log("before get");
        await Auctionlist.find({}).then((result)=>{
            return res.json({ status: 'success', result });
        })
    }
    catch (error) {
      
        res.json({ status: 'error', error: error })
    }

}


exports.auctionlistbyid = async function auctionlistbyid(req, res) {
   
    try {
        console.log("aa gaya");
        console.log(req.params.id)
        await Auctionlist.findOne({auction_id:req.params.id}).then((result)=>{
            console.log(result);
            return res.json({ status: 'success', result });
        }) 
    }
    catch (error) {
      
        res.json({ status: 'error', error: error })
    }

}

exports.registerUser = async function registerUser(req, res) {

    try {
       await user.create({
        fullname: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,

        }).then((user)=>{
            transporter.sendMail({
                to:user.email,
                from:"erpcloudanalogy@gmail.com",
                subject:"Welcome to E-Plot Auction Platform",
                html:`<h1>Your email and password is </h1>
                ` +
                   "Your email id is "+   user.email +" password is " +user.password 
            })
            res.json({ status: "success" ,holdayResponse })

        })

       
    }
    catch (error) {
      
    res.json({ status: 'error', error: error })
    }
}

exports.login = async function login(req, res) {
try {
    await user.findOne({
        email: req.body.email,
        password: req.body.password,
    }).then((result)=>{
        if (result) {
            const token = jwt.sign({
                name: user.name,
                email: user.email
            }, 'secret123')
            
            return res.json({ status: 'ok', token: token, result })
        }
        else {
           
            return res.json({ status: 'error', user: false })
        }
    })
   
} catch (error) {
    console.log(error)
}
   

}
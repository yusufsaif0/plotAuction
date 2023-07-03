const express = require('express')

const router = express.Router();

const { AuctionlistFun,registerUser,login,auctionlistbyid } = require('./controller/auctionController');
const {checkout,paymentVerification}= require('./controller/paymentController')

router.get('/auctionlist', AuctionlistFun)
router.post('/register', registerUser)
router.post('/login', login)
router.get('/auctionlistbyid/:id',auctionlistbyid)
router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

module.exports = router

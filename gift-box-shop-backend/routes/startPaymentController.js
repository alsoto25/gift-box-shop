const express = require('express');
const router = express.Router();
const ErrorHanlder = require('../models/error-class');
const HttpStatus = require('http-status-codes');
const stripe = require("stripe")("sk_test_51IqQN1CaKim9wtaw1v3P7q7puxS4Mn2KCNqTmrcWpVTJdK8yDYgYC3yZJ9oOkZpzHMr3BzZUd48WNcDv6dJKicYC00AllRt1cB");


const admin = require('firebase-admin');
const db = admin.database();

router.post('/setStepsInfo', async (req, res,next) => {
    db.ref('steps').set('req.body', (snapshot) => {
        console.log(snapshot)
        res.status(HttpStatus.NO_CONTENT).json();
    });

    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd"
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
});

module.exports = router;

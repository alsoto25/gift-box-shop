var express = require('express');
var router = express.Router();
var ErrorHanlder = require('../models/error-class');
var HttpStatus = require('http-status-codes');

const admin = require('firebase-admin');
var db = admin.database();

router.get('/getStepsInfo', (req, res,next) => {
    db.ref('steps').once('value', (snapshot) => {
        const data = snapshot.val();
        res.status(HttpStatus.OK).json({ stepsResponse: data });
    })
    .catch( err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
    });
});

router.post('/setStepsInfo', (req, res,next) => {
    db.ref('steps').set(req.body, (snapshot) => {
        console.log(snapshot)
        res.status(HttpStatus.NO_CONTENT).json();
    })
    .catch( err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
    });

});

router.post('/processPayment', (req, res,next) => {
    console.log('AAAAAA',req.body)
    db.ref('orders').push(req.body, (snapshot) => {
        console.log(snapshot)
        if(snapshot != null) {
            res.status(HttpStatus.OK).json({success: true});
        }
        else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: 'Orden fallida' });
        }
    })
    .catch( err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
    });

});

router.get('/getOrders', (req, res,next) => {
    db.ref('orders').once('value', (snapshot) => {
        const data = snapshot.val();
        res.status(HttpStatus.OK).json({ ordersResponse: data });
    })
        .catch( err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
        });
});

module.exports = router;

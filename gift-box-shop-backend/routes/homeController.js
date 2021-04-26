var express = require('express');
var router = express.Router();
var ErrorHanlder = require('../models/error-class');
var HttpStatus = require('http-status-codes');

const admin = require('firebase-admin');
var db = admin.database();

router.get('/getHomeInfo', (req, res,next) => {
    db.ref('home').once('value', (snapshot) => {
        const data = snapshot.val();
        res.status(HttpStatus.OK).json({ homeResponse: data });
    })
    .catch( err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
    });
});

router.post('/setHomeInfo', (req, res,next) => {
    db.ref('home').set(req.body.images, (snapshot) => {
        console.log(snapshot)
        res.status(HttpStatus.NO_CONTENT).json();
    })
    .catch( err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var ErrorHanlder = require('../models/error-class');
var HttpStatus = require('http-status-codes');

const admin = require('firebase-admin');
var db = admin.database();

router.get('/getContactInfo', (req, res,next) => {
    db.ref('contact').once('value', (snapshot) => {
        const data = snapshot.val();
        res.status(HttpStatus.OK).json({ contactResponse: data });
    })
    .catch( err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
    });
});

router.post('/setContactInfo', (req, res,next) => {
    db.ref('contact').set(req.body.contact, (snapshot) => {
        console.log(snapshot)
        res.status(HttpStatus.NO_CONTENT).json();
    })
    .catch( err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
    });

});

module.exports = router;

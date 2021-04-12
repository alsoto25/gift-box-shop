var express = require('express');
var router = express.Router();
var ErrorHanlder = require('../models/error-class');
var HttpStatus = require('http-status-codes');
//var fbConnect = require('./firebaseConnection/fbConnet')

const admin = require('firebase-admin');
var db = admin.database();

router.get('/getContactInfo', (req, res,next) => {
    db.ref('contact').once('value', (snapshot) => {
        const data = snapshot.val();
        res.status(HttpStatus.OK).json({ contactResponse: data });
    });
});

module.exports = router;

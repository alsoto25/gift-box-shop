var express = require('express');
var router = express.Router();
var ErrorHanlder = require('../models/error-class');
var HttpStatus = require('http-status-codes');

const admin = require('firebase-admin');
var db = admin.database();

router.get('/getAboutInfo', (req, res,next) => {
    db.ref('about').once('value', (snapshot) => {
        const data = snapshot.val();
        res.status(HttpStatus.OK).json({ aboutResponse: data });
    });

});

module.exports = router;

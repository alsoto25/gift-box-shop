var express = require('express');
var router = express.Router();
var ErrorHanlder = require('../models/error-class');
var HttpStatus = require('http-status-codes');
const admin = require('firebase-admin');

var serviceAccount = require("../proyecto-gift-box-firebase-adminsdk-uf6kh-10842a08cc.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://proyecto-gift-box-default-rtdb.firebaseio.com/'
})

const db = admin.database();

router.get('/getExample', (req, res,next) => {
    var test = {
        uno: 'aaaa',
        dos: 'bbbb'
    }
    db.ref('prueba').push(test);
    res.status(HttpStatus.NO_CONTENT).json({});

});

module.exports = router;

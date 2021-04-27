var express = require('express');
var router = express.Router();
var ErrorHanlder = require('../models/error-class');
var HttpStatus = require('http-status-codes');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const admin = require('firebase-admin');
var db = admin.database();

var encryptPassword = 'boxgift#2021';

router.post('/getAccess', (req, res,next) => {
    req.body.username = CryptoJS.AES.decrypt(req.body.username,encryptPassword).toString(CryptoJS.enc.Utf8);
    req.body.password = CryptoJS.AES.decrypt(req.body.password,encryptPassword).toString(CryptoJS.enc.Utf8);
    console.log(req.body)
    db.ref('users').once('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        data.forEach(user => {
            if (user.user === req.body.username){
                if (user.password === req.body.password){
                    res.status(HttpStatus.OK).json({LOGIN:true});
                }
                else{
                    res.status(HttpStatus.OK).json({LOGIN:false});
                }
            }
            else{
                res.status(HttpStatus.OK).json({LOGIN:false});
            }
        });

    })
        .catch( err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
        });
});

module.exports = router;

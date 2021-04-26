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
    })
    .catch( err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
    });

});

router.post('/setAboutInfo', (req, res,next) => {
    /*var data = {
        name : "Isaaac Alfaro",
        experience: "9",
        location: "AAAAAAAAAA",
        texto: "prueba",
        imagen: "https://miro.medium.com/max/4242/1*NM6OfNli0X6vHJ9Ke0etcQ.jpeg",
        facebook: "https://www.facebook.com/repasa2011.giftbox.cr/",
        whatsapp: "https://wa.me/50683546060",
        instagram: "https://www.instagram.com/reposteriarepasa/"
    }*/
    db.ref('about').set(req.body.about, (snapshot) => {
        console.log(snapshot)
        res.status(HttpStatus.NO_CONTENT).json();
    })
    .catch( err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err: err });
    });

});

module.exports = router;

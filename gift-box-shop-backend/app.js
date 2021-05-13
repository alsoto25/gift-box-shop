var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Firebase connection
const admin = require('firebase-admin');
var serviceAccount = require("./proyecto-gift-box-firebase-adminsdk-uf6kh-10842a08cc.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://proyecto-gift-box-default-rtdb.firebaseio.com/'
});

var loginController = require('./routes/loginController');
var homeController = require('./routes/homeController');
var aboutController = require('./routes/aboutController');
var contactController = require('./routes/contactController');
var shopStepsController = require('./routes/shopStepsController');
var startPaymentController = require('./routes/startPaymentController');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    next();
});

app.use('/login', loginController);
app.use('/home', homeController);
app.use('/about', aboutController);
app.use('/contact', contactController);
app.use('/shopSteps', shopStepsController);
app.use('/startPayment', startPaymentController);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

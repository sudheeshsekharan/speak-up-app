var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var otpRouter = require('./routes/otp');
var captchaRouter = require('./routes/captcha');
var successRouter = require('./routes/success');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/otp', otpRouter);
app.use('/captcha', captchaRouter);
app.use('/success', successRouter);

module.exports = app;

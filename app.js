var express = require('express');
var cors = require('cors')
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors())

app.use('/api', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

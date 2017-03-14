'use strict';

/* modules
--------------------------------------------*/

var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes');
var morgan = require('morgan');

/* Express init
--------------------------------------------*/

var app = express();

/* Database
--------------------------------------------*/

require('./database');

/* routes
--------------------------------------------*/

app.use('/api', router);

/* helpers
--------------------------------------------*/

app.use(morgan('dev'));

app.use(bodyParser());

/* start app
--------------------------------------------*/

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Express server now listening on port: ' + port);
});

module.exports = app;
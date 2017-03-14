'use strict';

/* modules
--------------------------------------------*/

var express = require('express');
var parser = require('body-parser');
var router = require('./routes');
var morgan = require('morgan');

/* Express init
--------------------------------------------*/

var app = express();

/* Database
--------------------------------------------*/

require('./database');

/* helpers
--------------------------------------------*/

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(parser.json());

/* routes
--------------------------------------------*/

// app.use('/', router);
require('./routes.js')(app, express);

/* start app
--------------------------------------------*/

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Express server now listening on port: ' + port);
});

module.exports = app;
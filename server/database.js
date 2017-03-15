'use strict';

var mongoose = require('mongoose');

var uri;

process.env.PORT ? uri = 'mongodb://heroku_j1kdj66m:im2b5qoui4v5ocoprkit65v8l3@ds163377.mlab.com:63377/heroku_j1kdj66m' : uri = 'mongodb://localhost/snippet-saver';

mongoose.connect(uri);

// TODO: Add success/error message
// mongodb://heroku_j1kdj66m:im2b5qoui4v5ocoprkit65v8l3@ds163377.mlab.com:63377/heroku_j1kdj66m
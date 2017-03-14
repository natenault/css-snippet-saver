'use strict';

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/snippet-saver');

// TODO: Add success/error message
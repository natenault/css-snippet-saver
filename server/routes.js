'use strict';

var express = require('express');
var router = express.Router();

var snippetController = require('./snippets/snippetController.js');


router.get('/snippets', snippetController.getAllSnippets);


module.exports = router;

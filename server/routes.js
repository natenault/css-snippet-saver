'use strict';

var express = require('express');
var router = express.Router();

// Test Mock Data
var snippets = require('../mock/snippets.json');


router.get('/snippets', function(req, res) {
  res.json({snippets: snippets});
});


module.exports = router;
/*

/snippets
GET

/snippets/:name
GET
POST
DELETE
PUT (maybe)

*/
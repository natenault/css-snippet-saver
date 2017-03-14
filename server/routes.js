'use strict';

var express = require('express');
var router = express.Router();

var snippetController = require('./snippets/snippetController.js');

router.get('/snippets', snippetController.getAllSnippets);

router.post('/snippets', snippetController.createSnippet);

// router.get('/snippets', snippetController.getAllSnippets);

// router.post('/snippets', snippetController.createSnippet);

// router.put('/snippets', snippetController.getAllSnippets);

// router.delete('/snippets', snippetController.getAllSnippets);

module.exports = router;

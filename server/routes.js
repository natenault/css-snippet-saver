'use strict';

var express = require('express');
var router = express.Router();

var Snippet = require('./snippets/snippetModel.js');

// GET / Get snippets collection
//--------------------------------------------

router.get('/snippets', function(req, res) {
  Snippet.find({}, function(err, snippets) {
    if (err) {
      return res.json({message: err.message});
    } else {
      res.json(snippets);
    }
  });
});


// POST / Add single snippet
//--------------------------------------------

router.post('/snippets', function(req, res) {
  var snippet = req.body;
  Snippet.create(snippet, function(err, snippet) {
    if (err) {
      return res.json({err: err.message});
    } else {
      res.json({'snippet': snippet, message: 'Snippet created'});
    }
  });
});


// DELETE / Delete single snippet
//--------------------------------------------

router.delete('/snippets/:id', function(req, res) {
  var id = req.params.id;
  Snippet.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.json({ err: err.message });
    } else {
      res.json({ message: 'Snippet Deleted' });
    }
  });
});


// PUT / Edit single snippet
//--------------------------------------------

// GET / Get single snippet
//--------------------------------------------


module.exports = router;

'use strict';

var Snippet = require('./snippetModel.js');

// GET /snippets
// Route for snippets collection
var getAllSnippets = function(req, res) {
  Snippet.find({}, function(err, snippets) {
    if (err) {
      return res.json({message: err.message});
    } else {
      res.json({snippets: snippets});
    }
  });
};

exports.getAllSnippets = getAllSnippets;

// NOTE: Decided to use 'exports' with each function
// instead of 'module.exports' with all functions in an object
// on this page simply because it looked more organized
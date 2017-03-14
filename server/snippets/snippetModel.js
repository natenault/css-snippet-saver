'use strict';

var mongoose = require('mongoose');

var SnippetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  properties: String
});

module.exports = mongoose.model('Snippet', SnippetSchema);
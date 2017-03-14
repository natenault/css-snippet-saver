'use strict';

var mongoose = require('mongoose');

var SnippetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: String,
  properties: []
});

module.exports = mongoose.model('Snippet', SnippetSchema);
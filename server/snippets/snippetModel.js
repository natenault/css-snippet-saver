'use strict';

var mongoose = require('mongoose');

var SnippetSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  type: String,
  properties: []
});

module.exports = mongoose.model('Snippet', SnippetSchema);
'use strict';

var mongoose = require('mongoose');

var SnippetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  properties: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Snippet', SnippetSchema);
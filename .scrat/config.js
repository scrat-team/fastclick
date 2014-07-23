'use strict';

var path = require('path');

module.exports = {
  orgiRepo: 'ftlabs/fastclick',
  ref: 'v1.0.2',
  target: path.resolve(__dirname, '..'),
  name: 'fastclick',
  repo: 'scrat-team/fastclick',
  description: 'a scrat-installable fork of ftlabs/fastclick',
  main: {
    'fastclick.js': 'lib/fastclick.js'
  }
};
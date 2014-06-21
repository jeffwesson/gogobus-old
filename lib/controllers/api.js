'use strict';

var mongoose = require('mongoose'),
  Thing = mongoose.model('Thing'),
  Agency = mongoose.model('Agency');

/**
 * Get awesome things
 */
exports.awesomeThings = function (req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};
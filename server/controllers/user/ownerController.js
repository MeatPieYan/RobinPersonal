var mongoose = require('mongoose');

module.exports = function() {

    return function(req, res, next) {

        next();
    };
};
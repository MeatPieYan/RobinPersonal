var mongoose = require('mongoose');
var Owner = require('../models/owner');

module.exports = function (req, res, next) {
    Owner.find(function (err, docs) {
        if(err) {
            res.send(err);
        }else {
            res.send(docs);
        }

        next();
    });

};
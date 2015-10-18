var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/Robin');

db.connection.on('error', function(error) {
    console.log(error);
});

module.exports = db;



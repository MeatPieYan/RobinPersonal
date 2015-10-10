var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

var mongoose = require('mongoose');


var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

mongoose.connect('mongodb://localhost/robin');
mongoose.connection.once('open', function(){

    var routes = require('./routes');

    _.each(routes, function(controller, route){
        app.use(route, controller(app, route));
    });


    console.log('Listen on port 3000......');
    app.listen(3000);

});
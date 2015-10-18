var mongodb = require('../db/db');
var DAO = require('./DAO');

var Schema = mongodb.Schema;
var ownerSchema = new Schema({
    name: String,
    age: Number,
    intro: String,
    hobby: String,
    specialty: String
})

var Owner = mongodb.model('owner', ownerSchema);
var OwnerDAO = new DAO.getDAO(Owner);

module.exports = new OwnerDAO();
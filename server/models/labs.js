/**
 * Created by Robin on 15/10/14.
 */
var mongodb = require('../db/db');
var DAO = require('./DAO');

var Schema = mongodb.Schema;
var labsSchema = new Schema({
    title: String,
    description: String,
    tag: String,
    path: String
})

var Labs = mongodb.model('labs', labsSchema);
var LabsDAO = new DAO.getDAO(Labs);

module.exports = new LabsDAO();
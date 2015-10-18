var mongodb = require('../db/db');
var DAO = require('./DAO');

var Schema = mongodb.Schema;
var blogSchema = new Schema({
    author: String,
    issue_date: Date,
    title: String,
    content: String,
    tag: String,
    last_modified_date: Date,
    last_modified_by: String
})

var Blog = mongodb.model('blog', blogSchema);
var BlogDAO = new DAO.getDAO(Blog);

module.exports = new BlogDAO();
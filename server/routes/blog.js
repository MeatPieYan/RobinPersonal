var blogController = require('../controller/blog');
var express = require('express');
var router = express.Router();

router.get('/', blogController.showList);

module.exports = router;
var labsController = require('../controller/labs');
var express = require('express');
var router = express.Router();

router.get('/', labsController.showList);

module.exports = router;
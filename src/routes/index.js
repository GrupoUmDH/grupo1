var express = require('express');
var router = express.Router();

const IndexController = require('../controller/indexController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET Carrinho */
router.get('/', function(req, res, next) {
    res.render('carrinho', { title: 'carrinho' });

});

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('produto', { title: 'Produto' });
})

module.exports = router;
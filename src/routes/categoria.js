var express = require('express');
var router = express.Router();

/* GET Categorias */
router.get('/', function(req, res, next) {
    res.render('categoria', { title: 'Categoria' });

});

module.exports = router;
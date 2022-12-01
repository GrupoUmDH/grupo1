var express = require('express');
var router = express.Router();

/* GET Cadastro de Produto */
router.get('/', function(req, res, next) {
    res.render('cadastro-produto', { title: 'Novo Produto' });

});

module.exports = router;
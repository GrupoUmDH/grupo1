const { json, query } = require('express');
var express = require('express');
var router = express.Router();

var CarrinhoModel = require('../models/Produto');

/* GET Carrinho */
router.get('/', function(req, res, next) {
    res.render('carrinho', { title: 'carrinho' , js:"adicionarAoCarrinho" /*, filmes: JSON.parse(req.query)*/});
});

module.exports = router;
const { json, query } = require('express');
var express = require('express');
var router = express.Router();

var CarrinhoModel = require('../models/Produto');

/* GET Carrinho */
router.get('/', function(req, res, next) {
    let carrinhoModel = CarrinhoModel.index();
    res.render('carrinho', { title: 'carrinho' , js:"adicionarAoCarrinho" , filmes: carrinhoModel});
});

module.exports = router;
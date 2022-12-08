const { json, query } = require('express');
var express = require('express');
var router = express.Router();

var CarrinhoModel = require('../models/Produto');

/* GET Carrinho */
router.get('/', function(req, res, next) {
    res.render('carrinho', { pageName: 'carrinho' , js:"paginaDoCarrinho" , filmes: [{ nome: "nome",
    descricao: "descricao", valor: "valor"}]});
    
});

module.exports = router;
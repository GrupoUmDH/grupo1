const { json, query } = require('express');
var express = require('express');
var router = express.Router();

var CarrinhoModel = require('../models/Produto');

/* GET Carrinho */
router.get('/', function(req, res, next) {
    const listaFilmes = CarrinhoModel.index();
    res.render('carrinho', { title: 'carrinho' , js:"adicionarAoCarrinho", carrinho: listaFilmes });

});

module.exports = router;
const { json, query } = require('express');
var express = require('express');
var router = express.Router();

const CarrinhoController=require('../controllers/CarrinhoController')
let imgPagamento = require('../models/CarrinhoModel')


router.get('/', CarrinhoController.carrinho);
// router.get('/compra', CarrinhoController.compra);


/* GET Carrinho */
router.get('/', function(req, res, next) {
    res.render('carrinho', { title: 'carrinho' , js:"paginaDoCarrinho" , filmes: [{ nome: "nome",
    descricao: "descricao", valor: "valor"}]});
    
});
router.get('/compra', function(req, res, next) {
    let img=imgPagamento.index();
    res.render('compra', { pageName: 'compra' , js:"compra", compra:img })
});
    
module.exports = router;
var express = require('express');
var router = express.Router();

const CarrinhoController=require('../controllers/CarrinhoController')


router.get('/', CarrinhoController.carrinho);
router.get('/compra', CarrinhoController.compra);


/* GET Carrinho */
router.get('/', function(req, res, next) {
    res.render('carrinho', { pageName: 'carrinho' , js:"paginaDoCarrinho" , filmes: [{ nome: "nome",
    descricao: "descricao", valor: "valor"}]});
    
});
router.get('/compra', function(req, res, next) {
    res.render('compra', { pageName: 'compra' , js:"finalizaCompra" })
});
    
module.exports = router;
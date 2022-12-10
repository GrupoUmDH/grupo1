var express = require('express');
var router = express.Router();

const ProdutosController = require('../controllers/ProdutosController')


router.get('/', function(req, res, next) {
    res.render('produtos', { pageName: 'produtos', js:'adicionarAoCarrinho' });
});

router.get('/filmes', ProdutosController.filmes);

router.get('/series', ProdutosController.series);

router.get('/cadastroProduto', function(req, res, next) {
    res.render('cadastroProduto', { pageName: 'cadastroProduto' });
});

router.get('/categorias', ProdutosController.listar);


module.exports = router;
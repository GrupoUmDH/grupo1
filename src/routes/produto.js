var express = require('express');
var router = express.Router();

const ProdutosController = require('../controllers/ProdutosController')


// router.get('/series', ProdutoController.series);

router.get('/', function(req, res, next) {
    res.render('produto', { title: 'produto' });
});

router.get('/filmes', ProdutosController.filmes);

router.get('/series', function(req, res, next) {
    res.render('series', { title: 'series' });
});

router.get('/cadastroProduto', function(req, res, next) {
    res.render('cadastroProduto', { title: 'cadastroProduto' });

});


module.exports = router;
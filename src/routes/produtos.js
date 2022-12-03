var express = require('express');
var router = express.Router();

const ProdutosController = require('../controllers/ProdutosController')


// router.get('/series', ProdutoController.series);

router.get('/', function(req, res, next) {
    res.render('produto', { title: 'Produto' });
});

router.get('/filmes', ProdutosController.filmes);

router.get('/series', function(req, res, next) {
    res.render('series', { title: 'series' });
});

router.get('/cadastro-produto', function(req, res, next) {
    res.render('cadastro-produto', { title: 'cadastro-produto' });

});



module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('produto', { title: 'Produto' });
});

router.get('/filmes', function(req, res, next) {
    res.render('filmes', { title: 'filmes' });
});

router.get('/series', function(req, res, next) {
    res.render('series', { title: 'series' });
});

router.get('/cadastro-produto', function(req, res, next) {
    res.render('cadastro-produto', { title: 'cadastro-produto' });

});

module.exports = router;
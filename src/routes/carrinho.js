var express = require('express');
var router = express.Router();

/* GET Carrinho */
router.get('/', function(req, res, next) {
    res.render('carrinho', { pageName: 'carrinho' , js:"adicionarAoCarrinho" , filmes: JSON.parse(req.query)});

});

module.exports = router;
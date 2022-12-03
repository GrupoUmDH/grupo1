var express = require('express');
var router = express.Router();

const ProdutosController = require('../controller/ProdutosController')

router.get('/filmes', ProdutosController.filmes);

// router.get('/series', ProdutoController.series);




module.exports = router;
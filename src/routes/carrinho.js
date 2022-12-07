var express = require('express');
var router = express.Router();

const CarrinhoController=require('../controllers/CarrinhoController')


router.get('/', CarrinhoController.carrinho);
router.get('/compra', CarrinhoController.compra);



module.exports = router;
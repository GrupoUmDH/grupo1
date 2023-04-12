const { json, query } = require('express');
var express = require('express');
var router = express.Router();

const CarrinhoController = require('../controllers/CarrinhoController');

const validaCard = require('../middlewares/validaCard');

router.get('/', CarrinhoController.carrinho);
router.post('/confirmaCompra', CarrinhoController.confirmaCompra);
    
module.exports = router;
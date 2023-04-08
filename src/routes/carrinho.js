const { json, query } = require('express');
var express = require('express');
var router = express.Router();

const CarrinhoController=require('../controllers/CarrinhoController');

router.get('/', CarrinhoController.carrinho);
//router.get('/cupom', CarrinhoController.cupom);
//router.post('/adiciona/:id', CarrinhoController.adiciona);
//router.delete('/deletar/:id', CarrinhoController.deletaItem);

    
module.exports = router;
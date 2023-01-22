const { json, query } = require('express');
var express = require('express');
var router = express.Router();

const CarrinhoController=require('../controllers/CarrinhoController')
let imgPagamento = require('../models/CarrinhoModel')

router.get('/', CarrinhoController.carrinho);
router.delete('/deletar/:value', CarrinhoController.deletar);

/* GET COMPRA - FINALIZA COMPRA */
router.get('/compra', function(req, res, next) {
    let img=imgPagamento.index();
    res.render('compra', { pageName: 'compra' , js:"compra", compra:img })
});
    
module.exports = router;
const CarrinhoModel = require('../models/CarrinhoModel');

module.exports = {
    carrinho: (req, res) => {
        // const carrinho = CarrinhoModel.carrinho();
        return res.render('carrinho', { pageName: 'carrinho' })
    },
    compra: (req, res) => {
        const compras = CarrinhoModel.index();
        return res.render('compra', { compra: compras, pageName: 'compra' })
    },
}
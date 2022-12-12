const CarrinhoModel = require('../models/CarrinhoModel');


module.exports = {
    carrinho: (req, res) => {
        // const carrinho = CarrinhoModel.carrinho();
        return res.render('carrinho', { pageName: 'carrinho', js:"paginaDoCarrinho" })
    },
    compra: (req, res) => {
        // const compras = CarrinhoModel.compra();
        return res.render('compra', { pageName: 'compra', js: 'finalizaCompra' })
    },
    addCarrinho: (req, res) => {
        //const listafilme = FilmesCarrinho.index();
        //console.log(listafilme)
        return res.render('carrinho', { pageName: 'carrinho', js: 'adicionarAoCarrinho' })
    }
}
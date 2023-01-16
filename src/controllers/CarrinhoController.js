const CarrinhoModel = require('../models/CarrinhoModel');
const fs = require("fs");
const path = require("path");

module.exports = {
    carrinho: (req, res) => {
        const item = CarrinhoModel.itens(req.query.itensCarrinho);
        //const carrinho = req.query

        console.log(req.query);
        let qtd = item.length;

        let valor = CarrinhoModel.valores(req.query.itensCarrinho);

        let desconto = "R$ 0,00"
        
        //console.log(valor);

        res.render("carrinho", {
            pageName: "carrinho",
            js: "paginaDoCarrinho",
            Itens : item, qtd, valor,
        });

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
const CarrinhoModel = require('../models/CarrinhoModel');
const fs = require("fs");
const path = require("path");

module.exports = {
    carrinho: (req, res) => {

        //const itensCarrinho = JSON.parse(req.query.itensCarrinho);
         console.log(req.query);
        //const carrinho = req.query

        res.render("carrinho", {
            pageName: "carrinho",
            js: "paginaDoCarrinho",
            //Itens : carrinho
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
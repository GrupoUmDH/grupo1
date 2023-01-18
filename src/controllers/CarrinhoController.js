const CarrinhoModel = require('../models/CarrinhoModel');
const fs = require("fs");
const path = require("path");

const jsonCarrinho = require("../database/carrinho.json");

module.exports = {
    carrinho: (req, res) => {   
        
        let item = [{}];

        if(!req.query.itensCarrinho){
            item = jsonCarrinho;
        } else {
             item = CarrinhoModel.itens(req.query.itensCarrinho);
        }
       
        //const carrinho = req.query

        let qtd = item.length;

        let valor = CarrinhoModel.valores(req.query.itensCarrinho);

        let desconto = "R$ 0,00";

        //console.log(valor);

        res.render("carrinho", {
            pageName: "carrinho",
            js: "paginaDoCarrinho",
            Itens: item,
            qtd,
            valor,
        });
    },
    compra: (req, res) => {
        // const compras = CarrinhoModel.compra();
        return res.render("compra", {
            pageName: "compra",
            js: "finalizaCompra",
        });
    },
    addCarrinho: (req, res) => {
        //const listafilme = FilmesCarrinho.index();
        //console.log(listafilme)
        return res.render("carrinho", {
            pageName: "carrinho",
            js: "adicionarAoCarrinho",
        });
    },
    deletaItem: (req, res) => {
        //console.log(req.body.itensCarrinho);

        const { id } = req.params;     //return res.send("item deletado... ");
        const ref  = JSON.parse(req.body.itensCarrinho);

        const novoCarrinho = CarrinhoModel.deletar(id, ref);

        //console.log(ref)

        //const itens = CarrinhoModel.deletar(id, ref)

        //this.carrinho(itens);

        //const novoCarrinho = CarrinhoModel.deletar(id);

        res.redirect("/carrinho");
    }
};
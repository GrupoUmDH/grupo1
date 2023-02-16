const CarrinhoModel = require('../models/CarrinhoModel');

module.exports = {
    carrinho: (req, res) => {  

        let item = CarrinhoModel.itens(req.query.itensCarrinho);
        
        if(!req.query.itensCarrinho){
            itens = [{}];
        }

        let qtd = item.length;

        let valor = "R$ "+CarrinhoModel.valores(req.query.itensCarrinho);

        let desconto = "R$ 0,00";

        //console.log(item);

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
    adiciona: (req, res) => {
        //console.log("ADICIONANDO: "+req.body.itensCarrinho)
        CarrinhoModel.attCarrinho(JSON.parse(req.body.itensCarrinho));
    },
    deletaItem: (req, res) => {  
        const ref  = req.body.itensCarrinho;

        //console.log(ref);

        CarrinhoModel.attCarrinho(ref);

        return res.redirect("/carrinho");
    }, 
};
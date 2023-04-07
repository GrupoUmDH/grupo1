const { Filme, Usuario, CadastroUsuario} = require("../../models");
const CarrinhoModel = require('../models/CarrinhoModel');

const view = {
    pageName: "carrinho",
    js: "carrinho",
    users: {},
    dados: {},
    itens: {},
    qtd: 0,
    valor: 0,
    popUp: false,
    mensagem: "mensagem",
    aviso: "aviso",
};

module.exports = {
    carrinho: async (req, res) => {  

        if(!req.session) {
            view.popUp = true;
            view.mensagem = "Você nao esta logado.";
            view.aviso = "Para finalizar a compra, faça login ou cadastre-se!!!";
        } else {
            view.popUp = false;
        }

        const { itensCarrinho } = req.query;
        //console.log(itensCarrinho);

        const produtos = [];

        for(const id of JSON.parse(itensCarrinho)){
            produtos.push(id.id);
        };
        
        const filme = await Filme.findAll({
            where: {id: produtos}
        });

        view.itens = filme;
        view.qtd = produtos.length;

        let soma = 0;
        filme.forEach((element) => {
            soma += parseFloat(element.valor.replace(",", "."));
        });
        view.valor = soma.toFixed(2).replace(".", ",");
        

        res.render("carrinho", view);
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
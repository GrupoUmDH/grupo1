const { Filme, Usuario, CadastroUsuario, Cupom} = require("../../models");

const view = {
    pageName: "carrinho",
    js: "carrinho",
    users: {},
    dados: {},
    itens: {},
    qtd: 0,
    valor: 0,
    desconto: 0,
    total: 0,
    dadosCupom: {},
    popUp: false,
    mensagem: "mensagem",
    aviso: "aviso",
};

module.exports = {
    carrinho: async (req, res) => {  

        //console.log(req.query);

        if(!req.session) {
            view.popUp = true;
            view.mensagem = "Você nao esta logado.";
            view.aviso = "Para finalizar a compra, faça login ou cadastre-se!!!";
        } else {
            view.popUp = false;
        }

        const { itensCarrinho, cupom } = req.query;

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

        //view.total = view.valor;

        if(!cupom){
            view.total = view.valor;
            view.desconto = 0;
        } else {
           
            const aplicaCupom = await Cupom.findOne({
                where: { cupom : cupom},
            });
    
            if(aplicaCupom != ""){
                if(view.valor == 0){
                    view.total = view.soma;
                    view.desconto = 0;
                } else {
                    view.dadosCupom = aplicaCupom;
                    console.log(view.dadosCupom);
                    view.desconto = (aplicaCupom.valor * soma )/100; 
                    view.total = (soma - view.desconto).toFixed(2).replace(".", ",");
                }
            } else {
                view.total = view.soma;
                view.desconto = 0;
            }
        }
        
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
        //CarrinhoModel.attCarrinho(JSON.parse(req.body.itensCarrinho));
    },
    deletaItem: (req, res) => {  
        const ref  = req.body.itensCarrinho;

        //console.log(ref);

        //CarrinhoModel.attCarrinho(ref);

        return res.redirect("/carrinho");
    }, 
};
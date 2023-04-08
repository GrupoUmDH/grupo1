const { Filme, Usuario, CadastroUsuario, Cartao, Cupom} = require("../../models");

const view = {
    pageName: "carrinho",
    js: "carrinho",
    users: {},
    dados: {},
    cartão: {},
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
        const { itensCarrinho, cupom } = req.query;
        const { nome, email } = req.session;
        const produtos = [];

        console.log(req.session);

        if(!req.session.email) {
            view.popUp = true;
            view.mensagem = "Você nao esta logado.";
            view.aviso = "Para finalizar a compra, faça login ou cadastre-se!!!";
        } else {
            view.popUp = false;

            view.users = await Usuario.findOne({
                where : { email: email },
            });

            view.dados = await CadastroUsuario.findOne({
                where: { id_usuario : view.users.id},
            });
        }

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

};
const { Filme, Usuario, CadastroUsuario, Cartao, Cupom, Historico} = require("../../models");

const view = {
    pageName: "carrinho",
    js: "carrinho",
    users: {},
    dados: {},
    cartao: {},
    itens: {},
    qtd: 0,
    valor: 0,
    desconto: 0,
    total: 0,
    dadosCupom: {},
    metodo_pagamento: "",
    popUp: false,
    popUp_login: true,
    mensagem: "mensagem",
    aviso: "aviso",
};

function idItens(itensCarrinho){
    const index = [];
    for(const id of JSON.parse(itensCarrinho)){
        index.push(id.id);
    };
    return index;
};

module.exports = {
    carrinho: async (req, res) => {  

        console.log(req.body);
        const { itensCarrinho, cupom } = req.query;

        const produtos = idItens(itensCarrinho);

        if(!req.session) {
            view.popUp = true;
            view.mensagem = "Você nao esta logado!!!";
            view.aviso = "para fazer login/cadastro e continuar suas compras...";
        } else {
            view.popUp = false;

            if(!req.session.email){
                view.popUp = true;
                view.mensagem = "Você nao esta logado!!!";
                view.aviso = "para fazer login/cadastro e continuar suas compras...";

                view.users = {};
                view.dados = {};
                view.cartao = null;
            } else {
                const { nome, email } = req.session;

                view.users = await Usuario.findOne({
                    where : { email: email },
                });
    
                view.dados = await CadastroUsuario.findOne({
                    where: { id_usuario : view.users.id},
                }).then((result) => {
                    return result;
                }).catch((err) => {
                    res.redirect('/login');
                });
                
                if (view.dados) {
                    view.cartao = await Cartao.findAll({
                        where: { id_cadastrousuario: view.dados.id },
                    });
                } 
                
            }
            
        }
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

    confirmaCompra: async (req, res) => {

        const { itensCarrinho } = req.query
        const { cupom, itens, total, data, selectCartao,  
                 metodo_pagamento , cvv, salvar, id_usuario } = req.body;
        const { email } = req.session;

        if(email){
            view.dados = await CadastroUsuario.findOne({
                where: { id_usuario: id_usuario}
            });

            view.itens = await Filme.findAll({
                where: {id: itens},
            });

            view.cupom = cupom;
            view.total = total;
            view.mensagem = "Conirmação de Compra";


            if(metodo_pagamento == "cartao"){
                view.metodo_pagamento = "cartao";

                if(selectCartao){

                    console.log(selectCartao);

                    view.cartao = await Cartao.findOne({
                        where: { id: selectCartao},
                    });

                    console.log(view.cartao);

                    novoHistorico();

                } else {
                    view.popUp_login = false;
                    view.popUp = true;
                    view.mensagem = "Nâo esqueça de cadastrar ou selecionar um cartão";
                    view.aviso ="Selecione ou cadastre um novo cartão.";
                    console.log(req.body);
                    res.render("carrinho", view);
                }

            }

            if(metodo_pagamento == "pix"){
                view.metodo_pagamento = "pix";
                 novoHistorico();
            }
    
            if(metodo_pagamento == "boleto"){
                view.metodo_pagamento = "boleto";
                 novoHistorico();
            }

            res.render("confirmarCompra", view);

            function novoHistorico(){
                const novaCompra = {
                    id_usuario: view.dados.id,
                    itens: itens,
                    data: data,
                    valor: total,
                    metodo_pay: metodo_pagamento,
                    id_cartao: view.cartao.id,
                };

                //await Historico.create(novaCompra);

                console.log(novaCompra);
            };

        } else {
            res.redirect('/login');
        }
    },

};

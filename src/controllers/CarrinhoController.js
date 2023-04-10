const { Filme, Usuario, CadastroUsuario, Cartao, Cupom} = require("../../models");

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
    popUp: false,
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
            } else {
                const { nome, email } = req.session;
                view.users = await Usuario.findOne({
                    where : { email: email },
                });
    
                view.dados = await CadastroUsuario.findOne({
                    where: { id_usuario : view.users.id},
                });

                view.cartao = await Cartao.findAll({
                     where: { id_cadastrousuario: view.dados.id}
                });
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

        console.log(req.query);
        const { cupom, itens, total } = req.body;
        const { metodo_pagamento ,numero_cartao, nome_completo, vencimento, cvv, salvar, id_usuario} = req.body;
        const { email } = req.session;

        if(email){
            view.dados = await CadastroUsuario.findOne({
                where: { id_usuario: id_usuario}
            });

            if(metodo_pagamento == "cartao"){
                if(numero_cartao.length >= 16 && vencimento.length >=4 && cvv.length >= 3 && nome_completo != ""){
                    
                    const novoCard = {
                        numero_cartao: numero_cartao,
                        nome_completo: nome_completo,
                        vencimento: vencimento,
                        cvv: cvv,
                        id_cadastrousuario: view.dados.id,
                    };

                    // if(salvar){
                    //     await Cartao.create(novoCard);
                    // }
                    console.log(req.body);
                    res.render('confirmarCompra', view);

                } else {
                    res.send("varifique os dados do cartão");
                }
            }

            if(metodo_pagamento == "pix"){
                res.send("PIX");
            }
    
            if(metodo_pagamento == "boleto"){
                res.send("BOLETO");
            }

        } else {
            res.redirect('/login')
        }
    },

};
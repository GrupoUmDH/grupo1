const { Categorias, Classificacao, Filme, Usuario } = require("../models");
const Op = require("sequelize");
const { validationResult } = require("express-validator");
const path = require("path");
const bcrypt = require("bcrypt");
const { response } = require("express");

const view = {
    pageName: "painelADM",
    js: "painelADM",
    painel: "caminho",
    error: false,
    user: "user",
    users: {},
    mensagem: "mensagem",
    aviso: "aviso",
    tipoView: "cadastro",
    bt_form: "",
    userId: 0,
};

module.exports = {
    // CRUD - Painel administrativo - Configurando Filmes/Séries

    index: async (req, res) => {

        try {

            if (req.session.tipo == 'admin') {

                const user = await Usuario.findOne({
                    where: {email: req.session.email}
                });

                req.session.nome = user.nome_usuario;

                const filme = await Filme.findAll({});
                const categoria = await Categorias.findAll({
                    order: ["nome"],
                });
                const classificacoes = await Classificacao.findAll({
                });
                //console.log(filme);
                res.render("painelADM", {
                    pageName: "painelADM",
                    js: "painelADM",
                    filme,
                    categoria,
                    classificacoes,
                    user: req.session.nome,
                });
            } else {
                res.redirect('/painel/painel-user');
            }

        } catch (err) {
            console.log(err)
            return res.status(500).json({ mensagem: 'erro: tentativa de acesso ao Painel Administrativo' });
        }
    },

    editar: async (req, res) => {
        const { id } = req.body;

        const filme = await Filme.findByPk(id);

        const categoria = await Categorias.findAll({});

        const classificacoes = await Classificacao.findAll();

        res.render("painelADD", {
            pageName: "painelADD",
            js: "painelADD",
            filme,
            categoria,
            classificacoes,
            titulo: "Editar",
            user: req.session.nome,
        });
    },

    atualiza: async (req, res) => {
        const { id } = req.body;

        //console.log(req.body);

        const filme = await Filme.findByPk(id);

        const updateFilme = await {
            nome: req.body.nome,
            imagem: !req.body.capa ? filme.imagem : path.parse(req.files.fundo[0].filename).name,
            background: !req.body.fundo ? filme.background : path.parse(req.files.capa[0].filename).name,
            valor: req.body.valor,
            tipo: req.body.tipo,
            categorias_id: parseInt(req.body.categorias_id),
            classificacoes_id: parseInt(req.body.classificacoes_id),
            descricao: req.body.descricao,
        };

        await Filme.update(updateFilme, {
            where: { id },
        });

        res.redirect("/painel");
    },

    formCriar: async (req, res) => {
        const filme = await Filme.findAll({});

        const categoria = await Categorias.findAll({});

        const classificacoes = await Classificacao.findAll({});

        //console.log(categoria);

        res.render("painelADD", {
            pageName: "painelADD",
            js: "painelADD",
            filme,
            categoria,
            classificacoes,
            titulo: "Adicionar",
            user: req.session.nome,
        });
    },

    criar: async (req, res) => {

        const novofilme = {
            nome: req.body.nome,
            imagem: path.parse(req.files.fundo[0].filename).name,
            background: path.parse(req.files.capa[0].filename).name,
            valor: req.body.valor,
            tipo: req.body.tipo,
            categorias_id: parseInt(req.body.categorias_id),
            classificacoes_id: parseInt(req.body.classificacoes_id),
            descricao: req.body.descricao,
        };

        //console.log(novofilme);

        await Filme.create(novofilme);

        res.redirect("/painel");
    },

    deletar: async (req, res) => {
        const { id } = req.body;

        await Filme.destroy({
            where: { id },
        });

        res.redirect("/painel");
    },

    // CRUD - Painel administrativo - Configurando usuários

    userConfig: async (req, res) => {

        const { email } = req.session;

        try {

            await Usuario.findOne({
                where: { email: email}
            }).then((response) => {
                //console.log(response);
                if (req.session.tipo == 'admin') {
                    Usuario.findAll({})
                        .then((response) => {
                            view.error = false;
                            view.users = response;
                            view.painel = '/painel/users';
                            res.render('userConfig', view);
                        })
                } else {
                    res.redirect('/login');
                }
            }).catch((error) => {
                //console.log("Deu xabu");
                setTimeout(()=>{
                    res.redirect('/login');
                }, 2000);
                
            });

        } catch (err) {
            console.log(err)
            res.status(500).json({ mensagem: 'erro: tentativa de acesso ao Painel Administrativo' });
        }
        
    },

    userFormCriar: async (req, res) => {
        view.user = req.session.nome; 
        view.painel = '/painel/users/criar';
        view.tipoView = "Criando";
        view.bt_form = 'CRIAR NOVO USUÁRIO';
        res.render('userConfig', view);
    },

    userCriar: async (req, res) => {

        view.user = req.session.nome; 
        view.painel = '/painel/users/criar';

        const { errors } = validationResult(req);
        const {nome_usuario, email, senha, tipo_usuario} = req.body;

        const hasedSenha = await bcrypt.hash(senha, 10);

        if (errors.length) {
            
            view.error = true;
            view.mensagem = 'Foram encontrador erros ao preencher os dados.';
            view.aviso = 'Verifique se todos os dados foram digitados corretamente e tente novamente.';

            res.render('userConfig', view);
        } else {

            const novoUser = {
                nome_usuario: nome_usuario,
                email: email,
                senha: hasedSenha,
                tipo_usuario: tipo_usuario
            }

            try {
                const validaUser = await Usuario.findOne({
                    where: { email: novoUser.email}
                }).then((response) => {
                    view.error = true;

                    if(response) {
                        view.error = true;
                        view.mensagem = 'Email, ja cadastrado.';
                        view.aviso = 'Cadastre um novo e-mail ou edite o usuário ja cadastrado.';

                        res.render('userConfig', view);

                    } else {
                        Usuario.create(novoUser);
                        res.redirect('/painel/users');
                    }
                })
            } catch (error) {
                
                res.redirect('/painel/users');
            }

        }
    },

    userDelete: async (req, res) => {
        const { id } = req.body;

        await Usuario.findByPk(id)
            .then((response) => {

                if(response.tipo_usuario == "admin"){
                    //console.log("editando um ADM");
                    if(response.email == req.session.email){
                        console.log("Deletando sua propria conta.");
                        view.painel = '/painel/users';
                        view.error = true;
                        view.mensagem = 'Sua conta será excluida.';
                        view.aviso = 'Essa ação é irreversível.';
                        
                        req.session = null;
                        res.redirect('/painel/users');

                    } else {
                        console.log("Aqui nao");
                        view.painel = '/painel/users';
                        view.error = true;
                        view.mensagem = 'Você só pode deletar sua própria conta como administrador';
                        view.aviso = 'Faça login como este usuário para prosseguir.';
                        res.render('userConfig', view);
                    }

                } else {
                    Usuario.destroy({
                        where: { id }
                    });
                    res.render('userConfig', view);
                }
            }).catch((error) => {
                res.redirect('/painel/users');
            })

    },

    userEditar: async (req, res) => {
        const {id} = req.body;

        view.user = req.session.nome; 
        view.painel = '/painel/users/criar';
        view.tipoView = "Editanto";
        view.bt_form = 'ATUALIZAR USUÁRIO';
        view.userId = id;

        //console.log(req.query);

        await Usuario.findByPk(id)
            .then((response) => {
                if(response.tipo_usuario == "admin"){
                    //console.log("editando um ADM");
                    if(response.email == req.session.email){
                        //console.log("Editando");
                        view.users = response;
                        console.log(req.body);
                        res.render('userConfig', view);
                    } else {
                        //console.log("Aqui nao");
                        view.painel = '/painel/users';
                        view.error = true;
                        view.mensagem = 'Administradores so podem alterar suas próprias credenciais.';
                        view.aviso = 'Faça login como este usuário para editar os dados';
                        
                        res.render('userConfig', view);
                    }

                } else {
                    //console.log("editando um Clinete");
                    view.users = response;
                    res.render('userConfig', view);
                }
            }).catch((error) => {
                res.redirect('/painel/users');
            })
        
    },

    userUpdate: async (req, res) => {

        const { errors } = validationResult(req);
        const  id  = view.userId;

        view.user = req.session.nome; 

        if(errors.length){
            view.error = true;
            view.mensagem = 'Foram encontrador erros ao preencher os dados.';
            view.aviso = 'Verifique se todos os dados foram digitados corretamente e tente novamente.';

            res.render('userConfig', view);
        } else {
            //console.log(req.query.id);

            const { nome_usuario, email, senha, tipo_usuario} = req.body;
            const hasedSenha = await bcrypt.hash(senha, 10);

            const novoUser = {
                nome_usuario: nome_usuario,
                email: email,
                senha: hasedSenha,
                tipo_usuario: tipo_usuario
            };

           
            await Usuario.update(novoUser, {
                where: { id },
            }).then((response) => {
                view.error = true;
                view.mensagem = 'Usuário atualizado com sucesso';
                view.aviso = '';
                res.render('userConfig', view);
            }).catch((reason) => {
                view.error = true;
                view.mensagem = 'Erro ao atualizar dados.';
                view.aviso = 'Tente novamente mais tarde.';
                res.render('userConfig', view);
            })

            

        }

    },

};

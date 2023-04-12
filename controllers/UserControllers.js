const { Usuario, CadastroUsuario, Cartao, Historico } = require('../models');
const { Op } = require('sequelize');

const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const { includes } = require("../src/middlewares/loginSession");

const { validationResult } = require('express-validator'); 

const view = {
    pageName: "login",
    js: "login",
    users: {},
    dados: {},
    historico: {},
    cartao: {},
    popUp: false,
    mensagem: "mensagem",
    aviso: "aviso",
    error: [],
};


module.exports = {
    index: async (req, res, next) => {
        const { id, email } = req.session;


        view.users = req.session;

        try {
            if (!email) {
                view.pageName = 'login';
                view.js = 'login';
                view.popUp = false;
                

                res.render('login', view);

            } else {
                const idUsuario = await CadastroUsuario.findOne({
                    where: {
                        id_usuario: id,
                    },
                    include: [{ model: Cartao, as: 'cartao' }]
                })

                    .then(dados => {
                       


                        if (!dados) {
                            view.pageName = 'painel-user';
                            view.js = 'login';
                            view.popUp = true;
                            view.mensagem = "Você precisa completar o seu cadasto...",
                            view.aviso = 'preencha os dados de cadastro.'
                            view.dados = null;

                            res.render('painel-user', view);
                        } else {
                            view.pageName = 'painel-user';
                            view.js = 'login';
                            view.popUp = false;
                            view.dados = dados;

                            view.historico = Historico.findAll({
                                where: {  id_cadastroUsuario: dados.id },
                            });

                            console.log(view.historico)
                            view.cartao = Cartao.findAll({
                                where: { id_cadastroUsuario: dados.id }
                            });


                            res.render('painel-user', view);
                        }

                    });
            }

        } catch (err) {
            console.log(err)
            res.status(500).json({ mensagem: 'erro: tentativa de acesso ao Painel Administrativo' });
        }
    },

    login: async (req, res, next) => {

        //console.log(await bcrypt.hash("123456", 10));

        const { email, senha } = req.body;

        const hashedPassword = await bcrypt.hash(senha, 10);

        try {
            const user = await Usuario.findOne({
                where: {
                    email: req.body.email,
                },
            })
                .then(user => {

                    const validPassword = bcrypt.compareSync(senha, user.senha);

                    if (validPassword) {
                        req.session.id = user.id
                        req.session.name = user.nome_usuario
                        req.session.key = hashedPassword;
                        req.session.email = user.email
                        req.session.tipo = user.tipo_usuario;

                        res.redirect('/painel');

                    } else {
                        view.popUp = true;
                        view.mensagem = "O e-mail digitado ou a senha estão incorretos.";
                        view.aviso = "Tente novamente.";

                        res.render("login", view);
                    }

                })

        } catch (error) {
            view.popUp = true;
            view.mensagem = "O e-mail digitado ou a senha estão incorretos.";
            view.aviso = "Tente novamente.";
            res.render("login", view);
        }
    },
    cadastroUsuario: async (req, res, next) => {
        //const { nome_usuario, sobrenome_usuario, cpf, email, endereco, codigo_postal, estado, cidade, senha, tipo_usuario } = req.body;
        const hashedPassword = await bcrypt.hash(senha, 10);
        try {
            const user_existe = await Usuario.findOne({
                where: {
                    email: email
                }
            })
                .then(user_existe => {
                    if (user_existe) {
                        view.popUp = true;
                        view.mensagem = "Usuário já cadastrado com este e-mail.";
                        view.aviso = "Cadastre um novo e-mail ou faça Login.";

                        res.render("login", view);

                    } else {
                        const user = Usuario.create({
                            nome_usuario: req.body.nome_usuario,
                            email: req.body.email,
                            senha: hashedPassword,
                            tipo_usuario: "cliente",
                        });

                        view.popUp = true;
                        view.mensagem = "Bem vindo a Lumiere! Usuário cadastrado com sucesso!";
                        view.aviso = "Faça login para continuar.";

                        res.render("login", view);
                    }
                });

        } catch (error) {
            res.status(400).send("Erro ao cadastrar");
        }


    },
    cadastro: async (req, res, next) => {

        const { nome_usuario, email, senha } = req.body;
        const hashedPassword = await bcrypt.hash(senha, 10);

        try {
            const { errors } = validationResult(req);
            console.log("errors", errors)
    
            if (errors.length) {
                const erroFormatado = {
    
                }
                errors.forEach(erro =>
                    erroFormatado[erro.param] = erro.msg
                );
                console.log(erroFormatado)

                view.pageName = 'login';
                view.js = 'login';
                view.error = erroFormatado;
                
                return res.render('login', view);
            }

            const user_existe = await Usuario.findOne({
                where: {
                    email: email
                }
            })
                .then(user_existe => {
                    if (user_existe) {
                        view.popUp = true;
                        view.mensagem = "Usuário já cadastrado com este e-mail.";
                        view.aviso = "Cadastre um novo e-mail ou faça Login.";

                        res.render("login", view);

                    } else {
                        const user = Usuario.create({
                            nome_usuario: req.body.nome_usuario,
                            email: req.body.email,
                            senha: hashedPassword,
                            tipo_usuario: "cliente",
                        });

                        view.popUp = true;
                        view.mensagem = "Bem vindo a Lumiere! Usuário cadastrado com sucesso!";
                        view.aviso = "Faça login para continuar.";

                        res.render("login", view);
                    }
                });

        } catch (error) {
            res.status(400).send("Erro ao cadastrar");
        }
    },

    update: async (req, res, next) => {
        const { name, email1, password } = req.body;
        //console.log(req.body)
        //const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const usuarioEdit = await Usuario.update({ 
                nome_usuario: name, email: email1, }, 
            { where: { id: req.session.id } 
        });
            res.redirect("/");
        } catch (error) {
            res.status(400).send("Erro ao Alterar");
        }
    },

    novoCartao: async (req, res) => {
        res.send(req.body);

    },

    sair: async (req, res) => {
        req.session = null;
        console.log(res.session);
        res.redirect('/');
    },
};

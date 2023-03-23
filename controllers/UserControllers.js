const { Usuario } = require("../models");
const { Op } = require('sequelize');

const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");

const view = {
    pageName: "login",
    js: "login",
    popUp: false,
    mensagem: "mensagem",
    aviso: "aviso",
};


module.exports = {
    index: async (req, res, next) => {
        res.render("login", view);
    },

    login: async (req, res, next) => {
        const { email, senha } = req.body;

        const hashedPassword = await bcrypt.hash(senha, 10);
        
        try {
            const user = await Usuario.findOne({
                where: {
                    email: req.body.email,
                },
            })
            .then( user => {

                const validPassword = bcrypt.compareSync(senha, user.senha);

                if(validPassword){
                    req.session.id = user.id
                    req.session.name = user.nome_usuario
                    req.session.email = user.email
                    req.session.key = hashedPassword;
                    

                    res.redirect('/');
                } else {
                    view.popUp = true;
                    view.mensagem = "O e-mail digitado ou a senha estão incorretos.";
                    view.aviso = "Tente novamente.";

                    res.redirect("/login");
                }
                
            })

        } catch (error) {
            view.popUp = true;
            view.mensagem = "O e-mail digitado ou a senha estão incorretos.";
            view.aviso = "Tente novamente.";
            console.log("erro de usuário")
            res.redirect('/login');
        }
    },

    cadastro: async (req, res, next) => {
        const { nome_usuario, email, senha } = req.body;
        const hashedPassword = await bcrypt.hash(senha, 10);
        
        try {

            const user_existe = await Usuario.findOne({
                where: {
                    email: email
                }
            })
            .then(user_existe => {
                if(user_existe){
                    view.popUp = true;
                    view.mensagem = "Usuário ja cadastrado com este e-mail..";
                    view.aviso = "Cadastre um novo e-mail ou faça Login.";

                    res.redirect('/login');

                } else {
                    const user = Usuario.create({
                        nome_usuario: req.body.nome_usuario,
                        email: req.body.email,
                        senha: hashedPassword,
                        tipo_usuario: "cliente",
                    });

                    view.popUp = true;
                    view.mensagem = "Bem vindo a Lumiere! /n Usuário cadastrado com sucesso!";
                    view.aviso = "Faça login para continuar.";

                    res.redirect("/login");
                }
            });

        } catch (error) {
            res.status(400).send("Erro ao cadastrar");
        }
    },

    update: async (req, res, next) => {
        const { nome_usuario, email, senha } = req.body;
        const hashedPassword = await bcrypt.hash(senha, 10);
        
        try {
            const usuarioEdit = await Usuario.update({ nome_usuario, email, senha:hashedPassword }, { where: { id:req.session.id }} )

        } catch (error) {
            res.status(400).send("Erro ao Alterar");
        }
    },

};

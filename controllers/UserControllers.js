const { Usuario } = require("../models");
const { Op } = require('sequelize');

const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");



module.exports = {
    index: (req, res, next) => {
        res.render("login", { pageName: "login", js: "login" });
    },

    login: async (req, res, next) => {
        const { nome_usuario, senha } = req.body;
        
        try {
            const user = await Usuario.findOne({
                where: { nome_usuario }
            });

            if(!user){
                console.log("usuário ou senha errados");
            }

            const validPassword = bcrypt.compareSync(senha, user.senha);
            if(!validPassword){
                console.log("senha inválida");
            }

        } catch (error) {
            console.log("usuário ou senha errados");
            res.redirect('/login');
        }
    },

    cadastro: async (req, res, next) => {
        const { nome_usuario, email, senha } = req.body;
        const hashedPassword = await bcrypt.hash(senha, 10);
        
        try {
            const user = await Usuario.create({
                nome_usuario: req.body.nome_usuario,
                email: req.body.email,
                senha: hashedPassword,
                tipo_usuario: 'cliente',
            });

            console.log(user)

            res.status(201).redirect('/login');

        } catch (error) {
            res.status(400).send("Erro ao cadastrar");
        }
    }
};

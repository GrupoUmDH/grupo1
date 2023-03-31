const {CadastroUsuario} =require('../models');
const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");

module.exports = {
    index: async (req, res, next) => {
        console.log(req.session);

       try {
        const cadUsuario = await CadastroUsuario.findOne({
            where: {email:req.session.email}
        })
        .then(dados=>{
            console.log('deu certo')
            res.render("painel-user", {
                pageName: "painel-user",
                js: "painel-user",
                dados,
            });
        })
       } catch (error) {
        console.log('deu xabu')
       }
    },
}
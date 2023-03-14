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
        
        const user = await Usuario.findAll({
            where: { [Op.iLike]: req.body.nome_usuario },
        });

        console.log(user);
    },
};

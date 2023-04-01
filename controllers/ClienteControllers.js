const { CadastroUsuario } = require("../models");
const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");


module.exports = {
    index: async (req, res, next) => {
        console.log(req.session);

    },


}
const { check } = require("express-validator");

module.exports = [

    check("email").notEmpty().withMessage("Campo obrigatório").bail(),
    check("nome_usuario").notEmpty().withMessage("Campo obrigatório").bail(),
    check("senha").notEmpty().withMessage("Campo obrigatório").bail(),

];
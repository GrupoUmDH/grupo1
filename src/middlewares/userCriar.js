const { check } = require("express-validator");

module.exports = [
    check('nome_usuario').notEmpty().withMessage("Campo obrigatório").bail(),
    check('email').notEmpty().withMessage("Campo obrigatório").bail(),
    check('senha').notEmpty().withMessage("Campo obrigatório").bail(),
    check('tipo_usuario').notEmpty().withMessage("Campo obrigatório").bail(),
]
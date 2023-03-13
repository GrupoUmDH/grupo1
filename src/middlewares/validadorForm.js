const { check } = require("express-validator");

module.exports = [
    check("input-tipo").notEmpty().withMessage("Campo obrigatório").bail(),

    check("input-nome").notEmpty().withMessage("Campo obrigatório").bail(),

    check("input-descricao").notEmpty().withMessage("Campo obrigatório").bail(),

    check("input-classificacao")
        .notEmpty()
        .withMessage("Campo obrigatório")
        .bail(),

    check("input-categoria").notEmpty().withMessage("Campo obrigatório").bail(),

    check("input-valor").notEmpty().withMessage("Campo obrigatório").bail(),

    check("input-capa").notEmpty().withMessage("Campo Obrigatório").bail(),

    check("input-fundo").notEmpty().withMessage("Campo Obrigatorio").bail(),
];

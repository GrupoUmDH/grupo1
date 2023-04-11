const { check } = require("express-validator");

module.exports = [
    index = (req, res, next) => {
        if(req.body.metodo_pagamento == "cartão"){
            check("numero_cartao").notEmpty().withMessage("Campo obrigatório").bail(),
            check("nome_completo").notEmpty().withMessage("Campo obrigatório").bail(),
            check("validade").notEmpty().withMessage("Campo obrigatório").bail(),
            check("cvv").notEmpty().withMessage("Campo obrigatório").bail()
        } else {
            next();
        }
    },
    

]
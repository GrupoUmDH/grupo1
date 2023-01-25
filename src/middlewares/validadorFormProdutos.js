const { check } = require('express-validator');

module.exports = [
    check('check')
        .notEmpty().withMessage('Campo obrigatório').bail(),
    check('nome')
        .notEmpty().withMessage('Campo obrigatório').bail()
        .isLength({ min: 3, max: 20 }).withMessage('Deve possuir entre 3 e 10 caracteres').bail(),
    check('valor')
        .notEmpty().withMessage('Campo obrigatório').bail()
        .isNumeric().withMessage('Deve conter somente números').bail(),
    check('descricao')
        .notEmpty().withMessage('Campo obrigatório').bail(),
    check('categoria')
        .notEmpty().withMessage('Campo obrigatório').bail(),
    check('imagem')
        .notEmpty().withMessage('Campo obrigatório').bail(),
]
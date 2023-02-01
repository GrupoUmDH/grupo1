const { check } = require('express-validator');

module.exports = [
    
    check('id')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('tipo')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('nome')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('descricao')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('classificacao')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('categoria')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('valor')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('imagem')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('background')
    .notEmpty().withMessage('Campo obrigatório').bail()
     
]
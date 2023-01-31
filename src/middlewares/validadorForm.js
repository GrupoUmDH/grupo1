const { check } = require('express-validator');

module.exports = [
    // check('id')
    // .notEmpty().withMessage('ID obrigatório').bail(),

    check('nome')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('descricao')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('classificacao')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('valor')
    .notEmpty().withMessage('Campo obrigatório').bail()
        
]
const { check } = require('express-validator');

module.exports = [
    // check('id')
    // .notEmpty().withMessage('ID obrigatório').bail(),

    check('nome')
    .notEmpty().withMessage('Nome obrigatório').bail(),
    
    check('descricao')
    .notEmpty().withMessage('Descrição obrigatória').bail(),
    
    check('classificacao')
    .notEmpty().withMessage('Classificação obrigatória').bail(),

    check('valor')
    .notEmpty().withMessage('Valor obrigatório').bail()
        
]
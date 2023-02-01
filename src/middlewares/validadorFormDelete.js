const { check } = require('express-validator');

module.exports = [

    check('tipo')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('id')
    .notEmpty().withMessage('Campo obrigatório').bail()
         
]
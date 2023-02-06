const { check } = require('express-validator');

module.exports = [

    check('tipo')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('idDelete')
    .notEmpty().withMessage('Campo obrigatório').bail()
         
]
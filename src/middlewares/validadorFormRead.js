const { check } = require('express-validator');

module.exports = [
    
    check('tipoRead')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('idRead')
    .notEmpty().withMessage('Campo obrigatório').bail()
         
]
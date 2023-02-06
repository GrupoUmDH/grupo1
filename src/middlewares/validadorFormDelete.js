const { check } = require('express-validator');

module.exports = [

    check('tipoDelete')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('idDelete')
    .notEmpty().withMessage('Campo obrigatório').bail()
         
]
const { check } = require('express-validator');

module.exports = [
    
    check('idCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('tipoCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('nomeCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('descricaoCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('classificacaoCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('categoriaCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('valorCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('imagemCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('backgroundCreate')
    .notEmpty().withMessage('Campo obrigatório').bail()
     
]
const { check } = require('express-validator');

module.exports = [
    
    check('idUpdate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('tipo')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('nomeUpdate')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('descricaoUpdate')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('classificacaoUpdate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('categoriaUpdate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('valorUpdate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('imagemUpdate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('backgroundUpdate')
    .notEmpty().withMessage('Campo obrigatório').bail()
     
]
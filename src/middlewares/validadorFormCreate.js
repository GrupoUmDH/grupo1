const { check } = require('express-validator');

module.exports = [
    
    // check('idCreate')
    // .notEmpty().withMessage('Campo obrigatório').bail(),

    check('tipoCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('nomeCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('descricaoCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),
    
    check('classificacoesCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('categoriaCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    check('valorCreate')
    .notEmpty().withMessage('Campo obrigatório').bail(),

    // check('imagemCreate')
    // .custom({() => {console.log("teste")}})
         
    // .withMessage('Campo obrigatório')

    // check('backgroundCreate')
    // .notEmpty().withMessage('Campo obrigatório').bail()
     
]
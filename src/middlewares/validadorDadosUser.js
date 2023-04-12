// Validar Dados usuários
// 1º - APP.js app.use('/painel', painelRouter);
// 2º - ROTA router.get('/users/atualizaDados', AdmControllers.dadosUpdate);
// 3º - Importar Validador na Rota router.put('/users/atualizaDados', AdmControllers.dadosUpdate); linha 51 ?

const { check } = require("express-validator");

module.exports = [
    check("nome_usuario").notEmpty().withMessage("Campo obrigatório").bail(),
    check("sobrenome").notEmpty().withMessage("Campo obrigatório").bail(),
    check("cpf").notEmpty().withMessage("Campo obrigatório").bail(),
    check("codigo_postal").notEmpty().withMessage("Campo obrigatório").bail(),
    check("endereco").notEmpty().withMessage("Campo obrigatório").bail(),
    check("bairro").notEmpty().withMessage("Campo obrigatório").bail(),
    check("cidade").notEmpty().withMessage("Campo obrigatório").bail(),
    check("estado").notEmpty().withMessage("Campo obrigatório").bail(),
    check("pais").notEmpty().withMessage("Campo obrigatório").bail(),
];


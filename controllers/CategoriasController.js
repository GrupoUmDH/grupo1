const { Categorias, Tipo } = require('../models');

module.exports = {
    index: async (req, res) =>{
        const categorias = await Categorias.findAll();
        const tipo = await Tipo.findAll();
        res.render('categorias', { categorias, tipo});
    }
}
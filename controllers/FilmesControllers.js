const { Categorias } = require('../models');

module.exports = {
    index: async (req, res) => {
        const categorias = await Categorias.findAll();
        res.render('teste',{categorias});
        
    }
}
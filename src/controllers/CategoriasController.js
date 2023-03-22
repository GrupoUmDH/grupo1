const { Categorias } = require('../models/Categoria');

module.exports = {
    index: (req, res) =>{
        const categorias = Categoria.findAll();
        res.render('categorias', { cattegorias });
    }
}
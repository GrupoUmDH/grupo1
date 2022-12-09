const CategoriasModel = require('../models/CategoriasModel');

module.exports = {
    categorias: (req, res) =>{
        const categoria = CategoriasModel.index();
        return res.render('categorias', {categorias:categoria, pageName: 'categorias' })
    }
}
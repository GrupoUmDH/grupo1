const CategoriasModel = require('../models.CategoriasModel');

module.exports = {
    index: (req, res) =>{
        const categorias = CategoriasModel.index();
        return res.render('index', {categorias})
    }
}
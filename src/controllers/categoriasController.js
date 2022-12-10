const CategoriasModel = require('../models/CategoriasModel');
const produtosModel= require('../models/ProdutosModel')

module.exports = {
    categorias: (req, res) =>{
        const categoria = CategoriasModel.index();
        return res.render('categorias', {categorias:categoria, pageName: 'categorias', js: 'categorias' })
    },
    listar: (req, res) => {
        const categoria = req.query.categoria || 'acao';
        const produtos = produtosModel.listar(categoria);
        return res.render('categorias', { pageName: 'categorias', produtos, categoria, js:'categorias'});

    }
}
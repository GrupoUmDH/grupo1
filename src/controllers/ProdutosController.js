const ProdutosModel = require('../models/ProdutosModel');
const { categorias } = require('./categoriasController');

module.exports = {
    filmes: (req, res) => {
        const filmes = ProdutosModel.filmes();
        return res.render('filmes', { pageName: 'Filmes' })
    },
    cadastro: (req, res) => {
        const cadastro = ProdutosModel.cadastroProduto();
        return res.render('cadastro', { pageName: 'cadastroProduto' });
    },
    listar: (req, res) => {
        const categoria = req.query.categoria || 'acao';
        const produtos = ProdutosModel.listar(categoria);
        return res.render('categorias', { pageName: 'categorias', produtos, categoria});

    }
}
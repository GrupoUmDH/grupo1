const ProdutosModel = require('../models/ProdutosModel');
const { categorias } = require('./categoriasController');

module.exports = {
    filmes: (req, res) => {
        const filmes = ProdutosModel.filmes();
        return res.render('filmes', { pageName: 'Filmes' })
    },
    series: (req, res) =>{
        const listaSeries = ProdutosModel.index();
        return res.render('series', { series: listaSeries, title: 'series' })
       
    },
    cadastro: (req, res) => {
        const cadastro = ProdutosModel.cadastroProduto();
        return res.render('cadastro', { pageName: 'cadastroProduto' });
    }
}


const ProdutosModel = require('../models/ProdutosModel');

module.exports = {
    filmes: (req, res) =>{
        const filmes = ProdutosModel.filmes();
        return res.render('filmes', { title: 'Filmes' })
    },
    cadastro: (req, res) =>{
        const cadastro = ProdutosModel.cadastroProduto();
        return res.render('cadastro', { title: 'cadastroProduto' });
    }
}
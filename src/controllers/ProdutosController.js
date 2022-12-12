const ProdutosModel = require('../models/ProdutosModel');

module.exports = {
    filmes: (req, res) => {
        const filmes = ProdutosModel.filmes();
        return res.render('filmes', { pageName: 'Filmes', Filmes:filmes, js:'' })
    },
    series: (req, res) =>{
        const listaSeries = ProdutosModel.series();
        return res.render('series', { series: listaSeries, pageName: 'series' , js:''})
       
    },
    cadastro: (req, res) => {
        const cadastro = ProdutosModel.cadastroProduto();
        return res.render('cadastro', { pageName: 'cadastroProduto', js:'' });
    },
    listar: (req, res) => {
        const categoria = req.query.categoria || 'acao';
        const produtos = ProdutosModel.listar(categoria);
        return res.render('categorias', { pageName: 'categorias', produtos, categoria, js:'categorias'});
    },
    produtos: (req, res) => {
        const filmes = ProdutosModel.produtos();
        return res.render('produtos', { pageName: 'produtos',Filme: filmes , js: 'adicionarAoCarrinho' });
    }, 
    // escolher: (req, res) => {
    //     const todosFilmes = req.query.tipo || 'acao';
    //     const todasSeries = ProdutosModel.escolher(tipo);
    //     return res.render('categorias', { pageName: 'categorias', tipo:tipo  });
    // }
}


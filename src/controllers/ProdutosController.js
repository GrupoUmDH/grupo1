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
        const tipo = req.query.tipo || 'filmes';
        const categoria = req.query.categoria || 'ação';
        const produtos = ProdutosModel.listar(tipo, categoria);
        console.log(produtos);
        return res.render('categorias', { pageName: 'categorias', produtos, tipo, categoria, js:'categorias'});
    },
    produto: (req, res) => {
        const filme = ProdutosModel.filmes();
        return res.render('produtos', { pageName: 'produtos', Filme: filme , js: 'adicionarAoCarrinho' });
    }
}


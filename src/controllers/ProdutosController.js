const ProdutosModel = require('../models/ProdutosModel');

module.exports = {
    filmes: (req, res) =>{
        const filmes = ProdutosModel.filmes();
        return res.render('filmes', { pageName: 'Filmes' })
    }
}

module.exports = {
    series: (req, res) =>{
        const series = ProdutosModel.series();
        return res.render('series', { pageName: 'Series' })
    }
}
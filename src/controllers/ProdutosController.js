const ProdutosModel = require('../models/ProdutosModel');

module.exports = {
    filmes: (req, res) =>{
        const filmes = ProdutosModel.filmes();
        return res.render('filmes', { title: 'Filmes' })
    },
    series: (req, res) =>{
        const listaSeries = ProdutosModel.index();
        return res.render('series', { series: listaSeries, title: 'series' })
    }
}


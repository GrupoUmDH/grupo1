const ProdutosModel = require('../models/ProdutosModel');

module.exports = {
    index: (req, res) => {
        const filmes = ProdutosModel.filmes();
        const series = ProdutosModel.series();
        //res.render('VIEW', {OBJETO })
        return res.render('index', {listaFilmes: filmes, listaSeries: series , pageName: 'home', js: 'index'})
    }
}

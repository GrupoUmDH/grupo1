const ProdutosModel = require('../models/ProdutosModel');

module.exports = {
    index: (req, res) => {
        const filmes = ProdutosModel.filmes();
        //res.render('VIEW', {OBJETO })
        return res.render('index', {listaFilmes: filmes, pageName: 'home', js: ''})
    }
}

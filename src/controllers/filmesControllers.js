const FilmesModel = require('../models/filmesModels');

module.exports = {
    listaFilmes: (req, res) => {
        const filmes = FilmesModel.index();
        //res.render('VIEW', {OBJETO })
        return res.render('index', {listaFilmes: filmes, title: 'home'})
    }
}

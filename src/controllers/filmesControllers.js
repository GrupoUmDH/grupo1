const FilmesModel = require('../models/filmesModels');

module.exports = {
    listaFilmes: (req, res) => {
        const filmes = FilmesModel.dadosFilmes();
        return res.render('filmes', {listaFilmes: filmes, title: 'Lista de Filmes'})
    }
}
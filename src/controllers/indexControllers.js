const FilmesModel = require('../models/filmesModels');

module.exports = {
    index: (req, res) => {
        //controler comunicando com o model
        const filmes = FilmesModel.dadosFilmes();
        //controler comunicando com a view
        return res.render('dadosFilmes', { filmes })
    }
}
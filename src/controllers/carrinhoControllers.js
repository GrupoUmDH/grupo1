const FilmesCarrinho = require('../models/Produto')

module.exports = {
    carinho: (req, res) => {
        //const listafilme = FilmesCarrinho.index();
        //console.log(listafilme)
        return res.render('carrinho', { title: 'carrinho', js: 'adicionarAoCarrinho'})
    }
}
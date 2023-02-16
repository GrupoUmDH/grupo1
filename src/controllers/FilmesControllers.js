const { Filmes } = require('../models');

module.exports = {
    index: (req, res) => {
        const filmes = Filmes.findAll();
        res.render('produtos',{filmes});
    }
}
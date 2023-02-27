const { Categorias, Classificacao, Filme } = require('../models');


module.exports = {
    index: async (req, res) => {

        const filmes = await Filme.findAll({
            include: [
                {
                    model: Classificacao,
                    as: "indicacao",
                    require: true,
                },
            ],
        });
        console.log(filmes);

        res.render('teste',{ filmes, pageName: 'filmes', js: 'adicionarAoCarrinho'});
        
    },

    form: async(req, res) => {
        let filme;
        const {id} = req.params;

        if (id) filme = await Filme.findByPk(id);

        res.render('testeADD',{ pageName: 'addFilme', js: '', filme});
    },

    criar: async (req, res) => {
        
    },
}
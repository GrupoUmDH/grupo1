const { Categorias, Classificacao, Filme } = require('../models');


module.exports = {
    index: async (req, res) => {
        const categorias = await Categorias.findAll();
        const classificacoes = await Classificacao.findAll();
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

        res.render('teste',{categorias, classificacoes, filmes, pageName: 'filmes', js: 'adicionarAoCarrinho'});
        
    },

    buscar: async (req, res) => {
        const categorias = await Categorias.findAll();
        const classificacoes = await Classificacao.findAll();
        const id = req.query.idRead;
        const filmes = await Filme.findOne({
            where: { id:id }
        });
        console.log(filmes);

        res.render('teste',{categorias, classificacoes, filmes});
        
}

}
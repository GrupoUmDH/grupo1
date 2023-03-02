const { Categorias, Classificacao, Filme } = require('../models');
const Op = require('sequelize');



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

        res.render('teste',{ filmes, pageName: 'filmes', js: 'adicionarAoCarrinho'});
        
    },

    form: async(req, res) => {
        let filme;
        const {id} = req.params;

        if (id) filme = await Filme.findByPk(id);

        const categoria = await Categorias.findAll({
            order: [ 'nome'
              ]
        });

        const classificacao = await Classificacao.findAll({
            order: [ 'nome'
              ]
        });

        console.log(categoria);

        res.render('testeADD',{ pageName: 'addFilme', js: '', filme, categoria, classificacao});
    },

    criar: async (req, res) => {
        const { novoFilme } = req.params;

        await Filme.create(novoFilme);
        //await Filme.create({})

        console.log(req.query);
    },

    editar: async (req ,res) => {

    },
}
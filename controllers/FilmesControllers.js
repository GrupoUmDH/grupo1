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

        res.render('teste', { categorias, classificacoes, filmes });

    },

    buscar: async (req, res) => {
        const categorias = await Categorias.findAll();
        const classificacoes = await Classificacao.findAll();
        const id = req.query.idRead;
        const filmes = await Filme.findOne({
            where: { id: id }
        });
        console.log(filmes);

        res.render('teste', { categorias, classificacoes, filmes });

    },

    criar: async (req, res) => {
        const id = req.query.idRead;
        const filmes = await Filme.findOne({
            where: { id: id }
        });
        console.log(filmes);

        res.render('teste', { categorias, classificacoes, filmes });

    },

    categoriasFilme: async (req, res) =>{

        const categorias = await Categorias.findAll({
            order:["nome"]
        });
        
        res.render('cadastroProduto', { pageName: 'cadastroProduto', errors: [], js: 'cadastroProduto', categorias});
    }

    }


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

        res.render("teste", { categorias, classificacoes, filmes });
    },

    buscar: async (req, res) => {
        const categorias = await Categorias.findAll();
        const classificacoes = await Classificacao.findAll();
        const id = req.query.idRead;
        const filmes = await Filme.findOne({
            where: { id: id },
        });
        console.log(filmes);

        res.render("teste", { categorias, classificacoes, filmes });
    },

    criar: async (req, res) => {
        const id = req.query.idRead;
        const filmes = await Filme.findOne({
            where: { id: id },
        });
        console.log(filmes);

        res.render("teste", { categorias, classificacoes, filmes });
    },

    categoriasFilme: async (req, res) => {
        const categorias = await Categorias.findAll({
            order: ["nome"],
        });

        res.render("cadastroProduto", {
            pageName: "cadastroProduto",
            errors: [],
            js: "cadastroProduto",
            categorias,
        });
    },

    form: async (req, res) => {
        let filme;
        const { id } = req.params;

        if (id) filme = await Filme.findByPk(id);

        const categoria = await Categorias.findAll({
            order: ["nome"],
        });

        const classificacao = await Classificacao.findAll({
            order: ["nome"],
        });

        console.log(categoria);

        res.render("testeADD", {
            pageName: "addFilme",
            js: "addFilme",
            filme,
            categoria,
            classificacao,
        });
    },

    editar: async (req, res) => {

    },

    addFilme: async (req, res) => {
        
        const { nome, descricao, categoria, classificacao, valor,  } = req.body;

        res.send(nome);
    },
};


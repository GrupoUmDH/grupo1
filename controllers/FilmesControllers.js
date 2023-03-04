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

        res.render("teste", { pageName: "filmes", js:"filmes", filmes });
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
        console.log(req);

        res.send("teste" + req.query);
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

        });

        const classificacao = await Classificacao.findAll({
            order: ["nome"],
        });

        //console.log(categoria);

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

        //console.log(parseInt(req.body.categoria))

        await Filme.create( {
            nome : req.body.nome,
            imagem : req.body.imagem.replace('.jpg', ''),
            background : req.body.background.replace('.jpg', ''),
            valor : req.body.valor,
            tipo : req.body.tipo,
            categorias_id : parseInt(req.body.categorias_id),
            classificacoes_id : parseInt(req.body.classificacoes_id),
            descricao : req.body.descricao,
        } );

        res.redirect('/produtos/teste');
    },


};


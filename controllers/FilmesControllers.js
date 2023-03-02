const { Categorias, Classificacao, Filme } = require('../models');
const Op = require('sequelize');
const { validationResult } = require('express-validator');


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
        console.log(req);

        res.send("teste" + req.query);
    },

    deletaProduto: (req, res) => {
        const { errors } = validationResult(req);
        console.log("errors", errors)

        if (errors.length) {
            const errosFormatados = {

            }
            errors.forEach(erro =>
                errosFormatados[erro.param] = erro.msg
            );
            return res.render('cadastroProduto', { pageName: 'cadastroProduto', js: 'montarCarrinho', errors: errosFormatados, produtos: null });
        }

        Filme.destroy({where: {
            id: req.body.idDelete
        }
        
        })
        res.send(`O produto de id ${req.body.idDelete} foi deletado com sucesso`)
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

        //console.log(categoria);

        res.render("testeADD", {
            pageName: "addFilme",
            js: "addFilme",
            filme,
            categoria,
            classificacao,
        });
    },

    createProduto: async (req, res) => {

        console.log(req.body);

        const { errors } = validationResult(req);
        //console.log("errors", errors)

        if (errors.length) {
            const errosFormatados = {

            }
            errors.forEach(erro =>
                errosFormatados[erro.param] = erro.msg
            );

            return res.render('cadastroProduto', { pageName: 'cadastroProduto', js: 'montarCarrinho', errors: errosFormatados, produtos: null });
        } 
        const params = req.body;
        const filmes = await Filme.create({
            nome: params.nomeCreate,
            imagem: "Alterar posterior", //params.imagemCreate
            background: "Alterar posterior", //params.backgroundCreate
            valor: params.valorCreate,
            tipo: params.tipoCreate,
            categorias_id: params.categoriaCreate,
            classificacoes_id: 1, //params.classificacoesCreate
            descricao: params.descricaoCreate
        });
        console.log(req);
        res.send(`O produto ${req.params.nomeCreate} foi criado com sucesso`)
    },

    editar: async (req, res) => {

    },

    addFilme: async (req, res) => {
        
        console.log(req);
    },
};


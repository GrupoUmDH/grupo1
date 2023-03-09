const { Categorias, Classificacao, Filme } = require("../models");
const Op = require("sequelize");
const { validationResult } = require("express-validator");
const path = require("path");


module.exports = {
    index: async (req, res) => {
        const filme = await Filme.findAll({});

        const categoria = await Categorias.findAll({});

        const classificacoes = await Classificacao.findAll({
            order: ["nome"],
        });

        //console.log(categoria);

        res.render("painelADM", {
            pageName: "painelADM",
            js: "painelADM",
            filme,
            categoria,
            classificacoes,
        });
    },

    editar: async (req, res) => {
        const { id } = req.body;

        const filme = await Filme.findByPk(id);

        const categoria = await Categorias.findAll({});

        const classificacoes = await Classificacao.findAll();

        //console.log(filme);

        res.render("painelADD", {
            pageName: "painelADD",
            js: "painelADD",
            filme,
            categoria,
            classificacoes,
            titulo: "Editar",
        });
    },

    atualiza: async (req, res) => {
        console.log(req.body);
    },

    formCriar: async (req, res) => {
        const filme = await Filme.findAll({});

        const categoria = await Categorias.findAll({});

        const classificacoes = await Classificacao.findAll({});

        //console.log(categoria);

        res.render("painelADD", {
            pageName: "painelADD",
            js: "painelADD",
            filme,
            categoria,
            classificacoes,
            titulo: "Adicionar",
        });
    },

    criar: async (req, res) => {

        const { errors } = validationResult(req);
        //console.log("errors", errors)

        if (errors.length) {
            const errosFormatados = {};
            errors.forEach((erro) => (errosFormatados[erro.param] = erro.msg));

            return res.render("cadastroProduto", {
                pageName: "cadastroProduto",
                js: "montarCarrinho",
                errors: errosFormatados,
                produtos: null,
            });
        } 
        
        const novofilme = {
            nome: req.body.nome,
            imagem: req.body.fundo.replace(".jpg", ""),
            background: req.body.capa.replace(".jpg", ""),
            valor: req.body.valor,
            tipo: req.body.tipo,
            categorias_id: parseInt(req.body.categorias_id),
            classificacoes_id: parseInt(req.body.classificacoes_id),
            descricao: req.body.descricao,
        };

        //console.log(novofilme);

        await Filme.create(novofilme);

        res.redirect("/painel");
    },

    /*
    form: async (req, res) => {
        let filme;
        const { id } = req.params;

        if (id) filme = await Filme.findByPk(id);

        const categoria = await Categorias.findAll({});

        const classificacao = await Classificacao.findAll();

        //console.log(categoria);

        res.render("testeADD", {
            pageName: "addFilme",
            js: "addFilme",
            filme,
            categoria,
            classificacao,
        });
    },

    addFilme: async (req, res) => {
        const novofilme = {
            nome: req.body.nome,
            imagem: req.body.fundo.replace(".jpg", ""),
            background: req.body.capa.replace(".jpg", ""),
            valor: req.body.valor,
            tipo: req.body.tipo,
            categorias_id: parseInt(req.body.categorias_id),
            classificacoes_id: parseInt(req.body.classificacoes_id),
            descricao: req.body.descricao,
        };

        console.log(novofilme);

        await Filme.create(novofilme);

        res.redirect("/produtos/teste");
    },

    */
};

const { Categorias, Classificacao, Filme } = require("../models");
const Op = require("sequelize");
const { validationResult } = require("express-validator");
const path = require("path");

module.exports = {
    index: async (req, res) => {
        const filme = await Filme.findAll({});

        const categoria = await Categorias.findAll({
            order: ["nome"],
        });

        const classificacoes = await Classificacao.findAll({
        });

        //console.log(filme);

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
        const { id } = req.body;

        console.log(req.body);

        const updateFilme = await {
            nome: req.body.nome,
            imagem: req.body.fundo.replace(".jpg", ""),
            background: req.body.capa.replace(".jpg", ""),
            valor: req.body.valor,
            tipo: req.body.tipo,
            categorias_id: parseInt(req.body.categorias_id),
            classificacoes_id: parseInt(req.body.classificacoes_id),
            descricao: req.body.descricao,
        };

        await Filme.update(updateFilme, {
            where: { id },
        });

        res.redirect("/painel");
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

    deletar: async (req, res) => {
        const { id } = req.body;

        await Filme.destroy({
            where: { id },
        });

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

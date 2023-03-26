const { Categorias, Classificacao, Filme, Usuario } = require("../models");
const Op = require("sequelize");
const { validationResult } = require("express-validator");
const path = require("path");

module.exports = {
    index: async (req, res) => {
        try {

            if (req.session.tipo == 'admin') {
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
            } else {
                res.redirect('/');
            }

        } catch (err) {
            console.log(err)
            return res.status(500).json({ mensagem: 'erro: tentativa de acesso ao Painel Administrativo' });
        }
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

        //console.log(req.body);

        const filme = await Filme.findByPk(id);

        const updateFilme = await {
            nome: req.body.nome,
            imagem: !req.body.capa ? filme.imagem : path.parse(req.files.fundo[0].filename).name,
            background: !req.body.fundo ? filme.background : path.parse(req.files.capa[0].filename).name,
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
            imagem: path.parse(req.files.fundo[0].filename).name,
            background: path.parse(req.files.capa[0].filename).name,
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

    // CRUD - Painel administrativo - Configurando usuários

    userConfig: async (req, res) => {
        const users = await Usuario.findAll({});
        res.render('userConfig', { pageName: "painelADD", js: "painelADD", users });
    },

    userCriar: async (req, res) => {

    },

    userDelete: async (req, res) => {

    },

    userUpdate: async (req, res) => {

    },

};

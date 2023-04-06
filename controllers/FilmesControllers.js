const { Categorias, Classificacao, Filme} = require('../models');
const Op = require('sequelize');
const { validationResult } = require('express-validator');
const path = require('path');

const search = require('../src/request/search');

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

        const categoria = await Categorias.findAll({});

        const classificacao = await Classificacao.findAll({
            order: ["nome"],
        });

        res.render("teste", {
            pageName: "filmes",
            js: "filmes",
            filmes,
            categoria,
            classificacao,
        });
    },

    buscar: async (req, res) => {

        /*
        // faço uma requisição na minha api mostranho os filmes buscados
        //
        */

        try {
            await search.getFilme(req.query.search)
                .then((response) => {
                    console.log(response.data)
                    const resultado = response.data.results;
                    res.render('search', {pageName:'pesquisa', js:'', resultado})
                });
        } catch (error) {
            res.render("search", {
                pageName: "pesquisa",
                js: "",
                mensagem: "Não foi encontrato filmes/series",
            }); 
        }
        

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

    categoriaclassificacaoFilme: async (req, res) => {
        const categorias = await Categorias.findAll({
            order: ["nome"],
        });
        const classificacao = await Classificacao.findAll({
            order: ["id"],
        });

        console.log(classificacao)
        console.log(categorias)


        res.render("cadastroProduto", {
            pageName: "cadastroProduto",
            errors: [],
            js: "cadastroProduto",
            categorias,
            classificacao,
        });
    },
    tipoCategoriaFilme: async (req, res) => {
        const { tipo, categoria } = req.query;
        const categorias = await Categorias.findAll();
       console.log(tipo)
       console.log(categoria)
        const filmes = await Filme.findAll(
            {where:{categorias_id:categoria ? categoria : 1, tipo:tipo ? tipo : 'filme'}},
            {
            include: [
                {
                    model: Categorias,
                    as: "genero",
                    require: true,
                },   
            ],
        });
        console.log(filmes)
        res.render("categorias", {
            pageName: "categorias",
            errors: [],
            js: " ",
            filmes,
            categorias,
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
            imagem: path.parse(req.files.imagemCreate[0].filename).name,
            background: path.parse(req.files.backgroundCreate[0].filename).name,
            valor: params.valorCreate,
            tipo: params.tipoCreate,
            categorias_id: params.categoriaCreate,
            classificacoes_id: params.classificacoesCreate,
            descricao: params.descricaoCreate
        });
        console.log(req);
        res.render("teste", { pageName: "filmes", js:"filmes", categorias:params.categoriaCreate, classificacoes:params.classificacoesCreate, filmes:[filmes] });
        
    },

    atualizaProduto: async (req, res) => {

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
        console.log(req.files)
        const filmes = await Filme.update({
            nome: params.nomeUpdate,
            imagem: path.parse(req.files.imagemUpdate[0].filename).name,
            background: path.parse(req.files.backgroundUpdate[0].filename).name,
            valor: params.valorUpdate,
            tipo: params.tipoUpdate,
            categorias_id: params.categoriaUpdate,
            classificacoes_id: params.classificacoesUpdate,
            descricao: params.descricaoUpdate
        },
            {
                where: { id:params.idUpdate } 
            }
           
        );
        console.log(req);
        res.render("teste", { pageName: "filmes", js:"filmes", categorias:params.categoriaCreate, classificacoes:1, filmes:[req.params] });
        
    },

};


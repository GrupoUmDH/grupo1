const { Categorias, Classificacao, Filme} = require('../models');
const ProdutosModel = require('../src/models/ProdutosModel');
const { validationResult } = require('express-validator');


module.exports = {

    produto: async (req, res) => {
        const produto = await Filme.findOne({
            where: {nome : req.query.nome}
        });

        const categoria = await Categorias.findByPk(produto.categorias_id);
        const classificacao = await Classificacao.findByPk(produto.classificacoes_id);

        return res.render('produtos', { 
            pageName: 'produtos', 
            js: 'adicionarAoCarrinho', 
            produto, categoria, classificacao,
        });
    },


    filmes: (req, res) => {
        const filmes = ProdutosModel.filmes();
        return res.render("filmes", {
            pageName: "filmes",
            Filmes: filmes,
            js: "montarCarrinho",
        });
    },
    series: (req, res) => {
        const series = ProdutosModel.series();
        return res.render("series", {
            series: series,
            pageName: "series",
            js: "montarCarrinho",
        });

    },
    cadastro: (req, res) => {
        const cadastro = ProdutosModel.cadastroProduto();
        return res.render("cadastro", {
            pageName: "cadastroProduto",
            js: "montarCarrinho",
        });
    },
    listar: (req, res) => {
        const tipo = req.query.tipo || 'filmes';
        const categoria = req.query.categoria || 'ação';
        const produtos = ProdutosModel.listar(tipo, categoria);
        console.log(produtos);
        return res.render('categorias', { pageName: 'categorias', produtos, tipo, categoria, js: 'categorias' });
    },

    

    //criar produto
    createProduto: (req, res) => {

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
        ProdutosModel.createOne(req)
        res.send(`O produto ${req.body.nomeCreate} foi criado com sucesso`)
    },
    //procurar produto
    buscaProduto: (req, res) => {
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
        res.send(ProdutosModel.findOne(req, res))


        // let filme = ProdutosModel.findOne(req);
        // return res.render('produtos', { pageName: 'produtos', js:' ', filme });
        // res.send(ProdutosModel.findOne(req));
    },
    listaProduto: (req, res) => {
        res.send(ProdutosModel.findByParams(req))
    },
    //deletar produto
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

        ProdutosModel.deleteOne(req)
        res.send(`O produto de id ${req.body.idDelete} foi deletado com sucesso`)
    },
    // atualização de produto
    atualizaProduto: (req, res) => {
        const { errors } = validationResult(req);
        console.log("errors", errors)

        if (errors.length) {
            console.log("Aqui")
            const errosFormatados = {

            }
            errors.forEach(erro =>
                errosFormatados[erro.param] = erro.msg
            );
            console.log("Aqui 2", errosFormatados)
            return res.render('cadastroProduto', { pageName: 'cadastroProduto', js: 'montarCarrinho', errors: errosFormatados, produtos: null });
        }
        ProdutosModel.updateOne(req)
        res.send(`O produto de id ${req.body.idUpdate} foi atualizado com sucesso`)
    }
}
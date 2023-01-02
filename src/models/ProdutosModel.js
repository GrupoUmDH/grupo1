const produtos = require('../database/filmes.json');
const series = require('../database/series.json');
const fs = require('fs');
const path = require('path');
const { produto } = require('../controllers/ProdutosController');

module.exports = {
    filmes: () => {
        return produtos;
    },
    series: () => {
        return series;
    },
    listar: (tipo, categoria) => {
        if (tipo == "series") {
            if (categoria) {
                return series.filter((serie) => serie.categoria == categoria);
            } else {
                return series;
            }
        } else if (tipo == "filmes") {
            if (categoria) {
                return produtos.filter(
                    (produto) => produto.categoria == categoria
                );
            } else {
                return produto;
            }
        } else {
            return [{}];
        }
    },
    createOne: (req) => {
        let novoProduto = {
            id: produtos[produtos.length - 1].id + 1,
            nome: req.body.nome,
            descricao: req.body.descricao,
            categoria: req.body.categoria,
            classificacao: req.body.classificacao,
            valor: req.body.valor,
            imagem: req.file.filename,
        };
        produtos.push(novoProduto);
        fs.writeFileSync(
            path.join(__dirname, "../database/filmes.json"),
            JSON.stringify(produtos, null, 4)
        );
    },

    findAllById: (ids) => {
        return produtos.filter((produto) => ids.includes(produto.id));
    },

    findOne: (req) => {
        let found = produtos.find((produto) => produto.id == req.query.id);
        return found;
    },
    findByParams: (req) => {
        let found = produtos.find((produto) => produto.id == req.params.id);
        return found;
    },
    deleteOne: (req) => {
        let novoproduto = produtos.filter(
            (produto) => produto.id != req.body.id
        );
        if (!novoproduto.length) return;
        fs.writeFileSync(
            path.join(__dirname, "../database/produtos.json"),
            JSON.stringify(novoproduto, null, 4)
        );
    },
    updateOne: (req) => {
        produtos.forEach((produto) => {
            if (produto.id != req.body.id) return;
            produto.nome = req.body.nome;
            produto.descricao = req.body.descricao;
            produto.valor = req.body.valor;
            produto.imagem = req.body.imagem;
        });
        fs.writeFileSync(
            path.join(__dirname, "../database/produtos.json"),
            JSON.stringify(produtos, null, 4)
        );
    },
};


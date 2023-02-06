const produtos = require('../database/filmes.json');
const series = require('../database/series.json');
const fs = require('fs');
const path = require('path');

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

  //criar produto
  createOne: (req) => {

    let novoProduto = {
      id: produtos[produtos.length - 1].id + 1,
      tipo: req.body.tipoCreate,
      categoria: req.body.categoriaCreate,
      nome: req.body.nomeCreate,
      classificacao: req.body.classificacaoCreate,
      valor: req.body.valorCreate,
      descricao: req.body.descricaoCreate,
      imagem: req.files.imagemCreate[0].filename,
      background: path.parse(req.files.backgroundCreate[0].filename).name,
    };
    fs.writeFileSync(path.join(__dirname, "../database/filmes.json"), JSON.stringify(produtos, null, 4));

    if (novoProduto.tipo == "filmes") {
      produtos.push(novoProduto);
      fs.writeFileSync(
        path.join(__dirname, "../database/filmes.json"),
        JSON.stringify(produtos, null, 4));
    } if (novoProduto.tipo == "series") {
      series.push(novoProduto);
      fs.writeFileSync(
        path.join(__dirname, "../database/series.json"),
        JSON.stringify(series, null, 4));
    }
  },
  //procurar produto
  findOne: (req) => {
    let found = produtos.find(produto => produto.id == req.query.idRead);
    return found


    // findOne: (req) => {
    //   let found = produtos.find(produto => produto.id == req.query.id);
    //   return found;
  },
  // findByParams: (req) => {
  //   let found = produtos.find((produto) => produto.id == req.params.id);
  //   return found;
  // },

  //deletar produto
  deleteOne: (req) => {
    const filteredproduct = produtos.filter((produto) => produto.id != req.body.idDelete)
    console.log('produtos', filteredproduct)

    if (req.body.tipoDelete == "filmes") {
      fs.writeFileSync(path.join(__dirname, "../database/filmes.json"), JSON.stringify(filteredproduct, null, 4));
    } if (req.body.tipoDelete == "series") {
      fs.writeFileSync(path.join(__dirname, "../database/series.json"), JSON.stringify(filteredproduct, null, 4));
    }

    // if (!novoproduto.length) return;
    // fs.writeFileSync(
    //   path.join(__dirname, "../database/produtos.json"),
    //   JSON.stringify(novoproduto, null, 4)
    // );
  },
  // atualiza produto
  updateOne: (req) => {
    produtos.forEach((produto) => {
      if (produto.id != req.body.idUpdate) return;
      produto.check = req.body.tipoUpdate;
      produto.nome = req.body.nomeUpdate;
      produto.descricao = req.body.descricaoUpdate;
      produto.categoria = req.body.categoriaUpdate;
      produto.classificacao = req.body.classificacaoUpdate;
      produto.valor = req.body.valorUpdate;
      produto.imagem = req.body.imagemUpdate;
      produto.background = req.body.backgroundUpdate;
    });


    fs.writeFileSync(path.join(__dirname, "../database/filmes.json"), JSON.stringify(produtos, null, 4));
  },
};
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
      tipo: req.body.check,
      categoria: req.body.categoria,
      nome: req.body.nome,
      classificacao: req.body.classificacao,
      valor: req.body.valor,
      descricao: req.body.descricao,
      imagem: req.files.imagem[0].filename,
      background: req.files.background[0].filename,
    };

    // console.log(req)
     fs.writeFileSync(path.join(__dirname, "../database/filmes.json"), JSON.stringify(produtos, null, 4));

    if (novoProduto.tipo == "filmes") {
      produtos.push(novoProduto);
      fs.writeFileSync(
        path.join(__dirname, "../database/filmes.json"),
        JSON.stringify(produtos, null, 4));
    } if (novoProduto.tipo == "series")  {
      series.push(novoProduto);
      fs.writeFileSync(
        path.join(__dirname, "../database/series.json"),
        JSON.stringify(series, null, 4));
    }
  },
  //procurar produto
  findOne: (req) => {
    let found = produtos.find(produto => produto.id == req.query.id);
    return found;

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
    const filteredproduct = produtos.filter((produto) => produto.id != req.body.id)
    console.log('produtos', filteredproduct)

    if (req.body.tipo == "filmes") {
      fs.writeFileSync(path.join(__dirname, "../database/filmes.json"), JSON.stringify(filteredproduct, null, 4));
    } if (req.body.tipo == "series")  {
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
      if (produto.id != req.body.id) return;
      produto.check = req.body.check;
      produto.nome = req.body.nome;
      produto.descricao = req.body.descricao;
      produto.categoria = req.body.categoria;
      produto.classificacao = req.body.classificacao;
      produto.valor = req.body.valor;
      produto.imagem = req.body.imagem;
      produto.background = req.body.background;
    });
    
    
    fs.writeFileSync(path.join(__dirname, "../database/filmes.json"), JSON.stringify(produtos, null, 4));
  },
};
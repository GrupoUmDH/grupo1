const produtos = require('../database/filmes.json');
const series = require('../database/series.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    filmes: () => {
        return produtos
    },
    listar: (tipo, categoria) => {
        if(tipo == 'series'){
          if(categoria){
            return series.filter(serie => serie.categoria == categoria)
          }else{
            return series
          }
        }

        if(tipo == 'filmes'){
            if(categoria){
                return produtos.filter(produto => produto.categoria == categoria)
              }else{
                return produtos
              }
        }
    },
    series: () => {
        return series
    },
    escolher: (tipo) => {
        
    }, 
    createOne: (req) => {
        let novoProduto = {
            id: produtos[produtos.length - 1].id + 1,
            nome: req.body.nome,
            descricao: req.body.descricao,
            categoria: req.body.categoria,
            classificacao: req.body.classificacao,
            valor: req.body.valor,
            imagem: req.file.filename
        }
        produtos.push(novoProduto)
        fs.writeFileSync(path.join(__dirname, "../database/filmes.json"), JSON.stringify(produtos, null, 4))
    }
}


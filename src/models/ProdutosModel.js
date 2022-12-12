const produtos = require('../database/filmes.json');
const series = require('../database/series.json');


module.exports = {
    filmes: () => {
        return produtos
    },
    listar: (categoria) => {
        if (categoria) {
            return produtos.filter(produto => produto.categoria == categoria)
        } else {
            return produtos
        }
    },
    series: () => {
        return series
    },
    produtos:() =>{
        return produtos
    }
    // ,
    // escolher:(tipo) =>{
    //     if(filmes){
    //         return produtos.filter(produtos => produtos.tipo == tipo)
    //     }if(series){
    //         return series
    //     }

    // }

}


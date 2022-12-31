const produtos = require('../database/filmes.json');
const series = require('../database/series.json');

module.exports = {
    filmes: () => {
        return produtos
    },
    series: () => {
        return series
    },
    listar: (tipo, categoria) => {

        if(tipo == 'series'){
            if(categoria){
                return series.filter((serie) => serie.categoria == categoria);
            } else {
                return series
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
    }
}


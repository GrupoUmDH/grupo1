const listaFilmes = require('../database/filmesCarrinho.json')

module.exports = {
    index: () => {
        //const lista = localStorage.getItem('carrinho');
        const lista = JSON.parse(listaFilmes);
        return listaFilmes;
    }
}


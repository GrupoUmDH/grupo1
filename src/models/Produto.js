const produtos = require('../database/filmes.json');
module.exports = {
    index: () => {
        let f = {};
        if (produtos.nome == "A MULHER NA JANELA") {
            console.log(produtos.id);
            f = produtos;
            return f;
        }
}}

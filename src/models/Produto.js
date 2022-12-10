const produtos = require('../database/filmes.json');
module.exports = {
    index: (index) => {
        return produtos[index];
        
}}

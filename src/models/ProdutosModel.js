const produtos = require('../database/produtos.json');

module.exports = {
    listar: (categoria) => {
        if(categoria){
            return produtos.filter(produto => produto.categoria == categoria)
        }else{
            return produtos
        }
       
    }
  
}
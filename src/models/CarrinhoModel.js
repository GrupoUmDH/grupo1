let carrinho = require('../database/carrinho.json');

module.exports = {
    index: () => {
        return [
            { img: "credit-card" },
            { img: "pag-seguro" },
            { img: "pix" },
            { img: "boleto" },
        ];
    },
    itens: (itens) => {
        //let itensCarrinho = JSON.parse(localStorage.getItem("carrinho"));
        return itens;
    },
};

const fs = require("fs");
const path = require("path");

const jsonCarrinho = require("../database/filmesCarrinho.json");

module.exports = {
    index() {
        return [
            { img: "credit-card" },
            { img: "pag-seguro" },
            { img: "pix" },
            { img: "boleto" },
        ];
    },
    itens(itens) {
        if (!itens) {
            return jsonCarrinho;
        } else {
            return JSON.parse(itens);
        }
    },
    valores(item) {
        if (item) {
            let content = JSON.parse(item);

            if (content) {
                let soma = 0;
                content.forEach((element) => {
                    soma += parseFloat(element.valor.replace(",", "."));
                    //console.log(parseFloat(element.valor.replace(",", ".")));
                });
                //content = content.filter(a => a.precoComprar);
                return soma.toFixed(2).replace(".", ",");
            } else {
                return null
            }
        } else {
            return "R$ 0,00";
        }
    },
    deletar(ref) {
        //const item = ref;
        //this.itens(attCarrinho);
    },
    attCarrinho (conteudo) {
        //JSON.parse(conteudo);
        fs.writeFileSync(
            path.join(__dirname, "../database/filmesCarrinho.json"),
            JSON.stringify(conteudo, null, 4)
        );
    }
};

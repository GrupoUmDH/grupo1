const path = require("path");
const fs = require("fs");
const jsonCarrinho = require('../database/carrinho.json');

module.exports = {
    index ()  {
        return [
            { img: "credit-card" },
            { img: "pag-seguro" },
            { img: "pix" },
            { img: "boleto" },
        ];
    },
    itens (itens)  {
        if (!itens) {
            return [{}];
        } else {
            return JSON.parse(itens);
        }
        //console.log(itens)
    },
    valores (item) {
        if(item) {
            
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
                return null;
            }
        } else {
            return "R$ 0,00"
        }
        
    },
    deletar (id, ref)  {
        const item = ref;

        const attCarrinho = item.filter((item) => item.id != id);

        console.log(attCarrinho);

        this.atualiza(attCarrinho);

        //redirect('/carinho')
        return attCarrinho;
    },
    atualiza (item) {
        fs.writeFileSync(
            path.join(__dirname, "../database/carrinho.json"),
            JSON.stringify(item, null, 4)
        );
    }

};

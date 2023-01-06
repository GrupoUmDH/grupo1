
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
       
        if(!itens){
            return [{}];
        } else {
            return JSON.parse(itens);
        }
    },
    valores: (item) => {
        let content = JSON.parse(item);
        let soma = 0;
        
        content.forEach(element => {
            soma += parseFloat(element.precoComprar.replace(',','.'))
        })
        //content = content.filter(a => a.precoComprar);
        return soma.toFixed(2).replace(".", ",");
    }
}
